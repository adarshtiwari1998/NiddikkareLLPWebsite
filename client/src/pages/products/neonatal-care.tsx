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
      price: "***",
      rating: 4.9
    },
    {
      title: "Infant Ventilators",
      description: "Specialized respiratory support systems",
      icon: Activity,
      features: ["Gentle ventilation", "Precise control", "Safety alarms", "Data monitoring"],
      price: "***",
      rating: 4.8
    },
    {
      title: "Phototherapy Units",
      description: "LED phototherapy for jaundice treatment",
      icon: Shield,
      features: ["LED technology", "Uniform illumination", "Eye protection", "Mobile design"],
      price: "***",
      rating: 4.7
    },
    {
      title: "Neonatal Monitors",
      description: "Continuous vital sign monitoring",
      icon: Heart,
      features: ["Multi-parameter", "Alarm systems", "Wireless connectivity", "Data logging"],
      price: "***",
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

  const applicationAreas = [
    {
      title: "Neonatal Intensive Care Units (NICU)",
      description: "Comprehensive care for critically ill newborns",
      icon: Heart,
      features: ["24/7 monitoring", "Advanced life support", "Family-centered care", "Infection control"]
    },
    {
      title: "Labor & Delivery Units",
      description: "Immediate newborn care and stabilization",
      icon: Baby,
      features: ["Rapid response", "Resuscitation equipment", "Thermal management", "Transport systems"]
    },
    {
      title: "Pediatric Emergency Care",
      description: "Emergency treatment for infants and children",
      icon: Activity,
      features: ["Portable equipment", "Quick deployment", "Multi-parameter monitoring", "Emergency protocols"]
    },
    {
      title: "Special Care Nurseries",
      description: "Intermediate care for stable newborns",
      icon: Shield,
      features: ["Step-down care", "Growth monitoring", "Feeding support", "Developmental care"]
    }
  ];

  const clinicalBenefits = [
    { benefit: "Reduced Hospital Stay", improvement: "25%", description: "Earlier discharge with improved outcomes" },
    { benefit: "Lower Infection Rates", improvement: "40%", description: "Enhanced infection control protocols" },
    { benefit: "Improved Survival Rates", improvement: "15%", description: "Better clinical outcomes for preterm infants" },
    { benefit: "Staff Efficiency", improvement: "30%", description: "Streamlined workflows and monitoring" },
    { benefit: "Family Satisfaction", improvement: "35%", description: "Enhanced family involvement in care" },
    { benefit: "Cost Effectiveness", improvement: "20%", description: "Reduced overall treatment costs" }
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

      {/* About Neonatal Care */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Neonatal Care</h2>
            <div className="prose max-w-none text-gray-700 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Neonatal (the babies during their first 28 days of life), needs prompt and appropriate care, as 
                they are in Transition to Life Outside the Womb. During this period of life, baby's immunity is 
                developing gradually and making them more vulnerable to infections from maternal 
                transmission, healthcare environments, caregivers, and environmental factors. Contagious 
                Hospital Linens is found to be one of the major factor for infection. We have developed a 
                product <strong>Swaddle/Receiving Blanket</strong>, which is mimic the womb and provides layer of 
                warmth, hygiene, and comfort.
              </p>
              
              <h3 className="text-2xl font-bold text-primary mb-4">About product:</h3>
              <p className="text-lg leading-relaxed mb-4">
                Welcome Your Newborn with Science and Safety.
              </p>
              <p className="leading-relaxed">
                The Kouvèr Receiving Blanket by Niddikkare LLP is a premium, and scientifically designed swaddle 
                solution, created to offer newborns a womb-like environment during their most vulnerable initial 
                weeks. Made from 100% breathable cotton, Kouvèr blankets are individually packed ensuring the 
                safest first touch for every baby. With hospital linens being a known source of hospital-acquired 
                infections (HAIs), Niddikkare pioneered a solution that not only prioritizes hygiene and infection 
                control but also enhances comfort and sleep for the baby. The Kouvèr blanket supports safe 
                swaddling practices, which are proven to reduce startle reflexes, soothe colicky babies, and help 
                newborns sleep longer and more peacefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Application Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Shield className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Clinical Benefits & Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicalBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.improvement}</div>
                  <CardTitle className="text-lg">{benefit.benefit}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: benefit.improvement }}
                    ></div>
                  </div>
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