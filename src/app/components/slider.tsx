"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Swiper, SwiperSlide } from "swiper/react";
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
    <div className="w-full max-w-6xl mx-auto p-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={15} // Add spacing between slides
        loop={images.length > 1} // Enable loop only if more than 1 image
        speed={700}
        breakpoints={{
          320: { slidesPerView: 1 }, // 📱 Mobile: Show 1 image
          640: { slidesPerView: 2 }, // 📱 Bigger Mobile: Show 2 images
          768: { slidesPerView: 3 }, // 📱 Tablets: Show 3 images
          1024: { slidesPerView: 4 }, // 💻 Laptops: Show 4 images
          1280: { slidesPerView: 5 }, // 🖥️ Large Screens: Show 5 images
        }}
        className="rounded-lg shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    
    </div>
  );
};

export default SwiperComponent;
