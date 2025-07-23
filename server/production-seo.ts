import express, { type Express, type Request, type Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setupProductionSEO(app: Express) {
  const distPath = path.resolve(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static assets (but not index.html)
  app.use(express.static(distPath, { 
    index: false, // Don't serve index.html automatically
    extensions: ['html'] 
  }));

  // Handle all routes with SEO injection
  app.use("*", async (req: Request, res: Response) => {
    const pathname = req.originalUrl.split('?')[0];
    const indexPath = path.resolve(distPath, "index.html");
    
    console.log(`[Production SEO] Processing: ${pathname}`);
    
    try {
      // Import SEO data dynamically
      let seoData;
      try {
        const seoModule = await import("./seo-data-bundled.js");
        seoData = seoModule.seoData;
        console.log('[Production SEO] Using bundled SEO data');
      } catch {
        try {
          const seoModule = await import("../client/src/data/seo-data.js");
          seoData = seoModule.seoData;
          console.log('[Production SEO] Using client source SEO data');
        } catch {
          console.error('[Production SEO] Failed to load SEO data, using fallback');
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
        }
      }
      
      // Get SEO data for current path
      let pageSeoData = seoData[pathname] || seoData['/'];
      
      console.log(`[Production SEO] Found SEO data for ${pathname}:`, !!pageSeoData);
      
      // Read the index.html template
      const template = await fs.promises.readFile(indexPath, "utf-8");
      
      if (pageSeoData && template.includes('<html')) {
        let modifiedTemplate = template;
        
        // Replace title
        modifiedTemplate = modifiedTemplate.replace(
          /<title[^>]*>.*?<\/title>/gi,
          `<title>${pageSeoData.pageTitle}</title>`
        );
        
        // Inject or replace meta description
        if (modifiedTemplate.includes('name="description"')) {
          modifiedTemplate = modifiedTemplate.replace(
            /<meta\s+name=["']description["'][^>]*>/gi,
            `<meta name="description" content="${pageSeoData.metaDescription}" />`
          );
        } else {
          modifiedTemplate = modifiedTemplate.replace(
            /<head>/i,
            `<head>\n    <meta name="description" content="${pageSeoData.metaDescription}" />`
          );
        }
        
        // Inject or replace meta keywords
        if (modifiedTemplate.includes('name="keywords"')) {
          modifiedTemplate = modifiedTemplate.replace(
            /<meta\s+name=["']keywords["'][^>]*>/gi,
            `<meta name="keywords" content="${pageSeoData.metaKeywords}" />`
          );
        } else {
          modifiedTemplate = modifiedTemplate.replace(
            /<head>/i,
            `<head>\n    <meta name="keywords" content="${pageSeoData.metaKeywords}" />`
          );
        }
        
        // Inject or replace robots meta
        if (modifiedTemplate.includes('name="robots"')) {
          modifiedTemplate = modifiedTemplate.replace(
            /<meta\s+name=["']robots["'][^>]*>/gi,
            `<meta name="robots" content="${pageSeoData.robotsDirective}" />`
          );
        } else {
          modifiedTemplate = modifiedTemplate.replace(
            /<head>/i,
            `<head>\n    <meta name="robots" content="${pageSeoData.robotsDirective}" />`
          );
        }
        
        // Remove existing OG and Twitter tags first
        modifiedTemplate = modifiedTemplate.replace(
          /<meta\s+property=["']og:[^"']*["'][^>]*>/gi,
          ''
        );
        modifiedTemplate = modifiedTemplate.replace(
          /<meta\s+name=["']twitter:[^"']*["'][^>]*>/gi,
          ''
        );
        
        // Inject Open Graph and Twitter tags in proper order (after basic meta tags)
        const socialMetaTags = [
          `<meta property="og:title" content="${pageSeoData.ogTitle}" />`,
          `<meta property="og:description" content="${pageSeoData.ogDescription}" />`,
          `<meta property="og:image" content="${pageSeoData.ogImage}" />`,
          `<meta property="og:type" content="${pageSeoData.ogType}" />`,
          `<meta property="og:url" content="${pageSeoData.canonicalUrl}" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${pageSeoData.ogTitle}" />`,
          `<meta name="twitter:description" content="${pageSeoData.ogDescription}" />`,
          `<meta name="twitter:image" content="${pageSeoData.ogImage}" />`
        ];
        
        // Insert social meta tags after the robots meta tag for proper order
        modifiedTemplate = modifiedTemplate.replace(
          /(<meta\s+name=["']robots["'][^>]*>\s*)/i,
          `$1\n    ${socialMetaTags.join('\n    ')}\n    `
        );
        
        // Inject or replace canonical URL
        if (modifiedTemplate.includes('rel="canonical"')) {
          modifiedTemplate = modifiedTemplate.replace(
            /<link\s+rel=["']canonical["'][^>]*>/gi,
            `<link rel="canonical" href="${pageSeoData.canonicalUrl}" />`
          );
        } else {
          modifiedTemplate = modifiedTemplate.replace(
            /<head>/i,
            `<head>\n    <link rel="canonical" href="${pageSeoData.canonicalUrl}" />`
          );
        }
        
        // Inject or replace structured data
        const structuredDataJson = JSON.stringify(pageSeoData.structuredData, null, 2);
        if (modifiedTemplate.includes('application/ld+json')) {
          modifiedTemplate = modifiedTemplate.replace(
            /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
            `<script type="application/ld+json">\n    ${structuredDataJson}\n    </script>`
          );
        } else {
          modifiedTemplate = modifiedTemplate.replace(
            /<\/head>/i,
            `    <script type="application/ld+json">\n    ${structuredDataJson}\n    </script>\n</head>`
          );
        }
        
        console.log(`[Production SEO] ✅ PRODUCTION SEO INJECTED for ${pathname}: ${pageSeoData.pageTitle}`);
        res.status(200).set({ "Content-Type": "text/html" }).send(modifiedTemplate);
      } else {
        console.log(`[Production SEO] No SEO data found for ${pathname}, serving default template`);
        res.status(200).set({ "Content-Type": "text/html" }).send(template);
      }
    } catch (error) {
      console.error('[Production SEO] Error processing request:', error);
      res.status(404).send('Not Found');
    }
  });
}