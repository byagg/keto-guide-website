/**
 * Script to upload local images to Cloudflare R2 and store metadata in D1
 * 
 * Usage: pnpm tsx scripts/upload-images-to-cloudflare.ts
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { uploadImageToR2, storeImageMetadata, isCloudflareConfigured } from "../server/cloudflare.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ImageMetadata {
  id: string;
  filename: string;
  title: string;
  description: string;
  alt: string;
  category: string;
  usedIn: string[];
  path: string;
  keywords: string[];
}

async function uploadImages() {
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

  // Read images metadata
  const imagesPath = join(__dirname, "../server/images.json");
  const imagesData = JSON.parse(readFileSync(imagesPath, "utf-8"));
  const images: ImageMetadata[] = imagesData.images || [];

  // Read images directory
  const imagesDir = join(__dirname, "../client/public/images");
  const files = readdirSync(imagesDir);

  console.log(`📤 Uploading ${images.length} images to Cloudflare R2...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const imageMeta of images) {
    const filePath = join(imagesDir, imageMeta.filename);
    
    if (!files.includes(imageMeta.filename)) {
      console.log(`⚠️  Skipping ${imageMeta.filename} - file not found`);
      failCount++;
      continue;
    }

    try {
      // Read image file
      const imageBuffer = readFileSync(filePath);
      const contentType = imageMeta.filename.endsWith(".png") ? "image/png" : 
                          imageMeta.filename.endsWith(".jpg") || imageMeta.filename.endsWith(".jpeg") ? "image/jpeg" :
                          "image/png";

      // Upload to R2
      console.log(`📤 Uploading ${imageMeta.filename}...`);
      const cloudflareUrl = await uploadImageToR2(imageBuffer, imageMeta.filename, contentType);

      if (cloudflareUrl) {
        // Store metadata in D1
        await storeImageMetadata({
          ...imageMeta,
          cloudflareUrl,
          uploadedAt: new Date().toISOString(),
        });

        console.log(`✅ Uploaded: ${cloudflareUrl}`);
        successCount++;
      } else {
        console.log(`❌ Failed to upload ${imageMeta.filename}`);
        failCount++;
      }
    } catch (error) {
      console.error(`❌ Error uploading ${imageMeta.filename}:`, error);
      failCount++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📦 Total: ${images.length}`);
}

uploadImages().catch(console.error);

