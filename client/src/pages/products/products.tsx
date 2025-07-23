import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Baby, 
  Bed, 
  Dna, 
  Microscope, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Shield,
  Heart,
  Activity,
  Layers,
  Shirt,
  Users,
  Clock,
  Target,
  Zap
} from "lucide-react";

export default function Products() {
  const productCategories = [
    {
      id: "neonatal-care",
      title: "Neonatal Care",
      description: "Specialized solutions for newborn care during their first 28 days of life",
      icon: Baby,
      href: "/products/neonatal-care",
      color: "from-blue-500 to-cyan-500",
      lightColor: "from-blue-50 to-cyan-50",
      products: [
        {
          name: "Baby First Touch Receiving Blanket",
          code: "NKR-101",
          href: "/products/neonatal-care/baby-first-touch"
        }
      ],
      features: [
        "100% Breathable Cotton",
        "Individually Packed",
        "Infection Control",
        "Womb-like Environment"
      ],
      stats: { 
        products: "1+", 
        focus: "Newborn Safety",
        rating: "4.9/5"
      }
    },
    {
      id: "medical-linens",
      title: "Medical Linens",
      description: "Hospital-grade linens and textiles for superior patient care and infection control",
      icon: Bed,
      href: "/products/medical-linens",
      color: "from-green-500 to-emerald-500",
      lightColor: "from-green-50 to-emerald-50",
      products: [
        { name: "Maternity Gown", href: "/products/medical-linens/maternity-gown" },
        { name: "Mackintosh Rubber Sheet", href: "/products/medical-linens/mackintosh-rubber-sheet" },
        { name: "Bedsheet with Pillow Covers", href: "/products/medical-linens/bedsheet-pillow-covers" },
        { name: "Surgical Drapes/Towels", href: "/products/medical-linens/surgical-drapes-towels" },
        { name: "Scrub Suit", href: "/products/medical-linens/scrub-suit" },
        { name: "Patient Gown", href: "/products/medical-linens/patient-gown" },
        { name: "Surgical/OT Gown", href: "/products/medical-linens/surgical-ot-gown" },
        { name: "Surgical Cut Sheets", href: "/products/medical-linens/surgical-cut-sheets" }
      ],
      features: [
        "Woven Materials",
        "Non-Woven Solutions", 
        "Blended Fabrics",
        "Hospital Grade Quality"
      ],
      stats: { 
        products: "8+", 
        focus: "Hospital Hygiene",
        rating: "4.8/5"
      }
    },
    {
      id: "dna-rna-extraction",
      title: "DNA/RNA Extraction",
      description: "Advanced nucleic acid extraction kits for molecular biology and diagnostics",
      icon: Dna,
      href: "/products/dna-rna-extraction",
      color: "from-purple-500 to-pink-500",
      lightColor: "from-purple-50 to-pink-50",
      products: [
        { name: "Blood & Cell Culture Extraction Kit", href: "/products/dna-rna-extraction" },
        { name: "Viral Nucleic Acid Extraction Kit", href: "/products/dna-rna-extraction" },
        { name: "Gel & PCR Purification Kit", href: "/products/dna-rna-extraction" },
        { name: "Plasmid DNA Extraction Kit", href: "/products/dna-rna-extraction" }
      ],
      features: [
        "High Purity Extraction",
        "Fast Processing",
        "Multiple Sample Types",
        "Quality Assured"
      ],
      stats: { 
        products: "4+", 
        focus: "Molecular Biology",
        rating: "4.7/5"
      }
    },
    {
      id: "molecular-diagnostics",
      title: "Molecular Diagnostics",
      description: "Precision diagnostic solutions for accurate disease detection and monitoring",
      icon: Microscope,
      href: "/products/molecular-diagnostics",
      color: "from-orange-500 to-red-500",
      lightColor: "from-orange-50 to-red-50",
      products: [
        { name: "PCR-based Diagnostic Kits", href: "/products/molecular-diagnostics" },
        { name: "Real-time PCR Assays", href: "/products/molecular-diagnostics" },
        { name: "Multiplex Detection Panels", href: "/products/molecular-diagnostics" },
        { name: "Point-of-Care Tests", href: "/products/molecular-diagnostics" }
      ],
      features: [
        "High Sensitivity",
        "Rapid Results",
        "Multiplexing Capability",
        "Clinical Validation"
      ],
      stats: { 
        products: "6+", 
        focus: "Diagnostic Accuracy",
        rating: "4.9/5"
      }
    }
  ];

  const companyStats = [
    { icon: Users, label: "Healthcare Partners", value: "10+" },
    { icon: Target, label: "Countries Served", value: "5+" },
    { icon: Clock, label: "Years of Excellence", value: "4+" },
    { icon: Zap, label: "Quality Rate", value: "99.8%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Comprehensive solutions for healthcare, life sciences, and medical diagnostics. 
            From neonatal care to molecular diagnostics, we deliver quality products that make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-800">{stat.value}</span>
                <span className="text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 text-lg py-3 px-8 bg-gradient-to-r from-primary to-secondary text-white">
              Product Categories
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Explore Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of healthcare and life sciences products, 
              designed to meet the highest standards of quality and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {productCategories.map((category, index) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className={`h-3 bg-gradient-to-r ${category.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.lightColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">({category.stats.rating})</span>
                      </div>
                      <Badge variant="secondary" className="mt-1">{category.stats.products} Products</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product List Preview */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Products ({category.products.length}):</h4>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {category.products.slice(0, 4).map((product, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm py-1">
                          <span className="text-gray-600">{product.name}</span>
                          {product.href && (
                            <Link href={product.href}>
                              <ArrowRight className="w-4 h-4 text-primary hover:text-primary/80" />
                            </Link>
                          )}
                        </div>
                      ))}
                      {category.products.length > 4 && (
                        <div className="text-sm text-gray-500">+ {category.products.length - 4} more products</div>
                      )}
                    </div>
                  </div>

                  {/* Stats and CTA */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold text-primary">{category.stats.focus}</span> Focus
                      </div>
                      <div className="text-sm font-semibold text-gray-800">
                        {category.stats.products} Available
                      </div>
                    </div>
                    <Link href={category.href}>
                      <Button className="w-full group-hover:bg-primary/90 transition-colors">
                        Explore {category.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Quick Access to Popular Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jump directly to our most requested products across all categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured Products */}
            <Link href="/products/neonatal-care/baby-first-touch">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <Baby className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Baby First Touch</CardTitle>
                  <CardDescription className="text-sm">Receiving Blanket</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="bg-blue-100 text-blue-700 text-xs">Most Popular</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products/medical-linens/surgical-drapes-towels">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Surgical Drapes</CardTitle>
                  <CardDescription className="text-sm">& Towels</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="bg-green-100 text-green-700 text-xs">Hospital Grade</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products/dna-rna-extraction">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                    <Dna className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">DNA/RNA Kits</CardTitle>
                  <CardDescription className="text-sm">Extraction Solutions</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Lab Ready</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products/molecular-diagnostics">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
                    <Microscope className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Diagnostics</CardTitle>
                  <CardDescription className="text-sm">Molecular Testing</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="bg-orange-100 text-orange-700 text-xs">Clinical Grade</Badge>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing the Right Product?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our product experts are here to help you find the perfect solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                Contact Our Experts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
              Request Product Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}