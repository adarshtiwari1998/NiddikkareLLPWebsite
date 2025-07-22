import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, Linkedin, Twitter, Menu, Baby, Bed, Dna, Microscope, Heart, Shirt, Shield, Layers, ChevronRight, Settings, FileText, ShoppingCart, Code, Users, Globe, ChevronDown, X } from "lucide-react";
import logoImage from "@/assets/niddikkare-logo.png";

interface DropdownItem {
  href: string;
  label: string;
  description: string;
  icon: React.ElementType;
  submenu?: DropdownItem[];
}

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (leaveTimeout) {
        clearTimeout(leaveTimeout);
      }
    };
  }, [leaveTimeout]);

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
      icon: Bed,
      submenu: [
        {
          href: "/healthcare/medical-linens/woven",
          label: "Woven Medical Linens",
          description: "100% cotton construction",
          icon: Layers
        },
        {
          href: "/healthcare/medical-linens/non-woven",
          label: "Non-woven Medical Linens", 
          description: "Barrier protection materials",
          icon: Shield
        },
        {
          href: "/healthcare/medical-linens/blended",
          label: "Blended Medical Linens",
          description: "Combined material benefits",
          icon: Shirt
        }
      ]
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
    // Always clear any existing timeout
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    // Immediately set the new dropdown - this ensures instant switching
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    // Only set timeout if there's no existing one
    if (!leaveTimeout) {
      const timeout = setTimeout(() => {
        setActiveDropdown(null);
      }, 100); // Reduced from 200ms to 100ms for faster response
      setLeaveTimeout(timeout);
    }
  };

  const handleNonDropdownHover = () => {
    // Clear any existing timeout
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    // Immediately close any open dropdown
    setActiveDropdown(null);
  };

  const DropdownMenu = ({ items, isOpen, menuKey }: { items: DropdownItem[], isOpen: boolean, menuKey: string }) => (
    <div 
      className={`absolute top-full left-0 w-[500px] bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-150 z-50 ${
        isOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
      }`}
      style={{ marginTop: '8px' }}
      onMouseEnter={() => handleMouseEnter(menuKey)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid gap-3 p-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  location === item.href
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveDropdown(null)}
              >
                <Icon className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
                {item.submenu && <ChevronRight className="h-4 w-4 text-gray-400" />}
              </Link>
              
              {/* Render submenu items if they exist */}
              {item.submenu && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((subItem) => {
                    const SubIcon = subItem.icon;
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`flex items-center space-x-2 p-2 rounded-md text-sm transition-colors ${
                          location === subItem.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                        }`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <SubIcon className="h-4 w-4" />
                        <div>
                          <div className="font-medium">{subItem.label}</div>
                          <div className="text-xs text-gray-500">{subItem.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="border-b border-gray-200 py-2 hidden md:block">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 text-gray-600">
              <span className="flex items-center">
                <Phone className="h-3 w-3 mr-1" />
                +91-90151 62449 | +91-95603 34337
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
        <div className="flex items-center justify-between py-4 min-h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="NIDDIKKARE LLP" 
              className="w-[150px] h-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex" onMouseLeave={handleMouseLeave}>
            <ul className="flex items-center space-x-2">
              <li onMouseEnter={handleNonDropdownHover}>
                <Link 
                  href="/" 
                  className={`px-4 py-2 font-medium transition-colors flex items-center h-10 ${
                    location === '/' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Home
                </Link>
              </li>

              <li className="relative group"
                onMouseEnter={() => handleMouseEnter('services')}
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

              <li onMouseEnter={handleNonDropdownHover}>
                <Link 
                  href="/gut-care" 
                  className={`px-4 py-2 font-medium transition-colors flex items-center h-10 ${
                    location === '/gut-care' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  GUT Care
                </Link>
              </li>

              <li onMouseEnter={handleNonDropdownHover}>
                <Link 
                  href="/about" 
                  className={`px-4 py-2 font-medium transition-colors flex items-center h-10 ${
                    location === '/about' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  About
                </Link>
              </li>

              <li onMouseEnter={handleNonDropdownHover}>
                <Link 
                  href="/news" 
                  className={`px-4 py-2 font-medium transition-colors flex items-center h-10 ${
                    location === '/news' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  News
                </Link>
              </li>

              <li onMouseEnter={handleNonDropdownHover}>
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
            <SheetContent side="right" className="w-[280px] bg-white">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <img src={logoImage} alt="NIDDIKKARE LLP" className="w-[120px] h-auto" />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Mobile Navigation Menu */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                  <nav className="space-y-1">
                    <Link 
                      href="/" 
                      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        location === '/' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Services
                      </div>
                      {servicesItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link 
                            key={item.href}
                            href={item.href} 
                            className={`flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                              location === item.href ? 'bg-primary/10 text-primary' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="h-4 w-4 mr-3" />
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Products
                      </div>
                      {productsItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link 
                            key={item.href}
                            href={item.href} 
                            className={`flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                              location === item.href ? 'bg-primary/10 text-primary' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="h-4 w-4 mr-3" />
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        IT Solutions
                      </div>
                      {itSolutionsItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link 
                            key={item.href}
                            href={item.href} 
                            className={`flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                              location === item.href ? 'bg-primary/10 text-primary' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="h-4 w-4 mr-3" />
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Healthcare
                      </div>
                      {healthcareItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.href} className="space-y-1">
                            <Link 
                              href={item.href} 
                              className={`flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                                location === item.href ? 'bg-primary/10 text-primary' : ''
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              <Icon className="h-4 w-4 mr-3" />
                              {item.label}
                            </Link>
                            {/* Mobile submenu items */}
                            {item.submenu && (
                              <div className="ml-6 space-y-1">
                                {item.submenu.map((subItem) => {
                                  const SubIcon = subItem.icon;
                                  return (
                                    <Link 
                                      key={subItem.href}
                                      href={subItem.href} 
                                      className={`flex items-center px-6 py-1.5 text-xs text-gray-500 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                                        location === subItem.href ? 'bg-primary/10 text-primary' : ''
                                      }`}
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <SubIcon className="h-3 w-3 mr-2" />
                                      {subItem.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Life Sciences
                      </div>
                      {lifeSciencesItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link 
                            key={item.href}
                            href={item.href} 
                            className={`flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                              location === item.href ? 'bg-primary/10 text-primary' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="h-4 w-4 mr-3" />
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                    
                    <Link 
                      href="/gut-care" 
                      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        location === '/gut-care' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Heart className="h-4 w-4 mr-3" />
                      GUT Care
                    </Link>
                    
                    <Link 
                      href="/about" 
                      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        location === '/about' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    
                    <Link 
                      href="/news" 
                      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        location === '/news' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      News
                    </Link>
                    
                    <Link 
                      href="/contact" 
                      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        location === '/contact' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
                
                {/* Mobile Contact Info Footer */}
                <div className="border-t border-gray-200 p-4">
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-2" />
                      <span>+91-90151 62449</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-2" />
                      <span>info@niddikkare.com</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white">
                    Request Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}