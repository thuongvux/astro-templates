import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    plugin(({ addBase, addComponents, addUtilities }) => {
      addUtilities({
        ".show-border": {
          "border-color": "hsl(200 60% 60%)",
          "border-style": "dashed",
          "border-width": "2px",
        },
        ".container-queries": {
          "container-type": "inline-size",
        },
        ".scrollbar-none": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".drag-none": {
          "-webkit-user-drag": "none",
        },
        ".absolute-center": {
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
        },
      });
    }),
  ],
  theme: {
    fontFamily: {
      sans: ["Anuphan", "Arial", "sans-serif"],
      serif: ["Lora", "Times New Roman", "serif"],
      cursive: ["Flavors", "cursive"],
      mono: ["JetBrains Mono", "Fira Code", "Consolas", "ui-monospace"],
      title: ["Playpen Sans", "sans-serif"],
      subtitle: ["Playpen Sans", "sans-serif"],
      describe: ["Roboto", "sans-serif"],
    },
    extend: {
      fontSize: {
        base: "20px",
      },
    },
  },
};
