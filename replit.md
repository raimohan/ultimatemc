# UltimateMC - Minecraft Server Website

## Overview

UltimateMC is a modern Minecraft server website built as a full-stack web application. The project showcases a gaming server's features, economy system, ranks, and community information through an engaging, interactive interface. The application serves as both a marketing site and a platform for server information, featuring animated components, responsive design, and a comprehensive UI component system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Animations**: Framer Motion for smooth animations and transitions throughout the interface
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for API routes
- **Development**: Vite for fast development server with Hot Module Replacement
- **Database Layer**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Data Storage**: In-memory storage implementation with interface for easy database integration
- **Build System**: ESBuild for production bundling with optimized output

### Component Architecture
- **Design System**: Comprehensive UI component library with variants and consistent styling
- **Layout Structure**: Modular component architecture with clear separation of concerns
- **Theme System**: Light/dark mode support with CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive components

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM with migrations support
- **Schema Management**: Centralized schema definitions in shared directory for type consistency
- **Development Storage**: In-memory storage implementation for rapid development
- **Connection**: Neon Database serverless PostgreSQL for production deployment

### Authentication & User Management
- **User Schema**: Basic user model with username/password fields and UUID primary keys
- **Storage Interface**: Abstracted storage layer supporting multiple implementations
- **Session Management**: Configured for future session-based authentication
- **Validation**: Zod schemas for runtime type checking and validation

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, TypeScript, Vite for modern frontend development
- **UI Framework**: Radix UI components with shadcn/ui for accessible, customizable components
- **Database**: PostgreSQL with Neon Database serverless hosting
- **Animation**: Framer Motion for interactive animations and page transitions

### Development & Build Tools
- **Package Manager**: npm with lockfile for consistent dependency resolution
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Styling**: Tailwind CSS with PostCSS processing and custom configuration
- **Development**: Replit integration with Vite plugins for enhanced development experience

### Third-party Services
- **Database Hosting**: Neon Database serverless PostgreSQL
- **Font Loading**: Google Fonts integration for custom typography
- **Image Hosting**: External image hosting for server screenshots and assets
- **Development Platform**: Replit-specific plugins and banner integration

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Class Management**: clsx and class-variance-authority for dynamic class handling
- **Validation**: Zod for schema validation and type inference
- **HTTP Client**: Built-in fetch with custom wrapper for API requests