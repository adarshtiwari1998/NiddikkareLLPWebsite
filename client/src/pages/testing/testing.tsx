import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Beaker, 
  TestTube, 
  Droplet, 
  Activity, 
  Zap,
  ArrowRight,
  Target,
  BarChart3,
  Clock,
  Filter,
  FlaskConical
} from "lucide-react";

export default function Testing() {
  const testingCategories = [
    {
      title: "Laboratory Testing Solutions",
      description: "Cutting-edge analytical tools for comprehensive laboratory testing and research",
      tests: [
        {
          href: "/testing/filtration",
          title: "Filtration Solutions",
          description: "Advanced filtration systems and membrane technologies for laboratory applications",
          icon: Filter,
          features: ["Membrane Technology", "High Precision", "Quality Control", "Various Applications"]
        },
        {
          href: "/testing/rapid-tests",
          title: "Rapid Test Solutions",
          description: "Quick and accurate diagnostic testing solutions for immediate results",
          icon: Zap,
          features: ["Fast Results", "High Accuracy", "Point-of-Care", "Easy to Use"]
        },
        {
          href: "/testing/water-analysis",
          title: "Water Analysis",
          description: "Comprehensive water quality testing and environmental monitoring solutions",
          icon: Droplet,
          features: ["Quality Testing", "Environmental Monitoring", "Regulatory Compliance", "Real-time Analysis"]
        }
      ]
    },
    {
      title: "Advanced Analytical Testing",
      description: "Sophisticated analytical instruments and methods for research and quality control",
      tests: [
        {
          href: "/testing/chromatography",
          title: "Chromatography Solutions",
          description: "High-performance chromatography systems for separation and analysis",
          icon: Activity,
          features: ["HPLC & GC", "Method Development", "Quantitative Analysis", "Quality Assurance"]
        },
        {
          href: "/testing/bioanalysis",
          title: "Bioanalysis Solutions",
          description: "Comprehensive bioanalytical testing for pharmaceutical and research applications",
          icon: FlaskConical,
          features: ["Biological Samples", "Pharmaceutical Testing", "Research Applications", "Validated Methods"]
        }
      ]
    }
  ];

  const platformStats = [
    {
      icon: TestTube,
      value: "5",
      label: "Testing Solutions",
      description: "Comprehensive testing portfolio"
    },
    {
      icon: Target,
      value: "99.8%",
      label: "Accuracy",
      description: "Precise and reliable results"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: BarChart3,
      value: "1000+",
      label: "Tests Daily",
      description: "High-volume capacity"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8 shadow-xl">
            <Beaker className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Advanced <span className="text-primary">Testing</span> Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Cutting-edge analytical tools for comprehensive laboratory testing and research. 
            Enhance your analytical capabilities with our advanced testing solutions and methodologies.
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
              Explore Testing Solutions
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
              className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testing Categories */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          {testingCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.tests.map((test, index) => (
                  <Link key={index} href={test.href}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-green-50/30 border-2 hover:border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                            <test.icon className="h-8 w-8 text-primary" />
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {test.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {test.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {test.features.map((feature, featureIndex) => (
                            <Badge 
                              key={featureIndex} 
                              variant="secondary" 
                              className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-green-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Testing Capabilities?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Get started with our comprehensive testing solutions and take your laboratory capabilities to the next level.
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
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}