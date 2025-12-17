"use client"

import React, { useState } from 'react';

const QuantitySelector = () => {

    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            {/* Quantity */}
            <div className="flex flex-col py-2 gap-2">
                <p className="text-sm font-medium">Quantity</p>

                <div className="flex items-center justify-center gap-3">
                    {/* Minus */}
                    <div
                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                        className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer
                 hover:bg-black hover:text-white transition"
                    >
                        −
                    </div>

                    {/* Quantity Value */}
                    <div className="w-10 text-center font-semibold">{quantity}</div>

                    {/* Plus */}
                    <div
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer
                 hover:bg-black hover:text-white transition"
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuantitySelector;