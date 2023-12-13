---
layout: "🧊/Markdown.astro"
authors: "Thuong Vu"
title: "My VS Code settings"
cover: "https://cdn.ttgtmedia.com/rms/onlineimages/code_g1019737194.jpg"
releaseDate: "2023-11-01"
---

```json
// settings.json
{
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.wordWrap": "on"
  },
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  },
  "[tailwindcss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "biome.requireConfiguration": false,
  "editor.defaultFormatter": "biomejs.biome",
  "editor.fontFamily": "'JetBrains Mono', Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 16,
  "editor.formatOnSave": true,
  "editor.linkedEditing": true,
  "editor.minimap.enabled": false,
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "editor.tabSize": 2,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.sortOrder": "type",
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "files.exclude": {
    "**/.git": false,
    ".astro/": true,
    "bun.lockb": true,
    "package-lock.json": true,
    "pnpm-lock.yaml": true
  },
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "markdown.occurrencesHighlight.enabled": true,
  "material-icon-theme.folders.color": "#26a67a",
  "prettier.printWidth": 120,
  "security.workspace.trust.untrustedFiles": "open",
  "tailwindCSS.classAttributes": ["class", "className", "class:list"],
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "terminal.integrated.fontSize": 15,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "window.commandCenter": false,
  "window.restoreWindows": "none",
  "workbench.activityBar.location": "top",
  "workbench.colorTheme": "GitHub Dark",
  "workbench.iconTheme": "material-icon-theme"
}
```
