import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplet, Search, Palette, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function NanocolorFinder() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Droplet className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">NANOCOLOR</span> Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Colorimetric analysis tools for precise water and environmental testing. 
            Find the perfect NANOCOLOR test for your water quality analysis needs.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Colorimetric Analysis</CardTitle>
                <CardDescription>
                  Precise color-based detection and measurement
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>Parameter Search</CardTitle>
                <CardDescription>
                  Find tests by water quality parameters
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Quick Results</CardTitle>
                <CardDescription>
                  Fast and accurate test results in minutes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Test Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Test <span className="text-blue-600">Categories</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Water Quality Parameters</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Nutrients</h4>
                    <p className="text-gray-600">Nitrogen, phosphorus, and potassium testing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Heavy Metals</h4>
                    <p className="text-gray-600">Lead, mercury, copper, and other metal detection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Chemical Oxygen Demand</h4>
                    <p className="text-gray-600">COD and BOD testing for water treatment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">pH and Alkalinity</h4>
                    <p className="text-gray-600">pH, alkalinity, and hardness measurements</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Application Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Drinking Water</h4>
                    <p className="text-gray-600">Municipal and well water testing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Wastewater</h4>
                    <p className="text-gray-600">Treatment plant monitoring and compliance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Industrial Water</h4>
                    <p className="text-gray-600">Process water and cooling tower monitoring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Environmental</h4>
                    <p className="text-gray-600">Surface water and groundwater analysis</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Test Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Test <span className="text-blue-600">Features</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplet className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Ready-to-use</h3>
                <p className="text-sm text-gray-600">Pre-measured reagents in convenient vials</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visual Reading</h3>
                <p className="text-sm text-gray-600">Clear color development for easy interpretation</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Results</h3>
                <p className="text-sm text-gray-600">Results in 1-15 minutes depending on test</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">User-Friendly</h3>
                <p className="text-sm text-gray-600">Simple procedures for all skill levels</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Database Statistics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              NANOCOLOR <span className="text-blue-600">Database</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-gray-600">Test Parameters</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <p className="text-gray-600">Test Methods</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <p className="text-gray-600">Industries Served</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
                <p className="text-gray-600">Test Accuracy</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Find Your NANOCOLOR Test Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the perfect colorimetric test for your water quality analysis needs with our comprehensive database.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Search Tests
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