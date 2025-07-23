import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Search, BarChart3, FileText, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function ApplicationDatabaseChromatography() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Database className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Application Database <span className="text-primary">Chromatography</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive chromatography application database and analysis tools. 
            Access thousands of validated methods and optimize your analytical workflows.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Advanced Search</CardTitle>
                <CardDescription>
                  Intelligent search through thousands of applications
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Method Optimization</CardTitle>
                <CardDescription>
                  Optimize existing methods or develop new ones
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Validated Methods</CardTitle>
                <CardDescription>
                  Access to peer-reviewed and validated methods
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Database Content */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Database <span className="text-primary">Content</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Application Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">HPLC Applications</h4>
                    <p className="text-gray-600">High-performance liquid chromatography methods</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">GC Methods</h4>
                    <p className="text-gray-600">Gas chromatography analytical procedures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">LC-MS Applications</h4>
                    <p className="text-gray-600">Liquid chromatography-mass spectrometry</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Ion Chromatography</h4>
                    <p className="text-gray-600">Ion exchange and ion exclusion methods</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Industry Sectors</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Pharmaceutical</h4>
                    <p className="text-gray-600">Drug analysis and quality control</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Food & Beverage</h4>
                    <p className="text-gray-600">Food safety and quality testing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Environmental</h4>
                    <p className="text-gray-600">Environmental monitoring and analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Clinical</h4>
                    <p className="text-gray-600">Clinical diagnostics and biomarkers</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Search Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Search <span className="text-primary">Features</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Compound Search</h3>
                <p className="text-sm text-gray-600">Search by chemical structure or name</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Method Filter</h3>
                <p className="text-sm text-gray-600">Filter by technique and conditions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Application Notes</h3>
                <p className="text-sm text-gray-600">Access detailed application notes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-sm text-gray-600">Connect with chromatography experts</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Database Statistics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Database <span className="text-primary">Statistics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-gray-600">Validated Methods</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-600">Application Areas</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                <p className="text-gray-600">Contributing Labs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-600">Database Access</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Access the World's Largest Chromatography Database
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of analytical chemists who rely on our comprehensive database for their research and analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Access Database
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Sample Methods
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}