# Cloudflare Pages Deployment Checklist

## ✅ Critical Settings in Cloudflare Pages Dashboard

Go to: **Cloudflare Dashboard > Pages > Your Project > Settings > Builds & deployments**

### Build Configuration:
1. **Build command:** `pnpm build:pages`
   - This command builds the Vite app and copies _redirects file
   
2. **Build output directory:** `dist/public`
   - ⚠️ MUST be exactly `dist/public` (not `dist` or `public`)
   - This is where Vite builds the files

3. **Root directory:** `.` (leave empty or set to `.`)

4. **Node.js version:** 18 (or leave default)

### Environment Variables:
- No environment variables needed for basic deployment
- If you need analytics, add them in Settings > Environment Variables

## 🔍 Verification Steps

### 1. Check Build Logs
After deployment, check the build logs:
- Should see: "✓ built in X.XXs"
- Should see: "Build complete. Output in dist/public/"
- Should see files being uploaded: index.html, assets/, images/

### 2. Verify Uploaded Files
In build logs, you should see:
```
Uploading... (X/104)
✨ Success! Uploaded 104 files
```

### 3. Check File Structure
After build, `dist/public/` should contain:
- `index.html` ✓
- `_redirects` ✓
- `assets/` directory ✓
- `images/` directory ✓

## 🐛 Troubleshooting 404 Errors

### If you get 404 on keto-guide-website.pages.dev:

1. **Check Build Command:**
   - Must be: `pnpm pages:build`
   - Or: `pnpm install && pnpm build:pages`

2. **Check Output Directory:**
   - Must be exactly: `dist/public`
   - NOT: `dist` or `public` or `dist/public/` (with trailing slash)

3. **Check Build Logs:**
   - Open the failed build in Cloudflare Pages
   - Look for errors
   - Verify that files were uploaded

4. **Verify _redirects file:**
   - Should be in `dist/public/_redirects`
   - Content: `/*  /index.html  200`

5. **Try Manual Retry:**
   - In Cloudflare Pages dashboard
   - Go to Deployments
   - Click "Retry deployment" on the latest build

6. **Check Custom Domain (if configured):**
   - Go to Custom domains in Pages settings
   - Verify domain is properly connected
   - Check DNS records are correct

## 📝 Common Issues

### Issue: "No build command specified"
**Solution:** Set build command to `pnpm pages:build`

### Issue: "Build output directory not found"
**Solution:** Verify output directory is `dist/public` (exact match)

### Issue: "404 on all routes"
**Solution:** 
- Check that `_redirects` file exists in `dist/public/`
- Verify `functions/_middleware.js` is present
- Check build logs to ensure files were uploaded

### Issue: "Assets not loading"
**Solution:** 
- Verify `assets/` directory is in `dist/public/`
- Check that paths in index.html are relative (not absolute)

## 🔄 After Making Changes

1. Push changes to GitHub
2. Cloudflare Pages will auto-deploy
3. Wait for build to complete (usually 1-2 minutes)
4. Check deployment status in dashboard
5. Visit your site URL

## 📞 Still Not Working?

If the site still shows 404 after checking all above:
1. Share the build logs from Cloudflare Pages dashboard
2. Verify the build actually completed successfully
3. Check if there are any error messages in the logs
4. Try creating a new deployment manually

