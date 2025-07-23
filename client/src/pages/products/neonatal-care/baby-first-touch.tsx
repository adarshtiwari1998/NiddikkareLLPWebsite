import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Baby, Droplet, Wind, Moon,  Zap, Feather, 
  CheckCircle, 
  Star, 
  ShoppingCart, 
  Phone, 
  Mail, 
  ArrowRight,
  Sparkles,
  Leaf } from "lucide-react";

// Baby receiving blanket image
import receivingBlanketsImg from "@/assets/medical-linens/receiving-blankets-swaddle-nkr-101.png";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-green-100/30 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-yellow-100/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-pink-100/30 rounded-full"></div>
      </div>

      <div className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* Hero Section */}
          <section className="text-center mb-20">
            <div className="relative inline-block">
              {/* Kouver Logo Symbol */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  {/* Circular brush stroke */}
                  <svg width="80" height="80" viewBox="0 0 80 80" className="absolute inset-0">
                    <path
                      d="M10 40 Q10 10 40 10 Q70 10 70 40 Q70 70 40 70 Q10 70 10 40"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="opacity-80"
                    />
                    <path
                      d="M15 35 Q15 15 40 15 Q65 15 65 40 Q65 65 40 65 Q15 65 15 40"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="opacity-60"
                    />
                  </svg>
                  {/* Hands with text */}
                  <div className="relative z-10 flex flex-col items-center">
                    <svg width="32" height="20" viewBox="0 0 32 20" className="text-green-600">
                      <path
                        d="M2 8 C2 6 4 4 8 4 C10 4 12 5 14 6 C16 5 18 4 20 4 C24 4 26 6 26 8 C26 10 24 12 20 12 L8 12 C4 12 2 10 2 8 Z"
                        fill="currentColor"
                        opacity="0.7"
                      />
                      <path
                        d="M6 14 C6 12 8 10 12 10 C14 10 16 11 18 12 C20 11 22 10 24 10 C28 10 30 12 30 14 C30 16 28 18 24 18 L12 18 C8 18 6 16 6 14 Z"
                        fill="currentColor"
                        opacity="0.5"
                      />
                    </svg>
                    <div className="text-xs font-semibold text-green-700 mt-1">Kouver</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-8 shadow-lg border border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                  Baby's First Touch
                </h1>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  Providing world's safest receiving blankets for newborns
                </p>
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Content */}
              <div className="space-y-8">
                <div className="relative">
                  {/* Decorative brush stroke */}
                  <div className="absolute -top-6 -left-4 w-64 h-8 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full transform -rotate-2 opacity-60"></div>
                  <h2 className="relative text-3xl font-bold text-gray-800 mb-6" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                    Baby's first touch
                  </h2>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <span className="font-bold text-primary">NIDDIKKARE</span> provides world's safest receiving blankets to swaddle 
                    your new born. These swaddles are touch free and <span className="font-semibold">allergen-free</span>, giving 
                    your child maximum protection from any infections or any allergies. These 
                    blankets are of unique size and shape and made up of high quality cottons 
                    which provide the newborns a womb like environment.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  {[
                    { icon: <Droplet className="h-5 w-5" />, text: "Breathable, 100% cotton", color: "bg-red-100 text-red-600 border-red-200" },
                    { icon: <Shield className="h-5 w-5" />, text: "Germ free", color: "bg-green-100 text-green-600 border-green-200" },
                    { icon: <Heart className="h-5 w-5" />, text: "Mimics the womb", color: "bg-purple-100 text-purple-600 border-purple-200" },
                    { icon: <Zap className="h-5 w-5" />, text: "Reduces startle reflex", color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
                    { icon: <Baby className="h-5 w-5" />, text: "Soothes colicky babies", color: "bg-gray-100 text-gray-600 border-gray-200" },
                    { icon: <Moon className="h-5 w-5" />, text: "Improves sleep", color: "bg-orange-100 text-orange-600 border-orange-200" },
                    { icon: <Sparkles className="h-5 w-5" />, text: "Hygiene & Comfort", color: "bg-blue-100 text-blue-600 border-blue-200" }
                  ].map((benefit, index) => (
                    <div key={index} className={`flex items-center p-4 rounded-2xl border-2 ${benefit.color} transform hover:scale-105 transition-all duration-300`}>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/80 mr-4">
                        {benefit.icon}
                      </div>
                      <span className="font-semibold text-lg">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Baby Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-full transform rotate-12 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  {/* Decorative stars */}
                  <div className="absolute -top-4 -left-4 text-yellow-400">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-6 text-yellow-300">
                    <Star className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 text-yellow-400">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <div className="absolute -bottom-2 -left-6 text-yellow-300">
                    <Star className="h-6 w-6" />
                  </div>

                  <div className="relative overflow-hidden rounded-full w-80 h-80 mx-auto border-4 border-blue-200">
                    <img 
                      src={receivingBlanketsImg}
                      alt="Baby's First Touch - Receiving Blankets by NIDDIKKARE"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 border border-blue-200">
                      <h3 className="font-bold text-gray-800 text-lg">Receiving Blankets/</h3>
                      <h4 className="font-semibold text-gray-700">Swaddle</h4>
                      <p className="text-sm text-gray-600 mt-1">NKR-101</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Technical Specifications */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Product Specifications</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 border-blue-200 bg-blue-50/50">
                  <CardHeader className="text-center pb-4">
                    <Feather className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg text-blue-800">Material</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-blue-700">100% Pure Cotton</p>
                    <p className="text-sm text-blue-600 mt-1">Soft & breathable fabric</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200 bg-green-50/50">
                  <CardHeader className="text-center pb-4">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <CardTitle className="text-lg text-green-800">Safety</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-green-700">Allergen-Free</p>
                    <p className="text-sm text-green-600 mt-1">Touch-free & germ-free</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200 bg-purple-50/50">
                  <CardHeader className="text-center pb-4">
                    <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <CardTitle className="text-lg text-purple-800">Comfort</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-purple-700">Womb-like Feel</p>
                    <p className="text-sm text-purple-600 mt-1">Unique size & shape</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

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
              {/* Bottom Banner */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 p-12 text-white">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full"></div>

              <div className="relative text-center">
                <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  Cuddle Up With Hygiene
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                  Experience the perfect blend of comfort, safety, and hygiene with NIDDIKKARE's premium baby receiving blankets
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
                    <Heart className="w-5 h-5 mr-2" />
                    Contact Our Team
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-purple-600 hover:bg-white hover:text-purple-600 font-semibold px-8">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>
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
    </div>
  );
}


export default BabyFirstTouchPage;