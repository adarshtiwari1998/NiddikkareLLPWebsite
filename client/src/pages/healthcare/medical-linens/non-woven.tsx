import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Feather, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function NonWovenMedicalLinens() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-indigo-100/30 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-sky-100/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-blue-100/30 rounded-full"></div>
        {/* Decorative curved shape - matching design pattern */}
        <div 
          className="absolute top-40 left-1/3 w-48 h-48 bg-gradient-to-br from-blue-200/20 to-indigo-200/20"
          style={{
            borderRadius: '45% 55% 35% 65% / 50% 40% 60% 50%'
          }}
        ></div>
      </div>
      
      <div className="relative py-20">
        <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Shield className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">Non-woven</span> Medical Linens
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Made from polypropylene or polyester, our non-woven medical linens offer superior barrier protection 
            against bacteria and viruses, minimizing infection risk with single-use design.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Key <span className="text-blue-600">Advantages</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Superior Barrier Protection</CardTitle>
                <CardDescription>
                  Effective protection against bacteria and viruses
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>Reduced Cross-contamination</CardTitle>
                <CardDescription>
                  Single-use design ensures simplified sterilization
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Feather className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Lightweight & Breathable</CardTitle>
                <CardDescription>
                  Enhanced comfort for prolonged use
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* SMS Technology */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              SMS <span className="text-blue-600">Technology</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer SMS (Spunbond-Meltblown-Spunbond) non-woven fabric, known for its strength, 
              breathability, and high barrier protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">SMS Layer Structure</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Spunbond Outer Layer</h4>
                    <p className="text-gray-600">Provides strength and durability</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Meltblown Filter Layer</h4>
                    <p className="text-gray-600">Superior filtration and barrier protection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Spunbond Inner Layer</h4>
                    <p className="text-gray-600">Comfort and breathability</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Performance Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">High Barrier Protection</h4>
                    <p className="text-gray-600">Blocks bacteria and virus penetration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Excellent Breathability</h4>
                    <p className="text-gray-600">Allows air circulation for comfort</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Tear Resistance</h4>
                    <p className="text-gray-600">Maintains integrity during use</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Product Applications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Product <span className="text-blue-600">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Surgical Applications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Surgical Gowns</h4>
                    <p className="text-gray-600">Disposable protective gowns for surgeons</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Surgical Drapes</h4>
                    <p className="text-gray-600">Sterile field maintenance during procedures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Face Masks</h4>
                    <p className="text-gray-600">Respiratory protection for medical staff</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Infection Control</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Isolation Gowns</h4>
                    <p className="text-gray-600">Protection in isolation environments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Shoe Covers</h4>
                    <p className="text-gray-600">Prevent contamination in clean areas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Caps & Covers</h4>
                    <p className="text-gray-600">Complete protection solutions</p>
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
              Material <span className="text-blue-600">Properties</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">PP/PET</div>
                <p className="text-gray-600">Material Base</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Single</div>
                <p className="text-gray-600">Use Design</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">Light</div>
                <p className="text-gray-600">Weight</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">High</div>
                <p className="text-gray-600">Barrier</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Quality <span className="text-blue-600">Standards</span>
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
                <Badge className="mb-4">EN 14126</Badge>
                <h3 className="text-lg font-semibold mb-2">Protective Clothing</h3>
                <p className="text-sm text-gray-600">Infection control standards</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge className="mb-4">ASTM F1671</Badge>
                <h3 className="text-lg font-semibold mb-2">Barrier Performance</h3>
                <p className="text-sm text-gray-600">Viral penetration resistance</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Advance Your Infection Control with Non-woven Linens
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience superior barrier protection and infection control with our advanced non-woven medical linens, 
            designed for modern healthcare environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Product Info
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Download Specifications
            </Button>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}