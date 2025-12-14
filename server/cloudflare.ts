/**
 * Cloudflare R2 and D1 integration for storing images and metadata
 */

interface CloudflareConfig {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucketName: string;
  publicUrl: string;
  d1DatabaseId?: string;
  d1ApiToken?: string;
}

interface ImageMetadata {
  id: string;
  filename: string;
  title: string;
  description: string;
  alt: string;
  category: string;
  usedIn: string[];
  path: string;
  cloudflareUrl?: string;
  keywords: string[];
  uploadedAt?: string;
}

// Get Cloudflare config from environment variables
function getCloudflareConfig(): CloudflareConfig | null {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
  const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME;
  const publicUrl = process.env.CLOUDFLARE_R2_PUBLIC_URL;
  const d1DatabaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
  const d1ApiToken = process.env.CLOUDFLARE_D1_API_TOKEN;

  if (!accountId || !accessKeyId || !secretAccessKey || !bucketName || !publicUrl) {
    return null;
  }

  return {
    accountId,
    accessKeyId,
    secretAccessKey,
    bucketName,
    publicUrl,
    d1DatabaseId,
    d1ApiToken,
  };
}

/**
 * Upload image to Cloudflare R2
 */
async function uploadImageToR2(
  imageBuffer: Buffer,
  filename: string,
  contentType: string = "image/png"
): Promise<string | null> {
  const config = getCloudflareConfig();
  if (!config) {
    console.warn("Cloudflare R2 not configured. Set CLOUDFLARE_* environment variables.");
    return null;
  }

  try {
    // R2 is S3-compatible, so we use S3 API
    const endpoint = `https://${config.accountId}.r2.cloudflarestorage.com`;
    const url = `${endpoint}/${config.bucketName}/${filename}`;

    // Create signature for S3-compatible request
    const crypto = await import("crypto");
    const date = new Date().toISOString().replace(/[:\-]|\.\d{3}/g, "");
    const dateStamp = date.substr(0, 8);

    // For simplicity, we'll use a basic PUT request with credentials
    // In production, you should use proper AWS S3 SDK or sign the request
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": contentType,
        "x-amz-date": date,
        Authorization: `AWS ${config.accessKeyId}:${await generateSignature(
          config.secretAccessKey,
          "PUT",
          `/${config.bucketName}/${filename}`,
          date,
          contentType
        )}`,
      },
      body: imageBuffer,
    });

    if (!response.ok) {
      throw new Error(`R2 upload failed: ${response.status} ${response.statusText}`);
    }

    return `${config.publicUrl}/${filename}`;
  } catch (error) {
    console.error("Error uploading to R2:", error);
    return null;
  }
}

/**
 * Generate AWS signature for S3-compatible request
 */
async function generateSignature(
  secretKey: string,
  method: string,
  path: string,
  date: string,
  contentType: string
): Promise<string> {
  const crypto = await import("crypto");
  const dateStamp = date.substr(0, 8);
  const kDate = crypto.createHmac("sha256", `AWS4${secretKey}`).update(dateStamp).digest();
  const kRegion = crypto.createHmac("sha256", kDate).update("auto").digest();
  const kService = crypto.createHmac("sha256", kRegion).update("s3").digest();
  const kSigning = crypto.createHmac("sha256", kService).update("aws4_request").digest();

  const canonicalRequest = [
    method,
    path,
    "",
    `content-type:${contentType}`,
    `x-amz-date:${date}`,
    "",
    "content-type;x-amz-date",
    crypto.createHash("sha256").update("").digest("hex"),
  ].join("\n");

  const stringToSign = [
    "AWS4-HMAC-SHA256",
    date,
    `${dateStamp}/auto/s3/aws4_request`,
    crypto.createHash("sha256").update(canonicalRequest).digest("hex"),
  ].join("\n");

  return crypto.createHmac("sha256", kSigning).update(stringToSign).digest("hex");
}

/**
 * Upload image to Cloudflare R2 (exported alias)
 */
export const uploadToCloudflare = uploadImageToR2;

/**
 * Store image metadata in Cloudflare D1
 */
export async function storeImageMetadata(metadata: ImageMetadata): Promise<boolean> {
  const config = getCloudflareConfig();
  if (!config || !config.d1DatabaseId || !config.d1ApiToken) {
    console.warn("Cloudflare D1 not configured. Metadata will be stored locally only.");
    return false;
  }

  try {
    const url = `https://api.cloudflare.com/client/v4/accounts/${config.accountId}/d1/database/${config.d1DatabaseId}/query`;

    // Create table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS images (
        id TEXT PRIMARY KEY,
        filename TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        alt TEXT,
        category TEXT,
        usedIn TEXT,
        path TEXT,
        cloudflareUrl TEXT,
        keywords TEXT,
        uploadedAt TEXT
      )
    `;

    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.d1ApiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sql: createTableQuery,
      }),
    });

    // Insert or update metadata
    const insertQuery = `
      INSERT OR REPLACE INTO images (
        id, filename, title, description, alt, category, usedIn, path, cloudflareUrl, keywords, uploadedAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.d1ApiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sql: insertQuery,
        params: [
          metadata.id,
          metadata.filename,
          metadata.title,
          metadata.description,
          metadata.alt,
          metadata.category,
          JSON.stringify(metadata.usedIn),
          metadata.path,
          metadata.cloudflareUrl || "",
          JSON.stringify(metadata.keywords),
          metadata.uploadedAt || new Date().toISOString(),
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`D1 insert failed: ${response.status} ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error("Error storing metadata in D1:", error);
    return false;
  }
}

/**
 * Get image metadata from Cloudflare D1
 */
export async function getImageMetadata(id?: string, category?: string, usedIn?: string): Promise<ImageMetadata[]> {
  const config = getCloudflareConfig();
  if (!config || !config.d1DatabaseId || !config.d1ApiToken) {
    return [];
  }

  try {
    const url = `https://api.cloudflare.com/client/v4/accounts/${config.accountId}/d1/database/${config.d1DatabaseId}/query`;

    let sql = "SELECT * FROM images WHERE 1=1";
    const params: any[] = [];

    if (id) {
      sql += " AND id = ?";
      params.push(id);
    }

    if (category) {
      sql += " AND category = ?";
      params.push(category);
    }

    if (usedIn) {
      sql += " AND usedIn LIKE ?";
      params.push(`%${usedIn}%`);
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.d1ApiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sql,
        params,
      }),
    });

    if (!response.ok) {
      throw new Error(`D1 query failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const results = data.result?.[0]?.results || [];

    return results.map((row: any) => ({
      id: row.id,
      filename: row.filename,
      title: row.title,
      description: row.description,
      alt: row.alt,
      category: row.category,
      usedIn: JSON.parse(row.usedIn || "[]"),
      path: row.path,
      cloudflareUrl: row.cloudflareUrl,
      keywords: JSON.parse(row.keywords || "[]"),
      uploadedAt: row.uploadedAt,
    }));
  } catch (error) {
    console.error("Error fetching metadata from D1:", error);
    return [];
  }
}

/**
 * Check if Cloudflare is configured
 */
export function isCloudflareConfigured(): boolean {
  return getCloudflareConfig() !== null;
}

