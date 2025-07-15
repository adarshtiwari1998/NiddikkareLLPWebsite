# replit.md

## Overview

This is a full-stack web application built with a React frontend and Express backend, focused on a healthcare and life sciences company called NIDDIKKARE LLP. The application serves as a corporate website showcasing products and services in neonatal care, medical linens, DNA/RNA extraction, and molecular diagnostics.

## User Preferences

Preferred communication style: Simple, everyday language.

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