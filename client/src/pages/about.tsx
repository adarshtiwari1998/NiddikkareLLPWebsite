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
                About Us
              </h2>
              <div className="glass-card p-8 rounded-2xl">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At NIDDIKKARE LLP, our team of experts empowers researchers and clinicians to transform human health. We 
                  provide seamless sample-to-insight experiences, enabling novel discoveries and improved diagnostics. High-quality 
                  DNA and RNA extraction is crucial for molecular biology applications. Our comprehensive solutions cater to diverse 
                  sample sources, streamlining research workflows and driving breakthroughs.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Extraction Kit follows an optimised chaotropic salt chemistry with a novel reversible binding of silica with nucleic acids 
                  under optimised salt & pH concentration of buffer. It allows very small elution volume (starting from 30μl) resulting in high 
                  concentration of DNA for downstream applications. The key benefit of using this Extraction Kit is to prevent the use resins, 
                  organic solvent based precipitation, and hazardous compounds such as phenol, chloroform etc. which interfere during 
                  downstream application in PCR/Sequencing. The DNA/RNA Extraction Kit work on the principle of <strong>"LYSE, BIND & ELUTE"</strong>.
                  The unique chemistry and buffer conditions gives Contaminants & Inhibitors Free High Quality DNA/RNA by following 
                  Silica Based Solid-Phase Extraction Method using either Spin-Column or Magnetic Bead Particles.
                </p>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-50 rounded-full translate-y-8 -translate-x-8"></div>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-50 rounded-full translate-y-8 -translate-x-8"></div>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-50 rounded-full translate-y-8 -translate-x-8"></div>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-50 rounded-full translate-y-8 -translate-x-8"></div>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-50 rounded-full translate-y-8 -translate-x-8"></div>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full translate-y-8 -translate-x-8"></div>
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
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Plant RNA Extraction */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full translate-y-8 -translate-x-8"></div>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-50 rounded-full translate-y-8 -translate-x-8"></div>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full translate-y-8 -translate-x-8"></div>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-50 rounded-full translate-y-8 -translate-x-8"></div>
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