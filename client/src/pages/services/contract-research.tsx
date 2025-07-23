import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Microscope, BarChart3, FlaskConical, Target, Calendar, Award, Users2 } from "lucide-react";
import SEO from "@/components/seo";

export default function ContractResearch() {
  const researchAreas = [
    {
      title: "Preclinical Studies",
      description: "Comprehensive preclinical research services",
      icon: FlaskConical,
      progress: 95,
      color: "bg-green-500"
    },
    {
      title: "Clinical Trials",
      description: "Full-service clinical trial management",
      icon: Users2,
      progress: 88,
      color: "bg-blue-500"
    },
    {
      title: "Bioanalytical Services",
      description: "Advanced analytical testing and validation",
      icon: Microscope,
      progress: 92,
      color: "bg-purple-500"
    },
    {
      title: "Regulatory Affairs",
      description: "Regulatory strategy and submissions",
      icon: FileText,
      progress: 90,
      color: "bg-orange-500"
    }
  ];

  const capabilities = [
    { name: "Protocol Development", value: 95 },
    { name: "Data Analysis", value: 88 },
    { name: "Quality Assurance", value: 92 },
    { name: "Regulatory Compliance", value: 90 },
    { name: "Project Management", value: 85 },
    { name: "Statistical Analysis", value: 93 }
  ];

  const projects = [
    {
      title: "Oncology Drug Development",
      client: "Pharma Company A",
      duration: "18 months",
      status: "Completed",
      results: "Regulatory approval achieved"
    },
    {
      title: "Cardiovascular Device Study",
      client: "Medical Device Corp",
      duration: "12 months",
      status: "In Progress",
      results: "Phase II ongoing"
    },
    {
      title: "Rare Disease Research",
      client: "Biotech Startup",
      duration: "24 months",
      status: "Completed",
      results: "Special designation obtained"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <SEO pagePath="/services/contract-research" />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contract Research Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Accelerate your research with our expert contract research organization (CRO) services
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm py-2 px-4">Quality Compliant</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Regulatory Expertise</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Clinical Standards</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Data Integrity</Badge>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Research Excellence Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${area.color} rounded-full mb-4`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Success Rate</span>
                      <span>{area.progress}%</span>
                    </div>
                    <Progress value={area.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Chart */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Capabilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{capability.name}</span>
                    <span className="text-sm text-gray-500">{capability.value}%</span>
                  </div>
                  <Progress value={capability.value} className="h-3" />
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our CRO?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Proven Track Record</h4>
                    <p className="text-gray-600">Over 200 successful studies completed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Specialized Expertise</h4>
                    <p className="text-gray-600">Deep knowledge in therapeutic areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Timely Delivery</h4>
                    <p className="text-gray-600">95% of projects delivered on schedule</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Duration:</span>
                      <span className="text-sm">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Status:</span>
                      <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-medium text-green-600">{project.results}</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Research?</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with our experienced CRO team for your next research project
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}