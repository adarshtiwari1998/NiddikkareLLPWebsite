import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Clock, Zap, Shield, CheckCircle, TrendingUp, DollarSign, Award, Building, Briefcase } from "lucide-react";

export default function Contingent() {
  const contingentServices = [
    {
      title: "Requirement Definition",
      description: "Precise specification of temporary talent needs",
      icon: Users,
      features: ["Skill assessment", "Duration planning", "Budget estimation", "Compliance review"],
      benefits: ["Clear requirements", "Targeted search", "Cost planning", "Risk mitigation"]
    },
    {
      title: "Specialized Sourcing",
      description: "Targeting candidates with niche expertise",
      icon: Clock,
      features: ["Niche skill identification", "Market research", "Talent mapping", "Quick turnaround"],
      benefits: ["Expert talent", "Market insights", "Quality candidates", "Fast delivery"]
    },
    {
      title: "Compliance Management",
      description: "Handling contracts and legal requirements",
      icon: Shield,
      features: ["Contract management", "Legal compliance", "Documentation", "Risk assessment"],
      benefits: ["Legal protection", "Compliance assurance", "Proper documentation", "Risk reduction"]
    },
    {
      title: "Performance Monitoring",
      description: "Ensuring successful project completion",
      icon: TrendingUp,
      features: ["Performance tracking", "Quality assurance", "Progress monitoring", "Success metrics"],
      benefits: ["Quality delivery", "Project success", "Continuous improvement", "Client satisfaction"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Requirement Definition",
      description: "Precise specification of temporary talent needs",
      duration: "1-2 days",
      deliverables: ["Requirement specification", "Skills mapping", "Timeline planning"]
    },
    {
      step: "2",
      title: "Specialized Sourcing", 
      description: "Targeting candidates with niche expertise",
      duration: "2-5 days",
      deliverables: ["Candidate pipeline", "Skill assessment", "Market analysis"]
    },
    {
      step: "3",
      title: "Compliance Management",
      description: "Handling contracts and legal requirements",
      duration: "1-3 days",
      deliverables: ["Contract preparation", "Legal documentation", "Compliance checklist"]
    },
    {
      step: "4",
      title: "Performance Monitoring",
      description: "Ensuring successful project completion",
      duration: "Ongoing",
      deliverables: ["Performance reports", "Quality metrics", "Progress tracking"]
    }
  ];

  const useCases = [
    {
      title: "Project-Based Initiatives",
      description: "When implementing new systems or launching special projects, our Contingent service provides skilled professionals for the exact duration needed.",
      icon: Building,
      metrics: ["New systems", "Special projects", "Exact duration"]
    },
    {
      title: "Interim Leadership",
      description: "During transitions or unexpected departures, our service can quickly source experienced executives and managers to maintain operational continuity.",
      icon: Users,
      metrics: ["Executive placement", "Operational continuity", "Quick sourcing"]
    },
    {
      title: "Specialized Technical Expertise",
      description: "For organizations requiring niche technical skills for limited periods, our Contingent solution provides access to rare talent without permanent hiring commitments.",
      icon: Zap,
      metrics: ["Niche skills", "Limited periods", "No permanent commitment"]
    }
  ];

  const keyBenefits = [
    "Access to specialized skills for limited durations",
    "Reduced administrative and compliance burden", 
    "Flexibility to scale workforce with demand",
    "Lower long-term employment costs",
    "Rapid deployment of qualified professionals",
    "Risk mitigation through proper contractor management"
  ];

  const industries = [
    { name: "Information Technology", description: "Software developers and IT professionals", growth: "85%" },
    { name: "Healthcare", description: "Medical professionals and specialists", growth: "92%" },
    { name: "Engineering", description: "Technical and project engineers", growth: "78%" },
    { name: "Finance", description: "Financial analysts and consultants", growth: "81%" },
    { name: "Manufacturing", description: "Operations and quality specialists", growth: "88%" },
    { name: "Consulting", description: "Strategy and management consultants", growth: "94%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contingent Workforce Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Flexible staffing solutions for your dynamic business needs. Scale up or down with pre-vetted talent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-gray-600">Communities Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12+</div>
              <div className="text-sm text-gray-600">Panelled Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50%</div>
              <div className="text-sm text-gray-600">Faster Time to Submit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500K+</div>
              <div className="text-sm text-gray-600">Talent Pools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-gray-600">Candidates Engaged</div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Contingent Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contingentServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-orange-500 mr-2" />
                            {benefit}
                          </li>
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

      {/* Process Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {step.step}
                      </div>
                      <Badge variant="secondary">{step.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Deliverables:</h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ideal Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                    <useCase.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-orange-600">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                    <Badge variant="secondary">{industry.growth} Success</Badge>
                  </div>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Success Rate</span>
                      <span className="font-semibold">{industry.growth}</span>
                    </div>
                    <Progress value={parseInt(industry.growth)} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-400 to-orange-400 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Global Network</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-sm opacity-90">Communities Engaged</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">12+</div>
              <div className="text-sm opacity-90">Panelled Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50%</div>
              <div className="text-sm opacity-90">Faster Time to Submit</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500K+</div>
              <div className="text-sm opacity-90">Talent Pools</div>
            </div>
          </div>
          
          {/* Additional stats from network visualization */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm opacity-90">Candidates Engaged</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-300 rounded-full mr-2"></div>
                  India (HQ)
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-300 rounded-full mr-2"></div>
                  USA
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-300 rounded-full mr-2"></div>
                  Canada
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Workforce?</h2>
          <p className="text-xl mb-8 opacity-90">
            Access specialized talent when you need it, for as long as you need it
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Start Contingent Partnership
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