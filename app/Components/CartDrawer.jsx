import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./ui/Button"
import { BiSolidLock } from "react-icons/bi";

const CartDrawer = ({ isOpen, toggleCart }) => {

  const [noteOpen, setNoteOpen] = useState(false);

  const handleOrderNote = () => setNoteOpen(true);
  const closeNote = () => setNoteOpen(false);



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
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-red-100 transition"
          >
            <button
              disabled={noteOpen}
              className={`
    w-8 h-8 flex items-center justify-center rounded-full transition-all duration-150 
    ${noteOpen
                  ? "bg-red-500 cursor-not-allowed active:animate-shakeX active:scale-110 active:bg-gray-400"
                  : "bg-gray-200 hover:bg-gray-300 hover:scale-105"
                }
  `}
            >
              <IoClose className="text-xl" />
            </button>
          </button>
        </div>

        {/* Cart Content */}
        <div className="h-full flex flex-col overflow-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="p-4 pb-0">
            <h2 className="text-xl lg:text-2xl font-bold">Cart</h2>
          </div>

          {/* Example Items */}
          <div className="mt-2 py-4 space-y-4 px-4 overflow-y-auto flex-1">

            {[1, 2, 3, 4, 5].map((item, index) => (
              <div className="flex flex-row flex-wrap gap-3 w-full items-start">

                {/* Image */}
                <div className="flex-shrink-0 w-24 lg:w-[25%]">
                  <img
                    alt="product"
                    src="https://levin.com.bd/cdn/shop/files/web-1_95185acb-febc-44c1-8c3c-7f16d4b3cba6.jpg?v=1759825167&width=160"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Right Section: Text + Quantity */}
                <div className="flex flex-1 flex-row flex-wrap lg:flex-row lg:justify-between gap-4 w-full">

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col gap-2 min-w-[150px]">
                    <h4 className="text-[#1A1A1A] font-semibold">
                      3 Pcs Assorted Toddler Baby Boys Cotton Trouser
                    </h4>
                    <div className="flex items-end justify-between">
                      <div>
                        {/* Price & Discount */}
                        <div className="flex items-center gap-2">
                          <p className="text-[#1A1A1A] font-semibold text-sm">Tk 450.00</p>
                          <p className="text-[#EF4444] font-semibold text-sm line-through">Tk 500.00</p>
                        </div>
                        <p className="text-[#1A1A1AB3] text-sm text-nowrap">Pack of 3 / Newborn</p>
                        <p className="text-[#1A1A1AB3] text-sm">Machine washable / Baby safe dyes</p>
                      </div>
                      {/* Quantity + Remove */}
                      <div className="flex flex-col gap-2 items-center lg:items-end">
                        <p className="rounded-xl w-10 p-2 h-10 border border-[#1A1A1AB3] text-center font-semibold">
                          1
                        </p>
                        <p className="text-[12px] text-[#1A1A1AB3] relative cursor-pointer 
        before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-[#1A1A1AB3] before:transition-all before:duration-300 hover:before:w-full">
                          Remove
                        </p>
                      </div>
                    </div>

                  </div>


                </div>
              </div>
            ))}


          </div>

          {/* bottom content  */}
          <div className="space-y-2 border-t p-4 border-gray-300 sticky bottom-0 bg-white">
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

      {/* Order Note Drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full sm:w-[80%] lg:w-[45%] bg-white z-50 p-4 rounded-t-xl shadow-xl transition-transform duration-300 ${noteOpen ? "translate-y-0" : "translate-y-full"
          }`}
      >

        {/* Note content */}
        <div>
          <div className="flex items-center justify-between pb-2">
            <h5 className="text-xl font-semibold">Order Note</h5>
            {/* Close button */}
            <button onClick={closeNote} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition">
              <IoClose className="text-xl" />
            </button>
          </div>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
            rows={4}
            placeholder="Write your order note here..."
          ></textarea>
        </div>

        <Button name="Save Note" color="red" />
      </div>

      {/* Overlay for Note */}
      {noteOpen && <div onClick={closeNote} className="fixed inset-0 bg-black opacity-40 z-40"></div>}

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