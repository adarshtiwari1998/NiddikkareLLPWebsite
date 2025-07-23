import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, Award, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function ETraining() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            E-Learning <span className="text-primary">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access comprehensive educational materials and resources for laboratory professionals. 
            Enhance your knowledge, stay updated with industry standards, and advance your expertise.
          </p>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Interactive Content</CardTitle>
                <CardDescription>
                  Engaging educational materials with real-world case studies
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Expert Knowledge</CardTitle>
                <CardDescription>
                  Access industry-leading expertise and best practices
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Always Available</CardTitle>
                <CardDescription>
                  Access resources anytime with 24/7 availability
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Course Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Resource <span className="text-primary">Categories</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Laboratory Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-primary" />Safety protocols and procedures</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-primary" />Equipment operation and maintenance</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-primary" />Quality control and assurance</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-primary" />Documentation and record keeping</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Advanced Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-primary" />Molecular diagnostics methods</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-primary" />Chromatography applications</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-primary" />Bioanalytical methods</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-primary" />Regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Learning <span className="text-primary">Journey</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Explore</h3>
                <p className="text-sm text-gray-600">Browse our comprehensive resource library</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Study</h3>
                <p className="text-sm text-gray-600">Access detailed guides and technical documentation</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Apply</h3>
                <p className="text-sm text-gray-600">Implement knowledge in your laboratory work</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Excel</h3>
                <p className="text-sm text-gray-600">Advance your expertise and continue growing</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Learning Resources</h2>
              <p className="text-lg opacity-90">Comprehensive educational materials for laboratory professionals</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-200 mb-2">200+</div>
                <div className="text-lg">Educational Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary/80 mb-2">150+</div>
                <div className="text-lg">Technical Guides</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-200 mb-2">50+</div>
                <div className="text-lg">Video Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-200 mb-2">24/7</div>
                <div className="text-lg">Access Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-green-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of laboratory professionals who have enhanced their knowledge through our comprehensive educational resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Browse Resources
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Our Team
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}