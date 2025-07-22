import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Microscope, TestTube, Activity, Shield, Target, Check, ArrowRight, Brain } from "lucide-react";

export default function GutCare() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center">
              <Heart className="h-12 w-12 text-success" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            GUT <span className="text-secondary">Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Specialized gastrointestinal care solutions focusing on digestive health, microbiome analysis, 
            and therapeutic interventions. Our comprehensive platform supports both diagnostic and treatment approaches.
          </p>
        </section>

        {/* Statistics Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Impact in <span className="text-success">Gut Health</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by healthcare providers and patients worldwide for comprehensive digestive health solutions
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-success mb-2">95%</div>
                <div className="text-gray-600">Diagnostic Accuracy</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-gray-600">Biomarkers Tested</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">48h</div>
                <div className="text-gray-600">Turnaround Time</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
                <div className="text-gray-600">Patients Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our <span className="text-success">Gut Care</span> Solutions?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-success">
              <CardHeader>
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-success" />
                </div>
                <CardTitle>Advanced Microbiome Analysis</CardTitle>
                <CardDescription className="text-left">
                  • Comprehensive gut microbiome profiling<br/>
                  • 16S rRNA sequencing technology<br/>
                  • Bacterial diversity assessment<br/>
                  • Pathogen detection capabilities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Evidence-Based Therapeutics</CardTitle>
                <CardDescription className="text-left">
                  • Targeted probiotic formulations<br/>
                  • Digestive enzyme therapy<br/>
                  • Anti-inflammatory compounds<br/>
                  • Personalized treatment plans
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Personalized Nutrition Care</CardTitle>
                <CardDescription className="text-left">
                  • Individual microbiome profiles<br/>
                  • Customized dietary recommendations<br/>
                  • Food sensitivity guidance<br/>
                  • Ongoing health monitoring
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-secondary">Solutions</span>
            </h2>
          </div>
          
          <Tabs defaultValue="diagnostics" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
              <TabsTrigger value="microbiome">Microbiome</TabsTrigger>
              <TabsTrigger value="therapeutics">Therapeutics</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
            
            <TabsContent value="diagnostics" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <TestTube className="h-8 w-8 text-blue-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Digestive Health Diagnostics</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive diagnostic panel for gastrointestinal disorders including inflammatory 
                    bowel disease, celiac disease, and functional digestive disorders.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>Inflammatory biomarkers (CRP, calprotectin)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>Food sensitivity and allergy testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>Celiac disease screening</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>H. pylori detection</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Test Parameters:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Sample types:</span>
                        <span className="font-medium ml-2">Stool, Blood, Breath</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Biomarkers:</span>
                        <span className="font-medium ml-2">25+ parameters</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Turnaround:</span>
                        <span className="font-medium ml-2">2-3 days</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Accuracy:</span>
                        <span className="font-medium ml-2">≥95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8fafc'/%3E%3Cg transform='translate(50,50)'%3E%3Crect x='50' y='50' width='200' height='120' rx='10' fill='%233b82f6' opacity='0.1' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='100' cy='100' r='8' fill='%233b82f6'/%3E%3Ccircle cx='150' cy='90' r='6' fill='%2310b981'/%3E%3Ccircle cx='200' cy='110' r='7' fill='%23f59e0b'/%3E%3Ctext x='150' y='200' text-anchor='middle' font-size='14' fill='%23374151'%3EDiagnostic Testing%3C/text%3E%3C/g%3E%3C/svg%3E" 
                      alt="Digestive health diagnostics laboratory" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="microbiome" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 shadow-lg">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f9ff'/%3E%3Ccircle cx='200' cy='150' r='80' fill='%2306b6d4' opacity='0.1'/%3E%3Ccircle cx='160' cy='120' r='20' fill='%2306b6d4' opacity='0.3'/%3E%3Ccircle cx='240' cy='130' r='15' fill='%2310b981' opacity='0.4'/%3E%3Ccircle cx='180' cy='180' r='25' fill='%23f59e0b' opacity='0.3'/%3E%3Ctext x='200' y='220' text-anchor='middle' font-size='16' fill='%23374151'%3EGut Microbiome Analysis%3C/text%3E%3C/svg%3E" 
                      alt="Gut health research laboratory" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Microscope className="h-8 w-8 text-green-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Microbiome Analysis</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Advanced 16S rRNA sequencing and metagenomic analysis to profile gut microbiome 
                    composition and functional capacity.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Bacterial diversity assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Beneficial bacteria quantification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Pathogen detection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Functional pathway analysis</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Analysis Details:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Sequencing depth:</span>
                        <span className="font-medium ml-2">50K+ reads</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Taxa identified:</span>
                        <span className="font-medium ml-2">1000+ species</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Functional genes:</span>
                        <span className="font-medium ml-2">KEGG pathways</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Report time:</span>
                        <span className="font-medium ml-2">10-14 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="therapeutics" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Therapeutic Solutions</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Evidence-based therapeutic interventions including probiotics, prebiotics, 
                    and targeted treatments for digestive disorders.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span>Targeted probiotic formulations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span>Prebiotic fiber supplements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span>Digestive enzyme therapy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span>Anti-inflammatory compounds</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Treatment Options:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Probiotic strains:</span>
                        <span className="font-medium ml-2">20+ strains</span>
                      </div>
                      <div>
                        <span className="text-gray-600">CFU count:</span>
                        <span className="font-medium ml-2">10⁹-10¹¹/dose</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Delivery forms:</span>
                        <span className="font-medium ml-2">Capsules, Powders</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Shelf life:</span>
                        <span className="font-medium ml-2">24 months</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23fdf2f8'/%3E%3Cg transform='translate(50,50)'%3E%3Crect x='60' y='60' width='40' height='80' rx='20' fill='%23a855f7' opacity='0.6'/%3E%3Crect x='120' y='70' width='40' height='70' rx='20' fill='%236366f1' opacity='0.5'/%3E%3Crect x='180' y='50' width='40' height='90' rx='20' fill='%2310b981' opacity='0.7'/%3E%3Crect x='240' y='65' width='40' height='75' rx='20' fill='%23f59e0b' opacity='0.6'/%3E%3Ctext x='150' y='180' text-anchor='middle' font-size='14' fill='%23374151'%3ETherapeutic Solutions%3C/text%3E%3C/g%3E%3C/svg%3E" 
                      alt="Therapeutic solutions for gut health" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="nutrition" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 shadow-lg">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23fffbeb'/%3E%3Cg transform='translate(50,50)'%3E%3Ccircle cx='100' cy='100' r='30' fill='%23f59e0b' opacity='0.3'/%3E%3Ccircle cx='150' cy='80' r='20' fill='%2310b981' opacity='0.4'/%3E%3Ccircle cx='200' cy='110' r='25' fill='%23ef4444' opacity='0.3'/%3E%3Ccircle cx='120' cy='140' r='15' fill='%236366f1' opacity='0.4'/%3E%3Ccircle cx='180' cy='150' r='18' fill='%23a855f7' opacity='0.3'/%3E%3Ctext x='150' y='190' text-anchor='middle' font-size='14' fill='%23374151'%3ENutritional Analysis%3C/text%3E%3C/g%3E%3C/svg%3E" 
                      alt="Nutritional analysis for gut health" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Heart className="h-8 w-8 text-orange-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Nutritional Support</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Personalized nutrition recommendations based on gut health analysis and 
                    individual dietary needs for optimal digestive function.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-orange-600" />
                      <span>Personalized meal planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-orange-600" />
                      <span>Nutrient absorption optimization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-orange-600" />
                      <span>Food sensitivity guidance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-orange-600" />
                      <span>Supplement recommendations</span>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Program Features:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Dietary plans:</span>
                        <span className="font-medium ml-2">Customized</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Tracking:</span>
                        <span className="font-medium ml-2">Symptom monitoring</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Support:</span>
                        <span className="font-medium ml-2">Nutritionist guidance</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium ml-2">12-week program</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Gut-Brain Connection */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                The Gut-Brain <span className="text-secondary">Connection</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the bidirectional communication between the gut and brain is crucial 
                for comprehensive health management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Neurotransmitter Production</h3>
                <p className="text-sm text-gray-600">Gut bacteria produce key neurotransmitters</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Mood Regulation</h3>
                <p className="text-sm text-gray-600">Gut health impacts mood and mental well-being</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Immune Function</h3>
                <p className="text-sm text-gray-600">Gut microbiome modulates immune responses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Conditions <span className="text-secondary">We Address</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Irritable Bowel Syndrome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive management of IBS symptoms through microbiome analysis and targeted interventions.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">IBS-D</Badge>
                  <Badge variant="outline" className="mr-2">IBS-C</Badge>
                  <Badge variant="outline">IBS-M</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Inflammatory Bowel Disease</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Monitoring and management support for Crohn's disease and ulcerative colitis.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Crohn's</Badge>
                  <Badge variant="outline" className="mr-2">UC</Badge>
                  <Badge variant="outline">Colitis</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Functional Digestive Disorders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Treatment of various functional disorders affecting digestive health and quality of life.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Dyspepsia</Badge>
                  <Badge variant="outline" className="mr-2">GERD</Badge>
                  <Badge variant="outline">Gastroparesis</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research & Development */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Research & <span className="text-secondary">Development</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our ongoing research initiatives focus on advancing understanding of the gut microbiome 
                and developing innovative therapeutic approaches for digestive health.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Microbiome Therapeutics</h3>
                    <p className="text-gray-600">
                      Developing next-generation probiotics and targeted microbiome interventions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Gut-Brain Axis</h3>
                    <p className="text-gray-600">
                      Investigating the complex interactions between gut health and neurological function.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Activity className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Precision Medicine</h3>
                    <p className="text-gray-600">
                      Personalized treatment approaches based on individual microbiome profiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl p-8 shadow-lg">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0fdf4'/%3E%3Cg transform='translate(50,50)'%3E%3Ccircle cx='150' cy='100' r='60' fill='none' stroke='%2310b981' stroke-width='3' opacity='0.6'/%3E%3Ccircle cx='120' cy='80' r='12' fill='%2310b981' opacity='0.8'/%3E%3Ccircle cx='180' cy='90' r='10' fill='%2306b6d4' opacity='0.7'/%3E%3Ccircle cx='150' cy='120' r='8' fill='%23f59e0b' opacity='0.6'/%3E%3Cpath d='M100 140 Q150 110 200 140' stroke='%2310b981' stroke-width='2' fill='none' opacity='0.5'/%3E%3Ctext x='150' y='180' text-anchor='middle' font-size='14' fill='%23374151'%3EResearch %26 Development%3C/text%3E%3C/g%3E%3C/svg%3E" 
                  alt="Gut health research laboratory" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-success/5 via-white to-primary/5 rounded-xl shadow-xl p-12 border border-success/10">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-success" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Take Control of Your Digestive Health
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Start your journey to better digestive health with our comprehensive gut care 
              solutions. Get personalized insights and targeted treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-success hover:bg-success/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Assessment
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-success text-success hover:bg-success hover:text-white px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-success" />
                <span>Personalized Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-success" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-success" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
