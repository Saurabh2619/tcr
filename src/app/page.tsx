"use client"; // Ensure this runs in the browser

// import { useState, useEffect } from "react";
// import { supabase } from "../../lib/supabaseClient";
import SwiperComponent from "./components/slider";


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
      <div className="flex flex-col items-center justify-center h-screen gap-[5px]">
      <div>light shade ⬇️</div>
        <div className="text-[50px] font-bold text-[#42a5f5]">
          Guru Mantra 
        </div> 
        <div>Original ⬇️</div>
        <div className="text-[50px] font-bold text-[#2196f3]">
          Guru Mantra
        </div>
        <div>Dark shade ⬇️</div>
        <div className="text-[50px] font-bold text-[#1e88e5]">
          Guru Mantra
        </div>
        <SwiperComponent/>
      </div>

      
    </>
  );
}
