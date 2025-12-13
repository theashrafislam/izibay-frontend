"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Example slides array
const slides = [
  { id: 1, title: "Slide 1", image: "https://levin.com.bd/cdn/shop/files/web-banner-school-socks-web.jpg?v=1731831219&width=2000" },
  { id: 2, title: "Slide 2", image: "https://levin.com.bd/cdn/shop/files/web-banner-school-socks-web.jpg?v=1731831219&width=2000" },
  { id: 3, title: "Slide 3", image: "https://levin.com.bd/cdn/shop/files/web-banner-school-socks-web.jpg?v=1731831219&width=2000" },
  { id: 4, title: "Slide 4", image: "https://levin.com.bd/cdn/shop/files/web-banner-school-socks-web.jpg?v=1731831219&width=2000" },
];

export default function HeroSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ dynamicBullets: true, clickable: true }}
        
        autoplay={{ delay: 2000 }}
        loop
        className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 text-red-500 text-xl sm:text-2xl lg:text-4xl font-bold">
                <p>{slide.title}</p>
                <p>You can use any text, button and others.</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}