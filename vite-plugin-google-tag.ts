import type { Plugin } from 'vite';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export function googleTagPlugin(): Plugin {
  return {
    name: 'google-tag',
    transformIndexHtml(html) {
      // Always ensure Google tag is present
      const googleTag = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGK6WJTWBD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZGK6WJTWBD');
</script>`;

      // Remove existing Google tag if present (to avoid duplicates)
      let cleanedHtml = html.replace(
        /<!-- Google tag \(gtag\.js\) -->[\s\S]*?gtag\('config', 'G-ZGK6WJTWBD'\);[\s\S]*?<\/script>/gi,
        ''
      );

      // Insert Google tag right after <head> (as per Google's recommendation)
      return cleanedHtml.replace(
        /<head[^>]*>/i,
        (match) => `${match}\n${googleTag}`
      );
    },
    writeBundle(options, bundle) {
      // Also inject into built HTML file as a safety measure
      if (options.dir) {
        const indexPath = join(options.dir, 'index.html');
        try {
          let html = readFileSync(indexPath, 'utf-8');
          
          // Check if Google tag already exists
          if (!html.includes('G-ZGK6WJTWBD')) {
            const googleTag = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGK6WJTWBD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZGK6WJTWBD');
</script>`;

            html = html.replace(
              /<head[^>]*>/i,
              (match) => `${match}\n${googleTag}`
            );
            
            writeFileSync(indexPath, html, 'utf-8');
          }
        } catch (err) {
          // Ignore errors
        }
      }
    },
  };
}
