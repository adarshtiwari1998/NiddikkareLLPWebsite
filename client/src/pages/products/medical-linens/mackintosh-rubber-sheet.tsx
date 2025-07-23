import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplets, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Zap,
  Target,
  Layers
} from "lucide-react";

const MackintoshRubberSheetPage = () => {
  const relatedProducts = [
    {
      id: "bedsheet-pillow",
      name: "Bedsheet with Pillow Covers",
      code: "NKR-202",
      description: "Complete bedding solution",
      href: "/products/medical-linens/bedsheet-pillow-covers",
      image: "/assets/images/medical-linens/bedsheet-pillow-covers-nkr-202.png"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Protection
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Mackintosh Rubber Sheet
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              NKR-701/702 | Waterproof & Plain - Essential protection for beds and surfaces
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
                <span>Easy clean</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Zigzag Layout */}
        <div className="space-y-16">
          {/* Product Image Section - Left */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="aspect-[5/4] bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center p-8">
                  <img 
                    src="/assets/images/medical-linens/mackintosh-rubber-sheet-nkr-701-702.png" 
                    alt="Mackintosh Rubber Sheet - NKR-701/702"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-4 bg-blue-100 rounded-2xl">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Waterproof Protection</h2>
                  <p className="text-gray-600">Ultimate bedding protection solution</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                The NIDDIKKARE Mackintosh Rubber Sheet (NKR-701/702) provides essential waterproof protection for 
                hospital beds, patient mattresses, and medical surfaces. Available in waterproof and plain variants, 
                these sheets ensure hygiene and comfort while protecting valuable bedding and equipment.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl">
                  <Shield className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Complete Protection</h4>
                  <p className="text-sm text-gray-600">100% waterproof barrier</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-4 rounded-xl">
                  <Zap className="h-6 w-6 text-cyan-600 mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Easy Maintenance</h4>
                  <p className="text-sm text-gray-600">Simple wipe-clean surface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section - Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Quote</h3>
                  <p className="mb-6 text-blue-100">
                    Contact our team for pricing and bulk orders
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
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
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Key Features</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">100% Waterproof</h4>
                    <p className="text-gray-600">
                      Complete liquid barrier protection prevents moisture penetration and protects mattresses from damage.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="p-3 bg-cyan-100 rounded-xl">
                    <Shield className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Durable Construction</h4>
                    <p className="text-gray-600">
                      High-quality rubber material withstands repeated use and cleaning cycles without deterioration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="p-3 bg-teal-100 rounded-xl">
                    <Target className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Easy Cleaning</h4>
                    <p className="text-gray-600">
                      Non-porous surface allows for quick sanitization and maintains hygiene standards effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications in Diamond Layout */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Technical Specifications</h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Product Code</h4>
                  <p className="text-blue-600 font-mono text-lg">NKR-701/702</p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Material</h4>
                  <p className="text-gray-600">Natural Rubber/PVC</p>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Thickness</h4>
                  <p className="text-gray-600">0.5-1.0 mm</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sizes</h4>
                  <p className="text-gray-600">90x180, 120x180 cm</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Colors</h4>
                  <p className="text-gray-600">White, Blue, Green</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-pink-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Care</h4>
                  <p className="text-gray-600">Wipe Clean</p>
                </div>
              </div>
            </div>
          </div>

          {/* Applications in Flowing Layout */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 text-center">Applications & Use Cases</h3>
            
            <div className="relative">
              {/* Curved connecting lines */}
              <div className="hidden lg:block absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-blue-300 to-cyan-300"></div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl shadow-lg p-8 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Hospital Beds</h4>
                    <p className="text-gray-600">
                      Essential protection for hospital mattresses and bedding against fluid spills, 
                      ensuring hygiene and extending equipment life.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-lg p-8 relative lg:mt-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Examination Tables</h4>
                    <p className="text-gray-600">
                      Perfect for medical examination tables and procedure beds where waterproof 
                      protection is critical for infection control.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-lg p-8 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Patient Care Areas</h4>
                    <p className="text-gray-600">
                      Ideal for long-term care facilities and patient rooms where bed protection 
                      is essential for maintaining sanitary conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance Badge */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Quality Assurance</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Star className="h-5 w-5" />
                <span>Medical Grade Materials</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>100% Waterproof Tested</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Durable Construction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Products</h2>
            <p className="text-gray-600">Explore our other medical linen solutions</p>
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

export default MackintoshRubberSheetPage;