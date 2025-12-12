import { useEffect } from 'react';
import { useLocation } from 'wouter';

const SUPPORTED_LANGUAGES = ['en', 'es', 'cn', 'sk'];
const BASE_URL = typeof window !== 'undefined' ? window.location.origin : '';

export function HreflangTags() {
  const [location] = useLocation();

  useEffect(() => {
    // Remove existing hreflang tags
    const existingTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingTags.forEach(tag => tag.remove());

    // Get current path without language prefix
    const pathSegments = location.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    const hasLanguagePrefix = SUPPORTED_LANGUAGES.includes(firstSegment);
    const pathWithoutLang = hasLanguagePrefix 
      ? pathSegments.slice(1).join('/')
      : pathSegments.join('/');
    
    const basePath = pathWithoutLang ? `/${pathWithoutLang}` : '';

    // Add hreflang tags for each language
    SUPPORTED_LANGUAGES.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${BASE_URL}/${lang}${basePath}`;
      document.head.appendChild(link);
    });

    // Add x-default hreflang pointing to English
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${BASE_URL}/en${basePath}`;
    document.head.appendChild(defaultLink);

    // Update html lang attribute
    const currentLang = hasLanguagePrefix ? firstSegment : 'en';
    document.documentElement.lang = currentLang;

    return () => {
      // Cleanup on unmount
      const tags = document.querySelectorAll('link[rel="alternate"][hreflang]');
      tags.forEach(tag => tag.remove());
    };
  }, [location]);

  return null;
}

