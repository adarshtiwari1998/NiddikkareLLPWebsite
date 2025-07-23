import { Express, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { seoData } from '../client/src/data/seo-data.ts';

// Generate page-specific HTML with proper SEO metadata
function generatePageHTML(requestPath: string): string {
  try {
    // Get the base HTML template
    const templatePath = path.join(process.cwd(), 'client', 'index.html');
    let html = fs.readFileSync(templatePath, 'utf-8');
    
    // Get SEO data for the specific route
    const pathSEO = seoData[requestPath] || seoData["/"];
    
    console.log(`[SSR-Routes] Generating HTML for path: ${requestPath} with title: ${pathSEO.pageTitle}`);
    
    // Replace meta tags with route-specific data
    html = html.replace(
      /<title>.*?<\/title>/i,
      `<title>${pathSEO.pageTitle}</title>`
    );
    
    html = html.replace(
      /<meta name="description" content=".*?"[^>]*>/i,
      `<meta name="description" content="${pathSEO.metaDescription}" />`
    );
    
    html = html.replace(
      /<meta name="keywords" content=".*?"[^>]*>/i,
      `<meta name="keywords" content="${pathSEO.metaKeywords}" />`
    );
    
    html = html.replace(
      /<meta name="robots" content=".*?"[^>]*>/i,
      `<meta name="robots" content="${pathSEO.robotsDirective}" />`
    );
    
    html = html.replace(
      /<meta property="og:title" content=".*?"[^>]*>/i,
      `<meta property="og:title" content="${pathSEO.ogTitle}" />`
    );
    
    html = html.replace(
      /<meta property="og:description" content=".*?"[^>]*>/i,
      `<meta property="og:description" content="${pathSEO.ogDescription}" />`
    );
    
    html = html.replace(
      /<meta property="og:url" content=".*?"[^>]*>/i,
      `<meta property="og:url" content="${pathSEO.canonicalUrl}" />`
    );
    
    html = html.replace(
      /<link rel="canonical" href=".*?"[^>]*>/i,
      `<link rel="canonical" href="${pathSEO.canonicalUrl}" />`
    );
    
    // Replace structured data if available
    if (pathSEO.structuredData) {
      const structuredDataString = JSON.stringify(pathSEO.structuredData, null, 2);
      html = html.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
        `<script type="application/ld+json">
    ${structuredDataString}
    </script>`
      );
    }
    
    return html;
  } catch (error) {
    console.error('Error generating page HTML:', error);
    throw error;
  }
}

// Setup server-side rendering routes for specific pages
export function setupSSRRoutes(app: Express) {
  // Get all routes from SEO data (excluding home page which is handled by default)
  const routes = Object.keys(seoData).filter(route => route !== '/');
  
  routes.forEach(route => {
    app.get(route, (req: Request, res: Response, next) => {
      // Skip if this is a request for static assets
      if (req.path.startsWith('/assets/') || req.path.includes('.')) {
        return next();
      }
      
      try {
        // Generate page-specific HTML
        const html = generatePageHTML(route);
        
        // Send the HTML with proper content type
        res.set('Content-Type', 'text/html');
        res.send(html);
      } catch (error) {
        console.error(`SSR Error for route ${route}:`, error);
        // Fall back to default Vite handling
        next();
      }
    });
  });
  
  console.log(`[SSR-Routes] Created SSR routes for ${routes.length} pages`);
}