import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Baby, Heart, Thermometer, Activity, Shield, Star, Award, Users } from "lucide-react";

export default function NeonatalCareProducts() {
  const products = [
    {
      title: "Neonatal Incubators",
      description: "Advanced incubators for optimal newborn care",
      icon: Thermometer,
      features: ["Temperature control", "Humidity regulation", "Infection control", "Monitoring systems"],
      price: "From $8,500",
      rating: 4.9
    },
    {
      title: "Infant Ventilators",
      description: "Specialized respiratory support systems",
      icon: Activity,
      features: ["Gentle ventilation", "Precise control", "Safety alarms", "Data monitoring"],
      price: "From $15,000",
      rating: 4.8
    },
    {
      title: "Phototherapy Units",
      description: "LED phototherapy for jaundice treatment",
      icon: Shield,
      features: ["LED technology", "Uniform illumination", "Eye protection", "Mobile design"],
      price: "From $3,200",
      rating: 4.7
    },
    {
      title: "Neonatal Monitors",
      description: "Continuous vital sign monitoring",
      icon: Heart,
      features: ["Multi-parameter", "Alarm systems", "Wireless connectivity", "Data logging"],
      price: "From $6,800",
      rating: 4.9
    }
  ];

  const specifications = [
    { feature: "Temperature Accuracy", value: "±0.1°C", progress: 98 },
    { feature: "Humidity Control", value: "30-95% RH", progress: 95 },
    { feature: "Noise Level", value: "<45 dB", progress: 92 },
    { feature: "Power Efficiency", value: "Energy Star", progress: 88 },
    { feature: "Safety Rating", value: "IEC 60601-2-19", progress: 100 },
    { feature: "Reliability", value: "99.9% uptime", progress: 99 }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Neonatologist",
      hospital: "Children's Medical Center",
      comment: "The incubators have significantly improved our NICU outcomes. The precise temperature control is exceptional.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "NICU Nurse",
      hospital: "General Hospital",
      comment: "Easy to use and maintain. The monitoring systems provide peace of mind for both staff and families.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Pediatrician",
      hospital: "Regional Medical Center",
      comment: "Outstanding quality and reliability. These products have become essential in our neonatal care.",
      rating: 5
    }
  ];

  const certifications = [
    "FDA 510(k) Cleared",
    "CE Mark Certified",
    "ISO 13485 Quality",
    "IEC 60601-2-19 Safety",
    "Energy Star Qualified"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Baby className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Neonatal Care Products
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced medical equipment designed specifically for newborn care and NICU environments
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">{cert}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Shield className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary mb-3">{product.price}</div>
                    <Button size="sm" className="w-full">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {specifications.map((spec, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{spec.feature}</span>
                    <span className="text-sm text-primary font-semibold">{spec.value}</span>
                  </div>
                  <Progress value={spec.progress} className="h-3" />
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Products?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Award-Winning Design</h4>
                    <p className="text-gray-600">Recognized for innovation in neonatal care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Trusted by Professionals</h4>
                    <p className="text-gray-600">Used in over 500 hospitals worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Safety First</h4>
                    <p className="text-gray-600">Exceeds international safety standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Improved Outcomes</h4>
                    <p className="text-gray-600">Proven to enhance patient care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Healthcare Professionals Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role} at {testimonial.hospital}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your NICU?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our neonatal care products can improve patient outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}