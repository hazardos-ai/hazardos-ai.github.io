# HazardOS Website

🌐 **Official website for HazardOS** - Built with modern web technologies for optimal performance and user experience.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.0-orange.svg)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue.svg)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)

## 🚀 Overview

This repository contains the source code for the HazardOS website, a modern, fast, and SEO-optimized static site built with cutting-edge web technologies.

### ✨ Features

- 🏎️ **Lightning Fast**: Built with Astro 5.0 for optimal performance
- 🎨 **Modern Design**: Styled with Tailwind CSS and dark mode support
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🔍 **SEO Optimized**: Built-in sitemap, RSS feed, and meta tags
- 🌙 **Dark Mode**: Automatic theme switching support
- 📝 **Blog Ready**: MDX support for rich content creation
- 🖼️ **Image Optimization**: Automatic image optimization and CDN support
- 🔧 **Developer Friendly**: Hot reload, TypeScript, and modern tooling

## 🛠️ Tech Stack

- **Framework**: [Astro 5.0](https://astro.build/) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Content**: MDX for rich, component-enhanced content
- **Package Manager**: npm
- **Environment Manager**: [Pixi](https://pixi.sh/) - Modern package management
- **Language**: TypeScript for type safety
- **Template**: Based on AstroWind theme

## 🚀 Quick Start

### Prerequisites

- [Pixi](https://pixi.sh/) (recommended) or Node.js 18+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hazardos-ai/hazardos-ai.github.io.git
   cd hazardos-ai.github.io
   ```

2. **Install dependencies**
   ```bash
   # Using Pixi (recommended)
   pixi install
   
   # Or using npm directly
   cd site && npm install
   ```

3. **Start development server**
   ```bash
   # Using Pixi
   pixi run dev
   
   # Or using npm
   cd site && npm run dev
   ```

4. **Open your browser**
   
   Visit [http://localhost:4321](http://localhost:4321) to see the website.

## 📁 Project Structure

```
hazardos-ai.github.io/
├── 📄 pixi.toml              # Pixi configuration
├── 📄 README.md              # Project documentation
├── 📄 CONTRIBUTING.md        # Contribution guidelines
├── 📄 LICENSE                # MIT License
└── 📁 site/                  # Main website code
    ├── 📄 package.json       # Dependencies and scripts
    ├── 📄 astro.config.ts    # Astro configuration
    ├── 📄 tailwind.config.js # Tailwind configuration
    ├── 📁 src/               # Source code
    │   ├── 📁 components/    # Reusable components
    │   ├── 📁 layouts/       # Page layouts
    │   ├── 📁 pages/         # Website pages
    │   ├── 📁 content/       # Content collections
    │   ├── 📁 assets/        # Images and styles
    │   └── 📁 utils/         # Utility functions
    ├── 📁 public/            # Static assets
    └── 📁 vendor/            # Third-party code
```

## 🔧 Development

### Available Commands

Run these commands from the `site/` directory:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Run all checks (Astro, ESLint, Prettier) |
| `npm run fix` | Fix all auto-fixable issues |

### Using Pixi (Recommended)

From the root directory:

```bash
# Start development server
pixi run dev

# Install new npm packages
pixi run npm install package-name
```

## 🎨 Customization

### Adding Content
- **Pages**: Add `.astro` files to `src/pages/`
- **Components**: Create reusable components in `src/components/`
- **Blog Posts**: Add MDX files to `src/content/`
- **Styles**: Use Tailwind classes or add custom CSS to `src/assets/styles/`

### Configuration
- **Site Settings**: Edit `src/config.yaml`
- **Navigation**: Modify `src/navigation.ts`
- **Astro Config**: Update `astro.config.ts`
- **Tailwind**: Customize `tailwind.config.js`

## 🚀 Deployment

The website is automatically deployed when changes are pushed to the `main` branch. The deployment process:

1. ✅ Runs code quality checks
2. 🏗️ Builds the static site
3. 🌐 Deploys to hosting platform

## 📚 Documentation

- 📖 [Contributing Guidelines](CONTRIBUTING.md) - How to contribute to the project
- 🛠️ [Astro Documentation](https://docs.astro.build/)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 📦 [Pixi Documentation](https://pixi.sh/latest/)

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Setting up the development environment
- Code style and best practices
- Pull request process
- Reporting issues

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you need help or have questions:

- 📖 Check the [Contributing Guidelines](CONTRIBUTING.md)
- 🐛 [Report Issues](https://github.com/hazardos-ai/hazardos-ai.github.io/issues)
- 💬 Start a [Discussion](https://github.com/hazardos-ai/hazardos-ai.github.io/discussions)

---

**Built with ❤️ by the HazardOS Team**


