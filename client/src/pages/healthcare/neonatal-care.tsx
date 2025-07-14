import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Baby, Heart, Shield, Thermometer, Check, ArrowRight } from "lucide-react";

export default function NeonatalCare() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Baby className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Neonatal <span className="text-secondary">Care Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Scientifically designed products for the most vulnerable patients. Our comprehensive neonatal care 
            solutions provide warmth, hygiene, and comfort for newborns in critical care environments.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>Comfort & Warmth</CardTitle>
                <CardDescription>
                  Provides optimal thermal regulation for newborns
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Infection Control</CardTitle>
                <CardDescription>
                  Advanced materials that minimize infection risk
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Temperature Control</CardTitle>
                <CardDescription>
                  Maintains optimal body temperature for healthy development
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Kouvér <span className="text-secondary">Receiving Blankets</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our flagship neonatal care product designed to create a womb-like environment for newborns
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Neonatal intensive care unit with baby blankets" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                  Premium Quality
                </Badge>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                  Clinically Tested
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Fabric Technology</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Kouvér receiving blankets are crafted with advanced materials that provide optimal thermal 
                regulation while maintaining the softness and comfort essential for newborn care.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Womb-like Environment</h4>
                    <p className="text-gray-600 text-sm">Creates a secure, warm environment similar to the womb</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hypoallergenic Materials</h4>
                    <p className="text-gray-600 text-sm">Safe for sensitive newborn skin with minimal allergen risk</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Easy Sterilization</h4>
                    <p className="text-gray-600 text-sm">Hospital-grade materials that withstand repeated sterilization</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View Product Details
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Request Sample
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Technical <span className="text-secondary">Specifications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Material Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Primary Material:</span>
                    <span className="font-medium">100% Organic Cotton</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weave Pattern:</span>
                    <span className="font-medium">Specialized Thermal Weave</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">200 GSM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thickness:</span>
                    <span className="font-medium">2.5mm</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Performance Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thermal Retention:</span>
                    <span className="font-medium">98.5% Heat Retention</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Breathability:</span>
                    <span className="font-medium">High Air Permeability</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wash Cycles:</span>
                    <span className="font-medium">500+ Industrial Washes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sterilization:</span>
                    <span className="font-medium">Steam & Chemical Compatible</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Clinical <span className="text-secondary">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Neonatal Intensive Care Units</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Essential for premature and critically ill newborns requiring intensive monitoring and care.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Temperature regulation for premature infants</li>
                  <li>• Comfort during medical procedures</li>
                  <li>• Infection prevention protocols</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Delivery Rooms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Immediate comfort and warmth for newborns during the critical first moments of life.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Immediate post-birth care</li>
                  <li>• Skin-to-skin contact facilitation</li>
                  <li>• Thermal transition support</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Pediatric Wards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized care for infants and young children requiring extended hospital stays.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Extended care comfort</li>
                  <li>• Family bonding support</li>
                  <li>• Recovery environment enhancement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Neonatal Care?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our specialists to learn more about implementing our neonatal care solutions 
            in your healthcare facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Product Catalog
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
