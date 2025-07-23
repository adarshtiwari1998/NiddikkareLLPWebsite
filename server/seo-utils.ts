// SEO Utils for route handling

export function getSEOData(pathname: string) {
  // Basic SEO data for routes
  const defaultSEO = {
    pageTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
    metaDescription: 'Leading provider of healthcare and life sciences solutions',
    metaKeywords: 'healthcare, life sciences, NIDDIKKARE',
    ogTitle: 'NIDDIKKARE LLP',
    ogDescription: 'Healthcare and life sciences solutions',
    ogImage: '/src/assets/niddikkare-logo.png',
    ogType: 'website',
    canonicalUrl: 'https://niddikkare.com' + pathname,
    robotsDirective: 'index,follow'
  };
  
  return defaultSEO;
}

export function generateSEOTags(seoData: any): string {
  return `
    <title>${seoData.pageTitle}</title>
    <meta name="description" content="${seoData.metaDescription}" />
    <meta name="keywords" content="${seoData.metaKeywords}" />
    <meta property="og:title" content="${seoData.ogTitle}" />
    <meta property="og:description" content="${seoData.ogDescription}" />
    <meta property="og:image" content="${seoData.ogImage}" />
    <meta property="og:type" content="${seoData.ogType}" />
    <meta property="og:url" content="${seoData.canonicalUrl}" />
    <meta name="robots" content="${seoData.robotsDirective}" />
  `;
}

export function generateSitemap(): string {
  const baseUrl = 'https://niddikkare.com';
  const pages = [
    '/',
    '/healthcare',
    '/healthcare/neonatal-care',
    '/healthcare/medical-linens',
    '/products',
    '/services',
    '/contact'
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
}

export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Block search engines from indexing development files
Disallow: /src/
Disallow: /@*
Disallow: /node_modules/

# Sitemap location
Sitemap: https://niddikkare.com/sitemap.xml`;
}