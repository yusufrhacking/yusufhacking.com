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
        header: "Bitter",
        body: "Source Serif 4",
        code: "JetBrains Mono",
      },
      colors: {
        // Architect's Notebook - Rich Brown Palette
        lightMode: {
          light: "#FAF6F1",      // Warm cream background
          lightgray: "#E8E0D5",  // Borders, dividers
          gray: "#A89B8C",       // Graph links, secondary
          darkgray: "#5C5347",   // Body text (warm charcoal)
          dark: "#3D352B",       // Headers (rich brown-black)
          secondary: "#8B5A2B",  // Links (saddle brown)
          tertiary: "#A67C52",   // Hover states (peru)
          highlight: "rgba(139, 90, 43, 0.12)",
          textHighlight: "#F5DEB388",
        },
        darkMode: {
          light: "#1E1A16",      // Dark warm background
          lightgray: "#3D352B",  // Borders
          gray: "#6B5D4D",       // Graph links
          darkgray: "#D4C8B8",   // Body text (warm light)
          dark: "#F5EDE3",       // Headers (cream)
          secondary: "#C4956A",  // Links (muted gold-brown)
          tertiary: "#D4A574",   // Hover states
          highlight: "rgba(196, 149, 106, 0.15)",
          textHighlight: "#8B5A2B55",
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
