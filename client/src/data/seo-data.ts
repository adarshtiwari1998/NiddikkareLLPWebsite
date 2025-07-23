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
  },

  // Healthcare category pages

  "/healthcare/medical-linens/woven": {
    pageTitle: "Woven Medical Linens | NIDDIKKARE LLP - Premium Cotton Healthcare Textiles",
    metaDescription: "High-quality woven medical linens made from premium cotton for superior comfort and durability in healthcare settings. Hospital-grade textile solutions.",
    metaKeywords: "woven medical linens, cotton hospital linens, healthcare textiles, medical bedding, hospital linens, cotton medical fabric",
    ogTitle: "Woven Medical Linens - Premium Cotton Healthcare Textiles | NIDDIKKARE",
    ogDescription: "Premium woven medical linens crafted from high-quality cotton for exceptional healthcare comfort.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/healthcare/medical-linens/woven`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Woven Medical Linens",
      "description": "Premium cotton-based medical linens for healthcare facilities",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Textiles",
      "material": "Cotton"
    }
  },

  "/healthcare/medical-linens/non-woven": {
    pageTitle: "Non-Woven Medical Linens | NIDDIKKARE LLP - Disposable Healthcare Textiles",
    metaDescription: "Advanced non-woven medical linens for single-use applications. SMS fabric technology providing superior barrier protection in healthcare environments.",
    metaKeywords: "non-woven medical linens, disposable medical textiles, SMS fabric, barrier protection, surgical linens, infection control",
    ogTitle: "Non-Woven Medical Linens - Advanced Barrier Protection | NIDDIKKARE",
    ogDescription: "SMS non-woven medical linens providing superior barrier protection for healthcare professionals.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/healthcare/medical-linens/non-woven`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Non-Woven Medical Linens",
      "description": "Advanced SMS non-woven medical textiles for barrier protection",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Textiles",
      "material": "SMS Non-Woven"
    }
  },

  "/healthcare/medical-linens/blended": {
    pageTitle: "Blended Medical Linens | NIDDIKKARE LLP - Cotton-Poly Healthcare Textiles",
    metaDescription: "Innovative blended medical linens combining cotton comfort with polyester durability for optimal healthcare textile performance.",
    metaKeywords: "blended medical linens, cotton-polyester linens, hybrid medical textiles, durable healthcare fabrics, blended hospital linens",
    ogTitle: "Blended Medical Linens - Cotton-Poly Healthcare Innovation | NIDDIKKARE",
    ogDescription: "Premium blended medical linens combining natural cotton comfort with synthetic durability.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/healthcare/medical-linens/blended`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Blended Medical Linens",
      "description": "Cotton-polyester blend medical textiles for enhanced performance",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Textiles",
      "material": "Cotton-Polyester Blend"
    }
  },

  // Products section pages
  "/products": {
    pageTitle: "Products | NIDDIKKARE LLP - Healthcare & Life Sciences Product Portfolio",
    metaDescription: "Explore NIDDIKKARE LLP's comprehensive product portfolio including neonatal care, medical linens, DNA/RNA extraction kits, and molecular diagnostics solutions.",
    metaKeywords: "NIDDIKKARE products, healthcare products, life sciences products, medical device portfolio, biotechnology products",
    ogTitle: "Product Portfolio - Healthcare & Life Sciences | NIDDIKKARE LLP",
    ogDescription: "Comprehensive healthcare and life sciences product portfolio for research and clinical applications.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/products`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "NIDDIKKARE Products",
      "description": "Healthcare and life sciences product portfolio"
    }
  },

  "/products/neonatal-care": {
    pageTitle: "Neonatal Care Products | NIDDIKKARE LLP - Professional Baby Care Solutions",
    metaDescription: "Professional neonatal care products for hospitals and healthcare facilities. Premium baby care solutions designed for newborn safety and comfort.",
    metaKeywords: "neonatal care products, professional baby care, hospital baby products, newborn care equipment, infant care solutions",
    ogTitle: "Professional Neonatal Care Products | NIDDIKKARE LLP",
    ogDescription: "Hospital-grade neonatal care products for professional healthcare environments.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/neonatal-care`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "name": "Professional Neonatal Care Products",
      "description": "Hospital-grade baby care solutions for healthcare professionals",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Devices"
    }
  },

  "/products/neonatal-care/baby-first-touch": {
    pageTitle: "Baby's First Touch | NIDDIKKARE LLP - Premium Neonatal Care Product",
    metaDescription: "Baby's First Touch - premium neonatal care product designed for gentle newborn comfort. Hospital-grade baby care solution with superior safety features.",
    metaKeywords: "Baby's First Touch, neonatal care, newborn comfort, baby care product, hospital baby gear, infant care",
    ogTitle: "Baby's First Touch - Premium Neonatal Care | NIDDIKKARE LLP",
    ogDescription: "Premium neonatal care product designed for gentle newborn comfort and safety.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/neonatal-care/baby-first-touch`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Baby's First Touch",
      "description": "Premium neonatal care product for gentle newborn comfort",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Neonatal Care",
      "model": "NKR-101"
    }
  },

  "/products/medical-linens": {
    pageTitle: "Medical Linens | NIDDIKKARE LLP - Professional Healthcare Textiles",
    metaDescription: "Professional medical linens and healthcare textiles for hospitals and medical facilities. Premium quality medical fabric solutions for patient comfort and safety.",
    metaKeywords: "medical linens, healthcare textiles, hospital linens, medical fabric, professional medical textiles, patient care linens",
    ogTitle: "Professional Medical Linens - Healthcare Textiles | NIDDIKKARE LLP",
    ogDescription: "Premium medical linens and healthcare textiles for professional medical environments.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "name": "Professional Medical Linens",
      "description": "Healthcare textiles for hospitals and medical facilities",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Textiles"
    }
  },

  // Individual medical linen product pages
  "/products/medical-linens/baby-first-touch": {
    pageTitle: "Baby's First Touch Medical Linen | NIDDIKKARE LLP - Organic Cotton Baby Care",
    metaDescription: "Baby's First Touch organic cotton medical linen designed for gentle newborn skin contact. Premium baby care textile with superior softness and safety.",
    metaKeywords: "Baby's First Touch, organic cotton, medical linen, baby care textile, newborn care, soft baby fabric",
    ogTitle: "Baby's First Touch - Organic Cotton Medical Linen | NIDDIKKARE",
    ogDescription: "Premium organic cotton medical linen for gentle baby care and newborn comfort.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/baby-first-touch`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Baby's First Touch Medical Linen",
      "description": "Organic cotton medical linen for gentle baby care",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Textiles",
      "material": "Organic Cotton"
    }
  },

  "/products/medical-linens/maternity-gown": {
    pageTitle: "Maternity Gown | NIDDIKKARE LLP - Comfortable Healthcare Apparel",
    metaDescription: "Premium maternity gown designed for expectant mothers in healthcare settings. Comfortable, dignified, and practical medical apparel.",
    metaKeywords: "maternity gown, pregnancy wear, hospital gown, maternity care, expectant mother, medical apparel",
    ogTitle: "Maternity Gown - Comfortable Healthcare Apparel | NIDDIKKARE",
    ogDescription: "Premium maternity gown for comfort and dignity during healthcare visits.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/maternity-gown`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Maternity Gown",
      "description": "Comfortable medical apparel for expectant mothers",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Apparel"
    }
  },

  "/products/medical-linens/mackintosh-rubber-sheet": {
    pageTitle: "Mackintosh Rubber Sheet | NIDDIKKARE LLP - Waterproof Medical Protection",
    metaDescription: "High-quality Mackintosh rubber sheet for waterproof medical protection. Essential healthcare textile for patient care and bed protection.",
    metaKeywords: "Mackintosh rubber sheet, waterproof medical sheet, bed protection, healthcare textiles, medical rubber sheet",
    ogTitle: "Mackintosh Rubber Sheet - Waterproof Medical Protection | NIDDIKKARE",
    ogDescription: "Premium waterproof Mackintosh rubber sheet for medical protection and patient care.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/mackintosh-rubber-sheet`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Mackintosh Rubber Sheet",
      "description": "Waterproof medical protection sheet for healthcare settings",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Equipment"
    }
  },

  "/products/medical-linens/bedsheet-pillow-covers": {
    pageTitle: "Bedsheet with Pillow Covers | NIDDIKKARE LLP - Hospital Bed Linens",
    metaDescription: "Premium hospital bedsheet with pillow covers set. High-quality medical linens for patient comfort and healthcare facility standards.",
    metaKeywords: "hospital bedsheet, pillow covers, medical linens, bed linens, healthcare textiles, patient bedding",
    ogTitle: "Hospital Bedsheet with Pillow Covers | NIDDIKKARE LLP",
    ogDescription: "Premium hospital bedsheet and pillow cover set for optimal patient comfort.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/bedsheet-pillow-covers`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Bedsheet with Pillow Covers",
      "description": "Premium hospital bedding set for patient comfort",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Textiles"
    }
  },

  "/products/medical-linens/surgical-drapes-towels": {
    pageTitle: "Surgical Drapes & Towels | NIDDIKKARE LLP - Sterile Surgical Textiles",
    metaDescription: "Sterile surgical drapes and towels for operating room procedures. Premium non-woven surgical textiles ensuring barrier protection and sterility.",
    metaKeywords: "surgical drapes, surgical towels, sterile textiles, operating room linens, surgical barrier, medical drapes",
    ogTitle: "Surgical Drapes & Towels - Sterile OR Textiles | NIDDIKKARE",
    ogDescription: "Premium sterile surgical drapes and towels for operating room procedures.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/surgical-drapes-towels`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Surgical Drapes & Towels",
      "description": "Sterile surgical textiles for operating room procedures",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Surgical Equipment"
    }
  },

  "/products/medical-linens/scrub-suit": {
    pageTitle: "Scrub Suit | NIDDIKKARE LLP - Professional Medical Uniforms",
    metaDescription: "High-quality scrub suits for healthcare professionals. Comfortable, durable medical uniforms designed for daily healthcare operations.",
    metaKeywords: "scrub suit, medical uniforms, healthcare apparel, professional scrubs, medical clothing, healthcare uniforms",
    ogTitle: "Professional Scrub Suit - Medical Uniforms | NIDDIKKARE",
    ogDescription: "High-quality scrub suits for healthcare professionals and medical staff.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/scrub-suit`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Professional Scrub Suit",
      "description": "Medical uniforms for healthcare professionals",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Apparel"
    }
  },

  "/products/medical-linens/patient-gown": {
    pageTitle: "Patient Gown | NIDDIKKARE LLP - Comfortable Medical Apparel",
    metaDescription: "Comfortable patient gowns for hospital and medical facility use. Dignified medical apparel ensuring patient comfort and easy access for medical procedures.",
    metaKeywords: "patient gown, hospital gown, medical apparel, patient care, hospital wear, medical clothing",
    ogTitle: "Comfortable Patient Gown - Medical Apparel | NIDDIKKARE",
    ogDescription: "Dignified and comfortable patient gowns for hospital and medical facility use.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/patient-gown`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Patient Gown",
      "description": "Comfortable medical apparel for patient care",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Medical Apparel"
    }
  },

  "/products/medical-linens/surgical-ot-gown": {
    pageTitle: "Surgical OT Gown | NIDDIKKARE LLP - Sterile Operating Room Apparel",
    metaDescription: "Sterile surgical OT gowns for operating room procedures. Premium protective medical apparel ensuring sterility and comfort during surgery.",
    metaKeywords: "surgical gown, OT gown, operating room apparel, sterile gown, surgical clothing, medical protective wear",
    ogTitle: "Surgical OT Gown - Sterile Operating Room Apparel | NIDDIKKARE",
    ogDescription: "Premium sterile surgical gowns for operating room procedures and medical staff.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/surgical-ot-gown`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Surgical OT Gown",
      "description": "Sterile surgical apparel for operating room procedures",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Surgical Equipment"
    }
  },

  "/products/medical-linens/surgical-cut-sheets": {
    pageTitle: "Surgical Cut Sheets | NIDDIKKARE LLP - Sterile Surgical Textiles",
    metaDescription: "Sterile surgical cut sheets for operating room procedures. High-quality surgical textiles providing barrier protection and sterility during operations.",
    metaKeywords: "surgical cut sheets, sterile sheets, operating room textiles, surgical barrier, medical cut sheets, surgical linens",
    ogTitle: "Surgical Cut Sheets - Sterile OR Textiles | NIDDIKKARE",
    ogDescription: "Premium sterile surgical cut sheets for operating room barrier protection.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/surgical-cut-sheets`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Surgical Cut Sheets",
      "description": "Sterile surgical textiles for operating room procedures",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Surgical Equipment"
    }
  },

  "/products/dna-rna-extraction": {
    pageTitle: "DNA/RNA Extraction Products | NIDDIKKARE LLP - Nucleic Acid Isolation",
    metaDescription: "Professional DNA/RNA extraction products for research and clinical applications. High-performance nucleic acid isolation kits and reagents.",
    metaKeywords: "DNA extraction, RNA extraction, nucleic acid isolation, extraction kits, molecular biology, laboratory reagents",
    ogTitle: "DNA/RNA Extraction Products - Nucleic Acid Solutions | NIDDIKKARE",
    ogDescription: "Professional DNA/RNA extraction products for laboratory and clinical applications.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/dna-rna-extraction`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "name": "DNA/RNA Extraction Products",
      "description": "Nucleic acid isolation solutions for research and clinical use",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Laboratory Equipment"
    }
  },

  "/products/molecular-diagnostics": {
    pageTitle: "Molecular Diagnostics Products | NIDDIKKARE LLP - Precision Testing Solutions",
    metaDescription: "Advanced molecular diagnostics products for clinical testing and research. Precision diagnostic tools for accurate disease detection and monitoring.",
    metaKeywords: "molecular diagnostics, precision diagnostics, clinical testing, diagnostic products, molecular testing, disease detection",
    ogTitle: "Molecular Diagnostics Products - Precision Testing | NIDDIKKARE",
    ogDescription: "Advanced molecular diagnostics products for precision clinical testing and research.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/molecular-diagnostics`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "name": "Molecular Diagnostics Products",
      "description": "Precision diagnostic solutions for clinical and research applications",
      "manufacturer": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "category": "Diagnostic Equipment"
    }
  },

  // Services section pages
  "/services": {
    pageTitle: "Services | NIDDIKKARE LLP - Healthcare & Life Sciences Services",
    metaDescription: "Professional healthcare and life sciences services including consultancy IVD, contract research, and OEM products. Expert solutions for your business needs.",
    metaKeywords: "healthcare services, life sciences services, consultancy IVD, contract research, OEM products, business solutions",
    ogTitle: "Professional Services - Healthcare & Life Sciences | NIDDIKKARE LLP",
    ogDescription: "Expert healthcare and life sciences services for consultancy, research, and product development.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/services`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Healthcare & Life Sciences Services",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Professional Services",
      "areaServed": "Worldwide"
    }
  },

  "/services/consultancy-ivd": {
    pageTitle: "Consultancy IVD | NIDDIKKARE LLP - In Vitro Diagnostics Consulting",
    metaDescription: "Expert consultancy services for in vitro diagnostics (IVD) development, regulatory compliance, and market strategy. Professional IVD consulting solutions.",
    metaKeywords: "consultancy IVD, in vitro diagnostics, IVD consulting, regulatory compliance, medical device consulting, diagnostic consulting",
    ogTitle: "IVD Consultancy Services - Expert Diagnostics Consulting | NIDDIKKARE",
    ogDescription: "Professional consultancy services for in vitro diagnostics development and regulatory compliance.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/services/consultancy-ivd`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "IVD Consultancy Services",
      "description": "Expert consulting for in vitro diagnostics development and regulatory compliance",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Consulting"
    }
  },

  "/services/contract-research": {
    pageTitle: "Contract Research | NIDDIKKARE LLP - Professional Research Services",
    metaDescription: "Professional contract research services for healthcare and life sciences. Expert research solutions, clinical studies, and scientific consulting.",
    metaKeywords: "contract research, research services, clinical studies, scientific consulting, healthcare research, life sciences research",
    ogTitle: "Contract Research Services - Professional Research Solutions | NIDDIKKARE",
    ogDescription: "Expert contract research services for healthcare and life sciences applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/services/contract-research`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ResearchOrganization",
      "name": "Contract Research Services",
      "description": "Professional research services for healthcare and life sciences",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Research Services"
    }
  },

  "/services/oem-products": {
    pageTitle: "OEM Products | NIDDIKKARE LLP - Original Equipment Manufacturing",
    metaDescription: "Original Equipment Manufacturing (OEM) services for healthcare and life sciences products. Custom manufacturing solutions for medical devices and equipment.",
    metaKeywords: "OEM products, original equipment manufacturing, custom manufacturing, medical device manufacturing, healthcare OEM, life sciences manufacturing",
    ogTitle: "OEM Products - Original Equipment Manufacturing | NIDDIKKARE",
    ogDescription: "Custom OEM manufacturing services for healthcare and life sciences products.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/services/oem-products`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "OEM Manufacturing Services",
      "description": "Original equipment manufacturing for healthcare and life sciences products",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Manufacturing"
    }
  },

  // IT Solutions section pages
  "/it-solutions": {
    pageTitle: "IT Solutions | NIDDIKKARE LLP - Technology Services & Solutions",
    metaDescription: "Comprehensive IT solutions including RPO services, contingent workforce management, and web application development. Professional technology solutions for business growth.",
    metaKeywords: "IT solutions, RPO services, contingent workforce, web application development, technology services, business solutions",
    ogTitle: "IT Solutions - Technology Services & Solutions | NIDDIKKARE LLP",
    ogDescription: "Comprehensive IT solutions for RPO, workforce management, and web application development.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/it-solutions`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IT Solutions",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Information Technology",
      "areaServed": "Worldwide"
    }
  },

  "/it-solutions/rpo": {
    pageTitle: "RPO Services | NIDDIKKARE LLP - Recruitment Process Outsourcing",
    metaDescription: "Professional Recruitment Process Outsourcing (RPO) services for healthcare and technology companies. Expert talent acquisition and recruitment solutions.",
    metaKeywords: "RPO services, recruitment process outsourcing, talent acquisition, recruitment solutions, hiring services, HR outsourcing",
    ogTitle: "RPO Services - Recruitment Process Outsourcing | NIDDIKKARE",
    ogDescription: "Professional RPO services for efficient talent acquisition and recruitment solutions.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/it-solutions/rpo`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "RPO Services",
      "description": "Recruitment Process Outsourcing for talent acquisition",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Human Resources"
    }
  },

  "/it-solutions/contingent": {
    pageTitle: "Contingent Workforce | NIDDIKKARE LLP - Flexible Staffing Solutions",
    metaDescription: "Contingent workforce management services providing flexible staffing solutions for project-based work and temporary assignments. Professional workforce solutions.",
    metaKeywords: "contingent workforce, flexible staffing, temporary staffing, project staffing, workforce management, contract staffing",
    ogTitle: "Contingent Workforce - Flexible Staffing Solutions | NIDDIKKARE",
    ogDescription: "Professional contingent workforce management for flexible staffing needs.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/it-solutions/contingent`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Contingent Workforce Services",
      "description": "Flexible staffing solutions and workforce management",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Staffing Services"
    }
  },

  "/it-solutions/web-app-solutions": {
    pageTitle: "Web App Solutions | NIDDIKKARE LLP - Custom Web Development",
    metaDescription: "Custom web application development services for healthcare and business applications. Professional web development solutions tailored to your needs.",
    metaKeywords: "web app solutions, web application development, custom web development, software development, web solutions, application development",
    ogTitle: "Web App Solutions - Custom Web Development | NIDDIKKARE",
    ogDescription: "Professional web application development services for healthcare and business applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/it-solutions/web-app-solutions`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Application Development",
      "description": "Custom web application development services",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Software Development"
    }
  },

  // Tools & Testing section pages
  "/tools-testing": {
    pageTitle: "Tools & Testing | NIDDIKKARE LLP - Digital Solutions & Laboratory Testing",
    metaDescription: "Comprehensive digital tools and testing solutions for laboratories and research facilities. Advanced analytical tools and testing services for scientific applications.",
    metaKeywords: "digital tools, laboratory testing, testing solutions, analytical tools, research tools, laboratory services",
    ogTitle: "Tools & Testing - Digital Solutions & Laboratory Testing | NIDDIKKARE",
    ogDescription: "Comprehensive digital tools and testing solutions for laboratories and research applications.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/tools-testing`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tools & Testing Solutions",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Laboratory Services",
      "areaServed": "Worldwide"
    }
  },

  // Testing solutions pages
  "/tools-testing/testing": {
    pageTitle: "Testing Solutions | NIDDIKKARE LLP - Advanced Laboratory Testing",
    metaDescription: "Advanced testing solutions for laboratory and research applications including filtration, rapid tests, chromatography, bioanalysis, and water analysis.",
    metaKeywords: "testing solutions, laboratory testing, analytical testing, research testing, scientific testing, testing services",
    ogTitle: "Testing Solutions - Advanced Laboratory Testing | NIDDIKKARE",
    ogDescription: "Comprehensive testing solutions for laboratory and research applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Testing Solutions",
      "description": "Advanced laboratory testing and analytical services",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Laboratory Testing"
    }
  },

  "/tools-testing/testing/filtration": {
    pageTitle: "Filtration Testing | NIDDIKKARE LLP - Advanced Filtration Solutions",
    metaDescription: "Advanced filtration testing solutions for laboratory and industrial applications. Comprehensive filtration analysis and testing services.",
    metaKeywords: "filtration testing, filtration solutions, membrane filtration, laboratory filtration, filtration analysis",
    ogTitle: "Filtration Testing - Advanced Filtration Solutions | NIDDIKKARE",
    ogDescription: "Professional filtration testing and analysis solutions for laboratory applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing/filtration`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Filtration Testing",
      "description": "Advanced filtration testing and analysis solutions",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Analytical Testing"
    }
  },

  "/tools-testing/testing/rapid-tests": {
    pageTitle: "Rapid Tests | NIDDIKKARE LLP - Quick Diagnostic Testing Solutions",
    metaDescription: "Rapid testing solutions for quick diagnostic results. Fast and reliable testing methods for healthcare and research applications.",
    metaKeywords: "rapid tests, quick diagnostics, fast testing, rapid testing solutions, diagnostic testing, point-of-care testing",
    ogTitle: "Rapid Tests - Quick Diagnostic Solutions | NIDDIKKARE",
    ogDescription: "Fast and reliable rapid testing solutions for healthcare and research applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing/rapid-tests`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Rapid Testing Solutions",
      "description": "Quick diagnostic testing for healthcare and research",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Diagnostic Testing"
    }
  },

  "/tools-testing/testing/water-analysis": {
    pageTitle: "Water Analysis | NIDDIKKARE LLP - Comprehensive Water Quality Testing",
    metaDescription: "Comprehensive water analysis and quality testing services. Professional water testing for environmental monitoring and quality assurance.",
    metaKeywords: "water analysis, water quality testing, environmental testing, water testing services, water quality analysis",
    ogTitle: "Water Analysis - Comprehensive Water Quality Testing | NIDDIKKARE",
    ogDescription: "Professional water analysis and quality testing for environmental monitoring.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing/water-analysis`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Water Analysis Services",
      "description": "Comprehensive water quality testing and environmental monitoring",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Environmental Testing"
    }
  },

  "/tools-testing/testing/chromatography": {
    pageTitle: "Chromatography Testing | NIDDIKKARE LLP - Advanced Separation Analysis",
    metaDescription: "Advanced chromatography testing and analysis services including HPLC, GC, and LC-MS. Professional chromatographic analysis for research and quality control.",
    metaKeywords: "chromatography testing, HPLC, GC analysis, LC-MS, chromatographic analysis, separation analysis",
    ogTitle: "Chromatography Testing - Advanced Separation Analysis | NIDDIKKARE",
    ogDescription: "Professional chromatography testing and analysis services for research and quality control.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing/chromatography`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Chromatography Testing",
      "description": "Advanced chromatographic analysis and separation testing",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Analytical Testing"
    }
  },

  "/tools-testing/testing/bioanalysis": {
    pageTitle: "Bioanalysis Testing | NIDDIKKARE LLP - Biological Sample Analysis",
    metaDescription: "Comprehensive bioanalysis testing services for biological samples. Professional bioanalytical testing for pharmaceutical and research applications.",
    metaKeywords: "bioanalysis testing, biological analysis, bioanalytical services, pharmaceutical testing, biological sample analysis",
    ogTitle: "Bioanalysis Testing - Biological Sample Analysis | NIDDIKKARE",
    ogDescription: "Professional bioanalysis testing services for biological samples and pharmaceutical applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing/bioanalysis`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Bioanalysis Testing",
      "description": "Biological sample analysis and bioanalytical testing services",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Bioanalytical Testing"
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