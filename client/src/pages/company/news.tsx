import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Search, Clock, ArrowRight, FileText, Video, Users } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      title: "Breakthrough in Neonatal DNA Extraction Technology",
      description: "Our latest research demonstrates significant improvements in DNA extraction efficiency for neonatal samples, enabling better diagnostic outcomes for the most vulnerable patients.",
      category: "Research",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "primary" as const,
      type: "article"
    },
    {
      title: "New Automated Extraction System Reduces Processing Time by 40%",
      description: "Introducing our next-generation automated nucleic acid extraction system that maintains high purity while significantly reducing turnaround time.",
      category: "Innovation",
      date: "March 10, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "accent" as const,
      type: "article"
    },
    {
      title: "Strategic Partnership with Leading Hospitals Announced",
      description: "NIDDIKKARE LLP announces new partnerships with major healthcare institutions to expand access to advanced diagnostic solutions worldwide.",
      category: "Partnership",
      date: "March 5, 2025",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "secondary" as const,
      type: "article"
    },
    {
      title: "Webinar: Advances in Molecular Diagnostics",
      description: "Join our experts for an in-depth discussion on the latest developments in molecular diagnostic technologies and their clinical applications.",
      category: "Event",
      date: "February 28, 2025",
      readTime: "60 min",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "primary" as const,
      type: "webinar"
    },
    {
      title: "GUT Care Solutions: Revolutionizing Digestive Health",
      description: "Explore how our innovative GUT care platform is transforming approaches to digestive health management through personalized microbiome analysis.",
      category: "Product",
      date: "February 20, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "accent" as const,
      type: "article"
    },
    {
      title: "Award Recognition for Healthcare Innovation",
      description: "NIDDIKKARE LLP receives prestigious healthcare innovation award for our contributions to molecular diagnostics and patient care improvement.",
      category: "Award",
      date: "February 15, 2025",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "secondary" as const,
      type: "article"
    }
  ];

  const categoryColors = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground"
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Latest <span className="text-secondary">News</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with our latest innovations, research breakthroughs, industry developments, 
            and company news from the world of healthcare and life sciences.
          </p>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search news articles..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="innovation">Innovation</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="award">Award</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="h-64 lg:h-auto">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className={categoryColors[newsItems[0].categoryColor]}>
                    Featured
                  </Badge>
                  <Badge variant="outline">
                    {newsItems[0].category}
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {newsItems[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {newsItems[0].description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {newsItems[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {newsItems[0].readTime}
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={categoryColors[article.categoryColor]}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center">
                      {article.type === "webinar" && <Video className="h-4 w-4 mr-1 text-gray-500" />}
                      {article.type === "article" && <FileText className="h-4 w-4 mr-1 text-gray-500" />}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Stay <span className="text-secondary">Informed</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about breakthrough discoveries, 
                product launches, and industry insights.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Media <span className="text-secondary">Resources</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive media kit and resources for journalists, researchers, and industry professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Press Releases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Official company announcements and press releases for media coverage.
                </p>
                <Button variant="outline">View All</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Media Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Logos, images, and company information for media and partners.
                </p>
                <Button variant="outline">Download</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Media Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connect with our media relations team for interviews and inquiries.
                </p>
                <Button variant="outline">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Load More */}
        <section className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Load More Articles
          </Button>
        </section>
      </div>
    </div>
  );
}
