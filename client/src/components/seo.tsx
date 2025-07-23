import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { seoData, type SEOData } from '@/data/seo-data';

interface SEOProps {
  pagePath?: string;
  customSEO?: Partial<SEOData>;
}

const SEO: React.FC<SEOProps> = ({ pagePath, customSEO }) => {
  const [location] = useLocation();
  
  // Use current path directly - no state needed
  const currentPath = pagePath || location;

  // Get SEO data for current path using useMemo to optimize performance
  const seo = useMemo(() => {
    const defaultSEO: SEOData = {
      pageTitle: "NIDDIKKARE LLP - Healthcare & Life Sciences Innovation",
      metaDescription: "NIDDIKKARE LLP specializes in healthcare and life sciences solutions including neonatal care, medical linens, DNA/RNA extraction, and molecular diagnostics.",
      metaKeywords: "NIDDIKKARE, healthcare, life sciences, neonatal care, medical linens, DNA RNA extraction, molecular diagnostics",
      ogTitle: "NIDDIKKARE LLP - Healthcare & Life Sciences Innovation",
      ogDescription: "Leading healthcare and life sciences solutions provider specializing in innovative products for medical facilities worldwide.",
      ogImage: "https://niddikkare.com/assets/images/niddikkare-logo.png",
      ogType: "website",
      canonicalUrl: `https://niddikkare.com${currentPath}`,
      robotsDirective: "index,follow",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NIDDIKKARE LLP",
        "url": "https://niddikkare.com"
      }
    };

    // Merge page-specific SEO data with custom overrides
    return {
      ...defaultSEO,
      ...(seoData[currentPath] || {}),
      ...(customSEO || {})
    };
  }, [currentPath, customSEO]);

  // Convert structured data to JSON string if it's an object
  const structuredDataJson = typeof seo.structuredData === 'object' 
    ? JSON.stringify(seo.structuredData)
    : seo.structuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.pageTitle}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="keywords" content={seo.metaKeywords} />
      <meta name="robots" content={seo.robotsDirective} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:site_name" content="NIDDIKKARE LLP" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.ogDescription} />
      <meta name="twitter:image" content={seo.ogImage} />
      <meta name="twitter:site" content="@niddikkare" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="en" />
      <meta name="author" content="NIDDIKKARE LLP" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#2d5016" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/assets/images/favicon/favicon.png" />
      <link rel="apple-touch-icon" href="/assets/images/favicon/favicon.png" />
      
      {/* Structured Data (JSON-LD) */}
      {structuredDataJson && (
        <script type="application/ld+json">
          {structuredDataJson}
        </script>
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;