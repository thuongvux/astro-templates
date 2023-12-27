import { type FileObject } from "@supabase/storage-js";
import { useEffect, useState } from "preact/hooks";
import { supabase } from "👽/supabase/client";
import Suspense from "🧩/Suspense";

export default function BlogList() {
	const [loading, setLoading] = useState(true);
	const [blogs, setBlogs] = useState<FileObject[] | null>([]);
	const getBlogs = async () => {
		const { data, error } = await supabase.storage.from("blog").list();
		setBlogs(data);
		setLoading(false);
	};
	useEffect(() => {
		getBlogs();
	}, []);

	return (
		<Suspense loading={loading}>
			<h2>This is from-cloud's blog</h2>
			<ol class="list-inside">
				{blogs?.map((e) => {
					if (e.name === ".emptyFolderPlaceholder") {
						return;
					}
					const q = e.name.replaceAll(".", "_");
					return (
						<li className="list-decimal text-lg">
							<a href={`/blog/cloud?q=${q}`}>{e.name}</a>
						</li>
					);
				})}
			</ol>
			<br />
			<h2>
				{"Return to "}
				<a href={"/blog"} className="text-sky-600">
					build-in blog
				</a>
			</h2>
		</Suspense>
	);
}
