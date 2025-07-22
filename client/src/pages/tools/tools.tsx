import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  BookOpen, 
  FileText, 
  Database, 
  Filter, 
  TestTube, 
  Droplet, 
  FlaskConical, 
  Microscope,
  Settings,
  ArrowRight,
  Zap,
  Search,
  Target,
  BarChart3,
  Clock
} from "lucide-react";

export default function Tools() {
  const toolCategories = [
    {
      title: "Digital Solutions",
      description: "Advanced digital tools for modern laboratory workflows",
      tools: [
        {
          href: "/tools/e-training",
          title: "E-Learning Resources",
          description: "Comprehensive educational materials and resources for laboratory professionals",
          icon: BookOpen,
          features: ["200+ Educational Articles", "150+ Technical Guides", "Video Tutorials", "24/7 Access"]
        },
        {
          href: "/tools/sample-request",
          title: "Sample Request System",
          description: "Streamlined sample request and tracking system with real-time monitoring",
          icon: FileText,
          features: ["Real-Time Tracking", "Analytics Dashboard", "Secure Protocol", "Automated Notifications"]
        },
        {
          href: "/tools/application-database-chromatography",
          title: "Application Database - Chromatography",
          description: "Comprehensive chromatography application database and analysis tools",
          icon: Database,
          features: ["Advanced Search", "Method Optimization", "Validated Methods", "Performance Data"]
        }
      ]
    },
    {
      title: "Laboratory Finders",
      description: "Intelligent tools to find the perfect laboratory equipment and supplies",
      tools: [
        {
          href: "/tools/filter-finder",
          title: "FilterFinder",
          description: "Advanced filtration solution finder for laboratory applications",
          icon: Filter,
          features: ["Smart Search", "Custom Parameters", "Quick Results", "AI-Powered Recommendations"]
        },
        {
          href: "/tools/strip-finder",
          title: "StripFinder", 
          description: "Test strip selection and optimization tool for rapid diagnostics",
          icon: TestTube,
          features: ["Intelligent Search", "Precision Matching", "Rapid Results", "Comprehensive Database"]
        },
        {
          href: "/tools/nanocolor-finder",
          title: "NANOCOLOR Finder",
          description: "Colorimetric analysis tools for precise water and environmental testing",
          icon: Droplet,
          features: ["Colorimetric Analysis", "Parameter Search", "Quick Results", "Water Quality Testing"]
        },
        {
          href: "/tools/chromafil-finder",
          title: "CHROMAFIL Finder",
          description: "Chromatography filtration and sample preparation solutions",
          icon: Filter,
          features: ["Specialized Search", "Method Matching", "Performance Data", "HPLC & GC Applications"]
        },
        {
          href: "/tools/vial-finder",
          title: "VialFinder",
          description: "Laboratory vial and container selection tool with compatibility checking",
          icon: FlaskConical,
          features: ["Advanced Search", "Compatibility Check", "Quick Selection", "Material Options"]
        },
        {
          href: "/tools/bioanalysis-kitfinder",
          title: "Bioanalysis KitFinder",
          description: "Comprehensive bioanalysis kit selection and optimization tool",
          icon: Microscope,
          features: ["Smart Kit Search", "Method Optimization", "Performance Data", "Validation Metrics"]
        }
      ]
    }
  ];

  const platformStats = [
    {
      icon: Settings,
      value: "9",
      label: "Digital Tools",
      description: "Comprehensive suite of laboratory tools"
    },
    {
      icon: Search,
      value: "10,000+",
      label: "Database Entries",
      description: "Extensive searchable database"
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable 24/7 availability"
    },
    {
      icon: Target,
      value: "500+",
      label: "Daily Users",
      description: "Growing user community"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8 shadow-xl">
            <Settings className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tools & <span className="text-primary">Testing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Comprehensive digital solutions and advanced tools for modern laboratory workflows. 
            Enhance your productivity with our intelligent finders, databases, and analytical tools.
          </p>
          
          {/* Platform Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            {platformStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="px-12 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore All Tools
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      {toolCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 px-4 ${categoryIndex % 2 === 0 ? 'bg-white/50' : 'bg-primary/5'}`}>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.tools.map((tool, toolIndex) => {
                const Icon = tool.icon;
                return (
                  <Card key={toolIndex} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {category.title === "Digital Solutions" ? "Digital" : "Finder"}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                        {tool.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Key Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {tool.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        <Link href={tool.href}>
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200"
                          >
                            Explore Tool
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Tools?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Our comprehensive suite of digital tools streamlines laboratory workflows and enhances productivity
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Efficient</h3>
              <p className="opacity-90">Reduce research time with intelligent search and recommendation engines</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
              <p className="opacity-90">Make informed decisions with comprehensive databases and analytics</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Focused</h3>
              <p className="opacity-90">Find exactly what you need with advanced filtering and matching algorithms</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}