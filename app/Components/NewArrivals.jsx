import React from 'react';
import FeaturedProductsCard from './FeaturedProductCard';
import Pagination from './ui/Pagination';


const NewArrivals = () => {



    const products = [
        {
            id: 1,
            name: "Classic White T-Shirt",
            price: "Tk 299.00",
            discountPrice: "Tk 150.00",
            hoverImage: "https://cdn.othoba.com/images/thumbs/0505871_winter-blue-denim-jacket-for-men-women.webp",
            image:
                "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
            colors: ["#FFFFFF", "#000000", "#FF0000"],
        },
        {
            id: 2,
            name: "Denim Jacket",
            price: "Tk 299.00",
            hoverImage: "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
            image:
                "https://cdn.othoba.com/images/thumbs/0505871_winter-blue-denim-jacket-for-men-women.webp",
            colors: ["#1E3A8A", "#6B7280", "#F97316"],
        },
        {
            id: 3,
            name: "Casual Hoodie",
            price: "Tk 300.00",
            discountPrice: "Tk 200.00",
            hoverImage: "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
            image:
                "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            colors: ["#9CA3AF", "#111827", "#F59E0B"],
        },
        {
            id: 4,
            name: "Street Style Jacket",
            price: "Tk 299.00",
            hoverImage: "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            image:
                "https://www.byrdie.com/thmb/K2lavtBrr2pDT94hm7QFYNq7Kdk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Byrdie-Spring-Jacket-Trends-Colorful-Trench-e6f5c01385d441659a57fc1c1b788543-34d14e0ca6664b9b838be88036c9a689.jpg",
            colors: ["#374151", "#D97706", "#10B981"],
        },
        {
            id: 5,
            name: "Urban Fashion Tee",
            price: "Tk 299.00",
            discountPrice: "Tk 20.00",
            hoverImage: "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            image:
                "https://i5.walmartimages.com/seo/YOUNGLA-Mens-Hipster-Hip-Hop-Urban-Modern-Tees-Street-Fashion-Streetwear-Stylish-Longline-Print-T-Shirt_a24658d4-5673-4080-8d9f-5f2bc34fd45e.ec16aa7d6c141018f425a083ebbc77a0.jpeg",
            colors: ["#F87171", "#3B82F6", "#FACC15"],
        },
        {
            id: 6,
            name: "Classic White T-Shirt",
            price: "Tk 299.00",
            discountPrice: "Tk 150.00",
            hoverImage: "https://cdn.othoba.com/images/thumbs/0505871_winter-blue-denim-jacket-for-men-women.webp",
            image:
                "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
            colors: ["#FFFFFF", "#000000", "#FF0000"],
        },
        {
            id: 7,
            name: "Denim Jacket",
            price: "Tk 299.00",
            hoverImage: "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
            image:
                "https://cdn.othoba.com/images/thumbs/0505871_winter-blue-denim-jacket-for-men-women.webp",
            colors: ["#1E3A8A", "#6B7280", "#F97316"],
        },
        {
            id: 8,
            name: "Casual Hoodie",
            price: "Tk 300.00",
            discountPrice: "Tk 200.00",
            hoverImage: "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
            image:
                "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            colors: ["#9CA3AF", "#111827", "#F59E0B"],
        },
        {
            id: 9,
            name: "Street Style Jacket",
            price: "Tk 299.00",
            hoverImage: "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            image:
                "https://www.byrdie.com/thmb/K2lavtBrr2pDT94hm7QFYNq7Kdk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Byrdie-Spring-Jacket-Trends-Colorful-Trench-e6f5c01385d441659a57fc1c1b788543-34d14e0ca6664b9b838be88036c9a689.jpg",
            colors: ["#374151", "#D97706", "#10B981"],
        },
        {
            id: 10,
            name: "Urban Fashion Tee",
            price: "Tk 299.00",
            discountPrice: "Tk 20.00",
            hoverImage: "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            image:
                "https://i5.walmartimages.com/seo/YOUNGLA-Mens-Hipster-Hip-Hop-Urban-Modern-Tees-Street-Fashion-Streetwear-Stylish-Longline-Print-T-Shirt_a24658d4-5673-4080-8d9f-5f2bc34fd45e.ec16aa7d6c141018f425a083ebbc77a0.jpeg",
            colors: ["#F87171", "#3B82F6", "#FACC15"],
        },
        {
            id: 11,
            name: "Casual Hoodie",
            price: "Tk 300.00",
            discountPrice: "Tk 200.00",
            hoverImage: "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
            image:
                "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            colors: ["#9CA3AF", "#111827", "#F59E0B"],
        },
        {
            id: 12,
            name: "Street Style Jacket",
            price: "Tk 299.00",
            hoverImage: "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            image:
                "https://www.byrdie.com/thmb/K2lavtBrr2pDT94hm7QFYNq7Kdk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Byrdie-Spring-Jacket-Trends-Colorful-Trench-e6f5c01385d441659a57fc1c1b788543-34d14e0ca6664b9b838be88036c9a689.jpg",
            colors: ["#374151", "#D97706", "#10B981"],
        },
    ];



    return (
        <section className="py-10 bg-[#F0F0F0]">
            {/* Heading */}
            <div className="max-w-7xl mx-auto px-4 lg:px-0 text-start mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-center text-nowrap lg:text-start text-gray-900">
                    New Arrivals
                </h2>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 lg:px-0 grid gap-3 md:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-2 items-center md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <div key={index}>
                        <FeaturedProductsCard product={product} />
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center py-8'>
                <Pagination
                    // currentPage={currentPage}
                    currentPage={1}
                    // totalPages={totalPages}
                    totalPages={5}
                    // onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </section>
    );
};

export default NewArrivals;