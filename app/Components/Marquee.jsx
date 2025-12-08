"use client"

import React, { useRef, useEffect, useState } from "react";

const Marquee = ({ text, speed = 50 }) => {
  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [text]);

  return (
    <div className="overflow-hidden w-full bg-gray-100 py-2">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          "--marquee-width": `${contentWidth}px`,
        }}
      >
        <span className="mx-4 font-bold text-lg text-red-600">{text}</span>
        <span className="mx-4 font-bold text-lg text-red-600">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;