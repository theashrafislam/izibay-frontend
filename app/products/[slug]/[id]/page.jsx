// import { getProductById } from "@/lib/products";

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
        <div className="max-w-4xl mx-auto p-4">
            hello i am product details page of
            {/* <p>{name}</p> */}
        </div>
    );
};

export default ProductDetailsPage;