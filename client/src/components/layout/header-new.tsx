import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, Linkedin, Twitter, Menu, Baby, Bed, Dna, Microscope, Heart, Shirt, Shield, Layers, ChevronRight, Settings, FileText, ShoppingCart, Code, Users, Globe, ChevronDown, X, Instagram, Youtube, Building2, Newspaper, Wrench, TestTube, GraduationCap, Search, Database, Filter, Droplets, BarChart3, FlaskConical, Zap, HeartHandshake } from "lucide-react";
import logoImage from "@/assets/niddikkare-logo.png";

interface DropdownItem {
  href: string;
  label: string;
  description: string;
  icon: React.ElementType;
  submenu?: DropdownItem[];
  badge?: string;
}

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
  const [enterTimeout, setEnterTimeout] = useState<NodeJS.Timeout | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown menus when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setIsOpen(false);
  }, [location]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (leaveTimeout) {
        clearTimeout(leaveTimeout);
      }
      if (enterTimeout) {
        clearTimeout(enterTimeout);
      }
    };
  }, [leaveTimeout, enterTimeout]);

  const toggleSection = (sectionKey: string) => {
    const newCollapsed = new Set(collapsedSections);
    if (newCollapsed.has(sectionKey)) {
      newCollapsed.delete(sectionKey);
    } else {
      newCollapsed.add(sectionKey);
    }
    setCollapsedSections(newCollapsed);
  };

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
      icon: Baby,
      submenu: [
        {
          href: "/products/neonatal-care/baby-first-touch",
          label: "Baby First Touch",
          description: "100% cotton construction",
          icon: Baby
        }
      ]
    },
    {
      href: "/products/medical-linens",
      label: "Medical Linens",
      description: "Hospital-grade linens and textiles",
      icon: Bed,
      submenu: [
        {
          href: "/products/medical-linens/maternity-gown",
          label: "Maternity Gown",
          description: "Comfortable fit, breathable, soft fabric",
          icon: Heart
        },
        {
          href: "/products/medical-linens/mackintosh-rubber-sheet",
          label: "Mackintosh Rubber Sheet",
          description: "Waterproof, durable, easy to clean",
          icon: Shield
        },
        {
          href: "/products/medical-linens/bedsheet-pillow-covers",
          label: "Bedsheet with Pillow Covers",
          description: "Soft cotton, wrinkle resistant, easy care",
          icon: Bed
        },
        {
          href: "/products/medical-linens/surgical-drapes-towels",
          label: "Surgical Drapes/Towels",
          description: "Sterile barrier, fluid resistant, single use",
          icon: Shirt
        },
        {
          href: "/products/medical-linens/scrub-suit",
          label: "Scrub Suit",
          description: "Professional fit, breathable, comfortable",
          icon: Shirt
        },
        {
          href: "/products/medical-linens/patient-gown",
          label: "Patient Gown",
          description: "Patient comfort, easy access, tie closure",
          icon: Baby
        },
        {
          href: "/products/medical-linens/surgical-ot-gown",
          label: "Surgical/OT Gown",
          description: "Sterile protection, fluid resistant, reinforced",
          icon: Shield
        },
        {
          href: "/products/medical-linens/surgical-cut-sheets",
          label: "Surgical Cut Sheets",
          description: "Precise openings, sterile field, single use",
          icon: Layers
        }
      ]
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

  const companyItems: DropdownItem[] = [
    {
      href: "/company/about",
      label: "About",
      description: "Learn about our company and mission",
      icon: Building2
    },
    {
      href: "/company/leadership-team",
      label: "Leadership Team",
      description: "Meet our expert leadership team",
      icon: Users
    },
    {
      href: "/company/news",
      label: "News",
      description: "Latest updates and announcements",
      icon: Newspaper
    }
  ];

  const websiteItems: DropdownItem[] = [
    {
      href: "https://niddik.com",
      label: "Niddik IT",
      description: "IT services and job opportunities",
      icon: Globe,
      badge: "Explore"
    },
    {
      href: "/",
      label: "Niddikkare",
      description: "Healthcare and Life Sciences Solutions",
      icon: HeartHandshake,
      badge: "Current"
    }
  ];

  const toolsTestingItems: DropdownItem[] = [
    {
      href: "/tools-testing/tools",
      label: "Tools",
      description: "Digital solutions and advanced tools",
      icon: Wrench,
      submenu: [
        {
          href: "/tools-testing/tools/e-training",
          label: "E-Training",
          description: "Comprehensive online training programs",
          icon: GraduationCap
        },
        {
          href: "/tools-testing/tools/sample-request",
          label: "Sample Request",
          description: "Streamlined sample request and tracking",
          icon: FileText
        },
        {
          href: "/tools-testing/tools/application-database-chromatography",
          label: "Application Database Chromatography",
          description: "Comprehensive chromatography application database",
          icon: Database
        },
        {
          href: "/tools-testing/tools/filter-finder",
          label: "FilterFinder",
          description: "Advanced filtration solution finder",
          icon: Filter
        },
        {
          href: "/tools-testing/tools/strip-finder",
          label: "StripFinder",
          description: "Test strip selection and optimization tool",
          icon: Search
        },
        {
          href: "/tools-testing/tools/nanocolor-finder",
          label: "NANOCOLOR Finder",
          description: "Colorimetric analysis tools for precise testing",
          icon: Droplets
        },
        {
          href: "/tools-testing/tools/chromafil-finder",
          label: "CHROMAFIL Finder",
          description: "Chromatography filtration and sample preparation",
          icon: BarChart3
        },
        {
          href: "/tools-testing/tools/vial-finder",
          label: "VialFinder",
          description: "Laboratory vial and container selection tool",
          icon: FlaskConical
        },
        {
          href: "/tools-testing/tools/bioanalysis-kitfinder",
          label: "Bioanalysis KitFinder",
          description: "Comprehensive bioanalysis kit selection tool",
          icon: Microscope
        }
      ]
    },
    {
      href: "/tools-testing/testing",
      label: "Testing",
      description: "Advanced testing solutions and analytics",
      icon: TestTube,
      submenu: [
        {
          href: "/tools-testing/testing/filtration",
          label: "Filtration",
          description: "Advanced filtration testing solutions",
          icon: Filter
        },
        {
          href: "/tools-testing/testing/rapid-tests",
          label: "Rapid Tests",
          description: "Quick diagnostic testing solutions",
          icon: Zap
        },
        {
          href: "/tools-testing/testing/water-analysis",
          label: "Water Analysis",
          description: "Comprehensive water quality testing",
          icon: Droplets
        },
        {
          href: "/tools-testing/testing/chromatography",
          label: "Chromatography",
          description: "Advanced chromatography testing services",
          icon: BarChart3
        },
        {
          href: "/tools-testing/testing/bioanalysis",
          label: "Bioanalysis",
          description: "Comprehensive bioanalytical testing",
          icon: Microscope
        }
      ]
    }
  ];

  const handleMouseEnter = (menuKey: string) => {
    // Clear all existing timeouts
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    if (enterTimeout) {
      clearTimeout(enterTimeout);
      setEnterTimeout(null);
    }
    
    // Debug log
    console.log('Hovering over:', menuKey, 'Current activeDropdown:', activeDropdown, 'Current activeSubmenu:', activeSubmenu);
    
    // Always immediately switch to the new dropdown and clear submenu
    setActiveDropdown(menuKey);
    setActiveSubmenu(null);
  };

  const handleMouseLeave = () => {
    // Always clear existing timeout and set a new one
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    if (enterTimeout) {
      clearTimeout(enterTimeout);
      setEnterTimeout(null);
    }
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 150);
    setLeaveTimeout(timeout);
  };

  const handleNonDropdownHover = () => {
    // Clear all existing timeouts
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    if (enterTimeout) {
      clearTimeout(enterTimeout);
      setEnterTimeout(null);
    }
    // Immediately close any open dropdown
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };
  
  const DropdownMenu = ({ items, isOpen, menuKey }: { items: DropdownItem[], isOpen: boolean, menuKey: string }) => {
    // Calculate dynamic positioning and width
    const getDropdownClasses = () => {
      const baseClasses = `absolute top-full border border-gray-200 rounded-md shadow-lg transition-all duration-75 z-[9999] ${
        isOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
      }`;
      
      // Special styling for websites dropdown
      if (menuKey === 'websites') {
        return `${baseClasses} right-0 w-[320px] max-w-[90vw] bg-gradient-to-br from-white via-primary/5 to-blue-50 border-2 border-primary/30 shadow-2xl`;
      }
      
      // For rightmost items (Company, Contact, Tools & Testing), position from right
      // Adjust width based on submenu state for Tools & Testing
      if (menuKey === 'company' || menuKey === 'life-sciences') {
        return `${baseClasses} bg-white right-0 w-[350px] max-w-[90vw]`;
      }
      
      if (menuKey === 'tools-testing' || menuKey === 'healthcare') {
        return `${baseClasses} bg-white right-0 max-w-[90vw]`;
      }
      
      // For other items, position from left with responsive width
      return `${baseClasses} bg-white left-0 w-[400px] max-w-[85vw]`;
    };

    // Special handling for websites dropdown
    if (menuKey === 'websites') {
      return (
        <div 
          className={getDropdownClasses()}
          style={{ marginTop: '8px' }}
          onMouseEnter={() => handleMouseEnter(menuKey)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4 space-y-2">
            <div className="text-sm font-semibold text-primary mb-3 flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Choose Website
            </div>
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.href} className="group">
                  {item.href.startsWith('http') ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary/10 hover:shadow-md border border-transparent hover:border-primary/20"
                      onClick={() => {
                        setActiveDropdown(null);
                        setActiveSubmenu(null);
                      }}
                    >
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-gray-900 group-hover:text-primary">{item.label}</div>
                          {item.badge && (
                            <Badge 
                              variant={item.badge === "Current" ? "default" : "secondary"} 
                              className={`text-xs px-2 py-0.5 ${
                                item.badge === "Current" 
                                  ? "bg-primary text-white" 
                                  : "bg-blue-100 text-blue-700 border-blue-200"
                              }`}
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary/10 hover:shadow-md border border-transparent hover:border-primary/20 ${
                        location === item.href ? 'bg-primary/15 border-primary/30' : ''
                      }`}
                      onClick={() => {
                        setActiveDropdown(null);
                        setActiveSubmenu(null);
                      }}
                    >
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-gray-900 group-hover:text-primary">{item.label}</div>
                          {item.badge && (
                            <Badge 
                              variant={item.badge === "Current" ? "default" : "secondary"} 
                              className={`text-xs px-2 py-0.5 ${
                                item.badge === "Current" 
                                  ? "bg-primary text-white" 
                                  : "bg-blue-100 text-blue-700 border-blue-200"
                              }`}
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Special handling for Tools & Testing and Healthcare menus with third-level submenu
    if (menuKey === 'tools-testing' || menuKey === 'healthcare') {
      return (
        <div 
          className={getDropdownClasses()}
          style={{ 
            marginTop: '8px',
            width: '350px',
            minWidth: '350px'
          }}
          onMouseEnter={() => handleMouseEnter(menuKey)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid gap-2 p-4">
            {items.map((item) => {
              const Icon = item.icon;
              const isSubmenuActive = activeSubmenu === item.label.toLowerCase();
              const shouldShowCompact = false; // Keep all items full size in Healthcare dropdown
              
              return (
                <div key={item.href} className="relative group">
                  {item.submenu ? (
                    // Parent item with submenu - clickable but also shows submenu on hover
                    <div
                      className={`flex items-center rounded-lg transition-all duration-200 ${
                        location.startsWith(item.href) || isSubmenuActive
                          ? 'bg-primary/10 text-primary border-l-4 border-primary'
                          : 'hover:bg-gray-50'
                      } ${
                        shouldShowCompact ? 'p-2 space-x-2' : 'p-3 space-x-2'
                      }`}
                      onMouseEnter={() => setActiveSubmenu(item.label.toLowerCase())}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 flex-1 cursor-pointer"
                        onClick={() => {
                          setActiveDropdown(null);
                          setActiveSubmenu(null);
                        }}
                      >
                        <Icon className={`text-primary transition-all duration-200 ${
                          shouldShowCompact ? 'h-4 w-4' : 'h-5 w-5'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <div className={`font-medium transition-all duration-200 flex items-center gap-2 ${
                            shouldShowCompact ? 'text-sm' : 'text-base'
                          }`}>
                            {item.label}
                            {item.submenu && (
                              <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-primary/10 text-primary border-primary/20">
                                {item.submenu.length} {item.submenu.length === 1 ? 'item' : 'items'}
                              </Badge>
                            )}
                          </div>
                          {!shouldShowCompact && (
                            <div className="text-sm text-gray-600">
                              {item.description}
                              {item.submenu && <span className="text-primary/70 ml-1">• Hover to explore</span>}
                            </div>
                          )}
                        </div>
                      </Link>
                      <ChevronRight className={`text-gray-400 transition-all duration-200 ${
                        shouldShowCompact ? 'h-3 w-3' : 'h-4 w-4'
                      }`} />
                    </div>
                  ) : (
                    // Regular item without submenu - simple clickable link
                    <Link
                      href={item.href}
                      className={`flex items-center rounded-lg transition-all duration-200 cursor-pointer ${
                        location.startsWith(item.href)
                          ? 'bg-primary/10 text-primary border-l-4 border-primary'
                          : 'hover:bg-gray-50'
                      } ${
                        shouldShowCompact ? 'p-2 space-x-2' : 'p-3 space-x-2'
                      }`}
                      onMouseEnter={() => setActiveSubmenu(null)}
                      onClick={() => {
                        setActiveDropdown(null);
                        setActiveSubmenu(null);
                      }}
                    >
                      <Icon className={`text-primary transition-all duration-200 ${
                        shouldShowCompact ? 'h-4 w-4' : 'h-5 w-5'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium transition-all duration-200 ${
                          shouldShowCompact ? 'text-sm' : 'text-base'
                        }`}>
                          {item.label}
                        </div>
                        {!shouldShowCompact && (
                          <div className="text-sm text-gray-600">{item.description}</div>
                        )}
                      </div>
                    </Link>
                  )}
                  
                  {/* Third-level submenu */}
                  {item.submenu && activeSubmenu === item.label.toLowerCase() && (
                    <div 
                      ref={submenuRef}
                      className="absolute top-0 bg-white border border-gray-200 rounded-md shadow-lg z-[10000]"
                      style={{
                        // Position submenu to the right of the parent item (matching arrow direction)
                        left: '100%',
                        marginLeft: '8px',
                        // Responsive width that prevents overflow
                        width: 'min(280px, 25vw)',
                        maxWidth: '280px',
                        minWidth: '220px',
                        // Enable horizontal scrolling when content overflows
                        maxHeight: '400px'
                      }}
                      onMouseEnter={() => setActiveSubmenu(item.label.toLowerCase())}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <div className="p-3 space-y-1 overflow-x-auto overflow-y-auto max-h-96 submenu-scroll">
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
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
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
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Regular dropdown for other menus - now with submenu support
    return (
      <div 
        className={getDropdownClasses()}
        style={{ marginTop: '8px' }}
        onMouseEnter={() => handleMouseEnter(menuKey)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid gap-3 p-4">
          {items.map((item) => {
            const Icon = item.icon;
            const isSubmenuActive = activeSubmenu === item.label.toLowerCase();
            
            return (
              <div key={item.href} className="relative group">
                {item.submenu ? (
                  // Parent item with submenu - clickable but also shows submenu on hover
                  <div
                    className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                      location.startsWith(item.href) || isSubmenuActive
                        ? 'bg-primary/10 text-primary border-l-4 border-primary'
                        : 'hover:bg-gray-50'
                    }`}
                    onMouseEnter={() => setActiveSubmenu(item.label.toLowerCase())}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 flex-1 cursor-pointer"
                      onClick={() => {
                        setActiveDropdown(null);
                        setActiveSubmenu(null);
                      }}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="font-medium flex items-center gap-2">
                          {item.label}
                          {item.submenu && (
                            <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-primary/10 text-primary border-primary/20">
                              {item.submenu.length} {item.submenu.length === 1 ? 'item' : 'items'}
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.description}
                          {item.submenu && <span className="text-primary/70 ml-1">• Hover to explore</span>}
                        </div>
                      </div>
                    </Link>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                ) : (
                  // Regular item without submenu
                  item.href.startsWith('http') ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-3 rounded-lg transition-colors hover:bg-gray-50"
                      onMouseEnter={() => setActiveSubmenu(null)}
                      onClick={() => {
                        setActiveDropdown(null);
                        setActiveSubmenu(null);
                      }}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                        location === item.href
                          ? 'bg-primary/10 text-primary border-l-4 border-primary'
                          : 'hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setActiveSubmenu(null)}
                      onClick={() => {
                        setActiveDropdown(null);
                        setActiveSubmenu(null);
                      }}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </Link>
                  )
                )}
                
                {/* Submenu for any dropdown */}
                {item.submenu && activeSubmenu === item.label.toLowerCase() && activeDropdown === menuKey && (
                  <div 
                    className="absolute top-0 bg-white border border-gray-200 rounded-md shadow-lg z-[10000]"
                    style={{
                      left: '100%',
                      marginLeft: '8px',
                      width: 'min(280px, 25vw)',
                      maxWidth: '280px',
                      minWidth: '220px',
                      maxHeight: '400px'
                    }}
                    onMouseEnter={() => setActiveSubmenu(item.label.toLowerCase())}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <div className="p-3 space-y-1 overflow-y-auto max-h-96">
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
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveSubmenu(null);
                            }}
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
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Backdrop blur overlay - shown when dropdown is active */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          style={{ 
            top: '0',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
          onClick={() => {
            setActiveDropdown(null);
            setActiveSubmenu(null);
          }}
        />
      )}
      
      <header className="bg-white shadow-lg sticky top-0 z-50 w-full">
        <div className="container mx-auto px-4 max-w-full">
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
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href="/contact">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4 min-h-[70px] w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="NIDDIKKARE LLP" 
              className="w-[150px] h-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav 
            className="hidden xl:flex flex-shrink-0" 
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              // Clear all existing timeouts when entering the navigation area
              if (leaveTimeout) {
                clearTimeout(leaveTimeout);
                setLeaveTimeout(null);
              }
              if (enterTimeout) {
                clearTimeout(enterTimeout);
                setEnterTimeout(null);
              }
            }}
          >
            <ul className="flex items-center space-x-1">
              <li onMouseEnter={handleNonDropdownHover}>
                <Link 
                  href="/" 
                  className={`px-2 py-2 font-medium transition-colors flex items-center h-10 whitespace-nowrap text-sm ${
                    location === '/' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Home
                </Link>
              </li>

              <li className="relative group"
                onMouseEnter={() => handleMouseEnter('services')}
              >
                <Link href="/services">
                  <button 
                    className={`flex items-center px-2 py-2 font-medium transition-colors h-10 whitespace-nowrap text-sm ${
                      location.startsWith('/services') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    Services
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </button>
                </Link>
                <DropdownMenu items={servicesItems} isOpen={activeDropdown === 'services'} menuKey="services" />
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('products')}
              >
                <Link href="/products">
                  <button 
                    className={`flex items-center px-2 py-2 font-medium transition-colors h-10 whitespace-nowrap text-sm ${
                      location.startsWith('/products') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    Products
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </button>
                </Link>
                <DropdownMenu items={productsItems} isOpen={activeDropdown === 'products'} menuKey="products" />
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('it-solutions')}
              >
                <Link
                  href="/it-solutions"
                  className={`flex items-center px-2 py-2 font-medium transition-colors h-10 whitespace-nowrap text-sm ${
                    location.startsWith('/it-solutions') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  IT Solutions
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Link>
                <DropdownMenu items={itSolutionsItems} isOpen={activeDropdown === 'it-solutions'} menuKey="it-solutions" />
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('healthcare')}
              >
                <Link 
                  href="/healthcare"
                  className={`flex items-center px-2 py-2 font-medium transition-colors h-10 whitespace-nowrap text-sm ${
                    location.startsWith('/healthcare') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Healthcare
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Link>
                <DropdownMenu items={healthcareItems} isOpen={activeDropdown === 'healthcare'} menuKey="healthcare" />
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('life-sciences')}
              >
                <Link 
                  href="/life-sciences"
                  className={`flex items-center px-2 py-2 font-medium transition-colors h-10 whitespace-nowrap text-sm ${
                    location.startsWith('/life-sciences') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Life Sciences
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Link>
                <DropdownMenu items={lifeSciencesItems} isOpen={activeDropdown === 'life-sciences'} menuKey="life-sciences" />
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('tools-testing')}
              >
                <Link
                  href="/tools-testing"
                  className={`flex items-center px-2 py-2 font-medium transition-colors h-10 whitespace-nowrap text-sm ${
                    location.startsWith('/tools-testing') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Tools & Testing
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Link>
                <DropdownMenu items={toolsTestingItems} isOpen={activeDropdown === 'tools-testing'} menuKey="tools-testing" />
              </li>

              <li onMouseEnter={handleNonDropdownHover}>
                <Link 
                  href="/gut-care" 
                  className={`px-2 py-2 font-medium transition-colors flex items-center h-10 whitespace-nowrap text-sm ${
                    location === '/gut-care' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  GUT Care
                </Link>
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('company')}
              >
                <Link 
                  href="/company"
                  className={`flex items-center px-2 py-2 font-medium transition-colors h-10 whitespace-nowrap text-sm ${
                    location.startsWith('/company') || location.startsWith('/about') || location.startsWith('/news') ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Company
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Link>
                <DropdownMenu items={companyItems} isOpen={activeDropdown === 'company'} menuKey="company" />
              </li>

              <li onMouseEnter={handleNonDropdownHover}>
                <Link 
                  href="/contact" 
                  className={`px-2 py-2 font-medium transition-colors flex items-center h-10 whitespace-nowrap text-sm ${
                    location === '/contact' ? 'text-primary bg-primary/20 rounded-md border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Contact
                </Link>
              </li>

              <li className="relative"
                onMouseEnter={() => handleMouseEnter('websites')}
              >
                <button 
                  className="flex items-center px-2 py-2 font-medium transition-colors h-10 whitespace-nowrap text-sm bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/30 rounded-md hover:from-primary/30 hover:to-blue-500/30"
                >
                  Other website
                  <ChevronDown className="h-3 w-3 ml-1" />
                </button>
                <DropdownMenu items={websiteItems} isOpen={activeDropdown === 'websites'} menuKey="websites" />
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="xl:hidden flex flex-col items-center gap-1 px-2 py-2 text-primary hover:text-primary hover:bg-primary/10">
                <Menu className="h-8 w-8" />
                <span className="text-xs">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white [&>button]:text-primary [&>button]:hover:text-primary [&>button]:hover:bg-primary/10">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-center p-4 border-b border-gray-200">
                  <img src={logoImage} alt="NIDDIKKARE LLP" className="w-[120px] h-auto" />
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
                      <button
                        onClick={() => toggleSection('services')}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span>Services</span>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform ${
                            collapsedSections.has('services') ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {collapsedSections.has('services') && (
                        <div className="ml-3 space-y-1">
                          {servicesItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link 
                                key={item.href}
                                href={item.href} 
                                className={`flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                                  location === item.href ? 'bg-primary/10 text-primary' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                <Icon className="h-4 w-4 mr-3 text-gray-400" />
                                <span className="text-xs">{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleSection('products')}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span>Products</span>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform ${
                            collapsedSections.has('products') ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {collapsedSections.has('products') && (
                        <div className="ml-3 space-y-1">
                          {productsItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link 
                                key={item.href}
                                href={item.href} 
                                className={`flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                                  location === item.href ? 'bg-primary/10 text-primary' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                <Icon className="h-4 w-4 mr-3 text-gray-400" />
                                <span className="text-xs">{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      {/* Parent IT Solutions link */}
                      <Link
                        href="/it-solutions"
                        className={`flex items-center px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded-md transition-colors ${
                          location === '/it-solutions' ? 'bg-primary/10 text-primary' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>IT Solutions Overview</span>
                      </Link>
                      
                      <button
                        onClick={() => toggleSection('it-solutions')}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span>Services</span>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform ${
                            collapsedSections.has('it-solutions') ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {collapsedSections.has('it-solutions') && (
                        <div className="ml-3 space-y-1">
                          {itSolutionsItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link 
                                key={item.href}
                                href={item.href} 
                                className={`flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                                  location === item.href ? 'bg-primary/10 text-primary' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                <Icon className="h-4 w-4 mr-3 text-gray-400" />
                                <span className="text-xs">{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleSection('healthcare')}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span>Healthcare</span>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform ${
                            collapsedSections.has('healthcare') ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {collapsedSections.has('healthcare') && (
                        <div className="ml-3 space-y-1">
                          {healthcareItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <div key={item.href} className="space-y-1">
                                <div className="flex items-center">
                                  <Link 
                                    href={item.href} 
                                    className={`flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors flex-1 ${
                                      location === item.href ? 'bg-primary/10 text-primary' : ''
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <Icon className="h-4 w-4 mr-3 text-gray-400" />
                                    <span className="text-xs">{item.label}</span>
                                  </Link>
                                  {item.submenu && (
                                    <button
                                      onClick={() => toggleSection(`healthcare-${item.href}`)}
                                      className="p-1 hover:bg-gray-100 rounded"
                                    >
                                      <ChevronRight 
                                        className={`h-3 w-3 transition-transform text-gray-400 ${
                                          collapsedSections.has(`healthcare-${item.href}`) ? 'rotate-90' : ''
                                        }`}
                                      />
                                    </button>
                                  )}
                                </div>
                                {item.submenu && collapsedSections.has(`healthcare-${item.href}`) && (
                                  <div className="ml-8 space-y-1">
                                    {item.submenu.map((subItem) => {
                                      const SubIcon = subItem.icon;
                                      return (
                                        <Link 
                                          key={subItem.href}
                                          href={subItem.href} 
                                          className={`flex items-center px-4 py-1.5 text-xs text-gray-500 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                                            location === subItem.href ? 'bg-primary/10 text-primary' : ''
                                          }`}
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <SubIcon className="h-3 w-3 mr-2 text-gray-400" />
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
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleSection('life-sciences')}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span>Life Sciences</span>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform ${
                            collapsedSections.has('life-sciences') ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {collapsedSections.has('life-sciences') && (
                        <div className="ml-3 space-y-1">
                          {lifeSciencesItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link 
                                key={item.href}
                                href={item.href} 
                                className={`flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                                  location === item.href ? 'bg-primary/10 text-primary' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                <Icon className="h-4 w-4 mr-3 text-gray-400" />
                                <span className="text-xs">{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleSection('tools-testing')}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span>Tools & Testing</span>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform ${
                            collapsedSections.has('tools-testing') ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {collapsedSections.has('tools-testing') && (
                        <div className="ml-3 space-y-1">
                          {toolsTestingItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <div key={item.href} className="space-y-1">
                                <div className="flex items-center">
                                  <Link 
                                    href={item.href} 
                                    className={`flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors flex-1 ${
                                      location === item.href ? 'bg-primary/10 text-primary' : ''
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <Icon className="h-4 w-4 mr-3 text-gray-400" />
                                    <span className="text-xs">{item.label}</span>
                                  </Link>
                                  {item.submenu && (
                                    <button
                                      onClick={() => toggleSection(`tools-testing-${item.href}`)}
                                      className="p-1 hover:bg-gray-100 rounded"
                                    >
                                      <ChevronRight 
                                        className={`h-3 w-3 transition-transform text-gray-400 ${
                                          collapsedSections.has(`tools-testing-${item.href}`) ? 'rotate-90' : ''
                                        }`}
                                      />
                                    </button>
                                  )}
                                </div>
                                {item.submenu && collapsedSections.has(`tools-testing-${item.href}`) && (
                                  <div className="ml-8 space-y-1">
                                    {item.submenu.map((subItem) => {
                                      const SubIcon = subItem.icon;
                                      return (
                                        <Link 
                                          key={subItem.href}
                                          href={subItem.href} 
                                          className={`flex items-center px-4 py-1.5 text-xs text-gray-500 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                                            location === subItem.href ? 'bg-primary/10 text-primary' : ''
                                          }`}
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <SubIcon className="h-3 w-3 mr-2 text-gray-400" />
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
                      )}
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
                    
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleSection('company')}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span>Company</span>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform ${
                            collapsedSections.has('company') ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {collapsedSections.has('company') && (
                        <div className="ml-3 space-y-1">
                          <Link 
                            href="/company" 
                            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                              location === '/company' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Building2 className="h-4 w-4 mr-3 text-gray-400" />
                            <span className="text-xs">Company Overview</span>
                          </Link>
                          
                          <Link 
                            href="/company/about" 
                            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                              location === '/company/about' || location === '/about' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Building2 className="h-4 w-4 mr-3 text-gray-400" />
                            <span className="text-xs">About</span>
                          </Link>
                          
                          <Link 
                            href="/company/leadership-team" 
                            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                              location === '/company/leadership-team' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Users className="h-4 w-4 mr-3 text-gray-400" />
                            <span className="text-xs">Leadership Team</span>
                          </Link>
                          
                          <Link 
                            href="/company/news" 
                            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                              location === '/company/news' || location === '/news' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Newspaper className="h-4 w-4 mr-3 text-gray-400" />
                            <span className="text-xs">News</span>
                          </Link>
                        </div>
                      )}
                    </div>
                    
                    <Link 
                      href="/contact" 
                      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        location === '/contact' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                    
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleSection('websites')}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-primary uppercase tracking-wider bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 rounded-md transition-colors"
                      >
                        <span>Other website</span>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform ${
                            collapsedSections.has('websites') ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {collapsedSections.has('websites') && (
                        <div className="ml-3 space-y-1">
                          <a 
                            href="https://niddik.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Globe className="h-4 w-4 mr-3 text-gray-400" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <div className="text-xs font-medium">Niddik IT</div>
                                <Badge className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 border-blue-200">
                                  Explore
                                </Badge>
                              </div>
                              <div className="text-xs text-gray-500">IT services and job opportunities</div>
                            </div>
                          </a>
                          <Link 
                            href="/" 
                            className={`flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-md transition-colors ${
                              location === '/' ? 'bg-primary/10 text-primary' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <HeartHandshake className="h-4 w-4 mr-3 text-gray-400" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <div className="text-xs font-medium">Niddikkare</div>
                                <Badge className="text-xs px-1.5 py-0.5 bg-primary text-white">
                                  Current
                                </Badge>
                              </div>
                              <div className="text-xs text-gray-500">Healthcare and Life Sciences Solutions</div>
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  </nav>
                </div>
                
                {/* Mobile Contact Info Footer */}
                <div className="border-t border-gray-200 p-4">
                  <div className="space-y-3">
                    {/* Mobile Social Media Icons */}
                    <div className="flex items-center justify-center space-x-4 py-2">
                      <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                        <Instagram className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                        <Youtube className="h-5 w-5" />
                      </Link>
                    </div>
                    
                    {/* Mobile Request Quote Button */}
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Request Quote
                    </Button>
                    
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
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  );
}