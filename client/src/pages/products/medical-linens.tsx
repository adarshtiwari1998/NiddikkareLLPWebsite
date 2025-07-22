import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, Shield, Droplets, CheckCircle, Star, Heart, Stethoscope, ArrowRight, Users } from "lucide-react";

// Import medical linen images
import maternityGownImg from "@/assets/medical-linens/maternity-gown-nkr-601.png";
import mackintoshSheetImg from "@/assets/medical-linens/mackintosh-rubber-sheet-nkr-701-702.png";
import bedsheetCoversImg from "@/assets/medical-linens/bedsheet-pillow-covers-nkr-202.png";
import surgicalDrapesImg from "@/assets/medical-linens/surgical-drapes-towels-nkr-301.png";
import scrubSuitImg from "@/assets/medical-linens/scrub-suit-nkr-501.png";
import patientGownImg from "@/assets/medical-linens/patient-gown-nkr-602.png";
import surgicalOTGownImg from "@/assets/medical-linens/surgical-ot-gown-nkr-401-402.png";
import surgicalCutSheetsImg from "@/assets/medical-linens/surgical-cut-sheets-nkr-302.png";
import receivingBlanketsImg from "@/assets/medical-linens/receiving-blankets-swaddle-nkr-101.png";

export default function MedicalLinensProducts() {
  const productPortfolio = [
    {
      name: "Maternity Gown",
      code: "NKR-601",
      image: maternityGownImg,
      category: "Patient Care",
      features: ["Comfortable fit", "Easy access", "Soft fabric", "Machine washable"]
    },
    {
      name: "Mackintosh Rubber Sheet",
      code: "NKR-701/702",
      subtitle: "With & W/o Cloth",
      image: mackintoshSheetImg,
      category: "Protective",
      features: ["Waterproof", "Durable", "Easy to clean", "Infection control"]
    },
    {
      name: "Bedsheet with Pillow Covers",
      code: "NKR-202",
      image: bedsheetCoversImg,
      category: "Bedding",
      features: ["Soft cotton", "Wrinkle resistant", "Easy care", "Comfort focused"]
    },
    {
      name: "Surgical Drapes/Towels",
      code: "NKR-301",
      subtitle: "Plain",
      image: surgicalDrapesImg,
      category: "Surgical",
      features: ["Sterile barrier", "Fluid resistant", "Single use", "High quality"]
    },
    {
      name: "Scrub Suit",
      code: "NKR-501",
      image: scrubSuitImg,
      category: "Surgical",
      features: ["Professional fit", "Breathable", "Comfortable", "Easy movement"]
    },
    {
      name: "Patient Gown",
      code: "NKR-602",
      image: patientGownImg,
      category: "Patient Care",
      features: ["Patient comfort", "Easy access", "Tie closure", "Soft material"]
    },
    {
      name: "Surgical/OT Gown",
      code: "NKR-401/402",
      subtitle: "with/Without overlap",
      image: surgicalOTGownImg,
      category: "Surgical",
      features: ["Sterile protection", "Fluid resistant", "Reinforced", "Professional"]
    },
    {
      name: "Surgical Cut Sheets",
      code: "NKR-302",
      subtitle: "with holes",
      image: surgicalCutSheetsImg,
      category: "Surgical",
      features: ["Precise openings", "Sterile field", "Single use", "Quality assured"]
    }
  ];

  const featuredProductFeatures = [
    { text: "Breathable, 100% cotton", color: "bg-red-50 text-red-700" },
    { text: "Germ free", color: "bg-green-50 text-green-700" },
    { text: "Mimics the womb", color: "bg-purple-50 text-purple-700" },
    { text: "Reduces startle reflex", color: "bg-yellow-50 text-yellow-700" },
    { text: "Soothes colicky babies", color: "bg-green-50 text-green-700" },
    { text: "Improves sleep", color: "bg-orange-50 text-orange-700" },
    { text: "Hygiene & Comfort", color: "bg-blue-50 text-blue-700" }
  ];

  const categories = [
    { name: "All", count: productPortfolio.length },
    { name: "Surgical", count: productPortfolio.filter(p => p.category === "Surgical").length },
    { name: "Patient Care", count: productPortfolio.filter(p => p.category === "Patient Care").length },
    { name: "Bedding", count: productPortfolio.filter(p => p.category === "Bedding").length },
    { name: "Protective", count: productPortfolio.filter(p => p.category === "Protective").length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Stethoscope className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Medical Linens Collection</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Exceptional hospital linen solutions that elevate patient care through superior quality, 
              comfort, and infection control design
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">Premium</div>
                <div className="text-sm text-blue-100">Quality Products</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-100">Cotton Materials</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">Sterile</div>
                <div className="text-sm text-blue-100">Certified Safe</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">CSSD</div>
                <div className="text-sm text-blue-100">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section - Different Layout */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg py-2 px-6" variant="secondary">
              <Star className="w-4 h-4 mr-2" />
              Featured Product
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Receiving Blankets/Swaddle NKR-101
            </h2>
            <p className="text-xl text-gray-600">Specially designed for newborn care and comfort</p>
          </div>

          {/* Interactive Feature Cards Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Product Image - Center */}
            <div className="lg:order-2">
              <Card className="overflow-hidden shadow-2xl border-0">
                <div className="aspect-square relative">
                  <img 
                    src={receivingBlanketsImg} 
                    alt="Receiving Blankets/Swaddle NKR-101"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                      <h3 className="font-bold text-lg text-gray-800">Receiving Blankets/Swaddle</h3>
                      <p className="text-blue-600 font-semibold">NKR-101</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Features Left Side */}
            <div className="lg:order-1 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
              {featuredProductFeatures.slice(0, 4).map((feature, index) => (
                <Card key={index} className={`p-4 border-0 ${feature.color} hover:scale-105 transition-transform`}>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">{feature.text}</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Features Right Side */}
            <div className="lg:order-3 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Health Features</h3>
              {featuredProductFeatures.slice(4).map((feature, index) => (
                <Card key={index} className={`p-4 border-0 ${feature.color} hover:scale-105 transition-transform`}>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">{feature.text}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio Section - Tab-based Layout */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              We deliver exceptional hospital linen solutions that elevate patient care. Our extensive
              portfolio features premium products, including soft bed sheets with pillow covers, surgical
              draw sheets, surgical gowns, rubber sheets, and receiving blankets. Each item is carefully
              designed to prioritize comfort, hygiene, and quality.
            </p>
            
            {/* CSSD Note */}
            <Card className="p-6 bg-blue-50 border-blue-200 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm text-blue-800 font-medium">
                    <strong>Note:</strong> We strictly follow GUIDELINES FOR CENTRAL STERILE SUPPLY DEPARTMENT (CSSD), MHFW (GoI), for the
                    use of linen in hospital. Our efforts for sterilized hospital linen is one step towards the goal of CSSD for Cuddle Up With Hygiene reducing the rate of Hospital Acquired Infection.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-5 w-full max-w-2xl h-12">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.name} 
                    value={category.name}
                    className="text-sm font-semibold"
                  >
                    {category.name} ({category.count})
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {productPortfolio
                    .filter(product => category.name === "All" || product.category === category.name)
                    .map((product, index) => (
                      <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                        <div className="aspect-square overflow-hidden relative">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">
                            {product.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                          <div className="text-blue-600 font-semibold mb-3">
                            <p>{product.code}</p>
                            {product.subtitle && (
                              <p className="text-sm text-gray-600">{product.subtitle}</p>
                            )}
                          </div>
                          
                          {/* Features List */}
                          <div className="space-y-2 mb-4">
                            {product.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          
                          <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Product Categories & Collections Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 text-lg py-3 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Product Categories & Collections
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <strong>NiDDikKare</strong> manufactures a wide range of medical linen products and drape kits using 
              <strong> woven, non-woven and blended fabric.</strong>
            </p>
          </div>

          {/* Interactive Stacked Cards Layout */}
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Woven Medical Linens - Left Aligned */}
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-3"></div>
                  <Card className="relative bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
                    <CardHeader className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100">
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Bed className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-blue-800">Woven Medical Linens</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </div>
              
              <div className="lg:col-span-3 lg:order-2">
                <Card className="bg-white shadow-lg border-blue-200 border-2 rounded-xl">
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-700 mb-6 font-medium leading-relaxed">
                      are made from <strong>100% cotton</strong>. Cotton linens benefits include high absorbency, 
                      ease of sterilization, and softness, making it ideal for surgical drapes, gowns, and bed sheets.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="font-semibold text-gray-800">100% Cotton construction</span>
                        </div>
                        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="font-semibold text-gray-800">High thread count for softness</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="font-semibold text-gray-800">Reinforced edges for durability</span>
                        </div>
                        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="font-semibold text-gray-800">Machine washable up to 160°C</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Non-woven Medical Linens - Right Aligned */}
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 lg:order-1">
                <Card className="bg-white shadow-lg border-green-200 border-2 rounded-xl">
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-700 mb-6 font-medium leading-relaxed">
                      are made from <strong>polypropylene or polyester</strong>, they offer superior barrier protection against bacteria and viruses, 
                      minimizing infection risk.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          <span className="font-semibold text-gray-800">Single-use infection prevention</span>
                        </div>
                        <div className="flex items-center p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          <span className="font-semibold text-gray-800">Fluid-resistant barriers</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          <span className="font-semibold text-gray-800">Lightweight and breathable</span>
                        </div>
                        <div className="flex items-center p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          <span className="font-semibold text-gray-800">Environmentally conscious disposal</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-green-800 font-medium">
                        Their single-use design ensures simplified sterilization and reduced cross-contamination. Additionally, 
                        many non-woven materials are also lightweight and breathable, enhancing comfort for prolonged use.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl transform -rotate-3"></div>
                  <Card className="relative bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
                    <CardHeader className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Shield className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-green-800">Non-woven Medical Linens</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>

            {/* Blended Medical Linens - Center */}
            <div className="flex justify-center">
              <div className="max-w-4xl w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform rotate-1"></div>
                  <Card className="relative bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
                    <CardHeader className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Droplets className="h-12 w-12 text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Blended Medical Linens
                      </CardTitle>
                      <p className="text-lg text-gray-700 mt-4 font-medium">
                        are prepared with both woven and non-woven fabrics or materials to combine their properties.
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <span className="font-semibold text-gray-800">Cotton-polyester blends</span>
                          </div>
                          <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <span className="font-semibold text-gray-800">Enhanced strength and durability</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <span className="font-semibold text-gray-800">Improved moisture management</span>
                          </div>
                          <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <span className="font-semibold text-gray-800">Reduced shrinkage and wrinkles</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border border-purple-200">
                        <p className="text-center text-gray-800 font-medium leading-relaxed">
                          Blending enhances characteristics like lightweight, durability, comfort, and functionality, 
                          allowing for tailored performance in various applications as medical linens.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Elevate Your Healthcare Standards</h2>
            <p className="text-xl mb-8 text-blue-100">
              Discover how our premium medical linens can transform patient care in your facility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Users className="w-5 h-5 mr-2" />
                Contact Our Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Stethoscope className="w-5 h-5 mr-2" />
                Request Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}