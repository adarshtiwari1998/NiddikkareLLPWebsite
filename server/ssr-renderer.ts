// Simple SSR content generator without React dependencies
// This provides static HTML content for SEO crawling

interface SSRResult {
  html: string;
  helmet: any;
}

// Server-side page content mapping (static HTML for SEO)
const pageContent: Record<string, string> = {
  '/': `
    <div class="home-page container mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">NIDDIKKARE LLP - Healthcare & Life Sciences Innovation</h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">Leading provider of healthcare and life sciences solutions including neonatal care products, premium medical linens, DNA/RNA extraction kits, molecular diagnostics, and advanced testing solutions. Trusted by healthcare professionals worldwide.</p>
      </header>
      
      <section class="hero-content mb-16">
        <h2 class="text-3xl font-semibold text-center mb-8">Our Solutions</h2>
        <div class="solutions-grid grid md:grid-cols-3 gap-8">
          <div class="solution-card bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3 text-green-700">Healthcare Products</h3>
            <p class="text-gray-600">Premium neonatal care and medical linens for healthcare facilities worldwide. Specialized products for newborn care and medical textiles.</p>
            <ul class="mt-4 text-sm text-gray-500">
              <li>• Neonatal Care Products</li>
              <li>• Medical Linens (Woven, Non-woven, Blended)</li>
              <li>• Surgical Drapes and Gowns</li>
              <li>• Patient Care Products</li>
            </ul>
          </div>
          <div class="solution-card bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3 text-green-700">Life Sciences</h3>
            <p class="text-gray-600">Advanced DNA/RNA extraction kits and molecular diagnostics solutions for research and clinical applications.</p>
            <ul class="mt-4 text-sm text-gray-500">
              <li>• DNA/RNA Extraction Kits</li>
              <li>• Molecular Diagnostics</li>
              <li>• Gut Care Solutions</li>
              <li>• Research Applications</li>
            </ul>
          </div>
          <div class="solution-card bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3 text-green-700">Digital Tools & Testing</h3>
            <p class="text-gray-600">Comprehensive laboratory management tools, testing solutions, and digital platforms for modern laboratories.</p>
            <ul class="mt-4 text-sm text-gray-500">
              <li>• E-Learning Resources</li>
              <li>• Sample Request Systems</li>
              <li>• Filtration & Testing Tools</li>
              <li>• Laboratory Finders</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section class="company-stats grid md:grid-cols-4 gap-6 text-center mb-16">
        <div class="stat">
          <div class="text-3xl font-bold text-green-700">4+</div>
          <div class="text-gray-600">Years of Excellence</div>
        </div>
        <div class="stat">
          <div class="text-3xl font-bold text-green-700">100+</div>
          <div class="text-gray-600">Products & Solutions</div>
        </div>
        <div class="stat">
          <div class="text-3xl font-bold text-green-700">10+</div>
          <div class="text-gray-600">Healthcare Partners</div>
        </div>
        <div class="stat">
          <div class="text-3xl font-bold text-green-700">5+</div>
          <div class="text-gray-600">Countries Served</div>
        </div>
      </section>
    </div>
  `,
  
  '/products': `
    <div class="products-page container mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Healthcare & Life Sciences Product Portfolio</h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">Explore NIDDIKKARE LLP's comprehensive product portfolio including neonatal care, medical linens, DNA/RNA extraction kits, and molecular diagnostics solutions trusted by healthcare professionals worldwide.</p>
      </header>
      
      <section class="product-categories grid md:grid-cols-2 gap-12">
        <div class="category bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-semibold text-green-700 mb-6">Healthcare Products</h2>
          
          <div class="subcategory mb-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Neonatal Care</h3>
            <p class="text-gray-600 mb-4">Specialized products for newborn care including Baby's First Touch and temperature regulation solutions designed for optimal infant comfort and safety.</p>
            <ul class="text-sm text-gray-500">
              <li>• Baby's First Touch Temperature Regulation</li>
              <li>• Neonatal Warming Solutions</li>
              <li>• Infant Care Accessories</li>
            </ul>
          </div>
          
          <div class="subcategory">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Medical Linens</h3>
            <p class="text-gray-600 mb-4">Premium medical textiles including surgical drapes, patient gowns, and maternity products available in woven, non-woven, and blended materials.</p>
            <ul class="text-sm text-gray-500">
              <li>• Surgical Drapes & Towels</li>
              <li>• Patient & Surgical Gowns</li>
              <li>• Maternity Products</li>
              <li>• Bedsheets & Pillow Covers</li>
            </ul>
          </div>
        </div>
        
        <div class="category bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-semibold text-green-700 mb-6">Life Sciences</h2>
          
          <div class="subcategory mb-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">DNA/RNA Extraction</h3>
            <p class="text-gray-600 mb-4">Advanced extraction kits for molecular biology and diagnostic applications with high yield and purity for research and clinical use.</p>
            <ul class="text-sm text-gray-500">
              <li>• High-Yield Extraction Kits</li>
              <li>• Research-Grade Solutions</li>
              <li>• Clinical Applications</li>
            </ul>
          </div>
          
          <div class="subcategory">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Molecular Diagnostics</h3>
            <p class="text-gray-600 mb-4">Cutting-edge diagnostic solutions for clinical and research laboratories with precision and reliability for accurate results.</p>
            <ul class="text-sm text-gray-500">
              <li>• Clinical Diagnostic Kits</li>
              <li>• Research Applications</li>
              <li>• Quality Control Solutions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  `,

  '/services/consultancy-ivd': `
    <div class="consultancy-page container mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">IVD Consultancy Services - Expert Diagnostics Consulting</h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">Professional consultancy services for in vitro diagnostics development and regulatory compliance with comprehensive support from concept to market.</p>
      </header>
      
      <section class="services-content max-w-4xl mx-auto">
        <div class="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 class="text-3xl font-semibold text-green-700 mb-6">Our Expertise</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-green-600 mr-3">•</span>
                <span>IVD Development Strategy</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-3">•</span>
                <span>Regulatory Compliance Guidance</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-3">•</span>
                <span>Quality Management Systems</span>
              </li>
            </ul>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-green-600 mr-3">•</span>
                <span>Market Access Planning</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-3">•</span>
                <span>Clinical Study Design</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-3">•</span>
                <span>Technical Documentation</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="bg-green-50 p-8 rounded-lg">
          <h2 class="text-3xl font-semibold text-green-700 mb-4">Why Choose NIDDIKKARE</h2>
          <p class="text-gray-700 text-lg">With extensive experience in diagnostic consulting, we provide comprehensive support for IVD development from concept to market. Our team combines deep technical knowledge with regulatory expertise to ensure successful product development and market entry.</p>
        </div>
      </section>
    </div>
  `,

  '/services/contract-research': `
    <div class="contract-research-page container mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Contract Research Services - Professional Research Solutions</h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">Expert contract research services for healthcare and life sciences applications with comprehensive support for clinical studies and scientific consulting.</p>
      </header>
      
      <section class="research-services max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-semibold text-green-700 mb-6">Research Capabilities</h2>
        <p class="text-gray-700 text-lg mb-6">Our team provides comprehensive research solutions including clinical studies, analytical testing, and scientific consulting for healthcare and life sciences companies.</p>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="service-card p-4 border border-gray-200 rounded-lg">
            <h3 class="font-semibold text-green-700 mb-2">Clinical Studies</h3>
            <p class="text-gray-600 text-sm">Professional clinical research services</p>
          </div>
          <div class="service-card p-4 border border-gray-200 rounded-lg">
            <h3 class="font-semibold text-green-700 mb-2">Analytical Testing</h3>
            <p class="text-gray-600 text-sm">Comprehensive analytical solutions</p>
          </div>
          <div class="service-card p-4 border border-gray-200 rounded-lg">
            <h3 class="font-semibold text-green-700 mb-2">Scientific Consulting</h3>
            <p class="text-gray-600 text-sm">Expert scientific guidance</p>
          </div>
        </div>
      </section>
    </div>
  `,

  '/tools-testing/tools/e-training': `
    <div class="e-training-page container mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">E-Learning Resources - Online Laboratory Training</h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">Comprehensive educational materials and online training resources for laboratory professionals. 200+ educational articles, technical guides, and video tutorials available 24/7.</p>
      </header>
      
      <section class="training-features max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold text-green-700 mb-8 text-center">Training Features</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">200+ Educational Articles</h3>
            <p class="text-gray-600 text-sm">Comprehensive library of educational content</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">150+ Technical Guides</h3>
            <p class="text-gray-600 text-sm">Detailed technical documentation</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">Video Tutorials</h3>
            <p class="text-gray-600 text-sm">Visual learning experiences</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">24/7 Access</h3>
            <p class="text-gray-600 text-sm">Available anytime, anywhere</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">Professional Certification</h3>
            <p class="text-gray-600 text-sm">Industry-recognized programs</p>
          </div>
        </div>
      </section>
    </div>
  `,

  '/tools-testing/tools/sample-request': `
    <div class="sample-request-page container mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Sample Request System - Laboratory Sample Management</h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">Streamlined sample request and tracking system with real-time monitoring, analytics dashboard, and automated notifications for efficient laboratory workflows.</p>
      </header>
      
      <section class="system-features max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold text-green-700 mb-8 text-center">System Features</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">Real-Time Tracking</h3>
            <p class="text-gray-600">Monitor sample status and location in real-time</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">Analytics Dashboard</h3>
            <p class="text-gray-600">Comprehensive data visualization and reporting</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">Secure Protocol</h3>
            <p class="text-gray-600">Industry-standard security and compliance</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">Automated Notifications</h3>
            <p class="text-gray-600">Smart alerts and status updates</p>
          </div>
        </div>
      </section>
    </div>
  `,

  '/tools-testing/tools/filter-finder': `
    <div class="filter-finder-page container mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">FilterFinder - Advanced Filtration Solution Finder</h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">Advanced filtration solution finder for laboratory applications with smart search, custom parameters, AI-powered recommendations, and quick results.</p>
      </header>
      
      <section class="finder-features max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold text-green-700 mb-8 text-center">FilterFinder Features</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">Smart Search Technology</h3>
            <p class="text-gray-600">AI-powered search with intelligent matching</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">Custom Parameter Matching</h3>
            <p class="text-gray-600">Precise filtering based on your specifications</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">AI-Powered Recommendations</h3>
            <p class="text-gray-600">Intelligent product suggestions</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-green-700 mb-2">Quick Results Display</h3>
            <p class="text-gray-600">Fast, comprehensive result presentation</p>
          </div>
        </div>
      </section>
    </div>
  `
};

export function renderPageSSR(pathname: string): SSRResult {
  // Get the static HTML content for this path
  const html = pageContent[pathname] || pageContent['/'];
  
  return {
    html,
    helmet: null
  };
}

export function getSSRContent(pathname: string): string {
  // Return page content or fallback
  if (pageContent[pathname]) {
    return pageContent[pathname];
  }
  
  // Fallback content for paths without specific SSR components
  const fallbackContent = {
    '/healthcare': `
      <div class="healthcare-page">
        <h1>Healthcare Solutions - NIDDIKKARE LLP</h1>
        <p>Comprehensive healthcare solutions including neonatal care products and premium medical linens for healthcare facilities worldwide.</p>
        <section class="healthcare-categories">
          <div class="category">
            <h2>Neonatal Care</h2>
            <p>Specialized products for newborn care and temperature regulation.</p>
          </div>
          <div class="category">
            <h2>Medical Linens</h2>
            <p>Premium medical textiles including woven, non-woven, and blended materials.</p>
          </div>
        </section>
      </div>
    `,
    '/life-sciences': `
      <div class="life-sciences-page">
        <h1>Life Sciences Solutions - NIDDIKKARE LLP</h1>
        <p>Advanced life sciences solutions including DNA/RNA extraction kits and molecular diagnostics for research and clinical applications.</p>
        <section class="life-sciences-categories">
          <div class="category">
            <h2>DNA/RNA Extraction</h2>
            <p>High-quality extraction kits for molecular biology applications.</p>
          </div>
          <div class="category">
            <h2>Molecular Diagnostics</h2>
            <p>Cutting-edge diagnostic solutions for clinical laboratories.</p>
          </div>
        </section>
      </div>
    `
  };
  
  return fallbackContent[pathname as keyof typeof fallbackContent] || `
    <div class="page-content">
      <h1>NIDDIKKARE LLP - Healthcare & Life Sciences</h1>
      <p>Leading provider of healthcare and life sciences solutions.</p>
    </div>
  `;
}