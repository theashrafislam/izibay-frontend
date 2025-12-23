"use client"

import React, { useState } from 'react';

const ProductImageGallery = ({ productImages }) => {

    const [activeImage, setActiveImage] = useState(productImages[0]);

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 items-start px-4 lg:px-0">

            {/* change for main images  */}
            <div className="w-full flex flex-row lg:flex-col  gap-2 lg:w-28 max-h-[500px] overflow-y-auto scrollbar-hide">
                {productImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Product ${index + 1}`}
                        className={`rounded-lg w-24 lg:w-28 cursor-pointer transition-transform duration-200`}
                        onClick={() => setActiveImage(img)}
                    />
                ))}

            </div>

            {/* showing big image  */}
            <div className="h-[500px] flex-1">
                <div className="flex items-center justify-center">
                    <img
                        src={activeImage}
                        alt="Active Product"
                        className="rounded-xl max-h-full max-w-full object-cover transition-all duration-300"
                    />
                </div>
            </div>

        </div>
    );
};

export default ProductImageGallery;