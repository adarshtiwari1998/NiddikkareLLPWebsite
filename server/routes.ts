import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateSitemap, generateRobotsTxt } from "./seo-utils.js";
// import { setupCriticalSSRRoutes } from "./seo-routes.js";

export async function registerRoutes(app: Express): Promise<Server> {
  // DISABLED: Setup critical SSR routes for problematic pages to prevent conflicts with Vite
  // setupCriticalSSRRoutes(app);

  // SEO routes for sitemap.xml, robots.txt, and schema.json
  app.get("/sitemap.xml", (req, res) => {
    try {
      const sitemap = generateSitemap();
      res.set('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  app.get("/robots.txt", (req, res) => {
    try {
      const robotsTxt = generateRobotsTxt();
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
        "founder": [
          {
            "@type": "Person",
            "name": "Dr. Samar Husain Naqvi",
            "jobTitle": "Managing Director & Co-Founder",
            "description": "20+ years of experience in Life Sciences, Molecular Diagnostics, and IVD medical devices"
          },
          {
            "@type": "Person",
            "name": "Dr. Abhishek Chanchal",
            "jobTitle": "Director & Co-Founder",
            "description": "15+ years of expertise in Chemical Biology, Nanotechnology, and Analytical Instrumentation"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://niddikkare.com/contact"
        },
        "sameAs": [
          "https://linkedin.com/company/niddikkare",
          "https://twitter.com/niddikkare",
          "https://instagram.com/niddikkare",
          "https://youtube.com/@niddikkare"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Healthcare & Life Sciences Products",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Neonatal Care Products",
                "category": "Healthcare Equipment",
                "description": "Specialized products for newborn and infant care"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Medical Linens",
                "category": "Medical Textiles",
                "description": "Premium quality medical textiles for healthcare facilities"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "DNA/RNA Extraction Kits",
                "category": "Laboratory Equipment",
                "description": "High-performance nucleic acid extraction solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Molecular Diagnostics",
                "category": "Diagnostic Equipment",
                "description": "Advanced diagnostic solutions for precision disease detection"
              }
            }
          ]
        },
        "knowsAbout": [
          "Healthcare Innovation",
          "Life Sciences",
          "Neonatal Care",
          "Medical Linens",
          "DNA RNA Extraction",
          "Molecular Diagnostics",
          "Laboratory Equipment",
          "Medical Devices",
          "Biotechnology"
        ],
        "areaServed": "Worldwide",
        "serviceType": [
          "Healthcare Product Manufacturing",
          "Life Sciences Solutions",
          "Laboratory Equipment Supply",
          "Medical Device Development"
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
