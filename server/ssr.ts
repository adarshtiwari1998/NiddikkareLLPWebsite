import { seoData } from "../client/src/data/seo-data.js";

// SSR Helper to generate page-specific HTML with proper SEO metadata
export function generateSSRHTML(url: string, baseTemplate: string): string {
  // Get SEO data for the current path
  const pathSEO = seoData[url] || seoData["/"];
  
  // Replace placeholders in the HTML template with page-specific metadata
  let ssrHTML = baseTemplate;
  
  // Replace title
  ssrHTML = ssrHTML.replace(
    /<title>.*?<\/title>/i,
    `<title>${pathSEO.pageTitle}</title>`
  );
  
  // Replace meta description
  ssrHTML = ssrHTML.replace(
    /<meta name="description" content=".*?"[^>]*>/i,
    `<meta name="description" content="${pathSEO.metaDescription}" />`
  );
  
  // Replace meta keywords
  ssrHTML = ssrHTML.replace(
    /<meta name="keywords" content=".*?"[^>]*>/i,
    `<meta name="keywords" content="${pathSEO.metaKeywords}" />`
  );
  
  // Replace robots directive
  ssrHTML = ssrHTML.replace(
    /<meta name="robots" content=".*?"[^>]*>/i,
    `<meta name="robots" content="${pathSEO.robotsDirective}" />`
  );
  
  // Replace Open Graph title
  ssrHTML = ssrHTML.replace(
    /<meta property="og:title" content=".*?"[^>]*>/i,
    `<meta property="og:title" content="${pathSEO.ogTitle}" />`
  );
  
  // Replace Open Graph description
  ssrHTML = ssrHTML.replace(
    /<meta property="og:description" content=".*?"[^>]*>/i,
    `<meta property="og:description" content="${pathSEO.ogDescription}" />`
  );
  
  // Replace Open Graph image
  ssrHTML = ssrHTML.replace(
    /<meta property="og:image" content=".*?"[^>]*>/i,
    `<meta property="og:image" content="${pathSEO.ogImage}" />`
  );
  
  // Replace Open Graph type
  ssrHTML = ssrHTML.replace(
    /<meta property="og:type" content=".*?"[^>]*>/i,
    `<meta property="og:type" content="${pathSEO.ogType}" />`
  );
  
  // Replace Open Graph URL
  ssrHTML = ssrHTML.replace(
    /<meta property="og:url" content=".*?"[^>]*>/i,
    `<meta property="og:url" content="${pathSEO.canonicalUrl}" />`
  );
  
  // Replace Twitter card title
  ssrHTML = ssrHTML.replace(
    /<meta name="twitter:title" content=".*?"[^>]*>/i,
    `<meta name="twitter:title" content="${pathSEO.ogTitle}" />`
  );
  
  // Replace Twitter card description
  ssrHTML = ssrHTML.replace(
    /<meta name="twitter:description" content=".*?"[^>]*>/i,
    `<meta name="twitter:description" content="${pathSEO.ogDescription}" />`
  );
  
  // Replace Twitter card image
  ssrHTML = ssrHTML.replace(
    /<meta name="twitter:image" content=".*?"[^>]*>/i,
    `<meta name="twitter:image" content="${pathSEO.ogImage}" />`
  );
  
  // Replace canonical URL
  ssrHTML = ssrHTML.replace(
    /<link rel="canonical" href=".*?"[^>]*>/i,
    `<link rel="canonical" href="${pathSEO.canonicalUrl}" />`
  );
  
  // Replace structured data (JSON-LD)
  const structuredDataString = JSON.stringify(pathSEO.structuredData, null, 2);
  ssrHTML = ssrHTML.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json">
    ${structuredDataString}
    </script>`
  );
  
  return ssrHTML;
}

// Generate sitemap for SEO
export function generateSitemap(): string {
  const baseUrl = "https://niddikkare.com";
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = Object.keys(seoData).map(path => {
    const priority = path === "/" ? "1.0" : 
                    path.split('/').length === 2 ? "0.9" :
                    path.split('/').length === 3 ? "0.8" : "0.7";
    
    const changefreq = path.includes("news") ? "weekly" :
                      path.includes("product") ? "monthly" :
                      path.includes("company") ? "monthly" : "weekly";
    
    return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// Generate robots.txt
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://niddikkare.com/sitemap.xml

# Allow all pages for SEO
Allow: /healthcare
Allow: /life-sciences
Allow: /company
Allow: /contact
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /cookie-policy
Allow: /gut-care

# Disallow admin and internal pages
Disallow: /seo-management
Disallow: /admin
`;
}