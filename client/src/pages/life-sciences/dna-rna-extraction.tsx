import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

        {/* Product Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Extraction <span className="text-secondary">Solutions</span>
            </h2>
          </div>
          
          <Tabs defaultValue="plant" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="plant">Plant DNA</TabsTrigger>
              <TabsTrigger value="blood">Blood DNA</TabsTrigger>
              <TabsTrigger value="viral">Viral RNA</TabsTrigger>
              <TabsTrigger value="cell">Cell Culture</TabsTrigger>
            </TabsList>
            
            <TabsContent value="plant" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                
                <div>
                  <img 
                    src="attached_assets/image_1752676114030.png" 
                    alt="Plant DNA extraction laboratory setup" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="blood" className="mt-8">
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
            </TabsContent>
            
            <TabsContent value="viral" className="mt-8">
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
                    src="https://images.unsplash.com/photo-1583912267550-a1d8b882eef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Viral RNA extraction laboratory" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cell" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Cell culture DNA extraction" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                
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
              </div>
            </TabsContent>
          </Tabs>
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

        {/* Complete Product List */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Complete Product <span className="text-secondary">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive DNA and RNA extraction solutions for all your research needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* DNA Extraction Products */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">DNA Extraction Kits</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Plant DNA Extraction Kit",
                  "Tissue DNA Extraction Kit", 
                  "Blood DNA Extraction Kit",
                  "Blood & Cell Culture DNA Extraction Kit",
                  "Gel & PCR Product Purification Kit"
                ].map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Dna className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-800">{product}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* RNA Extraction Products */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-600 mb-4">RNA Extraction Kits</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Plant RNA Extraction Kit",
                  "Tissue RNA Extraction Kit",
                  "Viral Nucleic Acid Extraction Kit",
                  "Blood & Cell Culture RNA Extraction Kit",
                  "Plasmid DNA Extraction Kit"
                ].map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <TestTube className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="font-medium text-gray-800">{product}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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

        {/* Product Cards Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Extraction Kit <span className="text-secondary">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive DNA and RNA extraction solutions with professional-grade performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Plant DNA Extraction Kit",
                description: "High-purity DNA extraction from plant tissues",
                icon: Leaf,
                purity: "≥99%",
                yield: "High",
                time: "45 min",
                samples: ["Leaves", "Stems", "Flowers", "Seeds"],
                applications: ["PCR", "Sequencing", "Genotyping", "Breeding"]
              },
              {
                title: "Tissue DNA Extraction Kit",
                description: "Optimized for animal tissue samples",
                icon: TestTube,
                purity: "≥98%",
                yield: "Excellent",
                time: "30 min",
                samples: ["Muscle", "Liver", "Kidney", "Brain"],
                applications: ["PCR", "Sequencing", "Cloning", "Genotyping"]
              },
              {
                title: "Blood DNA Extraction Kit",
                description: "Efficient DNA extraction from blood samples",
                icon: Droplet,
                purity: "≥97%",
                yield: "Very High",
                time: "30 min",
                samples: ["Whole blood", "EDTA blood", "Buffy coat"],
                applications: ["PCR", "Sequencing", "Diagnostics", "Research"]
              },
              {
                title: "Blood & Cell Culture DNA Extraction Kit",
                description: "Dual-purpose kit for blood and cultured cells",
                icon: Dna,
                purity: "≥98%",
                yield: "High",
                time: "25 min",
                samples: ["Blood", "Cultured cells", "Suspension cells"],
                applications: ["PCR", "Sequencing", "Cloning", "Transfection"]
              },
              {
                title: "Gel & PCR Product Purification Kit",
                description: "Purification of DNA from gels and PCR reactions",
                icon: Dna,
                purity: "≥95%",
                yield: "Good",
                time: "15 min",
                samples: ["Agarose gel", "PCR products", "Enzymatic reactions"],
                applications: ["Cloning", "Sequencing", "Ligation", "Transformation"]
              },
              {
                title: "Plant RNA Extraction Kit",
                description: "Specialized RNA extraction from plant tissues",
                icon: Leaf,
                purity: "≥98%",
                yield: "Excellent",
                time: "40 min",
                samples: ["Leaves", "Roots", "Fruits", "Seeds"],
                applications: ["RT-PCR", "RNA-seq", "Gene expression", "qPCR"]
              },
              {
                title: "Tissue RNA Extraction Kit",
                description: "High-quality RNA from animal tissues",
                icon: TestTube,
                purity: "≥97%",
                yield: "High",
                time: "35 min",
                samples: ["Muscle", "Liver", "Brain", "Heart"],
                applications: ["RT-PCR", "RNA-seq", "Gene expression", "Microarray"]
              },
              {
                title: "Viral Nucleic Acid Extraction Kit",
                description: "Extraction of viral DNA and RNA",
                icon: Worm,
                purity: "≥96%",
                yield: "Good",
                time: "25 min",
                samples: ["Serum", "Plasma", "Swabs", "Viral cultures"],
                applications: ["Viral load", "Diagnostics", "Surveillance", "Research"]
              },
              {
                title: "Blood & Cell Culture RNA Extraction Kit",
                description: "RNA extraction from blood and cultured cells",
                icon: Droplet,
                purity: "≥97%",
                yield: "High",
                time: "30 min",
                samples: ["Blood", "Cultured cells", "Primary cells"],
                applications: ["RT-PCR", "RNA-seq", "Gene expression", "Biomarkers"]
              },
              {
                title: "Plasmid DNA Extraction Kit",
                description: "Efficient plasmid DNA purification",
                icon: TestTube,
                purity: "≥95%",
                yield: "Very High",
                time: "15 min",
                samples: ["E. coli", "Bacterial cultures", "Transformed cells"],
                applications: ["Cloning", "Transfection", "Sequencing", "Mutagenesis"]
              }
            ].map((kit, index) => {
              const getGradientColor = (idx: number) => {
                const colors = [
                  'from-green-100 to-green-50 border-l-4 border-l-green-500',
                  'from-blue-100 to-blue-50 border-l-4 border-l-blue-500',
                  'from-yellow-100 to-yellow-50 border-l-4 border-l-yellow-500',
                  'from-purple-100 to-purple-50 border-l-4 border-l-purple-500',
                  'from-red-100 to-red-50 border-l-4 border-l-red-500',
                  'from-indigo-100 to-indigo-50 border-l-4 border-l-indigo-500',
                  'from-pink-100 to-pink-50 border-l-4 border-l-pink-500',
                  'from-teal-100 to-teal-50 border-l-4 border-l-teal-500',
                  'from-orange-100 to-orange-50 border-l-4 border-l-orange-500',
                  'from-cyan-100 to-cyan-50 border-l-4 border-l-cyan-500'
                ];
                return colors[idx % colors.length];
              };

              const getIconColor = (idx: number) => {
                const colors = [
                  'text-green-600',
                  'text-blue-600',
                  'text-yellow-600',
                  'text-purple-600',
                  'text-red-600',
                  'text-indigo-600',
                  'text-pink-600',
                  'text-teal-600',
                  'text-orange-600',
                  'text-cyan-600'
                ];
                return colors[index % colors.length];
              };

              return (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br ${getGradientColor(index)} border-r-4 border-r-gray-200 overflow-hidden relative`}>
                  {/* Background Shape */}
                  <div className="absolute bottom-0 right-0 opacity-10 transform rotate-12 translate-x-4 translate-y-4">
                    <kit.icon className="w-32 h-32 text-gray-600" />
                  </div>
                  
                  <CardHeader className="text-center pb-4">
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-white/40 to-transparent rounded-t-lg"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-white/60 rounded-full mb-4 shadow-sm backdrop-blur-sm`}>
                        <kit.icon className={`w-8 h-8 ${getIconColor(index)}`} />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-800">{kit.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">{kit.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-gray-800">{kit.purity}</div>
                          <div className="text-xs text-gray-600">Purity</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800">{kit.yield}</div>
                          <div className="text-xs text-gray-600">Yield</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800">{kit.time}</div>
                          <div className="text-xs text-gray-600">Time</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-gray-800">Sample Types:</h4>
                        <div className="flex flex-wrap gap-1">
                          {kit.samples.map((sample, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-white/50 border-gray-400">{sample}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-gray-800">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {kit.applications.map((app, idx) => (
                            <Badge key={idx} className="text-xs bg-orange-400 hover:bg-orange-500 text-white">{app}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Optimize Your Extraction Workflow
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our DNA/RNA extraction solutions can streamline your research workflow 
            and improve your experimental outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Browse Products
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Request Protocol
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
