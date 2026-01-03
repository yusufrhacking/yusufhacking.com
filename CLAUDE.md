# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. Any time you are going to make large changes to the codebase, spec out the question using the AskUserQuestion Tool.

`## Project Overview

This is a personal website built with Quartz v4, a static site generator for digital gardens and notes. The site is deployed to Cloudflare Pages at yusufhacking.com.

## Common Commands

```bash
# Local development with hot reload
npx quartz build --serve

# Build for production
npx quartz build

# Type check and format validation
npm run check

# Format code with Prettier
npm run format

# Run tests
npm test
```

## Architecture

### Build Pipeline

Quartz uses a three-stage processing pipeline with parallel workers:

1. **Glob** - Scans `/content` for `.md` files, respecting `ignorePatterns` in config
2. **Parse** - Converts Markdown → AST using Remark, applies transformer plugins (runs in worker threads)
3. **Filter** - Removes drafts and unpublished content
4. **Emit** - Generates HTML pages, RSS feed, sitemap, search index, and OG images

### Key Directories

- `content/` - Markdown source files organized by topic (blog, projects, zettelkasten, etc.)
- `quartz/` - Core framework code (plugins, components, CLI, styles)
- `public/` - Generated static output (git-ignored)

### Configuration Files

- `quartz.config.ts` - Main configuration: site title, theme colors, enabled plugins, ignored patterns
- `quartz.layout.ts` - Page layout composition: which components appear in header, sidebar, footer

### Plugin System

Three plugin types in `quartz/plugins/`:

- **Transformers** - Modify content during parsing (frontmatter, syntax highlighting, LaTeX, links)
- **Filters** - Control what gets published (e.g., RemoveDrafts)
- **Emitters** - Generate output files (HTML pages, RSS, sitemap, OG images)

### Component System

UI components in `quartz/components/` are Preact functional components that:
- Server-render to HTML via preact-render-to-string
- Can include client-side scripts for interactivity
- Key components: Explorer (sidebar), Graph (D3 knowledge graph), Search (flexsearch), TableOfContents

### Styling

SCSS files in `quartz/styles/`:
- Theme colors defined in `quartz.config.ts` under `theme.colors`
- Supports light/dark mode via CSS custom properties
- `custom.scss` for user overrides

## Deployment

- **Platform**: Cloudflare Pages (configured in `wrangler.json`)
- **CI/CD**: GitHub Actions workflows in `.github/workflows/`
- **Branch**: `v4` is the main branch

## Tech Stack

- Node.js 22+, TypeScript, ESM modules
- Content processing: Unified ecosystem (Remark, Rehype)
- UI: Preact with SSR
- Build: esbuild, LightningCSS
- Search: Flexsearch
- Graph visualization: D3
