import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import SEO from "@/components/seo";
import { 
  Settings, 
  Microscope, 
  Factory, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award,
  Target,
  TrendingUp,
  Shield,
  Clock,
  FileText,
  FlaskConical,
  Cog
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const serviceCategories = [
    {
      title: "IVD Medical Device Consultancy",
      description: "Expert guidance for In Vitro Diagnostic medical devices through regulatory approval and market success",
      href: "/services/consultancy-ivd",
      icon: Settings,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      features: [
        "Regulatory Strategy & Submissions",
        "Clinical Trial Design & Validation", 
        "Quality Management Systems",
        "Market Access & Launch Planning"
      ],
      stats: {
        projects: "50+",
        success: "95%",
        timeframe: "6-18 months"
      }
    },
    {
      title: "Contract Research Organization",
      description: "Comprehensive research services from preclinical studies to regulatory submissions",
      href: "/services/contract-research",
      icon: Microscope,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      features: [
        "Preclinical & Clinical Studies",
        "Bioanalytical Services & Testing",
        "Data Analysis & Statistical Support",
        "Regulatory Affairs & Compliance"
      ],
      stats: {
        studies: "100+",
        success: "92%",
        timeframe: "12-24 months"
      }
    },
    {
      title: "OEM Products & Manufacturing",
      description: "Custom manufacturing solutions for medical devices, laboratory equipment, and healthcare supplies",
      href: "/services/oem-products",
      icon: Factory,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      features: [
        "Medical Device Manufacturing",
        "Laboratory Equipment Production",
        "Healthcare Supply Solutions",
        "Custom Product Development"
      ],
      stats: {
        capacity: "50K+",
        quality: "99.8%",
        timeframe: "4-12 weeks"
      }
    }
  ];

  const globalStats = [
    { label: "Years of Excellence", value: "4+", icon: Award },
    { label: "Healthcare Partners", value: "10+", icon: Users },
    { label: "Countries Served", value: "5+", icon: Globe },
    { label: "Projects Completed", value: "200+", icon: CheckCircle }
  ];

  const ourCapabilities = [
    {
      title: "Regulatory Expertise",
      description: "Navigate complex regulatory landscapes across global markets",
      icon: Shield,
      metrics: ["FDA Approvals", "CE Marking", "International Standards"]
    },
    {
      title: "Clinical Excellence", 
      description: "Comprehensive clinical validation and research capabilities",
      icon: FlaskConical,
      metrics: ["GCP Compliance", "Study Design", "Data Analysis"]
    },
    {
      title: "Manufacturing Quality",
      description: "Advanced manufacturing with quality control systems",
      icon: Cog,
      metrics: ["Quality Rate", "Production Capacity", "Custom Solutions"]
    },
    {
      title: "Time-to-Market",
      description: "Accelerated pathways to bring products to market faster",
      icon: Clock,
      metrics: ["Project Timeline", "Launch Support", "Market Strategy"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive assessment of your requirements and objectives",
      icon: Users
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Tailored approach designed for your specific needs and market",
      icon: Target
    },
    {
      step: "03",
      title: "Implementation",
      description: "Expert execution with continuous monitoring and support",
      icon: Cog
    },
    {
      step: "04",
      title: "Success & Growth",
      description: "Successful completion with ongoing partnership opportunities",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO pagePath="/services" />
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 shadow-lg">
            <Cog className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Healthcare <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Comprehensive solutions for medical device development, clinical research, and manufacturing. 
            From regulatory approval to market success, we're your trusted healthcare partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-white/80">IVD Consultancy</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-white/80">Contract Research</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-white/80">OEM Manufacturing</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-white/80">Regulatory Affairs</Badge>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized services designed to accelerate your healthcare innovation from concept to market success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${service.bgColor} border-0 overflow-hidden`}>
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(service.stats).map(([key, value], statIndex) => (
                        <div key={statIndex}>
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href={service.href}>
                    <Button className="w-full group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the healthcare innovation lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourCapabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{capability.description}</p>
                <div className="space-y-1">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-xs text-gray-500 bg-gray-50 rounded px-2 py-1">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 transform translate-x-4"></div>
                )}
                
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6 border-4 border-primary/20">
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Healthcare Innovation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with NIDDIKKARE LLP for comprehensive healthcare services that drive success. 
            From concept to market - we're with you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 shadow-lg">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 shadow-lg">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}