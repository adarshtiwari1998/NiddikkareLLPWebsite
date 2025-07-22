import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Droplets, Shirt, ArrowRight, CheckCircle } from "lucide-react";

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
                <Badge className="mb-4">ISO 13485</Badge>
                <h3 className="text-lg font-semibold mb-2">Medical Device Quality</h3>
                <p className="text-sm text-gray-600">Certified medical device manufacturing</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge className="mb-4">FDA Approved</Badge>
                <h3 className="text-lg font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-sm text-gray-600">Meets FDA safety standards</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge className="mb-4">CE Marked</Badge>
                <h3 className="text-lg font-semibold mb-2">European Standards</h3>
                <p className="text-sm text-gray-600">European conformity certified</p>
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