import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Layers, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Shirt,
  Target,
  Circle
} from "lucide-react";

const SurgicalCutSheetsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const relatedProducts = [
    {
      id: "surgical-drapes",
      name: "Surgical Drapes/Towels",
      code: "NKR-301",
      description: "Sterile barrier protection",
      href: "/products/medical-linens/surgical-drapes-towels",
      icon: Layers
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
      id: "scrub-suit",
      name: "Scrub Suit",
      code: "NKR-501",
      description: "Professional fit, breathable",
      href: "/products/medical-linens/scrub-suit",
      icon: Shirt
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Precision Surgical
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Surgical Cut Sheets
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              NKR-302 | Precision fenestration for targeted surgical access with sterile field maintenance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Precise openings</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Sterile field</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Single use</span>
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
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Layers className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Precision Surgical Cut Sheets</p>
                  <p className="text-sm text-gray-500 mt-2">Engineered by NIDDIKKARE for surgical precision</p>
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
                    The NIDDIKKARE Surgical Cut Sheets (NKR-302) feature precision fenestrations designed for 
                    targeted surgical access while maintaining complete sterile field integrity. These specialized 
                    drapes provide surgeons with optimal access to specific anatomical areas while ensuring maximum protection against contamination.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Targeted surgical access</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Maintains sterile field integrity</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Reduces procedure time</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Quality Standards</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Precision cut fenestrations</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Lint-free material</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Adhesive border options</span>
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
                        <Target className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Precise Openings</h4>
                      </div>
                      <p className="text-gray-600">
                        Accurately sized and positioned fenestrations provide optimal surgical site 
                        access while minimizing exposure of surrounding areas.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Sterile Field Maintenance</h4>
                      </div>
                      <p className="text-gray-600">
                        Advanced material design ensures complete sterile barrier protection 
                        around the surgical site during complex procedures.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Circle className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Single Use Design</h4>
                      </div>
                      <p className="text-gray-600">
                        Disposable design eliminates cross-contamination risks and ensures 
                        consistent sterility for every surgical procedure.
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
                        <span className="ml-2 text-gray-600">NKR-302</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Material:</span>
                        <span className="ml-2 text-gray-600">SMS Non-woven</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Weight:</span>
                        <span className="ml-2 text-gray-600">35-45 GSM</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Fenestration:</span>
                        <span className="ml-2 text-gray-600">Various sizes available</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Sheet Size:</span>
                        <span className="ml-2 text-gray-600">100x150, 120x150 cm</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Opening Size:</span>
                        <span className="ml-2 text-gray-600">6x8, 8x10, 10x12 cm</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Color:</span>
                        <span className="ml-2 text-gray-600">Blue, Green</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Packaging:</span>
                        <span className="ml-2 text-gray-600">Sterile, Individual</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "applications" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">Applications & Use Cases</h3>
                  <div className="grid gap-6">
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Orthopedic Surgery</h4>
                      <p className="text-gray-600">
                        Ideal for joint replacements, arthroscopy, and bone procedures requiring 
                        precise access to specific anatomical locations.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Cardiovascular Procedures</h4>
                      <p className="text-gray-600">
                        Essential for cardiac surgeries and vascular procedures where targeted 
                        access is critical for successful outcomes.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">General Surgery</h4>
                      <p className="text-gray-600">
                        Versatile application in various surgical specialties requiring sterile 
                        field maintenance with specific site access.
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
            <Card className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Quote</h3>
                <p className="mb-4 text-indigo-100">
                  Contact our team for pricing and bulk orders
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100">
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
                    <span className="text-sm">Precision Manufacturing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Sterile Packaged</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Precise Fenestrations</span>
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

export default SurgicalCutSheetsPage;