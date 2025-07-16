import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Microscope, Target, Zap, Shield, CheckCircle, BarChart3, Clock, Award, TrendingUp } from "lucide-react";

export default function MolecularDiagnosticsProducts() {
  const diagnosticPlatforms = [
    {
      title: "PCR Systems",
      description: "Real-time PCR platforms for precise amplification",
      icon: Zap,
      specs: {
        throughput: "96-384 samples",
        sensitivity: "1-10 copies",
        time: "45-90 min",
        applications: ["Pathogen detection", "Genetic testing", "Viral load", "GMO detection"]
      }
    },
    {
      title: "Sequencing Solutions",
      description: "Next-generation sequencing platforms",
      icon: Target,
      specs: {
        throughput: "1-50 Gb/run",
        sensitivity: "0.1% variants",
        time: "4-24 hours",
        applications: ["Whole genome", "Targeted panels", "RNA-seq", "Metagenomics"]
      }
    },
    {
      title: "Point-of-Care Testing",
      description: "Rapid diagnostic testing devices",
      icon: Clock,
      specs: {
        throughput: "1-10 tests",
        sensitivity: "95-99%",
        time: "5-30 min",
        applications: ["Infectious disease", "Cardiac markers", "Pregnancy", "Drug testing"]
      }
    },
    {
      title: "Mass Spectrometry",
      description: "High-resolution molecular analysis",
      icon: BarChart3,
      specs: {
        throughput: "100-1000 samples",
        sensitivity: "pg/mL level",
        time: "2-10 min",
        applications: ["Proteomics", "Metabolomics", "Drug monitoring", "Toxicology"]
      }
    }
  ];

  const performanceMetrics = [
    { metric: "Sensitivity", value: "≥95%", progress: 96, color: "bg-green-500" },
    { metric: "Specificity", value: "≥98%", progress: 98, color: "bg-blue-500" },
    { metric: "Precision (CV)", value: "≤5%", progress: 95, color: "bg-purple-500" },
    { metric: "Turnaround Time", value: "≤2 hours", progress: 88, color: "bg-orange-500" },
    { metric: "Uptime", value: "≥99%", progress: 99, color: "bg-emerald-500" },
    { metric: "Cost Efficiency", value: "30% reduction", progress: 85, color: "bg-teal-500" }
  ];

  const clinicalApplications = [
    {
      category: "Infectious Disease",
      tests: ["COVID-19", "Influenza", "Tuberculosis", "Hepatitis", "HIV"],
      icon: Shield,
      volume: "45% of tests",
      growth: "+15%"
    },
    {
      category: "Oncology",
      tests: ["Cancer biomarkers", "Liquid biopsy", "Tumor profiling", "Therapy selection"],
      icon: Target,
      volume: "25% of tests",
      growth: "+22%"
    },
    {
      category: "Genetic Testing",
      tests: ["Hereditary diseases", "Pharmacogenomics", "Carrier screening", "Prenatal testing"],
      icon: Microscope,
      volume: "20% of tests",
      growth: "+18%"
    },
    {
      category: "Cardiovascular",
      tests: ["Cardiac markers", "Lipid panels", "Coagulation", "Inflammation"],
      icon: Award,
      volume: "10% of tests",
      growth: "+8%"
    }
  ];

  const workflow = [
    {
      step: "Sample Collection",
      description: "Automated sample processing and tracking",
      time: "2 min",
      automation: 90
    },
    {
      step: "Nucleic Acid Extraction",
      description: "High-throughput extraction protocols",
      time: "15 min",
      automation: 95
    },
    {
      step: "Amplification/Analysis",
      description: "Real-time monitoring and detection",
      time: "45 min",
      automation: 98
    },
    {
      step: "Data Analysis",
      description: "Automated result interpretation",
      time: "5 min",
      automation: 92
    },
    {
      step: "Report Generation",
      description: "Standardized reporting format",
      time: "3 min",
      automation: 88
    }
  ];

  const qualityAssurance = [
    { aspect: "Analytical Validation", score: 98, description: "Comprehensive analytical validation studies" },
    { aspect: "Clinical Validation", score: 95, description: "Clinical performance verification" },
    { aspect: "Quality Control", score: 97, description: "Continuous quality monitoring" },
    { aspect: "Regulatory Compliance", score: 99, description: "FDA/CE mark compliance" },
    { aspect: "Data Security", score: 94, description: "HIPAA compliant data handling" },
    { aspect: "Training & Support", score: 92, description: "Comprehensive user training" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Microscope className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Molecular Diagnostics Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced molecular diagnostic platforms for precision medicine and clinical excellence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10M+</div>
              <div className="text-sm text-gray-600">Tests Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.5%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600">Global Labs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Platforms */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Diagnostic Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diagnosticPlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <platform.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{platform.title}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Throughput:</span>
                        <span className="font-medium">{platform.specs.throughput}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sensitivity:</span>
                        <span className="font-medium">{platform.specs.sensitivity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{platform.specs.time}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {platform.specs.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{app}</Badge>
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
          <h2 className="text-3xl font-bold text-center mb-12">Performance Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{metric.metric}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-primary">{metric.value}</CardDescription>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${metric.color}`}></div>
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

      {/* Clinical Applications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Clinical Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicalApplications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <app.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{app.category}</CardTitle>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="secondary">{app.volume}</Badge>
                    <div className="flex items-center space-x-1 text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">{app.growth}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {app.tests.map((test, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {test}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Automation */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Automated Workflow</h2>
          <div className="space-y-8">
            {workflow.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.step}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Processing Time</div>
                      <div className="text-lg font-bold text-primary">{step.time}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Automation Level</span>
                      <span className="text-sm font-medium">{step.automation}%</span>
                    </div>
                    <Progress value={step.automation} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quality Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityAssurance.map((qa, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{qa.aspect}</CardTitle>
                  <CardDescription>{qa.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Quality Score</span>
                      <span className="text-lg font-bold text-primary">{qa.score}%</span>
                    </div>
                    <Progress value={qa.score} className="h-3" />
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
          <h2 className="text-3xl font-bold mb-6">Transform Your Diagnostic Capabilities</h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading laboratories worldwide using our molecular diagnostic solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Get Technical Info
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}