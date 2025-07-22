import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Globe, Code, Smartphone, Cloud, CheckCircle, Zap, Shield, Award } from "lucide-react";

export default function WebAppSolutions() {
  const solutions = [
    {
      title: "Custom Web Applications",
      description: "Tailored web applications for your business needs",
      icon: Globe,
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      features: ["Responsive design", "Real-time updates", "API integration", "User authentication"],
      timeline: "8-16 weeks",
      pricing: "Starting at $15,000"
    },
    {
      title: "Mobile-First Development",
      description: "Mobile-optimized applications and PWAs",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "PWA", "Ionic"],
      features: ["Cross-platform", "Offline capability", "Push notifications", "App store ready"],
      timeline: "6-12 weeks",
      pricing: "Starting at $12,000"
    },
    {
      title: "Cloud-Native Solutions",
      description: "Scalable cloud-based applications",
      icon: Cloud,
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
      features: ["Auto-scaling", "High availability", "Microservices", "CI/CD pipeline"],
      timeline: "10-20 weeks",
      pricing: "Starting at $25,000"
    },
    {
      title: "Enterprise Integration",
      description: "Legacy system modernization and integration",
      icon: Code,
      technologies: ["APIs", "GraphQL", "Microservices", "Message queues"],
      features: ["Legacy integration", "Data migration", "Security compliance", "Performance optimization"],
      timeline: "12-24 weeks",
      pricing: "Starting at $35,000"
    }
  ];

  const developmentProcess = [
    {
      phase: "Discovery & Planning",
      duration: "1-2 weeks",
      activities: ["Requirements gathering", "Technical architecture", "Project roadmap", "Team setup"],
      deliverables: ["Technical specification", "Project timeline", "Resource allocation"]
    },
    {
      phase: "Design & Prototyping",
      duration: "2-3 weeks",
      activities: ["UI/UX design", "Wireframing", "Prototyping", "User testing"],
      deliverables: ["Design mockups", "Interactive prototype", "Style guide"]
    },
    {
      phase: "Development & Testing",
      duration: "4-12 weeks",
      activities: ["Frontend development", "Backend development", "Quality assurance", "Integration testing"],
      deliverables: ["Working application", "Test reports", "Code documentation"]
    },
    {
      phase: "Deployment & Launch",
      duration: "1-2 weeks",
      activities: ["Production deployment", "Performance optimization", "Security testing", "Go-live support"],
      deliverables: ["Live application", "Deployment guide", "Performance metrics"]
    },
    {
      phase: "Maintenance & Support",
      duration: "Ongoing",
      activities: ["Bug fixes", "Feature updates", "Performance monitoring", "Security updates"],
      deliverables: ["Regular updates", "Support reports", "Enhancement recommendations"]
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      stack: ["React", "Vue.js", "Angular", "TypeScript", "Next.js"],
      expertise: 95,
      projects: 150
    },
    {
      category: "Backend",
      stack: ["Node.js", "Python", "Java", "C#", "Go"],
      expertise: 92,
      projects: 120
    },
    {
      category: "Database",
      stack: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
      expertise: 88,
      projects: 100
    },
    {
      category: "Cloud & DevOps",
      stack: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
      expertise: 85,
      projects: 80
    },
    {
      category: "Mobile",
      stack: ["React Native", "Flutter", "PWA", "Ionic", "Xamarin"],
      expertise: 82,
      projects: 60
    }
  ];

  const projectShowcase = [
    {
      title: "Healthcare Management System",
      client: "Regional Medical Center",
      description: "Comprehensive patient management and scheduling system",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      features: ["Patient records", "Appointment scheduling", "Billing integration", "Reporting"],
      outcome: "50% reduction in administrative time",
      timeline: "16 weeks",
      team: "6 developers"
    },
    {
      title: "Laboratory Information System",
      client: "Diagnostic Labs Inc.",
      description: "End-to-end laboratory workflow management",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
      features: ["Sample tracking", "Result reporting", "Quality control", "Integration APIs"],
      outcome: "40% faster result delivery",
      timeline: "12 weeks",
      team: "4 developers"
    },
    {
      title: "E-commerce Platform",
      client: "Medical Supply Company",
      description: "B2B medical equipment marketplace",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
      features: ["Product catalog", "Order management", "Payment processing", "Inventory tracking"],
      outcome: "200% increase in online sales",
      timeline: "20 weeks",
      team: "8 developers"
    }
  ];

  const qualityMetrics = [
    { metric: "Code Quality", score: 95, description: "Automated testing and code review" },
    { metric: "Performance", score: 92, description: "Page load times under 2 seconds" },
    { metric: "Security", score: 98, description: "OWASP compliance and security audits" },
    { metric: "Reliability", score: 99, description: "99.9% uptime guarantee" },
    { metric: "Scalability", score: 88, description: "Handles 10x traffic spikes" },
    { metric: "User Experience", score: 94, description: "Intuitive and responsive design" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Web App Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Custom web applications built with modern technologies to accelerate your business growth
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-gray-600">Apps Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2 sec</div>
              <div className="text-sm text-gray-600">Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <button 
              className="relative px-12 py-4 text-lg font-semibold text-white rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-4 border-transparent mb-4"
              style={{
                background: 'linear-gradient(45deg, #22c55e, #16a34a, #15803d, #22c55e)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite',
                border: '4px solid transparent',
                backgroundClip: 'padding-box',
                position: 'relative',
              }}
              onClick={() => window.open('https://niddik.com', '_blank')}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
            >
              <span className="relative z-10">Get Started with Our Web App Solutions</span>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #10b981, #059669, #047857, #10b981)',
                  backgroundSize: '300% 300%',
                  animation: 'gradientShift 3s ease infinite reverse',
                  opacity: '0.3',
                }}
              ></div>
            </button>
            <p className="text-sm text-gray-600">Check out Niddik.com for the services</p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Web App Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {solution.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between text-sm">
                        <span>Timeline:</span>
                        <span className="font-medium">{solution.timeline}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span>Pricing:</span>
                        <span className="font-medium text-primary">{solution.pricing}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="flex flex-col items-center mt-16">
            <button 
              className="relative px-12 py-4 text-lg font-semibold text-white rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-4 border-transparent mb-4"
              style={{
                background: 'linear-gradient(45deg, #22c55e, #16a34a, #15803d, #22c55e)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite',
                border: '4px solid transparent',
                backgroundClip: 'padding-box',
                position: 'relative',
              }}
              onClick={() => window.open('https://niddik.com', '_blank')}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
            >
              <span className="relative z-10">Get Started with Our Web App Solutions</span>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #10b981, #059669, #047857, #10b981)',
                  backgroundSize: '300% 300%',
                  animation: 'gradientShift 3s ease infinite reverse',
                  opacity: '0.3',
                }}
              ></div>
            </button>
            <p className="text-sm text-gray-600">Check out Niddik.com for the services</p>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Development Process</h2>
          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <CardDescription>Duration: {phase.duration}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Activities:</h4>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Deliverables:</h4>
                      <div className="flex flex-wrap gap-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{deliverable}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="flex flex-col items-center mt-16">
            <button 
              className="relative px-12 py-4 text-lg font-semibold text-white rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-4 border-transparent mb-4"
              style={{
                background: 'linear-gradient(45deg, #22c55e, #16a34a, #15803d, #22c55e)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite',
                border: '4px solid transparent',
                backgroundClip: 'padding-box',
                position: 'relative',
              }}
              onClick={() => window.open('https://niddik.com', '_blank')}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
            >
              <span className="relative z-10">Get Started with Our Web App Solutions</span>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #10b981, #059669, #047857, #10b981)',
                  backgroundSize: '300% 300%',
                  animation: 'gradientShift 3s ease infinite reverse',
                  opacity: '0.3',
                }}
              ></div>
            </button>
            <p className="text-sm text-gray-600">Check out Niddik.com for the services</p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{tech.category}</CardTitle>
                  <div className="text-sm text-gray-600">{tech.projects} projects</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Expertise Level</span>
                      <span className="text-sm font-medium">{tech.expertise}%</span>
                    </div>
                    <Progress value={tech.expertise} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-3">
                      {tech.stack.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="flex flex-col items-center mt-16">
            <button 
              className="relative px-12 py-4 text-lg font-semibold text-white rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-4 border-transparent mb-4"
              style={{
                background: 'linear-gradient(45deg, #22c55e, #16a34a, #15803d, #22c55e)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite',
                border: '4px solid transparent',
                backgroundClip: 'padding-box',
                position: 'relative',
              }}
              onClick={() => window.open('https://niddik.com', '_blank')}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
            >
              <span className="relative z-10">Get Started with Our Web App Solutions</span>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #10b981, #059669, #047857, #10b981)',
                  backgroundSize: '300% 300%',
                  animation: 'gradientShift 3s ease infinite reverse',
                  opacity: '0.3',
                }}
              ></div>
            </button>
            <p className="text-sm text-gray-600">Check out Niddik.com for the services</p>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Project Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectShowcase.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                  <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="text-sm font-medium text-green-600 mb-2">
                        Outcome: {project.outcome}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Timeline: {project.timeline}</div>
                        <div>Team: {project.team}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="flex flex-col items-center mt-16">
            <button 
              className="relative px-12 py-4 text-lg font-semibold text-white rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-4 border-transparent mb-4"
              style={{
                background: 'linear-gradient(45deg, #22c55e, #16a34a, #15803d, #22c55e)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite',
                border: '4px solid transparent',
                backgroundClip: 'padding-box',
                position: 'relative',
              }}
              onClick={() => window.open('https://niddik.com', '_blank')}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
            >
              <span className="relative z-10">Get Started with Our Web App Solutions</span>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #10b981, #059669, #047857, #10b981)',
                  backgroundSize: '300% 300%',
                  animation: 'gradientShift 3s ease infinite reverse',
                  opacity: '0.3',
                }}
              ></div>
            </button>
            <p className="text-sm text-gray-600">Check out Niddik.com for the services</p>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quality Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{metric.metric}</CardTitle>
                  <CardDescription>{metric.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Quality Score</span>
                      <span className="text-2xl font-bold text-primary">{metric.score}%</span>
                    </div>
                    <Progress value={metric.score} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="flex flex-col items-center mt-16">
            <button 
              className="relative px-12 py-4 text-lg font-semibold text-white rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-4 border-transparent mb-4"
              style={{
                background: 'linear-gradient(45deg, #22c55e, #16a34a, #15803d, #22c55e)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite',
                border: '4px solid transparent',
                backgroundClip: 'padding-box',
                position: 'relative',
              }}
              onClick={() => window.open('https://niddik.com', '_blank')}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
            >
              <span className="relative z-10">Get Started with Our Web App Solutions</span>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #10b981, #059669, #047857, #10b981)',
                  backgroundSize: '300% 300%',
                  animation: 'gradientShift 3s ease infinite reverse',
                  opacity: '0.3',
                }}
              ></div>
            </button>
            <p className="text-sm text-gray-600">Check out Niddik.com for the services</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Next Web Application?</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your business with custom web applications built by experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}