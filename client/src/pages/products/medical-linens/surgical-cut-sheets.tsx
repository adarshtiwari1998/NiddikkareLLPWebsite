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
  Layers,
  Target,
  Zap
} from "lucide-react";

const SurgicalCutSheetsPage = () => {
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
      id: "surgical-drapes",
      name: "Surgical Drapes/Towels", 
      code: "NKR-301",
      description: "Sterile barrier protection",
      href: "/products/medical-linens/surgical-drapes-towels",
      image: "/assets/images/medical-linens/surgical-drapes-towels-nkr-301.png"
    },
    {
      id: "patient-gown",
      name: "Patient Gown",
      code: "NKR-602",
      description: "Patient comfort, easy access",
      href: "/products/medical-linens/patient-gown",
      image: "/assets/images/medical-linens/patient-gown-nkr-602.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-600 to-gray-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Precision Draping
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Surgical Cut Sheets
            </h1>
            <p className="text-xl mb-8 text-slate-100">
              NKR-302 | Precision surgical draping for targeted procedures and sterile field management
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Precision cut</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Sterile field</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Targeted access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Layered Design Layout */}
        <div className="max-w-6xl mx-auto">
          
          {/* Product Layer 1 - Main Focus */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-[5rem] transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-slate-100 rounded-[5rem] transform -rotate-1"></div>
            <div className="relative bg-white rounded-[5rem] shadow-2xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-gray-100 rounded-[3rem] flex items-center justify-center p-8">
                    <img 
                      src="/assets/images/medical-linens/surgical-cut-sheets-nkr-302.png" 
                      alt="Surgical Cut Sheets - NKR-302"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-3">
                    <div className="p-4 bg-slate-100 rounded-2xl">
                      <Scissors className="h-8 w-8 text-slate-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">Precision Surgical Draping</h2>
                      <p className="text-gray-600">Targeted sterile field control</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    The NIDDIKKARE Surgical Cut Sheets (NKR-302) offer precise sterile field management for 
                    surgical procedures requiring targeted access. These specialized drapes provide controlled 
                    exposure while maintaining comprehensive sterile barrier protection.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-2xl">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Target className="h-5 w-5 text-slate-600 mr-2" />
                        Precision Features
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pre-cut fenestrations for targeted access</li>
                        <li>• Sterile barrier integrity maintained</li>
                        <li>• Multiple size configurations available</li>
                        <li>• Easy positioning and adhesive strips</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Layer 2 - Feature Cards */}
          <div className="grid lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-3xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="h-8 w-8 text-slate-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">Precision Cutting</h4>
              <p className="text-gray-600 text-sm text-center">
                Laser-cut fenestrations provide exact surgical site access while maintaining sterile field integrity.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">Barrier Protection</h4>
              <p className="text-gray-600 text-sm text-center">
                Advanced material technology ensures complete sterile barrier around the fenestration area.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-slate-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">Multi-Layer Design</h4>
              <p className="text-gray-600 text-sm text-center">
                Reinforced construction with absorbent layers for superior fluid management during procedures.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">Quick Setup</h4>
              <p className="text-gray-600 text-sm text-center">
                Adhesive positioning strips enable rapid, secure placement for efficient OR turnover.
              </p>
            </div>
          </div>

          {/* Product Layer 3 - Split Information */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-xl p-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Technical Excellence</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Fenestration Precision</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Computer-controlled cutting ensures precise fenestration dimensions for exact surgical site access. 
                      Multiple fenestration sizes accommodate various procedure requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Adhesive Integration</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Medical-grade adhesive strips provide secure attachment to patient skin, creating a sealed 
                      barrier that prevents fluid migration and maintains sterile field integrity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Fluid Management</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Integrated absorbent zones around fenestration capture and contain fluids, maintaining 
                      a clean surgical field throughout the procedure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gradient-to-br from-slate-600 to-gray-600 text-white h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Quote</h3>
                  <p className="mb-6 text-slate-100">
                    Contact our team for pricing and bulk orders
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-white text-slate-600 hover:bg-gray-100">
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
                    <h4 className="font-semibold mb-2">Custom Sizing</h4>
                    <p className="text-sm text-slate-100">Fenestrations available in multiple dimensions</p>
                  </div>
                  
                  <div className="mt-4 bg-white/20 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Bulk Orders</h4>
                    <p className="text-sm text-slate-100">Volume pricing for hospitals and surgical centers</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Layer 4 - Specifications Matrix */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-[4rem] p-12 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Product Specifications Matrix</h3>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-8 flex items-center">
                  <Scissors className="h-6 w-6 text-slate-600 mr-3" />
                  Fenestration Options
                </h4>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="w-8 h-8 bg-slate-600 rounded-full mx-auto mb-2"></div>
                      <h5 className="font-medium text-gray-800 text-sm">Small</h5>
                      <p className="text-xs text-gray-600">5cm diameter</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gray-600 rounded-full mx-auto mb-2"></div>
                      <h5 className="font-medium text-gray-800 text-sm">Medium</h5>
                      <p className="text-xs text-gray-600">8cm diameter</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 bg-slate-600 rounded-full mx-auto mb-2"></div>
                      <h5 className="font-medium text-gray-800 text-sm">Large</h5>
                      <p className="text-xs text-gray-600">12cm diameter</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Shape Options:</span>
                      <span className="text-gray-600">Round, Oval, Linear</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Custom Cuts:</span>
                      <span className="text-gray-600">Available on request</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-700">Adhesive Width:</span>
                      <span className="text-gray-600">2-4cm border</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-8 flex items-center">
                  <Layers className="h-6 w-6 text-gray-600 mr-3" />
                  Material Specifications
                </h4>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-800 mb-2">Base Material</h5>
                      <p className="text-sm text-gray-600">SMS Non-woven, 45-55 GSM</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-800 mb-2">Adhesive Layer</h5>
                      <p className="text-sm text-gray-600">Medical-grade acrylic, hypoallergenic</p>
                    </div>
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-800 mb-2">Absorbent Zone</h5>
                      <p className="text-sm text-gray-600">Super-absorbent polymer core</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Code:</span>
                      <span className="text-slate-600 font-mono">NKR-302</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Colors:</span>
                      <span className="text-gray-600">Blue, Green</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-700">Packaging:</span>
                      <span className="text-gray-600">Sterile individual pouches</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Layer 5 - Applications Showcase */}
          <div className="space-y-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center">Surgical Applications</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-3 bg-gradient-to-r from-slate-500 to-gray-500"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🫀</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cardiac Procedures</h4>
                  <p className="text-gray-600 text-sm">
                    Precise chest access for cardiac surgery and thoracic procedures.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-3 bg-gradient-to-r from-gray-500 to-slate-500"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🦴</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Orthopedic Surgery</h4>
                  <p className="text-gray-600 text-sm">
                    Targeted joint and bone access for orthopedic interventions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-3 bg-gradient-to-r from-slate-500 to-gray-500"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ophthalmic Surgery</h4>
                  <p className="text-gray-600 text-sm">
                    Small fenestrations for precise eye surgery access.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-3 bg-gradient-to-r from-gray-500 to-slate-500"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🩹</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Minor Procedures</h4>
                  <p className="text-gray-600 text-sm">
                    Outpatient procedures requiring sterile field control.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Banner */}
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Precision Manufacturing Standards</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Star className="h-5 w-5" />
                <span>Laser-Cut Precision</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Sterile Processing Ready</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Medical Grade Materials</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Products</h2>
            <p className="text-gray-600">Explore our other surgical draping solutions</p>
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

export default SurgicalCutSheetsPage;