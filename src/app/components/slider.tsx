"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Initialize Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SwiperComponent = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.from("carousel").select("*");

      if (error) {
        console.error("Error fetching images:", error);
        return;
      }

      setImages(data.map((item) => item.image_url));
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 relative ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ el: ".custom-pagination", clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        loop={images.length > 1}
        speed={600}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="rounded-lg shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={600}
              height={300}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination Container */}
      <div className="custom-pagination flex justify-center space-x-2 mt-4"></div>
    </div>
    
  );
};

export default SwiperComponent;