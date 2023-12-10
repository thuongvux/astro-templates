import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), preact()],
	adapter: vercel(),
	output: "hybrid",
	prefetch: true,
});
