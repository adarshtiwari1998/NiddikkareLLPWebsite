import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Scissors,
  Lock,
  Zap
} from "lucide-react";

const SurgicalOTGownPage = () => {
  const relatedProducts = [
    {
      id: "surgical-drapes",
      name: "Surgical Drapes/Towels",
      code: "NKR-301",
      description: "Sterile barrier protection",
      href: "/products/medical-linens/surgical-drapes-towels",
      image: "/assets/images/medical-linens/surgical-drapes-towels-nkr-301.png"
    },
    {
      id: "surgical-cut-sheets",
      name: "Surgical Cut Sheets", 
      code: "NKR-302",
      description: "Precision surgical draping",
      href: "/products/medical-linens/surgical-cut-sheets",
      image: "/assets/images/medical-linens/surgical-cut-sheets-nkr-302.png"
    },
    {
      id: "scrub-suit",
      name: "Scrub Suit",
      code: "NKR-501",
      description: "Professional fit, breathable",
      href: "/products/medical-linens/scrub-suit",
      image: "/assets/images/medical-linens/scrub-suit-nkr-501.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Surgical Excellence
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Surgical/OT Gown
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              NKR-401/402 | Sterile surgical protection for operating theater professionals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Sterile barrier</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Fluid resistant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Precision fit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Hexagonal Layout */}
        <div className="max-w-7xl mx-auto">
          
          {/* Central Product Hexagon */}
          <div className="mb-16 flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-[4rem] shadow-2xl p-12 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/5] w-80 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-[3rem] flex items-center justify-center">
                  <img 
                    src="/assets/images/medical-linens/surgical-ot-gown-nkr-401-402.png" 
                    alt="Surgical/OT Gown - NKR-401/402"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Floating info badges */}
              <div className="absolute -top-8 -left-8 bg-teal-600 text-white p-4 rounded-2xl shadow-lg">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-3 rounded-xl shadow-lg">
                <span className="font-bold text-sm">NKR-401/402</span>
              </div>
            </div>
          </div>

          {/* Surrounding Information Hexagons */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Left: Features */}
            <div className="bg-white rounded-[2.5rem] shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-teal-100 rounded-2xl">
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Sterile Protection</h2>
                  <p className="text-gray-600">Operating theater excellence</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                The NIDDIKKARE Surgical/OT Gown (NKR-401/402) provides the highest level of protection 
                for surgical teams. Designed for critical procedures where sterile barriers are essential.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl">
                  <Shield className="h-6 w-6 text-teal-600" />
                  <span className="font-semibold text-gray-800">Level 4 Barrier Protection</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
                  <Lock className="h-6 w-6 text-emerald-600" />
                  <span className="font-semibold text-gray-800">Sterile Processing Ready</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <Zap className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-gray-800">Fluid Resistant Surface</span>
                </div>
              </div>
            </div>

            {/* Center: Contact */}
            <div>
              <Card className="bg-gradient-to-br from-teal-600 to-emerald-600 text-white h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Quote</h3>
                  <p className="mb-6 text-teal-100">
                    Contact our team for pricing and bulk orders
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-white text-teal-600 hover:bg-gray-100">
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
                    <h4 className="font-semibold mb-2">Surgical Grade</h4>
                    <p className="text-sm text-teal-100">Meeting highest sterile standards</p>
                  </div>
                  
                  <div className="mt-4 bg-white/20 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Critical Procedures</h4>
                    <p className="text-sm text-teal-100">Trusted in operating theaters worldwide</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Advanced Features */}
            <div className="bg-white rounded-[2.5rem] shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Advanced Features</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Reinforced Critical Zones</h4>
                  <p className="text-gray-600 text-sm">
                    Extra protection in chest, arm, and sleeve areas where fluid exposure is highest.
                  </p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Secure Closure System</h4>
                  <p className="text-gray-600 text-sm">
                    Back-tie design ensures secure fit while maintaining sterile donning procedures.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Comfort Engineering</h4>
                  <p className="text-gray-600 text-sm">
                    Breathable zones and ergonomic design for comfort during extended procedures.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Lint-Free Construction</h4>
                  <p className="text-gray-600 text-sm">
                    Advanced weaving prevents particle shedding in sterile environments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications in Surgical Grid */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-[4rem] p-12 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Surgical Specifications</h3>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <Scissors className="h-6 w-6 text-teal-600 mr-3" />
                    Gown Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-teal-50 rounded-xl">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-teal-600 font-bold">M</span>
                      </div>
                      <h5 className="font-medium text-gray-800">Material</h5>
                      <p className="text-sm text-gray-600">SMS Non-woven</p>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-emerald-600 font-bold">W</span>
                      </div>
                      <h5 className="font-medium text-gray-800">Weight</h5>
                      <p className="text-sm text-gray-600">45-65 GSM</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="h-6 w-6 text-green-600" />
                      </div>
                      <h5 className="font-medium text-gray-800">Protection</h5>
                      <p className="text-sm text-gray-600">Level 4 Barrier</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Lock className="h-6 w-6 text-blue-600" />
                      </div>
                      <h5 className="font-medium text-gray-800">Closure</h5>
                      <p className="text-sm text-gray-600">Back-tie System</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Available Variants</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">NKR-401:</span>
                      <span className="text-gray-600">Standard OR Gown</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">NKR-402:</span>
                      <span className="text-gray-600">Reinforced Critical Care</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Sizes:</span>
                      <span className="text-gray-600">M, L, XL, XXL</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium text-gray-700">Colors:</span>
                      <span className="text-gray-600">Blue, Green</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Performance Features</h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-800 mb-2">Fluid Resistance</h5>
                      <p className="text-sm text-gray-600">Tested to AAMI Level 4 standards</p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-800 mb-2">Breathability</h5>
                      <p className="text-sm text-gray-600">Moisture vapor transmission optimized</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-800 mb-2">Sterile Packaging</h5>
                      <p className="text-sm text-gray-600">Individually wrapped, gamma sterilized</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-800 mb-2">Critical Zone Coverage</h5>
                      <p className="text-sm text-gray-600">Enhanced protection where it matters most</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Quality Standards</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-teal-50 rounded-xl">
                      <Star className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                      <span className="text-sm font-medium">AAMI Certified</span>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <span className="text-sm font-medium">ISO Compliant</span>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <span className="text-sm font-medium">Sterile Grade</span>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <span className="text-sm font-medium">Lint-Free</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OR Applications in Theater Layout */}
          <div className="space-y-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center">Operating Theater Applications</h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-[3rem] shadow-lg overflow-hidden">
                <div className="h-4 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                      <Scissors className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Complex Surgical Procedures</h4>
                      <p className="text-gray-600">For demanding operations requiring maximum protection</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Essential for complex surgeries where extended exposure to bodily fluids is expected. 
                    The Level 4 barrier protection ensures surgical team safety during the most challenging procedures.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-[3rem] shadow-lg overflow-hidden">
                <div className="h-4 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Cardiovascular Surgery</h4>
                      <p className="text-gray-600">Critical protection for high-risk procedures</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Specifically designed for cardiovascular and other high-risk surgical procedures where 
                    sterile barrier integrity is absolutely critical for patient and surgical team safety.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-[3rem] shadow-lg overflow-hidden">
                <div className="h-4 bg-gradient-to-r from-green-500 to-blue-500"></div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Stethoscope className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Trauma Surgery</h4>
                      <p className="text-gray-600">Emergency procedures requiring rapid protection</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Perfect for emergency trauma surgery where rapid donning and reliable protection 
                    are essential. Quick-access design doesn't compromise on barrier effectiveness.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-[3rem] shadow-lg overflow-hidden">
                <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Lock className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Infection Control Units</h4>
                      <p className="text-gray-600">Maximum protection for high-risk environments</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Ideal for isolation procedures and infection control environments where maximum 
                    barrier protection is required to prevent cross-contamination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Surgical Excellence Banner */}
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Surgical Excellence Standards</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Star className="h-5 w-5" />
                <span>AAMI Level 4 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Sterile Processing Compatible</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>OR Trusted Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Products</h2>
            <p className="text-gray-600">Explore our other surgical protection solutions</p>
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

export default SurgicalOTGownPage;