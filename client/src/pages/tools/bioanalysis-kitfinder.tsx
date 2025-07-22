import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Microscope, Search, Settings, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function BioanalysisKitFinder() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Microscope className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Bioanalysis <span className="text-primary">KitFinder</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive bioanalysis kit selection and optimization tool. 
            Find the perfect analytical kit for your bioanalytical applications and assay development.
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
                <CardTitle>Smart Kit Search</CardTitle>
                <CardDescription>
                  Find kits by analyte, matrix, or application area
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Method Optimization</CardTitle>
                <CardDescription>
                  Optimize assay conditions and protocols
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Performance Data</CardTitle>
                <CardDescription>
                  Access validation data and performance metrics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Kit Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Kit <span className="text-primary">Categories</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">By Technique</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">ELISA Kits</h4>
                    <p className="text-gray-600">Enzyme-linked immunosorbent assays</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Western Blot</h4>
                    <p className="text-gray-600">Protein detection and analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">PCR Kits</h4>
                    <p className="text-gray-600">Polymerase chain reaction amplification</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Cell-Based Assays</h4>
                    <p className="text-gray-600">Viability, proliferation, and cytotoxicity</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">By Application</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Drug Discovery</h4>
                    <p className="text-gray-600">Compound screening and validation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Biomarker Analysis</h4>
                    <p className="text-gray-600">Disease markers and diagnostics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Toxicology</h4>
                    <p className="text-gray-600">Safety assessment and screening</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Clinical Research</h4>
                    <p className="text-gray-600">Clinical trial support and validation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kit Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Kit <span className="text-primary">Features</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Validated</h3>
                <p className="text-sm text-gray-600">Pre-validated protocols and methods</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">High Sensitivity</h3>
                <p className="text-sm text-gray-600">Detect low-abundance targets</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Customizable</h3>
                <p className="text-sm text-gray-600">Adaptable to specific requirements</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Support</h3>
                <p className="text-sm text-gray-600">Technical support and training</p>
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
                <div className="text-4xl font-bold text-primary mb-2">1,500+</div>
                <p className="text-gray-600">Bioanalysis Kits</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                <p className="text-gray-600">Target Analytes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
                <p className="text-gray-600">Assay Types</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
                <p className="text-gray-600">Success Rate</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Find Your Bioanalysis Kit Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the perfect bioanalysis kit for your research and development needs with our comprehensive database.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Search Kits
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