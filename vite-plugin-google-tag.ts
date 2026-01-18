import type { Plugin } from 'vite';

export function googleTagPlugin(): Plugin {
  return {
    name: 'google-tag',
    transformIndexHtml(html) {
      const googleTag = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGK6WJTWBD"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZGK6WJTWBD');
    </script>`;

      // Insert Google tag right after <head>
      return html.replace(
        /<head[^>]*>/i,
        `$&${googleTag}`
      );
    },
  };
}
