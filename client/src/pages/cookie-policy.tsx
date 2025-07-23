import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Cookie, Settings, Database, Clock, Mail, Phone, Shield, Eye } from "lucide-react";
import SEO from "@/components/seo";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO pagePath="/cookie-policy" />
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
            <Cookie className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
              <p className="text-xl text-white/90">How we use cookies and tracking technologies</p>
            </div>
          </div>
          <p className="text-white/80 max-w-2xl">
            This policy explains how NIDDIKKARE LLP uses cookies and similar technologies to enhance your browsing experience.
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
                <strong>Last Updated:</strong> July 21, 2025
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Cookie className="h-6 w-6 mr-3 text-primary" />
                What Are Cookies?
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
                </p>
                <p className="text-gray-700">
                  Similar technologies include web beacons, pixels, and local storage that serve comparable functions to cookies.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-800 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Essential Cookies
                  </h3>
                  <p className="text-green-700 mb-3">
                    These cookies are necessary for our website to function properly. They cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-green-700">
                    <li>Authentication and security</li>
                    <li>Session management</li>
                    <li>Shopping cart functionality</li>
                    <li>Load balancing</li>
                    <li>Form submission</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800 flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Analytics Cookies
                  </h3>
                  <p className="text-blue-700 mb-3">
                    These help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Page views and traffic sources</li>
                    <li>User behavior analysis</li>
                    <li>Performance monitoring</li>
                    <li>Error tracking</li>
                    <li>Site improvement insights</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-purple-800 flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Functional Cookies
                  </h3>
                  <p className="text-purple-700 mb-3">
                    These enhance your experience by remembering your preferences.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-purple-700">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Location data</li>
                    <li>Previous searches</li>
                    <li>Customization options</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-800 flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Marketing Cookies
                  </h3>
                  <p className="text-yellow-700 mb-3">
                    These track your online activity to show relevant advertisements.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-yellow-700">
                    <li>Targeted advertising</li>
                    <li>Social media integration</li>
                    <li>Cross-site tracking</li>
                    <li>Campaign effectiveness</li>
                    <li>Retargeting</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specific Cookies Used</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Purpose</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-mono">session_id</td>
                      <td className="border border-gray-300 px-4 py-3">Maintains user session</td>
                      <td className="border border-gray-300 px-4 py-3">Session</td>
                      <td className="border border-gray-300 px-4 py-3">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono">auth_token</td>
                      <td className="border border-gray-300 px-4 py-3">User authentication</td>
                      <td className="border border-gray-300 px-4 py-3">30 days</td>
                      <td className="border border-gray-300 px-4 py-3">Essential</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-mono">preferences</td>
                      <td className="border border-gray-300 px-4 py-3">Store user preferences</td>
                      <td className="border border-gray-300 px-4 py-3">1 year</td>
                      <td className="border border-gray-300 px-4 py-3">Functional</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono">analytics_id</td>
                      <td className="border border-gray-300 px-4 py-3">Website analytics</td>
                      <td className="border border-gray-300 px-4 py-3">2 years</td>
                      <td className="border border-gray-300 px-4 py-3">Analytics</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-mono">marketing_consent</td>
                      <td className="border border-gray-300 px-4 py-3">Marketing preferences</td>
                      <td className="border border-gray-300 px-4 py-3">1 year</td>
                      <td className="border border-gray-300 px-4 py-3">Marketing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-800">External Services</h3>
                  <p className="text-orange-700 mb-3">
                    We may use third-party services that set their own cookies. These include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Analytics Providers</h4>
                      <ul className="list-disc list-inside space-y-1 text-orange-700">
                        <li>Google Analytics</li>
                        <li>Website performance tools</li>
                        <li>User behavior analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Social Media</h4>
                      <ul className="list-disc list-inside space-y-1 text-orange-700">
                        <li>LinkedIn widgets</li>
                        <li>Twitter integration</li>
                        <li>YouTube embedded videos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Browser Settings</h3>
                  <p className="text-blue-700 mb-3">
                    Most browsers allow you to control cookies through their settings:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Set cookie expiration preferences</li>
                    <li>Receive notifications for new cookies</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Our Cookie Manager</h3>
                  <p className="text-green-700 mb-3">
                    Use our cookie preference center to customize your experience:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-green-700">
                    <li>Accept or reject cookie categories</li>
                    <li>View detailed cookie information</li>
                    <li>Update preferences anytime</li>
                    <li>Download your cookie data</li>
                    <li>Reset to default settings</li>
                  </ul>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700">
                    Manage Cookie Preferences
                  </Button>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Browser-Specific Instructions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Google Chrome</h4>
                  <p className="text-sm text-gray-700">Settings → Privacy & Security → Cookies and other site data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mozilla Firefox</h4>
                  <p className="text-sm text-gray-700">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Safari</h4>
                  <p className="text-sm text-gray-700">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Microsoft Edge</h4>
                  <p className="text-sm text-gray-700">Settings → Site permissions → Cookies and stored data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Internet Explorer</h4>
                  <p className="text-sm text-gray-700">Tools → Internet Options → Privacy</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mobile Browsers</h4>
                  <p className="text-sm text-gray-700">Settings → Privacy → Block Cookies</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <p className="text-yellow-800 mb-4">
                  Disabling cookies may affect your experience on our website:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Limited Functionality</h4>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700">
                      <li>Login issues</li>
                      <li>Lost preferences</li>
                      <li>Incomplete forms</li>
                      <li>Shopping cart problems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Reduced Personalization</h4>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700">
                      <li>No customized content</li>
                      <li>Repeated information requests</li>
                      <li>Less relevant recommendations</li>
                      <li>Generic user experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  For questions about our cookie policy or to exercise your rights, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-700">cookies@niddikkare.com</span>
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
                  We may update this cookie policy to reflect changes in our practices or legal requirements. 
                  We will notify you of significant changes through our website or direct communication. 
                  The "Last Updated" date at the top of this policy indicates when the most recent changes were made.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}