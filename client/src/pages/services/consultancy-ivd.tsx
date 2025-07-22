import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, CheckCircle, Users, FileText, Clock, Award, ArrowRight } from "lucide-react";

export default function ConsultancyIVD() {
  const services = [
    {
      title: "Regulatory Strategy",
      description: "Navigate regulatory approval and global market requirements",
      icon: FileText,
      features: ["Regulatory submissions", "Market approval guidance", "International standards compliance"]
    },
    {
      title: "Clinical Trial Design",
      description: "Comprehensive clinical validation strategies",
      icon: Users,
      features: ["Study protocol development", "Statistical analysis", "Regulatory submissions"]
    },
    {
      title: "Quality Management",
      description: "Quality system design and implementation",
      icon: Award,
      features: ["Quality system design", "Risk management", "Process validation"]
    },
    {
      title: "Market Access",
      description: "Strategic market entry planning",
      icon: ArrowRight,
      features: ["Competitive analysis", "Pricing strategy", "Launch planning"]
    }
  ];

  const process = [
    { step: "1", title: "Initial Assessment", description: "Comprehensive evaluation of your IVD device" },
    { step: "2", title: "Strategy Development", description: "Tailored regulatory and market approach" },
    { step: "3", title: "Implementation", description: "Execution of regulatory pathway" },
    { step: "4", title: "Market Launch", description: "Successful product commercialization" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Settings className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            IVD Medical Device Consultancy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert guidance for In Vitro Diagnostic medical devices through regulatory approval and market success
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm py-2 px-4">Regulatory Guidance</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Market Strategy</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Clinical Validation</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Quality Management</Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Consultancy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Proven Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {process.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="inline-block">
                      <CardHeader>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your IVD Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts guide you through the complex regulatory landscape
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}