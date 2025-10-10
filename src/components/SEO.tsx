import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Natuur Dak B.V. - Experts in Dakgras & Groene Daken Nederland",
  description = "Specialist in dakgras, groene daken en kunstgras installaties. Professionele dakbegroening voor platte en hellende daken in heel Nederland. Gratis offerte!",
  keywords = "dakgras, groene daken, kunstgras, dakbegroening, sedumdak, extensief groen dak, Nederland, duurzaam bouwen",
  ogImage = "https://natuurdak.nl/images/og-image.jpg",
  ogType = "website",
  canonicalUrl,
  structuredData,
  noIndex = false
}) => {
  useEffect(() => {
    // SEO: Update document title
    document.title = title;

    // SEO: Update meta description
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // SEO: Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:type', ogType);
    
    // SEO: Update Twitter tags
    updateMetaTag('property', 'twitter:title', title);
    updateMetaTag('property', 'twitter:description', description);
    updateMetaTag('property', 'twitter:image', ogImage);

    // SEO: Update canonical URL if provided
    if (canonicalUrl) {
      updateCanonicalUrl(canonicalUrl);
      updateMetaTag('property', 'og:url', canonicalUrl);
      updateMetaTag('property', 'twitter:url', canonicalUrl);
    }

    // SEO: Add structured data if provided
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, structuredData, noIndex]);

  // Helper function to update meta tags
  const updateMetaTag = (attribute: string, value: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;
    
    if (element) {
      element.content = content;
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, value);
      element.content = content;
      document.head.appendChild(element);
    }
  };

  // Helper function to update canonical URL
  const updateCanonicalUrl = (url: string) => {
    let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (element) {
      element.href = url;
    } else {
      element = document.createElement('link');
      element.rel = 'canonical';
      element.href = url;
      document.head.appendChild(element);
    }
  };

  // Helper function to add structured data
  const addStructuredData = (data: object) => {
    // Remove existing structured data for this page
    const existingScript = document.querySelector('script[data-page-structured-data]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-structured-data', 'true');
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  return null; // This component doesn't render anything
};

export default SEO;