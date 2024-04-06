/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
	// Supabase
	readonly PUBLIC_SUPABASE_URL: string;
	readonly PUBLIC_SUPABASE_ANON_KEY: string;
	readonly PRIVATE_SUPABASE_SERVICE_ROLE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

type OptionsFlags<T> = {
	[P in keyof T]: boolean;
};

type Mutable<T> = {
	-readonly [P in keyof T]: T[P];
};
