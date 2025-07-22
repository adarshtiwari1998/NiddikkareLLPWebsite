import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shirt,
  Layers,
  Baby,
  Droplets
} from "lucide-react";

const SurgicalOTGownPage = () => {
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
      id: "scrub-suit",
      name: "Scrub Suit", 
      code: "NKR-501",
      description: "Professional fit, breathable",
      href: "/products/medical-linens/scrub-suit",
      icon: Shirt
    },
    {
      id: "surgical-cut-sheets",
      name: "Surgical Cut Sheets",
      code: "NKR-302",
      description: "Precise openings, sterile field",
      href: "/products/medical-linens/surgical-cut-sheets",
      icon: Layers
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Surgical Protection
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Surgical/OT Gown
            </h1>
            <p className="text-xl mb-8 text-emerald-100">
              NKR-401/402 | Reinforced & Plain - Advanced protection for surgical procedures
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Sterile protection</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Fluid resistant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Reinforced</span>
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
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Surgical/OT Gown</p>
                  <p className="text-sm text-gray-500 mt-2">Engineered by NIDDIKKARE for surgical excellence</p>
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
                    The NIDDIKKARE Surgical/OT Gown (NKR-401/402) provides maximum protection for surgical teams 
                    during critical procedures. Available in reinforced and plain variants, these gowns offer 
                    superior fluid resistance, sterile protection, and enhanced durability for the most demanding surgical environments.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Maximum sterile protection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Fluid and bloodborne pathogen barrier</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Enhanced surgeon safety</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Quality Standards</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Surgical-grade materials</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Reinforced critical areas</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Lint-free construction</span>
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
                        <Shield className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Sterile Protection</h4>
                      </div>
                      <p className="text-gray-600">
                        Advanced barrier technology provides complete sterile protection against 
                        microorganisms and maintains aseptic conditions throughout procedures.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Droplets className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Fluid Resistant</h4>
                      </div>
                      <p className="text-gray-600">
                        Superior fluid resistance protects against blood, body fluids, and other 
                        contaminants commonly encountered during surgical procedures.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Layers className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Reinforced Design</h4>
                      </div>
                      <p className="text-gray-600">
                        Critical areas are reinforced with additional layers for enhanced protection 
                        in high-risk zones during complex surgical procedures.
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
                        <span className="ml-2 text-gray-600">NKR-401/402</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Material:</span>
                        <span className="ml-2 text-gray-600">SMS Non-woven</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Weight:</span>
                        <span className="ml-2 text-gray-600">45-65 GSM</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Variants:</span>
                        <span className="ml-2 text-gray-600">Reinforced (401), Plain (402)</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Sizes Available:</span>
                        <span className="ml-2 text-gray-600">M, L, XL, XXL</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Color Options:</span>
                        <span className="ml-2 text-gray-600">Blue, Green</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Closure:</span>
                        <span className="ml-2 text-gray-600">Neck & Waist Ties</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Sterilization:</span>
                        <span className="ml-2 text-gray-600">ETO Sterile</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "applications" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">Applications & Use Cases</h3>
                  <div className="grid gap-6">
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Major Surgery</h4>
                      <p className="text-gray-600">
                        Essential protection for complex surgical procedures requiring maximum 
                        sterile barrier and fluid resistance in operating theaters.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Operating Theaters</h4>
                      <p className="text-gray-600">
                        Primary protective wear for surgical teams in all types of operating 
                        room procedures where sterile conditions are critical.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Trauma Care</h4>
                      <p className="text-gray-600">
                        Critical protection for emergency surgical interventions and trauma 
                        care where rapid deployment and maximum protection are required.
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
            <Card className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Quote</h3>
                <p className="mb-4 text-emerald-100">
                  Contact our team for pricing and bulk orders
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100">
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
                    <span className="text-sm">Surgical Grade Protection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Sterile Packaged</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Fluid Resistant Tested</span>
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

export default SurgicalOTGownPage;