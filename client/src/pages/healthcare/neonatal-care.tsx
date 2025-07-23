import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Baby, Heart, Shield, CheckCircle, Thermometer, Wind, Moon, ArrowRight, Clock, AlertTriangle, TrendingUp, Users, Activity, Zap, Target, Star } from "lucide-react";

export default function NeonatalCare() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Baby className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-gray-800 mb-6 section-header">
            Neonatal Care
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Specialized solutions for newborn care during their first 28 days of life, when babies are in transition 
            to life outside the womb
          </p>
        </section>

        {/* Product Introduction */}
        <section className="mb-16">
          <div className="glass-card p-8 rounded-2xl mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary text-white px-4 py-2 rounded-lg inline-block mb-4">
                  <span className="font-semibold">Health Care</span>
                </div>
                <div className="bg-secondary text-white px-4 py-2 rounded-lg inline-block ml-2 mb-6">
                  <span className="font-semibold">Neonatal Care</span>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Neonatal (the babies during their first 28 days of life), needs prompt and appropriate care, as 
                  they are in Transition to Life Outside the Womb. During this period of life, baby's immunity is 
                  developing gradually and making them more vulnerable to infections from maternal transmission, 
                  healthcare environments, caregivers, and environmental factors.
                </p>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Contagious Hospital Linens is found to be one of the major factor for infection. We have developed a 
                  product <strong>Swaddle/Receiving Blanket</strong>, which is mimic the womb and provides layer of 
                  warmth, hygiene, and comfort.
                </p>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">About product:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome Your Newborn with Science and Safety. The Kouvér Receiving Blanket by Niddikkare LLP is a premium, 
                    and scientifically designed swaddle solution, created to offer newborns a womb-like environment during their 
                    most vulnerable initial weeks.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Wind className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Breathable, 100% Cotton</h3>
                  </div>
                  <p className="text-gray-600">Made from premium breathable cotton for optimal comfort and safety</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Germ Free</h3>
                  </div>
                  <p className="text-gray-600">Advanced antimicrobial protection to prevent infections</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Mimics the Womb</h3>
                  </div>
                  <p className="text-gray-600">Scientifically designed to replicate the secure womb environment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Kouvér blanket supports safe swaddling practices with proven benefits for newborn care
            </p>
          </div>
          
          <div className="modern-grid">
            <Card className="glass-card border-0 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Reduces Startle Reflex</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Helps reduce the startle reflex that can disturb baby's sleep and cause distress
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Soothes Colicky Babies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Provides comfort and reduces crying episodes in colicky infants through secure swaddling
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Improves Sleep</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Promotes longer, more peaceful sleep cycles for better rest and development
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Hygiene & Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maintains optimal hygiene standards while providing maximum comfort for newborns
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Features */}
        <section className="mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800 section-header mb-8 text-center">
              Product Features
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Material & Construction</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <strong className="text-gray-800">100% Breathable Cotton:</strong>
                      <p className="text-gray-600">Premium quality cotton ensures optimal breathability and comfort</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <strong className="text-gray-800">Individually Packed:</strong>
                      <p className="text-gray-600">Each blanket is individually packaged ensuring the safest first touch</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <strong className="text-gray-800">Hospital Grade Quality:</strong>
                      <p className="text-gray-600">Meets stringent hospital standards for newborn care</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Safety & Hygiene</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <strong className="text-gray-800">Infection Control:</strong>
                      <p className="text-gray-600">Designed to minimize hospital-acquired infections (HAIs)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <strong className="text-gray-800">Unique Size & Shape:</strong>
                      <p className="text-gray-600">Specially designed dimensions for optimal swaddling effectiveness</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <strong className="text-gray-800">High Quality Cotton:</strong>
                      <p className="text-gray-600">Provides newborns a womb-like environment for comfort and security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neonatal Care Journey - Horizontal Layout */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              Understanding Neonatal Care Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive look at the critical first 28 days and our innovative solution
            </p>
          </div>
          
          {/* Horizontal Timeline Cards */}
          <div className="space-y-8 mb-16">
            <Card className="glass-card border-0 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Days 0-1</h3>
                    <p className="text-blue-100">Birth & Immediate Transition</p>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Critical Adaptation Period</h4>
                  <p className="text-gray-600 mb-4">
                    Newborns must immediately adapt to life outside the womb. This is the most vulnerable period 
                    requiring specialized care and monitoring. Temperature regulation, breathing adaptation, and 
                    initial feeding are critical factors during this phase.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-red-100 text-red-700">Highest Risk</Badge>
                    <span className="text-sm text-gray-500">24/7 monitoring required</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card border-0 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 p-8 order-2 lg:order-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Peak Vulnerability Window</h4>
                  <p className="text-gray-600 mb-4">
                    During this period, baby's immunity is developing gradually, making them extremely susceptible 
                    to infections from maternal transmission, healthcare environments, caregivers, and environmental 
                    factors. This is when infection control becomes paramount.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-yellow-100 text-yellow-700">High Alert</Badge>
                    <span className="text-sm text-gray-500">Infection prevention critical</span>
                  </div>
                </div>
                <div className="lg:w-1/3 bg-gradient-to-br from-yellow-500 to-orange-500 p-8 text-white flex items-center justify-center order-1 lg:order-2">
                  <div className="text-center">
                    <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Days 1-7</h3>
                    <p className="text-yellow-100">High Vulnerability Phase</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card border-0 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-green-500 to-green-600 p-8 text-white flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Days 7-28</h3>
                    <p className="text-green-100">Gradual Stabilization</p>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Immunity Development</h4>
                  <p className="text-gray-600 mb-4">
                    Gradual strengthening of the immune system begins. While still vulnerable, babies start to 
                    develop better resistance to infections. Proper hygiene and infection control remain essential, 
                    but the risk gradually decreases as immunity develops.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-green-100 text-green-700">Improving</Badge>
                    <span className="text-sm text-gray-500">Immunity building phase</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Infection Risk Matrix */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Infection Risk Sources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  icon: Users, 
                  title: "Maternal Transmission", 
                  risk: "High", 
                  color: "red",
                  description: "Infections passed from mother during birth or through contact",
                  prevention: "Screening, hygiene protocols"
                },
                { 
                  icon: Shield, 
                  title: "Healthcare Environment", 
                  risk: "Very High", 
                  color: "red",
                  description: "Hospital-acquired infections from contaminated linens and surfaces",
                  prevention: "Sterile equipment, single-use products"
                },
                { 
                  icon: Heart, 
                  title: "Caregivers", 
                  risk: "Medium", 
                  color: "yellow",
                  description: "Transmission through healthcare workers or family members",
                  prevention: "Hand hygiene, protective equipment"
                },
                { 
                  icon: Activity, 
                  title: "Environmental Factors", 
                  risk: "Medium", 
                  color: "yellow",
                  description: "Airborne pathogens and contaminated equipment",
                  prevention: "Air filtration, equipment sterilization"
                }
              ].map((factor, index) => (
                <Card key={index} className={`glass-card border-0 hover:shadow-lg transition-shadow border-l-4 ${
                  factor.color === 'red' ? 'border-l-red-500' : 'border-l-yellow-500'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        factor.color === 'red' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}>
                        <factor.icon className={`w-6 h-6 ${
                          factor.color === 'red' ? 'text-red-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-800">{factor.title}</h4>
                          <Badge variant={factor.color === 'red' ? 'destructive' : 'secondary'} className="text-xs">
                            {factor.risk}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{factor.description}</p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <strong>Prevention:</strong> {factor.prevention}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solution Showcase */}
          <Card className="glass-card border-0 bg-gradient-to-r from-primary/5 to-pink-500/5 overflow-hidden">
            <div className="relative">
              <div className="absolute top-0 right-0 opacity-10">
                <Baby className="w-40 h-40" />
              </div>
              <CardContent className="p-8 lg:p-12 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-6">
                      <Target className="w-12 h-12 text-primary" />
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">Our Targeted Solution</h3>
                        <p className="text-lg text-gray-600">Kouvèr Receiving Blanket</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Addressing the critical issue of hospital linen contamination, we developed the Kouvèr 
                      Receiving Blanket - a scientifically designed, individually packed swaddle that mimics 
                      the womb environment while prioritizing infection control.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "100% Breathable Cotton",
                        "Individually Packed & Sterile",
                        "Womb-like Environment",
                        "Hospital-Grade Quality"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <Shield className="w-20 h-20 text-primary mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Science Meets Safety</h4>
                      <p className="text-gray-600">
                        Proven to reduce infections while enhancing comfort and promoting better sleep patterns
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* History of Swaddling */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              History of Swaddling
            </h2>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                Historically, swaddling is an age-old practice of wrapping infants in blankets or similar cloths. 
                Modern day swaddling is becoming increasingly popular today as a means of settling and soothing 
                infants and helping them sleep longer with fewer awakenings. As studies proved swaddled babies 
                sleep better in the back sleeping position, swaddling may become increasingly popular.
              </p>
              <p className="mb-6 leading-relaxed">
                Swaddle helps your baby feel snug and secure as it prevents the limbs from swinging arms and legs, 
                which can trigger startle reflex and potentially cause baby to wake up frequently.
              </p>
            </div>
          </div>
        </section>

        {/* Our Neonatal Care Products */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              Our Neonatal Care Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scientifically designed receiving blankets and swaddle solutions for newborn care and comfort
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Baby className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Baby First Touch Receiving Blanket</CardTitle>
                <CardDescription>100% cotton receiving blanket for newborn care</CardDescription>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className={`w-4 h-4 ${i < 4 ? 'text-red-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">(4.9)</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {["100% breathable cotton", "Individually packed", "Infection control", "Womb-like environment"].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Shield className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-3">NKR-101</div>
                  <a href="/products/neonatal-care/baby-first-touch">
                    <Button size="sm" className="w-full">Learn More</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Kouvèr Receiving Blanket</CardTitle>
                <CardDescription>Premium scientifically designed swaddle solution</CardDescription>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className={`w-4 h-4 ${i < 4 ? 'text-red-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">(4.9)</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {["Womb-like environment", "Infection control priority", "Safe swaddling practices", "Enhanced comfort & sleep"].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Shield className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-3">Premium</div>
                  <a href="/products/neonatal-care/baby-first-touch">
                    <Button size="sm" className="w-full">Learn More</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="glass-card p-12 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-6">
              Ready to Provide the Best Care?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our Kouvér Receiving Blankets and how they can improve 
              neonatal care in your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-modern">
                Request Product Information
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}