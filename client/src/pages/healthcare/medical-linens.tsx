import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Shield, Bed, Users, CheckCircle, Droplet, Recycle, ArrowRight, Heart } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/seo";

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

export default function MedicalLinens() {
  return (
    <div className="py-20 bg-gray-50">
      <SEO pagePath="/healthcare/medical-linens" />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center">
              <Stethoscope className="h-12 w-12 text-secondary" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-gray-800 mb-6 section-header">
            Hospital Linens
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Exceptional hospital linen solutions that elevate patient care through superior quality, 
            comfort, and infection control design
          </p>
        </section>

        {/* Introduction Section */}
        <section className="mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary text-white px-4 py-2 rounded-lg inline-block mb-4">
                  <span className="font-semibold">Health Care</span>
                </div>
                <div className="bg-secondary text-white px-4 py-2 rounded-lg inline-block ml-2 mb-6">
                  <span className="font-semibold">Hospital Linens</span>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Medical Linen/Hospital linen, such as bed sheets, gowns, drapes and towels, play a critical role in 
                  ensuring doctor and patient safety, comfort and infection control. These linens serve as a barrier against 
                  germ transmission, reduce skin irritation and maintain a hygienic environment.
                </p>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Clean, sanitized linens minimize the risk of hospital-acquired infections, protecting patients and healthcare 
                  workers. Effective linen management is vital for creating a safe and clean environment, which aids in patient 
                  recovery and satisfaction. Moreover, eco-friendly and durable linens can reduce environmental impact and help 
                  hospitals optimize resources while controlling costs.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Infection Control</h3>
                  </div>
                  <p className="text-gray-600">Advanced barrier protection against germ transmission and HAIs</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Patient Comfort</h3>
                  </div>
                  <p className="text-gray-600">Superior softness and comfort for enhanced patient satisfaction</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Recycle className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Eco-Friendly</h3>
                  </div>
                  <p className="text-gray-600">Sustainable materials and processes for environmental responsibility</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Portfolio */}
        <section className="mb-16">
          <div className="text-center mb-16">
            {/* Featured Product - Receiving Blankets */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
                  Featured Product
                </h2>
                <p className="text-xl text-gray-600">Specially designed for newborn care and comfort</p>
              </div>

              <Link href="/products/neonatal-care/baby-first-touch">
                <div className="glass-card rounded-2xl overflow-hidden max-w-6xl mx-auto cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative">
                      <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden">
                        <img 
                          src={receivingBlanketsImg} 
                          alt="Receiving Blankets/Swaddle NKR-101"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <h3 className="font-bold text-lg text-gray-800">Receiving Blankets/Swaddle</h3>
                        <p className="text-secondary font-semibold">NKR-101</p>
                      </div>
                    </div>

                  {/* Features Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">Key Benefits & Features</h3>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-3 bg-red-50 rounded-lg">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 text-sm">▶</span>
                        </div>
                        <span className="font-semibold text-gray-800">Breathable, 100% cotton</span>
                      </div>

                      <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm">▶</span>
                        </div>
                        <span className="font-semibold text-gray-800">Germ free</span>
                      </div>

                      <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 text-sm">▶</span>
                        </div>
                        <span className="font-semibold text-gray-800">Mimics the womb</span>
                      </div>

                      <div className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-lg">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <span className="text-yellow-600 text-sm">▶</span>
                        </div>
                        <span className="font-semibold text-gray-800">Reduces startle reflex</span>
                      </div>

                      <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm">▶</span>
                        </div>
                        <span className="font-semibold text-gray-800">Soothes colicky babies</span>
                      </div>

                      <div className="flex items-center space-x-4 p-3 bg-orange-50 rounded-lg">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-600 text-sm">▶</span>
                        </div>
                        <span className="font-semibold text-gray-800">Improves sleep</span>
                      </div>

                      <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-sm">▶</span>
                        </div>
                        <span className="font-semibold text-gray-800">Hygiene & Comfort</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We deliver exceptional hospital linen solutions that elevate patient care. Our extensive
              portfolio features premium products, including soft bed sheets with pillow covers, surgical
              draw sheets, surgical gowns, rubber sheets, and receiving blankets. Each item is carefully
              designed to prioritize comfort, hygiene, and quality.
            </p>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg mx-auto max-w-4xl">
              <p className="text-sm text-blue-800 font-medium">
                <strong>Note:</strong> We strictly follow GUIDELINES FOR CENTRAL STERILE SUPPLY DEPARTMENT (CSSD), MHFW (GoI), for the
                use of linen in hospital. Our efforts for sterilized hospital linen is one step towards the goal of CSSD for Cuddle Up With Hygiene reducing the rate of Hospital Acquired Infection.
              </p>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {/* Maternity Gown */}
            <Link href="/products/medical-linens/maternity-gown">
              <div className="glass-card rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={maternityGownImg} 
                    alt="Maternity Gown NKR-601"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Maternity Gown</h3>
                  <p className="text-secondary font-semibold">NKR-601</p>
                </div>
              </div>
            </Link>

            {/* Mackintosh Rubber Sheet */}
            <Link href="/products/medical-linens/mackintosh-rubber-sheet">
              <div className="glass-card rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={mackintoshSheetImg} 
                    alt="Mackintosh Rubber Sheet NKR-701/702"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Mackintosh Rubber Sheet</h3>
                  <p className="text-secondary font-semibold">With & W/o Cloth</p>
                  <p className="text-secondary font-semibold">NKR-702, NKR-701</p>
                </div>
              </div>
            </Link>

            {/* Bedsheet with Pillow Covers */}
            <Link href="/products/medical-linens/bedsheet-pillow-covers">
              <div className="glass-card rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={bedsheetCoversImg} 
                    alt="Bedsheet with Pillow Covers NKR-202"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Bedsheet with Pillow Covers</h3>
                  <p className="text-secondary font-semibold">NKR-202</p>
                </div>
              </div>
            </Link>

            {/* Surgical Drapes/Towels */}
            <Link href="/products/medical-linens/surgical-drapes-towels">
              <div className="glass-card rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={surgicalDrapesImg} 
                    alt="Surgical Drapes/Towels NKR-301"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Surgical Drapes (plain) / Towels</h3>
                  <p className="text-secondary font-semibold">NKR-301</p>
                </div>
              </div>
            </Link>

            {/* Scrub Suit */}
            <Link href="/products/medical-linens/scrub-suit">
              <div className="glass-card rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={scrubSuitImg} 
                    alt="Scrub Suit NKR-501"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Scrub Suit</h3>
                  <p className="text-secondary font-semibold">NKR-501</p>
                </div>
              </div>
            </Link>

            {/* Patient Gown */}
            <Link href="/products/medical-linens/patient-gown">
              <div className="glass-card rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={patientGownImg} 
                    alt="Patient Gown NKR-602"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Patient Gown</h3>
                  <p className="text-secondary font-semibold">NKR-602</p>
                </div>
              </div>
            </Link>

            {/* Surgical/OT Gown */}
            <Link href="/products/medical-linens/surgical-ot-gown">
              <div className="glass-card rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={surgicalOTGownImg} 
                    alt="Surgical/OT Gown NKR-401/402"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Surgical/ OT Gown</h3>
                  <p className="text-secondary font-semibold">with/Without overlap</p>
                  <p className="text-secondary font-semibold">NKR-401, NKR-402</p>
                </div>
              </div>
            </Link>

            {/* Surgical Cut Sheets */}
            <Link href="/products/medical-linens/surgical-cut-sheets">
              <div className="glass-card rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={surgicalCutSheetsImg} 
                    alt="Surgical Cut Sheets NKR-302"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Surgical Cut Sheets</h3>
                  <p className="text-secondary font-semibold">with holes</p>
                  <p className="text-secondary font-semibold">NKR-302</p>
                </div>
              </div>
            </Link>
          </div>

         
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              Product Categories & Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <strong>NiDDikKare</strong> manufactures a wide range of medical linen products and drape kits using 
              <strong> woven, non-woven and blended fabric.</strong>
            </p>
          </div>
          
          <div className="modern-grid">
            {/* Woven Medical Linens */}
            <Card className="glass-card border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bed className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-secondary">Woven Medical Linens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 font-semibold">
                  are made from 100% cotton. Cotton linens benefits include high absorbency, 
                  ease of sterilization, and softness, making it ideal for surgical drapes, gowns, and bed sheets.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    100% Cotton construction
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    High thread count for softness
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    Reinforced edges for durability
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    Machine washable up to 160°C
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Non-woven Medical Linens */}
            <Card className="glass-card border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-secondary">Non-woven Medical Linens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 font-semibold">
                  are made from polypropylene or polyester, they offer superior barrier protection against bacteria and viruses, 
                  minimizing infection risk.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Single-use infection prevention
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Fluid-resistant barriers
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Lightweight and breathable
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Environmentally conscious disposal
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Their single-use design ensures simplified sterilization and reduced cross-contamination. Additionally, 
                  many non-woven materials are also lightweight and breathable, enhancing comfort for prolonged use.
                </p>
              </CardContent>
            </Card>
            
            {/* Blended Medical Linens */}
            <Card className="glass-card border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-secondary">Blended Medical Linens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 font-semibold">
                  are prepared with both woven and non-woven fabrics or materials to combine their properties.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Cotton-polyester blends
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Enhanced strength and durability
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Improved moisture management
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Reduced shrinkage and wrinkles
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Blending enhances characteristics like lightweight, durability, comfort, and functionality, 
                  allowing for tailored performance in various applications as medical linens.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Portfolio */}
        <section className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              Our Extensive Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium products including soft bed sheets with pillow covers, surgical draw sheets, 
              surgical gowns, rubber sheets, and receiving blankets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bed Sheets & Pillow Covers */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Bed className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Bed Sheets & Pillow Covers</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="w-full justify-center bg-primary/10 text-primary">Premium Quality</Badge>
              </CardContent>
            </Card>
            
            {/* Surgical Drapes */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-lg">Surgical Draw Sheets</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="w-full justify-center bg-secondary/10 text-secondary">Sterile Grade</Badge>
              </CardContent>
            </Card>
            
            {/* Surgical Gowns */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Surgical Gowns</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="w-full justify-center bg-accent/10 text-accent">Protective Wear</Badge>
              </CardContent>
            </Card>
            
            {/* Rubber Sheets */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Droplet className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Rubber Sheets</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="w-full justify-center bg-blue-100 text-blue-600">Waterproof</Badge>
              </CardContent>
            </Card>
            
            {/* Receiving Blankets */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Receiving Blankets</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="w-full justify-center bg-pink-100 text-pink-600">Comfort Care</Badge>
              </CardContent>
            </Card>
            
            {/* Patient Gowns */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Stethoscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Patient Gowns</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="w-full justify-center bg-green-100 text-green-600">Patient Care</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800 section-header mb-8 text-center">
              Quality & Compliance
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Sterilization Guidelines</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <strong className="text-gray-800">CSSD Compliance:</strong>
                      <p className="text-gray-600">We strictly follow GUIDELINES FOR CENTRAL STERILE SUPPLY DEPARTMENT (CSSD)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <strong className="text-gray-800">MHFW Guidelines:</strong>
                      <p className="text-gray-600">Ministry of Health and Family Welfare (GoI) approved sterilization protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <strong className="text-gray-800">Hospital Standards:</strong>
                      <p className="text-gray-600">Meets stringent hospital linen sterilization requirements for 100% infection control</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Safety Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <strong className="text-gray-800">Barrier Protection:</strong>
                      <p className="text-gray-600">Superior protection against bacterial and viral transmission</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <strong className="text-gray-800">Hygienic Environment:</strong>
                      <p className="text-gray-600">Maintains clean, sanitized conditions to minimize HAI risks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <strong className="text-gray-800">Quality Assurance:</strong>
                      <p className="text-gray-600">Rigorous testing ensures consistent quality and performance standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="glass-card p-12 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-6">
              Partner with Us for Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference with our premium hospital linens designed for comfort, 
              hygiene, and quality that healthcare professionals trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-modern">
                Request Product Catalog
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Sales Team
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}