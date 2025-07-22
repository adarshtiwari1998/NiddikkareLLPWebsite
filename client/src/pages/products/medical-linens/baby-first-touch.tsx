import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Baby, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Heart,
  Sparkles,
  Leaf
} from "lucide-react";

const BabyFirstTouchPage = () => {
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
      id: "patient-gown",
      name: "Patient Gown", 
      code: "NKR-602",
      description: "Patient comfort, easy access",
      href: "/products/medical-linens/patient-gown",
      image: "/assets/images/medical-linens/patient-gown-nkr-602.png"
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Neonatal Care
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Baby's First Touch
            </h1>
            <p className="text-xl mb-8 text-pink-100">
              NKR-101 | 100% organic cotton construction for newborn comfort and safety
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>100% Cotton</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Hypoallergenic</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Soft Touch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Image */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center p-8">
                <img 
                  src="/assets/images/medical-linens/receiving-blankets-swaddle-nkr-101.png" 
                  alt="Baby's First Touch - NKR-101"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Product Overview Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Product Overview</h2>
                  <p className="text-gray-600">Premium organic cotton for newborns</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                The NIDDIKKARE Baby's First Touch (NKR-101) receiving blankets are crafted from 100% organic cotton, 
                providing the softest and safest first contact for newborns. These premium swaddle blankets ensure 
                optimal comfort and breathability while maintaining the highest safety standards for neonatal care.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 text-pink-600 mr-2" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Ultra-soft organic cotton construction</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Hypoallergenic and skin-friendly</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Perfect for newborn sensitive skin</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Optimal temperature regulation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <Leaf className="h-5 w-5 text-green-600 mr-2" />
                    Quality Standards
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">100% certified organic cotton</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">Pre-washed and sanitized</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">Hospital-grade quality</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">Chemical-free processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Premium Features</h3>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl">
                  <div className="p-3 bg-pink-200 rounded-xl">
                    <Baby className="h-6 w-6 text-pink-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Gentle Touch Technology</h4>
                    <p className="text-gray-600">
                      Specially woven organic cotton fibers create an incredibly soft texture that's perfect 
                      for newborn's delicate skin, providing comfort without irritation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                  <div className="p-3 bg-green-200 rounded-xl">
                    <Shield className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Natural Protection</h4>
                    <p className="text-gray-600">
                      100% organic cotton construction provides natural antimicrobial properties while 
                      being completely free from harmful chemicals and synthetic materials.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                  <div className="p-3 bg-blue-200 rounded-xl">
                    <Sparkles className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Breathable Comfort</h4>
                    <p className="text-gray-600">
                      Advanced weaving technique ensures optimal air circulation, preventing overheating 
                      while maintaining the perfect temperature for newborn comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Product Code:</span>
                    <span className="text-gray-600 font-mono">NKR-101</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Material:</span>
                    <span className="text-gray-600">100% Organic Cotton</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Weight:</span>
                    <span className="text-gray-600">120-140 GSM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Weave:</span>
                    <span className="text-gray-600">Muslin Weave</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Size:</span>
                    <span className="text-gray-600">76 x 76 cm (30" x 30")</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Colors:</span>
                    <span className="text-gray-600">White, Pink, Blue</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Pack Size:</span>
                    <span className="text-gray-600">Pack of 6</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Care:</span>
                    <span className="text-gray-600">Machine Washable</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Applications & Use Cases</h3>
              <div className="grid gap-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Neonatal Intensive Care Units (NICU)</h4>
                  <p className="text-gray-600">
                    Essential for premature and critically ill newborns requiring the gentlest possible contact 
                    with medical textiles. Provides comfort while maintaining sterile conditions.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Maternity Wards</h4>
                  <p className="text-gray-600">
                    Perfect for newborn care in delivery rooms and maternity wards, providing immediate 
                    comfort and warmth for babies during their first moments of life.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Pediatric Care</h4>
                  <p className="text-gray-600">
                    Ideal for pediatric departments where young children and infants require soft, 
                    hypoallergenic textiles that won't irritate sensitive skin conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="bg-gradient-to-br from-pink-600 to-rose-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Quote</h3>
                <p className="mb-4 text-pink-100">
                  Contact our team for pricing and bulk orders
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-pink-600 hover:bg-gray-100">
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
                    <span className="text-sm">100% Organic Cotton</span>
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

export default BabyFirstTouchPage;