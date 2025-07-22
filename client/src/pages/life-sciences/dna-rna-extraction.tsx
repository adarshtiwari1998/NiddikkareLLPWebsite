import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dna, Leaf, Droplet, Worm, TestTube, Timer, Target, Check, ArrowRight } from "lucide-react";

export default function DnaRnaExtraction() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
              <Dna className="h-12 w-12 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            DNA/RNA <span className="text-secondary">Extraction</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Advanced extraction kits and protocols for high-quality nucleic acid isolation. Our comprehensive 
            solutions deliver superior purity and yield for downstream molecular biology applications.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>High Purity</CardTitle>
                <CardDescription>
                  A260/280 ratio of 1.8-2.0 for optimal downstream applications
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Timer className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Fast Processing</CardTitle>
                <CardDescription>
                  Complete extraction in 30-45 minutes with minimal hands-on time
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>High Yield</CardTitle>
                <CardDescription>
                  Maximized nucleic acid recovery from diverse sample types
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Extraction Kit Portfolio */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Extraction Kit <span className="text-secondary">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive DNA and RNA extraction solutions with professional-grade performance
            </p>
          </div>

          {/* Portfolio Overview Cards */}
          <div className="mb-16">
            <img 
              src="@assets/image_1753167797181.png" 
              alt="Complete Extraction Kit Portfolio showing Plant DNA, Tissue DNA, Blood DNA, and Blood & Cell Culture DNA extraction kits" 
              className="rounded-xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          {/* Z-Pattern Layout for Individual Kits */}
          <div className="space-y-20">
            
            {/* Kit 1: Plant DNA Extraction - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="@assets/image_1753167745564.png" 
                  alt="Plant DNA extraction laboratory setup" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Plant DNA Extraction</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Specialized protocols for extracting high-quality DNA from various plant tissues 
                  including leaves, stems, flowers, and seeds.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Optimized for polysaccharide-rich samples</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Effective removal of polyphenols and proteins</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Suitable for downstream PCR and sequencing</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Sample size:</span>
                      <span className="font-medium ml-2">50-100mg</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Yield:</span>
                      <span className="font-medium ml-2">up to 25 μg</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Purity:</span>
                      <span className="font-medium ml-2">A260/280: 1.8-2.0</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">45 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kit 2: Viral RNA Extraction - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Worm className="h-8 w-8 text-blue-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Viral RNA Extraction</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Specialized protocols for isolating viral RNA from serum, plasma, urine, 
                  and other clinical samples with high sensitivity and specificity.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span>Preserves RNA integrity during extraction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span>Compatible with RT-PCR and sequencing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span>Broad spectrum viral detection</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Sample size:</span>
                      <span className="font-medium ml-2">200 μl</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Recovery:</span>
                      <span className="font-medium ml-2">up to 90%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Elution:</span>
                      <span className="font-medium ml-2">30-100 μl</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">35 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="@assets/image_1753167765565.png" 
                  alt="Viral RNA extraction laboratory" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Kit 3: Blood DNA Extraction - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Blood DNA extraction equipment" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Droplet className="h-8 w-8 text-red-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Blood DNA Extraction</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Efficient extraction from whole blood, EDTA-treated samples, and buffy coats 
                  with minimal contamination and maximum yield.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-red-600" />
                    <span>Compatible with fresh and frozen samples</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-red-600" />
                    <span>Removes hemoglobin and other inhibitors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-red-600" />
                    <span>High molecular weight DNA recovery</span>
                  </div>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Sample size:</span>
                      <span className="font-medium ml-2">200 μl</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Yield:</span>
                      <span className="font-medium ml-2">up to 6 μg</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Purity:</span>
                      <span className="font-medium ml-2">A260/280: 1.8-2.0</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">30 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kit 4: Cell Culture DNA - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <TestTube className="h-8 w-8 text-purple-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Cell Culture DNA</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Optimized extraction protocols for cultured cells including adherent and 
                  suspension cultures with high DNA quality and yield.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-purple-600" />
                    <span>Gentle lysis preserves DNA integrity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-purple-600" />
                    <span>Scalable from 10³ to 10⁷ cells</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-purple-600" />
                    <span>Compatible with various cell types</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Cell count:</span>
                      <span className="font-medium ml-2">10³-10⁷ cells</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Yield:</span>
                      <span className="font-medium ml-2">up to 15 μg</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Purity:</span>
                      <span className="font-medium ml-2">A260/280: 1.8-2.0</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">25 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Cell culture DNA extraction" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Silica-Based <span className="text-secondary">Technology</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our extraction kits utilize advanced silica-based spin column technology for consistent, 
                reproducible results with minimal cross-contamination risk.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Lysis</h3>
                <p className="text-sm text-gray-600">Optimized buffer system disrupts cell membranes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Binding</h3>
                <p className="text-sm text-gray-600">DNA selectively binds to silica matrix</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Washing</h3>
                <p className="text-sm text-gray-600">Removes contaminants and inhibitors</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">4</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Elution</h3>
                <p className="text-sm text-gray-600">Pure DNA recovered in low-salt buffer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Research <span className="text-secondary">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">PCR & qPCR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-quality DNA/RNA for amplification reactions with optimal sensitivity and specificity.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Real-time PCR</Badge>
                  <Badge variant="outline" className="mr-2">Endpoint PCR</Badge>
                  <Badge variant="outline">Multiplex PCR</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Next-Gen Sequencing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Library preparation for whole genome, exome, and targeted sequencing applications.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">WGS</Badge>
                  <Badge variant="outline" className="mr-2">Exome</Badge>
                  <Badge variant="outline">RNA-seq</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Cloning & Transfection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Pure DNA suitable for molecular cloning and cell transfection experiments.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Cloning</Badge>
                  <Badge variant="outline" className="mr-2">Transfection</Badge>
                  <Badge variant="outline">Transformation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Extraction?</h2>
            <p className="text-xl mb-6 opacity-90">
              Contact our technical team for personalized recommendations and protocol optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Protocols
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}