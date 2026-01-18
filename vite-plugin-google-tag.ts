import type { Plugin } from 'vite';

export function googleTagPlugin(): Plugin {
  return {
    name: 'google-tag',
    transformIndexHtml: {
      enforce: 'pre',
      transform(html, ctx) {
        // Check if Google tag already exists
        if (html.includes('G-ZGK6WJTWBD')) {
          return html;
        }

        const googleTag = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGK6WJTWBD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZGK6WJTWBD');
</script>`;

        // Insert Google tag right after <body> (more reliable)
        if (html.includes('<body')) {
          return html.replace(
            /<body[^>]*>/i,
            (match) => `${match}\n${googleTag}`
          );
        }
        // Fallback: Insert after <head>
        return html.replace(
          /<head[^>]*>/i,
          (match) => `${match}\n${googleTag}`
        );
      },
    },
  };
}
