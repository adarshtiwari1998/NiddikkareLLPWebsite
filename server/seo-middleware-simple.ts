import express, { type Express, type Request, type Response, type NextFunction } from "express";

export function setupSEOMiddleware(app: Express) {
  // Simple SEO middleware for development - just basic meta tag injection
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

    // Store basic SEO data for this request
    (req as any).seoData = {
      pageTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
      metaDescription: 'Leading provider of healthcare and life sciences solutions',
      metaKeywords: 'healthcare, life sciences, NIDDIKKARE',
      ogTitle: 'NIDDIKKARE LLP',
      ogDescription: 'Healthcare and life sciences solutions',
      ogImage: '/src/assets/niddikkare-logo.png',
      ogType: 'website',
      canonicalUrl: 'https://niddikkare.com' + pathname,
      robotsDirective: 'index,follow',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      }
    };
    (req as any).seoPath = pathname;
    
    next();
  });
}