import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://orsppougydgfkbxjcwtq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yc3Bwb3VneWRnZmtieGpjd3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NjYxMzgsImV4cCI6MjAwNzM0MjEzOH0.AVMQp7USjCDj833NlqtxG49swOr_wfMTQD74qgyUnuE",
);
