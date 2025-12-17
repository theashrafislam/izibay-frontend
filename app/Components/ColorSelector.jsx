// "use client"

// import React from 'react';
// import { useState } from 'react';

// const ColorSelector = () => {
    
//     return (
//         <div>
//             {/* Color */}
//             <div className="flex flex-col gap-2">
//                 {(() => {
//                     const colors = [
//                         { name: "White", value: "bg-white" },
//                         { name: "Gray", value: "bg-gray-400" },
//                         { name: "Black", value: "bg-black" },
//                         { name: "Golden Olive", value: "bg-[#8B7D2B]" },
//                     ];

//                     const [activeColor, setActiveColor] = useState(colors[2]);

//                     return (
//                         <>
//                             <p className="text-sm font-medium">
//                                 Color: <span className="font-semibold">{activeColor.name}</span>
//                             </p>

//                             <div className="flex gap-3 items-center justify-center">
//                                 {colors.map((color) => (
//                                     <div
//                                         key={color.name}
//                                         onClick={() => setActiveColor(color)}
//                                         className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition
//                 ${activeColor.name === color.name
//                                                 ? "border-2 border-black"
//                                                 : "border border-gray-300 hover:border-black"
//                                             }`}
//                                     >
//                                         <div className={`w-5 h-5 rounded-full ${color.value}`}></div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </>
//                     );
//                 })()}
//             </div>
//         </div>
//     );
// };

// export default ColorSelector;


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
                ${
                  isActive
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
