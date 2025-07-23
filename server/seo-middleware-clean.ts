import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";

// Helper function to get production SEO data without dynamic imports
function getProductionSEOData() {
  return {
    '/': {
      pageTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation | Neonatal Care, Medical Linens, DNA/RNA Extraction',
      metaDescription: 'Leading provider of healthcare and life sciences solutions including neonatal care, medical linens, DNA/RNA extraction, and molecular diagnostics.',
      metaKeywords: 'healthcare, life sciences, NIDDIKKARE, neonatal care, medical linens, DNA extraction, RNA extraction, molecular diagnostics',
      ogTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
      ogDescription: 'Leading provider of healthcare and life sciences solutions',
      ogImage: '/src/assets/niddikkare-logo.png',
      ogType: 'website',
      canonicalUrl: 'https://niddikkare.com',
      robotsDirective: 'index,follow',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NIDDIKKARE LLP",
        "description": "Healthcare and life sciences solutions provider"
      }
    },
    '/products': {
      pageTitle: 'Products - NIDDIKKARE LLP | Healthcare & Life Sciences Solutions',
      metaDescription: 'Explore our comprehensive range of healthcare and life sciences products including neonatal care equipment and medical linens.',
      metaKeywords: 'healthcare products, medical equipment, neonatal care, medical linens, NIDDIKKARE',
      ogTitle: 'Products - NIDDIKKARE LLP',
      ogDescription: 'Healthcare and life sciences products',
      ogImage: '/src/assets/niddikkare-logo.png',
      ogType: 'website',
      canonicalUrl: 'https://niddikkare.com/products',
      robotsDirective: 'index,follow'
    },
    '/services': {
      pageTitle: 'Services - NIDDIKKARE LLP | Healthcare Consulting & Research',
      metaDescription: 'Professional healthcare consulting, contract research, and OEM product development services for the life sciences industry.',
      metaKeywords: 'healthcare consulting, contract research, OEM products, life sciences services, NIDDIKKARE',
      ogTitle: 'Services - NIDDIKKARE LLP',
      ogDescription: 'Healthcare consulting and research services',
      ogImage: '/src/assets/niddikkare-logo.png',
      ogType: 'website',
      canonicalUrl: 'https://niddikkare.com/services',
      robotsDirective: 'index,follow'
    },
    '/contact': {
      pageTitle: 'Contact Us - NIDDIKKARE LLP | Get in Touch',
      metaDescription: 'Contact NIDDIKKARE LLP for healthcare and life sciences solutions. Reach out to our expert team for consultations and partnerships.',
      metaKeywords: 'contact NIDDIKKARE, healthcare contact, life sciences inquiry, consultation request',
      ogTitle: 'Contact Us - NIDDIKKARE LLP',
      ogDescription: 'Get in touch with our healthcare experts',
      ogImage: '/src/assets/niddikkare-logo.png',
      ogType: 'website',
      canonicalUrl: 'https://niddikkare.com/contact',
      robotsDirective: 'index,follow'
    }
  };
}

// Helper function to get default SEO data for any path
function getDefaultSEOData(pathname: string) {
  return {
    pageTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
    metaDescription: 'Leading provider of healthcare and life sciences solutions including neonatal care, medical linens, DNA/RNA extraction, and molecular diagnostics.',
    metaKeywords: 'healthcare, life sciences, NIDDIKKARE, neonatal care, medical linens, DNA extraction, RNA extraction',
    ogTitle: 'NIDDIKKARE LLP',
    ogDescription: 'Healthcare and life sciences solutions',
    ogImage: '/src/assets/niddikkare-logo.png',
    ogType: 'website',
    canonicalUrl: 'https://niddikkare.com' + pathname,
    robotsDirective: 'index,follow',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NIDDIKKARE LLP",
      "description": "Healthcare and life sciences solutions provider"
    }
  };
}

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

    // Load page-specific SEO data with robust error handling
    let pageSeoData: any = {};
    try {
      let seoModule;
      let allSeoData: any = {};
      
      if (process.env.NODE_ENV === 'production') {
        // In production, use static fallback data to avoid dynamic import issues
        console.log(`[SEO Middleware] Using production fallback SEO data for ${pathname}`);
        allSeoData = getProductionSEOData();
      } else {
        // In development, load TypeScript directly
        try {
          seoModule = await import("../client/src/data/seo-data.ts");
          allSeoData = (seoModule as any).seoData || {};
        } catch (devError: any) {
          console.log(`[SEO Middleware] Dev import failed, using fallback:`, devError?.message);
          allSeoData = getProductionSEOData();
        }
      }
      
      // Get SEO data for the current path or fallback to home page
      pageSeoData = allSeoData[pathname] || allSeoData['/'] || getDefaultSEOData(pathname);
      console.log(`[SEO Middleware] ✅ Loaded page-specific SEO data for ${pathname}: "${pageSeoData.pageTitle}"`);
    } catch (error: any) {
      console.log(`[SEO Middleware] ⚠️ Could not load SEO data, using fallback for ${pathname}:`, error?.message);
      pageSeoData = getDefaultSEOData(pathname);
    }

    // Store the loaded SEO data for this request
    (req as any).seoData = pageSeoData;
    (req as any).seoPath = pathname;
    
    // Hook into response to inject SEO content (works for both dev and production)
    const originalSend = res.send;
    const originalEnd = res.end;
    const originalSendFile = res.sendFile;
    
    console.log(`[SEO Middleware] Setting up response hooks for ${pathname} (ENV: ${process.env.NODE_ENV})`);
    
    res.send = function(data: any) {
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
    
    // Override res.end to catch Vite's HTML serving method
    res.end = function(chunk?: any, encoding?: any) {
      if (typeof chunk === 'string' && chunk.includes('<!DOCTYPE html>')) {
        const seoData = (req as any).seoData;
        
        if (seoData && seoData.pageTitle) {
          let modifiedChunk = chunk;
          
          // Replace title aggressively with multiple patterns
          modifiedChunk = modifiedChunk.replace(
            /<title[^>]*>.*?<\/title>/gi,
            `<title>${seoData.pageTitle}</title>`
          );
          
          // Replace meta description aggressively
          if (seoData.metaDescription) {
            modifiedChunk = modifiedChunk.replace(
              /<meta\s+name=["']description["'][^>]*>/gi,
              `<meta name="description" content="${seoData.metaDescription}" />`
            );
          }
          
          console.log(`[SEO Middleware] ✅ SERVER-SIDE SEO INJECTED for ${pathname}: "${seoData.pageTitle}"`);
          return originalEnd.call(this, modifiedChunk, encoding);
        }
      }
      
      return originalEnd.call(this, chunk, encoding);
    };
    
    // Override res.sendFile to handle production static file serving
    res.sendFile = function(path: string, options?: any, callback?: any) {
      // Read the file and inject SEO data before sending
      fs.readFile(path, 'utf8', (err: any, data: string) => {
        if (err) {
          return originalSendFile.call(this, path, options, callback);
        }
        
        const seoData = (req as any).seoData;
        if (seoData && seoData.pageTitle && data.includes('<!DOCTYPE html>')) {
          let modifiedData = data;
          
          // Replace title
          modifiedData = modifiedData.replace(
            /<title[^>]*>.*?<\/title>/gi,
            `<title>${seoData.pageTitle}</title>`
          );
          
          // Replace meta description
          if (seoData.metaDescription) {
            modifiedData = modifiedData.replace(
              /<meta\s+name=["']description["'][^>]*>/gi,
              `<meta name="description" content="${seoData.metaDescription}" />`
            );
          }
          
          console.log(`[SEO Middleware] ✅ PRODUCTION SEO INJECTED via sendFile for ${pathname}: "${seoData.pageTitle}"`);
          return res.send(modifiedData);
        }
        
        return originalSendFile.call(this, path, options, callback);
      });
    };
    
    next();
  });
}