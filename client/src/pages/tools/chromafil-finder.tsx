import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, Zap, Settings, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function ChromafilFinder() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Filter className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-primary">CHROMAFIL</span> Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chromatography filtration and sample preparation solutions. 
            Find the perfect CHROMAFIL filter for your HPLC and GC sample preparation needs.
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
                <CardTitle>Specialized Search</CardTitle>
                <CardDescription>
                  Find filters optimized for chromatography applications
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Method Matching</CardTitle>
                <CardDescription>
                  Match filters to your analytical method requirements
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
                  Access detailed performance specifications
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Filter Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              CHROMAFIL <span className="text-primary">Filter Types</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">By Material</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">PTFE Filters</h4>
                    <p className="text-gray-600">Chemical resistant for aggressive solvents</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Nylon Filters</h4>
                    <p className="text-gray-600">Broad chemical compatibility</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">PES Filters</h4>
                    <p className="text-gray-600">Low protein binding, hydrophilic</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">RC Filters</h4>
                    <p className="text-gray-600">Regenerated cellulose for aqueous samples</p>
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
                    <h4 className="font-semibold">HPLC Sample Prep</h4>
                    <p className="text-gray-600">Particle removal and sample clarification</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">GC Sample Prep</h4>
                    <p className="text-gray-600">Solvent-resistant filtration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">LC-MS Prep</h4>
                    <p className="text-gray-600">Low extractables for mass spectrometry</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Protein Analysis</h4>
                    <p className="text-gray-600">Low protein binding membranes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Product Statistics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Product <span className="text-primary">Range</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-gray-600">Filter Variants</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">8</div>
                <p className="text-gray-600">Membrane Types</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">10</div>
                <p className="text-gray-600">Pore Sizes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
                <p className="text-gray-600">Chromatography Labs</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Find Your CHROMAFIL Filter
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the perfect chromatography filter for your sample preparation needs with our specialized finder tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Search Filters
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