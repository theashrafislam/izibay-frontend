import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./ui/Button"
import { BiSolidLock } from "react-icons/bi";

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

  const handleOrderNote = () => {
    console.log("Hello I am clicked")
  }

  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 
    w-full sm:w-[80%] lg:w-[45%]   /* Responsive width */
    bg-white 
    transition-transform duration-300 z-50
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
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
        <div className="h-full overflow-y-auto flex flex-col scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
          </div>

          {/* Example Items */}
          <div className="mt-4 space-y-4 grow px-4">
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
              <span>Item 1</span>
              <span>$25</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
              <span>Item 2</span>
              <span>$15</span>
            </div>
          </div>

          {/* bottom content  */}
          <div className="space-y-2 border-t p-4 border-gray-300 fixed bottom-0 right-0 left-0">
            <div className="flex items-center justify-between text-[#1A1A1A]">
              <h4 className="text-lg lg:text-2xl font-semibold">Total</h4>
              <h4 className="text-lg lg:text-2xl font-semibold">Tk 450.00 BDT</h4>
            </div>
            <p className="text-[#1A1A1AB3] text-sm">Taxes and shipping calculated at checkout</p>
            <p className="text-[#1A1A1AB3] text-sm cursor-pointer underline" onClick={handleOrderNote}>Add order note</p>

            {/* button  */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex-1">
                <Button name="View Cart" color="black" />
              </div>
              <div className="flex-1">
                <Button name="Check Out" color="red" icon={<BiSolidLock className="text-lg" />} />
              </div>
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