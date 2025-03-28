"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const MainSlider = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.from("highlighter").select("*");
      if (error) {
        console.error("Error fetching images:", error);
        return;
      }
      setImages(data.map((item) => item.image_link.trim()));
      setIsLoaded(true);
    };

    fetchImages();
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="relative w-full overflow-hidden">
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
      spaceBetween={0}
      loop={images.length > 1}
      speed={700}
      slidesPerView={1}
      className="w-full h-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <div className="w-full lg:h-[85vh] aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/7]">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
};


export default MainSlider;
