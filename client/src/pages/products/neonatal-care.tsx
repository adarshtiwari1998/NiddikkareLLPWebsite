import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { Baby, Heart, Thermometer, Activity, Shield, Star, Award, Users, Clock, Zap, Target, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export default function NeonatalCareProducts() {
  const products = [
    {
      title: "Baby First Touch Receiving Blanket",
      description: "100% cotton receiving blanket for newborn care",
      icon: Baby,
      features: ["100% breathable cotton", "Individually packed", "Infection control", "Womb-like environment"],
      price: "NKR-101",
      rating: 4.9,
      href: "/products/neonatal-care/baby-first-touch"
    },
    {
      title: "Kouvèr Receiving Blanket",
      description: "Premium scientifically designed swaddle solution",
      icon: Shield,
      features: ["Womb-like environment", "Infection control priority", "Safe swaddling practices", "Enhanced comfort & sleep"],
      price: "Premium",
      rating: 4.9,
      href: "/products/neonatal-care/baby-first-touch"
    }
  ];

  const specifications = [
    { feature: "Material Quality", value: "100% Cotton", progress: 100 },
    { feature: "Breathability", value: "High Airflow", progress: 95 },
    { feature: "Softness Level", value: "Ultra Soft", progress: 98 },
    { feature: "Hygiene Standard", value: "Hospital Grade", progress: 100 },
    { feature: "Size Consistency", value: "Standardized", progress: 99 },
    { feature: "Safety Compliance", value: "Healthcare Standard", progress: 100 }
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

  const qualityStandards = [
    "Hospital Grade Quality",
    "Safety Verified",
    "Healthcare Standard",
    "Medical Device Safety",
    "Energy Efficient"
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
            {qualityStandards.map((standard, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">{standard}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Neonatal Care - Visual Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Neonatal Care</h2>

          {/* Timeline Visualization */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-primary mb-4">Critical First 28 Days of Life</h3>
              <p className="text-lg text-gray-600">Neonatal period requires specialized care and protection</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-pink-400"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Day 0-1 */}
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right">
                    <Card className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-end mb-3">
                          <Clock className="w-6 h-6 text-blue-600 mr-2" />
                          <h4 className="font-bold text-blue-800">Day 0-1</h4>
                        </div>
                        <h5 className="font-semibold mb-2">Birth & Transition</h5>
                        <p className="text-sm text-gray-600">Immediate adaptation to life outside the womb</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Baby className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </div>

                {/* Day 1-7 */}
                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="w-5/12">
                    <Card className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-r-4 border-r-yellow-500">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                          <h4 className="font-bold text-yellow-800">Day 1-7</h4>
                        </div>
                        <h5 className="font-semibold mb-2">High Vulnerability</h5>
                        <p className="text-sm text-gray-600">Peak risk period for infections and complications</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Day 7-28 */}
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right">
                    <Card className="bg-gradient-to-r from-green-100 to-green-50 border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-end mb-3">
                          <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                          <h4 className="font-bold text-green-800">Day 7-28</h4>
                        </div>
                        <h5 className="font-semibold mb-2">Gradual Strengthening</h5>
                        <p className="text-sm text-gray-600">Immunity development and stabilization</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Infection Risk Factors Visualization */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Infection Risk Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Maternal Transmission", risk: "High", color: "red" },
                { icon: Shield, title: "Healthcare Environment", risk: "Very High", color: "red" },
                { icon: Heart, title: "Caregivers", risk: "Medium", color: "yellow" },
                { icon: Activity, title: "Environmental Factors", risk: "Medium", color: "yellow" }
              ].map((factor, index) => (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br ${
                  factor.color === 'red' ? 'from-red-100 to-red-50' : 'from-yellow-100 to-yellow-50'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                      factor.color === 'red' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}>
                      <factor.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-2">{factor.title}</h4>
                    <Badge variant={factor.color === 'red' ? 'destructive' : 'secondary'} className="text-xs">
                      {factor.risk} Risk
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Solution Highlight */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary to-pink-500 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 opacity-20">
                <Baby className="w-32 h-32" />
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Solution: Kouvèr Receiving Blanket</h3>
                    <p className="mb-6 opacity-90">
                      Scientifically designed to mimic the womb environment, providing essential warmth, 
                      hygiene, and comfort during the critical neonatal period.
                    </p>
                    <div className="space-y-3">
                      {[
                        "100% Breathable Cotton",
                        "Individually Packed",
                        "Infection Control",
                        "Womb-like Environment"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full p-8 inline-block mb-4">
                      <Shield className="w-16 h-16" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Welcome Your Newborn</h4>
                    <p className="opacity-90">with Science and Safety</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Comparison */}
          <div className="max-w-6xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Before vs After Kouvèr Blanket</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <Card className="bg-gradient-to-br from-gray-100 to-gray-50">
                <CardHeader className="text-center">
                  <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <CardTitle className="text-red-700">Traditional Hospital Linens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Potential contamination source",
                      "Reused across patients", 
                      "Higher infection risk",
                      "Limited comfort",
                      "Standard washing protocols"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* After */}
              <Card className="bg-gradient-to-br from-green-100 to-green-50">
                <CardHeader className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle className="text-green-700">Kouvèr Receiving Blanket</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Sterile, individually packed",
                      "Single-use for each baby",
                      "Infection control priority",
                      "Womb-like comfort",
                      "Scientific design approach"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Product Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Neonatal Care Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    <Link href={product.href}>
                      <Button size="sm" className="w-full">Learn More</Button>
                    </Link>
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
            <Link href="/products/neonatal-care/baby-first-touch">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                View Baby First Touch Product
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}