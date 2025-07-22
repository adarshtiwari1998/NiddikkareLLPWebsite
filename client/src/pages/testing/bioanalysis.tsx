import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dna, Microscope, FlaskConical, Activity, Shield, Target, Check, ArrowRight, Beaker, TestTube } from "lucide-react";

export default function Bioanalysis() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center">
              <Dna className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Advanced <span className="text-secondary">Bioanalysis</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive bioanalytical solutions for drug development, biomarker discovery, and molecular diagnostics. 
            From protein quantification to genomic analysis, supporting your research and clinical needs.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>High Sensitivity</CardTitle>
                <CardDescription>
                  Detect and quantify biomolecules at ultra-low concentrations
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Regulatory Compliance</CardTitle>
                <CardDescription>
                  FDA and EMA validated methods for pharmaceutical applications
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Automated Workflows</CardTitle>
                <CardDescription>
                  Streamlined sample processing and data analysis pipelines
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Analysis Methods */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Bioanalytical <span className="text-secondary">Methods</span>
            </h2>
          </div>
          
          <Tabs defaultValue="protein" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="protein">Protein Analysis</TabsTrigger>
              <TabsTrigger value="genomics">Genomics</TabsTrigger>
              <TabsTrigger value="metabolomics">Metabolomics</TabsTrigger>
              <TabsTrigger value="biomarkers">Biomarkers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="protein" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-purple-500" />
                      Protein Quantification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />LC-MS/MS protein assays</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Immunoassay development</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Therapeutic protein monitoring</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Bioavailability studies</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Beaker className="h-5 w-5 mr-2 text-purple-500" />
                      Protein Characterization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Structural analysis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Post-translational modifications</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Protein-protein interactions</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Stability assessments</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="genomics" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Dna className="h-5 w-5 mr-2 text-blue-500" />
                      DNA/RNA Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Next-generation sequencing</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />qPCR and digital PCR</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Gene expression profiling</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Variant calling and annotation</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-blue-500" />
                      Pharmacogenomics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />ADME gene analysis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Drug response prediction</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Personalized medicine</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Clinical trial stratification</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="metabolomics" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TestTube className="h-5 w-5 mr-2 text-green-500" />
                      Metabolite Profiling
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />LC-MS metabolomics</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />GC-MS analysis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Targeted metabolomics</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Pathway analysis</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-green-500" />
                      Clinical Metabolomics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Disease biomarker discovery</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Drug metabolism studies</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Toxicity assessment</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Nutritional analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="biomarkers" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-red-500" />
                      Disease Biomarkers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Cancer biomarkers</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Cardiovascular markers</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Neurological indicators</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Inflammatory markers</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-red-500" />
                      Drug Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Efficacy biomarkers</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Safety biomarkers</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Pharmacodynamic markers</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Companion diagnostics</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Technology Platforms */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Technology <span className="text-secondary">Platforms</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Mass Spectrometry</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• High-resolution LC-MS/MS</li>
                  <li>• Triple quadrupole systems</li>
                  <li>• QTOF and Orbitrap</li>
                  <li>• MALDI-TOF imaging</li>
                  <li>• Ion mobility spectrometry</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Genomic Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Illumina sequencing</li>
                  <li>• Oxford Nanopore</li>
                  <li>• PacBio long-read</li>
                  <li>• Microarray platforms</li>
                  <li>• Single-cell analysis</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Immunoassays</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• ELISA and MSD platforms</li>
                  <li>• Luminex multiplex</li>
                  <li>• Flow cytometry</li>
                  <li>• Electrochemiluminescence</li>
                  <li>• Lateral flow assays</li>
                </ul>
              </CardContent>
            </Card>
          </div>
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
                <CardTitle className="text-xl">Drug Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Preclinical bioanalysis</li>
                  <li>• Clinical trial support</li>
                  <li>• Bioequivalence studies</li>
                  <li>• Immunogenicity testing</li>
                  <li>• Regulatory submissions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Clinical Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Companion diagnostics</li>
                  <li>• Liquid biopsy</li>
                  <li>• Precision medicine</li>
                  <li>• Point-of-care testing</li>
                  <li>• Laboratory automation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Research & Academia</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Biomarker discovery</li>
                  <li>• Mechanistic studies</li>
                  <li>• Systems biology</li>
                  <li>• Translational research</li>
                  <li>• Multi-omics integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Performance <span className="text-secondary">Metrics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-500 mb-2">pg/mL</div>
                <p className="text-gray-600">Detection Limit</p>
                <p className="text-sm text-gray-500">Ultra-sensitive</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <p className="text-gray-600">Log Dynamic Range</p>
                <p className="text-sm text-gray-500">Quantification</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">&lt;5%</div>
                <p className="text-gray-600">CV Precision</p>
                <p className="text-sm text-gray-500">Repeatability</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-success mb-2">24h</div>
                <p className="text-gray-600">Turnaround Time</p>
                <p className="text-sm text-gray-500">Standard Assays</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-purple-500/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Advance Your Bioanalytical Capabilities?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with our bioanalytical experts to accelerate your research and development programs with cutting-edge analytical solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
              Discuss Your Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Request Quote
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}