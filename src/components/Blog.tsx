import { useEffect, useState } from "preact/hooks";
import { supabase } from "👽/supabase/client";
import { MDFetch, parse } from "📦/markdown";
import Suspense from "🧩/Suspense";

export default function Blog() {
	const [fm, setFm] = useState<Record<string, string> | undefined>();
	const [loaded, setLoaded] = useState(false);

	const getBlog = async () => {
		const params = new URL(window.location.href).searchParams;
		const path = `${params.get("q")?.replaceAll("_", ".")}`;
		const { data } = await supabase.storage
			.from("blog")
			.createSignedUrl(path, 60);
		const url = data?.signedUrl;
		if (!url) {
			alert("Your blog is not found!");
			window.location.replace("/blog");
			return;
		}
		const { frontmatter, content } = await new MDFetch(url).get();
		setFm(frontmatter);
		const html = await parse(content);
		const blogContent = document.querySelector(".blog-content") as HTMLElement;
		blogContent.innerHTML = html;
		setLoaded(true);
	};

	useEffect(() => {
		getBlog();
	}, []);

	return (
		<Suspense loaded={loaded}>
			<div className="markdown highlighter">
				<img src={fm?.cover} alt="" class="cover" />
				<p class="title">{fm?.title}</p>
				<div className="blog-content" />
				<div class="authors">
					<p>
						{fm?.authors.includes(",") ? "Authors: " : "Author: "}
						<span>{fm?.authors}</span>
					</p>
				</div>
			</div>
		</Suspense>
	);
}
