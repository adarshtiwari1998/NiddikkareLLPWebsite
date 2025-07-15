import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, Settings, Zap, Award, ArrowRight, CheckCircle } from "lucide-react";

export default function BlendedMedicalLinens() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center">
              <Layers className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-purple-600">Blended</span> Medical Linens
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Prepared with both woven and non-woven fabrics or materials to combine their properties. 
            Blending enhances characteristics like lightweight, durability, comfort, and functionality.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Key <span className="text-purple-600">Advantages</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Combined Properties</CardTitle>
                <CardDescription>
                  Best of both woven and non-woven materials
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>Tailored Performance</CardTitle>
                <CardDescription>
                  Customized for specific medical applications
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Enhanced Functionality</CardTitle>
                <CardDescription>
                  Optimized for diverse medical environments
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Blended Material Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Blended <span className="text-purple-600">Characteristics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Enhanced Properties</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Lightweight Design</h4>
                    <p className="text-gray-600">Reduced weight without compromising strength</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Enhanced Durability</h4>
                    <p className="text-gray-600">Longer-lasting performance in demanding environments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Improved Comfort</h4>
                    <p className="text-gray-600">Better breathability and skin compatibility</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Optimized Functionality</h4>
                    <p className="text-gray-600">Tailored for specific medical applications</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Performance Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Barrier Protection</h4>
                    <p className="text-gray-600">Effective protection against contaminants</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Moisture Management</h4>
                    <p className="text-gray-600">Balanced absorbency and wicking properties</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Flexibility</h4>
                    <p className="text-gray-600">Adaptable to various medical procedures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Cost Efficiency</h4>
                    <p className="text-gray-600">Optimized performance-to-cost ratio</p>
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
              Product <span className="text-purple-600">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Surgical Applications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Hybrid Surgical Gowns</h4>
                    <p className="text-gray-600">Combining comfort and protection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Specialized Drapes</h4>
                    <p className="text-gray-600">Procedure-specific draping solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Reinforced Covers</h4>
                    <p className="text-gray-600">Enhanced protection for critical areas</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Patient Care</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Comfort Linens</h4>
                    <p className="text-gray-600">Enhanced patient comfort solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Wound Care Products</h4>
                    <p className="text-gray-600">Specialized wound management materials</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Protective Covers</h4>
                    <p className="text-gray-600">Multi-purpose protection solutions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Material Combinations */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Material <span className="text-purple-600">Combinations</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">Cotton</div>
                <p className="text-gray-600">+ Non-woven</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">PP</div>
                <p className="text-gray-600">+ Cotton Blend</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">PET</div>
                <p className="text-gray-600">+ Natural Fibers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">Multi</div>
                <p className="text-gray-600">Layer Systems</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Quality <span className="text-purple-600">Standards</span>
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
                <Badge className="mb-4">Custom Testing</Badge>
                <h3 className="text-lg font-semibold mb-2">Application-Specific</h3>
                <p className="text-sm text-gray-600">Tailored quality standards</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge className="mb-4">Performance Validated</Badge>
                <h3 className="text-lg font-semibold mb-2">Proven Performance</h3>
                <p className="text-sm text-gray-600">Validated in medical environments</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Discover Customized Blended Medical Linens
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the perfect balance of performance characteristics with our blended medical linens, 
            tailored for your specific healthcare applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Request Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Custom Solutions
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}