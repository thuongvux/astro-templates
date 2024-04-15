import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	integrations: [
		tailwind({
			nesting: true,
		}),
		react(),
	],
	markdown: {},
	output: "hybrid",
	prefetch: true,
	devToolbar: { enabled: false },
	experimental: {
		clientPrerender: true,
	},
});
