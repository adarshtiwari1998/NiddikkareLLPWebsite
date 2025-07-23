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
        pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot|map)$/)) {
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

    console.log(`[SEO Middleware] Processing: ${pathname} (ENV: ${process.env.NODE_ENV})`);

    try {
      // Import SEO data dynamically - handle different environments
      let seoData;
      try {
        if (process.env.NODE_ENV === 'production') {
          // In production, use bundled SEO data to avoid import issues
          try {
            const seoModule = await import("./seo-data-bundled.js");
            seoData = seoModule.seoData;
            console.log('[SEO Middleware] Using bundled SEO data for production');
          } catch {
            // Fallback to client source if bundled version fails
            try {
              const seoModule = await import("../client/src/data/seo-data.js");
              seoData = seoModule.seoData;
              console.log('[SEO Middleware] Using client source SEO data');
            } catch {
              const seoModule = await import("../client/src/data/seo-data.ts");
              seoData = seoModule.seoData;
              console.log('[SEO Middleware] Using client TypeScript SEO data');
            }
          }
        } else {
          // In development, use TypeScript source
          try {
            const seoModule = await import("../client/src/data/seo-data.ts");
            seoData = seoModule.seoData;
            console.log('[SEO Middleware] Using development TypeScript SEO data');
          } catch {
            // Fallback to JS if TypeScript import fails
            const seoModule = await import("../client/src/data/seo-data.js");
            seoData = seoModule.seoData;
            console.log('[SEO Middleware] Using development JS SEO data');
          }
        }
      } catch (importError) {
        console.error('[SEO Middleware] Failed to import SEO data:', importError);
        // Use minimal fallback data
        seoData = {
          '/': {
            pageTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
            metaDescription: 'NIDDIKKARE LLP specializes in healthcare and life sciences solutions.',
            metaKeywords: 'NIDDIKKARE, healthcare, life sciences',
            ogTitle: 'NIDDIKKARE LLP',
            ogDescription: 'Healthcare and life sciences solutions provider.',
            ogImage: 'https://niddikkare.com/assets/images/niddikkare-logo.png',
            ogType: 'website',
            canonicalUrl: 'https://niddikkare.com',
            robotsDirective: 'index,follow',
            structuredData: {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NIDDIKKARE LLP"
            }
          }
        };
        console.log('[SEO Middleware] Using fallback SEO data');
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
        const originalSend = res.send;
        const originalSendFile = res.sendFile;
        
        // Override multiple response methods to catch HTML
        res.end = function(chunk: any, encoding?: any) {
          if (typeof chunk === 'string' && chunk.includes('<html')) {
            const seoData = (req as any).seoData;
            const seoPath = (req as any).seoPath;
            
            if (seoData) {
              let modifiedChunk = chunk;
              
              // Replace title - more aggressive pattern matching
              modifiedChunk = modifiedChunk.replace(
                /<title[^>]*>.*?<\/title>/gi,
                `<title>${seoData.pageTitle}</title>`
              );
              
              // Replace meta description - handle existing ones
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+name=["']description["'][^>]*>/gi,
                `<meta name="description" content="${seoData.metaDescription}" />`
              );
              
              // Replace meta keywords - handle existing ones
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+name=["']keywords["'][^>]*>/gi,
                `<meta name="keywords" content="${seoData.metaKeywords}" />`
              );
              
              // Replace robots meta
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+name=["']robots["'][^>]*>/gi,
                `<meta name="robots" content="${seoData.robotsDirective}" />`
              );
              
              // Replace Open Graph title
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+property=["']og:title["'][^>]*>/gi,
                `<meta property="og:title" content="${seoData.ogTitle}" />`
              );
              
              // Replace Open Graph description
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+property=["']og:description["'][^>]*>/gi,
                `<meta property="og:description" content="${seoData.ogDescription}" />`
              );
              
              // Replace Open Graph URL
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+property=["']og:url["'][^>]*>/gi,
                `<meta property="og:url" content="${seoData.canonicalUrl}" />`
              );
              
              // Replace Open Graph image
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+property=["']og:image["'][^>]*>/gi,
                `<meta property="og:image" content="${seoData.ogImage}" />`
              );
              
              // Replace Twitter title
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+name=["']twitter:title["'][^>]*>/gi,
                `<meta name="twitter:title" content="${seoData.ogTitle}" />`
              );
              
              // Replace Twitter description
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+name=["']twitter:description["'][^>]*>/gi,
                `<meta name="twitter:description" content="${seoData.ogDescription}" />`
              );
              
              // Replace Twitter image
              modifiedChunk = modifiedChunk.replace(
                /<meta\s+name=["']twitter:image["'][^>]*>/gi,
                `<meta name="twitter:image" content="${seoData.ogImage}" />`
              );
              
              // Replace canonical URL
              modifiedChunk = modifiedChunk.replace(
                /<link\s+rel=["']canonical["'][^>]*>/gi,
                `<link rel="canonical" href="${seoData.canonicalUrl}" />`
              );
              
              // Replace structured data - more robust pattern
              const structuredDataJson = JSON.stringify(seoData.structuredData, null, 2);
              modifiedChunk = modifiedChunk.replace(
                /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
                `<script type="application/ld+json">\n    ${structuredDataJson}\n    </script>`
              );

              console.log(`[SEO Middleware] ✅ Injected SEO for ${seoPath}: ${seoData.pageTitle}`);
              return originalEnd.call(this, modifiedChunk, encoding);
            }
          }
          return originalEnd.call(this, chunk, encoding);
        };
        
        // Override res.send to catch HTML responses
        res.send = function(body: any) {
          if (typeof body === 'string' && body.includes('<html')) {
            const seoData = (req as any).seoData;
            const seoPath = (req as any).seoPath;
            
            if (seoData) {
              let modifiedBody = body;
              
              // Apply same SEO transformations
              modifiedBody = modifiedBody.replace(
                /<title[^>]*>.*?<\/title>/gi,
                `<title>${seoData.pageTitle}</title>`
              );
              
              modifiedBody = modifiedBody.replace(
                /<meta\s+name=["']description["'][^>]*>/gi,
                `<meta name="description" content="${seoData.metaDescription}" />`
              );
              
              modifiedBody = modifiedBody.replace(
                /<meta\s+name=["']keywords["'][^>]*>/gi,
                `<meta name="keywords" content="${seoData.metaKeywords}" />`
              );
              
              modifiedBody = modifiedBody.replace(
                /<meta\s+property=["']og:title["'][^>]*>/gi,
                `<meta property="og:title" content="${seoData.ogTitle}" />`
              );
              
              modifiedBody = modifiedBody.replace(
                /<meta\s+property=["']og:description["'][^>]*>/gi,
                `<meta property="og:description" content="${seoData.ogDescription}" />`
              );
              
              const structuredDataJson = JSON.stringify(seoData.structuredData, null, 2);
              modifiedBody = modifiedBody.replace(
                /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
                `<script type="application/ld+json">\n    ${structuredDataJson}\n    </script>`
              );
              
              console.log(`[SEO Middleware] ✅ Injected SEO via send() for ${seoPath}: ${seoData.pageTitle}`);
              return originalSend.call(this, modifiedBody);
            }
          }
          return originalSend.call(this, body);
        };
        
        // Override res.sendFile for production static files
        res.sendFile = function(path: string, options?: any, callback?: any) {
          if (path.endsWith('index.html')) {
            // For index.html files, read and modify them before sending
            const fs = require('fs');
            try {
              const htmlContent = fs.readFileSync(path, 'utf-8');
              const seoData = (req as any).seoData;
              const seoPath = (req as any).seoPath;
              
              if (seoData && htmlContent.includes('<html')) {
                let modifiedContent = htmlContent;
                
                // Apply SEO transformations
                modifiedContent = modifiedContent.replace(
                  /<title[^>]*>.*?<\/title>/gi,
                  `<title>${seoData.pageTitle}</title>`
                );
                
                modifiedContent = modifiedContent.replace(
                  /<meta\s+name=["']description["'][^>]*>/gi,
                  `<meta name="description" content="${seoData.metaDescription}" />`
                );
                
                modifiedContent = modifiedContent.replace(
                  /<meta\s+name=["']keywords["'][^>]*>/gi,
                  `<meta name="keywords" content="${seoData.metaKeywords}" />`
                );
                
                modifiedContent = modifiedContent.replace(
                  /<meta\s+property=["']og:title["'][^>]*>/gi,
                  `<meta property="og:title" content="${seoData.ogTitle}" />`
                );
                
                modifiedContent = modifiedContent.replace(
                  /<meta\s+property=["']og:description["'][^>]*>/gi,
                  `<meta property="og:description" content="${seoData.ogDescription}" />`
                );
                
                const structuredDataJson = JSON.stringify(seoData.structuredData, null, 2);
                modifiedContent = modifiedContent.replace(
                  /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
                  `<script type="application/ld+json">\n    ${structuredDataJson}\n    </script>`
                );
                
                console.log(`[SEO Middleware] ✅ Injected SEO via sendFile() for ${seoPath}: ${seoData.pageTitle}`);
                res.status(200).set({ "Content-Type": "text/html" }).send(modifiedContent);
                return;
              }
            } catch (error) {
              console.error(`[SEO Middleware] Error reading/modifying ${path}:`, error);
            }
          }
          return originalSendFile.call(this, path, options, callback);
        };
      }
    } catch (error) {
      console.error('[SEO Middleware] Error setting up SEO injection:', error);
    }

    next();
  });
}