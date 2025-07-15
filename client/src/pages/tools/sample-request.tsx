import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, BarChart3, Shield, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function SampleRequest() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center">
              <FileText className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Sample <span className="text-blue-600">Request</span> System
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Streamlined sample request and tracking system for laboratories. 
            Manage your sample workflow efficiently with real-time tracking and automated notifications.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Real-Time Tracking</CardTitle>
                <CardDescription>
                  Monitor sample status from request to completion
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive reporting and analytics tools
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Secure Protocol</CardTitle>
                <CardDescription>
                  HIPAA-compliant secure sample management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* System Capabilities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              System <span className="text-blue-600">Capabilities</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Request Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Digital Sample Forms</h4>
                    <p className="text-gray-600">Create and submit sample requests digitally</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Automated Routing</h4>
                    <p className="text-gray-600">Intelligent routing to appropriate departments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Priority Management</h4>
                    <p className="text-gray-600">Set and manage sample processing priorities</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Tracking & Monitoring</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Real-Time Updates</h4>
                    <p className="text-gray-600">Live status updates throughout the process</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Automated Notifications</h4>
                    <p className="text-gray-600">Email and SMS alerts for key milestones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Chain of Custody</h4>
                    <p className="text-gray-600">Complete audit trail and documentation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sample <span className="text-blue-600">Workflow</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Request</h3>
                <p className="text-sm text-gray-600">Submit sample request form</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Validation</h3>
                <p className="text-sm text-gray-600">Review and validate request</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Processing</h3>
                <p className="text-sm text-gray-600">Begin sample analysis</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                <p className="text-sm text-gray-600">Complete laboratory testing</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Results</h3>
                <p className="text-sm text-gray-600">Deliver final results</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Performance <span className="text-blue-600">Metrics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <p className="text-gray-600">System Uptime</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">2.5hrs</div>
                <p className="text-gray-600">Avg. Response Time</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
                <p className="text-gray-600">Samples Processed</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Streamline Your Sample Management
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of laboratories that have improved their efficiency with our sample request system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Demo
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}