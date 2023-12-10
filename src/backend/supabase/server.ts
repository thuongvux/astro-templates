import { type CookieOptions, createServerClient } from "@supabase/ssr";
import type { AstroCookies } from "astro";
import type { Database } from "./types";

export const supabase = (cookies: AstroCookies) => {
	return createServerClient<Database>(
		import.meta.env.SUPABASE_URL,
		import.meta.env.SUPABASE_ANON_KEY,
		{
			cookies: {
				get(key: string) {
					return cookies.get(key)?.value;
				},
				set(key: string, value: string, options: CookieOptions) {
					cookies.set(key, value, options);
				},
				remove(key: string, options) {
					cookies.delete(key, options);
				},
			},
		},
	);
};
