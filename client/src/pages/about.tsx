import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Users, Award, Globe, Target, Heart, Microscope, ArrowRight, Building } from "lucide-react";

export default function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 section-header">
            About NiDDikKare LLP
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering researchers and clinicians to transform human health through innovative 
            healthcare and life sciences solutions
          </p>
        </section>

        {/* Company Overview */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 section-header">
                Our Mission
              </h2>
              <div className="glass-card p-8 rounded-2xl">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At NiDDikKare LLP, our team of experts empowers researchers and clinicians to transform human health. We 
                  provide seamless sample-to-insight experiences, enabling novel discoveries and improved diagnostics.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  High-quality DNA and RNA extraction is crucial for molecular biology applications. Our comprehensive solutions 
                  cater to diverse sample sources, streamlining research workflows and driving breakthroughs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700">
                      <strong>High Sensitivity:</strong> Yields highly concentrated nucleic acids for greater sensitivity
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700">
                      <strong>Superior Purity:</strong> Ready for PCR, sequencing, and other molecular applications
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700">
                      <strong>Rapid Processing:</strong> Turnaround time (TAT) is 30-45 minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="glass-card p-8 rounded-2xl text-center">
                <Building className="h-24 w-24 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Healthcare & IT Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging expertise in both domains to drive innovation. Our healthcare team develops cutting-edge 
                  products for the healthcare industry, while our IT sector provides top-notch resources, consultation, 
                  and recruitment services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features from Brochure */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              Our Extraction Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Extraction Kit follows an optimised chaotropic salt chemistry with a novel reversible binding 
              of silica with nucleic acids under optimised salt & pH conditions
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl mb-12">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The Extraction Kit follows an optimised chaotropic salt chemistry with a novel reversible binding of silica with nucleic acids 
                under optimised salt & pH conditions of buffer. It allows very high elution volume (starting from 30μl) resulting in high 
                concentration of DNA for downstream applications. The key benefit of using this Extraction Kit is to prevent the use resins, 
                organic solvent based precipitation, and hazardous compounds such as phenol, chloroform etc. which interfere during 
                downstream application in PCR/Sequencing.
              </p>
              <p className="mb-6">
                The DNA/RNA Extraction Kit work on the principle of <strong>"LYSE, BIND & ELUTE"</strong>. 
                The unique chemistry and buffer conditions gives Contaminants & Inhibitors Free High Quality DNA/RNA by following 
                Silica Based Solid-Phase Extraction Method using either Spin-Column or Magnetic Bead Particles.
              </p>
            </div>
          </div>
          
          <div className="modern-grid">
            <Card className="glass-card border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Plant DNA Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div><strong>Components:</strong></div>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Lysis Buffer, Inhibitors Removal Buffer</li>
                    <li>• Binding Buffer, Wash Buffer (3), Elution Buffer</li>
                    <li>• Silica Spin Column, Collection Tube, Elution Tube</li>
                  </ul>
                  <div className="mt-4">
                    <Badge className="bg-green-100 text-green-800">Sample: 100mg</Badge>
                    <Badge className="bg-green-100 text-green-800 ml-2">Yield: up to 25 μg</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Animal DNA Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div><strong>Components:</strong></div>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Lysis Buffer, Inhibitors Removal Buffer</li>
                    <li>• Binding Buffer, Wash Buffer (3), Proteinase-K</li>
                    <li>• Silica Spin Column, Collection Tube, Elution Tube</li>
                  </ul>
                  <div className="mt-4">
                    <Badge className="bg-orange-100 text-orange-800">Sample: 50mg</Badge>
                    <Badge className="bg-orange-100 text-orange-800 ml-2">Yield: up to 30 μg</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Blood DNA Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div><strong>Components:</strong></div>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Lysis Buffer, Inhibitors Removal Buffer</li>
                    <li>• Binding Buffer, Wash Buffer, Proteinase-K</li>
                    <li>• Silica Spin Column, Collection Tube, Elution Tube</li>
                  </ul>
                  <div className="mt-4">
                    <Badge className="bg-blue-100 text-blue-800">Sample: 200 μl</Badge>
                    <Badge className="bg-blue-100 text-blue-800 ml-2">Yield: up to 6 μg</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Statistics */}
        <section className="mb-20">
          <div className="glass-card p-12 rounded-2xl text-center">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-12">
              Our Global Impact
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-3 counter-animation">25+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-3 counter-animation">500+</div>
                <div className="text-gray-600 font-medium">Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-3 counter-animation">50+</div>
                <div className="text-gray-600 font-medium">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-3 counter-animation">1000+</div>
                <div className="text-gray-600 font-medium">Products & Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* RNA Extraction Technologies */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              RNA Extraction Solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Microscope className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Plant RNA Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Components:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Lysis Buffer-1, Lysis Buffer-2, RNA Stabilization Buffer</li>
                      <li>• Binding Buffer, Wash Buffer, DNase-1, Elution Buffer</li>
                      <li>• Silica Spin Column, Collection Tube, Elution Tube</li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-purple-100 text-purple-800">Sample: 100mg</Badge>
                    <Badge className="bg-purple-100 text-purple-800">Yield: up to 30 μg</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl">Animal Tissue RNA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Components:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Lysis Buffer-1, Lysis Buffer-2, RNA Stabilization Buffer</li>
                      <li>• Binding Buffer, Wash Buffer, Proteinase-K, DNase-1</li>
                      <li>• Silica Spin Column, Collection Tube, Elution Tube</li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-pink-100 text-pink-800">Sample: 50mg</Badge>
                    <Badge className="bg-pink-100 text-pink-800">Yield: up to 25 μg</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="glass-card p-12 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-8">
              Contact Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">NiDDikKare LLP</h3>
                <div className="space-y-2 text-gray-600">
                  <p>C-11, Pocket-9A, Jasola</p>
                  <p>New Delhi-110025 INDIA</p>
                  <p>+91-90151 62448 | +91-85603 34337</p>
                  <p>info@niddikkare.com | info@niddik.com</p>
                  <p>www.niddikkare.com | www.niddik.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <Button size="lg" className="btn-modern">
                  Contact Us Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}