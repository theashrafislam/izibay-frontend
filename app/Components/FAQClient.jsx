"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQClient = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex-1 bg-[#1A1A1A0D] p-6 md:p-8 rounded-xl">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <span className="font-medium text-gray-800">{item.question}</span>
            <span className="text-gray-500">
              {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQClient;