import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://orsppougydgfkbxjcwtq.supabase.co";
const SUPABASE_ANON_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yc3Bwb3VneWRnZmtieGpjd3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NjYxMzgsImV4cCI6MjAwNzM0MjEzOH0.AVMQp7USjCDj833NlqtxG49swOr_wfMTQD74qgyUnuE";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
