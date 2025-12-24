/**
 * Script to upload a single file to Cloudflare R2.
 *
 * Usage:
 *   pnpm tsx scripts/upload-file-to-cloudflare.ts /path/to/file.pdf [r2-key]
 */

import { readFileSync } from "fs";
import { basename } from "path";
import { uploadToCloudflare, isCloudflareConfigured } from "../server/cloudflare.js";

function getContentType(filename: string) {
  if (filename.endsWith(".pdf")) {
    return "application/pdf";
  }
  if (filename.endsWith(".png")) {
    return "image/png";
  }
  if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) {
    return "image/jpeg";
  }
  return "application/octet-stream";
}

async function uploadFile() {
  if (!isCloudflareConfigured()) {
    console.error("❌ Cloudflare not configured. Please set CLOUDFLARE_* environment variables.");
    console.log("\nRequired variables:");
    console.log("  - CLOUDFLARE_ACCOUNT_ID");
    console.log("  - CLOUDFLARE_R2_ACCESS_KEY_ID");
    console.log("  - CLOUDFLARE_R2_SECRET_ACCESS_KEY");
    console.log("  - CLOUDFLARE_R2_BUCKET_NAME");
    console.log("  - CLOUDFLARE_R2_PUBLIC_URL");
    process.exit(1);
  }

  const filePath = process.argv[2];
  if (!filePath) {
    console.error("❌ Missing file path.");
    console.log("Usage: pnpm tsx scripts/upload-file-to-cloudflare.ts /path/to/file.pdf [r2-key]");
    process.exit(1);
  }

  const key = process.argv[3] || basename(filePath);
  const buffer = readFileSync(filePath);
  const contentType = getContentType(key);

  console.log(`📤 Uploading ${filePath} as ${key}...`);
  const cloudflareUrl = await uploadToCloudflare(buffer, key, contentType);

  if (!cloudflareUrl) {
    console.error("❌ Upload failed.");
    process.exit(1);
  }

  console.log(`✅ Uploaded: ${cloudflareUrl}`);
}

uploadFile().catch((error) => {
  console.error("❌ Unexpected error:", error);
  process.exit(1);
});
