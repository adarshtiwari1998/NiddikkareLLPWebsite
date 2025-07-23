import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ShoppingCart, Cog, Truck, Shield, CheckCircle, Factory, Users, Globe, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function OEMProducts() {
  const productCategories = [
    {
      title: "Medical Devices",
      description: "Custom medical equipment manufacturing",
      icon: Shield,
      products: ["Diagnostic equipment", "Surgical instruments", "Monitoring devices"],
      capacity: "5000+ units/month"
    },
    {
      title: "Laboratory Equipment",
      description: "Precision laboratory instruments",
      icon: Cog,
      products: ["Analyzers", "Centrifuges", "Incubators"],
      capacity: "2000+ units/month"
    },
    {
      title: "Healthcare Supplies",
      description: "Essential healthcare consumables",
      icon: ShoppingCart,
      products: ["Disposables", "Testing kits", "Consumables"],
      capacity: "50000+ units/month"
    },
    {
      title: "Custom Solutions",
      description: "Tailored manufacturing solutions",
      icon: Factory,
      products: ["Prototype development", "Small batch production", "Specialized components"],
      capacity: "Project-based"
    }
  ];

  const manufacturingProcess = [
    { stage: "Design", progress: 100, color: "bg-green-500" },
    { stage: "Prototyping", progress: 95, color: "bg-blue-500" },
    { stage: "Testing", progress: 90, color: "bg-purple-500" },
    { stage: "Production", progress: 85, color: "bg-orange-500" },
    { stage: "Quality Control", progress: 98, color: "bg-red-500" },
    { stage: "Delivery", progress: 92, color: "bg-indigo-500" }
  ];

  const oemAdvantages = [
    { 
      title: "Cost Efficiency", 
      description: "Reduce manufacturing costs by 30-50% compared to in-house production",
      icon: DollarSign,
      benefits: ["Lower overhead costs", "Economies of scale", "Reduced capital investment"]
    },
    { 
      title: "Time to Market", 
      description: "Accelerate product launches with our streamlined manufacturing processes",
      icon: Clock,
      benefits: ["Faster prototyping", "Quick scaling", "Reduced development cycles"]
    },
    { 
      title: "Quality Assurance", 
      description: "Consistent quality through rigorous testing and quality control systems",
      icon: Shield,
      benefits: ["Certified processes", "Quality tracking", "Compliance support"]
    },
    { 
      title: "Scalability", 
      description: "Scale production volumes up or down based on market demand",
      icon: TrendingUp,
      benefits: ["Flexible capacity", "Volume adjustments", "Market responsiveness"]
    },
    { 
      title: "Technical Expertise", 
      description: "Access specialized knowledge and advanced manufacturing capabilities",
      icon: Cog,
      benefits: ["Expert engineers", "Latest technology", "Process optimization"]
    },
    { 
      title: "Risk Management", 
      description: "Minimize business risks with our proven manufacturing track record",
      icon: Shield,
      benefits: ["Supply chain security", "Quality guarantees", "Regulatory compliance"]
    }
  ];

  const stats = [
    { value: "4+", label: "Years of Excellence" },
    { value: "10+", label: "Healthcare Partners" },
    { value: "5+", label: "Countries Served" },
    { value: "99.8%", label: "Quality Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <ShoppingCart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            OEM Products & Manufacturing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner for original equipment manufacturing in healthcare and life sciences
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Manufacturing Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-primary">Products:</div>
                    <ul className="space-y-1">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {product}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 text-sm">
                      <span className="font-medium">Capacity: </span>
                      <span className="text-primary">{category.capacity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing Process</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {manufacturingProcess.map((process, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${process.color}`}></div>
                      <span className="font-medium">{process.stage}</span>
                    </div>
                    <span className="text-sm text-gray-500">{process.progress}%</span>
                  </div>
                  <Progress value={process.progress} className="h-3" />
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Manufacturing Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Factory className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">State-of-the-Art Facilities</h4>
                    <p className="text-gray-600">Modern manufacturing equipment and clean rooms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Skilled Workforce</h4>
                    <p className="text-gray-600">Expert technicians and quality professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Global Reach</h4>
                    <p className="text-gray-600">Serving clients worldwide with local support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Fast Turnaround</h4>
                    <p className="text-gray-600">Optimized processes for quick delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Advantages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our OEM Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oemAdvantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <advantage.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {advantage.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Manufacturing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us for reliable, high-quality OEM manufacturing solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
              Download Capabilities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}