import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Users, Award, Globe, Target, Heart, Microscope, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-secondary">NIDDIKKARE LLP</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering researchers and clinicians to transform human health through innovative 
            healthcare and life sciences solutions. Our commitment to excellence drives breakthrough 
            discoveries and improved patient outcomes.
          </p>
        </section>

        {/* Company Story */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-secondary">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize healthcare through cutting-edge molecular biology 
                and diagnostic solutions, NIDDIKKARE LLP has been at the forefront of scientific innovation 
                for over two decades.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our journey began with a simple yet powerful mission: to provide seamless sample-to-insight 
                experiences that enable novel discoveries and improved diagnostics. Today, we serve 
                healthcare institutions, research facilities, and life sciences companies worldwide.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Founded in 1999 with a focus on molecular diagnostics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Expanded into neonatal care and medical linens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Developed revolutionary GUT care solutions</span>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="NIDDIKKARE LLP research facility" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To empower researchers and clinicians with innovative solutions that transform human health, 
                  enabling breakthrough discoveries and improved patient outcomes through cutting-edge 
                  molecular biology and diagnostic technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in healthcare and life sciences solutions, driving scientific 
                  advancement and improving lives through innovative products, exceptional service, 
                  and sustainable practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 leading-relaxed space-y-2">
                  <li>• Innovation and Excellence</li>
                  <li>• Scientific Integrity</li>
                  <li>• Customer-Centric Approach</li>
                  <li>• Sustainability</li>
                  <li>• Global Collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Key <span className="text-secondary">Features</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What sets NIDDIKKARE LLP apart in the healthcare and life sciences industry.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">High Sensitivity</h3>
                <p className="text-sm text-gray-600">
                  Yields highly concentrated nucleic acids for greater sensitivity in downstream applications
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Superior Purity</h3>
                <p className="text-sm text-gray-600">
                  Highly pure nucleic acid, ready for PCR, sequencing, and other molecular applications
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Rapid Processing</h3>
                <p className="text-sm text-gray-600">
                  Turnaround time (TAT) is 30 – 45 minutes with streamlined workflows
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Leadership <span className="text-secondary">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and excellence at NIDDIKKARE LLP.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Dr. Sarah Johnson</CardTitle>
                <CardDescription>Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  20+ years in molecular diagnostics and healthcare innovation. PhD in Molecular Biology from Stanford University.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline">Molecular Biology</Badge>
                  <Badge variant="outline">Healthcare Innovation</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-secondary" />
                </div>
                <CardTitle>Dr. Michael Chen</CardTitle>
                <CardDescription>Chief Scientific Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Expert in genomics and personalized medicine. Former researcher at Mayo Clinic with 100+ publications.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline">Genomics</Badge>
                  <Badge variant="outline">Personalized Medicine</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-accent" />
                </div>
                <CardTitle>Dr. Emily Rodriguez</CardTitle>
                <CardDescription>Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Pioneer in automated laboratory systems and AI-driven diagnostics. MIT PhD in Bioengineering.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline">Automation</Badge>
                  <Badge variant="outline">AI Diagnostics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Statistics */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our <span className="text-secondary">Impact</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Products & Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Awards & <span className="text-secondary">Recognition</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Innovation Award</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Healthcare Innovation Society</p>
                <p className="text-xs text-gray-500">2023</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Quality Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">International Quality Foundation</p>
                <p className="text-xs text-gray-500">2022</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Sustainability Leader</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Green Healthcare Initiative</p>
                <p className="text-xs text-gray-500">2023</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Best Employer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Life Sciences Careers</p>
                <p className="text-xs text-gray-500">2023</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Global Presence */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Global <span className="text-secondary">Presence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With operations spanning across continents, NIDDIKKARE LLP serves healthcare institutions, 
                research facilities, and life sciences companies worldwide. Our global network ensures 
                local support with international expertise.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Americas</h3>
                    <p className="text-gray-600 text-sm">Headquarters in North America with distribution centers across the region</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Europe</h3>
                    <p className="text-gray-600 text-sm">Regional offices in Germany, UK, and France serving European markets</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Asia-Pacific</h3>
                    <p className="text-gray-600 text-sm">Growing presence in Singapore, Japan, and Australia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Global healthcare network" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with NIDDIKKARE LLP to advance healthcare and life sciences. Together, we can 
            transform human health and improve lives worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Partner With Us
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Careers
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
