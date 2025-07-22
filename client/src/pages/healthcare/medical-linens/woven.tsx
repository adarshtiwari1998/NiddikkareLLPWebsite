import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Droplets, Shirt, ArrowRight, CheckCircle, Baby, Bed, Users } from "lucide-react";
import { Link } from "wouter";

export default function WovenMedicalLinens() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100/30 rounded-full"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-teal-100/30 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-emerald-100/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-green-100/30 rounded-full"></div>
        {/* Decorative curved shape - matching baby-first-touch style */}
        <div 
          className="absolute top-32 right-1/4 w-64 h-64 bg-gradient-to-br from-green-200/20 to-teal-200/20"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          }}
        ></div>
      </div>
      
      <div className="relative py-20">
        <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center">
              <Shirt className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-green-600">Woven</span> Medical Linens
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Made from 100% cotton, our woven medical linens offer high absorbency, ease of sterilization, and softness, 
            making them ideal for surgical drapes, gowns, and bed sheets.
          </p>
        </section>

        {/* Related Product Lines */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Woven <span className="text-green-600">Product Lines</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of 100% cotton woven medical linens, designed for superior comfort, 
              absorbency, and patient care in healthcare environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Baby's First Touch */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Baby className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Baby's First Touch</h3>
                <p className="text-sm text-gray-600 text-center mb-3">NKR-101</p>
                <p className="text-sm text-gray-700 text-center mb-4">
                  100% organic cotton receiving blankets for newborn safety and comfort
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  <Badge variant="secondary" className="text-xs">Organic Cotton</Badge>
                  <Badge variant="secondary" className="text-xs">Breathable</Badge>
                  <Badge variant="secondary" className="text-xs">Allergen-free</Badge>
                </div>
                <Link href="/products/medical-linens/baby-first-touch">
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bedsheet with Pillow Covers */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Bed className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Bedsheet & Pillow Covers</h3>
                <p className="text-sm text-gray-600 text-center mb-3">NKR-202</p>
                <p className="text-sm text-gray-700 text-center mb-4">
                  100% cotton complete bedding solution for patient comfort and hospital hygiene
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  <Badge variant="secondary" className="text-xs">100% Cotton</Badge>
                  <Badge variant="secondary" className="text-xs">Pre-shrunk</Badge>
                  <Badge variant="secondary" className="text-xs">Complete Set</Badge>
                </div>
                <Link href="/products/medical-linens/bedsheet-pillow-covers">
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Maternity Gown */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Maternity Gown</h3>
                <p className="text-sm text-gray-600 text-center mb-3">NKR-601</p>
                <p className="text-sm text-gray-700 text-center mb-4">
                  Comfortable and breathable gown designed for maximum comfort during important moments
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  <Badge variant="secondary" className="text-xs">Comfortable Fit</Badge>
                  <Badge variant="secondary" className="text-xs">Breathable</Badge>
                  <Badge variant="secondary" className="text-xs">Soft Fabric</Badge>
                </div>
                <Link href="/products/medical-linens/maternity-gown">
                  <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Patient Gown */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Patient Gown</h3>
                <p className="text-sm text-gray-600 text-center mb-3">NKR-602</p>
                <p className="text-sm text-gray-700 text-center mb-4">
                  Soft fabric for extended wear with hypoallergenic materials for patient comfort
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  <Badge variant="secondary" className="text-xs">Soft Fabric</Badge>
                  <Badge variant="secondary" className="text-xs">Extended Wear</Badge>
                  <Badge variant="secondary" className="text-xs">Hypoallergenic</Badge>
                </div>
                <Link href="/products/medical-linens/patient-gown">
                  <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Key <span className="text-green-600">Benefits</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>High Absorbency</CardTitle>
                <CardDescription>
                  Cotton fibers provide excellent moisture absorption capabilities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Easy Sterilization</CardTitle>
                <CardDescription>
                  Withstands high-temperature sterilization processes
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Softness & Comfort</CardTitle>
                <CardDescription>
                  Gentle on skin for enhanced patient comfort
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Product Applications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Product <span className="text-green-600">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Surgical Applications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Surgical Drapes</h4>
                    <p className="text-gray-600">Sterile draping for surgical procedures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Surgical Gowns</h4>
                    <p className="text-gray-600">Protective clothing for medical professionals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Lap Sponges</h4>
                    <p className="text-gray-600">Highly absorbent surgical sponges</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Patient Care</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Bed Sheets</h4>
                    <p className="text-gray-600">Comfortable and absorbent patient bedding</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Pillowcases</h4>
                    <p className="text-gray-600">Soft and breathable pillow covers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Patient Gowns</h4>
                    <p className="text-gray-600">Comfortable clothing for patients</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Material Properties */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Material <span className="text-green-600">Properties</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-gray-600">Cotton Content</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">High</div>
                <p className="text-gray-600">Absorbency Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">Soft</div>
                <p className="text-gray-600">Texture Quality</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">Easy</div>
                <p className="text-gray-600">Sterilization</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Quality <span className="text-green-600">Standards</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge className="mb-4">Medical Grade</Badge>
                <h3 className="text-lg font-semibold mb-2">Healthcare Quality</h3>
                <p className="text-sm text-gray-600">Rigorous medical device manufacturing standards</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge className="mb-4">Safety Compliant</Badge>
                <h3 className="text-lg font-semibold mb-2">Regulatory Standards</h3>
                <p className="text-sm text-gray-600">Meets healthcare safety requirements</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge className="mb-4">Quality Assured</Badge>
                <h3 className="text-lg font-semibold mb-2">Performance Standards</h3>
                <p className="text-sm text-gray-600">Proven quality and reliability</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-green-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Experience Premium Woven Medical Linens
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the comfort and reliability of our 100% cotton woven medical linens, trusted by healthcare professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Request Samples
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Download Catalog
            </Button>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}