// "use client"; 
// import SwiperComponent from "./components/slider";
// import MainSlider from "./components/mainHighlighter";
// import {Merriweather } from "next/font/google";
// import MarqueePage from "./components/marquee";
// // const montserrat = Montserrat({
// //   subsets: ["latin"],
// //   weight: ["400", "700"],
// //   variable: "--font-montserrat",
// // });
// const merriweather = Merriweather({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-montserrat",
// });

// export default function Home() {

//   return (
//     <>
//       <MainSlider/>
//       <div className={`max-w-7xl mx-auto px-4 text-[#2196f3] font-extrabold text-4xl pt-5 py-3 ${merriweather.className}`}>
//       Collaborating with top College & Universities
//       </div>
//       {/* <MarqueePage/> */}
//        {/* <SwiperComponent/> */}
   
//     <div>
//     </div>
      
//     </>
//   );
// }

'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store'; // ✅ Correct relative path
import { increment, decrement, reset } from './redux/features/counterSlice';

export default function HomePage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-4">Redux Counter: {count}</h1>
      <div className="space-x-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(increment())}
        >
          + Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          - Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
