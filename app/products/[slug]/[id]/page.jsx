// import { getProductById } from "@/lib/products";

import ColorSelector from "../../../Components/ColorSelector";
import QuantitySelector from "../../../Components/QuantitySelector";
import SizeSelector from "../../../Components/ui/SizeSelector";
import Button from "../../../Components/ui/Button"
import ProductInfoAccordion from "../../../Components/ProductInfoAccordion";
import CustomerReviews from "../../../Components/CustomerReviews";
import FeaturesSection from "../../../Components/FeaturesSection";
import YouMayAlsoLike from "../../../Components/YouMayAlsoLike";

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
            <div className="max-w-7xl mx-auto py-10 flex flex-col lg:flex-row items-start gap-12">

                {/* image section  */}
                <div className="flex flex-col-reverse lg:flex-row gap-4 items-start">
                    {/* change for main images  */}
                    <div className="flex flex-row lg:flex-col  gap-2 w-28 max-h-[500px] overflow-y-auto scrollbar-hide">
                        <img src="https://levin.com.bd/cdn/shop/files/web-4_0cbc1138-b3c8-4015-8b32-0f48d4f5652b.jpg?v=1700558025&width=800" alt="" className="rounded-lg" />
                        <img src="https://levin.com.bd/cdn/shop/files/Layer9_ededb92e-28c6-486e-ad2f-a29a601658ee.jpg?v=1700558025&width=800" alt="" className="rounded-lg" />
                        <img src="https://levin.com.bd/cdn/shop/products/IMG_E6357_9541cc69-e52a-4747-b0f9-b354b518e732.jpg?v=1700558025&width=800" alt="" className="rounded-lg" />
                        <img src="https://levin.com.bd/cdn/shop/files/Layer1_76356f49-71ad-4cdb-8ac1-7addd7520888.jpg?v=1700558025&width=800" alt="" className="rounded-lg" />
                        <img src="https://levin.com.bd/cdn/shop/products/size-chart-temp26_2_6fde1af5-2a48-45da-899b-360cddfe6ab5.jpg?v=1700558025&width=800" alt="" className="rounded-lg" />
                        <img src="https://levin.com.bd/cdn/shop/files/web-6_b7c5248e-ce44-485a-a988-1e94e19cf6c4.jpg?v=1744712370&width=800" alt="" className="rounded-lg" />
                        <img src="https://levin.com.bd/cdn/shop/files/web-6_b7c5248e-ce44-485a-a988-1e94e19cf6c4.jpg?v=1744712370&width=800" alt="" className="rounded-lg" />
                        <img src="https://levin.com.bd/cdn/shop/files/web-6_b7c5248e-ce44-485a-a988-1e94e19cf6c4.jpg?v=1744712370&width=800" alt="" className="rounded-lg" />
                        <img src="https://levin.com.bd/cdn/shop/files/Layer9_ededb92e-28c6-486e-ad2f-a29a601658ee.jpg?v=1700558025&width=800" alt="" className="rounded-lg" />
                    </div>

                    {/* showing big image  */}
                    <div className="max-h-[500px]">
                        <img src="https://levin.com.bd/cdn/shop/files/web-1_262edaf7-e43e-4343-8adf-16890c53eaec.jpg?v=1765702263&width=800" alt="" className="rounded-xl h-full w-full object-cover" />
                    </div>
                </div>

                <div className="text-[#1A1A1A] space-y-6 px-4 lg:px-0">
                    <h3 className="text-5xl font-semibold">Women’s Premium Ribbed Knit Midi Skirt</h3>
                    <p className="text-lg">Tk 499.00</p>
                    <p className="text-sm border-b pb-2">Shipping calculated at checkout.</p>

                    {/* Size */}
                    <SizeSelector />


                    {/* color  */}
                    <ColorSelector />

                    <p className="text-[12px]"><strong>Please Follow Size Chart</strong> Available at Description or Feature Images for Each Product.</p>

                    {/* Quantity Selector  */}
                    <QuantitySelector />

                    <Button name={'Add to Cart'} color="red" />

                    <ProductInfoAccordion />
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <YouMayAlsoLike />
            </div>
            <div className="max-w-7xl mx-auto">
                <CustomerReviews />
            </div>
            <div className="max-w-7xl mx-auto">
                <FeaturesSection />
            </div>
        </div>
    );
};

export default ProductDetailsPage;