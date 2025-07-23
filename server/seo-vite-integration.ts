import { type Express, type Request, type Response, type NextFunction } from 'express';

/**
 * This is an alternative approach for SEO injection that works with Vite
 * by modifying the HTML template before Vite processes it
 */

interface SEOData {
  pageTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  robotsDirective?: string;
  structuredData?: any;
}

export function setupViteSEOIntegration(app: Express) {
  // Middleware to pre-process HTML template with page-specific SEO data
  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const pathname = req.originalUrl.split('?')[0];
    
    // Skip API routes and static assets
    if (pathname.startsWith('/api/') || 
        pathname.startsWith('/assets/') ||
        pathname.startsWith('/@') || // Vite internal routes
        pathname.startsWith('/src/') || // Vite source files
        pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot|map)$/)) {
      return next();
    }

    // Only handle HTML requests
    const acceptHeader = req.headers.accept || '';
    if (!acceptHeader.includes('text/html') && !acceptHeader.includes('*/*')) {
      return next();
    }

    console.log(`[Vite SEO Integration] Processing: ${pathname}`);

    // Load page-specific SEO data
    let pageSeoData: SEOData = {};
    try {
      const seoModule = await import("../client/src/data/seo-data.ts");
      const allSeoData = seoModule.seoData || {};
      pageSeoData = allSeoData[pathname] || allSeoData['/'] || {};
      
      if (pageSeoData.pageTitle) {
        console.log(`[Vite SEO Integration] ✅ Loaded SEO data for ${pathname}: "${pageSeoData.pageTitle}"`);
      }
    } catch (error: any) {
      console.log(`[Vite SEO Integration] ⚠️ Could not load SEO data:`, error?.message);
    }

    // Store SEO data in request for later use
    (req as any).seoData = pageSeoData;
    (req as any).seoPath = pathname;

    next();
  });
}

/**
 * Function to inject SEO data into HTML template
 * This should be called from the Vite middleware after HTML processing
 */
export function injectSEOIntoHTML(html: string, seoData: SEOData): string {
  if (!seoData || !seoData.pageTitle) {
    return html;
  }

  let modifiedHtml = html;

  // Replace title
  modifiedHtml = modifiedHtml.replace(
    /<title[^>]*>.*?<\/title>/gi,
    `<title>${seoData.pageTitle}</title>`
  );

  // Replace meta description
  if (seoData.metaDescription) {
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']description["'][^>]*>/gi,
      `<meta name="description" content="${seoData.metaDescription}" />`
    );
  }

  // Replace Open Graph tags
  if (seoData.ogTitle) {
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+property=["']og:title["'][^>]*>/gi,
      `<meta property="og:title" content="${seoData.ogTitle}" />`
    );
  }

  if (seoData.ogDescription) {
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+property=["']og:description["'][^>]*>/gi,
      `<meta property="og:description" content="${seoData.ogDescription}" />`
    );
  }

  console.log(`[Vite SEO Integration] ✅ Injected SEO metadata successfully`);
  return modifiedHtml;
}