// import React from 'react';

// const FeaturedProductCard = ({product}) => {
//     return (
//         <div className="flex flex-col rounded-xl justify-between w-full lg:w-60 h-[400px] bg-white">
//             <div className="h-4/6 w-full">
//                 <img
//                     src={product?.image}
//                     alt={product?.name}
//                     className="w-full h-full rounded-xl rounded-b-none object-cover"
//                 />
//             </div>
//             <div className="p-3 h-2/6 flex flex-col justify-end gap-1">

//                 {/* info  */}
//                 <h3 className="font-semibold text-sm md:text-xl text-[#1A1A1A]">{product?.name}</h3>
//                 <p className="text-[#1A1A1AB3]">{product?.price}</p>

//                 {/* Color dots */}
//                 <div className="flex gap-2 mt-1">
//                     {product?.colors?.map((color, index) => (
//                         <span
//                             key={index}
//                             className="w-4 h-4 rounded-full border border-gray-300"
//                             style={{ backgroundColor: color }}
//                         ></span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeaturedProductCard;


import React from 'react';

const FeaturedProductCard = ({ product }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className="flex flex-col rounded-xl justify-between w-full md:w-56 lg:w-56 xl:w-64 2xl:w-72 h-[350px] sm:h-[380px] md:h-[400px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <div className="h-3/5 w-full">
                    <img
                        src={product?.image}
                        alt={product?.name}
                        className="w-full h-full rounded-xl rounded-b-none object-cover"
                    />
                </div>

                {/* Product Info */}
                <div className="p-3 h-2/5 flex flex-col justify-end gap-1">

                    <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#1A1A1A]">
                        {product?.name}
                    </h3>

                    <p className="text-[#1A1A1AB3] flex flex-col text-xs sm:text-sm md:text-base">
                        {product.discountPrice ? (
                            <>
                                <span className="line-through mr-2">{product.price}</span>
                                <span className="text-red-500 font-semibold">{product.discountPrice}</span>
                            </>
                        ) : (
                            product.price
                        )}
                    </p>


                    {/* Color Dots */}
                    <div className="flex gap-2 mt-1">
                        {product?.colors?.map((color, index) => (
                            <span
                                key={index}
                                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300"
                                style={{ backgroundColor: color }}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProductCard;