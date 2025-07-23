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
      // Load SEO data
      let seoData: any = {};
      try {
        const seoModule = await import("./seo-data-bundled.js");
        seoData = seoModule.seoDataBundled || {};
        console.log('[Production SEO Enhanced] Using bundled SEO data');
      } catch {
        console.log('[Production SEO Enhanced] Using fallback SEO data');
        seoData = {
          '/': {
            pageTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
            metaDescription: 'Leading provider of healthcare and life sciences solutions',
            keywords: 'healthcare, life sciences, NIDDIKKARE',
            openGraph: {
              title: 'NIDDIKKARE LLP',
              description: 'Healthcare and life sciences solutions',
              image: '/src/assets/niddikkare-logo.png',
              url: 'https://niddikkare.com'
            },
            twitter: {
              card: 'summary_large_image',
              title: 'NIDDIKKARE LLP',
              description: 'Healthcare and life sciences solutions'
            },
            structuredData: {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NIDDIKKARE LLP"
            }
          }
        };
      }
      
      // Get SEO data for current path
      let pageSeoData = seoData[pathname] || seoData['/'];
      
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
  <meta name="description" content="${seoData.metaDescription || seoData.openGraph?.description}" />
  <meta name="keywords" content="${seoData.keywords}" />
  <meta name="robots" content="index,follow" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="${seoData.openGraph?.title}" />
  <meta property="og:description" content="${seoData.openGraph?.description}" />
  <meta property="og:image" content="${seoData.openGraph?.image}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${seoData.openGraph?.url}" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="${seoData.twitter?.card || 'summary_large_image'}" />
  <meta name="twitter:title" content="${seoData.twitter?.title}" />
  <meta name="twitter:description" content="${seoData.twitter?.description}" />
  <meta name="twitter:image" content="${seoData.twitter?.image || seoData.openGraph?.image}" />
  
  <!-- Structured Data -->
  <script type="application/ld+json">
    ${JSON.stringify(seoData.structuredData, null, 2)}
  </script>
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/src/assets/niddikkare-logo.png" />
  
  <!-- Styles -->
  <script type="module" crossorigin src="/assets/index.js"></script>
  <link rel="stylesheet" href="/assets/index.css">
</head>
<body>
  <!-- Main React App -->
  <div id="root"></div>
  
  <!-- SEO Content for Search Engines (Hidden from Users) -->
  <div id="seo-crawler-content" style="position: absolute !important; left: -99999px !important; top: -99999px !important; width: 1px !important; height: 1px !important; overflow: hidden !important; clip: rect(1px, 1px, 1px, 1px) !important; white-space: nowrap !important; border: 0 !important; padding: 0 !important; margin: 0 !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; z-index: -9999 !important; font-size: 0px !important;" aria-hidden="true" role="presentation">
    ${dynamicContent}
  </div>

  <!-- React App Initialization -->
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
}

function generateFallbackContent(pathname: string): string {
  if (pathname === '/') {
    return `
      <main>
        <h1>NIDDIKKARE LLP - Healthcare & Life Sciences Innovation</h1>
        <p>Leading provider of healthcare and life sciences solutions including neonatal care products, premium medical linens, DNA/RNA extraction kits, molecular diagnostics, and advanced testing solutions. Trusted by healthcare professionals worldwide.</p>
        
        <section>
          <h2>Our Core Solutions</h2>
          <div>
            <h3>Healthcare Products</h3>
            <p>Premium neonatal care and medical linens for healthcare facilities worldwide.</p>
            <ul>
              <li>Neonatal Care Products</li>
              <li>Medical Linens (Woven, Non-woven, Blended)</li>
              <li>Surgical Drapes and Gowns</li>
              <li>Patient Care Products</li>
            </ul>
          </div>
          
          <div>
            <h3>Life Sciences</h3>
            <p>Advanced DNA/RNA extraction kits and molecular diagnostics solutions.</p>
            <ul>
              <li>DNA/RNA Extraction Kits</li>
              <li>Molecular Diagnostics</li>
              <li>Gut Care Solutions</li>
              <li>Research Applications</li>
            </ul>
          </div>
          
          <div>
            <h3>Digital Tools & Testing</h3>
            <p>Comprehensive laboratory management tools and testing solutions.</p>
            <ul>
              <li>E-Learning Resources</li>
              <li>Sample Request Systems</li>
              <li>Filtration & Testing Tools</li>
              <li>Laboratory Finders</li>
            </ul>
          </div>
        </section>
      </main>
    `;
  }
  
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments[0] === 'healthcare') {
    return `
      <main>
        <h1>Healthcare Solutions</h1>
        <p>Comprehensive healthcare solutions including neonatal care products and premium medical linens.</p>
        <section>
          <h2>Neonatal Care</h2>
          <p>Specialized products for newborn care and temperature regulation.</p>
        </section>
        <section>
          <h2>Medical Linens</h2>
          <p>Premium medical textiles including woven, non-woven, and blended materials.</p>
        </section>
      </main>
    `;
  }
  
  if (segments[0] === 'contact') {
    return `
      <main>
        <h1>Contact NIDDIKKARE LLP</h1>
        <p>Get in touch with our healthcare and life sciences experts for consultation and support.</p>
        <section>
          <h2>Contact Information</h2>
          <p>Reach out to us for healthcare solutions and consultation.</p>
        </section>
      </main>
    `;
  }
  
  return `
    <main>
      <h1>NIDDIKKARE LLP</h1>
      <p>Healthcare and life sciences solutions provider.</p>
    </main>
  `;
}