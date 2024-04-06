# Typescript Support for Supabase

## Add enviroment variables to .env.local

Get your [Supabase API Key](https://supabase.com/dashboard/project/_/settings/api)

```
# .env.local
PUBLIC_SUPABASE_URL="..."
PUBLIC_SUPABASE_ANON_KEY="..."
```

## Setup Supabase CLI

```bash
bun add -d supabase
```

## Gen types

Pull types from supabase

```bash
bunx supabase login --no-browser
bunx supabase gen types typescript --project-id [PROJECT_ID] > src/configs/supabase/types.d.ts
```

## Create Supabase browser and server clients

```ts
// supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types";

export const supabase = createBrowserClient<Database>(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);
```

```ts
// supabase/server.ts
import type { AstroCookies } from "astro";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import type { Database } from "./types";

export const supabase = (cookies: AstroCookies) => {
  return createServerClient<Database>(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(key: string) {
          return cookies.get(key)?.value;
        },
        set(key: string, value: string, options: CookieOptions) {
          cookies.set(key, value, options);
        },
        remove(key: string, options: CookieOptions) {
          cookies.delete(key, options);
        },
      },
    }
  );
};
```
