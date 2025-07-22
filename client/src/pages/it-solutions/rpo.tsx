import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, ArrowLeft, Globe } from "lucide-react";
import { Link } from "wouter";

export default function RPO() {
  const whyChooseFeatures = [
    "Reduced time-to-hire by up to 40%",
    "Cost savings on recruitment operations", 
    "Improved candidate quality and retention",
    "Enhanced employer branding"
  ];

  const rpoProcess = [
    {
      step: "1",
      title: "Needs Analysis",
      description: "In-depth assessment of your hiring requirements",
      color: "bg-purple-500"
    },
    {
      step: "2", 
      title: "Strategy Development",
      description: "Custom recruitment approach aligned with your goals",
      color: "bg-purple-500"
    },
    {
      step: "3",
      title: "Talent Sourcing", 
      description: "Extensive candidate search and engagement",
      color: "bg-purple-500"
    },
    {
      step: "4",
      title: "Selection & Hiring",
      description: "Thorough screening and onboarding support", 
      color: "bg-purple-500"
    }
  ];

  const useCases = [
    {
      title: "High-volume Recruitment Drive",
      description: "When launching a new facility or expanding operations rapidly, our Full RPO solution provides the scale and efficiency needed to fill multiple positions simultaneously.",
      color: "text-purple-600"
    },
    {
      title: "Recruitment Process Transformation", 
      description: "Organizations seeking to modernize and optimize their talent acquisition approach benefit from our comprehensive analysis and implementation of best practices.",
      color: "text-purple-600"
    },
    {
      title: "Strategic Workforce Planning",
      description: "For companies planning long-term growth, our Full RPO service aligns recruitment activities with business goals and future talent requirements.",
      color: "text-purple-600"
    }
  ];

  const keyBenefits = [
    "Reduced time-to-hire by up to 40%",
    "Cost savings on recruitment operations",
    "Improved candidate quality and retention",
    "Enhanced employer branding", 
    "Scalable recruitment capacity",
    "Access to specialized industry expertise"
  ];

  const industries = [
    { name: "Healthcare", description: "Medical professionals and healthcare specialists" },
    { name: "Life Sciences", description: "Research scientists and biotechnology experts" },
    { name: "Technology", description: "Software developers and IT professionals" },
    { name: "Manufacturing", description: "Engineering and operations talent" },
    { name: "Financial Services", description: "Banking and finance professionals" },
    { name: "Pharmaceuticals", description: "Drug development and regulatory experts" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Services Link */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/it-solutions" className="inline-flex items-center text-gray-600 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Full RPO
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                End-to-end recruitment process outsourcing for comprehensive talent acquisition needs.
              </p>
              <p className="text-gray-600 mb-8">
                Our Full RPO service delivers a complete recruitment solution, managing the entire hiring process from sourcing to onboarding. We integrate with your HR team to create a seamless talent pipeline that aligns with your organizational goals and company culture.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Why Choose Our Full RPO Solution?</h3>
              <div className="space-y-4">
                {whyChooseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Full RPO Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Full RPO Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rpoProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 ${process.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Use Cases */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ideal Use Cases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When our Full RPO service delivers the most value
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className={`text-lg ${useCase.color}`}>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How our Full RPO service transforms your talent acquisition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Global Network Visualization */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Recruitment Process Outsourcing</h2>
          <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto">
            Transform your hiring with our comprehensive RPO services. From sourcing to onboarding, we handle it all.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2000+</div>
              <div className="text-sm opacity-80">Successful Placements</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm opacity-80">Fill Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">18</div>
              <div className="text-sm opacity-80">Days Average TTF</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-sm opacity-80">Client Partners</div>
            </div>
          </div>

          {/* Global Network Visualization */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-400">10K+</div>
                <div className="text-sm opacity-80">Communities Engaged</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-orange-400">12+</div>
                <div className="text-sm opacity-80">Panelled Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-400">50%</div>
                <div className="text-sm opacity-80">Faster Time to Submit</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-400">500K+</div>
                <div className="text-sm opacity-80">Talent Pools</div>
              </div>
            </div>
            
            {/* Global Network Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                India (HQ)
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                USA
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Canada
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                Live Global Network
              </div>
            </div>

            {/* Network Visual */}
            <div className="mt-8 relative h-32 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg flex items-center justify-center">
              <Globe className="h-16 w-16 text-blue-400 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized recruitment across diverse industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Recruitment?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with us for faster, more efficient, and cost-effective hiring solutions that scale with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Start RPO Partnership
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}