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
  { id: 1, name: "Men's Casual T-Shirt", price: 399, img: "https://i.pinimg.com/736x/d2/57/65/d25765e9a7d8d3146e00cde65a9e449c.jpg" },
  { id: 2, name: "Women's Graphic Tee", price: 449, img: "https://images-cdn.ubuy.co.in/681c55deb0cf0b705a047ec3-women-s-graphic-tees-letter-print-summer.jpg" },
  { id: 3, name: "Men's Formal Shirt", price: 799, img: "https://img.drz.lazcdn.com/static/bd/p/c4b875781df35fc5e570279d55747439.jpg_720x720q80.jpg" },
  { id: 4, name: "Women's Casual Shirt", price: 699, img: "https://5.imimg.com/data5/SELLER/Default/2022/12/WP/KD/ND/181659218/women-casual-shirt-1000x1000.jpeg" },
  { id: 5, name: "Men's Denim Jacket", price: 1299, img: "https://5.imimg.com/data5/SELLER/Default/2022/12/WP/KD/ND/181659218/women-casual-shirt-1000x1000.jpeg" },
  { id: 6, name: "Women's Winter Coat", price: 1899, img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/woman-1867093_1280.jpg" },
  { id: 7, name: "Men's Hoodie", price: 899, img: "https://cdn.pixabay.com/photo/2015/09/02/13/05/man-918625_1280.jpg" },
  { id: 8, name: "Women's Pullover Sweater", price: 999, img: "https://cdn.pixabay.com/photo/2016/11/29/06/25/woman-1866896_1280.jpg" },
  { id: 9, name: "Men's Cargo Pants", price: 749, img: "https://cdn.pixabay.com/photo/2017/06/16/11/40/fashion-2405945_1280.jpg" },
  { id: 10, name: "Women's Slim Fit Pants", price: 699, img: "https://cdn.pixabay.com/photo/2016/11/19/17/21/girl-1838555_1280.jpg" },
  { id: 11, name: "Men's Leather Jacket", price: 2199, img: "https://cdn.pixabay.com/photo/2016/03/27/22/22/jacket-1284045_1280.jpg" },
  { id: 12, name: "Women's Trench Coat", price: 1999, img: "https://cdn.pixabay.com/photo/2017/08/07/22/31/model-2606672_1280.jpg" },
  { id: 13, name: "Men's Polo Shirt", price: 599, img: "https://cdn.pixabay.com/photo/2016/03/27/22/22/polo-shirt-1284046_1280.jpg" },
  { id: 14, name: "Women's Blouse", price: 549, img: "https://cdn.pixabay.com/photo/2016/03/27/22/22/blouse-1284047_1280.jpg" },
  { id: 15, name: "Men's Winter Coat", price: 2499, img: "https://cdn.pixabay.com/photo/2017/06/12/07/32/man-2399726_1280.jpg" },
  { id: 16, name: "Women's Hoodie", price: 899, img: "https://cdn.pixabay.com/photo/2017/08/02/19/09/fashion-2571195_1280.jpg" },
  { id: 17, name: "Men's Chinos Pants", price: 699, img: "https://cdn.pixabay.com/photo/2017/03/31/20/15/fashion-2192330_1280.jpg" },
  { id: 18, name: "Women's Maxi Dress", price: 1299, img: "https://cdn.pixabay.com/photo/2016/11/19/17/21/girl-1838554_1280.jpg" },
  { id: 19, name: "Men's Sweatshirt", price: 799, img: "https://cdn.pixabay.com/photo/2015/11/07/11/08/sweatshirt-1031619_1280.jpg" },
  { id: 20, name: "Women's Cardigan", price: 999, img: "https://cdn.pixabay.com/photo/2016/03/27/22/22/cardigan-1284048_1280.jpg" }
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

          {/* Results Area */}
          <div className="mt-3 max-h-[60vh] overflow-y-auto pr-2 space-y-5">
            {searchText ? (
              <>
                {/* PRODUCTS */}
                {activeTab === "products" && (
                  <div className="space-y-4">
                    {filteredProducts.length ? (
                      filteredProducts.map(item => (
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
              </>
            ) : (
              <p className="text-gray-400 text-center">Start typing to see results</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}