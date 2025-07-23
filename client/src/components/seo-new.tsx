import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { useEffect } from 'react';
import { seoData, type SEOData } from '@/data/seo-data';

interface SEOProps {
  pagePath?: string;
  fallback?: Partial<SEOData>;
}

export const SEO: React.FC<SEOProps> = ({ pagePath, fallback }) => {
  const [location] = useLocation();
  const currentPath = pagePath || location;

  // Get SEO data for the current path
  const pageSeoData = seoData[currentPath];
  
  // Use page data, fallback, or default
  const seo: SEOData = pageSeoData || fallback || seoData['/'];

  // Parse structured data if it exists
  let structuredDataObj = null;
  if (seo.structuredData) {
    try {
      structuredDataObj = typeof seo.structuredData === 'string' 
        ? JSON.parse(seo.structuredData) 
        : seo.structuredData;
    } catch (error) {
      console.error('Error parsing structured data:', error);
    }
  }

  const baseUrl = "https://niddikkare.com";
  const fullUrl = seo.canonicalUrl || `${baseUrl}${currentPath}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.pageTitle}</title>
      <meta name="description" content={seo.metaDescription} />
      {seo.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}
      {seo.robotsDirective && <meta name="robots" content={seo.robotsDirective} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seo.ogTitle || seo.pageTitle} />
      <meta property="og:description" content={seo.ogDescription || seo.metaDescription} />
      <meta property="og:type" content={seo.ogType || 'website'} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="NIDDIKKARE LLP" />
      {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.ogTitle || seo.pageTitle} />
      <meta name="twitter:description" content={seo.ogDescription || seo.metaDescription} />
      <meta name="twitter:site" content="@niddikkare" />
      {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Viewport and charset */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="en" />
      <meta name="author" content="NIDDIKKARE LLP" />

      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon.png" />
      <link rel="shortcut icon" href="/assets/images/favicon/favicon.png" />

      {/* Schema.org Structured Data */}
      {structuredDataObj && (
        <script type="application/ld+json">
          {JSON.stringify(structuredDataObj, null, 2)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;