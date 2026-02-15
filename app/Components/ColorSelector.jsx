"use client";


import React, { useState } from "react";

const ColorSelector = ({
  colors = [
    { name: "White", value: "bg-white" },
    { name: "Gray", value: "bg-gray-400" },
    { name: "Black", value: "bg-black" },
    { name: "Golden Olive", value: "bg-[#8B7D2B]" },
  ],
  defaultColor = "Black",
  onChange,
}) => {
  const [activeColor, setActiveColor] = useState(
    colors.find((c) => c.name === defaultColor) || colors[0]
  );

  const handleColorChange = (color) => {
    setActiveColor(color);
    onChange?.(color);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <p className="text-sm font-medium">
        Color: <span className="font-semibold">{activeColor.name}</span>
      </p>

      {/* Fixed layout */}
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => {
          const isActive = activeColor.name === color.name;

          return (
            <button
              key={color.name}
              onClick={() => handleColorChange(color)}
              className={`flex items-center gap-2 h-9 px-4 rounded-full border text-sm transition-all
                ${isActive
                  ? "bg-black text-white border-black"
                  : "border-gray-300 hover:border-black"
                }`}
            >
              {/* Fixed color dot */}
              <span
                className={`w-4 h-4 rounded-full border flex-shrink-0
                  ${color.value}
                  ${isActive ? "border-white" : "border-gray-300"}
                `}
              />

              {/* Fixed text */}
              <span className="whitespace-nowrap leading-none">
                {color.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;
