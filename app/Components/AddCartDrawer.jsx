"use client"

import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import Button from './ui/Button';
import SizeSelector from "./ui/SizeSelector"
import ColorSelector from "./ColorSelector"

const AddCartDrawer = ({ isOpen, toggleDrawer, cartItems = [] }) => {

    const [quantity, setQuantity] = useState(1);
    const product = {
        inStock: true
    }

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
    const discountPrice = "Tk 180.00";

    const originalPrice = Number(price?.replace(/[^\d]/g, ''));
    const discountedPrice = Number(discountPrice?.replace(/[^\d]/g, ''));

    const savePercent =
        discountPrice
            ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
            : 0;

    return (
        <>
            {/* Drawer */}
            <div
                onClick={(e) => e.preventDefault()}
                className={`fixed bottom-0 left-0 w-full h-[75vh] bg-white shadow-xl transition-transform duration-300 tranform z-50 ${isOpen ? 'translate-y-0' : 'translate-y-full'} rounded-t-3xl lg:hidden`}
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
                <div
                    onClick={(e) => e.preventDefault()}
                    className="overflow-y-auto flex flex-col h-full pt-8 px-6">

                    <div className='flex items-start gap-2'>
                        <div className='w-[30%] h-30 md:h-32 lg:h-40'>
                            <img src="https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066" alt="" className=' h-full w-full object-contain' />
                        </div>
                        <div className='w-[60%] flex flex-col gap-2'>
                            <h4 className='font-bold'>Baby Cotton Sleeping Bag with Warm Padding</h4>
                            <p className="text-[#1A1A1AB3] flex flex-col text-xs sm:text-sm md:text-base">
                                {discountPrice ? (
                                    <>
                                        <span className="line-through">{price}</span>

                                        <span className="text-red-500 font-semibold">
                                            {discountPrice}
                                            <span className="ml-2 text-green-600 text-xs font-medium">
                                                (Save {savePercent}%)
                                            </span>
                                        </span>
                                    </>
                                ) : (
                                    price
                                )}
                            </p>

                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-3 border-gray-200 grow" />

                    <div className='flex flex-col gap-2'>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2">
                            <span
                                className={`w-2.5 h-2.5 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"
                                    }`}
                            ></span>

                            <p
                                className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {product.inStock ? "In Stock" : "Out of Stock"}
                            </p>
                        </div>

                        {/* Short Description */}
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-gray-700">
                                Classic white T-Shirt made from 100% cotton, comfortable and stylish.
                                Perfect for casual wear, available in multiple colors and sizes.
                            </p>
                        </div>

                        {/* color  */}
                        <ColorSelector />

                        {/* Size */}

                        <SizeSelector />
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col py-2 gap-2">
                        <p className="text-sm font-medium">Quantity</p>

                        <div className="flex items-center justify-center gap-3">
                            {/* Minus */}
                            <div
                                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer
                 hover:bg-black hover:text-white transition"
                            >
                                −
                            </div>

                            {/* Quantity Value */}
                            <div className="w-10 text-center font-semibold">{quantity}</div>

                            {/* Plus */}
                            <div
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer
                 hover:bg-black hover:text-white transition"
                            >
                                +
                            </div>
                        </div>
                    </div>

                    <div className='py-4'>
                        <Button name={"Add to Cart"} color={'red'} />
                    </div>
                </div>
            </div>


            {/* FOR ONLY DESKTOP */}
            {/* ===== DESKTOP ONLY DRAWER ===== */}
            <div
      className={`
        fixed top-0 right-0 h-full w-[420px]
        bg-white z-50
        transition-all duration-300 ease-out
        hidden lg:flex flex-col
        ${isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto shadow-xl"
          : "translate-x-full opacity-0 pointer-events-none"
        }
      `}
    >
      {/* ===== HEADER ===== */}
      <div className="relative border-b border-gray-200 p-4 shrink-0">
        <div className="absolute top-2 left-1/2 -translate-x-1/2">
          <span className="block w-10 h-1 rounded-full bg-gray-300"></span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <h3 className="text-lg font-semibold">Add to Cart</h3>

          <button
            onClick={toggleDrawer}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-100 transition"
          >
            <IoClose className="text-xl" />
          </button>
        </div>
      </div>

      {/* ===== SCROLLABLE CONTENT ===== */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* Product Info */}
        <div className="flex gap-3">
          <div className="w-[35%]">
            <img
              src="https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066"
              alt=""
              className="w-full h-full object-contain rounded-md"
            />
          </div>

          <div className="w-[65%] flex flex-col gap-2">
            <h4 className="font-semibold text-sm leading-snug">
              Baby Cotton Sleeping Bag with Warm Padding
            </h4>

            <p className="text-sm text-[#1A1A1AB3]">
              <span className="line-through block">Tk 299.00</span>
              <span className="text-red-500 font-semibold">
                Tk 180.00
                <span className="ml-2 text-green-600 text-xs">(Save 40%)</span>
              </span>
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Stock */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
          <p className="text-sm font-medium text-green-600">In Stock</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">
          Classic white T-Shirt made from 100% cotton, comfortable and stylish.
          Perfect for casual wear, available in multiple colors and sizes.
        </p>

        {/* Color & Size */}
        <ColorSelector />
        <SizeSelector />

        {/* Quantity */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Quantity</p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-9 h-9 border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
            >
              −
            </button>

            <span className="font-semibold">{quantity}</span>

            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-9 border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* ===== FOOTER CTA ===== */}
      <div className="border-t border-gray-200 p-4 shrink-0 bg-white">
        <Button name="Add to Cart" color="red" />
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