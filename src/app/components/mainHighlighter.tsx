"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ✅ Import navigation styles
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ Import arrow icons

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const MainSlider = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // ✅ Track loading

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.from("highlighter").select("*");

      if (error) {
        console.error("Error fetching images:", error);
        return;
      }

      setImages(data.map((item) => item.image_link.trim()));
      setIsLoaded(true); // ✅ Mark as loaded
    };

    fetchImages();
  }, []);

  // ✅ Only render after images are loaded
  if (!isLoaded) return null; 

  return (
    <div className="w-full h-[65vh] relative">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]} // ✅ Added Navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // ✅ Custom arrows
        spaceBetween={0}
        loop={images.length > 1}
        speed={700}
        slidesPerView={1}
        className="w-full h-[70vh]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center h-[70vh]">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={960} // Adjust height proportionally to maintain aspect ratio
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="swiper-pagination"></div>
      </div>

      {/* Custom Left Arrow */}
      <div className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer bg-black/70 p-3 rounded-full shadow-lg hover:scale-110 transition-all">
        <ChevronLeft className="text-white w-6 h-6" />
      </div>

      {/* Custom Right Arrow */}
      <div className="custom-next absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer bg-black/70 p-3 rounded-full shadow-lg hover:scale-110 transition-all">
        <ChevronRight className="text-white w-6 h-6" />
      </div>
    </div>
  );
};

export default MainSlider;
