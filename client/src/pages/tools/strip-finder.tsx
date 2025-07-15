import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TestTube, Search, Target, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function StripFinder() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center">
              <TestTube className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">Strip</span>Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Test strip selection and optimization tool for rapid diagnostics. 
            Find the perfect test strip for your diagnostic needs with our comprehensive database.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Intelligent Search</CardTitle>
                <CardDescription>
                  Advanced search by analyte, matrix, or application
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>Precision Matching</CardTitle>
                <CardDescription>
                  Match test strips to your specific requirements
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Rapid Results</CardTitle>
                <CardDescription>
                  Get instant recommendations with detailed specifications
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Test Strip Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Test Strip <span className="text-blue-600">Categories</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">By Application</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Clinical Diagnostics</h4>
                    <p className="text-gray-600">Urine analysis, blood glucose, and protein detection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Food Testing</h4>
                    <p className="text-gray-600">Allergen detection and food safety testing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Environmental</h4>
                    <p className="text-gray-600">Water quality and environmental monitoring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Industrial</h4>
                    <p className="text-gray-600">Process monitoring and quality control</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">By Technology</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Colorimetric</h4>
                    <p className="text-gray-600">Visual color change detection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Immunochromatographic</h4>
                    <p className="text-gray-600">Lateral flow and immunoassay strips</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Enzymatic</h4>
                    <p className="text-gray-600">Enzyme-based detection systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Fluorescence</h4>
                    <p className="text-gray-600">Fluorescent detection methods</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Database <span className="text-blue-600">Statistics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Test Strip Types</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                <p className="text-gray-600">Target Analytes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <p className="text-gray-600">Application Areas</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                <p className="text-gray-600">Match Accuracy</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Find Your Perfect Test Strip
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Use our intelligent strip finder to discover the ideal test strip for your diagnostic applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Strip Search
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Browse Catalog
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}