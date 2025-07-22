import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Baby, 
  Bed, 
  Heart, 
  Shield, 
  Stethoscope, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Target,
  Thermometer,
  Wind,
  Layers,
  Shirt,
  Droplets
} from "lucide-react";

// Import medical linen images
import receivingBlanketsImg from "@/assets/medical-linens/receiving-blankets-swaddle-nkr-101.png";
import maternityGownImg from "@/assets/medical-linens/maternity-gown-nkr-601.png";
import bedsheetCoversImg from "@/assets/medical-linens/bedsheet-pillow-covers-nkr-202.png";

export default function Healthcare() {
  const healthcareServices = [
    {
      id: "neonatal-care",
      title: "Neonatal Care",
      description: "Specialized solutions for newborn care during their first 28 days of life",
      icon: Baby,
      href: "/healthcare/neonatal-care",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      features: ["Receiving Blankets/Swaddle", "Womb-like Environment", "Infection Control", "100% Cotton"],
      image: receivingBlanketsImg,
      stats: { products: "1+", focus: "Newborn Safety" }
    },
    {
      id: "medical-linens",
      title: "Medical Linens",
      description: "Hospital-grade linens and textiles for superior patient care and infection control",
      icon: Bed,
      href: "/healthcare/medical-linens",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      features: ["Woven Materials", "Non-Woven Solutions", "Blended Fabrics", "Eco-Friendly"],
      image: maternityGownImg,
      stats: { products: "9+", focus: "Hospital Hygiene" }
    }
  ];

  const medicalLinenCategories = [
    {
      title: "Woven Medical Linens",
      description: "100% cotton linens offering high absorbency and softness",
      href: "/healthcare/medical-linens/woven",
      icon: Layers,
      color: "text-green-600",
      bgColor: "bg-green-100",
      products: ["Baby's First Touch", "Bedsheet & Pillow Covers", "Maternity Gown", "Patient Gown"]
    },
    {
      title: "Non-Woven Medical Linens", 
      description: "SMS non-woven materials with superior barrier protection",
      href: "/healthcare/medical-linens/non-woven",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      products: ["Surgical Drapes/Towels", "Surgical/OT Gown", "Surgical Cut Sheets"]
    },
    {
      title: "Blended Medical Linens",
      description: "Cotton-poly blend materials combining comfort and durability",
      href: "/healthcare/medical-linens/blended", 
      icon: Shirt,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      products: ["Maternity Gown", "Patient Gown"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/20 rounded-full"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-green-100/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-teal-100/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-100/15 rounded-full"></div>
      </div>

      <div className="relative py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Stethoscope className="h-14 w-14 text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-gray-800 mb-6">
              Healthcare <span className="text-green-600">Solutions</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8">
              Comprehensive healthcare solutions designed to enhance patient care, safety, and comfort through 
              innovative medical products and specialized hospital linens
            </p>
            
            {/* Key Stats */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Medical Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <div className="text-gray-600">Healthcare Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-gray-600">Material Types</div>
              </div>
            </div>
          </section>

          {/* Main Healthcare Services */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Healthcare <span className="text-blue-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Specialized healthcare solutions focusing on critical care areas and medical textile innovation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {healthcareServices.map((service) => (
                <Card key={service.id} className="group overflow-hidden border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    {/* Image Section */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Overlay Stats */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-sm font-semibold text-gray-700">{service.stats.products} Products</div>
                      <div className="text-xs text-gray-500">{service.stats.focus}</div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 ${service.lightColor} rounded-xl flex items-center justify-center`}>
                        <service.icon className={`h-8 w-8 ${service.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Link href={service.href}>
                      <Button className={`w-full ${service.color} hover:opacity-90 text-white`}>
                        Explore {service.title}
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Medical Linens Categories */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Medical Linens <span className="text-green-600">Categories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive range of medical linens designed with different materials and properties 
                to meet specific healthcare requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {medicalLinenCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`h-10 w-10 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3">Products Include:</div>
                      {category.products.map((product, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{product}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={category.href}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        View Category
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Choose Our Healthcare Solutions */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Why Choose Our Healthcare Solutions?
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  We prioritize patient safety, comfort, and infection control through innovative design and quality materials
                </p>
              </div>

              <div className="grid lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Infection Control</h3>
                  <p className="text-blue-100 text-sm">Advanced barrier protection against healthcare-associated infections</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Patient Comfort</h3>
                  <p className="text-blue-100 text-sm">Superior softness and breathability for enhanced patient experience</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-blue-100 text-sm">Rigorous testing and quality control for reliable performance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Specialized Focus</h3>
                  <p className="text-blue-100 text-sm">Targeted solutions for critical healthcare applications</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-2 border-primary/10 bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Ready to Enhance Your Healthcare Facility?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Contact us to learn more about our comprehensive healthcare solutions and how we can support 
                  your patient care objectives with quality medical products and linens.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Contact Our Team
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/healthcare/medical-linens">
                    <Button size="lg" variant="outline">
                      Browse Medical Linens
                      <Bed className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}