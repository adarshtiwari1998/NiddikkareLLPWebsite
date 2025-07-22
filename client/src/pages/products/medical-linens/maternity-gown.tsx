import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Layers,
  Baby,
  Shirt,
  Bed
} from "lucide-react";

const MaternityGownPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const relatedProducts = [
    {
      id: "baby-first-touch",
      name: "Baby First Touch",
      code: "NKR-BFT",
      description: "100% cotton construction",
      href: "/products/medical-linens/baby-first-touch",
      icon: Layers
    },
    {
      id: "patient-gown", 
      name: "Patient Gown",
      code: "NKR-602",
      description: "Patient comfort, easy access",
      href: "/products/medical-linens/patient-gown",
      icon: Baby
    },
    {
      id: "surgical-drapes",
      name: "Surgical Drapes/Towels", 
      code: "NKR-301",
      description: "Sterile barrier protection",
      href: "/products/medical-linens/surgical-drapes-towels",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Patient Care
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Maternity Gown
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              NKR-601 | Designed for maximum comfort during the most important moments
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Comfortable fit</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Breathable</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Soft fabric</span>
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
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Professional Maternity Gown</p>
                  <p className="text-sm text-gray-500 mt-2">Designed by NIDDIKKARE for patient comfort</p>
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
                    The NIDDIKKARE Maternity Gown (NKR-601) is specifically designed to provide maximum comfort 
                    and dignity for expecting mothers during hospital stays and delivery. Crafted from premium 
                    soft cotton blend fabrics, this gown ensures breathability and comfort during extended wear.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Enhanced patient comfort</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Easy access for medical procedures</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Maintains patient dignity</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Quality Standards</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Hospital-grade quality</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Pre-washed and sanitized</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Hypoallergenic materials</span>
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
                        <Heart className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Comfortable Fit</h4>
                      </div>
                      <p className="text-gray-600">
                        Ergonomically designed to accommodate body changes during pregnancy, 
                        providing comfort without restriction of movement.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Breathable Material</h4>
                      </div>
                      <p className="text-gray-600">
                        Premium cotton blend fabric ensures optimal air circulation, 
                        keeping patients comfortable during extended wear periods.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Layers className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">Soft Fabric</h4>
                      </div>
                      <p className="text-gray-600">
                        Ultra-soft fabric texture provides gentle contact with sensitive skin, 
                        reducing irritation and enhancing patient comfort.
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
                        <span className="ml-2 text-gray-600">NKR-601</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Material:</span>
                        <span className="ml-2 text-gray-600">Premium Cotton Blend</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Weight:</span>
                        <span className="ml-2 text-gray-600">180-200 GSM</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Sizes Available:</span>
                        <span className="ml-2 text-gray-600">S, M, L, XL, XXL</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Color Options:</span>
                        <span className="ml-2 text-gray-600">Blue, Pink, White</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Closure Type:</span>
                        <span className="ml-2 text-gray-600">Tie Strings</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Washing:</span>
                        <span className="ml-2 text-gray-600">Machine Washable</span>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Sterilization:</span>
                        <span className="ml-2 text-gray-600">Steam/Autoclave Compatible</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "applications" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">Applications & Use Cases</h3>
                  <div className="grid gap-6">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Maternity Wards</h4>
                      <p className="text-gray-600">
                        Primary use in maternity departments for expecting mothers during admission, 
                        labor, and post-delivery recovery periods.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Delivery Rooms</h4>
                      <p className="text-gray-600">
                        Designed for use during delivery procedures, providing easy access for 
                        medical staff while maintaining patient comfort and dignity.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Recovery Areas</h4>
                      <p className="text-gray-600">
                        Ideal for post-delivery recovery rooms, ensuring patient comfort during 
                        the critical recovery period and initial bonding time.
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
            <Card className="bg-gradient-to-br from-primary to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Quote</h3>
                <p className="mb-4 text-blue-100">
                  Contact our team for pricing and bulk orders
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-primary hover:bg-gray-100">
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
                    <span className="text-sm">Hospital Grade Quality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Pre-washed & Sanitized</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Hypoallergenic Materials</span>
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

export default MaternityGownPage;