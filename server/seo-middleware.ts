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

    // Skip SEO injection for scraper requests to avoid infinite loops
    if ((req as any).headers['user-agent']?.includes('NIDDIKKARE-Internal-Scraper') || 
        (req as any).query?.scraper === 'true') {
      return next();
    }

    console.log(`[SEO Middleware] Processing: ${pathname} (ENV: ${process.env.NODE_ENV})`);

    try {
      // Import SEO data dynamically - handle different environments
      let seoData;
      try {
        if (process.env.NODE_ENV === 'production') {
          // In production, use bundled SEO data to avoid import issues
          try {
            const seoModule = await import("./seo-data-bundled.js");
            seoData = seoModule.seoDataBundled || seoModule.default || seoModule.seoData;
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
        res.end = function(chunk: any, encoding?: any): any {
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
              
              // Replace structured data - more robust pattern with proper escaping
              const structuredDataJson = JSON.stringify(seoData.structuredData, null, 2);
              modifiedChunk = modifiedChunk.replace(
                /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
                `<script type="application/ld+json">\n    ${structuredDataJson}\n    </script>`
              );
              
              // Add missing meta tags if they don't exist after replacement attempts
              const missingTags = [];
              
              if (!modifiedChunk.includes('name="description"')) {
                missingTags.push(`<meta name="description" content="${seoData.metaDescription}" />`);
              }
              
              if (!modifiedChunk.includes('name="keywords"')) {
                missingTags.push(`<meta name="keywords" content="${seoData.metaKeywords}" />`);
              }
              
              if (!modifiedChunk.includes('name="robots"')) {
                missingTags.push(`<meta name="robots" content="${seoData.robotsDirective}" />`);
              }
              
              if (!modifiedChunk.includes('property="og:title"')) {
                missingTags.push(`<meta property="og:title" content="${seoData.ogTitle}" />`);
              }
              
              if (!modifiedChunk.includes('property="og:description"')) {
                missingTags.push(`<meta property="og:description" content="${seoData.ogDescription}" />`);
              }
              
              if (!modifiedChunk.includes('property="og:image"')) {
                missingTags.push(`<meta property="og:image" content="${seoData.ogImage}" />`);
              }
              
              if (!modifiedChunk.includes('property="og:type"')) {
                missingTags.push(`<meta property="og:type" content="${seoData.ogType}" />`);
              }
              
              if (!modifiedChunk.includes('property="og:url"')) {
                missingTags.push(`<meta property="og:url" content="${seoData.canonicalUrl}" />`);
              }
              
              if (!modifiedChunk.includes('name="twitter:card"')) {
                missingTags.push(`<meta name="twitter:card" content="summary_large_image" />`);
              }
              
              if (!modifiedChunk.includes('name="twitter:title"')) {
                missingTags.push(`<meta name="twitter:title" content="${seoData.ogTitle}" />`);
              }
              
              if (!modifiedChunk.includes('name="twitter:description"')) {
                missingTags.push(`<meta name="twitter:description" content="${seoData.ogDescription}" />`);
              }
              
              if (!modifiedChunk.includes('name="twitter:image"')) {
                missingTags.push(`<meta name="twitter:image" content="${seoData.ogImage}" />`);
              }
              
              if (!modifiedChunk.includes('rel="canonical"')) {
                missingTags.push(`<link rel="canonical" href="${seoData.canonicalUrl}" />`);
              }
              
              if (!modifiedChunk.includes('application/ld+json')) {
                missingTags.push(`<script type="application/ld+json">\n    ${structuredDataJson}\n    </script>`);
              }
              
              // Inject missing tags into head section
              if (missingTags.length > 0) {
                modifiedChunk = modifiedChunk.replace(
                  /<head>/i,
                  `<head>\n    ${missingTags.join('\n    ')}`
                );
              }

              // Note: Dynamic SSR content injection is handled by the enhanced production system
              

              console.log(`[SEO Middleware] ✅ Injected SEO for ${seoPath}: ${seoData.pageTitle}`);
              return originalEnd.call(this, modifiedChunk, encoding);
            }
          }
          return originalEnd.call(this, chunk, encoding);
        };
        
        // Override res.send to catch HTML responses
        res.send = function(body: any): any {
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
              
              // ✅ DYNAMIC SSR CONTENT INJECTION - Scrapes actual page content for SEO
              try {
                const { scrapePageContent } = await import('./dynamic-ssr-scraper.js');
                const ssrContent = await scrapePageContent(seoPath);
                
                // Inject dynamic page content right after body tag - completely hidden from users
                if (ssrContent && modifiedBody.includes('<body>')) {
                  modifiedBody = modifiedBody.replace(
                    /<body>/i,
                    `<body>
    <!-- ========== DYNAMIC SEO CONTENT FOR SEARCH ENGINES (COMPLETELY HIDDEN FROM USERS) ========== -->
    <div id="seo-crawler-content" style="position: absolute !important; left: -99999px !important; top: -99999px !important; width: 1px !important; height: 1px !important; overflow: hidden !important; clip: rect(1px, 1px, 1px, 1px) !important; white-space: nowrap !important; border: 0 !important; padding: 0 !important; margin: 0 !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; z-index: -9999 !important; font-size: 0px !important;" aria-hidden="true" role="presentation">
      ${ssrContent}
    </div>
    <!-- ========== END DYNAMIC SEO CONTENT ========== -->`
                  );
                  console.log(`[SEO Middleware] ✅ Injected dynamic SSR content for ${seoPath} (scraped content, res.send)`);
                } else {
                  console.log(`[SEO Middleware] ⚠️ Could not inject SSR content for ${seoPath} - body tag not found (res.send)`);
                }
              } catch (ssrError: any) {
                console.log(`[SEO Middleware] Dynamic SSR injection failed for ${seoPath} (res.send):`, ssrError?.message || 'Unknown error');
              }
              
              modifiedBody = modifiedBody.replace(
                /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
                `<script type="application/ld+json">\n    ${structuredDataJson}\n    </script>`
              );
              
              // Add missing meta tags for send() method too
              const missingTags = [];
              if (!modifiedBody.includes('property="og:title"')) {
                missingTags.push(`<meta property="og:title" content="${seoData.ogTitle}" />`);
              }
              if (!modifiedBody.includes('property="og:description"')) {
                missingTags.push(`<meta property="og:description" content="${seoData.ogDescription}" />`);
              }
              if (!modifiedBody.includes('property="og:image"')) {
                missingTags.push(`<meta property="og:image" content="${seoData.ogImage}" />`);
              }
              if (!modifiedBody.includes('property="og:type"')) {
                missingTags.push(`<meta property="og:type" content="${seoData.ogType}" />`);
              }
              if (!modifiedBody.includes('property="og:url"')) {
                missingTags.push(`<meta property="og:url" content="${seoData.canonicalUrl}" />`);
              }
              if (!modifiedBody.includes('name="twitter:card"')) {
                missingTags.push(`<meta name="twitter:card" content="summary_large_image" />`);
              }
              if (!modifiedBody.includes('name="twitter:title"')) {
                missingTags.push(`<meta name="twitter:title" content="${seoData.ogTitle}" />`);
              }
              if (!modifiedBody.includes('name="twitter:description"')) {
                missingTags.push(`<meta name="twitter:description" content="${seoData.ogDescription}" />`);
              }
              if (!modifiedBody.includes('name="twitter:image"')) {
                missingTags.push(`<meta name="twitter:image" content="${seoData.ogImage}" />`);
              }
              
              if (missingTags.length > 0) {
                modifiedBody = modifiedBody.replace(
                  /<head>/i,
                  `<head>\n    ${missingTags.join('\n    ')}`
                );
              }
              
              console.log(`[SEO Middleware] ✅ Injected SEO via send() for ${seoPath}: ${seoData.pageTitle}`);
              return originalSend.call(this, modifiedBody);
            }
          }
          return originalSend.call(this, body);
        };
        
        // Override res.sendFile for production static files
        res.sendFile = async function(path: string, options?: any, callback?: any) {
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