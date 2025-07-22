import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scissors, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Activity,
  Zap,
  Lock
} from "lucide-react";

const SurgicalDrapesTowelsPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Surgical Protection
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Surgical Drapes & Towels
            </h1>
            <p className="text-xl mb-8 text-red-100">
              NKR-301 | Sterile barrier protection for surgical procedures and patient safety
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Sterile barrier</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Absorbent</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Lint-free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Side - Product Focus */}
          <div className="space-y-8">
            <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center p-8">
                <img 
                  src="/assets/images/medical-linens/surgical-drapes-towels-nkr-301.png" 
                  alt="Surgical Drapes & Towels - NKR-301"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-4 bg-red-100 rounded-2xl">
                  <Scissors className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Surgical Excellence</h2>
                  <p className="text-gray-600">Essential OR protection</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                The NIDDIKKARE Surgical Drapes & Towels (NKR-301) provide essential sterile barrier protection 
                in operating rooms and surgical environments. These premium surgical linens ensure optimal 
                patient safety while maintaining the sterile field during critical procedures.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
                  <Shield className="h-6 w-6 text-red-600" />
                  <div>
                    <span className="font-semibold text-gray-800">Sterile Barrier Protection</span>
                    <p className="text-sm text-gray-600">Maintains sterile field integrity</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
                  <Activity className="h-6 w-6 text-orange-600" />
                  <div>
                    <span className="font-semibold text-gray-800">High Absorbency</span>
                    <p className="text-sm text-gray-600">Superior fluid management</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl">
                  <Zap className="h-6 w-6 text-yellow-600" />
                  <div>
                    <span className="font-semibold text-gray-800">Lint-Free Design</span>
                    <p className="text-sm text-gray-600">Prevents contamination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Information Stack */}
          <div className="space-y-8">
            {/* Contact Card */}
            <Card className="bg-gradient-to-br from-red-600 to-orange-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get Quote</h3>
                <p className="mb-6 text-red-100">
                  Contact our team for pricing and bulk orders
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
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

            {/* Key Features */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Premium Features</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Sterile Protection</h4>
                  <p className="text-gray-600">
                    Advanced sterilization-ready materials that maintain barrier integrity throughout surgical procedures.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Superior Absorbency</h4>
                  <p className="text-gray-600">
                    High-capacity absorption prevents fluid accumulation and maintains a clean surgical field.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Lint-Free Construction</h4>
                  <p className="text-gray-600">
                    Specialized weaving prevents fiber shedding, eliminating contamination risks during procedures.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Badges */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Quality Assurance</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Star className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Sterile Grade</span>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Barrier Tested</span>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <Activity className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">High Absorbent</span>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Lint-Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Sections */}
        <div className="space-y-16">
          {/* Specifications in Surgical Theme */}
          <div className="bg-white rounded-[4rem] shadow-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Technical Specifications</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-lg">NKR</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Product Code</h4>
                <p className="text-red-600 font-mono text-lg">NKR-301</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Material</h4>
                <p className="text-gray-600">Non-woven SMS</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Weight</h4>
                <p className="text-gray-600">35-50 GSM</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Absorbency</h4>
                <p className="text-gray-600">High Capacity</p>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Drape Sizes</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 90 x 120 cm (Standard)</li>
                  <li>• 120 x 150 cm (Large)</li>
                  <li>• 150 x 200 cm (Extra Large)</li>
                  <li>• Custom sizes available</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Towel Specifications</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 30 x 40 cm (Hand Towel)</li>
                  <li>• 40 x 60 cm (Surgical Towel)</li>
                  <li>• Pack of 10-20 pieces</li>
                  <li>• Sterile individually packed</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Colors & Packaging</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Blue (Standard surgical)</li>
                  <li>• Green (Alternative)</li>
                  <li>• Sterile pouches</li>
                  <li>• Bulk packaging available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Applications with OR Theme */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 text-center">Applications & Use Cases</h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <Scissors className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Operating Theaters</h4>
                  <p className="text-gray-600">
                    Essential for maintaining sterile fields during surgical procedures, providing barrier protection 
                    and fluid management in operating rooms.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <Activity className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Emergency Procedures</h4>
                  <p className="text-gray-600">
                    Critical for emergency surgical interventions where rapid deployment of sterile barriers 
                    is essential for patient safety.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-yellow-500 to-green-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Outpatient Surgery</h4>
                  <p className="text-gray-600">
                    Perfect for minor surgical procedures and outpatient clinics requiring sterile protection 
                    without full OR setup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Surgical Standards Banner */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Surgical Standards Compliance</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Star className="h-5 w-5" />
                <span>Sterile Processing Compatible</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Barrier Level 3 Protection</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Lint-Free Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Products</h2>
            <p className="text-gray-600">Explore our other surgical linen solutions</p>
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

export default SurgicalDrapesTowelsPage;