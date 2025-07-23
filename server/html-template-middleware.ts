import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { seoData } from '../client/src/data/seo-data.js';

// Function to inject SEO metadata directly into the HTML template
export function generateHTMLWithSEO(originalHTML: string, requestPath: string): string {
  const pathSEO = seoData[requestPath] || seoData["/"];
  
  // Replace the static title with dynamic title
  let modifiedHTML = originalHTML.replace(
    /<title>.*?<\/title>/i,
    `<title>${pathSEO.pageTitle}</title>`
  );

  // Replace meta description
  modifiedHTML = modifiedHTML.replace(
    /<meta name="description" content=".*?"[^>]*>/i,
    `<meta name="description" content="${pathSEO.metaDescription}" />`
  );

  // Replace meta keywords
  modifiedHTML = modifiedHTML.replace(
    /<meta name="keywords" content=".*?"[^>]*>/i,
    `<meta name="keywords" content="${pathSEO.metaKeywords}" />`
  );

  // Replace robots directive
  modifiedHTML = modifiedHTML.replace(
    /<meta name="robots" content=".*?"[^>]*>/i,
    `<meta name="robots" content="${pathSEO.robotsDirective}" />`
  );

  // Replace Open Graph title
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:title" content=".*?"[^>]*>/i,
    `<meta property="og:title" content="${pathSEO.ogTitle}" />`
  );

  // Replace Open Graph description
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:description" content=".*?"[^>]*>/i,
    `<meta property="og:description" content="${pathSEO.ogDescription}" />`
  );

  // Replace Open Graph image
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:image" content=".*?"[^>]*>/i,
    `<meta property="og:image" content="${pathSEO.ogImage}" />`
  );

  // Replace Open Graph type
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:type" content=".*?"[^>]*>/i,
    `<meta property="og:type" content="${pathSEO.ogType}" />`
  );

  // Replace Open Graph URL
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:url" content=".*?"[^>]*>/i,
    `<meta property="og:url" content="${pathSEO.canonicalUrl}" />`
  );

  // Replace Twitter card title
  modifiedHTML = modifiedHTML.replace(
    /<meta name="twitter:title" content=".*?"[^>]*>/i,
    `<meta name="twitter:title" content="${pathSEO.ogTitle}" />`
  );

  // Replace Twitter card description
  modifiedHTML = modifiedHTML.replace(
    /<meta name="twitter:description" content=".*?"[^>]*>/i,
    `<meta name="twitter:description" content="${pathSEO.ogDescription}" />`
  );

  // Replace Twitter card image
  modifiedHTML = modifiedHTML.replace(
    /<meta name="twitter:image" content=".*?"[^>]*>/i,
    `<meta name="twitter:image" content="${pathSEO.ogImage}" />`
  );

  // Replace canonical URL
  modifiedHTML = modifiedHTML.replace(
    /<link rel="canonical" href=".*?"[^>]*>/i,
    `<link rel="canonical" href="${pathSEO.canonicalUrl}" />`
  );

  // Replace structured data (JSON-LD)
  if (pathSEO.structuredData) {
    const structuredDataString = JSON.stringify(pathSEO.structuredData, null, 2);
    modifiedHTML = modifiedHTML.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">
    ${structuredDataString}
    </script>`
    );
  }

  return modifiedHTML;
}

// Middleware to intercept HTML responses and inject SEO metadata
export function htmlSEOMiddleware(req: Request, res: Response, next: NextFunction) {
  // Skip API routes and static files
  if (req.path.startsWith('/api') || req.path.includes('.')) {
    return next();
  }

  // Store the original end method
  const originalEnd = res.end;
  
  // Override the end method to intercept responses
  res.end = function(chunk?: any, encoding?: any) {
    if (chunk && typeof chunk === 'string' && chunk.includes('<!DOCTYPE html>')) {
      // This is an HTML response, inject SEO metadata
      const modifiedHTML = generateHTMLWithSEO(chunk, req.path);
      return originalEnd.call(this, modifiedHTML, encoding);
    }
    
    return originalEnd.call(this, chunk, encoding);
  };

  next();
}