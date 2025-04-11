"use client"; 
import SwiperComponent from "./components/slider";
import MainSlider from "./components/mainHighlighter";
import {Merriweather } from "next/font/google";
import MarqueePage from "./components/marquee";
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-montserrat",
// });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function Home() {

  return (
    <>
      <MainSlider/>
      <div className={`max-w-7xl mx-auto px-4 text-[#2196f3] font-extrabold text-4xl pt-5 py-3 ${merriweather.className}`}>
      Collaborating with top College & Universities
      </div>
      <MarqueePage/>
       <SwiperComponent/>
   
    <div>
    </div>
      
    </>
  );
}
