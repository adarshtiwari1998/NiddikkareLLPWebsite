import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Clock, Zap, Shield, CheckCircle, TrendingUp, DollarSign, Award } from "lucide-react";

export default function Contingent() {
  const contingentServices = [
    {
      title: "Contract Staffing",
      description: "Short-term and project-based staffing solutions",
      icon: Clock,
      duration: "1-12 months",
      benefits: ["Immediate availability", "Cost-effective", "Flexible engagement", "Specialized skills"],
      industries: ["IT", "Healthcare", "Engineering", "Finance"]
    },
    {
      title: "Temporary Staffing",
      description: "Quick fill for temporary workforce needs",
      icon: Zap,
      duration: "1 day - 6 months",
      benefits: ["Rapid deployment", "No long-term commitment", "Peak period support", "Budget control"],
      industries: ["Healthcare", "Manufacturing", "Retail", "Logistics"]
    },
    {
      title: "Freelance Management",
      description: "Comprehensive freelancer and consultant management",
      icon: Users,
      duration: "Project-based",
      benefits: ["Global talent pool", "Specialized expertise", "Scalable workforce", "Project efficiency"],
      industries: ["Technology", "Creative", "Consulting", "Research"]
    },
    {
      title: "Workforce Management",
      description: "End-to-end contingent workforce solutions",
      icon: Shield,
      duration: "Ongoing",
      benefits: ["Compliance management", "Vendor management", "Cost optimization", "Risk mitigation"],
      industries: ["All Industries", "Multi-sector", "Enterprise", "Global"]
    }
  ];

  const workforceMetrics = [
    { metric: "Deployment Speed", value: "24-48 hours", improvement: "75% faster", progress: 88 },
    { metric: "Cost Savings", value: "30-40%", improvement: "vs full-time", progress: 85 },
    { metric: "Fill Rate", value: "92%", improvement: "Industry leading", progress: 92 },
    { metric: "Client Satisfaction", value: "4.7/5", improvement: "95% retention", progress: 94 },
    { metric: "Talent Pool", value: "10,000+", improvement: "Pre-vetted", progress: 90 },
    { metric: "Compliance Rate", value: "99.5%", improvement: "Zero incidents", progress: 99 }
  ];

  const skillCategories = [
    {
      category: "Information Technology",
      skills: ["Software Development", "Data Science", "Cybersecurity", "Cloud Computing", "AI/ML"],
      demand: "High",
      availability: "Good",
      averageRate: "$45-85/hr"
    },
    {
      category: "Healthcare",
      skills: ["Nursing", "Medical Technicians", "Therapists", "Healthcare Admin", "Specialists"],
      demand: "Very High",
      availability: "Limited",
      averageRate: "$35-65/hr"
    },
    {
      category: "Engineering",
      skills: ["Civil Engineering", "Mechanical", "Electrical", "Software Engineering", "Quality"],
      demand: "High",
      availability: "Moderate",
      averageRate: "$40-75/hr"
    },
    {
      category: "Finance & Accounting",
      skills: ["Financial Analysis", "Accounting", "Auditing", "Tax Preparation", "Bookkeeping"],
      demand: "Moderate",
      availability: "Good",
      averageRate: "$30-60/hr"
    }
  ];

  const engagementProcess = [
    {
      step: "1",
      title: "Requirement Analysis",
      description: "Define role specifications and project requirements",
      duration: "1-2 days",
      activities: ["Skills assessment", "Role definition", "Budget planning", "Timeline setting"]
    },
    {
      step: "2",
      title: "Talent Sourcing",
      description: "Identify and screen qualified candidates",
      duration: "2-3 days",
      activities: ["Database search", "Skills screening", "Background checks", "Reference verification"]
    },
    {
      step: "3",
      title: "Selection Process",
      description: "Client interviews and final selection",
      duration: "1-2 days",
      activities: ["Interview scheduling", "Technical assessments", "Client feedback", "Final selection"]
    },
    {
      step: "4",
      title: "Onboarding",
      description: "Rapid deployment and integration",
      duration: "1 day",
      activities: ["Contract execution", "System access", "Orientation", "Project briefing"]
    },
    {
      step: "5",
      title: "Ongoing Management",
      description: "Continuous support and performance monitoring",
      duration: "Throughout project",
      activities: ["Performance tracking", "Issue resolution", "Contract management", "End-of-project transition"]
    }
  ];

  const complianceFeatures = [
    {
      feature: "Legal Compliance",
      description: "Full compliance with labor laws and regulations",
      coverage: "100%",
      details: ["Employment law", "Tax regulations", "Worker classification", "Benefits compliance"]
    },
    {
      feature: "Risk Management",
      description: "Comprehensive risk assessment and mitigation",
      coverage: "99.5%",
      details: ["Insurance coverage", "Liability protection", "Performance guarantees", "Dispute resolution"]
    },
    {
      feature: "Quality Assurance",
      description: "Rigorous quality control processes",
      coverage: "95%",
      details: ["Skills verification", "Performance monitoring", "Client feedback", "Continuous improvement"]
    },
    {
      feature: "Data Security",
      description: "Robust data protection and privacy measures",
      coverage: "100%",
      details: ["GDPR compliance", "Data encryption", "Access controls", "Regular audits"]
    }
  ];

  const costAnalysis = [
    {
      factor: "Recruitment Costs",
      traditional: "$15,000",
      contingent: "$3,000",
      savings: "80%"
    },
    {
      factor: "Benefits & Overhead",
      traditional: "$25,000",
      contingent: "$0",
      savings: "100%"
    },
    {
      factor: "Training Costs",
      traditional: "$5,000",
      contingent: "$500",
      savings: "90%"
    },
    {
      factor: "Onboarding Time",
      traditional: "30 days",
      contingent: "2 days",
      savings: "93%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contingent Workforce Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Flexible staffing solutions for your dynamic business needs. Scale up or down with pre-vetted talent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-gray-600">Talent Pool</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24-48h</div>
              <div className="text-sm text-gray-600">Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">92%</div>
              <div className="text-sm text-gray-600">Fill Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contingent Workforce Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contingentServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <Badge variant="secondary" className="mt-2">{service.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Industries:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.industries.map((industry, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{industry}</Badge>
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

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workforceMetrics.map((metric, index) => (
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

      {/* Skill Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">In-Demand Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant={category.demand === 'Very High' ? 'destructive' : category.demand === 'High' ? 'default' : 'secondary'}>
                      {category.demand} Demand
                    </Badge>
                    <Badge variant="outline">{category.availability}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <div className="text-sm text-gray-600">Average Rate</div>
                      <div className="text-lg font-bold text-primary">{category.averageRate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Engagement Process</h2>
          <div className="space-y-8">
            {engagementProcess.map((step, index) => (
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
                    <h4 className="font-semibold text-sm mb-2">Key Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.activities.map((activity, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">{activity}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Cost Comparison Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {costAnalysis.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.factor}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Traditional:</span>
                      <span className="font-medium text-red-600">{item.traditional}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Contingent:</span>
                      <span className="font-medium text-green-600">{item.contingent}</span>
                    </div>
                    <div className="text-center pt-2">
                      <div className="text-2xl font-bold text-primary">{item.savings}</div>
                      <div className="text-sm text-gray-600">Savings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance & Risk Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.feature}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                  <Badge variant="secondary" className="mt-2">{feature.coverage} Coverage</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Flexible Workforce?</h2>
          <p className="text-xl mb-8 opacity-90">
            Access skilled talent quickly and cost-effectively with our contingent workforce solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Start Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Talent Pool
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}