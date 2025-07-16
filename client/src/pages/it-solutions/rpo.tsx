import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Target, Clock, TrendingUp, CheckCircle, Star, Award, Building } from "lucide-react";

export default function RPO() {
  const rpoServices = [
    {
      title: "End-to-End Recruitment",
      description: "Complete recruitment process management",
      icon: Users,
      features: ["Candidate sourcing", "Screening & assessment", "Interview coordination", "Offer management"],
      benefits: ["60% faster hiring", "50% cost reduction", "95% fill rate", "Quality candidates"]
    },
    {
      title: "Talent Pipeline Management",
      description: "Build and maintain talent pools",
      icon: Target,
      features: ["Talent mapping", "Candidate relationship management", "Succession planning", "Skills database"],
      benefits: ["Reduced time-to-fill", "Better candidate experience", "Strategic workforce planning", "Competitive advantage"]
    },
    {
      title: "Specialized Recruitment",
      description: "Industry-specific talent acquisition",
      icon: Award,
      features: ["Healthcare professionals", "Life sciences experts", "IT specialists", "Executive search"],
      benefits: ["Domain expertise", "Niche skill identification", "Industry connections", "Quality assurance"]
    },
    {
      title: "Recruitment Analytics",
      description: "Data-driven hiring insights",
      icon: TrendingUp,
      features: ["Hiring metrics", "Performance tracking", "Market analysis", "Predictive analytics"],
      benefits: ["Informed decisions", "Process optimization", "ROI measurement", "Strategic planning"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Requirement Analysis",
      description: "Understanding client needs and job specifications",
      duration: "1-2 days",
      deliverables: ["Job description", "Candidate profile", "Hiring timeline"]
    },
    {
      step: "2",
      title: "Sourcing Strategy",
      description: "Multi-channel candidate identification",
      duration: "3-5 days",
      deliverables: ["Sourcing plan", "Channel selection", "Talent mapping"]
    },
    {
      step: "3",
      title: "Screening & Assessment",
      description: "Comprehensive candidate evaluation",
      duration: "5-7 days",
      deliverables: ["Candidate shortlist", "Assessment reports", "Interview schedule"]
    },
    {
      step: "4",
      title: "Interview Coordination",
      description: "Managing interview process",
      duration: "3-5 days",
      deliverables: ["Interview feedback", "Candidate ranking", "Reference checks"]
    },
    {
      step: "5",
      title: "Offer Management",
      description: "Negotiation and onboarding support",
      duration: "2-3 days",
      deliverables: ["Offer letter", "Negotiation support", "Onboarding plan"]
    }
  ];

  const metrics = [
    { metric: "Time-to-Fill", value: "18 days", improvement: "60% faster", progress: 85 },
    { metric: "Cost-per-Hire", value: "$3,200", improvement: "50% reduction", progress: 75 },
    { metric: "Quality of Hire", value: "4.8/5", improvement: "95% satisfaction", progress: 96 },
    { metric: "Retention Rate", value: "92%", improvement: "15% increase", progress: 92 },
    { metric: "Candidate Experience", value: "4.7/5", improvement: "20% improvement", progress: 94 },
    { metric: "Fill Rate", value: "95%", improvement: "Industry leading", progress: 95 }
  ];

  const industries = [
    {
      name: "Healthcare",
      roles: ["Doctors", "Nurses", "Technicians", "Administrators"],
      volume: "40% of placements",
      specialties: ["Neonatal care", "Surgery", "Radiology", "Laboratory"]
    },
    {
      name: "Life Sciences",
      roles: ["Scientists", "Researchers", "Analysts", "Engineers"],
      volume: "35% of placements",
      specialties: ["Biotechnology", "Pharmaceuticals", "Medical devices", "Diagnostics"]
    },
    {
      name: "Information Technology",
      roles: ["Developers", "Architects", "Analysts", "Managers"],
      volume: "25% of placements",
      specialties: ["Software development", "Data science", "Cybersecurity", "Cloud computing"]
    }
  ];

  const clientSuccess = [
    {
      client: "Regional Medical Center",
      challenge: "Shortage of specialized nurses",
      solution: "Targeted healthcare recruitment",
      result: "Filled 50 positions in 30 days",
      satisfaction: 5
    },
    {
      client: "Biotech Startup",
      challenge: "Rapid team expansion",
      solution: "Scalable recruitment process",
      result: "Hired 25 scientists in 45 days",
      satisfaction: 5
    },
    {
      client: "IT Services Company",
      challenge: "High-skilled developer shortage",
      solution: "Global talent sourcing",
      result: "90% fill rate achieved",
      satisfaction: 4
    }
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
            Recruitment Process Outsourcing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your hiring with our comprehensive RPO services. From sourcing to onboarding, we handle it all.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2000+</div>
              <div className="text-sm text-gray-600">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-gray-600">Fill Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">18</div>
              <div className="text-sm text-gray-600">Days Average TTF</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-600">Client Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our RPO Services</h2>
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
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{benefit}</Badge>
                        ))}
                      </div>
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
          <h2 className="text-3xl font-bold text-center mb-12">Our 5-Step RPO Process</h2>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold">
                        {step.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="text-lg font-bold text-primary">{step.duration}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">{deliverable}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{metric.metric}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <Badge variant="secondary" className="text-xs">{metric.improvement}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={metric.progress} className="h-3" />
                  <div className="text-sm text-gray-600 mt-2">Performance Score: {metric.progress}%</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{industry.name}</CardTitle>
                  <Badge variant="secondary">{industry.volume}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Roles:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.roles.map((role, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{role}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                      <ul className="space-y-1">
                        {industry.specialties.map((specialty, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {specialty}</li>
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

      {/* Client Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientSuccess.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(story.satisfaction)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{story.client}</CardTitle>
                  <CardDescription className="text-red-600 font-medium">Challenge: {story.challenge}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-blue-600">Solution: </span>
                      <span className="text-sm">{story.solution}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-green-600">Result: </span>
                      <span className="text-sm font-bold">{story.result}</span>
                    </div>
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