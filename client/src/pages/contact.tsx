import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Globe, MessageSquare, ArrowRight, QrCode } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-20 bg-gray-50">
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
                  123 Innovation Drive<br />
                  Biotech Park<br />
                  Science City, SC 12345
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
                  +1 (555) 123-4567<br />
                  +1 (555) 123-4568<br />
                  Toll-free: 1-800-NIDDIK
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
                  support@niddikkare.com<br />
                  sales@niddikkare.com
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
                      <p>Email: sales@niddikkare.com</p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Direct: +1 (555) 123-4570</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-accent" />
                      Technical Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">For technical assistance and product support</p>
                    <div className="space-y-1 text-sm">
                      <p>Email: support@niddikkare.com</p>
                      <p>Phone: +1 (555) 123-4568</p>
                      <p>24/7 Emergency: +1 (555) 123-4569</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-secondary" />
                      Media & Press
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">For media inquiries and press relations</p>
                    <div className="space-y-1 text-sm">
                      <p>Email: media@niddikkare.com</p>
                      <p>Phone: +1 (555) 123-4571</p>
                      <p>Contact: Sarah Johnson, PR Manager</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* QR Code */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <QrCode className="h-5 w-5 mr-2 text-primary" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <QrCode className="h-8 w-8 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">
                        Scan QR code to save our contact information to your phone
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Global <span className="text-secondary">Offices</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With offices around the world, we're always close to our customers and partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">North America HQ</CardTitle>
                <CardDescription>United States</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    123 Innovation Drive, Science City, SC 12345
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    +1 (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    usa@niddikkare.com
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">European Office</CardTitle>
                <CardDescription>Germany</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    Wissenschaftspark 15, 12345 Berlin
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    +49 30 1234 5678
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    europe@niddikkare.com
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Asia-Pacific Office</CardTitle>
                <CardDescription>Singapore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    1 Biopolis Drive, Singapore 138622
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    +65 6789 0123
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    apac@niddikkare.com
                  </p>
                </div>
              </CardContent>
            </Card>
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
                      <p className="text-gray-600">123 Innovation Drive, Biotech Park, Science City, SC 12345</p>
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
                      <p className="text-gray-600">Call +1 (555) 123-4567 or email visits@niddikkare.com</p>
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
              
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-gray-400 text-sm">Map integration would be implemented here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
