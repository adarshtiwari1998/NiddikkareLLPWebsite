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
  Droplets,
  Layers,
  Heart,
  Baby
} from "lucide-react";

const MackintoshRubberSheetPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const relatedProducts = [
    {
      id: "bedsheet-pillow-covers",
      name: "Bedsheet with Pillow Covers",
      code: "NKR-202",
      description: "Soft cotton, wrinkle resistant",
      href: "/products/medical-linens/bedsheet-pillow-covers",
      icon: Layers
    },
    {
      id: "surgical-drapes",
      name: "Surgical Drapes/Towels", 
      code: "NKR-301",
      description: "Sterile barrier protection",
      href: "/products/medical-linens/surgical-drapes-towels",
      icon: Shield
    },
    {
      id: "maternity-gown",
      name: "Maternity Gown",
      code: "NKR-601",
      description: "Comfortable fit, breathable",
      href: "/products/medical-linens/maternity-gown",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Protective
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Mackintosh Rubber Sheet
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              NKR-701/702 | W/H & W/o Cloth - Superior waterproof protection for medical environments
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Waterproof</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Durable</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Easy to clean</span>
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
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Professional Mackintosh Sheet</p>
                  <p className="text-sm text-gray-500 mt-2">Engineered by NIDDIKKARE for superior protection</p>
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
                    The NIDDIKKARE Mackintosh Rubber Sheet (NKR-701/702) provides essential waterproof protection 
                    for hospital beds and medical equipment. Available in two variants - with cloth backing (W/H) 
                    and without cloth (W/o), these sheets offer superior durability and easy maintenance for healthcare facilities.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Complete waterproof protection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Prevents bed soiling and damage</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Maintains hygiene standards</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Quality Standards</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Medical-grade rubber</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Chemical resistant</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Long-lasting durability</span>
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
                        <Droplets className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Waterproof Protection</h4>
                      </div>
                      <p className="text-gray-600">
                        100% waterproof barrier that prevents any liquid penetration, protecting mattresses 
                        and bedding from moisture, spills, and bodily fluids.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Durable Construction</h4>
                      </div>
                      <p className="text-gray-600">
                        High-quality rubber construction ensures long-lasting performance under frequent 
                        use and repeated washing cycles in demanding healthcare environments.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Layers className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Easy Maintenance</h4>
                      </div>
                      <p className="text-gray-600">
                        Simple cleaning process with standard disinfectants, making it ideal for 
                        busy healthcare facilities requiring quick turnaround times.
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
                        <span className="ml-2 text-gray-600">NKR-701/702</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Material:</span>
                        <span className="ml-2 text-gray-600">Medical Grade Rubber</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Thickness:</span>
                        <span className="ml-2 text-gray-600">0.3-0.5mm</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Variants:</span>
                        <span className="ml-2 text-gray-600">W/H Cloth, W/o Cloth</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Sizes Available:</span>
                        <span className="ml-2 text-gray-600">Standard, Large, Extra Large</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Color Options:</span>
                        <span className="ml-2 text-gray-600">White, Green, Blue</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Temperature Range:</span>
                        <span className="ml-2 text-gray-600">-10°C to +60°C</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Sterilization:</span>
                        <span className="ml-2 text-gray-600">Chemical Compatible</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "applications" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">Applications & Use Cases</h3>
                  <div className="grid gap-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Hospital Beds</h4>
                      <p className="text-gray-600">
                        Essential protection for hospital mattresses, preventing contamination and 
                        extending equipment lifespan in patient care areas.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Surgical Tables</h4>
                      <p className="text-gray-600">
                        Waterproof barrier for operating tables and examination beds, ensuring 
                        sterile conditions and easy cleanup after procedures.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Emergency Departments</h4>
                      <p className="text-gray-600">
                        Quick deployment protection for emergency situations, providing immediate 
                        barrier protection for various medical scenarios.
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
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Quote</h3>
                <p className="mb-4 text-blue-100">
                  Contact our team for pricing and bulk orders
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
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
                    <span className="text-sm">Medical Grade Materials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">100% Waterproof Tested</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Chemical Resistant</span>
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

export default MackintoshRubberSheetPage;