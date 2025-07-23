import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, Settings, Zap, Award, ArrowRight, CheckCircle, Heart, Users } from "lucide-react";
import { Link } from "wouter";

export default function BlendedMedicalLinens() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100/30 rounded-full"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-violet-100/30 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-fuchsia-100/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-purple-100/30 rounded-full"></div>
        {/* Decorative curved shape - matching design pattern */}
        <div 
          className="absolute top-36 right-1/3 w-52 h-52 bg-gradient-to-br from-purple-200/20 to-violet-200/20"
          style={{
            borderRadius: '55% 45% 65% 35% / 40% 60% 40% 60%'
          }}
        ></div>
      </div>
      
      <div className="relative py-20">
        <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center">
              <Layers className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-primary">Blended</span> Medical Linens
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Prepared with both woven and non-woven fabrics or materials to combine their properties. 
            Blending enhances characteristics like lightweight, durability, comfort, and functionality.
          </p>
        </section>

        {/* Related Product Lines */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Blended <span className="text-primary">Product Lines</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our cotton-polyester blend medical linens that combine the best properties of both materials, 
              delivering enhanced comfort, durability, and functionality for diverse healthcare applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Maternity Gown */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Maternity Gown</h3>
                <p className="text-sm text-gray-600 text-center mb-3">NKR-601</p>
                <p className="text-sm text-gray-700 text-center mb-4">
                  Cotton-poly blend fabric designed for maximum comfort and dignity during hospital stays and delivery
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  <Badge variant="secondary" className="text-xs">Cotton Poly Blend</Badge>
                  <Badge variant="secondary" className="text-xs">Comfortable Fit</Badge>
                  <Badge variant="secondary" className="text-xs">Breathable</Badge>
                </div>
                <Link href="/products/medical-linens/maternity-gown">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Patient Gown */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Patient Gown</h3>
                <p className="text-sm text-gray-600 text-center mb-3">NKR-602</p>
                <p className="text-sm text-gray-700 text-center mb-4">
                  Cotton-poly blend material providing optimal balance of comfort, durability, and easy care
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  <Badge variant="secondary" className="text-xs">Cotton Poly Blend</Badge>
                  <Badge variant="secondary" className="text-xs">Easy Care</Badge>
                  <Badge variant="secondary" className="text-xs">Durable</Badge>
                </div>
                <Link href="/products/medical-linens/patient-gown">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
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
              Key <span className="text-primary">Advantages</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Combined Properties</CardTitle>
                <CardDescription>
                  Best of both woven and non-woven materials
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Tailored Performance</CardTitle>
                <CardDescription>
                  Customized for specific medical applications
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
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
              Blended <span className="text-primary">Characteristics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Enhanced Properties</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Lightweight Design</h4>
                    <p className="text-gray-600">Reduced weight without compromising strength</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Enhanced Durability</h4>
                    <p className="text-gray-600">Longer-lasting performance in demanding environments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Improved Comfort</h4>
                    <p className="text-gray-600">Better breathability and skin compatibility</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
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
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Barrier Protection</h4>
                    <p className="text-gray-600">Effective protection against contaminants</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Moisture Management</h4>
                    <p className="text-gray-600">Balanced absorbency and wicking properties</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Flexibility</h4>
                    <p className="text-gray-600">Adaptable to various medical procedures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
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
              Product <span className="text-primary">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Surgical Applications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Hybrid Surgical Gowns</h4>
                    <p className="text-gray-600">Combining comfort and protection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Specialized Drapes</h4>
                    <p className="text-gray-600">Procedure-specific draping solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
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
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Comfort Linens</h4>
                    <p className="text-gray-600">Enhanced patient comfort solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Wound Care Products</h4>
                    <p className="text-gray-600">Specialized wound management materials</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
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
              Material <span className="text-primary">Combinations</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">Cotton</div>
                <p className="text-gray-600">+ Non-woven</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">PP</div>
                <p className="text-gray-600">+ Cotton Blend</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">PET</div>
                <p className="text-gray-600">+ Natural Fibers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">Multi</div>
                <p className="text-gray-600">Layer Systems</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Quality <span className="text-primary">Standards</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge className="mb-4">Medical Grade</Badge>
                <h3 className="text-lg font-semibold mb-2">Healthcare Quality</h3>
                <p className="text-sm text-gray-600">Advanced medical device manufacturing standards</p>
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
        <section className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Discover Customized Blended Medical Linens
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the perfect balance of performance characteristics with our blended medical linens, 
            tailored for your specific healthcare applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
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
    </div>
  );
}