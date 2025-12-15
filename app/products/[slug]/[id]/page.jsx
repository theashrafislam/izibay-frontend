// import { getProductById } from "@/lib/products";

import SizeSelector from "../../../Components/ui/SizeSelector";

const ProductDetailsPage = async ({ params }) => {
    // const { name } = await params;
    // console.log(name);

    const product = [
        {
            id: "123",
            categorySlug: "mens-wear",
            name: "Classic White T-Shirt",
            price: "Tk 299",
            image: "/images/tshirt1.jpg",
            description: "High-quality cotton t-shirt for men."
        },
        // more products
    ];

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="bg-[#F0F0F0]">
            <div className="max-w-7xl mx-auto py-10 flex items-start gap-12">
                <div>
                    <img src="https://levin.com.bd/cdn/shop/files/web-1_262edaf7-e43e-4343-8adf-16890c53eaec.jpg?v=1765702263&width=800" alt="" />
                </div>
                <div className="text-[#1A1A1A]">
                    <h3 className="text-5xl font-semibold">Women’s Premium Ribbed Knit Midi Skirt</h3>
                    <p className="text-lg">Tk 499.00</p>
                    <p className="text-sm border-b pb-2">Shipping calculated at checkout.</p>

                    {/* Size */}
                    <SizeSelector />

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;