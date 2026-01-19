import type { Plugin } from 'vite';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export function googleTagPlugin(): Plugin {
  return {
    name: 'google-tag',
    transformIndexHtml(html) {
      const tagId = process.env.VITE_GOOGLE_TAG_ID || 'G-ZGK6WJTWBD';
      
      const googleTag = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${tagId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${tagId}');
</script>`;

      // Remove existing Google tag if present (to avoid duplicates)
      let cleanedHtml = html.replace(
        /<!-- Google tag \(gtag\.js\) -->[\s\S]*?gtag\('config', '.*?'\);[\s\S]*?<\/script>/gi,
        ''
      );

      // Insert Google tag right after <head>
      return cleanedHtml.replace(
        /<head[^>]*>/i,
        (match) => `${match}\n${googleTag}`
      );
    },
    writeBundle(options, bundle) {
      if (options.dir) {
        const tagId = process.env.VITE_GOOGLE_TAG_ID || 'G-ZGK6WJTWBD';
        const indexPath = join(options.dir, 'index.html');
        try {
          let html = readFileSync(indexPath, 'utf-8');
          
          const googleTag = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${tagId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${tagId}');
</script>`;

          html = html.replace(
            /<!-- Google tag \(gtag\.js\) -->[\s\S]*?gtag\('config', '.*?'\);[\s\S]*?<\/script>/gi,
            ''
          );

          if (!html.includes(tagId)) {
            html = html.replace(
              /<head[^>]*>/i,
              (match) => `${match}\n${googleTag}`
            );
            
            writeFileSync(indexPath, html, 'utf-8');
          }
        } catch (err) {
          console.error('Error injecting Google tag:', err);
        }
      }
    },
  };
}
