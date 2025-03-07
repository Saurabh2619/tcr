import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function menuOptions() {
  const { data, error } = await supabase.from("exams").select("*");
  if (error) {
    console.error("Error fetching options:", error);
    return [];
  }
  return data;
}

export { menuOptions };
