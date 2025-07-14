import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Microscope, Worm, Heart, Brain, TestTube, Timer, Target, Check, ArrowRight, Activity } from "lucide-react";

export default function MolecularDiagnostics() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
              <Microscope className="h-12 w-12 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Molecular <span className="text-secondary">Diagnostics</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Precision diagnostic solutions for disease detection and monitoring. Our comprehensive molecular 
            diagnostic platform delivers accurate, rapid results for infectious diseases, genetic disorders, and oncology applications.
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
                <CardTitle>High Sensitivity</CardTitle>
                <CardDescription>
                  Detect low levels of pathogens with exceptional accuracy
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Timer className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Rapid Results</CardTitle>
                <CardDescription>
                  Get reliable diagnostic results in under 2 hours
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Multiplexing</CardTitle>
                <CardDescription>
                  Simultaneous detection of multiple targets in one assay
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Diagnostic Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Diagnostic <span className="text-secondary">Solutions</span>
            </h2>
          </div>
          
          <Tabs defaultValue="infectious" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="infectious">Infectious Diseases</TabsTrigger>
              <TabsTrigger value="genetic">Genetic Testing</TabsTrigger>
              <TabsTrigger value="oncology">Oncology</TabsTrigger>
              <TabsTrigger value="cardiovascular">Cardiovascular</TabsTrigger>
            </TabsList>
            
            <TabsContent value="infectious" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Worm className="h-8 w-8 text-red-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Infectious Disease Testing</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive panel for rapid identification of bacterial, viral, and fungal pathogens 
                    with antimicrobial resistance profiling.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-red-600" />
                      <span>COVID-19, Influenza, RSV multiplex</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-red-600" />
                      <span>Hepatitis B, C, and HIV screening</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-red-600" />
                      <span>Antimicrobial resistance detection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-red-600" />
                      <span>Sexually transmitted infections panel</span>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Performance:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Sensitivity:</span>
                        <span className="font-medium ml-2">≥95%</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Specificity:</span>
                        <span className="font-medium ml-2">≥98%</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Turnaround:</span>
                        <span className="font-medium ml-2">1-2 hours</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Sample types:</span>
                        <span className="font-medium ml-2">Swab, Blood, Urine</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Infectious disease molecular diagnostics laboratory" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="genetic" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Genetic testing laboratory equipment" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <TestTube className="h-8 w-8 text-blue-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Genetic Testing</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive genetic analysis for inherited disorders, pharmacogenomics, 
                    and personalized medicine applications.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>Carrier screening panels</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>Pharmacogenomic testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>Hereditary cancer screening</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>Rare disease diagnostics</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Coverage:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Genes analyzed:</span>
                        <span className="font-medium ml-2">500+</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Variants detected:</span>
                        <span className="font-medium ml-2">SNPs, CNVs, Indels</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Turnaround:</span>
                        <span className="font-medium ml-2">7-14 days</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Sample type:</span>
                        <span className="font-medium ml-2">Blood, Saliva</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="oncology" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Activity className="h-8 w-8 text-purple-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Oncology Diagnostics</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Advanced molecular profiling for cancer diagnosis, prognosis, and treatment 
                    selection with liquid biopsy capabilities.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span>Tumor mutation profiling</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span>Liquid biopsy (ctDNA/ctRNA)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span>Minimal residual disease monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span>Companion diagnostics</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Applications:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Cancer types:</span>
                        <span className="font-medium ml-2">Solid tumors</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Biomarkers:</span>
                        <span className="font-medium ml-2">400+</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Detection limit:</span>
                        <span className="font-medium ml-2">0.1% VAF</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Turnaround:</span>
                        <span className="font-medium ml-2">3-5 days</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Oncology molecular diagnostics laboratory" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cardiovascular" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Cardiovascular diagnostics laboratory" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Cardiovascular Diagnostics</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Molecular markers for cardiovascular risk assessment, disease monitoring, 
                    and therapeutic guidance.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Cardiac biomarkers panel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Thrombophilia screening</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Lipid metabolism analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Hypertension genetics</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Panel Details:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Biomarkers:</span>
                        <span className="font-medium ml-2">25+ cardiac markers</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Risk stratification:</span>
                        <span className="font-medium ml-2">Low, Medium, High</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Turnaround:</span>
                        <span className="font-medium ml-2">4-6 hours</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Sample type:</span>
                        <span className="font-medium ml-2">Plasma, Serum</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Technology Platform */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Advanced <span className="text-secondary">Technology</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our molecular diagnostic platform combines multiple technologies for comprehensive 
                and accurate disease detection and monitoring.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">RT-PCR</h3>
                <p className="text-sm text-gray-600">Real-time PCR for rapid pathogen detection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">NGS</h3>
                <p className="text-sm text-gray-600">Next-generation sequencing for comprehensive analysis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Digital PCR</h3>
                <p className="text-sm text-gray-600">Absolute quantification with high precision</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Quality <span className="text-secondary">Assurance</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mx-auto mb-4 bg-primary text-primary-foreground">CAP Accredited</Badge>
                <CardTitle className="text-lg">Laboratory Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  College of American Pathologists accredited laboratory
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mx-auto mb-4 bg-accent text-accent-foreground">CLIA Certified</Badge>
                <CardTitle className="text-lg">Clinical Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Clinical Laboratory Improvement Amendments certified
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mx-auto mb-4 bg-secondary text-secondary-foreground">ISO 15189</Badge>
                <CardTitle className="text-lg">Quality Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Medical laboratory quality management system
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mx-auto mb-4 bg-success text-success-foreground">FDA Approved</Badge>
                <CardTitle className="text-lg">Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  FDA approved assays and diagnostic platforms
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Clinical Applications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Clinical <span className="text-secondary">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Emergency Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rapid diagnostic solutions for emergency departments and urgent care facilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sepsis biomarkers</li>
                  <li>• Cardiac emergency panels</li>
                  <li>• Respiratory pathogen detection</li>
                  <li>• Point-of-care testing</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Infectious Disease</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive pathogen identification and antimicrobial susceptibility testing.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Outbreak investigation</li>
                  <li>• Hospital-acquired infections</li>
                  <li>• Antimicrobial stewardship</li>
                  <li>• Vaccine monitoring</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Precision Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Personalized treatment selection based on molecular profiling and genetics.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pharmacogenomics</li>
                  <li>• Targeted therapy selection</li>
                  <li>• Treatment monitoring</li>
                  <li>• Adverse drug reaction prediction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Transform Your Diagnostic Capabilities
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to implement cutting-edge molecular diagnostics that improve patient 
            outcomes and streamline clinical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Explore Solutions
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
