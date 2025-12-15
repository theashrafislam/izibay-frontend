"use client";
import React, { useState } from "react";

const SizeSelector = ({
  sizes = ["S", "M", "L", "XL", "XXL"],
  defaultSize = "XXL",
  onChange,
}) => {
  const [activeSize, setActiveSize] = useState(defaultSize);

  const handleSizeChange = (size) => {
    setActiveSize(size);
    if (onChange) {
      onChange(size);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">
        Size: <span className="font-semibold">{activeSize}</span>
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeChange(size)}
            className={`rounded-full px-3 py-1.5 text-sm text-center border transition-all duration-200
              ${
                activeSize === size
                  ? "bg-black text-white border-black"
                  : "border-gray-300 hover:border-black hover:bg-black hover:text-white"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;