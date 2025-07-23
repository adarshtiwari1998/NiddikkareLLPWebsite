// Production SEO data copy of client/src/data/seo-data.ts
// This file ensures all SEO data is available in production without dynamic imports

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

export const productionSeoData: Record<string, SEOData> = {
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

  // Services Pages
  "/services": {
    pageTitle: "Services | NIDDIKKARE LLP - Healthcare & Life Sciences Consulting",
    metaDescription: "Comprehensive healthcare and life sciences services including consultancy IVD, contract research, and OEM products. Expert solutions for medical device development and regulatory compliance.",
    metaKeywords: "healthcare services, life sciences consulting, IVD consultancy, contract research, OEM products, medical device development, regulatory compliance",
    ogTitle: "Professional Services - Healthcare & Life Sciences | NIDDIKKARE LLP",
    ogDescription: "Expert consulting and research services for healthcare and life sciences industry.",
    ogImage: logoUrl,
    ogType: "website",
    canonicalUrl: `${baseUrl}/services`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Healthcare Services",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      }
    }
  },

  "/services/consultancy-ivd": {
    pageTitle: "Consultancy IVD | NIDDIKKARE LLP - In Vitro Diagnostics Consulting",
    metaDescription: "Expert in vitro diagnostics (IVD) consultancy services for medical device development, regulatory compliance, and market entry strategies. Professional IVD consulting solutions.",
    metaKeywords: "IVD consultancy, in vitro diagnostics, medical device consulting, regulatory compliance, IVD development, diagnostic consulting, medical device approval",
    ogTitle: "IVD Consultancy - In Vitro Diagnostics Consulting | NIDDIKKARE LLP",
    ogDescription: "Expert consultancy services for in vitro diagnostics development and regulatory compliance.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/services/consultancy-ivd`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IVD Consultancy",
      "description": "In vitro diagnostics consulting and development services",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Medical Device Consulting"
    }
  },

  "/services/contract-research": {
    pageTitle: "Contract Research | NIDDIKKARE LLP - Clinical Research Organization Services",
    metaDescription: "Professional contract research organization (CRO) services for clinical trials, regulatory studies, and medical research. Expert clinical research solutions for healthcare industry.",
    metaKeywords: "contract research, CRO services, clinical trials, medical research, regulatory studies, clinical research organization, pharmaceutical research",
    ogTitle: "Contract Research - Clinical Research Organization | NIDDIKKARE LLP",
    ogDescription: "Professional CRO services for clinical trials and medical research projects.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/services/contract-research`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Contract Research Services",
      "description": "Clinical research organization services for medical and pharmaceutical research",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Clinical Research"
    }
  },

  "/services/oem-products": {
    pageTitle: "OEM Products | NIDDIKKARE LLP - Original Equipment Manufacturing",
    metaDescription: "Custom OEM product manufacturing for healthcare and life sciences industry. Original equipment manufacturing services for medical devices and laboratory equipment.",
    metaKeywords: "OEM products, original equipment manufacturing, custom manufacturing, medical device OEM, laboratory equipment manufacturing, healthcare OEM",
    ogTitle: "OEM Products - Original Equipment Manufacturing | NIDDIKKARE LLP",
    ogDescription: "Custom OEM manufacturing solutions for healthcare and life sciences industry.",
    ogImage: logoUrl,
    ogType: "service",
    canonicalUrl: `${baseUrl}/services/oem-products`,
    robotsDirective: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "OEM Product Manufacturing",
      "description": "Original equipment manufacturing for healthcare and life sciences products",
      "provider": {
        "@type": "Organization",
        "name": "NIDDIKKARE LLP"
      },
      "serviceType": "Manufacturing Services"
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
      "serviceType": "Healthcare Product Manufacturing"
    }
  },

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
  }
};

// Default SEO data generator
export const getDefaultProductionSEOData = (pathname: string): SEOData => {
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