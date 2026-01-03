import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Yusuf Hacking",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "yusufhacking.com",
    ignorePatterns: ["private", "templates", ".obsidian", "*.canvas"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Crimson Pro",
        code: "JetBrains Mono",
      },
      colors: {
        // Design Monograph - Warm Cream & Rich Black
        lightMode: {
          light: "#FAF7F2",      // Warm cream paper
          lightgray: "#E8E3DA",  // Soft warm gray
          gray: "#8C8579",       // Warm mid gray
          darkgray: "#3D3833",   // Warm dark text
          dark: "#1A1815",       // Rich warm black
          secondary: "#C45C3E",  // Terracotta accent
          tertiary: "#D4735A",   // Lighter terracotta
          highlight: "rgba(196, 92, 62, 0.08)",
          textHighlight: "#C45C3E22",
        },
        darkMode: {
          light: "#1A1815",      // Rich warm black
          lightgray: "#2E2A26",  // Dark warm gray
          gray: "#6B635A",       // Warm mid gray
          darkgray: "#E8E3DA",   // Cream text
          dark: "#FAF7F2",       // Warm cream headers
          secondary: "#D4735A",  // Terracotta accent
          tertiary: "#E08B6D",   // Lighter terracotta
          highlight: "rgba(212, 115, 90, 0.12)",
          textHighlight: "#C45C3E33",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
