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
  CheckCircle,
  Droplet
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

      {/* Digital Solutions & Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 section-header mb-4">
              Digital Solutions & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced digital tools and platforms to streamline your research and diagnostic workflows
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* E-Training */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle className="text-lg">E-Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Comprehensive online training programs for laboratory professionals</p>
              </CardContent>
            </Card>
            
            {/* Sample Request */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Sample Request</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Streamlined sample request and tracking system for laboratories</p>
              </CardContent>
            </Card>
            
            {/* Application Database Chromatography */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Application Database Chromatography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Comprehensive chromatography application database and analysis tools</p>
              </CardContent>
            </Card>
            
            {/* FilterFinder */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors">
                  <svg className="h-8 w-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">FilterFinder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Advanced filtration solution finder for laboratory applications</p>
              </CardContent>
            </Card>
            
            {/* StripFinder */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <TestTube className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">StripFinder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Test strip selection and optimization tool for rapid diagnostics</p>
              </CardContent>
            </Card>
            
            {/* NANOCOLOR Finder */}
            <Card className="glass-card border-0 group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                  <Droplet className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-lg">NANOCOLOR Finder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Colorimetric analysis tools for precise water and environmental testing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Testing Solutions with Lab-like Bubble Animation */}
      <section className="py-20 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Enhanced Floating Bubble Animation - Lab Environment */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Small bubbles continuously floating upward */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="lab-bubble absolute w-2 h-2 bg-white/20 rounded-full animate-bounce-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Medium bubbles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`medium-${i}`}
              className="lab-bubble absolute w-3 h-3 bg-white/15 rounded-full animate-bounce-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Large bubbles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`large-${i}`}
              className="lab-bubble absolute w-4 h-4 bg-white/10 rounded-full animate-bounce-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white section-header mb-4">
              Advanced Testing Solutions
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Cutting-edge analytical tools for comprehensive laboratory testing and research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {/* Filtration */}
            <Link href="/life-sciences/molecular-diagnostics">
              <div className="group cursor-pointer">
                <Card className="bg-gradient-to-b from-blue-500/20 to-blue-600/30 backdrop-blur-lg border border-blue-300/30 text-center group-hover:from-blue-400/30 group-hover:to-blue-500/40 transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden shadow-lg">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '20%', animationDelay: '0s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '50%', animationDelay: '1s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '80%', animationDelay: '2s'}} />
                  </div>
                  <CardContent className="pt-8 pb-6 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-white text-lg font-semibold">Filtration</h3>
                  </CardContent>
                </Card>
              </div>
            </Link>
            
            {/* Rapid Tests */}
            <Link href="/life-sciences/molecular-diagnostics">
              <div className="group cursor-pointer">
                <Card className="bg-gradient-to-b from-blue-500/20 to-blue-600/30 backdrop-blur-lg border border-blue-300/30 text-center group-hover:from-blue-400/30 group-hover:to-blue-500/40 transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden shadow-lg">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '25%', animationDelay: '0.5s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '60%', animationDelay: '1.5s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '85%', animationDelay: '2.5s'}} />
                  </div>
                  <CardContent className="pt-8 pb-6 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <TestTube className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-lg font-semibold">Rapid Tests</h3>
                  </CardContent>
                </Card>
              </div>
            </Link>
            
            {/* Water Analysis */}
            <Link href="/gut-care">
              <div className="group cursor-pointer">
                <Card className="bg-gradient-to-b from-blue-500/20 to-blue-600/30 backdrop-blur-lg border border-blue-300/30 text-center group-hover:from-blue-400/30 group-hover:to-blue-500/40 transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden shadow-lg">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '30%', animationDelay: '1s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '70%', animationDelay: '2s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '90%', animationDelay: '3s'}} />
                  </div>
                  <CardContent className="pt-8 pb-6 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <Droplet className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-lg font-semibold">Water Analysis</h3>
                  </CardContent>
                </Card>
              </div>
            </Link>
            
            {/* Chromatography */}
            <Link href="/life-sciences/molecular-diagnostics">
              <div className="group cursor-pointer">
                <Card className="bg-gradient-to-b from-blue-500/20 to-blue-600/30 backdrop-blur-lg border border-blue-300/30 text-center group-hover:from-blue-400/30 group-hover:to-blue-500/40 transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden shadow-lg">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '15%', animationDelay: '1.5s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '55%', animationDelay: '2.5s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '75%', animationDelay: '3.5s'}} />
                  </div>
                  <CardContent className="pt-8 pb-6 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <Activity className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-lg font-semibold">Chromatography</h3>
                  </CardContent>
                </Card>
              </div>
            </Link>
            
            {/* Bioanalysis */}
            <Link href="/life-sciences/dna-rna-extraction">
              <div className="group cursor-pointer">
                <Card className="bg-gradient-to-b from-blue-500/20 to-blue-600/30 backdrop-blur-lg border border-blue-300/30 text-center group-hover:from-blue-400/30 group-hover:to-blue-500/40 transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden shadow-lg">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '35%', animationDelay: '2s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '65%', animationDelay: '3s'}} />
                    <div className="lab-bubble absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-up" style={{left: '85%', animationDelay: '4s'}} />
                  </div>
                  <CardContent className="pt-8 pb-6 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <Dna className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-lg font-semibold">Bioanalysis</h3>
                  </CardContent>
                </Card>
              </div>
            </Link>
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