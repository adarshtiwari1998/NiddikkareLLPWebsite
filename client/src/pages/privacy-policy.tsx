import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Shield, Eye, Database, Clock, Mail, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
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
            <Shield className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-xl text-white/90">Your privacy and data protection matter to us</p>
            </div>
          </div>
          <p className="text-white/80 max-w-2xl">
            NIDDIKKARE LLP is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
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
                <strong>Last Updated:</strong> January 23, 2025
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-primary" />
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Professional details (company, job title, department)</li>
                    <li>Communication preferences and inquiry details</li>
                    <li>Account credentials for our digital platforms</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Technical Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address, browser type, and device information</li>
                    <li>Website usage patterns and navigation data</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Log files and analytics data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="h-6 w-6 mr-3 text-primary" />
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Service Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Process orders and fulfill product requests</li>
                    <li>Provide customer support and technical assistance</li>
                    <li>Deliver training programs and educational content</li>
                    <li>Manage account access and authentication</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Communication</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Respond to inquiries and support requests</li>
                    <li>Send product updates and announcements</li>
                    <li>Share relevant industry news and insights</li>
                    <li>Provide regulatory and compliance information</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Improvement</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Analyze website usage and user behavior</li>
                    <li>Enhance product development and innovation</li>
                    <li>Improve customer experience and service quality</li>
                    <li>Optimize website performance and functionality</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Compliance</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Meet legal and regulatory requirements</li>
                    <li>Maintain quality assurance standards</li>
                    <li>Protect against fraud and security threats</li>
                    <li>Enforce terms of service and user agreements</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> Trusted partners who assist in delivering our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you explicitly authorize information sharing</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  We implement robust security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Access and Control</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Delete your personal information</li>
                    <li>Restrict processing activities</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Communication Preferences</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Opt out of marketing communications</li>
                    <li>Update contact preferences</li>
                    <li>Choose communication channels</li>
                    <li>Manage subscription settings</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <p className="text-gray-700">
                  As a global healthcare and life sciences company, we may transfer your information to countries outside your jurisdiction. 
                  We ensure appropriate safeguards are in place, including adequacy decisions, standard contractual clauses, 
                  and other approved transfer mechanisms to protect your data.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  For questions about this privacy policy or to exercise your rights, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-700">privacy@niddikkare.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-700">+91 (customer service number)</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  We may update this privacy policy periodically to reflect changes in our practices or legal requirements. 
                  We will notify you of significant changes through our website or direct communication. 
                  Continued use of our services after updates constitutes acceptance of the revised policy.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}