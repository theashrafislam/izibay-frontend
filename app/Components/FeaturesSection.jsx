"use client";

import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const features = [
  {
    icon: <FaShippingFast className="text-3xl" />,
    title: "Fast Shipping",
    desc: "Delivering smiles faster than you can click 'Add to Cart'—experience the speed of our e-commerce shipping!",
  },
  {
    icon: <BiSupport className="text-3xl" />,
    title: "Top-notch Support",
    desc: "Where top-notch customer service is just a call away—because we believe every interaction should be exceptional",
  },
  {
    icon: <GrSecure className="text-3xl" />,
    title: "Secure payment",
    desc: "Our system provides a secure experience by keeping up to date with industry best practices.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-[#F0F0F0] py-16">
      {/* Desktop view */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-0 items-center justify-between text-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {feature.icon}
            <h4 className="font-semibold text-lg">{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet slider */}
      <div className="lg:hidden max-w-7xl mx-auto px-3 relative">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) => {
              return `<button class="${className} w-4 h-4 rounded-full mx-1 bg-black transition-all duration-300"></button>`;
            },
          }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-2 text-center">
                {feature.icon}
                <h4 className="font-semibold text-lg">{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination bottom */}
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </div>
  );
};

export default FeaturesSection;