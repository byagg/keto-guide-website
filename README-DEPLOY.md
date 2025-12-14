# Cloudflare Pages Deployment Configuration

## Build Settings

For Cloudflare Pages, configure the following in your Cloudflare Pages dashboard:

- **Build command:** `pnpm install && pnpm build:pages`
- **Build output directory:** `dist/public`
- **Root directory:** `.` (root of repository)
- **Node version:** 18 (specified in .nvmrc)

## Important Notes

1. Make sure `pnpm` is available in the build environment
2. The build creates `dist/public/` directory with:
   - `index.html` - main entry point
   - `assets/` - compiled JS and CSS
   - `images/` - static images
   - `_redirects` - SPA routing rules

3. If you get 404 errors:
   - Verify build command is `pnpm install && pnpm build:pages`
   - Check that output directory is exactly `dist/public` (not `dist` or `public`)
   - Ensure `_redirects` file is in `dist/public/` after build
   - Check build logs in Cloudflare Pages dashboard

## Environment Variables

If you need environment variables, add them in Cloudflare Pages dashboard under Settings > Environment Variables.

## Files Created

- `_redirects` - SPA routing redirects for Cloudflare Pages
- `wrangler.toml` - Cloudflare Workers/Pages configuration
- `cloudflare-pages.json` - Alternative configuration file

## Manual Build

To test the build locally:

```bash
pnpm build:pages
```

This will:
1. Build the Vite app to `dist/public`
2. Copy `_redirects` file to `dist/public/_redirects`

## Troubleshooting

If the site doesn't load (404 error):
1. **Check build command:** Must be `pnpm install && pnpm build:pages`
2. **Verify output directory:** Must be exactly `dist/public` (not `dist` or `public`)
3. **Check build logs:** In Cloudflare Pages dashboard, verify:
   - Build completed successfully
   - Files were uploaded (should see index.html, assets/, images/)
   - No errors in build output
4. **Verify _redirects file:** Should be in `dist/public/_redirects` with content: `/*  /index.html  200`
5. **Alternative:** If `_redirects` doesn't work, Cloudflare Pages Functions (`functions/_middleware.js`) will handle routing

## Common Issues

- **404 on all routes:** Check that `_redirects` or `functions/_middleware.js` is present
- **Build fails:** Ensure Node.js 18+ is available, pnpm is installed
- **Assets not loading:** Check that paths in index.html are relative (not absolute)

