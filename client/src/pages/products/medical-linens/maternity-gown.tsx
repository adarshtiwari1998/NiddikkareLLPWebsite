import React from "react";
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
  Baby,
  Flower,
  Sparkles
} from "lucide-react";

const MaternityGownPage = () => {
  const relatedProducts = [
    {
      id: "baby-first-touch",
      name: "Baby's First Touch",
      code: "NKR-101",
      description: "100% cotton construction",
      href: "/products/medical-linens/baby-first-touch",
      image: "/assets/images/medical-linens/receiving-blankets-swaddle-nkr-101.png"
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
      id: "bedsheet-pillow",
      name: "Bedsheet with Pillow Covers",
      code: "NKR-202",
      description: "Complete bedding solution",
      href: "/products/medical-linens/bedsheet-pillow-covers",
      image: "/assets/images/medical-linens/bedsheet-pillow-covers-nkr-202.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
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
            <p className="text-xl mb-8 text-purple-100">
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
        {/* Two Column Layout with Floating Cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Product Image & Overview */}
          <div className="space-y-8">
            {/* Floating Product Image */}
            <div className="relative">
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden transform rotate-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-8">
                  <img 
                    src="/assets/images/medical-linens/maternity-gown-nkr-601.png" 
                    alt="Maternity Gown - NKR-601"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white p-3 rounded-full">
                <Heart className="h-6 w-6" />
              </div>
            </div>

            {/* Overview Card */}
            <div className="bg-white rounded-[2rem] shadow-xl p-8 transform -rotate-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <Flower className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Comfort & Care</h2>
                  <p className="text-gray-600">For expecting mothers</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                The NIDDIKKARE Maternity Gown (NKR-601) is specifically designed to provide maximum comfort and dignity for expecting 
                mothers during hospital stays and delivery. Crafted from premium soft cotton blend fabrics, this gown ensures 
                breathability and comfort during extended wear.
              </p>
            </div>
          </div>

          {/* Right Column - Features & Details */}
          <div className="space-y-8">
            {/* Contact Card - Floating at top */}
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white transform rotate-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Quote</h3>
                <p className="mb-4 text-purple-100">
                  Contact our team for pricing and bulk orders
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
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

            {/* Key Features */}
            <div className="bg-white rounded-[2rem] shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Sparkles className="h-6 w-6 text-purple-600 mr-3" />
                Key Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-800">Enhanced patient comfort</span>
                    <p className="text-sm text-gray-600 mt-1">Soft fabric reduces skin irritation during long hospital stays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-800">Easy access for medical procedures</span>
                    <p className="text-sm text-gray-600 mt-1">Strategic opening design for quick medical examinations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-800">Maintains patient dignity</span>
                    <p className="text-sm text-gray-600 mt-1">Thoughtful design preserves modesty and comfort</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <Card className="transform -rotate-1">
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

        {/* Full Width Sections */}
        <div className="mt-16 space-y-12">
          {/* Features Section with Alternating Layout */}
          <div className="bg-white rounded-[3rem] shadow-xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Premium Features</h3>
            
            <div className="space-y-12">
              {/* Feature 1 - Left aligned */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-purple-200 rounded-xl">
                        <Heart className="h-6 w-6 text-purple-700" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">Comfort Design</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Ergonomically designed with soft, breathable cotton blend fabric that provides all-day comfort 
                      for expecting mothers during their hospital stay and delivery process.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
                    <Heart className="h-16 w-16 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Feature 2 - Right aligned */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-blue-200 rounded-xl">
                        <Shield className="h-6 w-6 text-blue-700" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">Easy Access</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Strategic opening and tie design allows healthcare professionals quick and convenient access 
                      for medical examinations while maintaining patient dignity and modesty.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                    <Shield className="h-16 w-16 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications in Grid Layout */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[3rem] p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Product Code</h4>
                <p className="text-purple-600 font-mono text-lg">NKR-601</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Material</h4>
                <p className="text-gray-600">Cotton Poly Blend</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Weight</h4>
                <p className="text-gray-600">160-180 GSM</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Colors</h4>
                <p className="text-gray-600">Blue, Pink, White</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Sizes</h4>
                <p className="text-gray-600">S, M, L, XL</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Opening</h4>
                <p className="text-gray-600">Front Opening</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Closure</h4>
                <p className="text-gray-600">Tie Back</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Care</h4>
                <p className="text-gray-600">Machine Washable</p>
              </div>
            </div>
          </div>

          {/* Applications with Creative Cards */}
          <div className="bg-white rounded-[3rem] shadow-xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Applications & Use Cases</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 transform rotate-1">
                  <div className="absolute -top-3 -right-3 bg-purple-500 text-white p-2 rounded-full">
                    <Baby className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Maternity Wards</h4>
                  <p className="text-gray-600">
                    Essential for labor and delivery rooms, providing comfort and easy access during the birthing process.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform -rotate-1">
                  <div className="absolute -top-3 -right-3 bg-blue-500 text-white p-2 rounded-full">
                    <Heart className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Pre/Post Natal Care</h4>
                  <p className="text-gray-600">
                    Ideal for prenatal checkups and postnatal recovery, ensuring patient comfort throughout the care journey.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 transform rotate-1">
                  <div className="absolute -top-3 -right-3 bg-pink-500 text-white p-2 rounded-full">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Gynecology Units</h4>
                  <p className="text-gray-600">
                    Perfect for gynecological examinations and procedures requiring patient comfort and easy access.
                  </p>
                </div>
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

export default MaternityGownPage;