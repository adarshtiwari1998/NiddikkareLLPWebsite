import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, Linkedin, Twitter, Menu, Baby, Bed, Dna, Microscope, Heart, Shirt, Shield, Layers, ChevronRight, Settings, FileText, ShoppingCart, Code, Users, Globe, ChevronDown } from "lucide-react";

interface DropdownItem {
  href: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  const servicesItems: DropdownItem[] = [
    {
      href: "/services/consultancy-ivd",
      label: "Consultancy for IVD-Medical Device",
      description: "Expert consulting for medical devices",
      icon: Settings
    },
    {
      href: "/services/contract-research",
      label: "Contract Research",
      description: "Specialized research services",
      icon: FileText
    },
    {
      href: "/services/oem-products",
      label: "OEM Products",
      description: "Original equipment manufacturing",
      icon: ShoppingCart
    }
  ];

  const productsItems: DropdownItem[] = [
    {
      href: "/products/neonatal-care",
      label: "Neonatal Care",
      description: "Advanced newborn care products",
      icon: Baby
    },
    {
      href: "/products/medical-linens",
      label: "Medical Linens",
      description: "Hospital-grade linens and textiles",
      icon: Bed
    },
    {
      href: "/products/dna-rna-extraction",
      label: "DNA/RNA Extraction",
      description: "Advanced extraction kits",
      icon: Dna
    },
    {
      href: "/products/molecular-diagnostics",
      label: "Molecular Diagnostics",
      description: "Precision diagnostic solutions",
      icon: Microscope
    }
  ];

  const itSolutionsItems: DropdownItem[] = [
    {
      href: "/it-solutions/rpo",
      label: "RPO",
      description: "Recruitment process outsourcing",
      icon: Users
    },
    {
      href: "/it-solutions/contingent",
      label: "Contingent",
      description: "Flexible workforce solutions",
      icon: Code
    },
    {
      href: "/it-solutions/web-app-solutions",
      label: "Web App Solutions",
      description: "Custom web applications",
      icon: Globe
    }
  ];

  const healthcareItems: DropdownItem[] = [
    {
      href: "/healthcare/neonatal-care",
      label: "Neonatal Care",
      description: "Specialized newborn care solutions",
      icon: Baby
    },
    {
      href: "/healthcare/medical-linens",
      label: "Medical Linens",
      description: "Hospital-grade linens and textiles",
      icon: Bed
    }
  ];

  const lifeSciencesItems: DropdownItem[] = [
    {
      href: "/life-sciences/dna-rna-extraction",
      label: "DNA/RNA Extraction",
      description: "Advanced extraction kits and protocols",
      icon: Dna
    },
    {
      href: "/life-sciences/molecular-diagnostics",
      label: "Molecular Diagnostics",
      description: "Precision diagnostic solutions",
      icon: Microscope
    }
  ];

  const handleMouseEnter = (menuKey: string) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setLeaveTimeout(timeout);
  };

  const DropdownMenu = ({ items, isOpen, menuKey }: { items: DropdownItem[], isOpen: boolean, menuKey: string }) => (
    <div 
      className={`absolute top-full left-0 mt-2 w-[500px] bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 z-50 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onMouseEnter={() => handleMouseEnter(menuKey)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid gap-3 p-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                location === item.href
                  ? 'bg-primary/10 text-primary border-l-4 border-primary'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => setActiveDropdown(null)}
            >
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">{item.label}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

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
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Request Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
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
            <ul className="flex items-center space-x-2">
              <li>
                <Link 
                  href="/" 
                  className={`px-4 py-2 font-medium transition-colors flex items-center h-10 ${
                    location === '/' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Home
                </Link>
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center px-4 py-2 font-medium transition-colors h-10 ${
                    location.startsWith('/services') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Services
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <DropdownMenu items={servicesItems} isOpen={activeDropdown === 'services'} menuKey="services" />
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center px-4 py-2 font-medium transition-colors h-10 ${
                    location.startsWith('/products') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Products
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <DropdownMenu items={productsItems} isOpen={activeDropdown === 'products'} menuKey="products" />
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('it-solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center px-4 py-2 font-medium transition-colors h-10 ${
                    location.startsWith('/it-solutions') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  IT Solutions
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <DropdownMenu items={itSolutionsItems} isOpen={activeDropdown === 'it-solutions'} menuKey="it-solutions" />
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('healthcare')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center px-4 py-2 font-medium transition-colors h-10 ${
                    location.startsWith('/healthcare') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Healthcare
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <DropdownMenu items={healthcareItems} isOpen={activeDropdown === 'healthcare'} menuKey="healthcare" />
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('life-sciences')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center px-4 py-2 font-medium transition-colors h-10 ${
                    location.startsWith('/life-sciences') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Life Sciences
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <DropdownMenu items={lifeSciencesItems} isOpen={activeDropdown === 'life-sciences'} menuKey="life-sciences" />
              </li>

              <li>
                <Link 
                  href="/gut-care" 
                  className={`px-4 py-2 font-medium transition-colors flex items-center h-10 ${
                    location === '/gut-care' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  GUT Care
                </Link>
              </li>

              <li>
                <Link 
                  href="/about" 
                  className={`px-4 py-2 font-medium transition-colors flex items-center h-10 ${
                    location === '/about' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  About
                </Link>
              </li>

              <li>
                <Link 
                  href="/news" 
                  className={`px-4 py-2 font-medium transition-colors flex items-center h-10 ${
                    location === '/news' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  News
                </Link>
              </li>

              <li>
                <Link 
                  href="/contact" 
                  className={`px-4 py-2 font-medium transition-colors flex items-center h-10 ${
                    location === '/contact' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Services</h3>
                  {servicesItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="block pl-4 text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Products</h3>
                  {productsItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="block pl-4 text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">IT Solutions</h3>
                  {itSolutionsItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="block pl-4 text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Healthcare</h3>
                  {healthcareItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="block pl-4 text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Life Sciences</h3>
                  {lifeSciencesItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="block pl-4 text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link href="/gut-care" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  GUT Care
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/news" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  News
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}