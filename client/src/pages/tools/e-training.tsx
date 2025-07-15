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
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            E-Training <span className="text-blue-600">Platform</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive online training programs for laboratory professionals. 
            Master new techniques, stay current with industry standards, and advance your career.
          </p>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Interactive Learning</CardTitle>
                <CardDescription>
                  Hands-on training modules with real-world scenarios
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>Certification</CardTitle>
                <CardDescription>
                  Earn industry-recognized certificates upon completion
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Self-Paced</CardTitle>
                <CardDescription>
                  Learn at your own pace with 24/7 access to materials
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Course Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Training <span className="text-blue-600">Categories</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Laboratory Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" />Safety protocols and procedures</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" />Equipment operation and maintenance</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" />Quality control and assurance</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" />Documentation and record keeping</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Advanced Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" />Molecular diagnostics methods</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" />Chromatography applications</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" />Bioanalytical methods</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" />Regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Learning <span className="text-blue-600">Path</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-gray-600">Evaluate your current knowledge and skills</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Learning</h3>
                <p className="text-sm text-gray-600">Complete interactive modules and exercises</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Practice</h3>
                <p className="text-sm text-gray-600">Apply knowledge through hands-on simulations</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Certification</h3>
                <p className="text-sm text-gray-600">Earn your certificate and continue learning</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Platform <span className="text-blue-600">Statistics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600">Training Courses</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
                <p className="text-gray-600">Certified Professionals</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-gray-600">Completion Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-600">Access Available</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of laboratory professionals who have advanced their careers through our comprehensive training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Browse Courses
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}