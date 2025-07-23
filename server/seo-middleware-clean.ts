import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";

// Helper function to get production SEO data without dynamic imports
function getProductionSEOData() {
  try {
    // Use complete production SEO data with all 60+ pages
    const { completeSeoData } = require('./seo-data-complete');
    console.log('[Production SEO] ✅ Using complete production SEO data with all 60+ pages');
    return completeSeoData;
  } catch (error) {
    console.log('[Production SEO] ⚠️ Production SEO data not found, using static fallback');
    // Fallback static SEO data for critical pages including services
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
      '/services/consultancy-ivd': {
        pageTitle: 'Consultancy IVD | NIDDIKKARE LLP - In Vitro Diagnostics Consulting',
        metaDescription: 'Expert in vitro diagnostics (IVD) consultancy services for medical device development, regulatory compliance, and market entry strategies.',
        metaKeywords: 'IVD consultancy, in vitro diagnostics, medical device consulting, regulatory compliance',
        ogTitle: 'IVD Consultancy - In Vitro Diagnostics Consulting | NIDDIKKARE LLP',
        ogDescription: 'Expert consultancy services for in vitro diagnostics development and regulatory compliance.',
        ogImage: '/src/assets/niddikkare-logo.png',
        ogType: 'service',
        canonicalUrl: 'https://niddikkare.com/services/consultancy-ivd',
        robotsDirective: 'index,follow'
      },
      '/services/contract-research': {
        pageTitle: 'Contract Research | NIDDIKKARE LLP - Professional Research Services',
        metaDescription: 'Professional contract research services for healthcare and life sciences. Expert research solutions, clinical studies, and scientific consulting.',
        metaKeywords: 'contract research, research services, clinical studies, scientific consulting',
        ogTitle: 'Contract Research Services - Professional Research Solutions | NIDDIKKARE',
        ogDescription: 'Expert contract research services for healthcare and life sciences applications.',
        ogImage: '/src/assets/niddikkare-logo.png',
        ogType: 'service',
        canonicalUrl: 'https://niddikkare.com/services/contract-research',
        robotsDirective: 'index,follow'
      },
      '/services/oem-products': {
        pageTitle: 'OEM Products | NIDDIKKARE LLP - Original Equipment Manufacturing',
        metaDescription: 'Original Equipment Manufacturing (OEM) services for healthcare and life sciences products. Custom manufacturing solutions for medical devices.',
        metaKeywords: 'OEM products, original equipment manufacturing, custom manufacturing, medical device manufacturing',
        ogTitle: 'OEM Products - Original Equipment Manufacturing | NIDDIKKARE',
        ogDescription: 'Custom OEM manufacturing services for healthcare and life sciences products.',
        ogImage: '/src/assets/niddikkare-logo.png',
        ogType: 'service',
        canonicalUrl: 'https://niddikkare.com/services/oem-products',
        robotsDirective: 'index,follow'
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
          
          // Replace existing meta tags aggressively and add missing ones
          
          // Replace or add keywords
          if (modifiedData.includes('name="keywords"')) {
            modifiedData = modifiedData.replace(
              /<meta\s+name=["']keywords["'][^>]*>/gi,
              `<meta name="keywords" content="${seoData.metaKeywords}" />`
            );
          } else {
            modifiedData = modifiedData.replace(
              /<head>/i,
              `<head>\n    <meta name="keywords" content="${seoData.metaKeywords}" />`
            );
          }
          
          // Replace or add Open Graph tags with more robust pattern matching
          const ogTags = [
            { key: 'og:title', value: seoData.ogTitle },
            { key: 'og:description', value: seoData.ogDescription },
            { key: 'og:image', value: seoData.ogImage },
            { key: 'og:type', value: seoData.ogType },
            { key: 'og:url', value: seoData.canonicalUrl }
          ];
          
          ogTags.forEach(({ key, value }) => {
            // More aggressive pattern to match existing OG tags
            const existingPattern = new RegExp(`<meta\\s+property=["']${key.replace(':', '\\:')}["'][^>]*>`, 'gi');
            if (modifiedData.match(existingPattern)) {
              console.log(`[SEO Middleware] Replacing existing ${key} tag`);
              modifiedData = modifiedData.replace(
                existingPattern,
                `<meta property="${key}" content="${value}" />`
              );
            } else {
              console.log(`[SEO Middleware] Adding new ${key} tag`);
              modifiedData = modifiedData.replace(
                /<head>/i,
                `<head>\n    <meta property="${key}" content="${value}" />`
              );
            }
          });
          
          // Replace or add Twitter Card tags
          const twitterTags = [
            { key: 'twitter:card', value: 'summary_large_image' },
            { key: 'twitter:title', value: seoData.ogTitle },
            { key: 'twitter:description', value: seoData.ogDescription },
            { key: 'twitter:image', value: seoData.ogImage }
          ];
          
          twitterTags.forEach(({ key, value }) => {
            if (modifiedData.includes(`name="${key}"`)) {
              modifiedData = modifiedData.replace(
                new RegExp(`<meta\\s+name=["']${key}["'][^>]*>`, 'gi'),
                `<meta name="${key}" content="${value}" />`
              );
            } else {
              modifiedData = modifiedData.replace(
                /<head>/i,
                `<head>\n    <meta name="${key}" content="${value}" />`
              );
            }
          });
          
          // Replace or add canonical URL with better logging
          if (modifiedData.includes('rel="canonical"')) {
            console.log(`[SEO Middleware] Replacing existing canonical URL with: ${seoData.canonicalUrl}`);
            modifiedData = modifiedData.replace(
              /<link\s+rel=["']canonical["'][^>]*>/gi,
              `<link rel="canonical" href="${seoData.canonicalUrl}" />`
            );
          } else {
            console.log(`[SEO Middleware] Adding new canonical URL: ${seoData.canonicalUrl}`);
            modifiedData = modifiedData.replace(
              /<head>/i,
              `<head>\n    <link rel="canonical" href="${seoData.canonicalUrl}" />`
            );
          }
          
          // Replace or add robots directive
          if (modifiedData.includes('name="robots"')) {
            modifiedData = modifiedData.replace(
              /<meta\s+name=["']robots["'][^>]*>/gi,
              `<meta name="robots" content="${seoData.robotsDirective}" />`
            );
          } else {
            modifiedData = modifiedData.replace(
              /<head>/i,
              `<head>\n    <meta name="robots" content="${seoData.robotsDirective}" />`
            );
          }
          
          // Replace or add structured data with better logging
          if (seoData.structuredData) {
            const structuredDataScript = `<script type="application/ld+json">
${JSON.stringify(seoData.structuredData, null, 2)}
</script>`;
            
            if (modifiedData.includes('application/ld+json')) {
              console.log(`[SEO Middleware] Replacing existing structured data for ${pathname}`);
              // Replace existing structured data - more robust pattern
              modifiedData = modifiedData.replace(
                /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
                structuredDataScript
              );
            } else {
              console.log(`[SEO Middleware] Adding new structured data for ${pathname}`);
              // Add new structured data
              modifiedData = modifiedData.replace(
                /<\/head>/i,
                `    ${structuredDataScript}\n</head>`
              );
            }
          }
          
          // SEO meta tags are sufficient for search engines
          
          console.log(`[SEO Middleware] ✅ Injected SEO for ${seoPath}: ${seoData.pageTitle}`);
          console.log(`[SEO Middleware] Title replacement: ${modifiedData.includes(seoData.pageTitle) ? 'SUCCESS' : 'FAILED'}`);
          return originalSend.call(this, modifiedData);
        }
      }
      return originalSend.call(this, data);
    };
    
    // Override res.end to catch Vite's HTML serving method - COMPREHENSIVE REPLACEMENT
    res.end = function(chunk?: any, encoding?: any) {
      if (typeof chunk === 'string' && chunk.includes('<!DOCTYPE html>')) {
        const seoData = (req as any).seoData;
        const seoPath = (req as any).seoPath;
        
        if (seoData && seoData.pageTitle) {
          let modifiedChunk = chunk;
          
          // Replace title
          modifiedChunk = modifiedChunk.replace(
            /<title[^>]*>.*?<\/title>/gi,
            `<title>${seoData.pageTitle}</title>`
          );
          
          // Replace meta description
          if (seoData.metaDescription) {
            modifiedChunk = modifiedChunk.replace(
              /<meta\s+name=["']description["'][^>]*>/gi,
              `<meta name="description" content="${seoData.metaDescription}" />`
            );
          }
          
          // Replace keywords
          if (modifiedChunk.includes('name="keywords"')) {
            modifiedChunk = modifiedChunk.replace(
              /<meta\s+name=["']keywords["'][^>]*>/gi,
              `<meta name="keywords" content="${seoData.metaKeywords}" />`
            );
          }
          
          // Replace Open Graph tags
          const ogTags = [
            { key: 'og:title', value: seoData.ogTitle },
            { key: 'og:description', value: seoData.ogDescription },
            { key: 'og:image', value: seoData.ogImage },
            { key: 'og:type', value: seoData.ogType },
            { key: 'og:url', value: seoData.canonicalUrl }
          ];
          
          ogTags.forEach(({ key, value }) => {
            const existingPattern = new RegExp(`<meta\\s+property=["']${key.replace(':', '\\:')}["'][^>]*>`, 'gi');
            if (modifiedChunk.match(existingPattern)) {
              console.log(`[SEO Middleware res.end] Replacing ${key} with: ${value}`);
              modifiedChunk = modifiedChunk.replace(
                existingPattern,
                `<meta property="${key}" content="${value}" />`
              );
            }
          });
          
          // Replace Twitter Card tags
          const twitterTags = [
            { key: 'twitter:title', value: seoData.ogTitle },
            { key: 'twitter:description', value: seoData.ogDescription },
            { key: 'twitter:image', value: seoData.ogImage }
          ];
          
          twitterTags.forEach(({ key, value }) => {
            if (modifiedChunk.includes(`name="${key}"`)) {
              modifiedChunk = modifiedChunk.replace(
                new RegExp(`<meta\\s+name=["']${key}["'][^>]*>`, 'gi'),
                `<meta name="${key}" content="${value}" />`
              );
            }
          });
          
          // Replace canonical URL
          if (modifiedChunk.includes('rel="canonical"')) {
            console.log(`[SEO Middleware res.end] Replacing canonical URL with: ${seoData.canonicalUrl}`);
            modifiedChunk = modifiedChunk.replace(
              /<link\s+rel=["']canonical["'][^>]*>/gi,
              `<link rel="canonical" href="${seoData.canonicalUrl}" />`
            );
          }
          
          // Replace structured data
          if (seoData.structuredData && modifiedChunk.includes('application/ld+json')) {
            const structuredDataScript = `<script type="application/ld+json">
${JSON.stringify(seoData.structuredData, null, 2)}
</script>`;
            console.log(`[SEO Middleware res.end] Replacing structured data for ${seoPath}`);
            modifiedChunk = modifiedChunk.replace(
              /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
              structuredDataScript
            );
          }
          
          console.log(`[SEO Middleware] ✅ COMPREHENSIVE SERVER-SIDE SEO INJECTED for ${pathname}: "${seoData.pageTitle}"`);
          return originalEnd.call(this, modifiedChunk, encoding);
        }
      }
      
      return originalEnd.call(this, chunk, encoding);
    };
    
    // Override res.sendFile to handle production static file serving - COMPREHENSIVE REPLACEMENT
    res.sendFile = function(path: string, options?: any, callback?: any) {
      // Read the file and inject SEO data before sending
      fs.readFile(path, 'utf8', (err: any, data: string) => {
        if (err) {
          return originalSendFile.call(this, path, options, callback);
        }
        
        const seoData = (req as any).seoData;
        const seoPath = (req as any).seoPath;
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
          
          // Replace keywords
          if (modifiedData.includes('name="keywords"')) {
            modifiedData = modifiedData.replace(
              /<meta\s+name=["']keywords["'][^>]*>/gi,
              `<meta name="keywords" content="${seoData.metaKeywords}" />`
            );
          }
          
          // Replace Open Graph tags
          const ogTags = [
            { key: 'og:title', value: seoData.ogTitle },
            { key: 'og:description', value: seoData.ogDescription },
            { key: 'og:image', value: seoData.ogImage },
            { key: 'og:type', value: seoData.ogType },
            { key: 'og:url', value: seoData.canonicalUrl }
          ];
          
          ogTags.forEach(({ key, value }) => {
            const existingPattern = new RegExp(`<meta\\s+property=["']${key.replace(':', '\\:')}["'][^>]*>`, 'gi');
            if (modifiedData.match(existingPattern)) {
              console.log(`[Production SEO sendFile] Replacing ${key} with: ${value}`);
              modifiedData = modifiedData.replace(
                existingPattern,
                `<meta property="${key}" content="${value}" />`
              );
            }
          });
          
          // Replace Twitter Card tags
          const twitterTags = [
            { key: 'twitter:title', value: seoData.ogTitle },
            { key: 'twitter:description', value: seoData.ogDescription },
            { key: 'twitter:image', value: seoData.ogImage }
          ];
          
          twitterTags.forEach(({ key, value }) => {
            if (modifiedData.includes(`name="${key}"`)) {
              modifiedData = modifiedData.replace(
                new RegExp(`<meta\\s+name=["']${key}["'][^>]*>`, 'gi'),
                `<meta name="${key}" content="${value}" />`
              );
            }
          });
          
          // Replace canonical URL
          if (modifiedData.includes('rel="canonical"')) {
            console.log(`[Production SEO sendFile] Replacing canonical URL with: ${seoData.canonicalUrl}`);
            modifiedData = modifiedData.replace(
              /<link\s+rel=["']canonical["'][^>]*>/gi,
              `<link rel="canonical" href="${seoData.canonicalUrl}" />`
            );
          }
          
          // Replace structured data
          if (seoData.structuredData && modifiedData.includes('application/ld+json')) {
            const structuredDataScript = `<script type="application/ld+json">
${JSON.stringify(seoData.structuredData, null, 2)}
</script>`;
            console.log(`[Production SEO sendFile] Replacing structured data for ${seoPath}`);
            modifiedData = modifiedData.replace(
              /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
              structuredDataScript
            );
          }
          
          console.log(`[SEO Middleware] ✅ COMPREHENSIVE PRODUCTION SEO INJECTED via sendFile for ${pathname}: "${seoData.pageTitle}"`);
          return res.send(modifiedData);
        }
        
        return originalSendFile.call(this, path, options, callback);
      });
    };
    
    next();
  });
}

// Production-specific SEO middleware that works with serveStatic
export function setupProductionSEOMiddleware(app: Express) {
  console.log('[Production SEO] Setting up production SEO middleware');
  
  // Override the static file serving to inject SEO data
  const originalUse = app.use.bind(app);
  
  // Intercept all routes before they reach serveStatic
  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    const pathname = req.originalUrl.split('?')[0];
    
    // Skip API routes and actual static assets
    if (pathname.startsWith('/api/') || 
        pathname.startsWith('/assets/') ||
        pathname.startsWith('/@') ||
        pathname.startsWith('/src/') ||
        pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot|map|json|txt|xml)$/)) {
      return next();
    }

    // Only handle HTML requests
    const acceptHeader = req.headers.accept || '';
    if (!acceptHeader.includes('text/html') && !acceptHeader.includes('*/*')) {
      return next();
    }

    console.log(`[Production SEO] Processing HTML request: ${pathname}`);
    
    try {
      // Load page-specific SEO data using production fallback
      const allSeoData = getProductionSEOData() as Record<string, any>;
      const pageSeoData = allSeoData[pathname] || allSeoData['/'] || getDefaultSEOData(pathname);
      
      console.log(`[Production SEO] ✅ Loaded SEO data for ${pathname}: "${pageSeoData.pageTitle}"`);
      
      // Read the built index.html file and inject SEO data
      const distPath = path.resolve(import.meta.dirname, "public");
      const indexPath = path.resolve(distPath, "index.html");
      
      if (fs.existsSync(indexPath)) {
        const htmlContent = fs.readFileSync(indexPath, 'utf8');
        const modifiedHtml = injectSEOData(htmlContent, pageSeoData);
        
        console.log(`[Production SEO] ✅ Injected SEO data for ${pathname}`);
        res.status(200).set({ "Content-Type": "text/html" }).send(modifiedHtml);
        return;
      }
    } catch (error) {
      console.error(`[Production SEO] Error processing ${pathname}:`, error);
    }
    
    // Fall back to normal serving
    next();
  });
}

// Helper function to inject SEO data into HTML - COMPREHENSIVE REPLACEMENT FOR PRODUCTION
function injectSEOData(html: string, seoData: any): string {
  let modifiedHtml = html;
  
  console.log(`[Production SEO injectSEOData] Processing SEO injection for: ${seoData.pageTitle}`);
  
  // Replace title
  modifiedHtml = modifiedHtml.replace(
    /<title[^>]*>.*?<\/title>/gi,
    `<title>${seoData.pageTitle}</title>`
  );
  
  // Replace meta description
  if (modifiedHtml.includes('name="description"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']description["'][^>]*>/gi,
      `<meta name="description" content="${seoData.metaDescription}" />`
    );
  } else {
    modifiedHtml = modifiedHtml.replace(
      /<head>/i,
      `<head>\n    <meta name="description" content="${seoData.metaDescription}" />`
    );
  }
  
  // Replace keywords
  if (modifiedHtml.includes('name="keywords"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']keywords["'][^>]*>/gi,
      `<meta name="keywords" content="${seoData.metaKeywords}" />`
    );
  } else {
    modifiedHtml = modifiedHtml.replace(
      /<head>/i,
      `<head>\n    <meta name="keywords" content="${seoData.metaKeywords}" />`
    );
  }
  
  // Replace Open Graph tags with aggressive pattern matching
  const ogTags = [
    { key: 'og:title', value: seoData.ogTitle },
    { key: 'og:description', value: seoData.ogDescription },
    { key: 'og:image', value: seoData.ogImage },
    { key: 'og:type', value: seoData.ogType },
    { key: 'og:url', value: seoData.canonicalUrl }
  ];
  
  ogTags.forEach(({ key, value }) => {
    const existingPattern = new RegExp(`<meta\\s+property=["']${key.replace(':', '\\:')}["'][^>]*>`, 'gi');
    if (modifiedHtml.match(existingPattern)) {
      console.log(`[Production SEO injectSEOData] Replacing ${key} with: ${value}`);
      modifiedHtml = modifiedHtml.replace(
        existingPattern,
        `<meta property="${key}" content="${value}" />`
      );
    } else {
      console.log(`[Production SEO injectSEOData] Adding new ${key} tag`);
      modifiedHtml = modifiedHtml.replace(
        /<head>/i,
        `<head>\n    <meta property="${key}" content="${value}" />`
      );
    }
  });
  
  // Replace Twitter Card tags
  const twitterTags = [
    { key: 'twitter:card', value: 'summary_large_image' },
    { key: 'twitter:title', value: seoData.ogTitle },
    { key: 'twitter:description', value: seoData.ogDescription },
    { key: 'twitter:image', value: seoData.ogImage }
  ];
  
  twitterTags.forEach(({ key, value }) => {
    if (modifiedHtml.includes(`name="${key}"`)) {
      modifiedHtml = modifiedHtml.replace(
        new RegExp(`<meta\\s+name=["']${key}["'][^>]*>`, 'gi'),
        `<meta name="${key}" content="${value}" />`
      );
    } else {
      modifiedHtml = modifiedHtml.replace(
        /<head>/i,
        `<head>\n    <meta name="${key}" content="${value}" />`
      );
    }
  });
  
  // Replace canonical URL
  if (modifiedHtml.includes('rel="canonical"')) {
    console.log(`[Production SEO injectSEOData] Replacing canonical URL with: ${seoData.canonicalUrl}`);
    modifiedHtml = modifiedHtml.replace(
      /<link\s+rel=["']canonical["'][^>]*>/gi,
      `<link rel="canonical" href="${seoData.canonicalUrl}" />`
    );
  } else {
    console.log(`[Production SEO injectSEOData] Adding new canonical URL: ${seoData.canonicalUrl}`);
    modifiedHtml = modifiedHtml.replace(
      /<head>/i,
      `<head>\n    <link rel="canonical" href="${seoData.canonicalUrl}" />`
    );
  }
  
  // Replace robots meta tag
  if (modifiedHtml.includes('name="robots"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']robots["'][^>]*>/gi,
      `<meta name="robots" content="${seoData.robotsDirective}" />`
    );
  } else {
    modifiedHtml = modifiedHtml.replace(
      /<head>/i,
      `<head>\n    <meta name="robots" content="${seoData.robotsDirective}" />`
    );
  }
  
  // Replace structured data with aggressive replacement logic
  if (seoData.structuredData) {
    if (modifiedHtml.includes('application/ld+json')) {
      console.log(`[Production SEO injectSEOData] Replacing existing structured data`);
      const structuredDataScript = `<script type="application/ld+json">
${JSON.stringify(seoData.structuredData, null, 2)}
</script>`;
      modifiedHtml = modifiedHtml.replace(
        /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
        structuredDataScript
      );
    } else {
      console.log(`[Production SEO injectSEOData] Adding new structured data`);
      const structuredDataScript = `
    <script type="application/ld+json">
${JSON.stringify(seoData.structuredData, null, 2)}
    </script>`;
      
      modifiedHtml = modifiedHtml.replace(
        /<\/head>/i,
        `${structuredDataScript}\n</head>`
      );
    }
  }
  
  return modifiedHtml;
}