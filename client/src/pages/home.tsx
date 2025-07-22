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
          <div className="max-w-4xl mx-auto py-4 sm:py-8 md:py-0">
            {/* Company Logo/Name */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                NiDDikKare
              </h1>
              <div className="text-2xl md:text-3xl text-secondary font-semibold">
                Healthcare & IT Solutions
              </div>
            </div>
            
            {/* Main tagline */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 sm:px-0">
              Harnesses the power of talent and technology to unlock limitless possibilities for its clients and customers
            </p>
            
            {/* Key value propositions */}
            <div className="grid grid-cols-3 gap-1 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-12 px-1 sm:px-2 md:px-0 max-w-xs sm:max-w-none mx-auto">
               <Link href="/products/medical-linens/baby-first-touch">
              <div className="glass-card px-1 py-2 sm:p-3 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl min-h-[80px] sm:min-h-[120px] md:min-h-auto flex flex-col justify-center">
                <Baby className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-secondary mx-auto mb-1 sm:mb-2 md:mb-4 flex-shrink-0" />
                <h3 className="text-[9px] sm:text-xs md:text-base lg:text-lg font-semibold text-gray-800 mb-0 sm:mb-1 leading-tight text-center">Baby's First Touch</h3>
                <p className="text-gray-600 text-[8px] sm:text-xs md:text-sm leading-tight hidden sm:block text-center">Providing world's safest receiving blankets for newborns</p>
              </div>
               </Link>
              <Link href="/products/medical-linens">
              <div className="glass-card px-1 py-2 sm:p-3 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl min-h-[80px] sm:min-h-[120px] md:min-h-auto flex flex-col justify-center">
                <Stethoscope className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-secondary mx-auto mb-1 sm:mb-2 md:mb-4 flex-shrink-0" />
                <h3 className="text-[9px] sm:text-xs md:text-base lg:text-lg font-semibold text-gray-800 mb-0 sm:mb-1 leading-tight text-center">Hospital Linens</h3>
                <p className="text-gray-600 text-[8px] sm:text-xs md:text-sm leading-tight hidden sm:block text-center">Exceptional hospital linen solutions for patient care</p>
              </div>
              </Link>
              <Link href="/products/dna-rna-extraction">
              <div className="glass-card px-1 py-2 sm:p-3 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl min-h-[80px] sm:min-h-[120px] md:min-h-auto flex flex-col justify-center">
                <Dna className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-secondary mx-auto mb-1 sm:mb-2 md:mb-4 flex-shrink-0" />
                <h3 className="text-[9px] sm:text-xs md:text-base lg:text-lg font-semibold text-gray-800 mb-0 sm:mb-1 leading-tight text-center">Life Sciences</h3>
                <p className="text-gray-600 text-[8px] sm:text-xs md:text-sm leading-tight hidden sm:block text-center">Advanced molecular biology and diagnostic solutions</p>
              </div>
              </Link>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
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
                <div className="text-4xl font-bold text-primary mb-2 counter-animation">4+</div>
                <p className="text-gray-600">Years of Excellence</p>
              </CardContent>
            </Card>
            
            <Card className="text-center glass-card border-0">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2 counter-animation">10+</div>
                <p className="text-gray-600">Healthcare Partners</p>
              </CardContent>
            </Card>
            
            <Card className="text-center glass-card border-0">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2 counter-animation">5+</div>
                <p className="text-gray-600">Countries Served</p>
              </CardContent>
            </Card>
            
            <Card className="text-center glass-card border-0">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2 counter-animation">100+</div>
                <p className="text-gray-600">Products & Solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 section-header mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive product portfolio for healthcare and life sciences applications
            </p>
          </div>
          
          <div className="modern-grid">
            {/* Neonatal Care Products */}
            <Link href="/products/neonatal-care">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Baby className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Neonatal Care Products</CardTitle>
                  <CardDescription className="text-gray-600">
                    Specialized products for newborn care during their first 28 days of life
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
            
            {/* Medical Linens Products */}
            <Link href="/products/medical-linens">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Stethoscope className="h-10 w-10 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Medical Linens Products</CardTitle>
                  <CardDescription className="text-gray-600">
                    Exceptional hospital linen products that elevate patient care
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
            
            {/* DNA/RNA Extraction Products */}
            <Link href="/products/dna-rna-extraction">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Dna className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">DNA/RNA Extraction Products</CardTitle>
                  <CardDescription className="text-gray-600">
                    High-quality DNA and RNA extraction products for molecular biology
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
            
            {/* Molecular Diagnostics Products */}
            <Link href="/products/molecular-diagnostics">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                    <Microscope className="h-10 w-10 text-success" />
                  </div>
                  <CardTitle className="text-2xl">Molecular Diagnostics Products</CardTitle>
                  <CardDescription className="text-gray-600">
                    Advanced diagnostic products for genetic material analysis
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 section-header mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services to support your healthcare and life sciences operations
            </p>
          </div>
          
          <div className="modern-grid">
            {/* Consultancy IVD */}
            <Link href="/services/consultancy-ivd">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Users className="h-10 w-10 text-blue-500" />
                  </div>
                  <CardTitle className="text-2xl">Consultancy IVD</CardTitle>
                  <CardDescription className="text-gray-600">
                    Expert consultancy services for in-vitro diagnostics development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Regulatory Compliance
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Product Development
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Quality Assurance
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Market Analysis
                    </div>
                  </div>
                  <Badge className="w-full justify-center bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Badge>
                </CardContent>
              </Card>
            </Link>
            
            {/* Contract Research */}
            <Link href="/services/contract-research">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <FlaskConical className="h-10 w-10 text-purple-500" />
                  </div>
                  <CardTitle className="text-2xl">Contract Research</CardTitle>
                  <CardDescription className="text-gray-600">
                    Comprehensive contract research services for life sciences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Laboratory Testing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Clinical Trials
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Data Analysis
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Research Documentation
                    </div>
                  </div>
                  <Badge className="w-full justify-center bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Badge>
                </CardContent>
              </Card>
            </Link>
            
            {/* OEM Products */}
            <Link href="/services/oem-products">
              <Card className="group cursor-pointer product-card h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <Award className="h-10 w-10 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl">OEM Products</CardTitle>
                  <CardDescription className="text-gray-600">
                    Custom OEM solutions for healthcare and diagnostic equipment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      Custom Manufacturing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      Private Labeling
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      Quality Control
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      Technical Support
                    </div>
                  </div>
                  <Badge className="w-full justify-center bg-orange-500/10 text-orange-500 hover:bg-orange-500/20">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Digital Solutions & <span className="text-primary border-b-2 border-primary">Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced digital tools and platforms to streamline your research and diagnostic workflows
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* E-Training */}
            <Link href="/tools-testing/tools/e-training">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-0 h-32">
                <CardContent className="p-6 flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">E-Training</h3>
                    <p className="text-sm text-gray-600">Comprehensive online training programs for laboratory professionals</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* Sample Request */}
            <Link href="/tools-testing/tools/sample-request">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-0 h-32">
                <CardContent className="p-6 flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Sample request</h3>
                    <p className="text-sm text-gray-600">Streamlined sample request and tracking system for laboratories</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* Application Database Chromatography */}
            <Link href="/tools-testing/tools/application-database-chromatography">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-0 h-32">
                <CardContent className="p-6 flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Application database chromatography</h3>
                    <p className="text-sm text-gray-600">Comprehensive chromatography application database and analysis tools</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* FilterFinder */}
            <Link href="/tools-testing/tools/filter-finder">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-0 h-32">
                <CardContent className="p-6 flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">FilterFinder</h3>
                    <p className="text-sm text-gray-600">Advanced filtration solution finder for laboratory applications</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* StripFinder */}
            <Link href="/tools-testing/tools/strip-finder">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-0 h-32">
                <CardContent className="p-6 flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <TestTube className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">StripFinder</h3>
                    <p className="text-sm text-gray-600">Test strip selection and optimization tool for rapid diagnostics</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* NANOCOLOR Finder */}
            <Link href="/tools-testing/tools/nanocolor-finder">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-0 h-32">
                <CardContent className="p-6 flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <Droplet className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">NANOCOLOR Finder</h3>
                    <p className="text-sm text-gray-600">Colorimetric analysis tools for precise water and environmental testing</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* CHROMAFIL Finder */}
            <Link href="/tools-testing/tools/chromafil-finder">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-0 h-32">
                <CardContent className="p-6 flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">CHROMAFIL Finder</h3>
                    <p className="text-sm text-gray-600">Chromatography filtration and sample preparation solutions</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* VialFinder */}
            <Link href="/tools-testing/tools/vial-finder">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-0 h-32">
                <CardContent className="p-6 flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <FlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">VialFinder</h3>
                    <p className="text-sm text-gray-600">Laboratory vial and container selection tool</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* Bioanalysis KitFinder */}
            <Link href="/tools-testing/tools/bioanalysis-kitfinder">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-0 h-32">
                <CardContent className="p-6 flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Bioanalysis KitFinder</h3>
                    <p className="text-sm text-gray-600">Comprehensive bioanalysis kit selection and optimization tool</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Testing Solutions - Clean Design */}
      <section className="py-20 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        
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
            <Link href="/tools-testing/testing/filtration">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg p-8 text-center transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden h-48 flex flex-col justify-between">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full animate-bounce-up"
                        style={{
                          left: `${20 + (i * 10)}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-blue-800 text-white py-2 px-4 rounded-b-lg -mx-8 -mb-8 relative z-10">
                    <h3 className="text-lg font-semibold">Filtration</h3>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Rapid Tests */}
            <Link href="/tools-testing/testing/rapid-tests">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg p-8 text-center transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden h-48 flex flex-col justify-between">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full animate-bounce-up"
                        style={{
                          left: `${25 + (i * 8)}%`,
                          animationDelay: `${i * 0.7}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TestTube className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="bg-blue-800 text-white py-2 px-4 rounded-b-lg -mx-8 -mb-8 relative z-10">
                    <h3 className="text-lg font-semibold">Rapid Tests</h3>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Water Analysis */}
            <Link href="/tools-testing/testing/water-analysis">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg p-8 text-center transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden h-48 flex flex-col justify-between">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full animate-bounce-up"
                        style={{
                          left: `${30 + (i * 7)}%`,
                          animationDelay: `${i * 0.6}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplet className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="bg-blue-800 text-white py-2 px-4 rounded-b-lg -mx-8 -mb-8 relative z-10">
                    <h3 className="text-lg font-semibold">Water Analysis</h3>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Chromatography */}
            <Link href="/tools-testing/testing/chromatography">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg p-8 text-center transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden h-48 flex flex-col justify-between">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full animate-bounce-up"
                        style={{
                          left: `${15 + (i * 9)}%`,
                          animationDelay: `${i * 0.8}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="bg-blue-800 text-white py-2 px-4 rounded-b-lg -mx-8 -mb-8 relative z-10">
                    <h3 className="text-lg font-semibold">Chromatography</h3>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Bioanalysis */}
            <Link href="/tools-testing/testing/bioanalysis">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg p-8 text-center transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden h-48 flex flex-col justify-between">
                  {/* Card-specific bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full animate-bounce-up"
                        style={{
                          left: `${35 + (i * 6)}%`,
                          animationDelay: `${i * 0.4}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Dna className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="bg-blue-800 text-white py-2 px-4 rounded-b-lg -mx-8 -mb-8 relative z-10">
                    <h3 className="text-lg font-semibold">Bioanalysis</h3>
                  </div>
                </div>
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
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}