import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { seoData } from '../client/src/data/seo-data.js';

// Middleware to inject page-specific SEO metadata into HTML for SSR
export function seoMiddleware(req: Request, res: Response, next: NextFunction) {
  // Only handle HTML requests that are not API routes
  if (req.path.startsWith('/api') || req.path.includes('.')) {
    return next();
  }

  // Store original methods
  const originalSend = res.send;
  const originalEnd = res.end;
  const originalWrite = res.write;
  
  let body = '';
  
  // Override write to capture response chunks
  res.write = function(chunk: any, encoding?: any) {
    if (typeof chunk === 'string') {
      body += chunk;
    } else if (chunk instanceof Buffer) {
      body += chunk.toString();
    }
    return originalWrite.call(this, chunk, encoding);
  };
  
  // Override end to process final response
  res.end = function(chunk?: any, encoding?: any) {
    if (chunk) {
      if (typeof chunk === 'string') {
        body += chunk;
      } else if (chunk instanceof Buffer) {
        body += chunk.toString();
      }
    }
    
    // If this is an HTML response, inject SEO metadata
    if (body.includes('<!DOCTYPE html>') && res.getHeader('content-type')?.toString().includes('text/html')) {
      try {
        const pathSEO = seoData[req.path] || seoData["/"];
        const modifiedHTML = injectSEOMetadata(body, pathSEO, req.path);
        
        // Update content length
        res.setHeader('content-length', Buffer.byteLength(modifiedHTML));
        
        return originalEnd.call(this, modifiedHTML, encoding);
      } catch (error) {
        console.error('Error injecting SEO metadata:', error);
      }
    }
    
    return originalEnd.call(this, chunk, encoding);
  };
  
  // Override send to capture and process response
  res.send = function(responseBody: any) {
    // Only modify HTML responses
    if (typeof responseBody === 'string' && responseBody.includes('<!DOCTYPE html>')) {
      try {
        const pathSEO = seoData[req.path] || seoData["/"];
        const modifiedHTML = injectSEOMetadata(responseBody, pathSEO, req.path);
        return originalSend.call(this, modifiedHTML);
      } catch (error) {
        console.error('Error injecting SEO metadata:', error);
      }
    }
    return originalSend.call(this, responseBody);
  };

  next();
}

function injectSEOMetadata(html: string, seoConfig: any, currentPath: string): string {
  let modifiedHTML = html;

  // Replace title
  modifiedHTML = modifiedHTML.replace(
    /<title>.*?<\/title>/i,
    `<title>${seoConfig.pageTitle}</title>`
  );

  // Replace meta description
  modifiedHTML = modifiedHTML.replace(
    /<meta name="description" content=".*?"[^>]*>/i,
    `<meta name="description" content="${seoConfig.metaDescription}" />`
  );

  // Replace meta keywords
  modifiedHTML = modifiedHTML.replace(
    /<meta name="keywords" content=".*?"[^>]*>/i,
    `<meta name="keywords" content="${seoConfig.metaKeywords}" />`
  );

  // Replace robots directive
  modifiedHTML = modifiedHTML.replace(
    /<meta name="robots" content=".*?"[^>]*>/i,
    `<meta name="robots" content="${seoConfig.robotsDirective}" />`
  );

  // Replace Open Graph title
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:title" content=".*?"[^>]*>/i,
    `<meta property="og:title" content="${seoConfig.ogTitle}" />`
  );

  // Replace Open Graph description
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:description" content=".*?"[^>]*>/i,
    `<meta property="og:description" content="${seoConfig.ogDescription}" />`
  );

  // Replace Open Graph image
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:image" content=".*?"[^>]*>/i,
    `<meta property="og:image" content="${seoConfig.ogImage}" />`
  );

  // Replace Open Graph type
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:type" content=".*?"[^>]*>/i,
    `<meta property="og:type" content="${seoConfig.ogType}" />`
  );

  // Replace Open Graph URL
  modifiedHTML = modifiedHTML.replace(
    /<meta property="og:url" content=".*?"[^>]*>/i,
    `<meta property="og:url" content="${seoConfig.canonicalUrl}" />`
  );

  // Replace Twitter card title
  modifiedHTML = modifiedHTML.replace(
    /<meta name="twitter:title" content=".*?"[^>]*>/i,
    `<meta name="twitter:title" content="${seoConfig.ogTitle}" />`
  );

  // Replace Twitter card description
  modifiedHTML = modifiedHTML.replace(
    /<meta name="twitter:description" content=".*?"[^>]*>/i,
    `<meta name="twitter:description" content="${seoConfig.ogDescription}" />`
  );

  // Replace Twitter card image
  modifiedHTML = modifiedHTML.replace(
    /<meta name="twitter:image" content=".*?"[^>]*>/i,
    `<meta name="twitter:image" content="${seoConfig.ogImage}" />`
  );

  // Replace canonical URL
  modifiedHTML = modifiedHTML.replace(
    /<link rel="canonical" href=".*?"[^>]*>/i,
    `<link rel="canonical" href="${seoConfig.canonicalUrl}" />`
  );

  // Replace structured data (JSON-LD)
  if (seoConfig.structuredData) {
    const structuredDataString = JSON.stringify(seoConfig.structuredData, null, 2);
    modifiedHTML = modifiedHTML.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">
    ${structuredDataString}
    </script>`
    );
  }

  return modifiedHTML;
}