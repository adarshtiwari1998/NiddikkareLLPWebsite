import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Baby, 
  Microscope, 
  TestTube, 
  Stethoscope, 
  ArrowRight, 
  Shield, 
  Heart,
  Dna,
  FlaskConical,
  Activity,
  Award,
  Globe,
  Users,
  CheckCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with modern gradient */}
        <div className="absolute inset-0 hero-gradient"></div>
        
        {/* Floating background elements */}
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full" style={{animationDelay: '2s'}}></div>
          <div className="floating-element absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Company Logo/Name */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                NiDDikKare
              </h1>
              <div className="text-2xl md:text-3xl text-secondary font-semibold">
                Healthcare & IT Solutions
              </div>
            </div>
            
            {/* Main tagline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Harnesses the power of talent and technology to unlock limitless possibilities for its clients and customers
            </p>
            
            {/* Key value propositions */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 rounded-2xl">
                <Baby className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Baby's First Touch</h3>
                <p className="text-gray-600 text-sm">Providing world's safest receiving blankets for newborns</p>
              </div>
              
              <div className="glass-card p-6 rounded-2xl">
                <Stethoscope className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hospital Linens</h3>
                <p className="text-gray-600 text-sm">Exceptional hospital linen solutions for patient care</p>
              </div>
              
              <div className="glass-card p-6 rounded-2xl">
                <Dna className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Life Sciences</h3>
                <p className="text-gray-600 text-sm">Advanced molecular biology and diagnostic solutions</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="btn-modern">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Company Stats - Modern Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 section-header">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="text-center glass-card border-0">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2 counter-animation">25+</div>
                <p className="text-gray-600">Years of Excellence</p>
              </CardContent>
            </Card>
            
            <Card className="text-center glass-card border-0">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2 counter-animation">500+</div>
                <p className="text-gray-600">Healthcare Partners</p>
              </CardContent>
            </Card>
            
            <Card className="text-center glass-card border-0">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2 counter-animation">50+</div>
                <p className="text-gray-600">Countries Served</p>
              </CardContent>
            </Card>
            
            <Card className="text-center glass-card border-0">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2 counter-animation">1000+</div>
                <p className="text-gray-600">Products & Solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Product Categories - Modern Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 section-header mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare and life sciences solutions designed for innovation and excellence
            </p>
          </div>
          
          <div className="modern-grid">
            {/* Neonatal Care */}
            <Link href="/healthcare/neonatal-care">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Baby className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Neonatal Care</CardTitle>
                  <CardDescription className="text-gray-600">
                    Specialized solutions for newborn care during their first 28 days of life
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Kouvér Receiving Blankets
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      100% Breathable Cotton
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Mimics the Womb Environment
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Reduces Startle Reflex
                    </div>
                  </div>
                  <Badge className="w-full justify-center bg-primary/10 text-primary hover:bg-primary/20">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Badge>
                </CardContent>
              </Card>
            </Link>
            
            {/* Hospital Linens */}
            <Link href="/healthcare/medical-linens">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Stethoscope className="h-10 w-10 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Hospital Linens</CardTitle>
                  <CardDescription className="text-gray-600">
                    Exceptional hospital linen solutions that elevate patient care
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Premium Bed Sheets & Pillow Covers
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Surgical Gowns & Drapes
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Rubber Sheets & Receiving Blankets
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Infection Control Design
                    </div>
                  </div>
                  <Badge className="w-full justify-center bg-secondary/10 text-secondary hover:bg-secondary/20">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Badge>
                </CardContent>
              </Card>
            </Link>
            
            {/* DNA/RNA Extraction */}
            <Link href="/life-sciences/dna-rna-extraction">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Dna className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">DNA/RNA Extraction</CardTitle>
                  <CardDescription className="text-gray-600">
                    High-quality DNA and RNA extraction for molecular biology applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Plant & Animal DNA Extraction
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Blood & Cell Culture Extraction
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Viral Nucleic Acid Extraction
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Gel & PCR Purification
                    </div>
                  </div>
                  <Badge className="w-full justify-center bg-accent/10 text-accent hover:bg-accent/20">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Badge>
                </CardContent>
              </Card>
            </Link>
            
            {/* Molecular Diagnostics */}
            <Link href="/life-sciences/molecular-diagnostics">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                    <Microscope className="h-10 w-10 text-success" />
                  </div>
                  <CardTitle className="text-2xl">Molecular Diagnostics</CardTitle>
                  <CardDescription className="text-gray-600">
                    Advanced diagnostic solutions for genetic material analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      SARS-CoV-2 (COVID-19) Testing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Hepatitis Virus Detection
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      HIV & Tuberculosis Testing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Monkey Pox Detection
                    </div>
                  </div>
                  <Badge className="w-full justify-center bg-success/10 text-success hover:bg-success/20">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 section-header mb-4">
              Why Choose NiDDikKare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With decades of experience in healthcare and IT solutions, we deliver excellence across all domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card border-0 text-center">
              <CardHeader>
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">High Sensitivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yields highly concentrated nucleic acids for greater sensitivity in downstream applications
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 text-center">
              <CardHeader>
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Superior Purity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Highly pure nucleic acid, ready for PCR, sequencing, and other molecular applications
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 text-center">
              <CardHeader>
                <Activity className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Rapid Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Turnaround time (TAT) is 30-45 minutes with streamlined workflows
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Healthcare Solutions?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact our team of experts today and discover how we can help you achieve your goals with our innovative products and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}