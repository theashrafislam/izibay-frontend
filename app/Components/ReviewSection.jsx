"use client";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const reviews = [
  {
    id: 1,
    name: "Humayun Rashid",
    message: "Got the exact product I ordered. Recommended!",
  },
  {
    id: 2,
    name: "Sadia Akter",
    message: "Quality was great and delivery was fast!",
  },
  {
    id: 3,
    name: "Mehedi Hasan",
    message: "Affordable and premium at the same time.",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    message: "Very satisfied with the packaging and service.",
  },
];

export default function ReviewSection() {
  const [index, setIndex] = useState(0);

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[index];

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-medium text-center mb-6">
        Quality that Comes with Affordability!
      </h2>

      <div className="w-full max-w-md bg-[#1A1A1A0D] md:bg-white rounded-2xl p-6">
        <p className="text-gray-700 text-base md:text-lg italic leading-relaxed">
          "{current.message}"
        </p>
        <h4 className="mt-5 font-medium text-gray-900 text-right">
          — {current.name}
        </h4>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevReview}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <IoChevronBack size={20} />
          </button>

          <div className="flex gap-1">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-black" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={nextReview}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}