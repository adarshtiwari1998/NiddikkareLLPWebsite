import React from "react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, Linkedin, Twitter, Menu, Baby, Bed, Dna, Microscope, Heart, Shirt, Shield, Layers, ChevronRight, Settings, FileText, ShoppingCart, Code, Users, Globe } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  



  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="border-b border-gray-200 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 text-gray-600">
              <span className="flex items-center">
                <Phone className="h-3 w-3 mr-1" />
                +1 (555) 123-4567
              </span>
              <span className="flex items-center">
                <Mail className="h-3 w-3 mr-1" />
                info@niddikkare.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Button size="sm" className="bg-secondary text-white hover:bg-secondary/90">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="bg-primary text-white px-3 py-2 rounded-lg mr-2">
                <span className="font-bold text-xl">Ni</span>
              </div>
              <div className="bg-secondary text-white px-3 py-2 rounded-lg">
                <span className="font-bold text-xl">DiK</span>
              </div>
              <div className="ml-3">
                <span className="font-bold text-2xl text-gray-800">NIDDIKKARE LLP</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex space-x-2">
                <li>
                  <Link 
                    href="/" 
                    className={`px-4 py-2 font-medium transition-colors ${
                      location === '/' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover:bg-primary hover:text-white transition-colors data-[state=open]:bg-primary data-[state=open]:text-white ${
                    location.startsWith('/services') ? 'bg-primary text-white' : ''
                  }`}>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[500px]">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/services/consultancy-ivd" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/services/consultancy-ivd'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Settings className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Consultancy for IVD-Medical Device</div>
                            <div className="text-sm text-gray-600">Expert consulting for medical devices</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/services/contract-research" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/services/contract-research'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Contract Research</div>
                            <div className="text-sm text-gray-600">Specialized research services</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/services/oem-products" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/services/oem-products'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <ShoppingCart className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">OEM Products</div>
                            <div className="text-sm text-gray-600">Original equipment manufacturing</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover:bg-primary hover:text-white transition-colors data-[state=open]:bg-primary data-[state=open]:text-white ${
                    location.startsWith('/products') ? 'bg-primary text-white' : ''
                  }`}>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[500px]">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/products/neonatal-care" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/products/neonatal-care'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Baby className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Neonatal Care</div>
                            <div className="text-sm text-gray-600">Advanced newborn care products</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/products/medical-linens" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/products/medical-linens'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Bed className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Medical Linens</div>
                            <div className="text-sm text-gray-600">Professional grade medical textiles</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/products/dna-rna-extraction" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/products/dna-rna-extraction'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Dna className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">DNA/RNA Extraction</div>
                            <div className="text-sm text-gray-600">Molecular extraction solutions</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/products/molecular-diagnostics" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/products/molecular-diagnostics'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Microscope className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Molecular Diagnostics</div>
                            <div className="text-sm text-gray-600">Advanced diagnostic tools</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover:bg-primary hover:text-white transition-colors data-[state=open]:bg-primary data-[state=open]:text-white ${
                    location.startsWith('/it-solutions') ? 'bg-primary text-white' : ''
                  }`}>IT Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[500px]">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/it-solutions/rpo" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/it-solutions/rpo'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Users className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">RPO</div>
                            <div className="text-sm text-gray-600">Recruitment Process Outsourcing</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/it-solutions/contingent" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/it-solutions/contingent'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Users className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Contingent</div>
                            <div className="text-sm text-gray-600">Flexible workforce solutions</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/it-solutions/web-app-solutions" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/it-solutions/web-app-solutions'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Globe className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Web App Solutions</div>
                            <div className="text-sm text-gray-600">Custom web applications</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover:bg-primary hover:text-white transition-colors data-[state=open]:bg-primary data-[state=open]:text-white ${
                    location.startsWith('/healthcare') ? 'bg-primary text-white' : ''
                  }`}>Healthcare</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[500px]">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/healthcare/neonatal-care" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/healthcare/neonatal-care'
                              ? 'bg-primary/10 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Baby className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Neonatal Care</div>
                            <div className="text-sm text-gray-600">Specialized newborn care solutions</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      
                      <div>
                        <NavigationMenuLink asChild>
                          <Link 
                            href="/healthcare/medical-linens"
                            className={`flex items-center justify-between space-x-2 p-3 rounded-lg transition-colors ${
                              location.startsWith('/healthcare/medical-linens') 
                                ? 'bg-primary/10 text-primary' 
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <Bed className="h-5 w-5 text-primary" />
                              <div>
                                <div className="font-medium">Medical Linens</div>
                                <div className="text-sm text-gray-600">Hospital-grade linens and textiles</div>
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </Link>
                        </NavigationMenuLink>
                        
                        {/* Nested submenu below Medical Linens */}
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                          <div className="space-y-2">
                            <NavigationMenuLink asChild>
                              <Link 
                                href="/healthcare/medical-linens/woven" 
                                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors text-sm block ${
                                  location === '/healthcare/medical-linens/woven'
                                    ? 'bg-green-50 text-green-700 border-l-2 border-green-500'
                                    : 'hover:bg-gray-50'
                                }`}
                              >
                                <Shirt className="h-4 w-4 text-green-500" />
                                <div>
                                  <div className="font-medium">Woven</div>
                                  <div className="text-xs text-gray-600">100% cotton comfort</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link 
                                href="/healthcare/medical-linens/non-woven" 
                                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors text-sm block ${
                                  location === '/healthcare/medical-linens/non-woven'
                                    ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-500'
                                    : 'hover:bg-gray-50'
                                }`}
                              >
                                <Shield className="h-4 w-4 text-blue-500" />
                                <div>
                                  <div className="font-medium">Non-woven</div>
                                  <div className="text-xs text-gray-600">Superior barrier protection</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link 
                                href="/healthcare/medical-linens/blended" 
                                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors text-sm block ${
                                  location === '/healthcare/medical-linens/blended'
                                    ? 'bg-purple-50 text-purple-700 border-l-2 border-purple-500'
                                    : 'hover:bg-gray-50'
                                }`}
                              >
                                <Layers className="h-4 w-4 text-purple-500" />
                                <div>
                                  <div className="font-medium">Blended</div>
                                  <div className="text-xs text-gray-600">Combined properties</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover:bg-primary hover:text-white transition-colors data-[state=open]:bg-primary data-[state=open]:text-white ${
                    location.startsWith('/life-sciences') ? 'bg-primary text-white' : ''
                  }`}>Life Sciences</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[500px]">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/life-sciences/dna-rna-extraction" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/life-sciences/dna-rna-extraction'
                              ? 'bg-accent/10 text-accent border-l-4 border-accent'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Dna className="h-5 w-5 text-accent" />
                          <div>
                            <div className="font-medium">DNA/RNA Extraction</div>
                            <div className="text-sm text-gray-600">Advanced extraction kits and protocols</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/life-sciences/molecular-diagnostics" 
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                            location === '/life-sciences/molecular-diagnostics'
                              ? 'bg-accent/10 text-accent border-l-4 border-accent'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Microscope className="h-5 w-5 text-accent" />
                          <div>
                            <div className="font-medium">Molecular Diagnostics</div>
                            <div className="text-sm text-gray-600">Precision diagnostic solutions</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/gut-care" 
                      className={`px-4 py-2 font-medium transition-colors ${
                        location === '/gut-care' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      GUT Care
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/about" 
                      className={`px-4 py-2 font-medium transition-colors ${
                        location === '/about' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/news" 
                      className={`px-4 py-2 font-medium transition-colors ${
                        location === '/news' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      News
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/contact" 
                      className={`px-4 py-2 font-medium transition-colors ${
                        location === '/contact' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-medium text-gray-700 hover:text-primary">
                    Home
                  </Link>
                  <div className="space-y-2">
                    <div className="text-lg font-medium text-gray-700">Healthcare</div>
                    <div className="ml-4 space-y-2">
                      <Link href="/healthcare/neonatal-care" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                        <Baby className="h-4 w-4" />
                        <span>Neonatal Care</span>
                      </Link>
                      <Link href="/healthcare/medical-linens" className="flex items-center justify-between text-gray-600 hover:text-primary">
                        <div className="flex items-center space-x-2">
                          <Bed className="h-4 w-4" />
                          <span>Medical Linens</span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-gray-400" />
                      </Link>
                      <div className="ml-6 space-y-1">
                        <Link href="/healthcare/medical-linens/woven" className="flex items-center space-x-2 text-gray-500 hover:text-primary text-sm">
                          <Shirt className="h-3 w-3" />
                          <span>Woven</span>
                        </Link>
                        <Link href="/healthcare/medical-linens/non-woven" className="flex items-center space-x-2 text-gray-500 hover:text-primary text-sm">
                          <Shield className="h-3 w-3" />
                          <span>Non-woven</span>
                        </Link>
                        <Link href="/healthcare/medical-linens/blended" className="flex items-center space-x-2 text-gray-500 hover:text-primary text-sm">
                          <Layers className="h-3 w-3" />
                          <span>Blended</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-medium text-gray-700">Life Sciences</div>
                    <div className="ml-4 space-y-2">
                      <Link href="/life-sciences/dna-rna-extraction" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                        <Dna className="h-4 w-4" />
                        <span>DNA/RNA Extraction</span>
                      </Link>
                      <Link href="/life-sciences/molecular-diagnostics" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                        <Microscope className="h-4 w-4" />
                        <span>Molecular Diagnostics</span>
                      </Link>
                    </div>
                  </div>
                  <Link href="/gut-care" className="text-lg font-medium text-gray-700 hover:text-primary">
                    GUT Care
                  </Link>
                  <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-primary">
                    About
                  </Link>
                  <Link href="/news" className="text-lg font-medium text-gray-700 hover:text-primary">
                    News
                  </Link>
                  <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-primary">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
