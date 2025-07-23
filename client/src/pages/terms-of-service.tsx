import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, FileText, Scale, AlertTriangle, Clock, Mail, Phone } from "lucide-react";
import SEO from "@/components/seo";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <SEO pagePath="/terms-of-service" />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="flex items-center mb-4">
            <FileText className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
              <p className="text-xl text-white/90">Legal terms and conditions for using our services</p>
            </div>
          </div>
          <p className="text-white/80 max-w-2xl">
            These terms govern your use of NIDDIKKARE LLP services, products, and digital platforms.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-blue-600 mr-3" />
              <p className="text-blue-800">
                <strong>Last Updated:</strong> July 21, 2025 | <strong>Effective Date:</strong> July 23, 2025
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="h-6 w-6 mr-3 text-primary" />
                Acceptance of Terms
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  By accessing or using NIDDIKKARE LLP services, products, website, or any associated platforms, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
                <p className="text-gray-700">
                  These terms apply to all users, including customers, visitors, researchers, clinicians, and business partners.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Company Name:</strong> NIDDIKKARE LLP
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Business Type:</strong> Healthcare and Life Sciences Solutions Provider
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Services:</strong> Medical devices, life sciences products, IT solutions, consultancy services
                </p>
                <p className="text-gray-700">
                  <strong>Jurisdiction:</strong> These terms are governed by the laws of India
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Descriptions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Healthcare Products</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Neonatal care equipment and supplies</li>
                    <li>Medical linens (woven, non-woven, blended)</li>
                    <li>Hospital-grade textiles and materials</li>
                    <li>Quality assurance and compliance services</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Life Sciences</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>DNA/RNA extraction kits and protocols</li>
                    <li>Molecular diagnostics solutions</li>
                    <li>Research tools and laboratory equipment</li>
                    <li>Testing and analysis services</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-primary">IT Solutions</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Recruitment Process Outsourcing (RPO)</li>
                    <li>Contingent workforce solutions</li>
                    <li>Custom web application development</li>
                    <li>Digital platform management</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Consultancy Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IVD medical device consulting</li>
                    <li>Contract research services</li>
                    <li>OEM product development</li>
                    <li>Regulatory compliance support</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-red-800 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Prohibited Activities
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>Unauthorized access to our systems or data</li>
                    <li>Misrepresenting your identity or credentials</li>
                    <li>Sharing login credentials with unauthorized parties</li>
                    <li>Using services for illegal or unethical purposes</li>
                    <li>Reverse engineering or copying proprietary technologies</li>
                    <li>Interfering with website or platform functionality</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Acceptable Use</h3>
                  <ul className="list-disc list-inside space-y-2 text-green-700">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain confidentiality of account credentials</li>
                    <li>Use services for legitimate business purposes</li>
                    <li>Comply with applicable laws and regulations</li>
                    <li>Respect intellectual property rights</li>
                    <li>Report security vulnerabilities responsibly</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Quality and Warranties</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Quality Assurance</h3>
                  <p className="mb-3">
                    NIDDIKKARE LLP is committed to providing high-quality healthcare and life sciences products. 
                    Our products meet industry standards and undergo rigorous quality control processes.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Hospital-grade quality standards for medical products</li>
                    <li>Safety-verified materials and manufacturing processes</li>
                    <li>Healthcare standard compliance and documentation</li>
                    <li>Medical device safety protocols and testing</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Limitation of Warranties</h3>
                  <p>
                    While we strive for excellence, our services and products are provided "as is" without express or implied warranties. 
                    We do not guarantee that our services will be uninterrupted, error-free, or meet all specific requirements. 
                    Users are responsible for verifying product suitability for their intended applications.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">NIDDIKKARE LLP Rights</h3>
                  <p className="mb-3">
                    All content, trademarks, logos, and proprietary information on our platforms are owned by NIDDIKKARE LLP. 
                    This includes but is not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Website content, design, and functionality</li>
                    <li>Product documentation and technical specifications</li>
                    <li>Training materials and educational content</li>
                    <li>Software tools and digital applications</li>
                    <li>Research data and analytical reports</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">User-Generated Content</h3>
                  <p>
                    By submitting content to our platforms, you grant NIDDIKKARE LLP a non-exclusive, worldwide license to use, 
                    display, and distribute such content for business purposes. You represent that you have the right to grant this license.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  NIDDIKKARE LLP's liability is limited to the maximum extent permitted by law. We are not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages resulting from third-party services or products</li>
                  <li>Service interruptions or technical difficulties</li>
                  <li>User errors or misuse of products/services</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  In no event shall our total liability exceed the amount paid by you for the specific service or product in question.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">By You</h3>
                  <p className="text-gray-700">
                    You may terminate your account or stop using our services at any time. 
                    Contact us to request account closure or service discontinuation.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">By Us</h3>
                  <p className="text-gray-700">
                    We may suspend or terminate services for violations of these terms, 
                    non-payment, or other legitimate business reasons with appropriate notice.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  For questions about these terms or legal matters, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-700">legal@niddikkare.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-700">+91 (legal department number)</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  We reserve the right to modify these terms at any time. Changes will be posted on our website with the updated effective date. 
                  Continued use of our services after changes constitutes acceptance of the modified terms. 
                  We recommend reviewing these terms periodically to stay informed of any updates.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}