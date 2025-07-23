import fs from 'fs';
import path from 'path';
import { seoData } from '../client/src/data/seo-data.js';

// Function to create an HTML handler for specific routes (removed - now inline)

// Create routes for all pages that need SEO
export function setupSSRRoutes(app: any) {
  const routes = Object.keys(seoData);
  
  routes.forEach(route => {
    if (route !== '/') {
      // Only create routes for actual page paths, not component files
      app.get(route, (req: any, res: any, next: any) => {
        // Skip if this looks like a component/asset request
        if (req.path.includes('.tsx') || req.path.includes('.ts') || 
            req.path.includes('.js') || req.path.includes('.css') || 
            req.path.includes('.png') || req.path.includes('.jpg') || 
            req.path.includes('.ico') || req.path.includes('.svg')) {
          return next();
        }
        
        try {
          // Get the base HTML template
          const templatePath = path.join(process.cwd(), 'client', 'index.html');
          let html = fs.readFileSync(templatePath, 'utf-8');
          
          // Get SEO data for this specific route
          const seoConfig = seoData[route] || seoData['/'];
          
          // Replace meta tags with route-specific data
          html = html.replace(
            /<title>.*?<\/title>/i,
            `<title>${seoConfig.pageTitle}</title>`
          );
          
          html = html.replace(
            /<meta name="description" content=".*?"[^>]*>/i,
            `<meta name="description" content="${seoConfig.metaDescription}" />`
          );
          
          html = html.replace(
            /<meta name="keywords" content=".*?"[^>]*>/i,
            `<meta name="keywords" content="${seoConfig.metaKeywords}" />`
          );
          
          html = html.replace(
            /<meta name="robots" content=".*?"[^>]*>/i,
            `<meta name="robots" content="${seoConfig.robotsDirective}" />`
          );
          
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
          
          html = html.replace(
            /<link rel="canonical" href=".*?"[^>]*>/i,
            `<link rel="canonical" href="${seoConfig.canonicalUrl}" />`
          );
          
          // Replace structured data if available
          if (seoConfig.structuredData) {
            const structuredDataString = JSON.stringify(seoConfig.structuredData, null, 2);
            html = html.replace(
              /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
              `<script type="application/ld+json">
    ${structuredDataString}
    </script>`
            );
          }
          
          res.set('Content-Type', 'text/html');
          res.send(html);
        } catch (error) {
          console.error('SSR Error:', error);
          next(); // Fall back to Vite
        }
      });
    }
  });
  
  console.log(`Created SSR routes for ${routes.length} pages`);
}