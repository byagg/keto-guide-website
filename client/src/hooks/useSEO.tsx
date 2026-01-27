import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  canonical?: string;
}

const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://ketomindset.org";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-ketomindset.jpg`;
const DEFAULT_TITLE = "KetoMindset | Complete Ketogenic Diet Guide";
const DEFAULT_DESCRIPTION =
  "A science-based ketogenic diet guide: how keto works, benefits & risks, beginner steps, recipes, and tools like a keto macro calculator.";

export function useSEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  noindex = false,
  canonical,
}: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | KetoMindset` : DEFAULT_TITLE;
    const fullDescription = description || DEFAULT_DESCRIPTION;
    const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
    const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : fullUrl;

    // Update title
    document.title = fullTitle;

    // Remove existing meta tags
    const existingMetaTags = document.querySelectorAll('meta[data-seo]');
    existingMetaTags.forEach(tag => tag.remove());

    // Helper function to create or update meta tag
    const setMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
      meta.setAttribute('data-seo', 'true');
    };

    // Basic meta tags
    setMetaTag('description', fullDescription);
    
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    }

    // Open Graph tags
    setMetaTag('og:title', fullTitle, 'property');
    setMetaTag('og:description', fullDescription, 'property');
    setMetaTag('og:image', image, 'property');
    setMetaTag('og:url', fullUrl, 'property');
    setMetaTag('og:type', type, 'property');
    setMetaTag('og:site_name', 'KetoMindset', 'property');

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', fullDescription);
    setMetaTag('twitter:image', image);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
    canonicalLink.setAttribute('data-seo', 'true');

    // Cleanup function
    return () => {
      // Optionally clean up on unmount, but usually we want to keep them
    };
  }, [title, description, image, url, type, noindex, canonical]);
}
