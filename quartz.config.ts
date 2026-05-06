// Quartz 4 Configuration for Product Management Brain
// Full docs: https://quartz.jzhao.xyz/configuration

import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🧠 PM Second Brain",
    pageTitleSuffix: " | Product Management Knowledge Base",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "Yeshprabhu03.github.io/Product-Management-Knowledge-Graph-",
    ignorePatterns: [
      "private",
      "Templates",
      ".obsidian",
      "_Assets",
      ".github",
      "quartz",
      "node_modules",
      "public",
      "README.md",
      "PUBLISHING.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Outfit",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafa",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#0f172a",
          secondary: "#0f766e",     // Teal accent for PM Brain
          tertiary: "#0d9488",      
          highlight: "rgba(15, 118, 110, 0.08)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#020617",         // Deeper dark blue
          lightgray: "#0f172a",
          gray: "#334155",
          darkgray: "#94a3b8",
          dark: "#f1f5f9",
          secondary: "#2dd4bf",     // Teal accent (glow)
          tertiary: "#5eead4",      
          highlight: "rgba(45, 212, 191, 0.1)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
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
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
