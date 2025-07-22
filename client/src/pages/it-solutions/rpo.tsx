import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Target, Clock, TrendingUp, CheckCircle, Star, Award, Building } from "lucide-react";

export default function RPO() {
  const rpoServices = [
    {
      title: "Needs Analysis",
      description: "In-depth assessment of your hiring requirements",
      icon: Users,
      features: ["Job specification analysis", "Skills requirement mapping", "Timeline development", "Budget planning"],
      benefits: ["Clear hiring roadmap", "Aligned expectations", "Optimized resources", "Strategic approach"]
    },
    {
      title: "Strategy Development",
      description: "Custom recruitment approach aligned with your goals",
      icon: Target,
      features: ["Sourcing strategy", "Channel optimization", "Process customization", "KPI definition"],
      benefits: ["Targeted approach", "Higher success rates", "Cost efficiency", "Quality improvement"]
    },
    {
      title: "Talent Sourcing",
      description: "Extensive candidate search and engagement",
      icon: Clock,
      features: ["Multi-channel sourcing", "Candidate engagement", "Database mining", "Network activation"],
      benefits: ["Broader reach", "Quality candidates", "Faster sourcing", "Market intelligence"]
    },
    {
      title: "Selection & Hiring",
      description: "Thorough screening and onboarding support",
      icon: TrendingUp,
      features: ["Screening processes", "Interview coordination", "Reference checks", "Onboarding support"],
      benefits: ["Quality assurance", "Smooth transitions", "Reduced dropouts", "Better retention"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Needs Analysis",
      description: "In-depth assessment of your hiring requirements",
      duration: "1-2 days",
      deliverables: ["Job specification", "Requirements mapping", "Hiring timeline"]
    },
    {
      step: "2",
      title: "Strategy Development", 
      description: "Custom recruitment approach aligned with your goals",
      duration: "2-3 days",
      deliverables: ["Sourcing strategy", "Process design", "Success metrics"]
    },
    {
      step: "3",
      title: "Talent Sourcing",
      description: "Extensive candidate search and engagement",
      duration: "5-10 days",
      deliverables: ["Candidate pipeline", "Sourcing reports", "Market analysis"]
    },
    {
      step: "4",
      title: "Selection & Hiring",
      description: "Thorough screening and onboarding support",
      duration: "3-7 days",
      deliverables: ["Vetted candidates", "Interview reports", "Hiring recommendations"]
    }
  ];

  const useCases = [
    {
      title: "High-volume Recruitment Drive",
      description: "When launching a new facility or expanding operations rapidly, our Full RPO solution provides the scale and efficiency needed to fill multiple positions simultaneously.",
      icon: Building,
      metrics: ["Multiple positions", "Rapid scaling", "Operational efficiency"]
    },
    {
      title: "Recruitment Process Transformation",
      description: "Organizations seeking to modernize and optimize their talent acquisition approach benefit from our comprehensive analysis and implementation of best practices.",
      icon: TrendingUp,
      metrics: ["Process optimization", "Best practices", "Modern approach"]
    },
    {
      title: "Strategic Workforce Planning",
      description: "For companies planning long-term growth, our Full RPO service aligns recruitment activities with business goals and future talent requirements.",
      icon: Target,
      metrics: ["Long-term growth", "Strategic alignment", "Future planning"]
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
    { name: "Healthcare", description: "Medical professionals and healthcare specialists", growth: "85%" },
    { name: "Life Sciences", description: "Research scientists and biotechnology experts", growth: "92%" },
    { name: "Technology", description: "Software developers and IT professionals", growth: "78%" },
    { name: "Manufacturing", description: "Engineering and operations talent", growth: "81%" },
    { name: "Financial Services", description: "Banking and finance professionals", growth: "88%" },
    { name: "Pharmaceuticals", description: "Drug development and regulatory experts", growth: "94%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            RPO
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            End-to-end recruitment process outsourcing for comprehensive talent acquisition needs.
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Full RPO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rpoServices.map((service, index) => (
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
                            <Star className="w-3 h-3 text-yellow-500 mr-2" />
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
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                    <useCase.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
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
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Recruitment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us for faster, more efficient, and cost-effective hiring
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