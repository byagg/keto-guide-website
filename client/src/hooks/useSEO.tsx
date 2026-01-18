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

const SITE_URL = 'https://ketomindset.org';
const DEFAULT_IMAGE = `${SITE_URL}/images/keto-salmon-avocado.jpg`;
const DEFAULT_TITLE = 'Complete Ketogenic Diet Guide 2025 | KetoMindset';
const DEFAULT_DESCRIPTION = 'Discover how the ketogenic diet transforms metabolism, supports weight loss, and improves mental clarity. Science-based guide for beginners and advanced users.';

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
