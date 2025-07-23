import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // SEO routes for sitemap.xml, robots.txt, and schema.json
  app.get("/sitemap.xml", (req, res) => {
    try {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://niddikkare.com</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/healthcare</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/healthcare/neonatal-care</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/healthcare/medical-linens</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/life-sciences</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/life-sciences/dna-rna-extraction</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/life-sciences/molecular-diagnostics</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/company</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/company/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/company/leadership-team</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/company/news</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/gut-care</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/privacy-policy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/terms-of-service</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/cookie-policy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;
      res.set('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  app.get("/robots.txt", (req, res) => {
    try {
      const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://niddikkare.com/sitemap.xml

# Allow all pages for SEO
Allow: /healthcare
Allow: /life-sciences
Allow: /company
Allow: /contact
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /cookie-policy
Allow: /gut-care
`;
      res.set('Content-Type', 'text/plain');
      res.send(robotsTxt);
    } catch (error) {
      console.error('Error generating robots.txt:', error);
      res.status(500).send('Error generating robots.txt');
    }
  });

  app.get("/schema.json", (req, res) => {
    try {
      const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NIDDIKKARE LLP",
        "url": "https://niddikkare.com",
        "logo": "https://niddikkare.com/assets/images/niddikkare-logo.png",
        "description": "Leading healthcare and life sciences company specializing in neonatal care, medical linens, DNA/RNA extraction, and molecular diagnostics",
        "foundingDate": "2021",
        "founders": [
          {
            "@type": "Person",
            "name": "Dr. Samar Husain Naqvi",
            "jobTitle": "Managing Director & Co-Founder"
          },
          {
            "@type": "Person",
            "name": "Dr. Abhishek Chanchal",
            "jobTitle": "Director & Co-Founder"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://linkedin.com/company/niddikkare",
          "https://twitter.com/niddikkare",
          "https://instagram.com/niddikkare",
          "https://youtube.com/@niddikkare"
        ]
      };
      
      res.json(schemaOrg);
    } catch (error) {
      console.error('Error generating schema:', error);
      res.status(500).json({ error: 'Error generating schema' });
    }
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
