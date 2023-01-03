import { createClient } from "@supabase/supabase-js";
const { VITE_APP_SUPABASE_URL, VITE_APP_SUPABASE_ANON_KEY } = import.meta.env;

export const supabase = createClient(
  VITE_APP_SUPABASE_URL,
  VITE_APP_SUPABASE_ANON_KEY
);
