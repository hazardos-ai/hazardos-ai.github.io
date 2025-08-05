# Contributing to HazardOS Website

Thank you for your interest in contributing to the HazardOS website! This guide will help you get started with the development environment and contribute effectively to our project.

## 🏗️ Project Overview

This project is a website built with:
- **Framework**: [Astro 5.0](https://astro.build/) - A modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Package Manager**: npm
- **Environment Manager**: [Pixi](https://pixi.sh/) - Modern package management solution
- **Template Base**: AstroWind theme

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Tools
- **Pixi**: For managing the development environment
  ```bash
  # Install pixi (if not already installed)
  curl -fsSL https://pixi.sh/install.sh | bash
  ```
- **Git**: For version control

### System Requirements
- Node.js version: `^18.17.1 || ^20.3.0 || >= 21.0.0` (managed via pixi)
- macOS (osx-arm64) - as configured in `pixi.toml`

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/hazardos-ai/hazardos-ai.github.io.git
cd hazardos-ai.github.io
```

### 2. Set Up the Development Environment
The project uses Pixi to manage dependencies and environment:

```bash
# Install all dependencies (including Node.js)
pixi install

# Navigate to the site directory and install npm packages
cd site
npm install
```

### 3. Start the Development Server
You can start the development server in two ways:

**Option A: Using Pixi (Recommended)**
```bash
# From the root directory
pixi run dev
```

**Option B: Using npm directly**
```bash
# From the site directory
cd site
npm run dev
```

The development server will start at `http://localhost:4321` by default.

## 📁 Project Structure

```
hazardos-ai.github.io/
├── pixi.toml              # Pixi configuration
├── pixi.lock              # Pixi lock file
├── README.md              # Project overview
├── CONTRIBUTING.md        # This file
└── site/                  # Main website code
    ├── package.json       # npm dependencies and scripts
    ├── astro.config.ts    # Astro configuration
    ├── tailwind.config.js # Tailwind CSS configuration
    ├── src/               # Source code
    │   ├── components/    # Reusable Astro components
    │   ├── layouts/       # Page layouts
    │   ├── pages/         # Website pages (file-based routing)
    │   ├── content/       # Content collections
    │   ├── assets/        # Static assets (images, styles)
    │   └── utils/         # Utility functions
    ├── public/            # Static files served directly
    └── vendor/            # Third-party integrations
```

## 🛠️ Available Scripts

All scripts should be run from the `site/` directory:

### Development
- `npm run dev` - Start development server
- `npm run start` - Alias for dev server

### Building
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run check` - Run all checks (Astro, ESLint, Prettier)
- `npm run check:astro` - Check Astro files
- `npm run check:eslint` - Check JavaScript/TypeScript linting
- `npm run check:prettier` - Check code formatting

### Code Fixing
- `npm run fix` - Fix all auto-fixable issues
- `npm run fix:eslint` - Fix ESLint issues
- `npm run fix:prettier` - Fix Prettier formatting

## 🎨 Development Guidelines

### Code Style
- We use **ESLint** for JavaScript/TypeScript linting
- We use **Prettier** for code formatting
- Always run `npm run check` before committing
- Use `npm run fix` to automatically fix formatting issues

### Component Development
- Place reusable components in `src/components/`
- Use Astro components (`.astro` files) for UI components
- Follow the existing component structure and naming conventions
- Include TypeScript types when applicable

### Styling
- Use Tailwind CSS classes for styling
- Follow the utility-first approach
- Custom styles should be added to `src/assets/styles/tailwind.css`
- Dark mode support is built-in

### Content Management
- Blog posts and content go in `src/content/`
- Use MDX format for rich content with components
- Follow the existing frontmatter structure

## 🔧 Common Development Tasks

### Adding a New Page
1. Create a new `.astro` file in `src/pages/`
2. Use an appropriate layout from `src/layouts/`
3. Add navigation links if needed in `src/navigation.ts`

### Adding a New Component
1. Create the component in the appropriate `src/components/` subdirectory
2. Export any props with TypeScript interfaces
3. Document the component usage if complex

### Modifying Styles
1. Use Tailwind classes in component templates
2. For custom CSS, add to `src/assets/styles/tailwind.css`
3. Follow the existing design system and color scheme

## 🐛 Reporting Issues

When reporting bugs or requesting features:
1. Check existing issues first
2. Use clear, descriptive titles
3. Provide steps to reproduce (for bugs)
4. Include relevant system information
5. Add screenshots if applicable

## 📝 Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make** your changes
4. **Test** your changes locally
   ```bash
   npm run check
   npm run build
   ```
5. **Commit** your changes with a clear message
6. **Push** to your fork
7. **Open** a Pull Request with:
   - Clear description of changes
   - Screenshots (if UI changes)
   - Testing instructions

### Commit Message Guidelines
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Include detailed description if needed

## 🌐 Deployment

The website is automatically deployed when changes are merged to the `main` branch. The build process:
1. Runs all checks (`npm run check`)
2. Builds the static site (`npm run build`)
3. Deploys to the hosting platform

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Pixi Documentation](https://pixi.sh/latest/)
- [AstroWind Theme Documentation](https://github.com/onwidget/astrowind)

## 🤝 Getting Help

If you need help or have questions:
- Check the [project documentation](README.md)
- Review existing [GitHub issues](https://github.com/hazardos-ai/hazardos-ai.github.io/issues)
- Create a new issue with the "question" label

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to HazardOS! 🎉
