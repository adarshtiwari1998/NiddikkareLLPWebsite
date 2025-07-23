import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import SEO from "@/components/seo";
import { 
  Dna, 
  Microscope, 
  TestTube, 
  Activity, 
  Target, 
  Timer, 
  Check, 
  ArrowRight,
  Leaf,
  Worm,
  Heart,
  Brain,
  Droplets,
  FlaskConical,
  Zap,
  Shield
} from "lucide-react";

export default function LifeSciences() {
  const lifeScienceServices = [
    {
      id: "dna-rna-extraction",
      title: "DNA/RNA Extraction",
      description: "Advanced extraction kits and protocols for high-quality nucleic acid isolation",
      icon: Dna,
      href: "/life-sciences/dna-rna-extraction",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      features: ["High Purity A260/280 1.8-2.0", "Fast 30-45 min Processing", "High Yield Recovery", "Multiple Sample Types"],
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      stats: { solutions: "4+", focus: "Nucleic Acid Isolation" },
      applications: ["Plant DNA Extraction", "Animal Tissue RNA", "Bacterial DNA", "Viral RNA"]
    },
    {
      id: "molecular-diagnostics", 
      title: "Molecular Diagnostics",
      description: "Precision diagnostic solutions for disease detection and monitoring",
      icon: Microscope,
      href: "/life-sciences/molecular-diagnostics",
      color: "bg-teal-500",
      lightColor: "bg-teal-50", 
      features: ["High Sensitivity Detection", "Rapid Results <2 hours", "Multiplexing Capability", "Clinical Grade"],
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      stats: { solutions: "6+", focus: "Disease Detection" },
      applications: ["COVID-19 RT-PCR", "Infectious Disease Panel", "Genetic Testing", "Oncology Diagnostics"]
    }
  ];

  const technicalCapabilities = [
    {
      title: "Sample Processing",
      description: "Automated and manual processing workflows for diverse sample types",
      icon: TestTube,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      features: ["Blood, Tissue, Swabs", "Plant Materials", "Environmental Samples", "Cultured Cells"]
    },
    {
      title: "Analytical Performance",
      description: "Industry-leading sensitivity, specificity, and reproducibility",
      icon: Target,
      color: "text-green-600", 
      bgColor: "bg-green-100",
      features: ["LOD <10 copies/μL", "CV <5%", "Specificity >98%", "Dynamic Range 6-logs"]
    },
    {
      title: "Quality Control",
      description: "Comprehensive quality assurance and regulatory compliance",
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-100", 
      features: ["Internal Controls", "Positive/Negative Controls", "Calibrators", "Validation Protocols"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <SEO pagePath="/life-sciences" />
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-100/20 rounded-full"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-teal-100/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-blue-100/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-100/15 rounded-full"></div>
      </div>

      <div className="relative py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center">
                <FlaskConical className="h-14 w-14 text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-gray-800 mb-6">
              Life <span className="text-purple-600">Sciences</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8">
              Cutting-edge molecular biology solutions for research, diagnostics, and biotechnology applications. 
              From nucleic acid extraction to precision diagnostics, we provide the tools you need for scientific discovery.
            </p>
            
            {/* Key Stats */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Molecular Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">2</div>
                <div className="text-gray-600">Core Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600">Application Areas</div>
              </div>
            </div>
          </section>

          {/* Main Life Sciences Services */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Life Sciences <span className="text-purple-600">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive molecular biology platforms designed for research excellence and clinical precision
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {lifeScienceServices.map((service) => (
                <Card key={service.id} className="group overflow-hidden border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    {/* Image Section */}
                    <div className="aspect-[3/2] overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Overlay Stats */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-sm font-semibold text-gray-700">{service.stats.solutions} Solutions</div>
                      <div className="text-xs text-gray-500">{service.stats.focus}</div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 ${service.lightColor} rounded-xl flex items-center justify-center`}>
                        <service.icon className={`h-8 w-8 ${service.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Applications Preview */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3">Key Applications:</div>
                      <div className="space-y-2">
                        {service.applications.slice(0, 2).map((app, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">{app}</span>
                          </div>
                        ))}
                        <div className="text-xs text-gray-500 mt-2">+{service.applications.length - 2} more applications</div>
                      </div>
                    </div>

                    <Link href={service.href}>
                      <Button className={`w-full ${service.color} hover:opacity-90 text-white`}>
                        Explore {service.title}
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Capabilities */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Technical <span className="text-teal-600">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Advanced technical specifications and performance metrics that set our solutions apart in molecular biology research and diagnostics
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {technicalCapabilities.map((capability, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 ${capability.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <capability.icon className={`h-10 w-10 ${capability.color}`} />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3">Specifications:</div>
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Choose Our Life Sciences Solutions */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 lg:p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Why Choose Our Life Sciences Platform?
                </h2>
                <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                  We combine cutting-edge molecular biology expertise with rigorous quality control to deliver reliable, reproducible results
                </p>
              </div>

              <div className="grid lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Rapid Workflows</h3>
                  <p className="text-purple-100 text-sm">Optimized protocols for fast turnaround without compromising quality</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">High Precision</h3>
                  <p className="text-purple-100 text-sm">Exceptional sensitivity and specificity for reliable results</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FlaskConical className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Research Grade</h3>
                  <p className="text-purple-100 text-sm">Professional-quality reagents and kits for demanding applications</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Versatile Platform</h3>
                  <p className="text-purple-100 text-sm">Comprehensive solutions from extraction to detection and analysis</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-2 border-primary/10 bg-gradient-to-br from-purple-50 to-teal-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Ready to Advance Your Research?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Discover how our life sciences solutions can accelerate your research and improve diagnostic capabilities. 
                  Contact our technical team to find the right molecular biology tools for your applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Contact Technical Team
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/life-sciences/dna-rna-extraction">
                    <Button size="lg" variant="outline">
                      Browse DNA/RNA Solutions
                      <Dna className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}