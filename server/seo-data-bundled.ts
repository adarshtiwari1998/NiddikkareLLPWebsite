// Bundled SEO data for production environments like Render
// This ensures all dependencies are self-contained for production builds

export const seoDataBundled = {
  '/': {
    pageTitle: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation | Neonatal Care, Medical Linens, DNA/RNA Extraction',
    metaDescription: 'Leading provider of healthcare and life sciences solutions including neonatal care products, premium medical linens, DNA/RNA extraction kits, molecular diagnostics, and advanced testing solutions. Trusted by healthcare professionals worldwide.',
    keywords: 'healthcare, life sciences, neonatal care, medical linens, DNA extraction, RNA extraction, molecular diagnostics, medical devices, laboratory solutions, NIDDIKKARE',
    openGraph: {
      title: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
      description: 'Leading provider of healthcare and life sciences solutions including neonatal care products, premium medical linens, DNA/RNA extraction kits, molecular diagnostics, and advanced testing solutions.',
      type: 'website',
      url: 'https://niddikkare.com',
      image: '/src/assets/niddikkare-logo.png',
      siteName: 'NIDDIKKARE LLP'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NIDDIKKARE LLP - Healthcare & Life Sciences Innovation',
      description: 'Leading provider of healthcare and life sciences solutions including neonatal care products, premium medical linens, DNA/RNA extraction kits, molecular diagnostics, and advanced testing solutions.',
      image: '/src/assets/niddikkare-logo.png'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NIDDIKKARE LLP',
      description: 'Leading provider of healthcare and life sciences solutions',
      url: 'https://niddikkare.com',
      logo: 'https://niddikkare.com/src/assets/niddikkare-logo.png'
    }
  },
  '/contact': {
    pageTitle: 'Contact Us | NIDDIKKARE LLP - Get in Touch with Healthcare Experts',
    metaDescription: 'Contact NIDDIKKARE LLP for healthcare and life sciences solutions. Get expert consultation on neonatal care products, medical linens, DNA/RNA extraction kits, and molecular diagnostics.',
    keywords: 'contact, healthcare experts, NIDDIKKARE, consultation, support, medical solutions',
    openGraph: {
      title: 'Contact NIDDIKKARE LLP - Healthcare Experts',
      description: 'Get in touch with NIDDIKKARE LLP for expert healthcare and life sciences solutions.',
      type: 'website',
      url: 'https://niddikkare.com/contact',
      image: '/src/assets/niddikkare-logo.png'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact NIDDIKKARE LLP - Healthcare Experts',
      description: 'Get in touch with NIDDIKKARE LLP for expert healthcare and life sciences solutions.',
      image: '/src/assets/niddikkare-logo.png'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact NIDDIKKARE LLP',
      description: 'Contact page for NIDDIKKARE LLP healthcare solutions'
    }
  },
  '/healthcare': {
    pageTitle: 'Healthcare Solutions | NIDDIKKARE LLP - Neonatal Care & Medical Linens',
    metaDescription: 'Comprehensive healthcare solutions including neonatal care products and premium medical linens. Specialized products for newborn care and medical textiles trusted by healthcare facilities worldwide.',
    keywords: 'healthcare solutions, neonatal care, medical linens, newborn products, medical textiles, hospital supplies',
    openGraph: {
      title: 'Healthcare Solutions | NIDDIKKARE LLP',
      description: 'Comprehensive healthcare solutions including neonatal care products and premium medical linens.',
      type: 'website',
      url: 'https://niddikkare.com/healthcare',
      image: '/src/assets/niddikkare-logo.png'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Healthcare Solutions | NIDDIKKARE LLP',
      description: 'Comprehensive healthcare solutions including neonatal care products and premium medical linens.',
      image: '/src/assets/niddikkare-logo.png'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Healthcare Solutions',
      provider: { '@type': 'Organization', name: 'NIDDIKKARE LLP' }
    }
  }
  // Additional pages can be added as needed
};

// Complete SSR content generator for production builds
export const getCompleteSSRContent = (path: string): string => {
  const seoData = (seoDataBundled as any)[path] || seoDataBundled['/'];
  
  // Return basic HTML structure - this can be enhanced as needed
  return `
    <div class="ssr-content">
      <h1>${seoData.pageTitle}</h1>
      <p>${seoData.metaDescription}</p>
    </div>
  `;
};