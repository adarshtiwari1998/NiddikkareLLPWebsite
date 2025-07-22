import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, BarChart3, LineChart, TrendingUp, Shield, Target, Check, ArrowRight, FlaskConical } from "lucide-react";

export default function Chromatography() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center">
              <Activity className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Advanced <span className="text-secondary">Chromatography</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive chromatographic analysis solutions for separation, identification, and quantification. 
            From HPLC to GC-MS, covering all your analytical chemistry needs.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>High Resolution</CardTitle>
                <CardDescription>
                  Superior peak resolution for complex sample analysis
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Precision Analytics</CardTitle>
                <CardDescription>
                  Accurate quantitative and qualitative analysis capabilities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LineChart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Automated Workflows</CardTitle>
                <CardDescription>
                  Streamlined sample processing and data analysis
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Chromatography Techniques */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Chromatography <span className="text-secondary">Techniques</span>
            </h2>
          </div>
          
          <Tabs defaultValue="hplc" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="hplc">HPLC/UHPLC</TabsTrigger>
              <TabsTrigger value="gc">GC/GC-MS</TabsTrigger>
              <TabsTrigger value="ic">Ion Chromatography</TabsTrigger>
              <TabsTrigger value="tlc">TLC/HPTLC</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hplc" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-green-500" />
                      High Performance Liquid Chromatography
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Reversed-phase chromatography</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Normal-phase separations</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Size exclusion chromatography</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Ion exchange methods</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-green-500" />
                      Ultra High Performance LC
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Sub-2 μm particle columns</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Higher resolution and speed</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Reduced solvent consumption</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Enhanced sensitivity</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="gc" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-blue-500" />
                      Gas Chromatography
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Volatile compound analysis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Capillary column technology</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Multi-detector systems</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Headspace sampling</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-blue-500" />
                      GC-MS Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Structural identification</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Quantitative analysis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Library searching</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Trace level detection</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="ic" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-purple-500" />
                      Ion Chromatography
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Anion and cation analysis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Suppressed conductivity</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Environmental monitoring</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Water quality analysis</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-purple-500" />
                      Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Drinking water analysis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Food and beverage testing</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Pharmaceutical QC</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Power plant monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tlc" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <LineChart className="h-5 w-5 mr-2 text-orange-500" />
                      Thin Layer Chromatography
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Rapid screening methods</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Qualitative analysis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Cost-effective solutions</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Educational applications</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-orange-500" />
                      High Performance TLC
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Automated sample application</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Densitometric evaluation</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Quantitative results</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Pharmaceutical analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Industry <span className="text-secondary">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Pharmaceutical</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Drug purity analysis</li>
                  <li>• Impurity profiling</li>
                  <li>• Stability testing</li>
                  <li>• Bioanalytical methods</li>
                  <li>• Formulation development</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Food & Beverage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Nutritional analysis</li>
                  <li>• Pesticide residues</li>
                  <li>• Flavor compounds</li>
                  <li>• Adulterant detection</li>
                  <li>• Quality control</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Environmental</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Water contamination</li>
                  <li>• Air quality monitoring</li>
                  <li>• Soil analysis</li>
                  <li>• Pollutant identification</li>
                  <li>• Remediation monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Technical <span className="text-secondary">Specifications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-500 mb-2">1</div>
                <p className="text-gray-600">ppm Detection</p>
                <p className="text-sm text-gray-500">Sensitivity</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">0.1%</div>
                <p className="text-gray-600">RSD Precision</p>
                <p className="text-sm text-gray-500">Repeatability</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">10,000</div>
                <p className="text-gray-600">Theoretical</p>
                <p className="text-sm text-gray-500">Plates</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-success mb-2">24/7</div>
                <p className="text-gray-600">Operation</p>
                <p className="text-sm text-gray-500">Uptime</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-green-500/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Enhance Your Analytical Capabilities?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our chromatography solutions can improve your analytical workflow and data quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              Consult Our Experts
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Product Catalog
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}