# replit.md

## Overview

This is a full-stack web application built with a React frontend and Express backend, focused on a healthcare and life sciences company called NIDDIKKARE LLP. The application serves as a corporate website showcasing products and services in neonatal care, medical linens, DNA/RNA extraction, and molecular diagnostics.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**January 22, 2025:**
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