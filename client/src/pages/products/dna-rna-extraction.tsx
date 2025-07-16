import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dna, FlaskConical, Zap, Shield, CheckCircle, BarChart3, Clock, Award } from "lucide-react";

export default function DnaRnaExtractionProducts() {
  const extractionKits = [
    {
      title: "Plant DNA Extraction Kit",
      description: "High-purity DNA extraction from plant tissues",
      icon: Dna,
      purity: "≥99%",
      yield: "High",
      time: "45 min",
      samples: ["Leaves", "Stems", "Flowers", "Seeds"],
      applications: ["PCR", "Sequencing", "Genotyping", "Breeding"]
    },
    {
      title: "Tissue DNA Extraction Kit",
      description: "Optimized for animal tissue samples",
      icon: FlaskConical,
      purity: "≥98%",
      yield: "Excellent",
      time: "30 min",
      samples: ["Muscle", "Liver", "Kidney", "Brain"],
      applications: ["PCR", "Sequencing", "Cloning", "Genotyping"]
    },
    {
      title: "Blood DNA Extraction Kit",
      description: "Efficient DNA extraction from blood samples",
      icon: Zap,
      purity: "≥97%",
      yield: "Very High",
      time: "30 min",
      samples: ["Whole blood", "EDTA blood", "Buffy coat"],
      applications: ["PCR", "Sequencing", "Diagnostics", "Research"]
    },
    {
      title: "Blood & Cell Culture DNA Extraction Kit",
      description: "Dual-purpose kit for blood and cultured cells",
      icon: Shield,
      purity: "≥98%",
      yield: "High",
      time: "25 min",
      samples: ["Blood", "Cultured cells", "Suspension cells"],
      applications: ["PCR", "Sequencing", "Cloning", "Transfection"]
    },
    {
      title: "Gel & PCR Product Purification Kit",
      description: "Purification of DNA from gels and PCR reactions",
      icon: Dna,
      purity: "≥95%",
      yield: "Good",
      time: "15 min",
      samples: ["Agarose gel", "PCR products", "Enzymatic reactions"],
      applications: ["Cloning", "Sequencing", "Ligation", "Transformation"]
    },
    {
      title: "Plant RNA Extraction Kit",
      description: "Specialized RNA extraction from plant tissues",
      icon: FlaskConical,
      purity: "≥98%",
      yield: "Excellent",
      time: "40 min",
      samples: ["Leaves", "Roots", "Fruits", "Seeds"],
      applications: ["RT-PCR", "RNA-seq", "Gene expression", "qPCR"]
    },
    {
      title: "Tissue RNA Extraction Kit",
      description: "High-quality RNA from animal tissues",
      icon: Zap,
      purity: "≥97%",
      yield: "High",
      time: "35 min",
      samples: ["Muscle", "Liver", "Brain", "Heart"],
      applications: ["RT-PCR", "RNA-seq", "Gene expression", "Microarray"]
    },
    {
      title: "Viral Nucleic Acid Extraction Kit",
      description: "Extraction of viral DNA and RNA",
      icon: Shield,
      purity: "≥96%",
      yield: "Good",
      time: "25 min",
      samples: ["Serum", "Plasma", "Swabs", "Viral cultures"],
      applications: ["Viral load", "Diagnostics", "Surveillance", "Research"]
    },
    {
      title: "Blood & Cell Culture RNA Extraction Kit",
      description: "RNA extraction from blood and cultured cells",
      icon: Dna,
      purity: "≥97%",
      yield: "High",
      time: "30 min",
      samples: ["Blood", "Cultured cells", "Primary cells"],
      applications: ["RT-PCR", "RNA-seq", "Gene expression", "Biomarkers"]
    },
    {
      title: "Plasmid DNA Extraction Kit",
      description: "Efficient plasmid DNA purification",
      icon: FlaskConical,
      purity: "≥95%",
      yield: "Very High",
      time: "15 min",
      samples: ["E. coli", "Bacterial cultures", "Transformed cells"],
      applications: ["Cloning", "Transfection", "Sequencing", "Mutagenesis"]
    }
  ];

  const performanceMetrics = [
    { metric: "Purity (A260/A280)", value: "1.8-2.0", progress: 95 },
    { metric: "Yield Recovery", value: "85-95%", progress: 90 },
    { metric: "Processing Time", value: "15-30 min", progress: 88 },
    { metric: "Success Rate", value: "99.2%", progress: 99 },
    { metric: "Reproducibility", value: "CV <5%", progress: 94 },
    { metric: "Storage Stability", value: "2 years", progress: 92 }
  ];

  const protocols = [
    {
      step: "1",
      title: "Sample Preparation",
      description: "Collect and prepare samples according to protocol",
      time: "5 min",
      icon: FlaskConical
    },
    {
      step: "2",
      title: "Lysis",
      description: "Cell lysis using optimized buffer system",
      time: "10 min",
      icon: Zap
    },
    {
      step: "3",
      title: "Binding",
      description: "Nucleic acid binding to silica membrane",
      time: "5 min",
      icon: Shield
    },
    {
      step: "4",
      title: "Washing",
      description: "Remove contaminants with wash buffers",
      time: "8 min",
      icon: Dna
    },
    {
      step: "5",
      title: "Elution",
      description: "Elute pure nucleic acids",
      time: "2 min",
      icon: BarChart3
    }
  ];

  const qualityData = [
    { parameter: "DNA Integrity", value: 98, color: "bg-green-500" },
    { parameter: "RNA Integrity", value: 96, color: "bg-blue-500" },
    { parameter: "Protein Contamination", value: 5, color: "bg-red-500", inverse: true },
    { parameter: "Salt Contamination", value: 3, color: "bg-yellow-500", inverse: true }
  ];

  const applications = [
    {
      title: "Clinical Diagnostics",
      description: "Disease diagnosis and monitoring",
      icon: Award,
      examples: ["COVID-19 testing", "Genetic disorders", "Cancer biomarkers", "Infectious diseases"]
    },
    {
      title: "Research Applications",
      description: "Academic and pharmaceutical research",
      icon: FlaskConical,
      examples: ["Gene expression", "Genome sequencing", "Drug discovery", "Biomarker studies"]
    },
    {
      title: "Forensic Analysis",
      description: "Criminal investigation and paternity testing",
      icon: Shield,
      examples: ["DNA fingerprinting", "Paternity testing", "Criminal cases", "Mass disasters"]
    },
    {
      title: "Agricultural Testing",
      description: "Plant and animal genetic analysis",
      icon: Dna,
      examples: ["Crop improvement", "Disease resistance", "Breeding programs", "GMO detection"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <Dna className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                DNA/RNA Extraction Products
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                Advanced nucleic acid extraction solutions for research, diagnostics, and clinical applications
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Badge variant="secondary" className="text-sm py-2 px-4">High Purity</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Fast Protocol</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Reliable Results</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">FDA Approved</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="DNA/RNA Extraction Laboratory Setup" 
                className="rounded-xl shadow-xl w-full max-w-md h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Extraction Kit Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {extractionKits.map((kit, index) => {
              const getGradientColor = (idx: number) => {
                const colors = [
                  'from-green-100 to-green-50 border-l-4 border-l-green-500',
                  'from-blue-100 to-blue-50 border-l-4 border-l-blue-500',
                  'from-yellow-100 to-yellow-50 border-l-4 border-l-yellow-500',
                  'from-purple-100 to-purple-50 border-l-4 border-l-purple-500',
                  'from-red-100 to-red-50 border-l-4 border-l-red-500',
                  'from-indigo-100 to-indigo-50 border-l-4 border-l-indigo-500',
                  'from-pink-100 to-pink-50 border-l-4 border-l-pink-500',
                  'from-teal-100 to-teal-50 border-l-4 border-l-teal-500',
                  'from-orange-100 to-orange-50 border-l-4 border-l-orange-500',
                  'from-cyan-100 to-cyan-50 border-l-4 border-l-cyan-500'
                ];
                return colors[idx % colors.length];
              };

              const getIconColor = (idx: number) => {
                const colors = [
                  'text-green-600',
                  'text-blue-600',
                  'text-yellow-600',
                  'text-purple-600',
                  'text-red-600',
                  'text-indigo-600',
                  'text-pink-600',
                  'text-teal-600',
                  'text-orange-600',
                  'text-cyan-600'
                ];
                return colors[index % colors.length];
              };

              return (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br ${getGradientColor(index)} border-r-4 border-r-gray-200 overflow-hidden relative`}>
                  {/* Background Shape */}
                  <div className="absolute bottom-0 right-0 opacity-10 transform rotate-12 translate-x-4 translate-y-4">
                    <kit.icon className="w-32 h-32 text-gray-600" />
                  </div>
                  
                  <CardHeader className="text-center pb-4">
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-white/40 to-transparent rounded-t-lg"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-white/60 rounded-full mb-4 shadow-sm backdrop-blur-sm`}>
                        <kit.icon className={`w-8 h-8 ${getIconColor(index)}`} />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-800">{kit.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">{kit.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-gray-800">{kit.purity}</div>
                          <div className="text-xs text-gray-600">Purity</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800">{kit.yield}</div>
                          <div className="text-xs text-gray-600">Yield</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800">{kit.time}</div>
                          <div className="text-xs text-gray-600">Time</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-gray-800">Sample Types:</h4>
                        <div className="flex flex-wrap gap-1">
                          {kit.samples.map((sample, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-white/50 border-gray-400">{sample}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-gray-800">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {kit.applications.map((app, idx) => (
                            <Badge key={idx} className="text-xs bg-orange-400 hover:bg-orange-500 text-white">{app}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Excellence</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Key Performance Indicators</h3>
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{metric.metric}</span>
                    <span className="text-sm text-primary font-semibold">{metric.value}</span>
                  </div>
                  <Progress value={metric.progress} className="h-3" />
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Quality Assessment</h3>
              {qualityData.map((data, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{data.parameter}</span>
                    <span className="text-sm font-semibold">
                      {data.inverse ? `<${data.value}%` : `${data.value}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${data.color} h-3 rounded-full transition-all duration-300`}
                      style={{ width: `${data.inverse ? 100 - data.value : data.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Steps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple 5-Step Protocol</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>
            <div className="space-y-8">
              {protocols.map((protocol, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                            <protocol.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{protocol.title}</CardTitle>
                            <CardDescription>{protocol.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{protocol.time}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative flex-shrink-0 hidden lg:block">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold">
                      {protocol.step}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Applications Across Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <app.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {app.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Extract with Confidence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of researchers using our proven extraction solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Request Protocol
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}