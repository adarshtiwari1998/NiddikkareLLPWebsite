import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TestTube, Clock, Zap, Activity, Shield, Target, Check, ArrowRight, FlaskConical } from "lucide-react";
import SEO from "@/components/seo";

export default function RapidTests() {
  return (
    <div className="py-20 bg-gray-50">
      <SEO pagePath="/tools-testing/testing/rapid-tests" />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center">
              <TestTube className="h-12 w-12 text-orange-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Rapid <span className="text-primary">Tests</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Fast, accurate, and reliable diagnostic testing solutions for immediate results. 
            From point-of-care testing to high-throughput screening systems.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle>Ultra-Fast Results</CardTitle>
                <CardDescription>
                  Get accurate results in minutes, not hours or days
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>High Sensitivity</CardTitle>
                <CardDescription>
                  Detect even the smallest concentrations with precision
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Real-Time Monitoring</CardTitle>
                <CardDescription>
                  Continuous monitoring and instant alerts for critical parameters
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Test Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Rapid Testing <span className="text-primary">Solutions</span>
            </h2>
          </div>
          
          <Tabs defaultValue="infectious" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="infectious">Infectious Disease</TabsTrigger>
              <TabsTrigger value="cardiac">Cardiac Markers</TabsTrigger>
              <TabsTrigger value="drugs">Drug Testing</TabsTrigger>
              <TabsTrigger value="pregnancy">Pregnancy Tests</TabsTrigger>
            </TabsList>
            
            <TabsContent value="infectious" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TestTube className="h-5 w-5 mr-2 text-orange-500" />
                      COVID-19 Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Antigen rapid tests (15 minutes)</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />RT-PCR rapid tests (30 minutes)</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Antibody detection tests</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />High sensitivity and specificity</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-orange-500" />
                      Respiratory Pathogens
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Influenza A/B detection</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />RSV rapid testing</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Strep A detection</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Multiplex respiratory panels</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="cardiac" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-red-500" />
                      Troponin Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />High-sensitivity troponin I</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Quantitative results in 10 minutes</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Point-of-care compatibility</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Emergency department ready</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-red-500" />
                      BNP/NT-proBNP
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Heart failure diagnosis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Prognostic monitoring</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Rapid turnaround time</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Clinical decision support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="drugs" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-primary" />
                      Workplace Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Multi-drug panel screening</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Saliva and urine tests</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />DOT compliance ready</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Chain of custody support</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TestTube className="h-5 w-5 mr-2 text-primary" />
                      Therapeutic Monitoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Therapeutic drug levels</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Personalized dosing</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Toxicity prevention</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Real-time adjustments</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="pregnancy" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-pink-500" />
                      hCG Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Early pregnancy detection</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />High sensitivity (10 mIU/mL)</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Results in 3 minutes</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />99% accuracy rate</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-pink-500" />
                      Prenatal Markers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Alpha-fetoprotein (AFP)</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />PAPP-A screening</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Free beta-hCG</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Risk assessment support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Technology Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Advanced <span className="text-primary">Technology</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Lateral Flow Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Immunochromatographic assays</li>
                  <li>• Gold nanoparticle detection</li>
                  <li>• Visual and digital readouts</li>
                  <li>• Room temperature storage</li>
                  <li>• No instrument required</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Fluorescence Immunoassay</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Enhanced sensitivity</li>
                  <li>• Quantitative results</li>
                  <li>• Automated readers</li>
                  <li>• Quality control built-in</li>
                  <li>• Data connectivity</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Molecular Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• PCR-based detection</li>
                  <li>• Isothermal amplification</li>
                  <li>• Multiplexed testing</li>
                  <li>• Automated workflows</li>
                  <li>• High throughput options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Performance <span className="text-primary">Metrics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">15</div>
                <p className="text-gray-600">Minutes Average</p>
                <p className="text-sm text-gray-500">Result Time</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">99.5%</div>
                <p className="text-gray-600">Average Accuracy</p>
                <p className="text-sm text-gray-500">All Tests</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">95%</div>
                <p className="text-gray-600">Sensitivity</p>
                <p className="text-sm text-gray-500">Detection Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-success mb-2">98%</div>
                <p className="text-gray-600">Specificity</p>
                <p className="text-sm text-gray-500">True Negative</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-orange-500/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Need Fast, Accurate Testing Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our rapid testing solutions can improve your diagnostic capabilities and patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Request Demo
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Test Catalog
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}