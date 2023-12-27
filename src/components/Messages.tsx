import { useEffect, useState } from "preact/hooks";
import { supabase } from "👽/supabase/client";

export default function Messages() {
	const [messages, setMessages] = useState<Record<string, any>[] | null>([]);
	const [payload, setPayload] = useState<Record<string, any>>({});

	useEffect(() => {
		const getMessages = supabase
			.from("messages")
			.select()
			.limit(10)
			.order("created_at", {
				ascending: false,
			})
			.then(({ data }) => {
				setMessages(data);
			});
	}, [payload]);

	useEffect(() => {
		const listen = supabase
			.channel("room-1")
			.on("postgres_changes", { event: "*", schema: "public", table: "messages" }, (payload) => {
				setPayload(payload);
			})
			.subscribe();
	}, []);

	return (
		<ol>
			{messages?.map((e) => {
				return <li className="list-['🔹']">{e.message}</li>;
			})}
		</ol>
	);
}
