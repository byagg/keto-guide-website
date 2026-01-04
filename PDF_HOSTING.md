# PDF File Hosting Instructions

## Problem
The 7-day-keto-plan.pdf file is 30MB, which exceeds the git repository size limit (30MB).

## Solutions

### Option 1: Enable Public Access on Cloudflare R2 (Recommended)
1. Go to Cloudflare Dashboard → R2
2. Open your bucket containing the PDF
3. Find the file: `keto-pdf/7-day-keto-plan.pdf`
4. Enable public access for this file or the entire bucket
5. The current URL should work: `https://pub-a7352293629341aba0c417463676ed63.r2.dev/keto-pdf/7-day-keto-plan.pdf`

### Option 2: Upgrade to web-db-user
1. Use `webdev_add_feature` with feature="web-db-user"
2. Upload PDF via File Storage in Management UI
3. Update the URL in `client/src/components/Navigation.tsx`

### Option 3: Compress the PDF
1. Reduce PDF file size to under 30MB using a PDF compressor
2. Place compressed file in `client/public/`
3. Update URL to `/7-day-keto-plan.pdf` in Navigation component

### Option 4: Use External Hosting
- Upload to: Google Drive, Dropbox, or other file hosting service
- Get public download link
- Update URL in `client/src/components/Navigation.tsx`

## Current Configuration
The button in `client/src/components/Navigation.tsx` currently points to:
```javascript
window.open('https://pub-a7352293629341aba0c417463676ed63.r2.dev/keto-pdf/7-day-keto-plan.pdf', '_blank');
```

Update this URL once you've chosen a hosting solution.
