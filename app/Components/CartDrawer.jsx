import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const CartDrawer = ({ isOpen, toggleCart }) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-2 right-2 left-2 bottom-2 ${isOpen ? "" : "h-full w-full"} rounded-xl bg-white transition-transform duration-300 z-50 
          ${isOpen ? "translate-x-0" : "translate-x-full"} p-1`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleCart}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-red-100 transition"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="h-full overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <p className="text-gray-600">Cart items will appear here...</p>
          {/* Example Items */}
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
              <span>Item 1</span>
              <span>$25</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
              <span>Item 2</span>
              <span>$15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black opacity-40 z-40"
        ></div>
      )}
    </>
  );
};

export default CartDrawer;