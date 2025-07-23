import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bed, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Home,
  Palette,
  Sparkles
} from "lucide-react";

const BedsheetPillowCoversPage = () => {
  const relatedProducts = [
    {
      id: "mackintosh",
      name: "Mackintosh Rubber Sheet",
      code: "NKR-701/702",
      description: "Waterproof protection",
      href: "/products/medical-linens/mackintosh-rubber-sheet",
      image: "/assets/images/medical-linens/mackintosh-rubber-sheet-nkr-701-702.png"
    },
    {
      id: "maternity-gown",
      name: "Maternity Gown", 
      code: "NKR-601",
      description: "Comfortable fit, breathable",
      href: "/products/medical-linens/maternity-gown",
      image: "/assets/images/medical-linens/maternity-gown-nkr-601.png"
    },
    {
      id: "baby-first-touch",
      name: "Baby's First Touch",
      code: "NKR-101",
      description: "100% cotton construction",
      href: "/products/medical-linens/baby-first-touch",
      image: "/assets/images/medical-linens/receiving-blankets-swaddle-nkr-101.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Complete Bedding
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Bedsheet with Pillow Covers
            </h1>
            <p className="text-xl mb-8 text-green-100">
              NKR-202 | Complete bedding solution for patient comfort and hospital hygiene
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Complete set</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Soft cotton</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Easy care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Mosaic Layout - Product at Center */}
        <div className="max-w-6xl mx-auto">
          {/* Main Product Showcase */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <div className="bg-white rounded-[4rem] shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[3/2] w-96 bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl flex items-center justify-center">
                  <img 
                    src="/assets/images/medical-linens/bedsheet-pillow-covers-nkr-202.png" 
                    alt="Bedsheet with Pillow Covers - NKR-202"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <Bed className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Grid Layout with Different Sized Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {/* Large Feature Card */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-2xl">
                    <Home className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Complete Bedding Solution</h2>
                    <p className="text-gray-600">Everything you need for patient comfort</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  The NIDDIKKARE Bedsheet with Pillow Covers (NKR-202) provides a complete bedding solution for 
                  hospitals and healthcare facilities. This comprehensive set includes fitted sheets and matching 
                  pillow covers, ensuring patient comfort while maintaining the highest hygiene standards.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-2xl">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      What's Included
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 1 Fitted Bedsheet</li>
                      <li>• 2 Pillow Covers</li>
                      <li>• 1 Flat Sheet (optional)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-2xl">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Shield className="h-5 w-5 text-blue-600 mr-2" />
                      Quality Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 100% Cotton Construction</li>
                      <li>• Pre-shrunk Fabric</li>
                      <li>• Color-fast Dyes</li>
                      <li>• Hospital-grade Quality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-green-600 to-teal-600 text-white h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Get Quote</h3>
                  <p className="mb-4 text-green-100">
                    Contact our team for pricing and bulk orders
                  </p>
                  <div className="space-y-3 mb-6">
                    <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
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
                  
                  <div className="bg-white/20 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Bulk Pricing Available</h4>
                    <p className="text-sm text-green-100">Special rates for hospitals and healthcare facilities</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Specifications Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-6 h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Palette className="h-6 w-6 text-teal-600 mr-2" />
                  Quick Specs
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Code:</span>
                    <span className="text-teal-600 font-mono">NKR-202</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Material:</span>
                    <span className="text-gray-600">100% Cotton</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Thread Count:</span>
                    <span className="text-gray-600">200-250 TC</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700">Colors:</span>
                    <span className="text-gray-600">White, Blue, Green</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Features Strip */}
          <div className="bg-white rounded-[3rem] shadow-xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Premium Features</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bed className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Perfect Fit</h4>
                <p className="text-sm text-gray-600">Tailored to hospital bed dimensions for secure fitting</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Hygienic</h4>
                <p className="text-sm text-gray-600">Easy to clean and maintain hospital hygiene standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Comfort</h4>
                <p className="text-sm text-gray-600">Soft cotton fabric ensures patient comfort during rest</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Durable</h4>
                <p className="text-sm text-gray-600">Long-lasting quality withstands frequent washing</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications in Cards */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-[3rem] p-12 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Complete Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Bedsheet Details</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><span className="font-medium">Size:</span> Single, Double, King</li>
                  <li><span className="font-medium">Depth:</span> 8-10 inch pocket</li>
                  <li><span className="font-medium">Edges:</span> Elastic fitted corners</li>
                  <li><span className="font-medium">Seams:</span> Reinforced stitching</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Pillow Cover Details</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><span className="font-medium">Size:</span> Standard (20"x30")</li>
                  <li><span className="font-medium">Closure:</span> Envelope style</li>
                  <li><span className="font-medium">Quantity:</span> 2 covers per set</li>
                  <li><span className="font-medium">Design:</span> Plain with hem</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Care Instructions</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><span className="font-medium">Wash:</span> Machine wash warm</li>
                  <li><span className="font-medium">Bleach:</span> Hospital-grade safe</li>
                  <li><span className="font-medium">Dry:</span> Tumble dry medium</li>
                  <li><span className="font-medium">Iron:</span> Medium heat if needed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Applications with Creative Layout */}
          <div className="space-y-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center">Applications & Use Cases</h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-transform">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">General Hospital Wards</h4>
                      <p className="text-gray-600">
                        Perfect for patient rooms, ensuring comfort and cleanliness across all hospital departments.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-transform">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-teal-100 rounded-xl">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Long-term Care Facilities</h4>
                      <p className="text-gray-600">
                        Ideal for nursing homes and extended care facilities where comfort is paramount.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-transform">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <span className="text-2xl">🩺</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Rehabilitation Centers</h4>
                      <p className="text-gray-600">
                        Supporting patient recovery with comfortable, hygienic bedding solutions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-transform">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Outpatient Facilities</h4>
                      <p className="text-gray-600">
                        Excellent for day-care centers and outpatient recovery areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance Banner */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Quality Assurance</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Star className="h-5 w-5" />
                <span>Hospital Grade Cotton</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Pre-shrunk & Color-fast</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Hygienic Standards</span>
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

export default BedsheetPillowCoversPage;