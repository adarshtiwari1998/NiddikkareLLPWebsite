import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Shield, Droplet, Recycle, Check, ArrowRight } from "lucide-react";

export default function MedicalLinens() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Bed className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Medical <span className="text-secondary">Linens</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hospital-grade linens designed for safety, comfort, and durability. Our comprehensive range 
            includes woven, non-woven, and blended fabric solutions for all healthcare environments.
          </p>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-secondary">Product Range</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bed className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Woven Medical Linens</CardTitle>
                <CardDescription>
                  Traditional woven fabrics for durability and comfort
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 100% Cotton construction</li>
                  <li>• High thread count for softness</li>
                  <li>• Reinforced edges for durability</li>
                  <li>• Machine washable up to 160°C</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Non-woven Solutions</CardTitle>
                <CardDescription>
                  Disposable options for enhanced infection control
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Single-use infection prevention</li>
                  <li>• Fluid-resistant barriers</li>
                  <li>• Lightweight and breathable</li>
                  <li>• Environmentally conscious disposal</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Blended Fabric Options</CardTitle>
                <CardDescription>
                  Innovative blends for optimal performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cotton-polyester blends</li>
                  <li>• Enhanced strength and durability</li>
                  <li>• Improved moisture management</li>
                  <li>• Reduced shrinkage and wrinkles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Advanced <span className="text-secondary">Features</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our medical linens are engineered to meet the demanding requirements of healthcare 
                environments while providing superior comfort for patients and ease of use for staff.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Infection Control</h3>
                    <p className="text-gray-600">
                      Advanced antimicrobial treatments and barrier properties to prevent healthcare-associated infections.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Droplet className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Fluid Management</h3>
                    <p className="text-gray-600">
                      Superior absorbency and fluid-resistant properties for various clinical applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Recycle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Sustainability</h3>
                    <p className="text-gray-600">
                      Eco-friendly materials and manufacturing processes with recyclable options available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Medical linens in hospital environment" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Product Specifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Product <span className="text-secondary">Specifications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Bed Sheets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Material:</span>
                    <span className="font-medium">100% Cotton</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thread Count:</span>
                    <span className="font-medium">200-300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sizes:</span>
                    <span className="font-medium">Twin to King</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Colors:</span>
                    <span className="font-medium">White, Blue, Green</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Pillowcases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Material:</span>
                    <span className="font-medium">Cotton Blend</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Closure:</span>
                    <span className="font-medium">Envelope Style</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium">20" x 30"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pack Size:</span>
                    <span className="font-medium">12-24 pieces</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Blankets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Material:</span>
                    <span className="font-medium">Cotton/Polyester</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">2.5-3.5 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium">60" x 80"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thermal Rating:</span>
                    <span className="font-medium">3.5 TOG</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Quality <span className="text-secondary">Standards</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our medical linens meet and exceed international healthcare standards for safety and quality.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">ISO 13485</h3>
                <p className="text-sm text-gray-600">Medical Device Quality Management</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">OEKO-TEX</h3>
                <p className="text-sm text-gray-600">Textile Safety Certification</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">FDA Approved</h3>
                <p className="text-sm text-gray-600">Food and Drug Administration</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">CE Marked</h3>
                <p className="text-sm text-gray-600">European Conformity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Healthcare <span className="text-secondary">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Acute Care Units</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-performance linens for intensive care and critical patient environments.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">ICU</Badge>
                  <Badge variant="outline" className="mr-2">CCU</Badge>
                  <Badge variant="outline">Emergency</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Surgical Departments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized linens for operating rooms and surgical recovery areas.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">OR</Badge>
                  <Badge variant="outline" className="mr-2">Recovery</Badge>
                  <Badge variant="outline">Pre-Op</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">General Wards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comfortable, durable linens for patient rooms and general care areas.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Medical</Badge>
                  <Badge variant="outline" className="mr-2">Pediatric</Badge>
                  <Badge variant="outline">Maternity</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Upgrade Your Healthcare Linens Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific requirements and discover how our medical linens 
            can enhance patient comfort and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Custom Quote
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Download Catalog
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
