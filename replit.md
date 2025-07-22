# replit.md

## Overview

This is a full-stack web application built with a React frontend and Express backend, focused on a healthcare and life sciences company called NIDDIKKARE LLP. The application serves as a corporate website showcasing products and services in neonatal care, medical linens, DNA/RNA extraction, and molecular diagnostics.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**January 22, 2025:**
- Updated Tools section branding: Changed "Tools & Testing" to just "Tools" in both breadcrumb navigation and main page heading for cleaner, more focused presentation
- Successfully migrated from Replit Agent to Replit environment with enhanced security and proper client/server separation
- Fixed breadcrumb display on home page: Modified SmartBreadcrumb component to not render breadcrumbs on the home page (/) to maintain clean home page design
- Created comprehensive IT Solutions overview page: Designed /it-solutions page with enhanced UI/UX featuring service comparison tables, interactive cards, company statistics, and direct links to all three IT solution services (RPO, Contingent Workforce, Web App Solutions)
- Updated IT Solutions page color scheme: Replaced blue color scheme with primary green colors throughout the page for brand consistency
- Enhanced header navigation with IT Solutions parent page link: Made IT Solutions menu item clickable while maintaining dropdown functionality, following the same pattern as Healthcare and Life Sciences menus
- Removed ISO 13485 and certification trademarks from neonatal care page: Replaced with generic healthcare quality terms (Hospital Grade Quality, Safety Verified, Healthcare Standard, Medical Device Safety, Energy Efficient)
- Added CTA button to neonatal care page: "View Baby First Touch Product" button now links to /products/neonatal-care/baby-first-touch
- Fixed navigation URL structure: Updated header-new.tsx to use proper parent slug /products/neonatal-care/baby-first-touch instead of /products/medical-linens/baby-first-touch
- Created new routing structure: Added baby-first-touch page under neonatal-care parent route and updated App.tsx with new route path
- Completed migration checklist: All items marked as done in progress tracker
- Implemented comprehensive breadcrumb navigation system similar to Amazon and Apple websites
- Added SmartBreadcrumb component with intelligent path-based breadcrumb generation for all pages
- Integrated breadcrumbs into main layout with responsive design and accessibility features
- Created hierarchical navigation showing Home > Category > Subcategory > Current Page structure
- Added ScrollToTop component to fix scroll position issue when navigating between pages
- Created main Healthcare parent page (/healthcare) to fix 404 navigation issues
- Designed comprehensive healthcare overview page linking to all subpages (neonatal care, medical linens categories)
- Enhanced healthcare page structure with visual cards, statistics, and call-to-action sections
- Fixed healthcare navigation by adding parent route to App.tsx routing system
- Implemented comprehensive breadcrumb navigation system similar to Amazon and Apple websites
- Added SmartBreadcrumb component with intelligent path-based breadcrumb generation for all pages
- Integrated breadcrumbs into main layout with responsive design and accessibility features
- Created hierarchical navigation showing Home > Category > Subcategory > Current Page structure
- Added ScrollToTop component to fix scroll position issue when navigating between pages
- Updated header with social media icons (Instagram, Twitter, LinkedIn, YouTube)
- Changed Request Quote button from orange to brand primary green color
- Reorganized navigation: moved About and News under "Company" dropdown
- Fixed header overflow issues and implemented dynamic dropdown positioning
- Added "Tools & Testing" menu with comprehensive submenus for digital solutions
- Completed migration from Replit Agent to Replit environment
- Fixed header navigation: Made parent menu items with submenus clickable (e.g., Medical Linens with href + submenu)
- Fixed favicon loading issue: Updated HTML to reference correct path `/assets/images/favicon/favicon.png`
- Removed certification trademarks from Consultancy IVD page: Eliminated ISO 13485, FDA Approved, CE Marking references
- Removed certification trademarks from Contract Research page: Eliminated GCP, FDA, ISO 14155, CFR Part 11 references
- Updated OEM Products page statistics: Changed to 4+ Years of Excellence, 10+ Healthcare Partners, 5+ Countries Served, kept 99.8% Quality Rate
- Added CTA button to RPO page: "Get Started" button now links to https://niddik.com in new tab
- Added enhanced CTA buttons to Contingent page: Multiple "Get Started with Our Contingent Services" buttons with gradient effects added to all major sections, linking to https://niddik.com
- Fixed dropdown menu clickability issue: parent items with submenus (e.g., Medical Linens) are now clickable while still showing submenus on hover
- Fixed duplicate close icons in mobile menu: Removed manual close button as SheetContent already provides built-in close functionality
- Fixed mobile menu button and close button styling: Updated hamburger menu icon and close button to use primary brand color with proper hover states
- Improved dropdown hover responsiveness: Fixed timing issues when rapidly switching between menu items, enhanced timeout handling and immediate dropdown switching for better user experience
- Added nucleic acid extraction kit image to About page: Professional product showcase image placed above Key Features section with responsive styling
- Updated About page statistics: Changed Our Global Impact numbers to 4+ Years of Excellence, 10+ Healthcare Partners, 5+ Countries Served, 100+ Products & Solutions
- Enhanced About page layout and user experience: Redesigned About Us section with visual hierarchy, color-coded cards for Mission and Technology, improved product showcase section with gradient backgrounds and interactive elements
- Expanded About page content: Added complete company description and detailed technology explanation, included niddik.com link for IT solutions with target="_blank"
- Updated About page card designs: Replaced geometric shapes with organic, laboratory-inspired fluid forms using complex border-radius values for natural, scientific aesthetic
- Integrated Google Maps in Contact page: Replaced placeholder map with live Google Maps iframe showing Field Grow Organic India Limited location
- Added nucleic acid extraction kit banner to Contact page: Included professional equipment showcase section matching About page design for visual consistency
- Created Baby's First Touch product page: New detailed product page at /products/medical-linens/baby-first-touch featuring organic laboratory-inspired design with Kouver logo symbol, comprehensive product benefits, and interactive elements matching reference design
- Completed comprehensive medical linen product portfolio: Created 8 individual product pages with detailed content, specifications, features, and applications for Baby First Touch, Maternity Gown, Mackintosh Rubber Sheet, Bedsheet with Pillow Covers, Surgical Drapes/Towels, Scrub Suit, Patient Gown, Surgical/OT Gown, and Surgical Cut Sheets
- Enhanced header navigation with complete medical linen submenu: Updated dropdown to include all 8 products with descriptive labels and appropriate icons
- Implemented e-commerce style product pages: Each page features tabbed content (overview, features, specifications, applications), product recommendations, quality assurance badges, and contact forms for quote requests
- Added comprehensive routing system: Updated App.tsx with all product page routes to enable proper navigation throughout the medical linen product catalog
- Completed comprehensive redesign of all 9 medical linen product pages: Each page now features completely unique creative layouts (no tabs), real product images from assets folder, distinct color themes (pink/rose, purple/pink, blue/cyan, green/teal, red/orange, indigo/purple, amber/orange, teal/emerald, slate/gray), and specialized design patterns (organic curves, floating cards, zigzag layouts, mosaic designs, split screens, card stacks, stepped layouts, hexagonal patterns, layered designs)
- Implemented unique visual identities: Baby First Touch (pink organic curves), Maternity Gown (purple floating cards), Mackintosh Sheet (blue zigzag), Bedsheet Covers (green mosaic), Surgical Drapes (red split screen), Scrub Suit (indigo card stack), Patient Gown (amber stepped layout), Surgical OT Gown (teal hexagonal), Surgical Cut Sheets (slate layered design)
- Enhanced user experience with real product imagery: All medical linen pages now display actual product images from /assets/images/medical-linens/ folder instead of placeholder icons, creating professional product showcases with proper image integration
- Fixed navigation UI inconsistencies: Applied consistent left border styling across all dropdown menus (Products, Healthcare, Tools & Testing) to maintain visual consistency
- Improved badge descriptions: Changed count badges from numeric values (e.g., "9") to descriptive text (e.g., "9 items") for better user understanding across all menu types (services, products, tools, info pages)
- Added decorative background elements: Applied organic curved shapes and gradient backgrounds to all healthcare medical linen pages (woven, non-woven, blended) for visual consistency
- Implemented related product lines sections: Added comprehensive product showcase sections to woven and non-woven medical linen pages, linking to relevant product detail pages based on material characteristics and use cases
- Enhanced product categorization: Woven page features 4 cotton-based products (Baby's First Touch, Bedsheet & Pillow Covers, Maternity Gown, Patient Gown), non-woven page showcases 3 SMS non-woven products (Surgical Drapes/Towels, Surgical/OT Gown, Surgical Cut Sheets) with appropriate barrier protection levels, and blended page displays 2 cotton-poly blend products (Maternity Gown, Patient Gown) combining material properties
- Completed comprehensive product cross-linking: All three medical linen category pages (woven, non-woven, blended) now feature Related Product Lines sections with appropriate product analysis, categorization, and navigation to detailed product pages
- Removed trademark certifications from Quality Standards sections: Eliminated ISO 13485, FDA Approved, CE Marking, EN 14126, and ASTM F1671 references across all medical linen pages, replacing with generic healthcare quality terms
- Repositioned Related Product Lines sections: Moved product showcase sections from bottom to top of all three medical linen category pages (woven, non-woven, blended) for improved visibility and user engagement
- Implemented comprehensive breadcrumb navigation system similar to Amazon and Apple websites
- Added SmartBreadcrumb component with intelligent path-based breadcrumb generation for all pages
- Integrated breadcrumbs into main layout with responsive design and accessibility features
- Created hierarchical navigation showing Home > Category > Subcategory > Current Page structure
- Created main Healthcare parent page (/healthcare) to fix 404 navigation issues
- Designed comprehensive healthcare overview page linking to all subpages (neonatal care, medical linens categories)
- Enhanced healthcare page structure with visual cards, statistics, and call-to-action sections
- Fixed healthcare navigation by adding parent route to App.tsx routing system
- Created main Life Sciences parent page (/life-sciences) following healthcare page design pattern
- Designed comprehensive life sciences overview page covering DNA/RNA extraction and molecular diagnostics
- Enhanced life sciences page structure with technical capabilities, statistics, and application areas
- Fixed life sciences navigation by adding parent route to App.tsx routing system
- Renamed index.tsx files to proper page names: healthcare.tsx and life-sciences.tsx for better file organization
- Updated App.tsx imports to reference renamed files with proper paths
- Added Healthcare Overview and Life Sciences Overview links to header navigation dropdowns
- Enhanced navigation hierarchy with parent page links in both healthcare and life sciences menus
- Made Healthcare and Life Sciences menu items directly clickable to parent pages
- Removed "Overview" submenu items - main menu now links directly to /healthcare and /life-sciences
- Maintained dropdown functionality for accessing subpages while making parent menu items clickable

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution
- **Build**: ESBuild for production bundling
- **Architecture Pattern**: RESTful API with /api prefix

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless)
- **Migration**: Drizzle Kit for schema management
- **Development Storage**: In-memory storage with interface pattern for easy swapping

## Key Components

### Frontend Structure
- **Pages**: Home, About, Contact, News, and specialized product pages (Neonatal Care, Medical Linens with subcategories, DNA/RNA Extraction, Molecular Diagnostics, Gut Care)
- **Medical Linens Subcategories**: Woven, Non-woven, and Blended medical linens with individual pages
- **Components**: Reusable UI components including hero slider, product cards, news cards, stats counter
- **Layout**: Header with navigation menu featuring dropdown for Medical Linens subcategories and footer
- **Hooks**: Custom hooks for mobile detection and toast notifications

### Backend Structure
- **Routes**: Centralized route registration in `server/routes.ts`
- **Storage**: Abstract storage interface with memory implementation
- **Error Handling**: Global error middleware
- **Development**: Vite integration for hot reloading

### Shared Components
- **Schema**: Database schema definitions using Drizzle ORM
- **Types**: Shared TypeScript types between frontend and backend

## Data Flow

### Request Flow
1. Client requests routed through Wouter
2. API calls made via React Query with custom fetch wrapper
3. Express server handles API routes with `/api` prefix
4. Storage layer abstracts database operations
5. Responses formatted as JSON with error handling

### Development Flow
1. Vite dev server serves frontend with hot reloading
2. Express server runs concurrently for API
3. Middleware logs API requests with response times
4. Error overlay for runtime errors in development

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Data Management
- **React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation
- **Date-fns**: Date manipulation utilities

### Development Tools
- **Vite**: Development server and build tool
- **ESBuild**: Fast JavaScript bundler
- **PostCSS**: CSS processing
- **TypeScript**: Static type checking

### Database
- **Neon Database**: Serverless PostgreSQL
- **Drizzle ORM**: Type-safe database operations
- **Connect-pg-simple**: PostgreSQL session storage

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Assets**: Static files served from build directory

### Production Setup
- **Environment**: NODE_ENV=production
- **Database**: PostgreSQL via DATABASE_URL environment variable
- **Static Files**: Express serves built frontend files
- **API**: Express server handles API routes

### Development Setup
- **Hot Reloading**: Vite middleware integrated with Express
- **TypeScript**: TSX for runtime TypeScript execution
- **Database**: Drizzle push for schema synchronization
- **Error Handling**: Runtime error overlay in development

The application follows a modular architecture with clear separation between frontend and backend, using modern tooling for development efficiency and production performance.