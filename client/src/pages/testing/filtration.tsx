import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Droplets, FlaskConical, Activity, Shield, Target, Check, ArrowRight, Beaker } from "lucide-react";

export default function Filtration() {
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
            Advanced <span className="text-primary">Filtration</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive filtration solutions for laboratory and industrial applications. 
            From precision membrane filtration to advanced purification systems.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Precision Filtration</CardTitle>
                <CardDescription>
                  High-precision membrane filtration for critical applications
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Sterile Processing</CardTitle>
                <CardDescription>
                  Sterile filtration systems for pharmaceutical and biotech industries
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Real-time Monitoring</CardTitle>
                <CardDescription>
                  Advanced monitoring systems for filtration efficiency
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Filtration <span className="text-primary">Solutions</span>
            </h2>
          </div>
          
          <Tabs defaultValue="membrane" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="membrane">Membrane Filtration</TabsTrigger>
              <TabsTrigger value="sterile">Sterile Filtration</TabsTrigger>
              <TabsTrigger value="water">Water Filtration</TabsTrigger>
              <TabsTrigger value="air">Air Filtration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="membrane" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-primary" />
                      Ultrafiltration Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Protein concentration and purification</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Buffer exchange and desalting</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Molecular weight cutoff: 1K-1000K Da</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Cross-flow and dead-end configurations</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Beaker className="h-5 w-5 mr-2 text-primary" />
                      Microfiltration Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Cell harvesting and clarification</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Particle removal and sterilization</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Pore sizes: 0.1-10 μm</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />High throughput processing</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="sterile" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-primary" />
                      Sterile Filtration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />0.22 μm and 0.45 μm membranes</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Pharmaceutical grade materials</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Validated sterilization processes</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Single-use and reusable options</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Bioburden Reduction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Pre-filtration for bioburden control</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Multi-stage filtration systems</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Integrity testing capabilities</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Regulatory compliance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="water" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Droplets className="h-5 w-5 mr-2 text-accent" />
                      Water Purification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Ultra-pure water systems</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Reverse osmosis membranes</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Ion exchange resins</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />TOC and conductivity monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-accent" />
                      Laboratory Water
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Type I, II, and III water</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Point-of-use filtration</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Endotoxin removal</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Bacterial contamination control</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="air" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-primary" />
                      HEPA Filtration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />99.97% efficiency at 0.3 μm</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Cleanroom applications</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Laminar flow hoods</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Biosafety cabinet filtration</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-primary" />
                      ULPA Filtration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />99.999% efficiency at 0.12 μm</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Semiconductor cleanrooms</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Pharmaceutical manufacturing</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Critical process protection</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Technical <span className="text-primary">Specifications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Flow rates: 0.1-1000 L/min</li>
                  <li>• Pressure ratings: up to 6 bar</li>
                  <li>• Temperature range: 4-80°C</li>
                  <li>• pH compatibility: 2-12</li>
                  <li>• Bacterial retention: &gt;99.9%</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• PTFE membranes</li>
                  <li>• Nylon and PES filters</li>
                  <li>• Cellulose acetate</li>
                  <li>• Polycarbonate track-etch</li>
                  <li>• Stainless steel housings</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Pharmaceutical manufacturing</li>
                  <li>• Biotechnology processing</li>
                  <li>• Food and beverage</li>
                  <li>• Water treatment</li>
                  <li>• Environmental monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Optimize Your Filtration Process?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our filtration experts to discuss your specific requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Our Experts
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Download Specifications
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}