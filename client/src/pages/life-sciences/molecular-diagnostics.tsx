import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

        {/* Molecular Diagnostics Portfolio */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Product List
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive molecular diagnostics solutions for clinical laboratories and healthcare providers
            </p>
          </div>

          {/* Z-Pattern Layout for Individual Products */}
          <div className="space-y-20">
            
            {/* Product 1: SARS-CoV-2 (COVID-19) RT-PCR Kit - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="COVID-19 RT-PCR testing laboratory setup" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Worm className="h-8 w-8 text-blue-600" />
                  <h3 className="text-3xl font-bold text-gray-800">SARS-CoV-2 (COVID-19) RT-PCR Kit</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  High-sensitivity real-time RT-PCR assay for detection of SARS-CoV-2 RNA in respiratory specimens 
                  with rapid turnaround time and excellent analytical performance.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span>Targets N, E, and RdRp genes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span>Internal control included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span>Multiple specimen types supported</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
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
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">2 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Nasopharyngeal swab</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2: Hepatitis C Virus (HCV) Quantitative Kit - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <TestTube className="h-8 w-8 text-red-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Hepatitis C Virus (HCV) Quantitative Kit</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Precise quantification of HCV RNA for treatment monitoring and management with broad genotype 
                  coverage and excellent linearity across the clinical range.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-red-600" />
                    <span>All HCV genotypes coverage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-red-600" />
                    <span>Wide dynamic range</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-red-600" />
                    <span>Treatment monitoring optimized</span>
                  </div>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Range:</span>
                      <span className="font-medium ml-2">15-1×10⁸ IU/mL</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Linearity:</span>
                      <span className="font-medium ml-2">R² ≥0.99</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">3 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Plasma/Serum</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Hepatitis C virus quantitative testing laboratory" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Product 3: Human Papillomavirus (HPV) genotyping - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="HPV genotyping molecular diagnostics equipment" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Microscope className="h-8 w-8 text-purple-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Human Papillomavirus (HPV) Genotyping</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Comprehensive HPV genotyping assay for cervical cancer screening and management 
                  with individual detection of high-risk HPV types.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-purple-600" />
                    <span>14 high-risk HPV types detected</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-purple-600" />
                    <span>Individual genotype identification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-purple-600" />
                    <span>Liquid-based cytology compatible</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">HPV types:</span>
                      <span className="font-medium ml-2">16, 18, 31, 33, +10 more</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sensitivity:</span>
                      <span className="font-medium ml-2">≥95%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">4 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Cervical specimens</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 4: Human Immunodeficiency Virus (HIV) - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="h-8 w-8 text-orange-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Human Immunodeficiency Virus (HIV)</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Highly sensitive HIV detection and viral load monitoring assay for diagnosis, 
                  treatment monitoring, and disease progression assessment.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span>HIV-1 and HIV-2 detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span>Viral load quantification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span>Treatment response monitoring</span>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Detection:</span>
                      <span className="font-medium ml-2">HIV-1/2</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sensitivity:</span>
                      <span className="font-medium ml-2">≥98%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">3 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Plasma/Serum</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="HIV molecular diagnostics testing laboratory" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Product 5: Dengue, Chikungunya - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Dengue and Chikungunya molecular diagnostics setup" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Worm className="h-8 w-8 text-yellow-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Dengue, Chikungunya</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Multiplex assay for simultaneous detection and differentiation of Dengue virus 
                  and Chikungunya virus for rapid tropical disease diagnosis.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-yellow-600" />
                    <span>Dengue serotype differentiation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-yellow-600" />
                    <span>Chikungunya virus detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-yellow-600" />
                    <span>Early infection detection</span>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Targets:</span>
                      <span className="font-medium ml-2">DENV 1-4, CHIKV</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sensitivity:</span>
                      <span className="font-medium ml-2">≥96%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">2.5 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Serum/Plasma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 6: Monkeypox Flu - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <TestTube className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Monkeypox Flu</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Rapid detection assay for Monkeypox virus and influenza co-detection 
                  for differential diagnosis during outbreak scenarios.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-indigo-600" />
                    <span>Monkeypox virus detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-indigo-600" />
                    <span>Influenza A/B detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-indigo-600" />
                    <span>Outbreak response optimized</span>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Targets:</span>
                      <span className="font-medium ml-2">MPXV, FluA, FluB</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sensitivity:</span>
                      <span className="font-medium ml-2">≥97%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">1.5 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Swab, Lesion</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Monkeypox and Flu molecular diagnostics laboratory" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Product 7: Hepatitis B Virus (HBV) Quantitative - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Hepatitis B virus quantitative testing laboratory" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="h-8 w-8 text-teal-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Hepatitis B Virus (HBV) Quantitative</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Accurate quantification of HBV DNA for chronic hepatitis B monitoring, 
                  treatment response assessment, and viral load management.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-teal-600" />
                    <span>Wide dynamic range detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-teal-600" />
                    <span>Treatment monitoring optimized</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-teal-600" />
                    <span>Drug resistance mutation detection</span>
                  </div>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Range:</span>
                      <span className="font-medium ml-2">20-1×10⁹ IU/mL</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sensitivity:</span>
                      <span className="font-medium ml-2">≥96%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">3.5 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Plasma/Serum</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 8: HBV & HCV & HIV-1 Quantitative - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Microscope className="h-8 w-8 text-pink-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Hepatitis B Virus & Hepatitis C Virus & HIV-1 Quantitative</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Comprehensive multiplex assay for simultaneous quantification of HBV, HCV, 
                  and HIV-1 viral loads in a single reaction for efficient co-infection monitoring.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-pink-600" />
                    <span>Triple viral load quantification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-pink-600" />
                    <span>Co-infection monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-pink-600" />
                    <span>Cost-effective multiplexing</span>
                  </div>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Targets:</span>
                      <span className="font-medium ml-2">HBV, HCV, HIV-1</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sensitivity:</span>
                      <span className="font-medium ml-2">≥95%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">4 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Plasma/Serum</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Triple viral load quantification laboratory setup" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Product 9: Mycobacterium Tuberculosis (MTB) - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Mycobacterium tuberculosis molecular diagnostics laboratory" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <TestTube className="h-8 w-8 text-green-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Mycobacterium Tuberculosis (MTB)</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Rapid molecular detection of Mycobacterium tuberculosis complex with drug 
                  resistance profiling for prompt tuberculosis diagnosis and treatment guidance.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>MTB complex identification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Drug resistance profiling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Direct sputum testing</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Detection:</span>
                      <span className="font-medium ml-2">MTB + Resistance</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sensitivity:</span>
                      <span className="font-medium ml-2">≥98%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">2 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Sputum, BAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 10: Swine Flu, H1A-H7 - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Worm className="h-8 w-8 text-cyan-600" />
                  <h3 className="text-3xl font-bold text-gray-800">Swine Flu, H1A-H7</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Comprehensive influenza subtyping assay for detection and differentiation 
                  of swine flu and avian influenza subtypes H1A through H7 for pandemic preparedness.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-cyan-600" />
                    <span>Swine influenza detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-cyan-600" />
                    <span>H1A-H7 subtype differentiation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-cyan-600" />
                    <span>Pandemic surveillance ready</span>
                  </div>
                </div>
                
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Subtypes:</span>
                      <span className="font-medium ml-2">H1A-H7, Swine Flu</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sensitivity:</span>
                      <span className="font-medium ml-2">≥96%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium ml-2">2.5 hours</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sample:</span>
                      <span className="font-medium ml-2">Respiratory swabs</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Swine flu and avian influenza molecular diagnostics laboratory" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

          </div>
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
