import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Activity, TestTube, Microscope, Worm, Shield, CheckCircle, BarChart3, Clock, Award } from "lucide-react";

export default function MolecularDiagnosticsProducts() {
  const diagnosticsKits = [
    {
      title: "SARS-CoV-2 (COVID-19) RT-PCR Kit",
      description: "High-sensitivity real-time RT-PCR assay for detection of SARS-CoV-2 RNA",
      icon: Activity,
      sensitivity: "≥95%",
      specificity: "≥98%",
      time: "2 hours",
      samples: ["Nasopharyngeal swab", "Respiratory specimens"],
      applications: ["Diagnosis", "Screening", "Surveillance", "Contact tracing"]
    },
    {
      title: "Hepatitis C Virus (HCV) Quantitative",
      description: "Precise quantification of HCV RNA for treatment monitoring",
      icon: TestTube,
      sensitivity: "≥96%",
      specificity: "≥99%",
      time: "3 hours",
      samples: ["Plasma", "Serum", "EDTA blood"],
      applications: ["Treatment monitoring", "Viral load", "Genotyping", "Research"]
    },
    {
      title: "Human Papillomavirus (HPV) Genotyping",
      description: "Comprehensive HPV genotyping assay for cervical cancer screening",
      icon: Microscope,
      sensitivity: "≥94%",
      specificity: "≥97%",
      time: "4 hours",
      samples: ["Cervical specimens", "Liquid-based cytology"],
      applications: ["Cancer screening", "Risk assessment", "Management", "Follow-up"]
    },
    {
      title: "Human Immunodeficiency Virus (HIV)",
      description: "Highly sensitive HIV detection and viral load monitoring assay",
      icon: Shield,
      sensitivity: "≥98%",
      specificity: "≥99%",
      time: "3 hours",
      samples: ["Plasma", "Serum", "Whole blood"],
      applications: ["Diagnosis", "Viral load", "Treatment monitoring", "Disease progression"]
    },
    {
      title: "Dengue, Chikungunya",
      description: "Multiplex assay for simultaneous detection of Dengue and Chikungunya virus",
      icon: Worm,
      sensitivity: "≥96%",
      specificity: "≥98%",
      time: "2.5 hours",
      samples: ["Serum", "Plasma", "Whole blood"],
      applications: ["Tropical disease", "Differential diagnosis", "Outbreak response", "Surveillance"]
    },
    {
      title: "Monkeypox Flu",
      description: "Rapid detection assay for Monkeypox virus and influenza co-detection",
      icon: TestTube,
      sensitivity: "≥97%",
      specificity: "≥99%",
      time: "1.5 hours",
      samples: ["Swab", "Lesion", "Respiratory specimens"],
      applications: ["Outbreak response", "Differential diagnosis", "Public health", "Surveillance"]
    },
    {
      title: "Hepatitis B Virus (HBV) Quantitative",
      description: "Accurate quantification of HBV DNA for chronic hepatitis B monitoring",
      icon: Activity,
      sensitivity: "≥96%",
      specificity: "≥98%",
      time: "3.5 hours",
      samples: ["Plasma", "Serum", "EDTA blood"],
      applications: ["Treatment monitoring", "Drug resistance", "Viral load", "Disease management"]
    },
    {
      title: "HBV & HCV & HIV-1 Quantitative",
      description: "Comprehensive multiplex assay for simultaneous quantification of three viruses",
      icon: Microscope,
      sensitivity: "≥95%",
      specificity: "≥97%",
      time: "4 hours",
      samples: ["Plasma", "Serum", "EDTA blood"],
      applications: ["Co-infection monitoring", "Treatment response", "Cost-effective testing", "Resource optimization"]
    },
    {
      title: "Mycobacterium Tuberculosis (MTB)",
      description: "Rapid molecular detection of MTB complex with drug resistance profiling",
      icon: Shield,
      sensitivity: "≥98%",
      specificity: "≥99%",
      time: "2 hours",
      samples: ["Sputum", "BAL", "Respiratory specimens"],
      applications: ["TB diagnosis", "Drug resistance", "Treatment guidance", "Public health"]
    },
    {
      title: "Swine Flu, H1A-H7",
      description: "Comprehensive influenza subtyping assay for pandemic preparedness",
      icon: Worm,
      sensitivity: "≥96%",
      specificity: "≥98%",
      time: "2.5 hours",
      samples: ["Respiratory swabs", "Nasopharyngeal specimens"],
      applications: ["Pandemic surveillance", "Subtype identification", "Outbreak response", "Research"]
    }
  ];

  const performanceMetrics = [
    { metric: "Analytical Sensitivity", value: "95-99%", progress: 97 },
    { metric: "Analytical Specificity", value: "97-99%", progress: 98 },
    { metric: "Processing Time", value: "1.5-4 hours", progress: 85 },
    { metric: "Success Rate", value: "99.5%", progress: 99 },
    { metric: "Reproducibility", value: "CV <3%", progress: 96 },
    { metric: "Shelf Life", value: "18-24 months", progress: 92 }
  ];

  const applications = [
    {
      title: "Clinical Diagnostics",
      description: "Disease diagnosis and patient management",
      icon: Award,
      examples: ["Infectious diseases", "Viral load monitoring", "Drug resistance testing", "Treatment response"]
    },
    {
      title: "Public Health Surveillance",
      description: "Population health monitoring and outbreak response",
      icon: Shield,
      examples: ["Pandemic preparedness", "Disease surveillance", "Outbreak investigation", "Contact tracing"]
    },
    {
      title: "Research Applications",
      description: "Academic and pharmaceutical research",
      icon: Microscope,
      examples: ["Drug development", "Epidemiological studies", "Viral evolution", "Biomarker discovery"]
    },
    {
      title: "Point-of-Care Testing",
      description: "Rapid testing in clinical settings",
      icon: TestTube,
      examples: ["Emergency departments", "Remote locations", "Resource-limited settings", "Rapid diagnosis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <Microscope className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Molecular Diagnostics Products
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                Comprehensive molecular diagnostic solutions for clinical laboratories and healthcare providers
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Badge variant="secondary" className="text-sm py-2 px-4">High Sensitivity</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Rapid Results</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">FDA Approved</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">CE Marked</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Molecular Diagnostics Laboratory Setup" 
                className="rounded-xl shadow-xl w-full max-w-md h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Diagnostic Test Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {diagnosticsKits.map((kit, index) => {
              const getGradientColor = (idx: number) => {
                const colors = [
                  'from-blue-100 to-blue-50 border-l-4 border-l-blue-500',
                  'from-red-100 to-red-50 border-l-4 border-l-red-500',
                  'from-purple-100 to-purple-50 border-l-4 border-l-purple-500',
                  'from-orange-100 to-orange-50 border-l-4 border-l-orange-500',
                  'from-yellow-100 to-yellow-50 border-l-4 border-l-yellow-500',
                  'from-indigo-100 to-indigo-50 border-l-4 border-l-indigo-500',
                  'from-teal-100 to-teal-50 border-l-4 border-l-teal-500',
                  'from-pink-100 to-pink-50 border-l-4 border-l-pink-500',
                  'from-green-100 to-green-50 border-l-4 border-l-green-500',
                  'from-cyan-100 to-cyan-50 border-l-4 border-l-cyan-500'
                ];
                return colors[idx % colors.length];
              };

              const getIconColor = (idx: number) => {
                const colors = [
                  'text-blue-600',
                  'text-red-600',
                  'text-purple-600',
                  'text-orange-600',
                  'text-yellow-600',
                  'text-indigo-600',
                  'text-teal-600',
                  'text-pink-600',
                  'text-green-600',
                  'text-cyan-600'
                ];
                return colors[idx % colors.length];
              };

              return (
                <Card key={index} className={`h-80 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br ${getGradientColor(index)} overflow-hidden relative`}>
                  {/* Background Shape */}
                  <div className="absolute bottom-0 right-0 opacity-20 transform rotate-12 translate-x-6 translate-y-6">
                    <kit.icon className="w-24 h-24 text-gray-400" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/80 rounded-full mb-3 shadow-sm`}>
                        <kit.icon className={`w-6 h-6 ${getIconColor(index)}`} />
                      </div>
                      <CardTitle className="text-base font-bold text-gray-800 mb-1 leading-tight">{kit.title}</CardTitle>
                      <CardDescription className="text-xs text-gray-600 leading-tight">{kit.description}</CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3 relative z-10 pb-4">
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="font-semibold text-gray-700">Sensitivity</div>
                        <div className="text-sm font-bold text-gray-800">{kit.sensitivity}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">Specificity</div>
                        <div className="text-sm font-bold text-gray-800">{kit.specificity}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">Time</div>
                        <div className="text-sm font-bold text-gray-800">{kit.time}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">Sample</div>
                        <div className="text-xs font-bold text-gray-800">{kit.samples[0].split(' ')[0]}</div>
                      </div>
                    </div>

                    {/* Sample Types */}
                    <div>
                      <div className="text-xs font-semibold text-gray-700 mb-1">Sample Types:</div>
                      <div className="flex flex-wrap gap-1">
                        {kit.samples.slice(0, 3).map((sample, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs py-0 px-1 h-5">
                            {sample.split(' ')[0]}
                          </Badge>
                        ))}
                        {kit.samples.length > 3 && (
                          <Badge variant="outline" className="text-xs py-0 px-1 h-5">
                            +{kit.samples.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <div className="text-xs font-semibold text-gray-700 mb-1">Applications:</div>
                      <div className="flex flex-wrap gap-1">
                        {kit.applications.slice(0, 4).map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs py-0 px-1 h-5">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button size="sm" className="w-full mt-2 bg-white/90 text-gray-800 hover:bg-white text-xs h-7">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white/70">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{metric.metric}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">{metric.value}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={metric.progress} className="w-full" />
                  <p className="text-sm text-gray-600 mt-2">{metric.progress}% Performance</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <app.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {app.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}