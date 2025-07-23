import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setupSEOMiddleware(app: Express) {
  // Custom middleware to intercept HTML responses and inject SEO
  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    const pathname = req.originalUrl.split('?')[0];
    
    // Skip API routes and static assets
    if (pathname.startsWith('/api/') || 
        pathname.startsWith('/assets/') ||
        pathname.startsWith('/@') || // Vite internal routes
        pathname.startsWith('/src/') || // Vite source files
        pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)$/)) {
      return next();
    }

    // Only handle HTML requests and initial page loads
    const acceptHeader = req.headers.accept || '';
    const userAgent = req.headers['user-agent'] || '';
    
    // Skip if not requesting HTML or if it's a browser making internal requests
    if (!acceptHeader.includes('text/html') && !acceptHeader.includes('*/*')) {
      return next();
    }

    // In production, ensure we handle all HTML requests for proper SEO
    const isProduction = process.env.NODE_ENV === 'production';

    console.log(`[SEO Middleware] Processing: ${pathname}`);

    try {
      // Import SEO data dynamically - handle both .js and .ts extensions
      let seoData;
      try {
        const seoModule = await import("../client/src/data/seo-data.js");
        seoData = seoModule.seoData;
      } catch (error) {
        // Fallback for TypeScript in development
        const seoModule = await import("../client/src/data/seo-data.ts");
        seoData = seoModule.seoData;
      }
      
      // Get SEO data for the current path
      let pageSeoData = seoData[pathname];
      
      console.log(`[SEO Middleware] Found SEO data for ${pathname}:`, !!pageSeoData);
      
      // Use default home page SEO if no specific data found
      if (!pageSeoData) {
        console.log(`[SEO Middleware] Using default SEO for ${pathname}`);
        pageSeoData = seoData['/'];
      }

      if (pageSeoData) {
        // Store the SEO data for this request
        (req as any).seoData = pageSeoData;
        (req as any).seoPath = pathname;
        
        // Override res.end to inject SEO metadata
        const originalEnd = res.end;
        res.end = function(chunk: any, encoding?: any) {
          if (typeof chunk === 'string' && chunk.includes('<html')) {
            const seoData = (req as any).seoData;
            const seoPath = (req as any).seoPath;
            
            if (seoData) {
              // Inject SEO metadata into HTML
              const headContent = `
    <meta name="description" content="${seoData.metaDescription}" />
    <meta name="keywords" content="${seoData.metaKeywords}" />
    <meta name="robots" content="${seoData.robotsDirective}" />

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${seoData.ogTitle}" />
    <meta property="og:description" content="${seoData.ogDescription}" />
    <meta property="og:type" content="${seoData.ogType}" />
    <meta property="og:url" content="${seoData.canonicalUrl}" />
    <meta property="og:site_name" content="NIDDIKKARE LLP" />
    <meta property="og:image" content="${seoData.ogImage}" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoData.ogTitle}" />
    <meta name="twitter:description" content="${seoData.ogDescription}" />
    <meta name="twitter:image" content="${seoData.ogImage}" />
    <meta name="twitter:site" content="@niddikkare" />

    <!-- Canonical URL -->
    <link rel="canonical" href="${seoData.canonicalUrl}" />

    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">${JSON.stringify(seoData.structuredData, null, 2)}</script>`;

              // Replace title and inject head content
              let modifiedChunk = chunk.replace(
                /<title>.*?<\/title>/,
                `<title>${seoData.pageTitle}</title>`
              );
              
              modifiedChunk = modifiedChunk.replace(
                '</head>',
                `${headContent}\n  </head>`
              );

              console.log(`[SEO Middleware] ✅ Injected SEO for ${seoPath}: ${seoData.pageTitle}`);
              return originalEnd.call(this, modifiedChunk, encoding);
            }
          }
          return originalEnd.call(this, chunk, encoding);
        };
      }
    } catch (error) {
      console.error('[SEO Middleware] Error setting up SEO injection:', error);
    }

    next();
  });
}