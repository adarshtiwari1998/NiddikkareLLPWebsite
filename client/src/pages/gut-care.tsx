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

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-success" />
                </div>
                <CardTitle>Microbiome Analysis</CardTitle>
                <CardDescription>
                  Comprehensive gut microbiome profiling and analysis
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Therapeutic Solutions</CardTitle>
                <CardDescription>
                  Evidence-based treatments for digestive disorders
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Personalized Care</CardTitle>
                <CardDescription>
                  Individualized treatment plans based on gut health analysis
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
                  <img 
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Digestive health diagnostics laboratory" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="microbiome" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Microbiome analysis laboratory" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
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
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Therapeutic solutions for gut health" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="nutrition" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Nutritional analysis for gut health" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
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
              <img 
                src="https://images.unsplash.com/photo-1583912267550-a1d8b882eef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Gut health research laboratory" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Take Control of Your Digestive Health
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey to better digestive health with our comprehensive gut care solutions. 
            Get personalized insights and targeted treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-success hover:bg-success/90">
              Start Assessment
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
