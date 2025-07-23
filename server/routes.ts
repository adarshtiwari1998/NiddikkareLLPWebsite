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
    <priority>0.9</priority>
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
    <loc>https://niddikkare.com/healthcare/medical-linens/woven</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/healthcare/medical-linens/non-woven</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/healthcare/medical-linens/blended</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/life-sciences</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
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
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/company/news</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/neonatal-care/baby-first-touch</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/medical-linens/baby-first-touch</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/medical-linens/maternity-gown</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/medical-linens/mackintosh-rubber-sheet</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/medical-linens/bedsheet-pillow-covers</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/medical-linens/surgical-drapes-towels</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/medical-linens/scrub-suit</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/medical-linens/patient-gown</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/medical-linens/surgical-ot-gown</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/products/medical-linens/surgical-cut-sheets</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/tools-testing</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/tools-testing/testing/filtration</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/tools-testing/testing/rapid-tests</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/tools-testing/testing/chromatography</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/tools-testing/testing/bioanalysis</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/tools-testing/testing/water-analysis</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/services/consultancy-ivd</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/services/contract-research</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/services/oem-products</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/it-solutions/rpo</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/it-solutions/contingent</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/it-solutions/web-app-solutions</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/gut-care</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/privacy-policy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/terms-of-service</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://niddikkare.com/cookie-policy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
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
