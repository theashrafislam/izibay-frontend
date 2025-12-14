"use client"
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import AddCartDrawer from "./AddCartDrawer"

const FeaturedProductCard = ({ product }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isShowButton, setIsShowButton] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const [selectedColor, setSelectedColor] = useState(null);
    // const isActiveImage = isHovered && product.hoverImage ? product.hoverImage : product.image;
    const isActiveImage =
        isDesktop && isHovered && product.hoverImage
            ? product.hoverImage
            : selectedColor
                ? selectedColor.image
                : product.image;


    // Check screen size for desktop
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        handleResize(); // initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className='flex items-center justify-center'>
            <div
                onMouseEnter={() => setIsShowButton(true)}
                onMouseLeave={() => setIsShowButton(false)}

                className="flex flex-col rounded-xl justify-between w-full md:w-56 lg:w-56 xl:w-64 2xl:w-72 h-[350px] sm:h-[380px] md:h-[400px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <div className=" h-3/5 w-full relative"
                    onMouseEnter={() => isDesktop && setIsHovered(true)}
                    onMouseLeave={() => isDesktop && setIsHovered(false)}
                >
                    {/* Save Badge */}
                    {product.discountPrice && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] text-xs font-bold px-2 py-1 rounded-full">
                            Save {Math.round(((product.price.replace(/[^\d]/g, '') - product.discountPrice.replace(/[^\d]/g, '')) / product.price.replace(/[^\d]/g, '')) * 100)}%
                        </div>
                    )}


                    {/* Image */}
                    <img
                        src={isActiveImage}
                        alt={product.name}
                        className="w-full h-full rounded-xl rounded-b-none object-cover transition-all duration-3000"
                    />

                    {/* button for desktop  */}
                    {isShowButton && <button className='absolute hidden lg:block text-nowrap rounded-full bg-red-500 px-4 text-[10px] font-bold text-white right-2 bottom-2 py-2'>Add to Cart</button>}

                    {/* Add to Cart Icon Button (Mobile & Tablet only) */}
                    <button className="absolute -bottom-4 right-3 bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition-colors duration-300 block lg:hidden">
                        <FiShoppingCart className="w-4 h-4" onClick={toggleCart} />
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
                                onClick={() => setSelectedColor(color)}
                                className={`w-5 h-5 rounded-full border cursor-pointer
    ${selectedColor?.id === color.id
                                        ? "border-black scale-110"
                                        : "border-gray-300"
                                    }
  `}
                                style={{ backgroundColor: color.hex }}
                            />
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