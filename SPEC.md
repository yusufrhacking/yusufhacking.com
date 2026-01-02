  ---
  Personal Website Spec

  Tech Stack

  - Framework: Quartz 4 (purpose-built for Obsidian, preserves wikilinks/backlinks)
  - Hosting: Cloudflare Pages (auto-deploys on git push)
  - Domain: Your existing Cloudflare domain
  - Workflow: Push markdown to repo → automatic build & deploy

  Site Structure (Unified Hub)

  /                    → Homepage hub linking to all sections
  ├── /notes           → Class notes & Zettelkasten garden
  ├── /blog            → Blog posts (just notes tagged 'blog')
  ├── /projects        → Coding portfolio (expandable)
  └── /about           → Resume (interactive + PDF download)

  Design: Architect's Notebook

  - Aesthetic: Mixed media — technical precision meets hand-drawn warmth
  - Colors: Rich brown primary + cream/warm neutrals + charcoal accents
  - Elements: Grid underlays, sketch-style annotations, strong typography, organic linework touches
  - Modes: Dark/light toggle (both modes maintain the warm palette)

  Core Features

  | Feature          | Implementation                           |
  |------------------|------------------------------------------|
  | Graph view       | Quartz built-in, shows note connections  |
  | Full-text search | Quartz built-in                          |
  | Dark/light mode  | Custom CSS variables for brown palette   |
  | Wikilinks        | Native Quartz support                    |
  | Backlinks        | Automatic on each note page              |
  | Resume           | Interactive HTML page + downloadable PDF |

  Content Strategy

  - Unified system: Blog posts are notes in /blog folder or with blog: true frontmatter
  - Publishing: Selective via folder structure — only /content folder is public
  - Vault cleanup needed: Reorganize existing notes for public publishing

  Deployment Pipeline

  Obsidian vault → Git push → Cloudflare Pages build → Live site