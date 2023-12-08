/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  // Supabase
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE: string;
  // TMDB
  readonly TMDB_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
