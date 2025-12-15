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
            colors: [
                {
                    id: "red",
                    hex: "#F87171",
                    image: "https://ih1.redbubble.net/image.5056064879.0015/ssrco,classic_tee,womens_02,dd2121:8219e99865,front,product_square,x600.1.jpg"
                },
                {
                    id: "blue",
                    hex: "#3B82F6",
                    image: "https://www.oxfordshirt.co.uk/cdn/shop/files/mens-classic-t-shirt-in-cornflower-blue-5442025.jpg?v=1758946802&width=1946"
                },
                {
                    id: "yellow",
                    hex: "#FACC15",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_O1rBNThvrsrZk5GwjvusjMaG3UpMg-f_g&s"
                }
            ]
        },
        {
            id: 2,
            name: "Denim Jacket",
            price: "Tk 299.00",
            hoverImage: "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
            image:
                "https://cdn.othoba.com/images/thumbs/0505871_winter-blue-denim-jacket-for-men-women.webp",
            colors: [
                {
                    id: "red",
                    hex: "#F87171",
                    image: "https://ih1.redbubble.net/image.5056064879.0015/ssrco,classic_tee,womens_02,dd2121:8219e99865,front,product_square,x600.1.jpg"
                },
                {
                    id: "blue",
                    hex: "#3B82F6",
                    image: "https://www.oxfordshirt.co.uk/cdn/shop/files/mens-classic-t-shirt-in-cornflower-blue-5442025.jpg?v=1758946802&width=1946"
                },
                {
                    id: "yellow",
                    hex: "#FACC15",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_O1rBNThvrsrZk5GwjvusjMaG3UpMg-f_g&s"
                }
            ]
        },
        {
            id: 3,
            name: "Casual Hoodie",
            price: "Tk 300.00",
            discountPrice: "Tk 200.00",
            hoverImage: "https://nobero.com/cdn/shop/files/white_855177b5-5621-4a4b-a0d1-9060b89a6a69.jpg?v=1711979035&width=1066",
            image:
                "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            colors: [
                {
                    id: "red",
                    hex: "#F87171",
                    image: "https://ih1.redbubble.net/image.5056064879.0015/ssrco,classic_tee,womens_02,dd2121:8219e99865,front,product_square,x600.1.jpg"
                },
                {
                    id: "blue",
                    hex: "#3B82F6",
                    image: "https://www.oxfordshirt.co.uk/cdn/shop/files/mens-classic-t-shirt-in-cornflower-blue-5442025.jpg?v=1758946802&width=1946"
                },
                {
                    id: "yellow",
                    hex: "#FACC15",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_O1rBNThvrsrZk5GwjvusjMaG3UpMg-f_g&s"
                }
            ]
        },
        {
            id: 4,
            name: "Street Style Jacket",
            price: "Tk 299.00",
            hoverImage: "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            image:
                "https://www.byrdie.com/thmb/K2lavtBrr2pDT94hm7QFYNq7Kdk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Byrdie-Spring-Jacket-Trends-Colorful-Trench-e6f5c01385d441659a57fc1c1b788543-34d14e0ca6664b9b838be88036c9a689.jpg",
            colors: [
                {
                    id: "red",
                    hex: "#F87171",
                    image: "https://ih1.redbubble.net/image.5056064879.0015/ssrco,classic_tee,womens_02,dd2121:8219e99865,front,product_square,x600.1.jpg"
                },
                {
                    id: "blue",
                    hex: "#3B82F6",
                    image: "https://www.oxfordshirt.co.uk/cdn/shop/files/mens-classic-t-shirt-in-cornflower-blue-5442025.jpg?v=1758946802&width=1946"
                },
                {
                    id: "yellow",
                    hex: "#FACC15",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_O1rBNThvrsrZk5GwjvusjMaG3UpMg-f_g&s"
                }
            ]
        },
        {
            id: 5,
            name: "Urban Fashion Tee",
            price: "Tk 299.00",
            discountPrice: "Tk 20.00",
            hoverImage: "https://m.media-amazon.com/images/I/71m9WX--hpL._AC_SL400_.jpg",
            image:
                "https://i5.walmartimages.com/seo/YOUNGLA-Mens-Hipster-Hip-Hop-Urban-Modern-Tees-Street-Fashion-Streetwear-Stylish-Longline-Print-T-Shirt_a24658d4-5673-4080-8d9f-5f2bc34fd45e.ec16aa7d6c141018f425a083ebbc77a0.jpeg",
            colors: [
                {
                    id: "red",
                    hex: "#F87171",
                    image: "https://ih1.redbubble.net/image.5056064879.0015/ssrco,classic_tee,womens_02,dd2121:8219e99865,front,product_square,x600.1.jpg"
                },
                {
                    id: "blue",
                    hex: "#3B82F6",
                    image: "https://www.oxfordshirt.co.uk/cdn/shop/files/mens-classic-t-shirt-in-cornflower-blue-5442025.jpg?v=1758946802&width=1946"
                },
                {
                    id: "yellow",
                    hex: "#FACC15",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_O1rBNThvrsrZk5GwjvusjMaG3UpMg-f_g&s"
                }
            ]
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