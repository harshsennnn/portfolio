# GEMINI.md

## Project Overview

This is a single-page portfolio website built with **React**, **TypeScript**, and **Vite**. It is styled with **Tailwind CSS**.

The application consists of several sections:
- Home
- About
- Projects
- Blog
- Contact

The navigation is implemented with smooth scrolling to each section. The header also includes links to GitHub and LinkedIn profiles.

## Building and Running

### Prerequisites

- Node.js and npm (or a compatible package manager)

### Installation

```bash
npm install
```

### Development

To start the development server, run:

```bash
npm run dev
```

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

### Previewing the Production Build

To preview the production build locally, run:

```bash
npm run preview
```

## Development Conventions

### Linting

The project uses **ESLint** for code linting. To run the linter, use:

```bash
npm run lint
```

### Type Checking

The project uses **TypeScript** for static type checking. To run the type checker, use:

```bash
npm run typecheck
```

### Code Style

- The project uses functional React components with hooks.
- Styling is done using Tailwind CSS utility classes.
- The codebase follows the standard structure for a Vite + React project.
- Code formatting is enforced by ESLint.
