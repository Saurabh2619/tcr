'use client';

/* ---------------------- Imports ---------------------- */
import MainSlider from './components/mainHighlighter';
import MarqueePage from './components/marquee';
import SwiperComponent from './components/slider';

import { Merriweather } from 'next/font/google';

/* Redux */
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './redux/store';
import { increment, decrement, reset } from './redux/features/counterSlice';

/* Context */
import { useTheme } from './context/ThemeContext';
import ToggleButton from './components/ToggleButton'; // 🎨 Theme toggle button

/* ------------------- Font Setup ---------------------- */
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

/* ------------------- Page Component ------------------ */
export default function HomePage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const { theme } = useTheme();

  return (
    <>
      {/* 🎨 Theme Switch Button (bottom-right) */}
      <ToggleButton />

      {/* 🌅 Main Slider */}
      <MainSlider />

      {/* 🏫 Section Heading */}
      <div
        className={`max-w-7xl mx-auto px-4 py-5 text-4xl font-extrabold ${
          theme === 'dark' ? 'text-white' : 'text-slate-800'
        } ${merriweather.className}`}
      >
        Collaborating with top Colleges & Universities
      </div>

      {/* 📰 Marquee & Swiper (optional) */}
      {/* <MarqueePage /> */}
      {/* <SwiperComponent /> */}

      {/* 🔢 Redux Counter Section */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold mb-4">Redux Counter: {count}</h2>
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
    </>
  );
}
