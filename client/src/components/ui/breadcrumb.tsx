import React from "react"
import { ChevronRight, Home } from "lucide-react"
import { Link, useLocation } from "wouter"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className={cn("flex", className)}
    {...props}
  />
))
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
    >
      <path
        d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

// Smart Breadcrumb Component that generates breadcrumbs based on current path
interface SmartBreadcrumbProps {
  className?: string;
}

export function SmartBreadcrumb({ className }: SmartBreadcrumbProps) {
  const [location] = useLocation();
  
  // Don't render breadcrumbs on home page
  if (location === "/") {
    return null;
  }
  
  const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ];
    
    const segments = pathname.split("/").filter(Boolean);
    let currentPath = "";
    
    // Map of path segments to human-readable labels
    const pathLabels: Record<string, string> = {
      // Main categories
      "products": "Products",
      "services": "Services",
      "healthcare": "Healthcare",
      "life-sciences": "Life Sciences", 
      "it-solutions": "IT Solutions",
      "tools": "Tools",
      "testing": "Testing",
      "tools-testing": "Tools & Testing",
      
      // Products
      "neonatal-care": "Neonatal Care",
      "medical-linens": "Medical Linens",
      "dna-rna-extraction": "DNA/RNA Extraction",
      "molecular-diagnostics": "Molecular Diagnostics",
      
      // Medical Linens Products
      "baby-first-touch": "Baby's First Touch",
      "maternity-gown": "Maternity Gown", 
      "mackintosh-rubber-sheet": "Mackintosh Rubber Sheet",
      "bedsheet-pillow-covers": "Bedsheet & Pillow Covers",
      "surgical-drapes-towels": "Surgical Drapes & Towels",
      "scrub-suit": "Scrub Suit",
      "patient-gown": "Patient Gown",
      "surgical-ot-gown": "Surgical/OT Gown",
      "surgical-cut-sheets": "Surgical Cut Sheets",
      
      // Medical Linens Types
      "woven": "Woven Medical Linens",
      "non-woven": "Non-Woven Medical Linens", 
      "blended": "Blended Medical Linens",
      
      // Services
      "consultancy-ivd": "Consultancy for IVD-Medical Device",
      "contract-research": "Contract Research",
      "oem-products": "OEM Products",
      
      // IT Solutions
      "rpo": "Recruitment Process Outsourcing (RPO)",
      "contingent": "Contingent Workforce Management",
      "web-app-solutions": "Web & App Solutions",
      
      // Tools & Testing
      "e-training": "E-Learning Resources",
      "sample-request": "Sample Request System",
      "application-database-chromatography": "Application Database - Chromatography", 
      "filter-finder": "FilterFinder",
      "strip-finder": "StripFinder",
      "nanocolor-finder": "NANOCOLOR Finder",
      "chromafil-finder": "ChromafilFinder",
      "vial-finder": "VialFinder",
      "bioanalysis-kitfinder": "Bioanalysis Kit Finder",
      
      // Testing Solutions
      "filtration": "Filtration Solutions",
      "rapid-tests": "Rapid Test Solutions",
      "water-analysis": "Water Analysis",
      "chromatography": "Chromatography Solutions",
      "bioanalysis": "Bioanalysis Solutions",
      
      // Other pages
      "gut-care": "Gut Care Products",
      "company": "Company",
      "about": "About Us", 
      "news": "News & Updates",
      "contact": "Contact Us"
    };
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      const isLast = index === segments.length - 1;
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath,
        isCurrentPage: isLast
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs(location);
  
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => [
          <BreadcrumbItem key={`item-${index}`}>
            {item.isCurrentPage ? (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : item.href ? (
              <BreadcrumbLink asChild>
                <Link href={item.href} className="flex items-center gap-1">
                  {index === 0 && <Home className="h-4 w-4" />}
                  {item.label}
                </Link>
              </BreadcrumbLink>
            ) : (
              <span>{item.label}</span>
            )}
          </BreadcrumbItem>,
          index < breadcrumbs.length - 1 && (
            <BreadcrumbSeparator key={`sep-${index}`} />
          ),
        ]).flat().filter(Boolean)}
      </BreadcrumbList>
    </Breadcrumb>
  );
}