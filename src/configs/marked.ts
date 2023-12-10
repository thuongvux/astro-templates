import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import markedKatex from "marked-katex-extension";
import { getHighlighter } from "shikiji";

const highlighter = await getHighlighter({
	langs: [
		"astro",
		"bash",
		"html",
		"javascript",
		"json",
		"markdown",
		"typescript",
	],
	themes: ["dracula-soft"],
});

const marked = new Marked(
	markedKatex({
		throwOnError: false,
		trust: true,
		macros: {
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
);

export const markedParse = (raw: string) => {
	return marked.parse(
		// remove the most common zerowidth characters from the start of the file
		raw.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""),
		{
			gfm: true,
		},
	);
};
