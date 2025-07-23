import { seoData } from "../client/src/data/seo-data.js";

export async function injectSEOMetadata(template: string, pathname: string): Promise<string> {
  try {
    // Skip API routes and static assets
    if (pathname.startsWith('/api/') || 
        pathname.startsWith('/assets/') ||
        pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)$/)) {
      return template;
    }

    console.log(`[SEO Injection] Processing page: ${pathname}`);

    // Get SEO data for the current path
    let pageSeoData = seoData[pathname];
    
    // Use default home page SEO if no specific data found
    if (!pageSeoData) {
      pageSeoData = seoData['/'];
    }

    if (pageSeoData) {
      // Inject SEO metadata into HTML head
      const headContent = `
    <meta name="description" content="${pageSeoData.metaDescription}" />
    <meta name="keywords" content="${pageSeoData.metaKeywords}" />
    <meta name="robots" content="${pageSeoData.robotsDirective}" />

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${pageSeoData.ogTitle}" />
    <meta property="og:description" content="${pageSeoData.ogDescription}" />
    <meta property="og:type" content="${pageSeoData.ogType}" />
    <meta property="og:url" content="${pageSeoData.canonicalUrl}" />
    <meta property="og:site_name" content="NIDDIKKARE LLP" />
    <meta property="og:image" content="${pageSeoData.ogImage}" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pageSeoData.ogTitle}" />
    <meta name="twitter:description" content="${pageSeoData.ogDescription}" />
    <meta name="twitter:image" content="${pageSeoData.ogImage}" />
    <meta name="twitter:site" content="@niddikkare" />

    <!-- Canonical URL -->
    <link rel="canonical" href="${pageSeoData.canonicalUrl}" />

    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">${JSON.stringify(pageSeoData.structuredData, null, 2)}</script>`;

      // Replace title and inject head content
      template = template.replace(
        /<title>.*?<\/title>/,
        `<title>${pageSeoData.pageTitle}</title>`
      );
      
      template = template.replace(
        '</head>',
        `${headContent}\n  </head>`
      );

      console.log(`[SEO Injection] Injected SEO for ${pathname}: ${pageSeoData.pageTitle}`);
    }

    return template;
  } catch (error) {
    console.error('[SEO Injection] Error injecting SEO metadata:', error);
    return template;
  }
}