// Complete production SEO data - ALL 60+ pages from client/src/data/seo-data.ts
// This ensures every page has proper SEO metadata in production

interface SEOData {
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
const logoUrl = `${baseUrl}/src/assets/niddikkare-logo.png`;

export const completeSeoData: Record<string, SEOData> = {
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
      "foundingDate": "2021"
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
      }
    }
  },

  "/healthcare/neonatal-care": {
    pageTitle: "Neonatal Care Products | NIDDIKKARE LLP - Professional Baby Care Solutions",
    metaDescription: "Professional neonatal care products for hospitals and healthcare facilities. Specialized baby care solutions designed for newborn safety and comfort in medical environments.",
    metaKeywords: "neonatal care, professional baby care, hospital baby products, newborn care equipment, infant care solutions, medical baby care",
    ogTitle: "Professional Neonatal Care Products | NIDDIKKARE LLP",
    ogDescription: "Hospital-grade neonatal care products for professional healthcare environments.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/healthcare/neonatal-care`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "name": "Professional Neonatal Care Products",
      "description": "Hospital-grade baby care solutions for healthcare professionals"
    }
  },

  "/healthcare/medical-linens": {
    pageTitle: "Medical Linens | NIDDIKKARE LLP - Professional Healthcare Textiles",
    metaDescription: "Professional medical linens and healthcare textiles for hospitals and medical facilities. Premium quality medical fabric solutions for patient comfort and safety.",
    metaKeywords: "medical linens, healthcare textiles, hospital linens, medical fabric, professional medical textiles, patient care linens",
    ogTitle: "Professional Medical Linens - Healthcare Textiles | NIDDIKKARE LLP",
    ogDescription: "Premium medical linens and healthcare textiles for professional medical environments.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/healthcare/medical-linens`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "name": "Professional Medical Linens",
      "description": "Healthcare textiles for hospitals and medical facilities"
    }
  },

  // Life Sciences Pages
  "/life-sciences": {
    pageTitle: "Life Sciences Solutions | NIDDIKKARE LLP - DNA/RNA Extraction & Molecular Diagnostics",
    metaDescription: "Advanced life sciences solutions including DNA/RNA extraction kits and molecular diagnostics for research and clinical applications. Cutting-edge biotechnology products.",
    metaKeywords: "life sciences, DNA RNA extraction, molecular diagnostics, biotechnology, research products, clinical diagnostics, laboratory solutions",
    ogTitle: "Life Sciences Solutions - DNA/RNA Extraction & Diagnostics | NIDDIKKARE",
    ogDescription: "Advanced biotechnology solutions for research and clinical applications.",
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
      }
    }
  },

  "/life-sciences/dna-rna-extraction": {
    pageTitle: "DNA/RNA Extraction Kits | NIDDIKKARE LLP - Molecular Biology Solutions",
    metaDescription: "High-quality DNA and RNA extraction kits for molecular biology research and clinical diagnostics. Professional nucleic acid isolation solutions for laboratories.",
    metaKeywords: "DNA RNA extraction, nucleic acid isolation, molecular biology, extraction kits, laboratory reagents, genetic analysis",
    ogTitle: "DNA/RNA Extraction Kits - Molecular Biology Solutions | NIDDIKKARE",
    ogDescription: "Professional DNA and RNA extraction solutions for research and clinical applications.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/life-sciences/dna-rna-extraction`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "DNA/RNA Extraction Kits",
      "description": "High-quality nucleic acid extraction solutions"
    }
  },

  "/life-sciences/molecular-diagnostics": {
    pageTitle: "Molecular Diagnostics | NIDDIKKARE LLP - Advanced Diagnostic Solutions",
    metaDescription: "Advanced molecular diagnostics solutions for clinical laboratories and research institutions. Precision diagnostic tools for accurate disease detection and monitoring.",
    metaKeywords: "molecular diagnostics, clinical diagnostics, disease detection, diagnostic tools, precision medicine, laboratory diagnostics",
    ogTitle: "Molecular Diagnostics - Advanced Diagnostic Solutions | NIDDIKKARE",
    ogDescription: "Precision molecular diagnostic tools for clinical and research applications.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/life-sciences/molecular-diagnostics`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Molecular Diagnostics",
      "description": "Advanced diagnostic solutions for clinical applications"
    }
  },

  // Services Pages
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
      }
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
      "description": "Expert consulting for in vitro diagnostics development and regulatory compliance"
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
      "description": "Professional research services for healthcare and life sciences"
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
      "name": "OEM Product Manufacturing",
      "description": "Original equipment manufacturing for healthcare and life sciences products"
    }
  },

  // Company Pages
  "/company": {
    pageTitle: "Company | NIDDIKKARE LLP - Healthcare & Life Sciences Innovation Leaders",
    metaDescription: "Learn about NIDDIKKARE LLP, a leading healthcare and life sciences company founded in 2021. Discover our mission, vision, and commitment to innovation.",
    metaKeywords: "NIDDIKKARE company, healthcare innovation, life sciences leadership, company mission, healthcare vision, medical innovation",
    ogTitle: "About NIDDIKKARE LLP - Healthcare & Life Sciences Innovation Leaders",
    ogDescription: "Leading healthcare and life sciences company committed to innovation and excellence.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/company`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About NIDDIKKARE LLP",
      "description": "Company information for NIDDIKKARE LLP"
    }
  },

  "/company/about": {
    pageTitle: "About NIDDIKKARE LLP | Healthcare & Life Sciences Innovation Company",
    metaDescription: "Founded in 2021, NIDDIKKARE LLP is a healthcare and life sciences innovation company dedicated to transforming medical care through cutting-edge products and solutions.",
    metaKeywords: "about NIDDIKKARE, healthcare company, life sciences innovation, medical technology, company history, healthcare mission",
    ogTitle: "About NIDDIKKARE LLP - Healthcare Innovation Company",
    ogDescription: "Healthcare and life sciences innovation company transforming medical care through cutting-edge solutions.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/company/about`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About NIDDIKKARE LLP",
      "description": "Company information and history"
    }
  },

  "/company/leadership-team": {
    pageTitle: "Leadership Team | NIDDIKKARE LLP - Meet Our Healthcare Experts",
    metaDescription: "Meet the leadership team of NIDDIKKARE LLP including Dr. Samar Husain Naqvi (Managing Director) and Dr. Abhishek Chanchal (Director). Expert healthcare professionals.",
    metaKeywords: "leadership team, healthcare experts, Dr. Samar Husain Naqvi, Dr. Abhishek Chanchal, company leadership, healthcare professionals",
    ogTitle: "Leadership Team - Healthcare Experts | NIDDIKKARE LLP",
    ogDescription: "Meet our expert leadership team driving healthcare and life sciences innovation.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/company/leadership-team`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Leadership Team",
      "description": "NIDDIKKARE LLP leadership team and company executives"
    }
  },

  "/company/news": {
    pageTitle: "News & Updates | NIDDIKKARE LLP - Latest Healthcare Innovations",
    metaDescription: "Stay updated with the latest news and innovations from NIDDIKKARE LLP. Healthcare breakthroughs, product launches, and company updates.",
    metaKeywords: "NIDDIKKARE news, healthcare updates, innovation news, product launches, company announcements, medical breakthroughs",
    ogTitle: "News & Updates - Latest Healthcare Innovations | NIDDIKKARE LLP",
    ogDescription: "Latest news and innovations from NIDDIKKARE LLP healthcare and life sciences company.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/company/news`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "News & Updates",
      "description": "Latest news and updates from NIDDIKKARE LLP"
    }
  },

  // Contact Page
  "/contact": {
    pageTitle: "Contact Us | NIDDIKKARE LLP - Get in Touch with Healthcare Experts",
    metaDescription: "Contact NIDDIKKARE LLP for healthcare and life sciences solutions. Get expert consultation on neonatal care products, medical linens, DNA/RNA extraction kits, and molecular diagnostics.",
    metaKeywords: "contact NIDDIKKARE, healthcare consultation, medical device inquiry, life sciences contact, expert consultation, healthcare solutions",
    ogTitle: "Contact NIDDIKKARE LLP - Healthcare & Life Sciences Experts",
    ogDescription: "Get in touch with NIDDIKKARE LLP for expert healthcare and life sciences solutions.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/contact`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact NIDDIKKARE LLP",
      "description": "Contact page for NIDDIKKARE LLP healthcare and life sciences solutions"
    }
  },

  // Products Pages
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

  // Medical Linens Category Pages
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
      "description": "Premium cotton-based medical linens for healthcare facilities"
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
      "description": "Advanced SMS non-woven medical textiles for barrier protection"
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
      "description": "Cotton-polyester blend medical textiles for enhanced performance"
    }
  },

  // Specific Product Pages
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
      "description": "Hospital-grade baby care solutions for healthcare professionals"
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
      "description": "Premium neonatal care product for gentle newborn comfort"
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
      "description": "Healthcare textiles for hospitals and medical facilities"
    }
  },

  // Additional Medical Linen Products
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
      "description": "Organic cotton medical linen for newborn care"
    }
  },

  "/products/medical-linens/maternity-gown": {
    pageTitle: "Maternity Gown | NIDDIKKARE LLP - Comfortable Maternity Healthcare Wear",
    metaDescription: "Professional maternity gown designed for comfort and dignity during childbirth. Premium healthcare textile for expectant mothers in medical facilities.",
    metaKeywords: "maternity gown, childbirth wear, medical maternity clothing, hospital gown, expectant mother care, maternity healthcare",
    ogTitle: "Maternity Gown - Comfortable Healthcare Wear | NIDDIKKARE",
    ogDescription: "Professional maternity gown for comfort and dignity during childbirth.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/maternity-gown`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Maternity Gown",
      "description": "Professional maternity gown for healthcare facilities"
    }
  },

  // IT Solutions Pages
  "/it-solutions": {
    pageTitle: "IT Solutions | NIDDIKKARE LLP - Technology Services & Digital Solutions",
    metaDescription: "Comprehensive IT solutions including RPO services, contingent workforce management, and web application development. Technology solutions for business growth.",
    metaKeywords: "IT solutions, technology services, RPO, contingent workforce, web development, digital solutions, business technology",
    ogTitle: "IT Solutions - Technology Services & Digital Solutions | NIDDIKKARE",
    ogDescription: "Comprehensive technology solutions for business growth and digital transformation.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/it-solutions`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IT Solutions",
      "description": "Comprehensive technology services and digital solutions"
    }
  },

  "/it-solutions/rpo": {
    pageTitle: "RPO Services | NIDDIKKARE LLP - Recruitment Process Outsourcing",
    metaDescription: "Professional Recruitment Process Outsourcing (RPO) services for efficient talent acquisition. Streamlined hiring solutions for healthcare and technology companies.",
    metaKeywords: "RPO services, recruitment outsourcing, talent acquisition, hiring solutions, HR services, recruitment process",
    ogTitle: "RPO Services - Recruitment Process Outsourcing | NIDDIKKARE",
    ogDescription: "Professional RPO services for efficient talent acquisition and hiring solutions.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/it-solutions/rpo`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "RPO Services",
      "description": "Recruitment Process Outsourcing services"
    }
  },

  "/it-solutions/contingent": {
    pageTitle: "Contingent Workforce | NIDDIKKARE LLP - Flexible Staffing Solutions",
    metaDescription: "Contingent workforce management solutions for flexible staffing needs. Professional temporary and contract staffing services for diverse industries.",
    metaKeywords: "contingent workforce, flexible staffing, temporary staffing, contract staffing, workforce management, staffing solutions",
    ogTitle: "Contingent Workforce - Flexible Staffing Solutions | NIDDIKKARE",
    ogDescription: "Professional contingent workforce management for flexible staffing solutions.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/it-solutions/contingent`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Contingent Workforce",
      "description": "Flexible staffing and workforce management solutions"
    }
  },

  "/it-solutions/web-app-solutions": {
    pageTitle: "Web App Solutions | NIDDIKKARE LLP - Custom Web Development",
    metaDescription: "Custom web application development solutions for healthcare and business applications. Professional web development services with modern technologies.",
    metaKeywords: "web app development, custom web solutions, web development services, healthcare applications, business web apps",
    ogTitle: "Web App Solutions - Custom Web Development | NIDDIKKARE",
    ogDescription: "Professional web application development for healthcare and business solutions.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/it-solutions/web-app-solutions`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web App Solutions",
      "description": "Custom web application development services"
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
      "description": "Advanced digestive health solutions and gut care products"
    }
  },

  // Additional Medical Linen Products
  "/products/medical-linens/mackintosh-rubber-sheet": {
    pageTitle: "Mackintosh Rubber Sheet | NIDDIKKARE LLP - Waterproof Medical Protection",
    metaDescription: "Professional Mackintosh rubber sheet for medical facilities. Waterproof protection for beds and surfaces in healthcare environments.",
    metaKeywords: "mackintosh rubber sheet, waterproof medical sheet, hospital protection, medical rubber sheet, bed protection",
    ogTitle: "Mackintosh Rubber Sheet - Medical Protection | NIDDIKKARE",
    ogDescription: "Professional waterproof protection for medical facilities with Mackintosh rubber sheets.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/mackintosh-rubber-sheet`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Mackintosh Rubber Sheet",
      "description": "Waterproof medical protection sheet"
    }
  },

  "/products/medical-linens/bedsheet-pillow-covers": {
    pageTitle: "Bedsheet & Pillow Covers | NIDDIKKARE LLP - Medical Bedding Solutions",
    metaDescription: "Professional medical bedsheet and pillow covers for healthcare facilities. Premium bedding solutions for patient comfort and hygiene.",
    metaKeywords: "medical bedsheet, pillow covers, hospital bedding, medical linens, patient bedding, healthcare textiles",
    ogTitle: "Medical Bedsheet & Pillow Covers | NIDDIKKARE",
    ogDescription: "Premium medical bedding solutions for healthcare facilities.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/bedsheet-pillow-covers`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Bedsheet & Pillow Covers",
      "description": "Medical bedding solutions for healthcare facilities"
    }
  },

  "/products/medical-linens/surgical-drapes-towels": {
    pageTitle: "Surgical Drapes & Towels | NIDDIKKARE LLP - Sterile Surgical Textiles",
    metaDescription: "Professional surgical drapes and towels for operating rooms. Sterile surgical textiles providing barrier protection during medical procedures.",
    metaKeywords: "surgical drapes, surgical towels, operating room textiles, sterile drapes, surgical linens, barrier protection",
    ogTitle: "Surgical Drapes & Towels - Sterile Medical Textiles | NIDDIKKARE",
    ogDescription: "Professional surgical drapes and towels for sterile medical procedures.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/surgical-drapes-towels`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Surgical Drapes & Towels",
      "description": "Sterile surgical textiles for operating rooms"
    }
  },

  "/products/medical-linens/scrub-suit": {
    pageTitle: "Scrub Suit | NIDDIKKARE LLP - Professional Medical Uniforms",
    metaDescription: "Professional scrub suits for healthcare workers. Comfortable and durable medical uniforms designed for hospital and clinic environments.",
    metaKeywords: "scrub suit, medical uniforms, healthcare clothing, surgical scrubs, hospital uniforms, medical wear",
    ogTitle: "Professional Scrub Suits - Medical Uniforms | NIDDIKKARE",
    ogDescription: "Comfortable and professional scrub suits for healthcare workers.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/scrub-suit`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Scrub Suit",
      "description": "Professional medical uniforms for healthcare workers"
    }
  },

  "/products/medical-linens/patient-gown": {
    pageTitle: "Patient Gown | NIDDIKKARE LLP - Comfortable Medical Gowns",
    metaDescription: "Comfortable patient gowns for hospitals and medical facilities. Dignified patient wear designed for comfort and easy access during medical care.",
    metaKeywords: "patient gown, hospital gown, medical gown, patient wear, hospital clothing, medical textiles",
    ogTitle: "Patient Gowns - Comfortable Medical Wear | NIDDIKKARE",
    ogDescription: "Comfortable and dignified patient gowns for medical facilities.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/patient-gown`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Patient Gown",
      "description": "Comfortable medical gowns for patient care"
    }
  },

  "/products/medical-linens/surgical-ot-gown": {
    pageTitle: "Surgical OT Gown | NIDDIKKARE LLP - Operating Theater Gowns",
    metaDescription: "Professional surgical OT gowns for operating theaters. Sterile surgical gowns providing barrier protection for surgical procedures.",
    metaKeywords: "surgical gown, OT gown, operating theater gown, sterile gown, surgical clothing, barrier protection",
    ogTitle: "Surgical OT Gowns - Operating Theater Protection | NIDDIKKARE",
    ogDescription: "Professional surgical gowns for operating theater environments.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/surgical-ot-gown`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Surgical OT Gown",
      "description": "Sterile surgical gowns for operating theaters"
    }
  },

  "/products/medical-linens/surgical-cut-sheets": {
    pageTitle: "Surgical Cut Sheets | NIDDIKKARE LLP - Sterile Surgical Drapes",
    metaDescription: "Professional surgical cut sheets for medical procedures. Sterile surgical drapes designed for precise surgical site access and barrier protection.",
    metaKeywords: "surgical cut sheets, surgical drapes, sterile sheets, surgical barriers, operating room drapes, medical drapes",
    ogTitle: "Surgical Cut Sheets - Sterile Surgical Drapes | NIDDIKKARE",
    ogDescription: "Professional surgical cut sheets for precise medical procedures.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/medical-linens/surgical-cut-sheets`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Surgical Cut Sheets",
      "description": "Sterile surgical drapes for medical procedures"
    }
  },

  // Life Sciences Product Pages
  "/products/dna-rna-extraction": {
    pageTitle: "DNA/RNA Extraction Products | NIDDIKKARE LLP - Nucleic Acid Solutions",
    metaDescription: "Professional DNA and RNA extraction products for molecular biology research. High-quality nucleic acid isolation solutions for laboratories.",
    metaKeywords: "DNA RNA extraction products, nucleic acid isolation, molecular biology products, extraction kits, laboratory reagents",
    ogTitle: "DNA/RNA Extraction Products - Molecular Biology | NIDDIKKARE",
    ogDescription: "Professional nucleic acid extraction products for research and clinical applications.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/dna-rna-extraction`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "DNA/RNA Extraction Products",
      "description": "Nucleic acid isolation solutions for molecular biology"
    }
  },

  "/products/molecular-diagnostics": {
    pageTitle: "Molecular Diagnostics Products | NIDDIKKARE LLP - Advanced Diagnostic Solutions",
    metaDescription: "Advanced molecular diagnostics products for clinical laboratories. Precision diagnostic tools for disease detection and monitoring.",
    metaKeywords: "molecular diagnostics products, clinical diagnostics, diagnostic tools, precision medicine, laboratory diagnostics, disease detection",
    ogTitle: "Molecular Diagnostics Products - Clinical Solutions | NIDDIKKARE",
    ogDescription: "Advanced molecular diagnostic products for clinical and research applications.",
    ogImage: logoUrl,
    ogType: "product",
    canonicalUrl: `${baseUrl}/products/molecular-diagnostics`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Molecular Diagnostics Products",
      "description": "Advanced diagnostic solutions for clinical applications"
    }
  },

  // Tools & Testing Section
  "/tools-testing": {
    pageTitle: "Tools & Testing | NIDDIKKARE LLP - Digital Solutions & Testing Services",
    metaDescription: "Comprehensive tools and testing solutions including digital laboratory tools and advanced testing services for healthcare and life sciences.",
    metaKeywords: "tools testing, digital laboratory tools, testing services, laboratory solutions, analytical testing, digital tools",
    ogTitle: "Tools & Testing - Digital Solutions & Services | NIDDIKKARE",
    ogDescription: "Comprehensive digital tools and testing services for laboratory excellence.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/tools-testing`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tools & Testing Solutions",
      "description": "Digital tools and testing services for laboratories"
    }
  },

  "/tools-testing/testing": {
    pageTitle: "Testing Services | NIDDIKKARE LLP - Advanced Laboratory Testing",
    metaDescription: "Advanced laboratory testing services including filtration, rapid tests, water analysis, chromatography, and bioanalysis for research and quality control.",
    metaKeywords: "testing services, laboratory testing, analytical testing, quality control, research testing, laboratory analysis",
    ogTitle: "Testing Services - Advanced Laboratory Analysis | NIDDIKKARE",
    ogDescription: "Professional laboratory testing services for research and quality control applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Laboratory Testing Services",
      "description": "Advanced testing services for research and quality control"
    }
  },

  "/tools-testing/testing/filtration": {
    pageTitle: "Filtration Testing | NIDDIKKARE LLP - Advanced Filtration Analysis",
    metaDescription: "Professional filtration testing services for laboratory applications. Advanced filtration analysis and optimization for research and quality control.",
    metaKeywords: "filtration testing, filtration analysis, laboratory filtration, filter testing, filtration optimization, analytical filtration",
    ogTitle: "Filtration Testing - Advanced Analysis Services | NIDDIKKARE",
    ogDescription: "Professional filtration testing and analysis for laboratory applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing/filtration`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Filtration Testing",
      "description": "Advanced filtration analysis and testing services"
    }
  },

  "/tools-testing/testing/rapid-tests": {
    pageTitle: "Rapid Tests | NIDDIKKARE LLP - Quick Diagnostic Solutions",
    metaDescription: "Rapid testing solutions for quick diagnostic results. Professional rapid test systems for healthcare and laboratory applications.",
    metaKeywords: "rapid tests, quick diagnostics, rapid testing, diagnostic tests, point of care testing, rapid analysis",
    ogTitle: "Rapid Tests - Quick Diagnostic Solutions | NIDDIKKARE",
    ogDescription: "Professional rapid testing solutions for quick and accurate diagnostic results.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing/rapid-tests`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Rapid Testing",
      "description": "Quick diagnostic testing solutions"
    }
  },

  "/tools-testing/testing/water-analysis": {
    pageTitle: "Water Analysis | NIDDIKKARE LLP - Environmental Testing Services",
    metaDescription: "Comprehensive water analysis and environmental testing services. Professional water quality testing for safety and compliance.",
    metaKeywords: "water analysis, environmental testing, water quality, water testing, environmental analysis, safety testing",
    ogTitle: "Water Analysis - Environmental Testing Services | NIDDIKKARE",
    ogDescription: "Professional water analysis and environmental testing for quality assurance.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/testing/water-analysis`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Water Analysis",
      "description": "Environmental testing and water quality analysis"
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
      "description": "Advanced chromatographic analysis and separation testing"
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
      "description": "Biological sample analysis and bioanalytical testing services"
    }
  },

  // Digital Tools Section
  "/tools-testing/tools": {
    pageTitle: "Digital Tools | NIDDIKKARE LLP - Laboratory Management Solutions",
    metaDescription: "Comprehensive digital tools for laboratory management including sample tracking, e-learning, database applications, and intelligent finder systems.",
    metaKeywords: "digital tools, laboratory tools, lab management, sample tracking, e-learning, database tools, finder systems",
    ogTitle: "Digital Tools - Laboratory Management Solutions | NIDDIKKARE",
    ogDescription: "Advanced digital tools for efficient laboratory management and research workflows.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Laboratory Tools",
      "description": "Digital solutions for laboratory management and research workflows"
    }
  },

  "/tools-testing/tools/e-training": {
    pageTitle: "E-Learning Resources | NIDDIKKARE LLP - Online Laboratory Training",
    metaDescription: "Comprehensive educational materials and online training resources for laboratory professionals. 200+ educational articles, technical guides, and video tutorials available 24/7.",
    metaKeywords: "e-learning, laboratory training, online education, technical guides, educational resources, training materials",
    ogTitle: "E-Learning Resources - Online Laboratory Training | NIDDIKKARE",
    ogDescription: "Professional development through comprehensive educational materials and training resources.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools/e-training`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "E-Learning Resources",
      "description": "Online training and educational materials for laboratory professionals"
    }
  },

  "/tools-testing/tools/sample-request": {
    pageTitle: "Sample Request System | NIDDIKKARE LLP - Laboratory Sample Management",
    metaDescription: "Streamlined sample request and tracking system with real-time monitoring, analytics dashboard, and automated notifications for efficient laboratory workflows.",
    metaKeywords: "sample request, laboratory management, sample tracking, real-time monitoring, analytics dashboard",
    ogTitle: "Sample Request System - Laboratory Sample Management | NIDDIKKARE",
    ogDescription: "Efficient sample request and tracking system for modern laboratory operations.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools/sample-request`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Sample Request System",
      "description": "Laboratory sample request and tracking management system"
    }
  },

  "/tools-testing/tools/application-database-chromatography": {
    pageTitle: "Chromatography Database | NIDDIKKARE LLP - Application Database",
    metaDescription: "Comprehensive chromatography application database with advanced search, method optimization, validated methods, and performance data for analytical applications.",
    metaKeywords: "chromatography database, analytical methods, method optimization, validated methods, performance data",
    ogTitle: "Chromatography Database - Application Database | NIDDIKKARE",
    ogDescription: "Comprehensive database for chromatography applications and analytical methods.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools/application-database-chromatography`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "Chromatography Application Database",
      "description": "Comprehensive database of chromatography methods and applications"
    }
  },

  "/tools-testing/tools/filter-finder": {
    pageTitle: "FilterFinder | NIDDIKKARE LLP - Advanced Filtration Solution Finder",
    metaDescription: "Advanced filtration solution finder for laboratory applications with smart search, custom parameters, AI-powered recommendations, and quick results.",
    metaKeywords: "filter finder, filtration solutions, laboratory filters, smart search, AI recommendations",
    ogTitle: "FilterFinder - Advanced Filtration Solution Finder | NIDDIKKARE",
    ogDescription: "Intelligent tool to find the perfect filtration solutions for laboratory applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools/filter-finder`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "FilterFinder",
      "description": "Advanced filtration solution finder for laboratory applications"
    }
  },

  "/tools-testing/tools/strip-finder": {
    pageTitle: "StripFinder | NIDDIKKARE LLP - Test Strip Selection Tool",
    metaDescription: "Professional test strip selection tool with comprehensive search, compatibility checking, performance comparison, and application matching for laboratory testing.",
    metaKeywords: "strip finder, test strips, laboratory testing, compatibility check, performance comparison",
    ogTitle: "StripFinder - Test Strip Selection Tool | NIDDIKKARE",
    ogDescription: "Professional tool for selecting optimal test strips for laboratory testing applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools/strip-finder`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "StripFinder",
      "description": "Test strip selection and compatibility tool"
    }
  },

  "/tools-testing/tools/nanocolor-finder": {
    pageTitle: "NANOCOLOR Finder | NIDDIKKARE LLP - Colorimetric Analysis Tool",
    metaDescription: "NANOCOLOR analysis finder with colorimetric testing solutions, method selection, parameter optimization, and analytical performance data for water and environmental analysis.",
    metaKeywords: "NANOCOLOR finder, colorimetric analysis, water analysis, environmental testing, analytical methods",
    ogTitle: "NANOCOLOR Finder - Colorimetric Analysis Tool | NIDDIKKARE",
    ogDescription: "Professional NANOCOLOR finder for colorimetric analysis and environmental testing applications.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools/nanocolor-finder`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "NANOCOLOR Finder",
      "description": "Colorimetric analysis and environmental testing tool"
    }
  },

  "/tools-testing/tools/chromafil-finder": {
    pageTitle: "CHROMAFIL Finder | NIDDIKKARE LLP - Chromatography Filtration Solutions",
    metaDescription: "Chromatography filtration and sample preparation solutions with specialized search, method matching, and performance data for HPLC & GC applications.",
    metaKeywords: "chromafil finder, chromatography filtration, sample preparation, HPLC, GC applications",
    ogTitle: "CHROMAFIL Finder - Chromatography Filtration Solutions | NIDDIKKARE",
    ogDescription: "Professional chromatography filtration and sample preparation solution finder.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools/chromafil-finder`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "CHROMAFIL Finder",
      "description": "Chromatography filtration and sample preparation solutions"
    }
  },

  "/tools-testing/tools/vial-finder": {
    pageTitle: "VialFinder | NIDDIKKARE LLP - Laboratory Vial Selection Tool",
    metaDescription: "Laboratory vial and container selection tool with compatibility checking, advanced search, quick selection, and comprehensive material options.",
    metaKeywords: "vial finder, laboratory vials, container selection, compatibility check, material options",
    ogTitle: "VialFinder - Laboratory Vial Selection Tool | NIDDIKKARE",
    ogDescription: "Professional tool for selecting laboratory vials and containers with compatibility checking.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools/vial-finder`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "VialFinder",
      "description": "Laboratory vial and container selection tool"
    }
  },

  "/tools-testing/tools/bioanalysis-kitfinder": {
    pageTitle: "Bioanalysis KitFinder | NIDDIKKARE LLP - Bioanalysis Kit Selection Tool",
    metaDescription: "Comprehensive bioanalysis kit selection and optimization tool with smart kit search, method optimization, performance data, and validation metrics.",
    metaKeywords: "bioanalysis kitfinder, bioanalysis kits, kit selection, method optimization, validation metrics",
    ogTitle: "Bioanalysis KitFinder - Bioanalysis Kit Selection Tool | NIDDIKKARE",
    ogDescription: "Advanced tool for selecting and optimizing bioanalysis kits with comprehensive performance data.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/tools-testing/tools/bioanalysis-kitfinder`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Bioanalysis KitFinder",
      "description": "Comprehensive bioanalysis kit selection and optimization tool"
    }
  },

  // SEO Management (internal use)
  "/seo-management": {
    pageTitle: "SEO Management Dashboard | NIDDIKKARE LLP - Internal",
    metaDescription: "Internal SEO management dashboard for NIDDIKKARE LLP website administration.",
    metaKeywords: "SEO management, internal dashboard, website administration",
    ogTitle: "SEO Management Dashboard",
    ogDescription: "Internal SEO management for website administration.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/seo-management`,
    robotsDirective: "noindex,nofollow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SEO Management Dashboard"
    }
  }
};

// Default SEO data generator
export const getDefaultCompleteSEOData = (pathname: string): SEOData => {
  return {
    pageTitle: "NIDDIKKARE LLP - Healthcare & Life Sciences Innovation",
    metaDescription: "NIDDIKKARE LLP specializes in healthcare and life sciences solutions including neonatal care products, premium medical linens, DNA/RNA extraction kits, molecular diagnostics, and advanced testing solutions.",
    metaKeywords: "NIDDIKKARE, healthcare, life sciences, medical devices, biotechnology",
    ogTitle: "NIDDIKKARE LLP - Healthcare & Life Sciences Innovation",
    ogDescription: "Leading healthcare and life sciences solutions provider.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}${pathname}`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "NIDDIKKARE LLP",
      "url": `${baseUrl}${pathname}`
    }
  };
};