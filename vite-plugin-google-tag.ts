import type { Plugin } from 'vite';

export function googleTagPlugin(): Plugin {
  return {
    name: 'google-tag',
    transformIndexHtml(html) {
      // Always ensure Google tag is present, even if it exists
      // This ensures it's in the built HTML
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
  };
}
