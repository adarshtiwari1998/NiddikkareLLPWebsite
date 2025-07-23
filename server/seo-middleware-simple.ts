import express, { type Express, type Request, type Response, type NextFunction } from "express";

export function setupSEOMiddleware(app: Express) {
  // Simple SEO middleware for development - just basic meta tag injection
  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
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

    // Skip SEO injection for scraper requests to avoid infinite loops
    if ((req as any).headers['user-agent']?.includes('NIDDIKKARE-Internal-Scraper') || 
        (req as any).query?.scraper === 'true') {
      return next();
    }

    console.log(`[SEO Middleware] Processing: ${pathname} (ENV: ${process.env.NODE_ENV})`);

    // Load page-specific SEO data
    let pageSeoData: any = {};
    try {
      // Import the actual SEO data from the client
      const seoModule = await import("../client/src/data/seo-data.js");
      const allSeoData = seoModule.seoData || {};
      
      // Get SEO data for the current path or fallback to home page
      pageSeoData = allSeoData[pathname] || allSeoData['/'] || {};
      console.log(`[SEO Middleware] ✅ Loaded page-specific SEO data for ${pathname}: "${pageSeoData.pageTitle}"`);
    } catch (error: any) {
      console.log(`[SEO Middleware] ⚠️ Could not load SEO data file, using fallback for ${pathname}:`, error?.message);
      // Fallback SEO data if file can't be loaded
      pageSeoData = {
        pageTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
        metaDescription: 'Leading provider of healthcare and life sciences solutions',
        metaKeywords: 'healthcare, life sciences, NIDDIKKARE',
        ogTitle: 'NIDDIKKARE LLP',
        ogDescription: 'Healthcare and life sciences solutions',
        ogImage: '/src/assets/niddikkare-logo.png',
        ogType: 'website',
        canonicalUrl: 'https://niddikkare.com' + pathname,
        robotsDirective: 'index,follow',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NIDDIKKARE LLP"
        }
      };
    }

    // Store the loaded SEO data for this request
    (req as any).seoData = pageSeoData;
    (req as any).seoPath = pathname;
    
    // Override res.end to inject dynamic content
    const originalEnd = res.end;
    res.end = async function(chunk: any, encoding?: any): any {
      if (typeof chunk === 'string' && chunk.includes('<html')) {
        const seoData = (req as any).seoData;
        const seoPath = (req as any).seoPath;
        
        if (seoData) {
          let modifiedChunk = chunk;
          
          // Replace title and other meta tags with page-specific data
          modifiedChunk = modifiedChunk.replace(
            /<title[^>]*>.*?<\/title>/gi,
            `<title>${seoData.pageTitle}</title>`
          );
          
          // Replace or add meta description
          if (modifiedChunk.includes('name="description"')) {
            modifiedChunk = modifiedChunk.replace(
              /<meta\s+name=["']description["'][^>]*>/gi,
              `<meta name="description" content="${seoData.metaDescription}" />`
            );
          } else {
            modifiedChunk = modifiedChunk.replace(
              /<head>/i,
              `<head>\n    <meta name="description" content="${seoData.metaDescription}" />`
            );
          }
          
          // Replace or add meta keywords
          if (modifiedChunk.includes('name="keywords"')) {
            modifiedChunk = modifiedChunk.replace(
              /<meta\s+name=["']keywords["'][^>]*>/gi,
              `<meta name="keywords" content="${seoData.metaKeywords}" />`
            );
          } else {
            modifiedChunk = modifiedChunk.replace(
              /<head>/i,
              `<head>\n    <meta name="keywords" content="${seoData.metaKeywords}" />`
            );
          }
          
          // Add Open Graph and Twitter meta tags
          const ogTags = `
    <meta property="og:title" content="${seoData.ogTitle}" />
    <meta property="og:description" content="${seoData.ogDescription}" />
    <meta property="og:image" content="${seoData.ogImage}" />
    <meta property="og:type" content="${seoData.ogType}" />
    <meta property="og:url" content="${seoData.canonicalUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoData.ogTitle}" />
    <meta name="twitter:description" content="${seoData.ogDescription}" />
    <meta name="twitter:image" content="${seoData.ogImage}" />
    <link rel="canonical" href="${seoData.canonicalUrl}" />
    <meta name="robots" content="${seoData.robotsDirective}" />`;
          
          if (!modifiedChunk.includes('property="og:title"')) {
            modifiedChunk = modifiedChunk.replace(
              /<head>/i,
              `<head>${ogTags}`
            );
          }
          
          // Add structured data
          if (seoData.structuredData && !modifiedChunk.includes('application/ld+json')) {
            const structuredDataScript = `
    <script type="application/ld+json">
    ${JSON.stringify(seoData.structuredData, null, 2)}
    </script>`;
            
            modifiedChunk = modifiedChunk.replace(
              /<\/head>/i,
              `${structuredDataScript}\n</head>`
            );
          }
          
          // Inject dynamic SSR content for search engines
          try {
            const { scrapePageContent } = await import('./dynamic-ssr-scraper.js');
            const ssrContent = await scrapePageContent(seoPath);
            
            if (ssrContent && modifiedChunk.includes('</body>')) {
              modifiedChunk = modifiedChunk.replace(
                /(<\/body>)/i,
                `
    <!-- ========== DYNAMIC SEO CONTENT FOR SEARCH ENGINES (HIDDEN FROM USERS) ========== -->
    <div id="seo-crawler-content" style="position: absolute !important; left: -99999px !important; top: -99999px !important; width: 1px !important; height: 1px !important; overflow: hidden !important; clip: rect(1px, 1px, 1px, 1px) !important; white-space: nowrap !important; border: 0 !important; padding: 0 !important; margin: 0 !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; z-index: -9999 !important; font-size: 0px !important;" aria-hidden="true" role="presentation">
      ${ssrContent}
    </div>
    <!-- ========== END DYNAMIC SEO CONTENT ========== -->
$1`
              );
              console.log(`[SEO Middleware] ✅ Injected dynamic SSR content for ${seoPath} (scraped content - BEFORE </body>)`);
            }
          } catch (ssrError: any) {
            console.log(`[SEO Middleware] Dynamic SSR injection failed for ${seoPath}:`, ssrError?.message || 'Unknown error');
          }
          
          console.log(`[SEO Middleware] ✅ Injected SEO for ${seoPath}: ${seoData.pageTitle}`);
          return originalEnd.call(this, modifiedChunk, encoding);
        }
      }
      return originalEnd.call(this, chunk, encoding);
    };
    
    next();
  });
}