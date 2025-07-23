import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Building2, 
  Users, 
  Newspaper, 
  Award, 
  ArrowRight, 
  Target, 
  Heart, 
  Globe,
  CheckCircle,
  TrendingUp,
  Calendar,
  UserCheck
} from "lucide-react";

export default function Company() {
  const companyStats = [
    { icon: TrendingUp, label: "Years of Excellence", value: "4+", color: "text-[hsl(134,37%,27%)]" },
    { icon: Users, label: "Healthcare Partners", value: "10+", color: "text-[hsl(188,78%,41%)]" },
    { icon: Globe, label: "Countries Served", value: "5+", color: "text-[hsl(43,100%,45%)]" },
    { icon: Award, label: "Quality Rate", value: "99.8%", color: "text-[hsl(134,37%,27%)]" }
  ];

  const companyPages = [
    {
      title: "About Us",
      description: "Discover our mission, technology, and commitment to transforming human health through innovative healthcare and life sciences solutions.",
      icon: Building2,
      href: "/company/about",
      color: "from-[hsl(134,37%,27%)] to-[hsl(134,37%,35%)]",
      highlights: ["Company Mission", "Our Technology", "Global Impact", "Quality Standards"]
    },
    {
      title: "Leadership Team", 
      description: "Meet our experienced co-founders who lead NIDDIKKARE LLP with expertise in biotechnology, molecular diagnostics, and nanotechnology.",
      icon: Users,
      href: "/company/leadership-team",
      color: "from-[hsl(188,78%,41%)] to-[hsl(188,78%,48%)]",
      highlights: ["Dr. Samar Husain Naqvi", "Dr. Abhishek Chanchal", "Professional Expertise", "Contact Information"]
    },
    {
      title: "Company News",
      description: "Stay updated with our latest breakthroughs, partnerships, awards, and innovations in molecular diagnostics and healthcare technology.",
      icon: Newspaper,
      href: "/company/news", 
      color: "from-[hsl(43,100%,45%)] to-[hsl(43,100%,52%)]",
      highlights: ["Latest Research", "Industry Awards", "Strategic Partnerships", "Product Innovations"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[hsl(134,37%,27%)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-[hsl(43,100%,45%)]/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <h1 className="text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-[hsl(134,37%,27%)] to-[hsl(188,78%,41%)] bg-clip-text text-transparent">
                Company Overview
              </h1>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Leading innovation in healthcare and life sciences through cutting-edge molecular diagnostics 
                and comprehensive biotechnology solutions
              </p>
            </div>
          </div>
        </section>

        {/* Company Statistics */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-2 border-transparent hover:border-[hsl(134,37%,27%)]/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-l-4 border-[hsl(134,37%,27%)] hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[hsl(134,37%,27%)]/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-[hsl(134,37%,27%)]" />
                  </div>
                  <CardTitle className="text-2xl text-[hsl(134,37%,27%)]">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 leading-relaxed mb-4">
                  At NIDDIKKARE LLP, our team of experts empowers researchers and clinicians to transform human health. 
                  We provide seamless sample-to-insight experiences, enabling novel discoveries and improved diagnostics.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  High-quality DNA and RNA extraction is crucial for molecular biology applications. Our comprehensive 
                  solutions cater to diverse sample sources, streamlining research workflows and driving breakthroughs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-l-4 border-[hsl(43,100%,45%)] hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[hsl(43,100%,45%)]/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-[hsl(43,100%,45%)]" />
                  </div>
                  <CardTitle className="text-2xl text-[hsl(43,100%,45%)]">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To be the global leader in innovative healthcare and life sciences solutions, transforming the way 
                  molecular diagnostics are performed and enhancing patient outcomes worldwide.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We envision a future where advanced diagnostic technologies are accessible to all, enabling personalized 
                  medicine and precision healthcare for every patient.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Pages Navigation */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Company</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our leadership, mission, and latest developments in healthcare innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {companyPages.map((page, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[hsl(134,37%,27%)]/20 overflow-hidden">
                <div className={`h-4 bg-gradient-to-r ${page.color}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${page.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <page.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800 group-hover:text-[hsl(134,37%,27%)] transition-colors">
                      {page.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {page.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {page.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[hsl(134,37%,27%)]" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href={page.href}>
                      <Button className={`w-full bg-gradient-to-r ${page.color} hover:opacity-90 transition-all duration-300 group-hover:scale-105`}>
                        Explore {page.title}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Access */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[hsl(134,37%,27%)] to-[hsl(188,78%,41%)] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Learn More?</h3>
            <p className="text-xl mb-8 text-white/90">
              Connect with our leadership team or explore our innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company/leadership-team">
                <Button size="lg" variant="secondary" className="bg-white text-[hsl(134,37%,27%)] hover:bg-gray-100">
                  <UserCheck className="w-5 h-5 mr-2" />
                  Meet Our Team
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-[hsl(134,37%,27%)]">
                  <Calendar className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}