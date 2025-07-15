import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, Linkedin, Twitter, Menu, Baby, Bed, Dna, Microscope, Heart, Shirt, Shield, Layers, ChevronRight } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/" 
                      className={`px-4 py-2 font-medium transition-colors ${
                        location === '/' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-primary hover:text-white transition-colors">Healthcare</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/healthcare/neonatal-care" 
                          className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Baby className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Neonatal Care</div>
                            <div className="text-sm text-gray-600">Specialized newborn care solutions</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/healthcare/medical-linens" 
                          className="flex items-center justify-between space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
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
                      <div className="ml-4 space-y-1">
                        <NavigationMenuLink asChild>
                          <Link 
                            href="/healthcare/medical-linens/woven" 
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
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
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
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
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
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
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-primary hover:text-white transition-colors">Life Sciences</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/life-sciences/dna-rna-extraction" 
                          className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
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
                          className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
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
                        location === '/gut-care' ? 'text-primary' : 'text-gray-700 hover:text-primary'
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
                        location === '/about' ? 'text-primary' : 'text-gray-700 hover:text-primary'
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
                        location === '/news' ? 'text-primary' : 'text-gray-700 hover:text-primary'
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
                        location === '/contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
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
