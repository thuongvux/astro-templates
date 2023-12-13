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

export const parse = (raw: string) => {
	return marked.parse(
		// remove the most common zerowidth characters from the start of the file
		raw.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""),
		{
			gfm: true,
		},
	);
};

export class MDFetch {
	#url: string;

	constructor(url: string) {
		this.#url = url;
	}

	public get = async () => {
		const res = await fetch(this.#url);
		if (!res.ok) {
			throw new Error("Failed to fetch");
		}
		return MDFetch.parse(await res.text());
	};

	protected static parse = (mdRaw: string) => {
		const pattern = {
			frontmatter: /\-{3}(.|\n)*\-{3}/g,
			key: /(?<!:.*)(\w*)(?=\:)/g,
			value: /(?<=\").*(?=\")/g,
		};

		const fMatch = mdRaw.match(pattern.frontmatter);
		if (!fMatch) {
			return {
				frontmatter: {},
				content: mdRaw,
			};
		}
		const content = mdRaw.replace(fMatch[0], "").trim();
		const fRaw = fMatch[0].replaceAll("---", "").trim();
		const fLines = fRaw.match(/.+/g) ?? [""];
		const fEntries = fLines.map((e) => {
			const matchKey = e.match(pattern.key);
			const matchValue = e.match(pattern.value);
			if (!matchKey || !matchValue) {
				return [];
			}
			return [matchKey[0], matchValue[0]];
		});
		const frontmatter = Object.fromEntries(fEntries) as Record<string, string>;
		return {
			frontmatter: frontmatter,
			content: content,
		};
	};
}
