import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shirt, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Heart,
  Baby,
  Layers
} from "lucide-react";

const ScrubSuitPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const relatedProducts = [
    {
      id: "patient-gown",
      name: "Patient Gown",
      code: "NKR-602",
      description: "Patient comfort, easy access",
      href: "/products/medical-linens/patient-gown",
      icon: Baby
    },
    {
      id: "surgical-ot-gown",
      name: "Surgical/OT Gown", 
      code: "NKR-401/402",
      description: "Sterile protection, fluid resistant",
      href: "/products/medical-linens/surgical-ot-gown",
      icon: Shield
    },
    {
      id: "surgical-drapes",
      name: "Surgical Drapes/Towels",
      code: "NKR-301",
      description: "Sterile barrier protection",
      href: "/products/medical-linens/surgical-drapes-towels",
      icon: Layers
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Surgical
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Scrub Suit
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              NKR-501 | Professional medical uniforms for healthcare professionals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Professional fit</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Breathable</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Comfortable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Image */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Shirt className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Professional Scrub Suit</p>
                  <p className="text-sm text-gray-500 mt-2">Designed by NIDDIKKARE for healthcare professionals</p>
                </div>
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-wrap gap-4 mb-6 border-b">
                {["overview", "features", "specifications", "applications"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-1 font-medium transition-colors ${
                      activeTab === tab
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {activeTab === "overview" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">Product Overview</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The NIDDIKKARE Scrub Suit (NKR-501) is designed for healthcare professionals who demand comfort, 
                    functionality, and professional appearance. Made from high-quality breathable fabric, these scrubs 
                    provide the perfect balance of durability and comfort for long shifts in demanding medical environments.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Enhanced comfort during long shifts</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Professional appearance</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Easy movement and flexibility</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Quality Standards</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Medical-grade fabric</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Color-fast and shrink-resistant</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Easy care and maintenance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">Product Features</h3>
                  <div className="grid gap-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shirt className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Professional Fit</h4>
                      </div>
                      <p className="text-gray-600">
                        Tailored design provides a professional appearance while ensuring comfort and 
                        freedom of movement during demanding healthcare activities.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Breathable Fabric</h4>
                      </div>
                      <p className="text-gray-600">
                        Advanced fabric technology ensures optimal air circulation, keeping healthcare 
                        professionals comfortable throughout their shifts.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Heart className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Comfortable Wear</h4>
                      </div>
                      <p className="text-gray-600">
                        Ergonomic design and soft fabric construction provide all-day comfort, 
                        reducing fatigue during extended work periods.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Product Code:</span>
                        <span className="ml-2 text-gray-600">NKR-501</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Material:</span>
                        <span className="ml-2 text-gray-600">Poly-Cotton Blend (65/35)</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Weight:</span>
                        <span className="ml-2 text-gray-600">180 GSM</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Style:</span>
                        <span className="ml-2 text-gray-600">V-neck Top + Drawstring Pants</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Sizes Available:</span>
                        <span className="ml-2 text-gray-600">XS, S, M, L, XL, XXL</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Color Options:</span>
                        <span className="ml-2 text-gray-600">Green, Blue, Pink, White</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Pockets:</span>
                        <span className="ml-2 text-gray-600">2 Front + 1 Chest Pocket</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Care:</span>
                        <span className="ml-2 text-gray-600">Machine Wash, Tumble Dry</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "applications" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">Applications & Use Cases</h3>
                  <div className="grid gap-6">
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Hospital Staff</h4>
                      <p className="text-gray-600">
                        Essential uniform for doctors, nurses, and medical technicians working in 
                        hospitals and healthcare facilities requiring professional attire.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Surgical Teams</h4>
                      <p className="text-gray-600">
                        Suitable for surgical assistants and OR staff who need comfortable, 
                        professional uniforms during long surgical procedures.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Clinical Settings</h4>
                      <p className="text-gray-600">
                        Perfect for outpatient clinics, diagnostic centers, and other healthcare 
                        settings where professional appearance is important.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Quote</h3>
                <p className="mb-4 text-cyan-100">
                  Contact our team for pricing and bulk orders
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-cyan-600 hover:bg-gray-100">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Request Quote
                  </Button>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>+91-90151 62449</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>info@niddikkare.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Assurance */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quality Assurance</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Professional Grade Quality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Color-fast & Shrink Resistant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Breathable Fabric</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Products</h2>
            <p className="text-gray-600">Explore our other medical linen solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.code}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <Link href={product.href}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrubSuitPage;