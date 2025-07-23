// SEO Management Data for NIDDIKKARE LLP
// This file contains all SEO metadata for every page in the application

export interface SEOData {
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  canonicalUrl: string;
  robotsDirective: string;
  structuredData: object;
}

const baseUrl = "https://niddikkare.com";
const logoUrl = `${baseUrl}/assets/images/niddikkare-logo.png`;

export const seoData: Record<string, SEOData> = {
  // Home Page
  "/": {
    pageTitle: "NIDDIKKARE LLP - Healthcare & Life Sciences Innovation | Neonatal Care, Medical Linens, DNA/RNA Extraction",
    metaDescription: "NIDDIKKARE LLP specializes in healthcare and life sciences solutions including neonatal care products, premium medical linens, DNA/RNA extraction kits, molecular diagnostics, and advanced testing solutions. Trusted by healthcare professionals worldwide.",
    metaKeywords: "NIDDIKKARE, healthcare innovation, life sciences, neonatal care, medical linens, DNA RNA extraction, molecular diagnostics, medical devices, healthcare products, biotechnology",
    ogTitle: "NIDDIKKARE LLP - Leading Healthcare & Life Sciences Innovation",
    ogDescription: "Transforming healthcare with innovative neonatal care products, premium medical linens, advanced DNA/RNA extraction solutions, and cutting-edge molecular diagnostics.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: baseUrl,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NIDDIKKARE LLP",
      "url": baseUrl,
      "logo": logoUrl,
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
    }
  },

  // Healthcare Pages
  "/healthcare": {
    pageTitle: "Healthcare Solutions | NIDDIKKARE LLP - Neonatal Care & Medical Linens",
    metaDescription: "Explore NIDDIKKARE's comprehensive healthcare solutions including specialized neonatal care products and premium medical linens for hospitals, clinics, and healthcare facilities.",
    metaKeywords: "healthcare solutions, neonatal care, medical linens, hospital products, healthcare textiles, medical equipment, patient care, hospital supplies",
    ogTitle: "Healthcare Solutions - Neonatal Care & Medical Linens | NIDDIKKARE",
    ogDescription: "Comprehensive healthcare products designed for superior patient care and safety in medical facilities worldwide.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/healthcare`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Healthcare Solutions",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Healthcare Product Manufacturing",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Healthcare Products",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Neonatal Care Products",
              "description": "Specialized products for newborn and infant care"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Product",
              "name": "Medical Linens",
              "description": "Premium quality medical textiles for healthcare facilities"
            }
          }
        ]
      }
    }
  },

  "/healthcare/neonatal-care": {
    pageTitle: "Neonatal Care Products | NIDDIKKARE LLP - Advanced Newborn Care Solutions",
    metaDescription: "Discover NIDDIKKARE's specialized neonatal care products designed for optimal newborn health and safety. Hospital-grade quality products trusted by healthcare professionals.",
    metaKeywords: "neonatal care, newborn care, infant care products, hospital grade, baby care, medical devices, neonatal equipment, healthcare innovation",
    ogTitle: "Neonatal Care Products - Advanced Newborn Care | NIDDIKKARE",
    ogDescription: "Specialized neonatal care products ensuring optimal health and safety for newborns in healthcare facilities.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/healthcare/neonatal-care`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "name": "Neonatal Care Products",
      "description": "Specialized products for newborn and infant care in healthcare facilities",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Equipment",
      "hasVariant": [
        {
          "@type": "Product",
          "name": "Baby's First Touch",
          "description": "Premium neonatal care product for newborn safety and comfort"
        }
      ]
    }
  },

  "/healthcare/medical-linens": {
    pageTitle: "Medical Linens | NIDDIKKARE LLP - Premium Healthcare Textiles",
    metaDescription: "Premium medical linens including surgical drapes, patient gowns, scrub suits, and bedding solutions. High-quality healthcare textiles for hospitals and medical facilities.",
    metaKeywords: "medical linens, surgical drapes, patient gowns, scrub suits, medical textiles, hospital bedding, healthcare fabrics, medical clothing",
    ogTitle: "Medical Linens - Premium Healthcare Textiles | NIDDIKKARE",
    ogDescription: "High-quality medical linens and textiles designed for comfort, safety, and hygiene in healthcare environments.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/healthcare/medical-linens`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "name": "Medical Linens",
      "description": "Premium healthcare textiles for hospitals and medical facilities",
      "manufacturer": {
        "@type": "Organization", 
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Textiles"
    }
  },

  // Life Sciences Pages
  "/life-sciences": {
    pageTitle: "Life Sciences Solutions | NIDDIKKARE LLP - DNA/RNA Extraction & Molecular Diagnostics",
    metaDescription: "Advanced life sciences solutions including DNA/RNA extraction kits, molecular diagnostics, and laboratory equipment. Precision tools for research and clinical applications.",
    metaKeywords: "life sciences, DNA extraction, RNA extraction, molecular diagnostics, laboratory equipment, biotechnology, research tools, clinical diagnostics",
    ogTitle: "Life Sciences Solutions - DNA/RNA Extraction & Diagnostics | NIDDIKKARE",
    ogDescription: "Cutting-edge life sciences solutions for DNA/RNA extraction and molecular diagnostics in research and clinical settings.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/life-sciences`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Life Sciences Solutions",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Biotechnology Products",
      "areaServed": "Worldwide"
    }
  },

  "/life-sciences/dna-rna-extraction": {
    pageTitle: "DNA/RNA Extraction Kits | NIDDIKKARE LLP - Advanced Nucleic Acid Extraction",
    metaDescription: "High-performance DNA and RNA extraction kits for research and clinical applications. Reliable nucleic acid isolation with superior yield and purity.",
    metaKeywords: "DNA extraction, RNA extraction, nucleic acid extraction, extraction kits, molecular biology, laboratory reagents, biotechnology",
    ogTitle: "DNA/RNA Extraction Kits - Advanced Nucleic Acid Solutions | NIDDIKKARE",
    ogDescription: "High-performance DNA and RNA extraction solutions for reliable nucleic acid isolation in research and clinical laboratories.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/life-sciences/dna-rna-extraction`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "DNA/RNA Extraction Kits",
      "description": "High-performance nucleic acid extraction solutions for research and clinical applications",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Laboratory Equipment"
    }
  },

  "/life-sciences/molecular-diagnostics": {
    pageTitle: "Molecular Diagnostics | NIDDIKKARE LLP - Precision Diagnostic Solutions",
    metaDescription: "Advanced molecular diagnostics solutions for accurate disease detection and monitoring. Cutting-edge diagnostic tools for clinical and research applications.",
    metaKeywords: "molecular diagnostics, precision diagnostics, disease detection, clinical diagnostics, diagnostic tools, medical testing, laboratory diagnostics",
    ogTitle: "Molecular Diagnostics - Precision Disease Detection | NIDDIKKARE",
    ogDescription: "Advanced molecular diagnostic solutions for accurate disease detection and monitoring in clinical and research settings.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/life-sciences/molecular-diagnostics`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Molecular Diagnostics",
      "description": "Advanced diagnostic solutions for precision disease detection and monitoring",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Diagnostic Equipment"
    }
  },

  // Company Pages
  "/company": {
    pageTitle: "Company Overview | NIDDIKKARE LLP - About Our Healthcare Innovation",
    metaDescription: "Learn about NIDDIKKARE LLP's mission, leadership team, and commitment to transforming healthcare through innovative products and solutions.",
    metaKeywords: "NIDDIKKARE company, healthcare company, biotechnology company, company mission, leadership team, healthcare innovation",
    ogTitle: "Company Overview - About NIDDIKKARE LLP",
    ogDescription: "Discover NIDDIKKARE LLP's mission to transform healthcare through innovative products and cutting-edge solutions.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/company`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About NIDDIKKARE LLP",
      "description": "Company overview, mission, and leadership information for NIDDIKKARE LLP",
      "mainEntity": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      }
    }
  },

  "/company/about": {
    pageTitle: "About Us | NIDDIKKARE LLP - Our Mission & Technology",
    metaDescription: "Discover NIDDIKKARE LLP's journey in healthcare innovation, our advanced technology platform, and global impact in transforming human health through cutting-edge solutions.",
    metaKeywords: "about NIDDIKKARE, company history, healthcare innovation, technology platform, global impact, healthcare mission",
    ogTitle: "About NIDDIKKARE LLP - Our Mission & Innovation",
    ogDescription: "Learn about our journey in healthcare innovation and commitment to transforming human health through advanced technology.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/company/about`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About NIDDIKKARE LLP",
      "description": "Company mission, technology, and global impact in healthcare innovation"
    }
  },

  "/company/leadership-team": {
    pageTitle: "Leadership Team | NIDDIKKARE LLP - Meet Our Expert Founders",
    metaDescription: "Meet NIDDIKKARE LLP's expert leadership team including Dr. Samar Husain Naqvi and Dr. Abhishek Chanchal, co-founders with extensive experience in biotechnology and molecular diagnostics.",
    metaKeywords: "leadership team, Dr. Samar Husain Naqvi, Dr. Abhishek Chanchal, co-founders, biotechnology experts, molecular diagnostics",
    ogTitle: "Leadership Team - Expert Founders | NIDDIKKARE LLP",
    ogDescription: "Meet our experienced co-founders who lead NIDDIKKARE with expertise in biotechnology, molecular diagnostics, and healthcare innovation.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/company/leadership-team`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NIDDIKKARE LLP Leadership",
      "member": [
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
      ]
    }
  },

  "/company/news": {
    pageTitle: "News & Updates | NIDDIKKARE LLP - Latest Healthcare Innovations",
    metaDescription: "Stay updated with NIDDIKKARE LLP's latest breakthroughs, partnerships, awards, and innovations in healthcare technology and life sciences.",
    metaKeywords: "NIDDIKKARE news, healthcare news, company updates, innovations, partnerships, awards, breakthroughs",
    ogTitle: "News & Updates - Latest Innovations | NIDDIKKARE LLP",
    ogDescription: "Latest news about our breakthroughs, partnerships, and innovations in healthcare technology and life sciences.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/company/news`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "NIDDIKKARE LLP Company News",
      "publisher": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      }
    }
  },

  // Contact Page
  "/contact": {
    pageTitle: "Contact Us | NIDDIKKARE LLP - Get in Touch with Healthcare Experts",
    metaDescription: "Contact NIDDIKKARE LLP for healthcare solutions, product inquiries, partnerships, or support. Reach out to our expert team for personalized assistance.",
    metaKeywords: "contact NIDDIKKARE, healthcare inquiries, product support, partnerships, customer service, get in touch",
    ogTitle: "Contact NIDDIKKARE LLP - Get Expert Healthcare Support",
    ogDescription: "Get in touch with our healthcare experts for product inquiries, partnerships, and personalized support.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/contact`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact NIDDIKKARE LLP",
      "description": "Contact information and form for NIDDIKKARE LLP healthcare solutions"
    }
  },

  // Policy Pages
  "/privacy-policy": {
    pageTitle: "Privacy Policy | NIDDIKKARE LLP - Data Protection & Privacy",
    metaDescription: "NIDDIKKARE LLP's privacy policy detailing how we collect, use, and protect your personal information. Learn about our data protection practices.",
    metaKeywords: "privacy policy, data protection, personal information, data collection, privacy rights, GDPR compliance",
    ogTitle: "Privacy Policy - Data Protection | NIDDIKKARE LLP",
    ogDescription: "Our commitment to protecting your privacy and personal information with transparent data practices.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/privacy-policy`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "NIDDIKKARE LLP privacy policy and data protection practices"
    }
  },

  "/terms-of-service": {
    pageTitle: "Terms of Service | NIDDIKKARE LLP - Terms & Conditions",
    metaDescription: "NIDDIKKARE LLP's terms of service outlining user responsibilities, service descriptions, warranties, and legal terms for using our products and services.",
    metaKeywords: "terms of service, terms and conditions, user agreement, legal terms, service terms, warranties",
    ogTitle: "Terms of Service - Legal Terms | NIDDIKKARE LLP",
    ogDescription: "Legal terms and conditions for using NIDDIKKARE LLP products and services.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/terms-of-service`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service",
      "description": "Legal terms and conditions for NIDDIKKARE LLP services"
    }
  },

  "/cookie-policy": {
    pageTitle: "Cookie Policy | NIDDIKKARE LLP - Cookie Usage & Management",
    metaDescription: "Learn about NIDDIKKARE LLP's cookie usage, types of cookies we use, and how to manage your cookie preferences for an optimal browsing experience.",
    metaKeywords: "cookie policy, cookies, website cookies, cookie management, browser settings, privacy preferences",
    ogTitle: "Cookie Policy - Cookie Usage | NIDDIKKARE LLP",
    ogDescription: "Information about our cookie usage and how to manage your cookie preferences.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/cookie-policy`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cookie Policy",
      "description": "NIDDIKKARE LLP cookie policy and usage information"
    }
  },

  // Gut Care
  "/gut-care": {
    pageTitle: "Gut Care Products | NIDDIKKARE LLP - Digestive Health Solutions",
    metaDescription: "Advanced gut care products and digestive health solutions from NIDDIKKARE LLP. Specialized products for optimal gastrointestinal health and microbiome support.",
    metaKeywords: "gut care, digestive health, gastrointestinal health, microbiome, gut health products, digestive supplements",
    ogTitle: "Gut Care Products - Digestive Health Solutions | NIDDIKKARE",
    ogDescription: "Specialized gut care products for optimal digestive health and microbiome support.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/gut-care`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Gut Care Products",
      "description": "Advanced digestive health solutions and gut care products",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Health Supplements"
    }
  }
};

// Generate sitemap data
export const generateSitemap = (): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(seoData).map(path => `  <url>
    <loc>${path === '/' ? baseUrl : `${baseUrl}${path}`}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  return sitemap;
};

// Generate robots.txt
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Block admin or sensitive areas (none currently)
# Disallow: /admin/

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
};