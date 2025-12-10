"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function SearchDrawer({ isOpen, toggle }) {
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSearchText(""); 
      setActiveTab("products");
    }
  }, [isOpen]);

  // Dummy Data
  const products = [
    { id: 1, name: "Women's Full Cup Non-Padded Lace Bra", price: 499, img: "https://levin.com.bd/cdn/shop/files/web-1_95185acb-febc-44c1-8c3c-7f16d4b3cba6.jpg" },
    { id: 2, name: "Womens Soft Non Foam Lace Bra", price: 499, img: "https://levin.com.bd/cdn/shop/files/blabla.jpg" },
    { id: 3, name: "Womens Regular Fit Wide Leg Nightwear Pajama", price: 299, img: "https://levin.com.bd/cdn/shop/files/pant.jpg" }
  ];

  const suggestions = ["Women bra", "Nightwear", "Cotton panties", "Pajama"];

  const collections = ["Women", "Nightwear", "Lingerie", "New Arrivals"];

  // Filter Logic
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredSuggestions = suggestions.filter(s => 
    s.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredCollections = collections.filter(c => 
    c.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={toggle}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-2 left-0 right-0 z-50 flex justify-center 
        transition-all duration-300
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] bg-white rounded-2xl shadow-xl p-4">

          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-700">Search for...</h2>
            <button onClick={toggle} className="p-2 rounded-full hover:bg-gray-200 transition">
              <IoClose className="text-xl" />
            </button>
          </div>

          {/* Search Field */}
          <div className="border-b border-gray-300 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products..."
              className="w-full py-2 text-gray-700 focus:outline-none"
            />

            {searchText && (
              <button
                onClick={() => setSearchText("")}
                className="text-sm text-gray-500 hover:text-black"
              >
                Clear
              </button>
            )}
          </div>

          {/* Tabs */}
          <div className="flex gap-5 mt-3 text-gray-700 font-medium">
            <button
              onClick={() => setActiveTab("products")}
              className={`${activeTab === "products" ? "text-black underline" : "text-gray-400"}`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("suggestions")}
              className={`${activeTab === "suggestions" ? "text-black underline" : "text-gray-400"}`}
            >
              Suggestions
            </button>

            <button
              onClick={() => setActiveTab("collections")}
              className={`${activeTab === "collections" ? "text-black underline" : "text-gray-400"}`}
            >
              Collections
            </button>
          </div>

          {/* Results Area (Not Full Height) */}
          <div className="mt-3 max-h-[60vh] overflow-y-auto pr-2 space-y-5">

            {/* PRODUCTS */}
            {activeTab === "products" && (
              <div>
                <div className="space-y-4">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                      <div key={item.id} className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                        <img src={item.img} className="w-20 h-20 object-cover rounded" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-500">Tk {item.price}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-center">No products found</p>
                  )}
                </div>
              </div>
            )}

            {/* SUGGESTIONS */}
            {activeTab === "suggestions" && (
              <ul className="space-y-3">
                {filteredSuggestions.length ? (
                  filteredSuggestions.map((s, i) => (
                    <li key={i} className="cursor-pointer text-gray-600 hover:text-black">
                      {s}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-400 text-center">No suggestions found</p>
                )}
              </ul>
            )}

            {/* COLLECTIONS */}
            {activeTab === "collections" && (
              <ul className="space-y-3">
                {filteredCollections.length ? (
                  filteredCollections.map((c, i) => (
                    <li key={i} className="cursor-pointer text-gray-600 hover:text-black">
                      {c}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-400 text-center">No collections found</p>
                )}
              </ul>
            )}

          </div>
        </div>
      </div>
    </>
  );
}