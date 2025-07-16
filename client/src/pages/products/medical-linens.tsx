import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Bed, Shield, Droplets, Zap, CheckCircle, Star, Award, Factory } from "lucide-react";

export default function MedicalLinensProducts() {
  const linenTypes = [
    {
      title: "Surgical Linens",
      description: "Sterile surgical drapes and gowns",
      icon: Shield,
      features: ["Fluid resistant", "Sterile barrier", "Comfortable fit", "Disposable"],
      applications: ["Operating rooms", "Surgical procedures", "Sterile environments"],
      color: "bg-blue-500"
    },
    {
      title: "Patient Bedding",
      description: "Comfortable and hygienic patient linens",
      icon: Bed,
      features: ["Soft material", "Easy cleaning", "Antimicrobial", "Wrinkle resistant"],
      applications: ["Patient rooms", "Recovery areas", "Long-term care"],
      color: "bg-green-500"
    },
    {
      title: "Protective Covers",
      description: "Waterproof and protective coverings",
      icon: Droplets,
      features: ["Waterproof", "Breathable", "Durable", "Infection control"],
      applications: ["ICU units", "Emergency rooms", "Isolation rooms"],
      color: "bg-purple-500"
    },
    {
      title: "Specialty Textiles",
      description: "Specialized medical textiles",
      icon: Zap,
      features: ["Conductive properties", "Anti-static", "Flame retardant", "Custom designs"],
      applications: ["Cardiac units", "Burn centers", "Specialized procedures"],
      color: "bg-orange-500"
    }
  ];

  const qualityMetrics = [
    { metric: "Fluid Resistance", value: "≥300 mmHg", progress: 95 },
    { metric: "Tensile Strength", value: "≥40 N", progress: 92 },
    { metric: "Antimicrobial Efficacy", value: "99.9% reduction", progress: 98 },
    { metric: "Comfort Rating", value: "4.8/5.0", progress: 96 },
    { metric: "Durability", value: "100+ wash cycles", progress: 90 },
    { metric: "Environmental Impact", value: "Eco-friendly", progress: 85 }
  ];

  const certifications = [
    { name: "FDA 510(k)", status: "Approved", icon: Award },
    { name: "AATCC Standards", status: "Compliant", icon: CheckCircle },
    { name: "ISO 13485", status: "Certified", icon: Factory },
    { name: "OEKO-TEX", status: "Standard 100", icon: Shield }
  ];

  const benefits = [
    {
      title: "Infection Prevention",
      description: "Advanced antimicrobial properties reduce infection risk",
      percentage: 97
    },
    {
      title: "Cost Effectiveness",
      description: "Durable materials reduce replacement frequency",
      percentage: 85
    },
    {
      title: "Patient Comfort",
      description: "Soft, breathable fabrics enhance patient experience",
      percentage: 93
    },
    {
      title: "Staff Efficiency",
      description: "Easy-care properties save time and resources",
      percentage: 88
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Bed className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Medical Linens Products
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional-grade medical textiles for healthcare facilities worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600">Hospitals Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-gray-600">Infection Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">ISO</div>
              <div className="text-sm text-gray-600">Certified Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {linenTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${type.color} rounded-full mb-4`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Applications:</h4>
                      <ul className="space-y-1">
                        {type.applications.map((app, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quality & Performance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{metric.metric}</span>
                    <span className="text-sm text-primary font-semibold">{metric.value}</span>
                  </div>
                  <Progress value={metric.progress} className="h-3" />
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                        <CardDescription className="text-sm">{benefit.description}</CardDescription>
                      </div>
                      <div className="text-2xl font-bold text-primary">{benefit.percentage}%</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={benefit.percentage} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{cert.status}</Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sustainable Healthcare Textiles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Committed to environmental responsibility without compromising on quality or safety
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Water Conservation</CardTitle>
                <CardDescription>30% reduction in water usage during manufacturing</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Energy Efficiency</CardTitle>
                <CardDescription>Renewable energy powers 70% of our facilities</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Eco-Friendly Materials</CardTitle>
                <CardDescription>Biodegradable and recycled materials used</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Upgrade Your Healthcare Facility</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference premium medical linens can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Request Samples
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}