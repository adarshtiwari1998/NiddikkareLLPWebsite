import React, { useMemo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { seoData, type SEOData } from '@/data/seo-data';

interface SEOProps {
  pagePath?: string;
  customSEO?: Partial<SEOData>;
}

const SEO: React.FC<SEOProps> = ({ pagePath, customSEO }) => {
  const [location] = useLocation();
  const [forceUpdate, setForceUpdate] = useState(0);
  
  // Use current path directly - no state needed
  const currentPath = pagePath || location;

  // Force re-render when location changes
  useEffect(() => {
    console.log(`[SEO Component] Route changed to: ${currentPath}`);
    setForceUpdate(prev => prev + 1);
    
    // Get the expected SEO data for this path
    const expectedSEO = {
      ...(seoData[currentPath] || seoData['/'] || {}),
      ...(customSEO || {})
    };
    
    // Immediate DOM update for faster response
    if (expectedSEO.pageTitle) {
      document.title = expectedSEO.pageTitle;
      console.log(`[SEO Component] Updated title immediately: "${expectedSEO.pageTitle}"`);
    }
    
    // Update meta tags immediately
    if (expectedSEO.metaDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', expectedSEO.metaDescription);
    }
    
    // Update OG tags immediately
    if (expectedSEO.ogTitle) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', expectedSEO.ogTitle);
    }
    
    if (expectedSEO.ogDescription) {
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', expectedSEO.ogDescription);
    }
    
    if (expectedSEO.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', expectedSEO.canonicalUrl);
    }
    
    // Force React Helmet to re-process after a small delay
    setTimeout(() => {
      setForceUpdate(prev => prev + 1);
      console.log(`[SEO Component] Forced Helmet update for: ${currentPath}`);
    }, 100);
    
    // Final verification after React Helmet processes
    setTimeout(() => {
      console.log(`[SEO Component] Final document title: "${document.title}"`);
      if (expectedSEO.pageTitle && document.title !== expectedSEO.pageTitle) {
        document.title = expectedSEO.pageTitle;
        console.log(`[SEO Component] Final title correction applied`);
      }
    }, 500);
  }, [currentPath, customSEO]);

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
    const mergedSEO = {
      ...defaultSEO,
      ...(seoData[currentPath] || {}),
      ...(customSEO || {})
    };

    console.log(`[SEO Component] SEO data for ${currentPath}:`, {
      title: mergedSEO.pageTitle,
      hasPageData: !!seoData[currentPath]
    });

    return mergedSEO;
  }, [currentPath, customSEO, forceUpdate]);

  // Convert structured data to JSON string if it's an object
  const structuredDataJson = typeof seo.structuredData === 'object' 
    ? JSON.stringify(seo.structuredData)
    : seo.structuredData;

  // Force React Helmet to re-render by using currentPath and forceUpdate as key
  return (
    <Helmet key={`${currentPath}-${forceUpdate}`}>
      {/* Basic Meta Tags */}
      <title>{seo.pageTitle}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="keywords" content={seo.metaKeywords} />
      <meta name="robots" content={seo.robotsDirective} />
      
      {/* Force removal of old tags and add new ones */}
      <meta name="seo-version" content={forceUpdate.toString()} />
      
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