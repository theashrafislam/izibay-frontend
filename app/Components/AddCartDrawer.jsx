import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import Button from './ui/Button';

const AddCartDrawer = ({ isOpen, toggleDrawer, cartItems = [] }) => {
    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const price = "Tk 299.00";
    const discountPrice = "Tk 150.00";

    return (
        <>
            {/* Drawer */}
            <div
                className={`fixed bottom-0 left-0 w-full h-[70vh] bg-white shadow-xl transition-transform duration-300 tranform z-50 ${isOpen ? 'translate-y-0' : 'translate-y-full'} rounded-t-3xl`}
            >
                {/* Close Button */}
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 z-50 ${isOpen ? '' : 'hidden'}`}>
                    <button
                        className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-red-100 transition"
                        onClick={toggleDrawer}
                    >
                        <IoClose className="text-2xl" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto flex flex-col h-full pt-8 px-6">

                    <div className='flex items-start gap-2'>
                        <div className='w-[30%]'>
                            <img src="https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066" alt="" />
                        </div>
                        <div className='w-[60%] flex flex-col gap-2'>
                            <h4 className='font-bold'>Baby Cotton Sleeping Bag with Warm Padding</h4>
                            <p className="text-[#1A1A1AB3] flex flex-col text-xs sm:text-sm md:text-base">
                                {discountPrice ? (
                                    <>
                                        <span className="line-through mr-2">{price}</span>
                                        <span className="text-red-500 font-semibold">{discountPrice}</span>
                                    </>
                                ) : (
                                    price
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="mt-4 border-gray-200 grow" />

                    <div className='flex flex-col gap-2'>
                        {/* Color */}
<div className="flex flex-col gap-2">
  {(() => {
    const colors = [
      { name: "White", value: "bg-white" },
      { name: "Gray", value: "bg-gray-400" },
      { name: "Black", value: "bg-black" },
      { name: "Golden Olive", value: "bg-[#8B7D2B]" },
    ];

    const [activeColor, setActiveColor] = useState(colors[2]);

    return (
      <>
        <p className="text-sm font-medium">
          Color: <span className="font-semibold">{activeColor.name}</span>
        </p>

        <div className="flex gap-3">
          {colors.map((color) => (
            <div
              key={color.name}
              onClick={() => setActiveColor(color)}
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition
                ${
                  activeColor.name === color.name
                    ? "border-2 border-black"
                    : "border border-gray-300 hover:border-black"
                }`}
            >
              <div className={`w-5 h-5 rounded-full ${color.value}`}></div>
            </div>
          ))}
        </div>
      </>
    );
  })()}
</div>

                        {/* Size */}
                        <div className="flex flex-col gap-2">
                            {(() => {
                                const [activeSize, setActiveSize] = useState("XXL");

                                return (
                                    <>
                                        <p className="text-sm font-medium">
                                            Size: <span className="font-semibold">{activeSize}</span>
                                        </p>

                                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                                            {["S", "M", "L", "XL", "XXL"].map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setActiveSize(size)}
                                                    className={`rounded-full px-3 py-1.5 text-sm text-center border transition-all duration-200
                ${activeSize === size
                                                            ? "bg-black text-white border-black"
                                                            : "border-gray-300 hover:border-black hover:bg-black hover:text-white"
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </div>

                    <div className='py-4'>
                        <Button name={"Add to Cart"} color={'red'} />
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"
                    onClick={toggleDrawer}
                ></div>
            )}
        </>
    );
};

export default AddCartDrawer;