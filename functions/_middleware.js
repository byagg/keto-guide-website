/**
 * Cloudflare Pages Functions middleware for SPA routing
 * This ensures all routes are handled by index.html
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  
  // Skip if it's a file with extension (like .js, .css, .png, etc.)
  if (pathname.match(/\.[a-zA-Z0-9]+$/)) {
    return context.next();
  }
  
  // Skip if it's already index.html or root
  if (pathname === '/index.html' || pathname === '/') {
    return context.next();
  }
  
  // For all other routes, serve index.html (SPA routing)
  // Rewrite the request to serve index.html
  const newUrl = new URL('/index.html', url.origin);
  const newRequest = new Request(newUrl, context.request);
  return context.next({
    request: newRequest
  });
}
