import { Router } from "express";
import { generateSitemap, generateRobotsTxt } from "../../client/src/data/seo-data.js";

const router = Router();

// Sitemap.xml endpoint
router.get("/sitemap.xml", (req, res) => {
  try {
    const sitemap = generateSitemap();
    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
});

// Robots.txt endpoint
router.get("/robots.txt", (req, res) => {
  try {
    const robotsTxt = generateRobotsTxt();
    res.set('Content-Type', 'text/plain');
    res.send(robotsTxt);
  } catch (error) {
    console.error('Error generating robots.txt:', error);
    res.status(500).send('Error generating robots.txt');
  }
});

// Schema.org endpoint for structured data validation
router.get("/schema.json", (req, res) => {
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
              "category": "Healthcare Equipment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Medical Linens",
              "category": "Medical Textiles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "DNA/RNA Extraction Kits",
              "category": "Laboratory Equipment"
            }
          }
        ]
      }
    };
    
    res.json(schemaOrg);
  } catch (error) {
    console.error('Error generating schema:', error);
    res.status(500).json({ error: 'Error generating schema' });
  }
});

export default router;