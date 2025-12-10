"use client";
import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

export default function SearchDrawer({ isOpen, toggle }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={toggle}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Search Drawer */}
      <div
        className={`fixed top-2 left-0 right-0 z-50 flex justify-center 
        transition-all duration-300 
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] bg-white rounded-2xl shadow-xl p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-700">Search for...</h2>

            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <IoClose className="text-xl" />
            </button>
          </div>

          <div className="border-b border-gray-300">
            <input
              ref={inputRef}
              type="text"
              placeholder=""
              className="w-full text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}