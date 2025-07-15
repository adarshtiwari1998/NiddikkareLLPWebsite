import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Baby, Heart, Shield, CheckCircle, Thermometer, Wind, Moon, ArrowRight } from "lucide-react";

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

        {/* Product Showcase */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header mb-4">
              Cuddle Up With Hygiene
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Kouvér Receiving Blanket by NiDDikKare LLP - Premium swaddle solution for your newborn's safety and comfort
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="glass-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Receiving Blankets/Swaddles</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="h-12 w-12 text-primary" />
                </div>
                <p className="text-gray-600 mb-4">Premium quality receiving blankets designed for newborn comfort and safety</p>
                <Badge className="bg-primary/10 text-primary">Available Now</Badge>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">NiDDik Brand</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-12 w-12 text-secondary" />
                </div>
                <p className="text-gray-600 mb-4">Trusted brand for healthcare and IT solutions with decades of experience</p>
                <Badge className="bg-secondary/10 text-secondary">Premium Quality</Badge>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Scientific Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-12 w-12 text-accent" />
                </div>
                <p className="text-gray-600 mb-4">Scientifically designed to replicate womb-like environment for optimal comfort</p>
                <Badge className="bg-accent/10 text-accent">Research Based</Badge>
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