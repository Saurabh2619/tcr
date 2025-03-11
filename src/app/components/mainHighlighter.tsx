"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

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
    <div className="w-full h-[50vh] relative">
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true, dynamicBullets: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    spaceBetween={0}
    loop={images.length > 1}
    speed={700}
    slidesPerView={1}
    className="w-full h-full"
  >
    {images.map((img, index) => (
      <SwiperSlide key={index} className="flex justify-center items-center h-full">
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
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
    <div className="swiper-pagination"></div>
  </div>
</div>


  );
};

export default MainSlider;
