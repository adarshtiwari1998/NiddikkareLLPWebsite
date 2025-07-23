import express, { type Express, type Request, type Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { scrapePageContent } from "./dynamic-ssr-scraper.js";

// Setup __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setupProductionSEO(app: Express) {
  console.log('[Production SEO Enhanced] Starting enhanced production SEO setup');
  
  // Serve static assets with proper handling
  app.use(express.static("public", { index: false }));
  
  // Handle all routes with enhanced SEO injection + dynamic content
  app.use("*", async (req: Request, res: Response) => {
    const pathname = req.originalUrl.split('?')[0];
    
    console.log(`[Production SEO Enhanced] Processing: ${pathname}`);
    
    try {
      // Load page-specific SEO data (same as development)
      let seoData: any = {};
      try {
        // Try to load from client data first
        const seoModule = await import("../client/src/data/seo-data.js");
        seoData = seoModule.seoData || {};
        console.log('[Production SEO Enhanced] ✅ Using client SEO data');
      } catch {
        try {
          // Fallback to bundled data
          const seoModule = await import("./seo-data-bundled.js");
          seoData = seoModule.seoDataBundled || {};
          console.log('[Production SEO Enhanced] Using bundled SEO data');
        } catch {
          console.log('[Production SEO Enhanced] Using fallback SEO data');
          seoData = {
            '/': {
              pageTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
              metaDescription: 'Leading provider of healthcare and life sciences solutions',
              metaKeywords: 'healthcare, life sciences, NIDDIKKARE',
              ogTitle: 'NIDDIKKARE LLP',
              ogDescription: 'Healthcare and life sciences solutions',
              ogImage: '/src/assets/niddikkare-logo.png',
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
        }
      }
      
      // Get SEO data for current path
      let pageSeoData = seoData[pathname] || seoData['/'] || {};
      console.log(`[Production SEO Enhanced] ✅ Loaded page-specific SEO data for ${pathname}: "${pageSeoData.pageTitle}"`);
      
      // Get dynamic content using the scraper
      let dynamicContent = '';
      try {
        dynamicContent = await scrapePageContent(pathname, 'http://localhost:5000');
        console.log(`[Production SEO Enhanced] Generated dynamic content: ${dynamicContent.length} chars`);
      } catch (error: any) {
        console.log(`[Production SEO Enhanced] Dynamic content generation failed:`, error?.message);
        dynamicContent = generateFallbackContent(pathname);
      }
      
      // Create the enhanced HTML template
      const htmlTemplate = createEnhancedHTMLTemplate(pageSeoData, dynamicContent);
      
      console.log(`[Production SEO Enhanced] ✅ Serving enhanced page for ${pathname}: ${pageSeoData.pageTitle}`);
      res.status(200).set({ "Content-Type": "text/html" }).send(htmlTemplate);
      
    } catch (error) {
      console.error('[Production SEO Enhanced] Error processing request:', error);
      res.status(500).send('Internal Server Error');
    }
  });
}

function createEnhancedHTMLTemplate(seoData: any, dynamicContent: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${seoData.pageTitle}</title>
  <meta name="description" content="${seoData.metaDescription}" />
  <meta name="keywords" content="${seoData.metaKeywords}" />
  <meta name="robots" content="${seoData.robotsDirective || 'index,follow'}" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="${seoData.ogTitle}" />
  <meta property="og:description" content="${seoData.ogDescription}" />
  <meta property="og:image" content="${seoData.ogImage}" />
  <meta property="og:type" content="${seoData.ogType || 'website'}" />
  <meta property="og:url" content="${seoData.canonicalUrl}" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${seoData.ogTitle}" />
  <meta name="twitter:description" content="${seoData.ogDescription}" />
  <meta name="twitter:image" content="${seoData.ogImage}" />
  
  <!-- Canonical -->
  <link rel="canonical" href="${seoData.canonicalUrl}" />
  
  <!-- Structured Data -->
  <script type="application/ld+json">
    ${JSON.stringify(seoData.structuredData, null, 2)}
  </script>
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/src/assets/niddikkare-logo.png" />
  
  <!-- Basic Styles -->
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; }
    h1 { color: #2d5016; margin-bottom: 20px; }
    p { line-height: 1.6; color: #333; }
    .seo-content { position: absolute; left: -99999px; top: -99999px; width: 1px; height: 1px; overflow: hidden; }
  </style>
</head>
<body>
  <div class="container">
    <h1>NIDDIKKARE LLP</h1>
    <p>Healthcare & Life Sciences Innovation</p>
    <p>This is a production server-side rendered page with enhanced SEO.</p>
    <p>For the full React application, please ensure your production build is properly deployed.</p>
  </div>
  
  <!-- Hidden SEO Content for Search Engines -->
  <div class="seo-content" aria-hidden="true" role="presentation">
    ${dynamicContent}
  </div>
</body>
</html>`;
}

function generateFallbackContent(pathname: string): string {
  return `<div class="fallback-content">
    <h1>NIDDIKKARE LLP Content</h1>
    <p>Healthcare and Life Sciences Innovation</p>
    <p>Page: ${pathname}</p>
  </div>`;
}