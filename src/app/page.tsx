"use client"; // Ensure this runs in the browser

// import { useState, useEffect } from "react";
// import { supabase } from "../../lib/supabaseClient";
import SwiperComponent from "./components/slider";
import MainSlider from "./components/mainHighlighter";


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
      <MainSlider/>
    {/* <div className="flex flex-col items-center justify-center h-screen">
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
          Guru Mantra 123
       </div>
    </div> */}
    <div className="mt-16">
       <SwiperComponent/>
    </div>
      
    </>
  );
}
