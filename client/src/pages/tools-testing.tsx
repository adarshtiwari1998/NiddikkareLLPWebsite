import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Settings, 
  Beaker, 
  ArrowRight,
  Target,
  BarChart3,
  Clock,
  Users,
  Zap,
  TestTube,
  BookOpen,
  FileText,
  Database,
  Filter,
  Droplet,
  Activity,
  FlaskConical,
  Microscope,
  Search
} from "lucide-react";

export default function ToolsTesting() {
  const sectionOverview = [
    {
      title: "Digital Tools",
      href: "/tools",
      description: "Comprehensive digital solutions and advanced tools for modern laboratory workflows",
      icon: Settings,
      color: "primary",
      stats: {
        count: "9",
        label: "Digital Tools",
        description: "Comprehensive suite"
      },
      features: [
        "E-Learning Resources", 
        "Sample Request System", 
        "Application Database", 
        "Intelligent Finders",
        "Real-time Analytics",
        "24/7 Availability"
      ],
      highlights: [
        {
          title: "FilterFinder",
          description: "Advanced filtration solution finder"
        },
        {
          title: "E-Learning Resources", 
          description: "200+ Educational materials"
        },
        {
          title: "Chromafil Finder",
          description: "Chromatography filtration solutions"
        }
      ]
    },
    {
      title: "Testing Solutions",
      href: "/testing",
      description: "Cutting-edge analytical tools for comprehensive laboratory testing and research",
      icon: Beaker,
      color: "green-600",
      stats: {
        count: "5",
        label: "Testing Solutions",
        description: "Advanced analytics"
      },
      features: [
        "Filtration Solutions",
        "Rapid Test Solutions", 
        "Water Analysis",
        "Chromatography Solutions",
        "Bioanalysis Solutions",
        "99.8% Accuracy"
      ],
      highlights: [
        {
          title: "Water Analysis",
          description: "Comprehensive water quality testing"
        },
        {
          title: "Rapid Tests",
          description: "Quick diagnostic solutions"
        },
        {
          title: "Chromatography",
          description: "HPLC & GC analysis systems"
        }
      ]
    }
  ];

  const combinedStats = [
    {
      icon: Settings,
      value: "14",
      label: "Total Solutions",
      description: "Tools & Testing combined"
    },
    {
      icon: Users,
      value: "500+",
      label: "Daily Users",
      description: "Growing community"
    },
    {
      icon: Target,
      value: "99.9%",
      label: "System Uptime",
      description: "Reliable availability"
    },
    {
      icon: BarChart3,
      value: "10,000+",
      label: "Database Entries",
      description: "Comprehensive data"
    }
  ];

  const quickAccess = [
    {
      category: "Popular Tools",
      items: [
        { href: "/tools/filter-finder", title: "FilterFinder", icon: Filter },
        { href: "/tools/e-training", title: "E-Learning", icon: BookOpen },
        { href: "/tools/sample-request", title: "Sample Request", icon: FileText },
        { href: "/tools/bioanalysis-kitfinder", title: "Kit Finder", icon: Search }
      ]
    },
    {
      category: "Popular Testing",
      items: [
        { href: "/testing/water-analysis", title: "Water Analysis", icon: Droplet },
        { href: "/testing/rapid-tests", title: "Rapid Tests", icon: Zap },
        { href: "/testing/chromatography", title: "Chromatography", icon: Activity },
        { href: "/testing/bioanalysis", title: "Bioanalysis", icon: FlaskConical }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full shadow-xl">
              <Settings className="w-10 h-10 text-primary" />
            </div>
            <div className="text-4xl font-bold text-gray-600">&</div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600/10 rounded-full shadow-xl">
              <Beaker className="w-10 h-10 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Tools</span> & <span className="text-green-600">Testing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Comprehensive digital solutions and advanced analytical tools for modern laboratory workflows. 
            Enhance your productivity with our intelligent tools and cutting-edge testing capabilities.
          </p>
          
          {/* Combined Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            {combinedStats.map((stat, index) => (
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
            <Link href="/tools">
              <Button 
                size="lg"
                className="px-12 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Tools
                <Settings className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/testing">
              <Button 
                size="lg"
                className="px-12 py-4 text-lg font-semibold bg-green-600 hover:bg-green-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Testing
                <Beaker className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Overview */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Laboratory Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From digital tools to advanced testing capabilities, we provide everything you need for modern laboratory operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sectionOverview.map((section, index) => (
              <div key={index} className="group">
                <Link href={section.href}>
                  <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50/30 border-2 hover:border-primary/20 h-full">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 bg-${section.color === 'primary' ? 'primary' : section.color}/10 rounded-xl group-hover:bg-${section.color === 'primary' ? 'primary' : section.color}/20 transition-colors duration-300`}>
                          <section.icon className={`h-10 w-10 text-${section.color === 'primary' ? 'primary' : section.color}`} />
                        </div>
                        <div className="text-center">
                          <div className={`text-4xl font-bold text-${section.color === 'primary' ? 'primary' : section.color} mb-1`}>
                            {section.stats.count}
                          </div>
                          <div className="text-sm font-medium text-gray-700 mb-1">{section.stats.label}</div>
                          <div className="text-xs text-gray-500">{section.stats.description}</div>
                        </div>
                      </div>
                      <CardTitle className={`text-2xl font-bold text-gray-900 group-hover:text-${section.color === 'primary' ? 'primary' : section.color} transition-colors duration-300`}>
                        {section.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed text-base">
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {section.features.map((feature, featureIndex) => (
                            <Badge 
                              key={featureIndex} 
                              variant="secondary" 
                              className={`bg-${section.color === 'primary' ? 'primary' : section.color}/10 text-${section.color === 'primary' ? 'primary' : section.color} hover:bg-${section.color === 'primary' ? 'primary' : section.color}/20 transition-colors duration-200 text-xs justify-center`}
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Popular Solutions */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Popular Solutions</h4>
                        <div className="space-y-2">
                          {section.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className={`w-2 h-2 rounded-full bg-${section.color === 'primary' ? 'primary' : section.color} mt-2 flex-shrink-0`}></div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">{highlight.title}</div>
                                <div className="text-xs text-gray-600">{highlight.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Explore All Solutions</span>
                          <ArrowRight className={`h-4 w-4 text-${section.color === 'primary' ? 'primary' : section.color} group-hover:translate-x-2 transition-all duration-300`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jump directly to our most popular tools and testing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickAccess.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <Link key={itemIndex} href={item.href}>
                        <div className="group cursor-pointer p-4 rounded-lg hover:bg-primary/5 transition-colors duration-200 border border-gray-100 hover:border-primary/20">
                          <div className="flex flex-col items-center text-center gap-2">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Laboratory Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover how our comprehensive tools and testing solutions can enhance your productivity and analytical capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-gray-100 shadow-xl"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}