import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { 
  Users, 
  Briefcase, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Shield,
  Zap,
  Code,
  Target,
  Building,
  Star,
  Award,
  DollarSign,
  Smartphone,
  Cloud
} from "lucide-react";

export default function ITSolutions() {
  const solutions = [
    {
      id: "rpo",
      title: "Recruitment Process Outsourcing (RPO)",
      subtitle: "End-to-end talent acquisition solutions",
      description: "Comprehensive recruitment services from needs analysis to onboarding, designed to scale with your business growth.",
      icon: Users,
      link: "/it-solutions/rpo",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      stats: [
        { label: "Communities Engaged", value: "10K+" },
        { label: "Panelled Customers", value: "12+" },
        { label: "Faster Time to Submit", value: "50%" },
        { label: "Talent Pools", value: "500K+" }
      ],
      features: [
        "Needs Analysis & Strategy Development",
        "Multi-channel Talent Sourcing",
        "Screening & Interview Coordination",
        "Onboarding & Retention Support"
      ],
      benefits: [
        "Reduced time-to-hire by up to 40%",
        "Cost savings on recruitment operations",
        "Improved candidate quality and retention",
        "Enhanced employer branding"
      ],
      industries: ["Healthcare", "Life Sciences", "Technology", "Manufacturing", "Financial Services", "Pharmaceuticals"],
      processSteps: 4,
      timeline: "11-22 days"
    },
    {
      id: "contingent",
      title: "Contingent Workforce Management",
      subtitle: "Flexible staffing for dynamic business needs",
      description: "Access specialized talent for project-based work, interim leadership, and temporary technical expertise with full compliance management.",
      icon: Briefcase,
      link: "/it-solutions/contingent",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100",
      stats: [
        { label: "Specialist Contractors", value: "5K+" },
        { label: "Active Projects", value: "25+" },
        { label: "Deployment Speed", value: "48hr" },
        { label: "Retention Rate", value: "95%" }
      ],
      features: [
        "Requirement Definition & Planning",
        "Specialized Talent Sourcing",
        "Contract & Compliance Management",
        "Performance Monitoring & Quality"
      ],
      benefits: [
        "Access to specialized skills for limited durations",
        "Reduced administrative and compliance burden",
        "Flexibility to scale workforce with demand",
        "Lower long-term employment costs"
      ],
      industries: ["Information Technology", "Healthcare", "Engineering", "Finance", "Manufacturing", "Consulting"],
      processSteps: 4,
      timeline: "4-10 days"
    },
    {
      id: "web-app",
      title: "Web & App Solutions",
      subtitle: "Custom applications for digital transformation",
      description: "Modern web applications built with cutting-edge technologies to accelerate business growth and digital transformation.",
      icon: Globe,
      link: "/it-solutions/web-app-solutions",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-100",
      stats: [
        { label: "Apps Delivered", value: "200+" },
        { label: "Uptime Guarantee", value: "99.9%" },
        { label: "Average Load Time", value: "2 sec" },
        { label: "Support Availability", value: "24/7" }
      ],
      features: [
        "Custom Web Applications",
        "Mobile-First Development & PWAs",
        "Cloud-Native Solutions",
        "Enterprise Integration & Legacy Modernization"
      ],
      benefits: [
        "Scalable and performant applications",
        "Modern technology stack",
        "Full-stack development expertise",
        "End-to-end project management"
      ],
      technologies: [
        { category: "Frontend", stack: ["React", "Vue.js", "Angular", "TypeScript", "Next.js"] },
        { category: "Backend", stack: ["Node.js", "Python", "Java", "C#", "Go"] },
        { category: "Database", stack: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
        { category: "Cloud", stack: ["AWS", "Azure", "Docker", "Kubernetes"] }
      ],
      processSteps: 5,
      timeline: "6-24 weeks"
    }
  ];

  const companyStats = [
    { label: "Total Projects Delivered", value: "500+", icon: Award },
    { label: "Client Satisfaction Rate", value: "98%", icon: Star },
    { label: "Years of Experience", value: "10+", icon: Clock },
    { label: "Team Members", value: "100+", icon: Users }
  ];

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of healthcare, life sciences, and technology sectors",
      icon: Target,
      highlight: "Specialized Knowledge"
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered 500+ projects with 98% client satisfaction",
      icon: Award,
      highlight: "Trusted Partner"
    },
    {
      title: "Comprehensive Solutions",
      description: "From talent acquisition to technology development - we cover it all",
      icon: Building,
      highlight: "Full-Service Provider"
    },
    {
      title: "Agile Methodology",
      description: "Fast delivery with iterative development and continuous improvement",
      icon: Zap,
      highlight: "Quick Results"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8 shadow-xl">
            <Code className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            IT Solutions & Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive IT solutions. From talent acquisition to custom application development, 
            we provide end-to-end services that drive growth and innovation.
          </p>
          
          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <Button 
              size="lg"
              className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://niddik.com', '_blank')}
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-gray-600 mt-3">Visit Niddik.com for complete service details</p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three specialized service areas designed to address your complete business transformation needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 overflow-hidden relative">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${solution.color} rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-blue-600 mb-3">{solution.subtitle}</CardDescription>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {solution.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-gray-800">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process Info */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{solution.processSteps}</div>
                      <div className="text-xs text-gray-600">Process Steps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{solution.timeline}</div>
                      <div className="text-xs text-gray-600">Typical Timeline</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href={solution.link}>
                    <Button 
                      className={`w-full bg-gradient-to-r ${solution.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      size="lg"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose NIDDIKKARE LLP</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for comprehensive IT solutions and business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-gray-50 to-blue-50">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 mx-auto">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-700">{item.highlight}</Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Comparison</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare our three core solutions to find the right fit for your business needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">RPO</th>
                  <th className="px-6 py-4 text-center font-semibold">Contingent</th>
                  <th className="px-6 py-4 text-center font-semibold">Web Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                  <td className="px-6 py-4 text-center text-gray-700">Long-term hiring needs</td>
                  <td className="px-6 py-4 text-center text-gray-700">Project-based work</td>
                  <td className="px-6 py-4 text-center text-gray-700">Digital transformation</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Timeline</td>
                  <td className="px-6 py-4 text-center text-gray-700">11-22 days</td>
                  <td className="px-6 py-4 text-center text-gray-700">4-10 days</td>
                  <td className="px-6 py-4 text-center text-gray-700">6-24 weeks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Primary Focus</td>
                  <td className="px-6 py-4 text-center text-gray-700">Talent Acquisition</td>
                  <td className="px-6 py-4 text-center text-gray-700">Flexible Staffing</td>
                  <td className="px-6 py-4 text-center text-gray-700">Technology Solutions</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Support Model</td>
                  <td className="px-6 py-4 text-center text-gray-700">End-to-end process</td>
                  <td className="px-6 py-4 text-center text-gray-700">Project duration</td>
                  <td className="px-6 py-4 text-center text-gray-700">Ongoing maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how our IT solutions can accelerate your growth and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://niddik.com', '_blank')}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}