import React from "react";
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
  Wind,
  Users,
  Zap
} from "lucide-react";

const ScrubSuitPage = () => {
  const relatedProducts = [
    {
      id: "surgical-ot-gown",
      name: "Surgical/OT Gown",
      code: "NKR-401/402",
      description: "Sterile surgical protection",
      href: "/products/medical-linens/surgical-ot-gown",
      image: "/assets/images/medical-linens/surgical-ot-gown-nkr-401-402.png"
    },
    {
      id: "patient-gown",
      name: "Patient Gown", 
      code: "NKR-602",
      description: "Patient comfort, easy access",
      href: "/products/medical-linens/patient-gown",
      image: "/assets/images/medical-linens/patient-gown-nkr-602.png"
    },
    {
      id: "surgical-drapes",
      name: "Surgical Drapes/Towels",
      code: "NKR-301",
      description: "Sterile barrier protection",
      href: "/products/medical-linens/surgical-drapes-towels",
      image: "/assets/images/medical-linens/surgical-drapes-towels-nkr-301.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Professional Attire
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Scrub Suit
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              NKR-501 | Professional fit and breathable comfort for healthcare workers
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
                <span>Durable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Card Stack Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Main Product Card - Center */}
          <div className="mb-16 relative">
            <div className="bg-white rounded-[5rem] shadow-2xl p-12 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-[3rem] flex items-center justify-center p-8">
                    <img 
                      src="/assets/images/medical-linens/scrub-suit-nkr-501.png" 
                      alt="Scrub Suit - NKR-501"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-4 bg-indigo-100 rounded-2xl">
                        <Shirt className="h-8 w-8 text-indigo-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800">Professional Healthcare Attire</h2>
                        <p className="text-gray-600">Comfort meets professionalism</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                      The NIDDIKKARE Scrub Suit (NKR-501) combines professional appearance with all-day comfort. 
                      Designed specifically for healthcare workers, these scrubs provide the perfect balance of 
                      durability, breathability, and style for demanding medical environments.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
                      <Wind className="h-8 w-8 text-indigo-600 mb-3" />
                      <h4 className="font-semibold text-gray-800 mb-2">Breathable Fabric</h4>
                      <p className="text-sm text-gray-600">Advanced moisture-wicking for comfort</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                      <Shield className="h-8 w-8 text-purple-600 mb-3" />
                      <h4 className="font-semibold text-gray-800 mb-2">Durable Design</h4>
                      <p className="text-sm text-gray-600">Withstands frequent washing</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
                      <Users className="h-8 w-8 text-pink-600 mb-3" />
                      <h4 className="font-semibold text-gray-800 mb-2">Perfect Fit</h4>
                      <p className="text-sm text-gray-600">Ergonomic design for movement</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl">
                      <Zap className="h-8 w-8 text-red-600 mb-3" />
                      <h4 className="font-semibold text-gray-800 mb-2">Easy Care</h4>
                      <p className="text-sm text-gray-600">Machine washable convenience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating contact badge */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-3xl shadow-xl">
              <div className="text-center">
                <Shirt className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm font-semibold">NKR-501</p>
              </div>
            </div>
          </div>

          {/* Overlapping Cards Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Card */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Quote</h3>
                  <p className="mb-6 text-indigo-100">
                    Contact our team for pricing and bulk orders
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100">
                      <ShoppingCart className="h-5 w-5 mr-2" />
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
                  
                  <div className="mt-8 bg-white/20 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Bulk Discounts</h4>
                    <p className="text-sm text-indigo-100">Volume pricing for hospitals and clinics</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Why Choose Our Scrub Suits?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                    <div className="p-3 bg-indigo-100 rounded-xl">
                      <Wind className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Advanced Comfort Technology</h4>
                      <p className="text-gray-600">
                        Moisture-wicking fabric keeps you dry and comfortable during long shifts, 
                        with breathable weave for optimal air circulation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Ergonomic Professional Fit</h4>
                      <p className="text-gray-600">
                        Tailored design ensures freedom of movement while maintaining a professional 
                        appearance throughout demanding work environments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl">
                    <div className="p-3 bg-pink-100 rounded-xl">
                      <Shield className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Long-lasting Durability</h4>
                      <p className="text-gray-600">
                        High-quality fabric construction withstands frequent washing and sanitization 
                        while maintaining color and fit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications in Modern Layout */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[4rem] p-12 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Complete Specifications</h3>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Top Specifications</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-indigo-50 rounded-xl">
                      <Shirt className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                      <p className="font-medium text-gray-800">V-Neck Design</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <p className="font-medium text-gray-800">Unisex Fit</p>
                    </div>
                    <div className="text-center p-4 bg-pink-50 rounded-xl">
                      <Wind className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                      <p className="font-medium text-gray-800">Short Sleeves</p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-xl">
                      <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <p className="font-medium text-gray-800">2 Pockets</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Bottom Specifications</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Style:</span>
                      <span className="text-gray-600">Drawstring Pants</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Pockets:</span>
                      <span className="text-gray-600">2 Side + 1 Back</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Fit:</span>
                      <span className="text-gray-600">Straight Leg</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium text-gray-700">Hem:</span>
                      <span className="text-gray-600">Finished Edge</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Material & Care</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Code:</span>
                      <span className="text-indigo-600 font-mono">NKR-501</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Material:</span>
                      <span className="text-gray-600">Cotton Poly Blend</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Weight:</span>
                      <span className="text-gray-600">180-200 GSM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Colors:</span>
                      <span className="text-gray-600">Navy, Green, Burgundy</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium text-gray-700">Care:</span>
                      <span className="text-gray-600">Machine Washable</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Size Range</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <div key={size} className="text-center p-4 bg-gray-50 rounded-xl">
                        <span className="font-medium text-gray-800">{size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applications with Professional Theme */}
          <div className="space-y-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center">Professional Applications</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Hospital Wards</h4>
                  <p className="text-gray-600">
                    Perfect for general hospital wards, providing comfort and professionalism 
                    for nursing staff and medical technicians throughout long shifts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Clinical Labs</h4>
                  <p className="text-gray-600">
                    Ideal for laboratory environments where comfort and durability are essential 
                    for technicians handling samples and equipment.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-3 bg-gradient-to-r from-pink-500 to-red-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🩺</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Outpatient Clinics</h4>
                  <p className="text-gray-600">
                    Excellent for outpatient facilities and private practices where professional 
                    appearance and patient comfort are priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Quality Assurance</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Star className="h-5 w-5" />
                <span>Professional Grade Fabric</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Color-fast & Shrink-resistant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Comfortable All-day Wear</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Products</h2>
            <p className="text-gray-600">Explore our other professional medical linens</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.code}</p>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>
                  <Link href={product.href}>
                    <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrubSuitPage;