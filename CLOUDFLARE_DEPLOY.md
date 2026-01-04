# Cloudflare Pages Deployment Instructions

## Build Configuration

When setting up your Cloudflare Pages project, use these settings:

### Build Settings
- **Build command:** `pnpm build:pages`
- **Build output directory:** `dist/public`
- **Root directory:** (leave empty or `/`)

### Environment Variables
No environment variables are required for this static site.

## Build Process

The `pnpm build:pages` command runs `vite build` which:
1. Builds the React application
2. Outputs static files to `dist/public/`
3. Includes `_redirects` file for SPA routing
4. Includes `_headers` file for security headers

## SPA Routing

The `_redirects` file ensures all routes are handled by the React Router (wouter):
```
/* /index.html 200
```

This allows direct navigation to routes like `/science`, `/benefits`, etc.

## Troubleshooting

If deployment fails with "build:pages: not found":
- Make sure the build command is `pnpm build:pages` (not just `build:pages`)
- Verify the package.json includes the script: `"build:pages": "vite build"`

If pages show 404 errors:
- Verify `_redirects` file exists in `dist/public/` after build
- Check that build output directory is set to `dist/public`
