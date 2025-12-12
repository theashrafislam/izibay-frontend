"use client";

import React, { useRef, useState, useEffect } from "react";
import { BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

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
    title: "Secure Payment",
    desc: "Our system provides a secure experience by keeping up to date with industry best practices.",
  },
];

const FeaturesSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollX = sliderRef.current.scrollLeft;
    const width = sliderRef.current.offsetWidth;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F0F0F0] py-16 overflow-x-hidden">

      {/* Desktop View */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-3 items-center justify-between text-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-2 max-w-sm">
            {feature.icon}
            <h4 className="font-semibold text-lg">{feature.title}</h4>
            <p className="text-base">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden max-w-7xl mx-auto px-3">
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-w-full bg-white rounded-xl py-8 px-5 text-center shadow-md snap-center"
            >
              <div className="flex flex-col items-center gap-2">
                {feature.icon}
                <h4 className="font-semibold text-lg">{feature.title}</h4>
                <p className="text-sm md:text-base whitespace-normal break-words">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {features.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-black scale-125" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;