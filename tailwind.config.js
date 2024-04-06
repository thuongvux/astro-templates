import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	experimental: {
		optimizeUniversalDefaults: true,
	},
	plugins: [
		plugin(({ addBase, addComponents, addUtilities }) => {
			addUtilities({
				".show-border": {
					"border-color": "hsl(200 60% 60%)",
					"border-style": "dashed",
					"border-width": "2px",
				},
				".preventing-unwanted-layout-changes": {
					overflow: "auto",
					"scrollbar-gutter": "stable both-edges",
				},
				".animation-scroll": {
					"animation-timeline": "scroll()",
				},
				".animation-view": {
					"animation-timeline": "view()",
				},
				".container-queries": {
					"container-type": "inline-size",
				},
				".hide-scrollbar": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
					"&::-webkit-scrollbar": {
						display: "none",
					},
				},
				".drag-none": {
					"-webkit-user-drag": "none",
				},
				".center": {
					display: "flex",
					"flex-direction": "column",
					"justify-content": "center",
					"align-items": "center",
				},
				".absolute-center": {
					position: "absolute",
					left: "50%",
					top: "50%",
					translate: "-50% -50%",
				},
				".fixed-center": {
					position: "fixed",
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
			serif: ["Bitter", "Times New Roman", "serif"],
			mono: ["JetBrains Mono", "Consolas", "ui-monospace"],
			title: ["Playpen Sans", "sans-serif"],
			headings: ["Overpass", "sans-serif"],
			caption: ["Roboto", "sans-serif"],
		},
		extend: {
			fontSize: {
				xs: "0.8em",
				sm: "0.875em",
				base: "20px",
				lg: "1.125em",
				xl: "1.25em",
				"2xl": "1.375em",
				"3xl": "1.5em",
				"4xl": "1.75em",
				"5xl": "2em",
			},
			animation: {
				value: "value linear both",
				offset: "offset linear",
				increaseWidth: "increaseWidth linear",
				increaseHeight: "increaseHeight linear",
				growing: "growing 0.75s linear infinite",
			},
			keyframes: {
				value: {
					"0%": { "--value": "0" },
					"100%": { "--value": "1" },
				},
				offset: {
					"100%": { "offset-distance": "100%" },
				},
				increaseWidth: {
					"0%": { width: "0%" },
					"100%": { width: "100%" },
				},
				increaseHeight: {
					"0%": { height: "0%" },
					"100%": { height: "100%" },
				},
				growing: {
					"0%": {
						transform: "scale(0)",
						opacity: "0",
					},
					"50%": {
						opacity: "1",
					},
					"100%": {
						opacity: "0",
					},
				},
				flipXY: {
					"50%": {
						transform: "rotateY(180deg)",
					},
					"100%": {
						transform: "rotateY(180deg) rotateX(180deg)",
					},
				},
			},
		},
	},
};
