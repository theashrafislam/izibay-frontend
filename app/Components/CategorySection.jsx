"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        name: "Men's Wear",
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Women's Wear",
        image:
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Kids' Wear",
        image:
            "https://images.unsplash.com/photo-1530845645774-eed359045642?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Winter Collection",
        image:
            "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Summer Collection",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Accessories",
        image:
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=60",
    },
];

export default function CategorySection() {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <h2 className="text-2xl lg:text-3xl font-bold text-center text-nowrap lg:text-start mb-6">Shop by Category</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-5">
                    {categories.map((item, index) => (
                        <Link key={index} href={`/category/${item.name.toLowerCase().replace(/'/g, "").replace(/\s+/g, "-")}`}>
                            <div
                                className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition p-3 border"
                            >
                                <div className="w-full h-32 relative rounded-lg overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition"
                                    />
                                </div>

                                <h3 className="text-center text-nowrap mt-3 text-sm font-medium group-hover:text-blue-600">
                                    {item.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}