"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
    { name: "All Products", slug: "all" },
    { name: "Men's Wear", slug: "mens-wear" },
    { name: "Women's Wear", slug: "womens-wear" },
    { name: "Kids' Wear", slug: "kids-wear" },
    { name: "Winter Collection", slug: "winter" },
    { name: "Summer Collection", slug: "summer" },
    { name: "Accessories", slug: "accessories" },
];

const CategoryTabs = ({ activeSlug }) => {
    const router = useRouter();
const [activeTab, setActiveTab] = useState(activeSlug || "all");
    const containerRef = useRef(null);

    console.log(router);

    useEffect(() => {
        setActiveTab(activeSlug || "all");
    }, [activeSlug]);

    // active tab auto scroll into view (mobile)
    useEffect(() => {
        const activeBtn = containerRef.current?.querySelector(
            `[data-slug="${activeTab}"]`
        );
        activeBtn?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
        });
    }, [activeTab]);

    return (
        <div className=" flex items-center justify-center">
            <div
                ref={containerRef}
                className="flex items-center  overflow-x-auto scrollbar-hide"
            >
                {categories.map((cat) => (
                    <button
                        key={cat.slug}
                        data-slug={cat.slug}
                        onClick={() => {
                            setActiveTab(cat.slug);
                            router.push(`/products/${cat.slug}`);
                        }}
                        className={`
                            whitespace-nowrap
                            px-4 sm:px-6
                            py-3
                            text-sm font-medium
                            transition
                            ${
                                activeTab === cat.slug
                                    ? "border-b-2 border-red-500 text-red-500"
                                    : "text-gray-600 hover:text-black"
                            }
                        `}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;