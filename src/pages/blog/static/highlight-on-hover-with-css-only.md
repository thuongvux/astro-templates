---
layout: "🧊/Markdown.astro"
authors: "Thuong Vu"
title: "Highlight on hover with CSS only"
cover: "https://source.unsplash.com/random"
releaseDate: "2023-12-13"
---

## Example: [HOVER ME]()

## CSS code:

```css
:is(.hover-highlight, .hoh) {
  --highlight-color: hsl(70 60% 78%);
  @apply relative;
  &::before {
    @apply absolute inset-0 z-[-1] inline-block rounded-[0.5em];
    @apply bg-[--highlight-color] content-[""];
    @apply transition-transform;
    @apply origin-bottom-right scale-x-0 duration-500;
  }
  &:hover::before {
    @apply origin-bottom-left scale-x-100 duration-1000;
  }
}
```
