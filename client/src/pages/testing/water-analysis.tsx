import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Droplet, 
  FlaskConical, 
  Microscope, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Beaker,
  Target,
  Clock,
  Settings
} from "lucide-react";

export default function WaterAnalysis() {
  const analysisTypes = [
    {
      title: "Physical Parameters",
      description: "Comprehensive physical water quality testing",
      tests: ["pH Level", "Turbidity", "Temperature", "Conductivity", "Total Dissolved Solids"],
      icon: Droplet,
      color: "bg-primary/100"
    },
    {
      title: "Chemical Analysis",
      description: "Complete chemical composition analysis",
      tests: ["Heavy Metals", "Chlorine Content", "Hardness", "Alkalinity", "Nitrogen Compounds"],
      icon: FlaskConical,
      color: "bg-green-500"
    },
    {
      title: "Microbiological Testing",
      description: "Bacterial and pathogen detection",
      tests: ["E. coli", "Coliform Bacteria", "Total Plate Count", "Legionella", "Salmonella"],
      icon: Microscope,
      color: "bg-purple-500"
    },
    {
      title: "Environmental Monitoring",
      description: "Environmental impact assessment",
      tests: ["BOD/COD", "Pesticides", "Pharmaceuticals", "Industrial Contaminants", "Organic Pollutants"],
      icon: BarChart3,
      color: "bg-orange-500"
    }
  ];

  const applicationAreas = [
    {
      title: "Drinking Water Quality",
      description: "Ensuring safe drinking water standards and regulatory compliance",
      features: ["WHO Standards", "EPA Guidelines", "Real-time Monitoring", "Quality Assurance"]
    },
    {
      title: "Industrial Water Testing",
      description: "Process water quality control for industrial applications",
      features: ["Process Optimization", "Contamination Detection", "Equipment Protection", "Efficiency Monitoring"]
    },
    {
      title: "Environmental Water Assessment",
      description: "Surface and groundwater environmental impact monitoring",
      features: ["Pollution Assessment", "Ecosystem Health", "Regulatory Compliance", "Impact Studies"]
    },
    {
      title: "Wastewater Analysis",
      description: "Treatment efficiency and discharge compliance monitoring",
      features: ["Treatment Monitoring", "Discharge Standards", "Process Control", "Environmental Protection"]
    }
  ];

  const keyFeatures = [
    {
      icon: Target,
      title: "High Precision",
      description: "Advanced analytical methods with exceptional accuracy and reliability"
    },
    {
      icon: Clock,
      title: "Rapid Results",
      description: "Fast turnaround times for critical water quality assessments"
    },
    {
      icon: CheckCircle,
      title: "Certified Methods",
      description: "ISO certified testing procedures and quality management systems"
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored testing protocols for specific industry requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-cyan-50 to-teal-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8 shadow-xl">
            <Droplet className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Water <span className="text-primary">Analysis</span> Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Comprehensive water quality testing and environmental monitoring solutions for drinking water, 
            industrial processes, and environmental assessment. Ensure safety and compliance with our advanced analytical methods.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="px-12 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Request Analysis
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Analysis Types */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Water Testing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our advanced water analysis covers all aspects of water quality assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-primary/10/30">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 ${type.color} rounded-xl shadow-lg`}>
                      <type.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.tests.map((test, testIndex) => (
                      <div key={testIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{test}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Versatile water analysis solutions for diverse industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="secondary" 
                        className="bg-primary/20 text-primary text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Water Analysis Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 group-hover:bg-primary/90 transition-colors shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ensure Water Quality?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact us today to discuss your water analysis requirements and get started with our comprehensive testing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-gray-100 shadow-xl"
              >
                Schedule Testing
                <Beaker className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}