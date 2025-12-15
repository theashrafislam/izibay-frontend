"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProductsPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace("/products/all");
    }, []);

    return null;
};

export default ProductsPage;