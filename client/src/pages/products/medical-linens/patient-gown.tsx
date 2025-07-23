import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Heart,
  Accessibility,
  Clock
} from "lucide-react";

const PatientGownPage = () => {
  const relatedProducts = [
    {
      id: "maternity-gown",
      name: "Maternity Gown",
      code: "NKR-601",
      description: "Comfortable fit, breathable",
      href: "/products/medical-linens/maternity-gown",
      image: "/assets/images/medical-linens/maternity-gown-nkr-601.png"
    },
    {
      id: "scrub-suit",
      name: "Scrub Suit", 
      code: "NKR-501",
      description: "Professional fit, breathable",
      href: "/products/medical-linens/scrub-suit",
      image: "/assets/images/medical-linens/scrub-suit-nkr-501.png"
    },
    {
      id: "bedsheet-pillow",
      name: "Bedsheet with Pillow Covers",
      code: "NKR-202",
      description: "Complete bedding solution",
      href: "/products/medical-linens/bedsheet-pillow-covers",
      image: "/assets/images/medical-linens/bedsheet-pillow-covers-nkr-202.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Patient Comfort
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Patient Gown
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              NKR-602 | Patient comfort with easy access for medical care and examinations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Easy access</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Patient comfort</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Dignity preserved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stepped Layout Design */}
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Step 1: Product Focus */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center p-8">
                  <img 
                    src="/assets/images/medical-linens/patient-gown-nkr-602.png" 
                    alt="Patient Gown - NKR-602"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-4 bg-amber-100 rounded-2xl">
                  <User className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Patient-Centered Design</h2>
                  <p className="text-gray-600">Comfort and dignity first</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                The NIDDIKKARE Patient Gown (NKR-602) is thoughtfully designed to balance patient comfort with 
                healthcare provider accessibility. This gown prioritizes patient dignity while ensuring medical 
                professionals have the access they need for examinations and procedures.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
                  <Heart className="h-8 w-8 text-amber-600 mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Patient Comfort</h4>
                  <p className="text-sm text-gray-600">Soft fabric for extended wear</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                  <Accessibility className="h-8 w-8 text-orange-600 mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Easy Access</h4>
                  <p className="text-sm text-gray-600">Strategic opening design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Features & Contact */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[3rem] shadow-xl p-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Core Features</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-8 w-8 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Enhanced Patient Comfort</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Soft, breathable cotton blend fabric minimizes skin irritation and provides comfort 
                        during extended hospital stays. The lightweight design reduces burden on patients.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Accessibility className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Medical Access Design</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Strategic front and back openings allow healthcare providers quick access for 
                        examinations while maintaining patient modesty and comfort.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Dignity Preservation</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Thoughtful design elements ensure patient dignity is maintained during medical 
                        procedures while providing necessary functionality for care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gradient-to-br from-amber-600 to-orange-600 text-white h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Quote</h3>
                  <p className="mb-6 text-amber-100">
                    Contact our team for pricing and bulk orders
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-white text-amber-600 hover:bg-gray-100">
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
                    <h4 className="font-semibold mb-2">Patient Focused</h4>
                    <p className="text-sm text-amber-100">Designed with patient comfort as priority</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Step 3: Specifications in Circular Layout */}
          <div className="bg-white rounded-[4rem] shadow-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Product Specifications</h3>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Central circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <User className="h-8 w-8 text-amber-600 mx-auto mb-1" />
                  <span className="text-amber-600 font-bold">NKR-602</span>
                </div>
              </div>
              
              {/* Surrounding specification cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-amber-600 font-bold text-lg">M</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Material</h4>
                  <p className="text-gray-600 text-sm">Cotton Poly Blend</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-lg">W</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Weight</h4>
                  <p className="text-gray-600 text-sm">140-160 GSM</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Opening</h4>
                  <p className="text-gray-600 text-sm">Rear Tie Closure</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-pink-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sizes</h4>
                  <p className="text-gray-600 text-sm">S, M, L, XL</p>
                </div>
              </div>
            </div>
            
            {/* Additional specs */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Design Features</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Overlap back design</li>
                  <li>• Adjustable neck ties</li>
                  <li>• Side access openings</li>
                  <li>• Reinforced stress points</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Comfort Features</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Soft cotton blend fabric</li>
                  <li>• Breathable construction</li>
                  <li>• Hypoallergenic materials</li>
                  <li>• Pre-shrunk fabric</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Care & Maintenance</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Machine washable</li>
                  <li>• Bleach safe</li>
                  <li>• Tumble dry medium</li>
                  <li>• Iron medium heat</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4: Applications in Timeline Style */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 text-center">Healthcare Applications</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 to-orange-300 rounded-full"></div>
              
              <div className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-white rounded-3xl shadow-lg p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🏥</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">General Hospital Wards</h4>
                    </div>
                    <p className="text-gray-600">
                      Essential for patient care in general wards, providing comfort during recovery 
                      while allowing medical staff easy access for routine care and monitoring.
                    </p>
                  </div>
                  <div className="hidden lg:block"></div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="hidden lg:block"></div>
                  <div className="bg-white rounded-3xl shadow-lg p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🩺</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">Emergency Departments</h4>
                    </div>
                    <p className="text-gray-600">
                      Perfect for emergency care situations where rapid patient assessment and 
                      treatment access is critical while maintaining patient dignity.
                    </p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-white rounded-3xl shadow-lg p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">Long-term Care</h4>
                    </div>
                    <p className="text-gray-600">
                      Ideal for extended care facilities where patient comfort is paramount and 
                      frequent medical examinations require easy access design.
                    </p>
                  </div>
                  <div className="hidden lg:block"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Banner */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Patient-Centered Quality</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Heart className="h-5 w-5" />
                <span>Comfort First Design</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Dignity Preserved</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Medical Access Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Products</h2>
            <p className="text-gray-600">Explore our other patient care solutions</p>
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

export default PatientGownPage;