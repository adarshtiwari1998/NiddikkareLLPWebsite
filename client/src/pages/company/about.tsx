import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Users, Award, Globe, Target, Heart, Microscope, ArrowRight, Building } from "lucide-react";
import SEO from "@/components/seo";

export default function About() {
  return (
    <div className="py-20 bg-gray-50">
      <SEO />
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
              <div className="relative overflow-hidden">
                <div className="absolute top-2 left-2 w-20 h-20 bg-primary/10 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-16 h-16 bg-secondary/10 rounded-full"></div>
                <div className="relative glass-card p-8 rounded-2xl border-l-4 border-primary">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Microscope className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 section-header">
                      About Us
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border-l-4 border-blue-400">
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Heart className="h-5 w-5 text-red-500 mr-2" />
                        Our Mission
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        At NIDDIKKARE LLP, our team of experts empowers researchers and clinicians to transform human health. We 
                        provide seamless sample-to-insight experiences, enabling novel discoveries and improved diagnostics. High-quality 
                        DNA and RNA extraction is crucial for molecular biology applications. Our comprehensive solutions cater to diverse 
                        sample sources, streamlining research workflows and driving breakthroughs.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-400">
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Award className="h-5 w-5 text-yellow-500 mr-2" />
                        Our Technology
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The Extraction Kit follows an optimised chaotropic salt chemistry with a novel reversible binding of silica with nucleic acids 
                        under optimised salt & pH concentration of buffer. It allows very small elution volume (starting from 30μl) resulting in high 
                        concentration of DNA for downstream applications. The key benefit of using this Extraction Kit is to prevent the use resins, 
                        organic solvent based precipitation, and hazardous compounds such as phenol, chloroform etc. which interfere during 
                        downstream application in PCR/Sequencing.
                      </p>
                      <div className="bg-white/80 p-4 rounded-lg border border-green-200">
                        <p className="text-center font-bold text-primary text-lg mb-2">
                          "LYSE, BIND & ELUTE"
                        </p>
                        <p className="text-sm text-gray-600 text-center mb-2">
                          Silica Based Solid-Phase Extraction Method
                        </p>
                        <p className="text-xs text-gray-500 text-center">
                          Contaminants & Inhibitors Free High Quality DNA/RNA using Spin-Column or Magnetic Bead Particles
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="relative overflow-hidden">
                <div className="absolute top-2 right-2 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full"></div>
                <div className="relative glass-card p-8 rounded-2xl text-center bg-gradient-to-br from-white to-gray-50">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Building className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Healthcare & IT Solutions</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Heart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-blue-800">Healthcare</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-green-800">IT Solutions</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Leveraging expertise in both domains to drive innovation. Our healthcare team develops cutting-edge 
                    products while our IT sector provides top-notch consultation and recruitment services.
                  </p>
                  
                  <div className="text-center">
                    <a 
                      href="https://niddik.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg"
                    >
                      <Globe className="h-5 w-5 mr-2" />
                      For full IT solutions visit niddik.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="mb-20">
          <div className="relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-primary/5 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary/5 rounded-full"></div>
            
            <div className="relative p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Professional Laboratory Equipment
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  State-of-the-art Nucleic Acid Extraction Kit for precision DNA/RNA isolation
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
                  <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
                    <img 
                      src="/assets/images/about-us/nucleic-acid-extraction-kit.png" 
                      alt="Nucleic Acid Extraction Kit - Professional DNA/RNA Laboratory Equipment" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-full shadow-lg border border-gray-200">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700 font-medium">Professional-grade Nucleic Acid Extraction Kit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              Key Features
            </h2>
            <div className="space-y-4 text-lg text-gray-700 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2.5"></div>
                <p>Yields highly concentrated nucleic acids for greater sensitivity.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2.5"></div>
                <p>Highly Pure nucleic acid, ready for downstream applications like real-time PCR, endpoint analysis, Sequencing etc.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2.5"></div>
                <p>Turned around time (TAT) is 30 – 45 minutes.</p>
              </div>
            </div>
          </div>
          
          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Plant DNA Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-100 opacity-40" style={{borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%'}}></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-green-300 opacity-30" style={{borderRadius: '40% 60% 65% 35% / 25% 30% 70% 75%'}}></div>
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Plant DNA <span className="text-green-100">EXTRACTION</span></h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Lysis Buffer, Inhibitors Removal Buffer, Binding Buffer, Wash Buffer (3), Elution Buffer, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">Leaf, Stem, Flower, Seed etc.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: 100mg<br />A260/280 ratio ~1.8-2.0<br />Yield: upto 25 μg<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animal DNA Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-orange-100 opacity-40" style={{borderRadius: '73% 27% 44% 56% / 49% 44% 56% 51%'}}></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-orange-300 opacity-30" style={{borderRadius: '50% 50% 80% 20%'}}></div>
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Animal DNA <span className="text-orange-100">EXTRACTION</span></h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Lysis Buffer, Inhibitors Removal Buffer, Binding Buffer, Wash Buffer (3), Elution Buffer, Proteinase-K, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">Tissue of Liver, Spleen, Kidney, Brain, Heart, Muscle, Mouse Tail, Biopsy etc.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: 50mg<br />A260/280 ratio ~1.8-2.0<br />Yield: upto 30 μg<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blood DNA Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-red-100 opacity-40" style={{borderRadius: '50% 50% 50% 50%'}}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-200 opacity-30" style={{borderRadius: '30% 70% 63% 37%'}}></div>
              <div className="absolute top-8 right-8 w-8 h-8 bg-red-50 opacity-25" style={{borderRadius: '50% 50% 50% 50%'}}></div>
              <div className="bg-gradient-to-r from-gray-500 to-gray-700 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Blood DNA <span className="text-gray-100">EXTRACTION</span></h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Lysis Buffer, Inhibitors Removal Buffer, Binding Buffer, Wash Buffer, Elution Buffer, Proteinase-K, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">EDTA/Heparin treated Whole Blood</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: 200 μl<br />A260/280 ratio ~1.8-2.0<br />Yield: upto 6 μg<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cell Culture DNA Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-2 -right-2 w-24 h-24 bg-yellow-100 opacity-40" style={{borderRadius: '50% 50% 50% 50%'}}></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-yellow-200 opacity-30" style={{borderRadius: '58% 42% 45% 55% / 64% 47% 53% 36%'}}></div>
              <div className="absolute top-6 right-6 w-6 h-6 bg-yellow-50 opacity-25" style={{borderRadius: '50% 50% 50% 50%'}}></div>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Cell Culture DNA <span className="text-yellow-100">EXTRACTION</span></h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Lysis Buffer, Inhibitors Removal Buffer, Binding Buffer, Wash Buffer, Elution Buffer, Proteinase-K, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">Tissue Culture Cells</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: 5 × 10⁶ Cells<br />A260/280 ratio ~1.8-2.0<br />Yield: up to 15 μg<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Viral Nucleic Acid Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 opacity-40" style={{borderRadius: '46% 54% 66% 34% / 68% 47% 53% 32%'}}></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-teal-300 opacity-30" style={{borderRadius: '37% 63% 56% 44% / 49% 56% 44% 51%'}}></div>
              <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Viral Nucleic Acid <span className="text-teal-100">EXTRACTION</span></h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Lysis Buffer, Stabilization Buffer, Binding Buffer, Wash Buffer, Elution Buffer, Proteinase-K, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">Serum, Plasma, Urine, CSF, VTM, UTM etc.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: 200μl<br />A260/280 ratio ~1.8-2.0<br />Yield: upto 90%<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gel Extraction & PCR Purification */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-4 -right-4 w-28 h-16 bg-purple-100 opacity-40" style={{borderRadius: '45% 55% 72% 28% / 48% 77% 23% 52%'}}></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-200 opacity-30" style={{borderRadius: '25% 75% 48% 52% / 62% 44% 56% 38%'}}></div>
              <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Gel <span className="text-purple-100">EXTRACTION</span> & PCR Purification</h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Gel Extraction Buffer-1, Gel Extraction Buffer-2, PCR Clean-up Buffer, Binding Buffer, Wash Buffer, Elution Buffer, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">Low Melting Agarose Gel</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: 200mg gel slice<br />A260/280 ratio ~1.8-2.0<br />Yield: upto 90%<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="text-5xl font-bold text-primary mb-3 counter-animation">4+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-3 counter-animation">10+</div>
                <div className="text-gray-600 font-medium">Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-3 counter-animation">5+</div>
                <div className="text-gray-600 font-medium">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-3 counter-animation">100+</div>
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
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Plant RNA Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-5 -right-5 w-28 h-28 bg-purple-100 opacity-40" style={{borderRadius: '61% 39% 52% 48% / 64% 47% 53% 36%'}}></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-purple-300 opacity-30" style={{borderRadius: '44% 56% 72% 28% / 35% 62% 38% 65%'}}></div>
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Plant RNA <span className="text-purple-100">EXTRACTION</span></h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Lysis Buffer-1, Lysis Buffer-2, RNA Stabilization Buffer, Binding Buffer, Wash Buffer, DNase-1, Elution Buffer, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">Leaf, Stem, Flower, Seed etc.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: 100mg<br />A260/280 ratio ~1.8-2.0<br />Yield: upto 30 μg<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animal Tissue RNA Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-100 opacity-40" style={{borderRadius: '67% 33% 58% 42% / 45% 68% 32% 55%'}}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 opacity-30" style={{borderRadius: '35% 65% 44% 56% / 58% 42% 58% 42%'}}></div>
              <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Animal Tissue RNA <span className="text-pink-100">EXTRACTION</span></h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Lysis Buffer-1, Lysis Buffer-2, RNA Stabilization Buffer, Binding Buffer, Wash Buffer, Proteinase-K, DNase-1, Elution Buffer, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">Tissue of Liver, Spleen, Kidney, Brain, Heart, Muscle, Mouse Tail, Biopsy etc.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: 50mg<br />A260/280 ratio ~1.8-2.0<br />Yield: upto 25 μg<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cell Culture RNA Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 opacity-40" style={{borderRadius: '50% 50% 50% 50%'}}></div>
              <div className="absolute -bottom-2 -left-2 w-18 h-18 bg-blue-300 opacity-30" style={{borderRadius: '47% 53% 34% 66% / 42% 48% 52% 58%'}}></div>
              <div className="absolute top-6 right-6 w-6 h-6 bg-blue-50 opacity-25" style={{borderRadius: '50% 50% 50% 50%'}}></div>
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Cell Culture RNA <span className="text-blue-100">EXTRACTION</span></h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Lysis Buffer-1, Lysis Buffer-2, RNA Stabilization Buffer, Binding Buffer, Wash Buffer, Proteinase-K, DNase-1, Elution Buffer, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">Tissue Culture Cells</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: 5 × 10⁶ Cells<br />A260/280 ratio ~1.8-2.0<br />Yield: upto 20 μg<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plasmid DNA Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-amber-100 opacity-40" style={{borderRadius: '50% 50% 50% 50%'}}></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-12 bg-amber-200 opacity-30" style={{borderRadius: '72% 28% 69% 31% / 34% 72% 28% 66%'}}></div>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Plasmid DNA <span className="text-yellow-100">EXTRACTION</span></h3>
              </div>
              <div className="relative p-6 text-gray-800">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Components:</h4>
                    <p className="text-gray-600">Resuspension Buffer, Lysis Buffer, Binding Buffer, Neutralization Buffer, Wash Buffer, Elution Buffer, RNase A, Silica Spin Column, Collection Tube, Elution Tube</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sample:</h4>
                    <p className="text-gray-600">Bacterial cells from ~2ml of overnight grown culture</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <p className="text-gray-600">Silica Spin Column<br />Sample: in 200μl of buffer<br />A260/280 ratio ~1.8-2.0<br />Yield: upto 20 μg<br />Elution Volume: 30-100 μl</p>
                  </div>
                </div>
              </div>
            </div>
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