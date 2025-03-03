"use client"; // Ensure this runs in the browser

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
export default function Home() {
  // const [data, setData] = useState<any[]>([]);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase.from("your_table").select("*");

  //     if (error) {
  //       setError(error.message);
  //     } else {
  //       setData(data || []);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div className="lg:mx-20">
        Hello <span className="font-bold">SRH</span>. A layout is UI that is shared between multiple pages.
        On navigation, layouts preserve state, remain interactive, and do not rerender.

    
      </div>
    </>
  );
}
