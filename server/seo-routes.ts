import { Express, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { seoData } from '../client/src/data/seo-data.js';

// Create a specific route handler for each page that needs SSR
function createSSRPageRoute(app: Express, routePath: string) {
  app.get(routePath, (req: Request, res: Response) => {
    try {
      // Read the HTML template
      const templatePath = path.join(process.cwd(), 'client', 'index.html');
      let html = fs.readFileSync(templatePath, 'utf-8');
      
      // Get SEO data for this route
      const seoConfig = seoData[routePath] || seoData['/'];
      
      // Replace title
      html = html.replace(
        /<title>.*?<\/title>/i,
        `<title>${seoConfig.pageTitle}</title>`
      );
      
      // Replace meta description
      html = html.replace(
        /<meta name="description" content=".*?"[^>]*>/i,
        `<meta name="description" content="${seoConfig.metaDescription}" />`
      );
      
      // Replace meta keywords
      html = html.replace(
        /<meta name="keywords" content=".*?"[^>]*>/i,
        `<meta name="keywords" content="${seoConfig.metaKeywords}" />`
      );
      
      // Replace robots directive
      html = html.replace(
        /<meta name="robots" content=".*?"[^>]*>/i,
        `<meta name="robots" content="${seoConfig.robotsDirective}" />`
      );
      
      // Replace Open Graph tags
      html = html.replace(
        /<meta property="og:title" content=".*?"[^>]*>/i,
        `<meta property="og:title" content="${seoConfig.ogTitle}" />`
      );
      
      html = html.replace(
        /<meta property="og:description" content=".*?"[^>]*>/i,
        `<meta property="og:description" content="${seoConfig.ogDescription}" />`
      );
      
      html = html.replace(
        /<meta property="og:url" content=".*?"[^>]*>/i,
        `<meta property="og:url" content="${seoConfig.canonicalUrl}" />`
      );
      
      // Replace canonical URL
      html = html.replace(
        /<link rel="canonical" href=".*?"[^>]*>/i,
        `<link rel="canonical" href="${seoConfig.canonicalUrl}" />`
      );
      
      // Replace structured data
      if (seoConfig.structuredData) {
        const structuredDataString = JSON.stringify(seoConfig.structuredData, null, 2);
        html = html.replace(
          /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
          `<script type="application/ld+json">
    ${structuredDataString}
    </script>`
        );
      }
      
      // Set proper headers
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    } catch (error) {
      console.error('SSR Error for', routePath, ':', error);
      res.status(500).send('Server Error');
    }
  });
}

// Setup SSR for ALL routes that have SEO data
export function setupCriticalSSRRoutes(app: Express) {
  // Get all routes from seoData - this covers ALL 51+ pages
  const allRoutes = Object.keys(seoData);
  
  // Filter out root route as it's handled by Vite
  const pageRoutes = allRoutes.filter(route => route !== '/');
  
  console.log(`🚀 Setting up SSR for ${pageRoutes.length} pages`);
  
  pageRoutes.forEach(route => {
    console.log(`Creating SSR route for: ${route}`);
    createSSRPageRoute(app, route);
  });
  
  console.log(`✅ Created SSR routes for ALL ${pageRoutes.length} pages with SEO data`);
}