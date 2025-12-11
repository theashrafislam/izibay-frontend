// components/ProductSlider.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Swiper v10+ correct import
import "swiper/css";

const ProductSlider = () => {

    const products = [
        { id: 1, name: "Men's Casual T-Shirt", price: 399, img: "https://i.pinimg.com/736x/d2/57/65/d25765e9a7d8d3146e00cde65a9e449c.jpg" },
  { id: 2, name: "Women's Graphic Tee", price: 449, img: "https://images-cdn.ubuy.co.in/681c55deb0cf0b705a047ec3-women-s-graphic-tees-letter-print-summer.jpg" },
  { id: 3, name: "Men's Formal Shirt", price: 799, img: "https://img.drz.lazcdn.com/static/bd/p/c4b875781df35fc5e570279d55747439.jpg_720x720q80.jpg" },
  { id: 4, name: "Women's Casual Shirt", price: 699, img: "https://5.imimg.com/data5/SELLER/Default/2022/12/WP/KD/ND/181659218/women-casual-shirt-1000x1000.jpeg" },
  { id: 5, name: "Men's Denim Jacket", price: 1299, img: "https://5.imimg.com/data5/SELLER/Default/2022/12/WP/KD/ND/181659218/women-casual-shirt-1000x1000.jpeg" },
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                640: { slidesPerView: 2 },   // sm+
                768: { slidesPerView: 3 },   // md+
                1024: { slidesPerView: 4 },  // lg+
            }}
        >
            {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <div className="p-2 bg-white rounded-lg shadow-md flex flex-col items-center">
                        <div className="w-full h-48 overflow-hidden rounded-lg">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <h3 className="mt-3 font-semibold text-gray-700 text-center">
                            {product.name}
                        </h3>
                        <p className="mt-1 text-red-600 font-medium">৳{product.price}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductSlider;