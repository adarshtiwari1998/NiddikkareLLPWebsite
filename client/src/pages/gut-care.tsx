import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Microscope, TestTube, Activity, Shield, Target, Check, ArrowRight, Brain } from "lucide-react";
import SEO from "@/components/seo";

export default function GutCare() {
  return (
    <div className="py-20 bg-gray-50">
      <SEO pagePath="/gut-care" />
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
                Our Impact in <span className="text-primary">Gut Health</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by healthcare providers and patients worldwide for comprehensive digestive health solutions
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">Diagnostic Accuracy</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-gray-600">Biomarkers Tested</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">48h</div>
                <div className="text-gray-600">Turnaround Time</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-gray-600">Patients Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our <span className="text-primary">Gut Care</span> Solutions?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-primary" />
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
            
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-primary" />
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
              Our <span className="text-primary">Solutions</span>
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
                    <TestTube className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold text-gray-800">Digestive Health Diagnostics</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive diagnostic panel for gastrointestinal disorders including inflammatory 
                    bowel disease, celiac disease, and functional digestive disorders.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Inflammatory biomarkers (CRP, calprotectin)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Food sensitivity and allergy testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Celiac disease screening</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>H. pylori detection</span>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg">
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
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg">
                    <div className="w-full h-64 bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect width="400" height="300" fill="#f8fafc"/>
                        
                        <g transform="translate(50,50)">
                          {/* Diagnostic equipment */}
                          <rect x="50" y="50" width="200" height="120" rx="10" fill="hsl(134, 37%, 27%)" opacity="0.1" stroke="hsl(134, 37%, 27%)" strokeWidth="2"/>
                          
                          {/* Sample results */}
                          <circle cx="100" cy="100" r="8" fill="hsl(134, 37%, 27%)"/>
                          <circle cx="150" cy="90" r="6" fill="#10b981"/>
                          <circle cx="200" cy="110" r="7" fill="#f59e0b"/>
                          <circle cx="120" cy="130" r="5" fill="#a855f7"/>
                          <circle cx="180" cy="130" r="6" fill="#ef4444"/>
                          
                          {/* Chart lines */}
                          <path d="M70 180 Q120 160 170 170 Q220 165 270 155" stroke="hsl(134, 37%, 27%)" strokeWidth="2" fill="none" opacity="0.6"/>
                        </g>
                        
                        <text x="200" y="260" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">
                          Diagnostic Testing
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="microbiome" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg">
                    <div className="w-full h-64 bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect width="400" height="300" fill="#f8fafc"/>
                        
                        {/* Microbiome visualization */}
                        <circle cx="200" cy="150" r="80" fill="hsl(134, 37%, 27%)" opacity="0.1"/>
                        <circle cx="160" cy="120" r="20" fill="hsl(134, 37%, 27%)" opacity="0.3"/>
                        <circle cx="240" cy="130" r="15" fill="#10b981" opacity="0.4"/>
                        <circle cx="180" cy="180" r="25" fill="#f59e0b" opacity="0.3"/>
                        <circle cx="220" cy="170" r="12" fill="#a855f7" opacity="0.4"/>
                        <circle cx="170" cy="140" r="8" fill="#ef4444" opacity="0.3"/>
                        
                        <text x="200" y="260" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">
                          Gut Microbiome Analysis
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Microscope className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold text-gray-800">Microbiome Analysis</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Advanced 16S rRNA sequencing and metagenomic analysis to profile gut microbiome 
                    composition and functional capacity.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Bacterial diversity assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Beneficial bacteria quantification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Pathogen detection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Functional pathway analysis</span>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg">
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
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold text-gray-800">Therapeutic Solutions</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Evidence-based therapeutic interventions including probiotics, prebiotics, 
                    and targeted treatments for digestive disorders.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Targeted probiotic formulations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Prebiotic fiber supplements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Digestive enzyme therapy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Anti-inflammatory compounds</span>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg">
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
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg">
                    <div className="w-full h-64 bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect width="400" height="300" fill="#f8fafc"/>
                        
                        <g transform="translate(50,50)">
                          {/* Therapeutic compounds */}
                          <rect x="60" y="60" width="40" height="80" rx="20" fill="hsl(134, 37%, 27%)" opacity="0.6"/>
                          <rect x="120" y="70" width="40" height="70" rx="20" fill="hsl(134, 37%, 27%)" opacity="0.5"/>
                          <rect x="180" y="50" width="40" height="90" rx="20" fill="#10b981" opacity="0.7"/>
                          <rect x="240" y="65" width="40" height="75" rx="20" fill="#f59e0b" opacity="0.6"/>
                          
                          {/* Connection lines showing interactions */}
                          <path d="M80 150 Q150 130 220 150" stroke="hsl(134, 37%, 27%)" strokeWidth="2" fill="none" opacity="0.4"/>
                          <path d="M140 140 Q200 120 260 140" stroke="hsl(134, 37%, 27%)" strokeWidth="2" fill="none" opacity="0.4"/>
                        </g>
                        
                        <text x="200" y="260" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">
                          Therapeutic Solutions
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="nutrition" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg">
                    <div className="w-full h-64 bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect width="400" height="300" fill="#fffbeb"/>
                        
                        <g transform="translate(50,50)">
                          {/* Nutritional elements */}
                          <circle cx="100" cy="100" r="30" fill="#f59e0b" opacity="0.3"/>
                          <circle cx="150" cy="80" r="20" fill="#10b981" opacity="0.4"/>
                          <circle cx="200" cy="110" r="25" fill="#ef4444" opacity="0.3"/>
                          <circle cx="120" cy="140" r="15" fill="#6366f1" opacity="0.4"/>
                          <circle cx="180" cy="150" r="18" fill="#a855f7" opacity="0.3"/>
                          <circle cx="250" cy="100" r="22" fill="#06b6d4" opacity="0.3"/>
                          
                          {/* Nutritional flow paths */}
                          <path d="M70 130 Q130 110 190 130 Q250 120 300 110" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.4"/>
                          <path d="M90 160 Q150 140 210 160" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4"/>
                        </g>
                        
                        <text x="200" y="260" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">
                          Nutritional Analysis
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold text-gray-800">Nutritional Support</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Personalized nutrition recommendations based on gut health analysis and 
                    individual dietary needs for optimal digestive function.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Personalized meal planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Nutrient absorption optimization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Food sensitivity guidance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Supplement recommendations</span>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg">
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
                The Gut-Brain <span className="text-primary">Connection</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the bidirectional communication between the gut and brain is crucial 
                for comprehensive health management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Neurotransmitter Production</h3>
                <p className="text-sm text-gray-600">Gut bacteria produce key neurotransmitters</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Mood Regulation</h3>
                <p className="text-sm text-gray-600">Gut health impacts mood and mental well-being</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
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
              Conditions <span className="text-primary">We Address</span>
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
                Research & <span className="text-primary">Development</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our ongoing research initiatives focus on advancing understanding of the gut microbiome 
                and developing innovative therapeutic approaches for digestive health.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Microbiome Therapeutics</h3>
                    <p className="text-gray-600">
                      Developing next-generation probiotics and targeted microbiome interventions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Gut-Brain Axis</h3>
                    <p className="text-gray-600">
                      Investigating the complex interactions between gut health and neurological function.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Activity className="h-6 w-6 text-primary" />
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
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg">
                <div className="w-full h-64 bg-white rounded-lg shadow-inner flex items-center justify-center relative overflow-hidden">
                  {/* Laboratory illustration */}
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <rect width="400" height="300" fill="#f0fdf4"/>
                    
                    {/* Laboratory equipment */}
                    <g transform="translate(50,50)">
                      {/* Microscope */}
                      <rect x="80" y="120" width="40" height="80" rx="5" fill="#10b981" opacity="0.8"/>
                      <circle cx="100" cy="110" r="15" fill="#10b981" opacity="0.6"/>
                      <rect x="95" y="95" width="10" height="20" fill="#10b981"/>
                      
                      {/* Test tubes */}
                      <rect x="150" y="140" width="12" height="50" rx="6" fill="#06b6d4" opacity="0.7"/>
                      <rect x="168" y="135" width="12" height="55" rx="6" fill="#f59e0b" opacity="0.7"/>
                      <rect x="186" y="145" width="12" height="45" rx="6" fill="#a855f7" opacity="0.7"/>
                      
                      {/* Petri dishes */}
                      <circle cx="240" cy="140" r="20" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.6"/>
                      <circle cx="280" cy="130" r="15" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.6"/>
                      
                      {/* Research data visualization */}
                      <path d="M50 200 Q100 180 150 190 Q200 185 250 175 Q300 170 350 165" 
                            stroke="#10b981" strokeWidth="3" fill="none" opacity="0.5"/>
                      <circle cx="100" cy="185" r="3" fill="#10b981"/>
                      <circle cx="200" cy="180" r="3" fill="#06b6d4"/>
                      <circle cx="300" cy="170" r="3" fill="#f59e0b"/>
                    </g>
                    
                    <text x="200" y="260" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">
                      Gut Health Research Laboratory
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-primary/5 via-white to-primary/10 rounded-xl shadow-xl p-12 border border-primary/10">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-primary" />
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
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Assessment
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Personalized Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
