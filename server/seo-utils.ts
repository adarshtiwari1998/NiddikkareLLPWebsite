import { seoData } from "../client/src/data/seo-data.js";

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