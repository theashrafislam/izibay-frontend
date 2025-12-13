"use client";

import React from "react";

// Example product data
const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        price: "Tk 299.00",
        image:
            "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
        colors: ["#FFFFFF", "#000000", "#FF0000"],
    },
    {
        id: 2,
        name: "Denim Jacket",
        price: "Tk 299.00",
        image:
            "https://cdn.othoba.com/images/thumbs/0505871_winter-blue-denim-jacket-for-men-women.webp",
        colors: ["#1E3A8A", "#6B7280", "#F97316"],
    },
    {
        id: 3,
        name: "Casual Hoodie",
        price: "Tk 299.00",
        image:
            "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
        colors: ["#9CA3AF", "#111827", "#F59E0B"],
    },
    {
        id: 4,
        name: "Street Style Jacket",
        price: "Tk 299.00",
        image:
            "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/03/2560x1280/landscape-1453234125-hbz-milan-street-index.jpg?resize=1800:*",
        colors: ["#374151", "#D97706", "#10B981"],
    },
    {
        id: 5,
        name: "Urban Fashion Tee",
        price: "Tk 299.00",
        image:
            "https://i5.walmartimages.com/seo/YOUNGLA-Mens-Hipster-Hip-Hop-Urban-Modern-Tees-Street-Fashion-Streetwear-Stylish-Longline-Print-T-Shirt_a24658d4-5673-4080-8d9f-5f2bc34fd45e.ec16aa7d6c141018f425a083ebbc77a0.jpeg",
        colors: ["#F87171", "#3B82F6", "#FACC15"],
    },
];



const FeaturedProducts = () => {
    return (
        <section className="py-16 bg-[#F0F0F0]">
            {/* Heading */}
            <div className="max-w-7xl mx-auto px-4 lg:px-0 text-start mb-10">
                <h2 className="text-3xl font-bold text-center text-nowrap lg:text-start text-gray-900">
                    Featured Products
                </h2>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 lg:px-0 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col rounded-xl justify-between w-full lg:w-60 h-[400px] bg-white">
                        <div className="h-4/6 w-full">
                            <img
                                src={product?.image}
                                alt={product?.name}
                                className="w-full h-full rounded-xl rounded-b-none object-cover"
                            />
                        </div>
                        <div className="p-3 h-2/6 flex flex-col justify-end gap-1">

                            {/* info  */}
                            <h3 className="font-semibold text-xl text-[#1A1A1A]">{product?.name}</h3>
                            <p className="text-[#1A1A1AB3]">{product?.price}</p>

                            {/* Color dots */}
                            <div className="flex gap-2 mt-1">
                                {product?.colors?.map((color, index) => (
                                    <span
                                        key={index}
                                        className="w-4 h-4 rounded-full border border-gray-300"
                                        style={{ backgroundColor: color }}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;