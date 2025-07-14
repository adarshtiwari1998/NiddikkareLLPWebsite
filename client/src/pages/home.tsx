import HeroSlider from "@/components/ui/hero-slider";
import ProductCard from "@/components/ui/product-card";
import StatsCounter from "@/components/ui/stats-counter";
import NewsCard from "@/components/ui/news-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, Bed, Dna, Microscope, Heart, FlaskConical, Check } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter value="25" label="Years of Excellence" suffix="+" />
            <StatsCounter value="500" label="Healthcare Partners" suffix="+" />
            <StatsCounter value="50" label="Countries Served" suffix="+" />
            <StatsCounter value="1000" label="Products & Solutions" suffix="+" />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50 scientific-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Product <span className="text-secondary">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across healthcare and life sciences, designed to advance research and improve patient care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Neonatal Care"
              description="Specialized products for newborn care and comfort"
              features={[
                "Kouvér Receiving Blankets",
                "Womb-like Environment",
                "Infection Control"
              ]}
              icon={Baby}
              color="primary"
            />
            
            <ProductCard
              title="Medical Linens"
              description="Hospital-grade linens for safety and comfort"
              features={[
                "Woven Medical Linens",
                "Non-woven Solutions",
                "Blended Fabric Options"
              ]}
              icon={Bed}
              color="primary"
            />
            
            <ProductCard
              title="DNA/RNA Extraction"
              description="Advanced extraction kits for molecular biology"
              features={[
                "Plant DNA Extraction",
                "Blood & Cell Culture",
                "Viral Nucleic Acids"
              ]}
              icon={Dna}
              color="accent"
            />
            
            <ProductCard
              title="Molecular Diagnostics"
              description="Precision diagnostics for disease detection"
              features={[
                "COVID-19 Testing",
                "Hepatitis Diagnostics",
                "Infectious Disease"
              ]}
              icon={Microscope}
              color="accent"
            />
            
            <ProductCard
              title="GUT Care"
              description="Specialized gastrointestinal care solutions"
              features={[
                "Digestive Health",
                "Microbiome Analysis",
                "Therapeutic Solutions"
              ]}
              icon={Heart}
              color="success"
            />
            
            <ProductCard
              title="Research Solutions"
              description="Comprehensive research and development support"
              features={[
                "Custom Development",
                "Expert Consultation",
                "Quality Assurance"
              ]}
              icon={FlaskConical}
              color="secondary"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About <span className="text-secondary">NIDDIKKARE LLP</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At NIDDIKKARE LLP, our team of experts empowers researchers and clinicians to transform human health. 
                We provide seamless sample-to-insight experiences, enabling novel discoveries and improved diagnostics.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                High-quality DNA and RNA extraction is crucial for molecular biology applications. Our comprehensive 
                solutions cater to diverse sample sources, streamlining research workflows and driving breakthroughs.
              </p>
              
              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Yields highly concentrated nucleic acids for greater sensitivity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Highly pure nucleic acid, ready for downstream applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Turnaround time (TAT) is 30 – 45 minutes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Advanced scientific research laboratory with modern equipment" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-gray-600">Purity Rate</div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-secondary mb-2">30min</div>
                    <div className="text-sm text-gray-600">Fast Processing</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured <span className="text-secondary">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium product line designed to optimize your research workflow with precision and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plant DNA Extraction Kit */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <FlaskConical className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="font-bold text-xl">Plant DNA Extraction</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Plant DNA Extraction Kit</h4>
                <p className="text-gray-600 mb-4">Optimized for leaf, stem, flower, and seed samples with high yield extraction.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sample Volume:</span>
                    <span className="font-medium">100mg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Yield:</span>
                    <span className="font-medium">up to 25 μg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">A260/280 ratio:</span>
                    <span className="font-medium">1.8-2.0</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  View Details
                </Button>
              </CardContent>
            </Card>
            
            {/* Blood DNA Extraction Kit */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Dna className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="font-bold text-xl">Blood DNA Extraction</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Blood DNA Extraction Kit</h4>
                <p className="text-gray-600 mb-4">Efficient extraction from whole blood and EDTA/Heparin treated samples.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sample Volume:</span>
                    <span className="font-medium">200 μl</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Yield:</span>
                    <span className="font-medium">up to 6 μg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">A260/280 ratio:</span>
                    <span className="font-medium">1.8-2.0</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  View Details
                </Button>
              </CardContent>
            </Card>
            
            {/* Viral Nucleic Acid Extraction Kit */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Microscope className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="font-bold text-xl">Viral Nucleic Acid</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Viral Nucleic Acid Extraction Kit</h4>
                <p className="text-gray-600 mb-4">Specialized for serum, plasma, urine, and other viral samples.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sample Volume:</span>
                    <span className="font-medium">200 μl</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Yield:</span>
                    <span className="font-medium">up to 90%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Elution Volume:</span>
                    <span className="font-medium">30-100 μl</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Latest <span className="text-secondary">News</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest innovations, research breakthroughs, and industry developments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              title="Breakthrough in Neonatal DNA Extraction"
              description="Our latest research demonstrates significant improvements in DNA extraction efficiency for neonatal samples, enabling better diagnostic outcomes."
              category="Research"
              date="March 15, 2024"
              image="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
              categoryColor="primary"
            />
            
            <NewsCard
              title="New Automated Extraction System"
              description="Introducing our next-generation automated nucleic acid extraction system that reduces processing time by 40% while maintaining high purity."
              category="Innovation"
              date="March 10, 2024"
              image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
              categoryColor="accent"
            />
            
            <NewsCard
              title="Strategic Partnership with Leading Hospitals"
              description="NIDDIKKARE LLP announces new partnerships with major healthcare institutions to expand access to advanced diagnostic solutions."
              category="Partnership"
              date="March 5, 2024"
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
              categoryColor="secondary"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
