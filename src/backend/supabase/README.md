# Typescript Support for Supabase

## Setup Supabase CLI

Add `supabase` to `trustedDependencies` in `package.json`

```json
// package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "trustedDependencies": ["supabase"]
}
```

Reinstall package

```bash
rm -rf node_modules && rm bun.lockb && bun install
```

Finally add supabase

```bash
bun add -D supabase
```

## Gen types and usage

Pull types from supabase

```bash
bunx supabase gen types typescript --project-id [PROJECT_ID] > src/backend/supabase/types.d.ts
```

```ts
// supabase/server.ts
import type { AstroCookies } from "astro";
import type { Database } from "./types";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export const supabase = (cookies: AstroCookies) => {
  return createServerClient<Database>(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_SERVICE_ROLE,
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
```
