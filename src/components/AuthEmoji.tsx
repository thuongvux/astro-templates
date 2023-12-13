import { useEffect, useState } from "preact/hooks";
import { cookies } from "📦/cookies";

export const AuthEmoji = () => {
	const [avatarUrl, setAvatarUrl] = useState<string | undefined>();
	const [emoji, setEmoji] = useState("");
	useEffect(() => {
		setEmoji(cookies.get("auth-emoji") ?? "🥶");
		setAvatarUrl(cookies.get("avatar_url"));
	}, []);

	return (
		<a class="auth-emoji" href={"/auth/signout"}>
			{avatarUrl ? (
				<img src={avatarUrl} alt="" className="object-cover" />
			) : (
				<span>{emoji}</span>
			)}
		</a>
	);
};
