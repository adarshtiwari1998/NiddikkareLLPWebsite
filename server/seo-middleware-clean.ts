import express, { type Express, type Request, type Response, type NextFunction } from "express";

export function setupSEOMiddleware(app: Express) {
  // Simple SEO middleware that loads page-specific data and injects meta tags
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
      const seoModule = await import("../client/src/data/seo-data.ts");
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
    
    // Hook into response to inject SEO content
    const originalSend = res.send;
    const originalWrite = res.write;
    const originalEnd = res.end;
    
    console.log(`[SEO Middleware] Setting up response hooks for ${pathname}`);
    
    res.send = function(data: any) {
      console.log(`[SEO Middleware] res.send called for ${pathname}, data type: ${typeof data}, hasHTML: ${typeof data === 'string' && data.includes('<html')}`);
      if (typeof data === 'string' && data.includes('<html')) {
        const seoData = (req as any).seoData;
        const seoPath = (req as any).seoPath;
        
        if (seoData) {
          let modifiedData = data;
          
          // Replace title
          modifiedData = modifiedData.replace(
            /<title[^>]*>.*?<\/title>/gi,
            `<title>${seoData.pageTitle}</title>`
          );
          
          // Replace or add meta description
          if (modifiedData.includes('name="description"')) {
            modifiedData = modifiedData.replace(
              /<meta\s+name=["']description["'][^>]*>/gi,
              `<meta name="description" content="${seoData.metaDescription}" />`
            );
          } else {
            modifiedData = modifiedData.replace(
              /<head>/i,
              `<head>\n    <meta name="description" content="${seoData.metaDescription}" />`
            );
          }
          
          // Add other meta tags if not present
          const metaTags = [
            `<meta name="keywords" content="${seoData.metaKeywords}" />`,
            `<meta property="og:title" content="${seoData.ogTitle}" />`,
            `<meta property="og:description" content="${seoData.ogDescription}" />`,
            `<meta property="og:image" content="${seoData.ogImage}" />`,
            `<meta property="og:type" content="${seoData.ogType}" />`,
            `<meta property="og:url" content="${seoData.canonicalUrl}" />`,
            `<meta name="twitter:card" content="summary_large_image" />`,
            `<meta name="twitter:title" content="${seoData.ogTitle}" />`,
            `<meta name="twitter:description" content="${seoData.ogDescription}" />`,
            `<meta name="twitter:image" content="${seoData.ogImage}" />`,
            `<link rel="canonical" href="${seoData.canonicalUrl}" />`,
            `<meta name="robots" content="${seoData.robotsDirective}" />`
          ];
          
          // Add missing tags
          let tagsToAdd: string[] = [];
          metaTags.forEach(tag => {
            const tagName = tag.match(/(?:name|property)=["']([^"']+)["']/)?.[1];
            if (tagName && !modifiedData.includes(`="${tagName}"`)) {
              tagsToAdd.push(tag);
            }
          });
          
          if (tagsToAdd.length > 0) {
            modifiedData = modifiedData.replace(
              /<head>/i,
              `<head>\n    ${tagsToAdd.join('\n    ')}`
            );
          }
          
          // Add structured data
          if (seoData.structuredData && !modifiedData.includes('application/ld+json')) {
            const structuredDataScript = `
    <script type="application/ld+json">
    ${JSON.stringify(seoData.structuredData, null, 2)}
    </script>`;
            
            modifiedData = modifiedData.replace(
              /<\/head>/i,
              `${structuredDataScript}\n</head>`
            );
          }
          
          // SEO meta tags are sufficient for search engines
          
          console.log(`[SEO Middleware] ✅ Injected SEO for ${seoPath}: ${seoData.pageTitle}`);
          console.log(`[SEO Middleware] Title replacement: ${modifiedData.includes(seoData.pageTitle) ? 'SUCCESS' : 'FAILED'}`);
          return originalSend.call(this, modifiedData);
        }
      }
      return originalSend.call(this, data);
    };
    
    // Also hook into res.end for streaming responses
    res.end = function(chunk?: any, encoding?: any) {
      console.log(`[SEO Middleware] res.end called for ${pathname}, chunk type: ${typeof chunk}, hasHTML: ${typeof chunk === 'string' && chunk.includes('<html')}`);
      if (typeof chunk === 'string' && chunk.includes('<html')) {
        const seoData = (req as any).seoData;
        const seoPath = (req as any).seoPath;
        
        if (seoData) {
          let modifiedChunk = chunk;
          
          // Replace title
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
          }
          
          console.log(`[SEO Middleware] ✅ Injected SEO via res.end for ${seoPath}: ${seoData.pageTitle}`);
          console.log(`[SEO Middleware] Title replacement in end: ${modifiedChunk.includes(seoData.pageTitle) ? 'SUCCESS' : 'FAILED'}`);
          return originalEnd.call(this, modifiedChunk, encoding);
        }
      }
      
      return originalEnd.call(this, chunk, encoding);
    };
    
    next();
  });
}