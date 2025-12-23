"use client";
import React from 'react';
import { useState } from "react";
import { FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const reviews = [
    {
        id: 1,
        rating: 4,
        text: "Soft, comfortable. Bit if full sleeve then it would be better",
        name: "Md. Akter Uz Zaman Shaon",
        verified: true,
        product: "Womens Casual Side Slit Ribbed Midi Dress",
    },
    {
        id: 2,
        rating: 5,
        text: "Very good quality fabric. Loved it!",
        name: "Ayesha Rahman",
        verified: true,
        product: "Cotton Casual Midi Dress",
    },
];

const CustomerReviews = () => {

    const [index, setIndex] = useState(0);
    const review = reviews[index];

    const next = () => setIndex((prev) => (prev + 1) % reviews.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);


    return (
        <section className="w-full px-4 lg:px-0 py-10">
            <div className="max-w-5xl mx-auto text-center">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                    Customers are saying
                </h2>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-8">
                    <div className="flex text-[#ffe234]">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <span className="font-medium">4.70</span>
                    <span>(306)</span>
                    <span className="text-[#0866ff] font-medium">✔ Verified</span>
                </div>

                {/* Review Card */}
                <div className="relative bg-white rounded-2xl shadow-sm px-6 py-10 md:px-14">
                    <div className="text-[#0866ff] text-4xl mb-4">“</div>

                    <p className="text-gray-800 text-base md:text-lg mb-6">
                        {review.text}
                    </p>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 text-[#ffe234] mb-4">
                        {[...Array(5)].map((_, i) =>
                            i < review.rating ? (
                                <FaStar key={i} />
                            ) : (
                                <FaRegStar key={i} />
                            )
                        )}
                    </div>

                    {/* User */}
                    <div className="text-sm md:text-base font-semibold">
                        {review.name}{" "}
                        {review.verified && (
                            <span className="text-[#0866ff]">✔</span>
                        )}
                    </div>

                    <p className="text-sm text-gray-500 underline mt-1">
                        {review.product}
                    </p>

                    {/* Navigation */}
                    <div className="absolute inset-y-0 left-3 flex items-center">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full hover:bg-gray-100 transition"
                        >
                            <FaChevronLeft />
                        </button>
                    </div>

                    <div className="absolute inset-y-0 right-3 flex items-center">
                        <button
                            onClick={next}
                            className="p-2 rounded-full hover:bg-gray-100 transition"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;