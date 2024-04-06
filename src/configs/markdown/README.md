# Render markdown with Marked and KaTeX

## Add Marked to your dependencies

```bash
bun add marked marked-addons
```

## Configs Marked

```ts
// configs/markdown/index.ts
import { Marked } from "marked";
import {
  getFrontmatter,
  markedHeadingsId,
  markedHighlight,
  markedKatex,
  markedSmartypants,
} from "marked-addons";
import { getHighlighter } from "shiki";

const highlighter = await getHighlighter({
  langs: [
    "astro",
    "bash",
    "css",
    "html",
    "javascript",
    "json",
    "markdown",
    "powershell",
    "ts",
    "tsx",
    "typescript",
  ],
  themes: ["dracula-soft"],
});

const marked = new Marked(
  markedKatex({
    throwOnError: false,
    trust: true,
    macros: {
      /* Macros: https://katex.org/docs/options */
      "\\id": "\\htmlId{#2}{\\text{#1}}",
    },
  }),
  markedHighlight({
    langPrefix: "language-",
    highlight(code, lang) {
      return highlighter.codeToHtml(code, {
        lang: lang,
        theme: "dracula-soft",
      });
    },
  }),
  markedHeadingsId(),
  markedSmartypants()
);

/**
 * Parses markdown content to HTML.
 *
 * @param content The markdown content to parse.
 * @returns The parsed HTML content.
 */
export const parse = (content: string) => {
  // Remove most common zerowidth characters from the start of the file.
  // See: https://github.com/microsoft/vscode/issues/124244
  // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
  const cleanContent = content.replace(
    /^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,
    ""
  );

  return marked.parse(cleanContent, {
    // Enable GitHub-flavored Markdown.
    gfm: true,
  });
};
```
