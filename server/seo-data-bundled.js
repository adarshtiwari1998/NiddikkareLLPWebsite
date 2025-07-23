// Production-ready bundled SEO data for all 60+ pages
// This ensures proper server-side SEO metadata injection in production environments

const baseUrl = "https://niddikkare.com";
const logoUrl = `${baseUrl}/src/assets/niddikkare-logo.png`;

const seoDataBundled = {
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

  // Critical product pages
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
  }
};

// Default SEO data generator
const getDefaultSEOData = (pathname) => {
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

// Export for both CommonJS and ES modules
module.exports = { seoDataBundled, getDefaultSEOData };
exports.seoDataBundled = seoDataBundled;
exports.getDefaultSEOData = getDefaultSEOData;