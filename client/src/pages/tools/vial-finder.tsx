import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Search, Settings, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function VialFinder() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <FlaskConical className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-primary">Vial</span>Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Laboratory vial and container selection tool. 
            Find the perfect vial for your analytical applications with our comprehensive database.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Advanced Search</CardTitle>
                <CardDescription>
                  Search by volume, material, closure type, and more
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Compatibility Check</CardTitle>
                <CardDescription>
                  Verify chemical compatibility with your samples
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quick Selection</CardTitle>
                <CardDescription>
                  Instant recommendations based on your requirements
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Vial Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Vial <span className="text-primary">Categories</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">By Application</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">HPLC Vials</h4>
                    <p className="text-gray-600">Autosampler vials for liquid chromatography</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">GC Vials</h4>
                    <p className="text-gray-600">Gas chromatography sample containers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Storage Vials</h4>
                    <p className="text-gray-600">Sample storage and archiving</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Microvolume Vials</h4>
                    <p className="text-gray-600">Small volume sample handling</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">By Material</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Glass Vials</h4>
                    <p className="text-gray-600">Borosilicate glass for chemical resistance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Plastic Vials</h4>
                    <p className="text-gray-600">PP, PE, and other polymer materials</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Amber Vials</h4>
                    <p className="text-gray-600">UV protection for light-sensitive samples</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Certified Vials</h4>
                    <p className="text-gray-600">Pre-certified for trace analysis</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Product Statistics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Product <span className="text-primary">Range</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                <p className="text-gray-600">Vial Types</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-600">Volume Options</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
                <p className="text-gray-600">Material Types</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
                <p className="text-gray-600">Closure Options</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Find Your Perfect Vial
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Use our comprehensive vial finder to discover the ideal container for your analytical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Search Vials
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Browse Catalog
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}