# Cloudflare Pages Deployment Configuration

## Build Settings

For Cloudflare Pages, configure the following in your Cloudflare Pages dashboard:

- **Build command:** `pnpm build:pages`
- **Build output directory:** `dist/public`
- **Root directory:** `.` (root of repository)
- **Node version:** 18 or higher

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

If the site doesn't load:
1. Check that build command is set to `pnpm build:pages`
2. Verify output directory is `dist/public`
3. Ensure `_redirects` file is in `dist/public/` after build
4. Check Cloudflare Pages build logs for errors

