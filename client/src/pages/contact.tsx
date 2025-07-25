import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Globe, MessageSquare, ArrowRight, Microscope, Check, Instagram, Linkedin } from "lucide-react";
import SEO from "@/components/seo";

export default function Contact() {
  return (
    <div className="py-20 bg-gray-50">
      <SEO pagePath="/contact" />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your research workflow or implement our healthcare solutions? 
            Contact our team of experts today and discover how we can help you achieve your goals.
          </p>
        </section>

        {/* Contact Information Cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  C-11, Pocket-9A, Jasola<br />
                  New Delhi-110025<br />
                  INDIA
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  +91-90151 62449<br />
                  +91-95603 34337<br />
                  India
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  info@niddikkare.com<br />
                  info@niddik.com<br />
                  Contact us anytime
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-success" />
                </div>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM<br />
                  Sun: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Contact Form */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                    <Input 
                      id="firstName"
                      type="text" 
                      placeholder="John"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                    <Input 
                      id="lastName"
                      type="text" 
                      placeholder="Doe"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-gray-700 font-medium">Company/Organization</Label>
                  <Input 
                    id="company"
                    type="text" 
                    placeholder="Your company name"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="interest" className="text-gray-700 font-medium">Product Interest *</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a product category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="neonatal">Neonatal Care</SelectItem>
                      <SelectItem value="linens">Medical Linens</SelectItem>
                      <SelectItem value="dna">DNA/RNA Extraction</SelectItem>
                      <SelectItem value="diagnostics">Molecular Diagnostics</SelectItem>
                      <SelectItem value="gut">GUT Care</SelectItem>
                      <SelectItem value="research">Research Solutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                  <Input 
                    id="subject"
                    type="text" 
                    placeholder="Brief description of your inquiry"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                  <Textarea 
                    id="message"
                    rows={4} 
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    className="mt-2"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help you find the right solutions for your needs. 
                  Reach out to us through any of the following channels.
                </p>
              </div>
              
              {/* Department Contacts */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                      Sales & Product Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">For product inquiries and sales support</p>
                    <div className="space-y-1 text-sm">
                      <p>Email: info@niddikkare.com</p>
                      <p>Phone: +91-90151 62449</p>
                      <p>Direct: +91-95603 34337</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-accent" />
                      IT Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">For technical assistance and product support</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium">Email:</p>
                        <p>info@niddik.com</p>
                      </div>
                      <div>
                        <p className="font-medium">Headquarters:</p>
                        <p>Platina Heights, Sector 59, Noida - 201301</p>
                      </div>
                      <div>
                        <p className="font-medium">Contact Numbers:</p>
                        <p>+91 9717312058 (INDIA)</p>
                        <p>+1 (646) 889-9517 (USA)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                

              </div>
              

              
              {/* Social Media Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-primary" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">Connect with us on social media for latest updates</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/niddikkare" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors bg-gray-50 hover:bg-primary/10 px-3 py-2 rounded-lg"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/niddikkare-llp/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors bg-gray-50 hover:bg-primary/10 px-3 py-2 rounded-lg"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I place an order?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  You can place an order by contacting our sales team directly, using our online portal, 
                  or through your local distributor. Our sales team will guide you through the process.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is your typical delivery time?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Standard delivery times are 5-7 business days for in-stock items. Custom orders may 
                  take 2-3 weeks depending on specifications and quantity.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer technical support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Yes, we provide comprehensive technical support including product training, 
                  troubleshooting, and ongoing assistance. Contact our support team for help.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are your products FDA approved?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Many of our products are FDA approved or comply with relevant regulatory standards. 
                  Please check specific product documentation or contact us for details.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map and Location */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Visit Our <span className="text-secondary">Facility</span>
              </h2>
              <p className="text-lg text-gray-600">
                We welcome visits to our state-of-the-art facility. Please schedule in advance.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Location Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600">C-11, Pocket-9A, Jasola, New Delhi-110025 INDIA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Visiting Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Weekends: By appointment only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Schedule a Visit</p>
                      <p className="text-gray-600">Call +91-90151 62449 or +91-95603 34337 or email info@niddikkare.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Schedule Visit
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14018.968343715622!2d77.294943!3d28.547471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4045578f4b3%3A0x62602b02ff4b0ec0!2sField%20Grow%20Organic%20India%20Limited.!5e0!3m2!1sen!2sus!4v1753193578728!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NIDDIKKARE LLP Location - Field Grow Organic India Limited"
                ></iframe>
              </div>
            </div>

            {/* Professional Laboratory Equipment Section */}
            <div className="mt-16">
              <div className="relative overflow-hidden rounded-3xl">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-green-50"></div>
                <div className="absolute top-4 right-4 w-32 h-32 bg-primary/5 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary/5 rounded-full"></div>
                
                <div className="relative p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                      <Microscope className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      Professional Laboratory Equipment
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      State-of-the-art Nucleic Acid Extraction Kit for precision DNA/RNA isolation
                    </p>
                  </div>
                  
                  <div className="max-w-5xl mx-auto">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
                      <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
                        <img 
                          src="/assets/images/about-us/nucleic-acid-extraction-kit.png" 
                          alt="Nucleic Acid Extraction Kit - Professional DNA/RNA Laboratory Equipment" 
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <div className="inline-flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-full shadow-lg border border-gray-200">
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700 font-medium">Professional-grade Nucleic Acid Extraction Kit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
