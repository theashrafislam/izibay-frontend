"use client"
import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import AddCartDrawer from "./AddCartDrawer"

const FeaturedProductCard = ({ product }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className='flex items-center justify-center'>
            <div className="flex flex-col rounded-xl justify-between w-full md:w-56 lg:w-56 xl:w-64 2xl:w-72 h-[350px] sm:h-[380px] md:h-[400px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <div className="h-3/5 w-full relative">
                    {/* Save Badge */}
                    {product.discountPrice && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] text-xs font-bold px-2 py-1 rounded-full">
                            Save {Math.round(((product.price.replace(/[^\d]/g, '') - product.discountPrice.replace(/[^\d]/g, '')) / product.price.replace(/[^\d]/g, '')) * 100)}%
                        </div>
                    )}

                    <img
                        src={product?.image}
                        alt={product?.name}
                        className="w-full h-full rounded-xl rounded-b-none object-cover"
                    />

                    {/* Add to Cart Icon Button (Mobile & Tablet only) */}
                    <button className="absolute -bottom-4 right-3 bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition-colors duration-300 block md:hidden">
                        <FiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" onClick={toggleCart} />
                    </button>
                </div>

                {/* Product Info */}
                <div className="p-3 h-2/5 flex flex-col justify-end gap-1">

                    <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#1A1A1A]">
                        {product?.name}
                    </h3>

                    <p className="text-[#1A1A1AB3] flex flex-col text-xs sm:text-sm md:text-base">
                        {product.discountPrice ? (
                            <>
                                <span className="line-through mr-2">{product.price}</span>
                                <span className="text-red-500 font-semibold">{product.discountPrice}</span>
                            </>
                        ) : (
                            product.price
                        )}
                    </p>


                    {/* Color Dots */}
                    <div className="flex gap-2 mt-1">
                        {product?.colors?.map((color, index) => (
                            <span
                                key={index}
                                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300"
                                style={{ backgroundColor: color }}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
            {/* Cart Drawer */}
            <AddCartDrawer
                isOpen={isCartOpen}
                toggleDrawer={toggleCart}
                cartItems={[product]}
            />
        </div>
    );
};

export default FeaturedProductCard;