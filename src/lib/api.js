import { createClient } from "@supabase/supabase-js";
import { GATSBY_SUPABASE_URL, GATSBY_SUPABASE_KEY } from "./constants";

export const supabase = createClient(
    GATSBY_SUPABASE_URL,
    GATSBY_SUPABASE_KEY
);