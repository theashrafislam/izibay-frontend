"use client";

import React, { useState } from 'react';
// Importing icons from react-icons
import { IoTrashOutline, IoAdd, IoRemove, IoArrowBack } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from 'next/link';

const INITIAL_CART = [
    {
        id: 1,
        name: "TWS Earbuds - Crystal Sound",
        price: 129.00,
        color: "Arctic White",
        size: "Standard",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&q=80",
        quantity: 1
    },
    {
        id: 2,
        name: "Smart Watch Series 7",
        price: 399.00,
        color: "Midnight Blue",
        size: "44mm",
        image: "https://images.unsplash.com/photo-1546868871-70c122467d8b?w=300&q=80",
        quantity: 1
    }
];

const CartPage = () => {

    const [cartItems, setCartItems] = useState(INITIAL_CART);

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 20.00 : 0;
    const total = subtotal + shipping;

    

    return (
        <div className="bg-[#F0F0F0]">
            <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                        <HiOutlineShoppingBag className="text-3xl text-red-500" />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Your Cart</h1>
                        <p className="text-gray-500 text-sm">Review your items before checkout</p>
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">

                    {/* Product List (8 Columns on Desktop) */}
                    <div className="lg:col-span-8 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
                                <p className="text-gray-400 italic">No items found in your cart.</p>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-5 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">

                                    {/* Image Container */}
                                    <div className="w-full sm:w-32 h-32 flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 w-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-sm md:text-lg font-bold text-gray-800">{item.name}</h3>
                                                <p className="text-sm text-gray-400 mt-1">{item.color} | {item.size}</p>
                                            </div>
                                            <p className="text-sm md:text-xl font-black text-gray-900">${item.price.toFixed(2)}</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-3">
                                            {/* Quantity Selector */}
                                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-2 hover:bg-white hover:text-red-500 rounded-xl transition shadow-none hover:shadow-sm"
                                                >
                                                    <IoRemove size={20} />
                                                </button>
                                                <span className="text-sm px-5 font-bold text-gray-800">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-2 hover:bg-white hover:text-red-500 rounded-xl transition shadow-none hover:shadow-sm"
                                                >
                                                    <IoAdd size={20} />
                                                </button>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition"
                                            >
                                                <IoTrashOutline size={22} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                        <Link href={'/products'} className="flex items-center gap-2 text-gray-500 font-semibold mt-6 hover:text-red-500 transition group">
                            <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
                            Continue Shopping
                        </Link>
                    </div>

                    {/* Summary (4 Columns on Desktop) */}
                    <div className="mt-10 lg:mt-0 lg:col-span-4">
                        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl sticky top-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Summary</h2>

                            <div className="space-y-4 border-b border-gray-100 pb-8">
                                <div className="flex justify-between text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Shipping</span>
                                    <span className="font-bold text-gray-900">${shipping.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-8">
                                <span className="text-lg font-medium text-gray-500">Total Price</span>
                                <span className="text-3xl font-black text-gray-900">${total.toFixed(2)}</span>
                            </div>

                            <button className="w-full bg-red-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-[0.98]">
                                Checkout Now
                            </button>

                            <div className="mt-8 flex flex-wrap justify-center gap-4 grayscale opacity-40">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="visa" className="h-4" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="mastercard" className="h-6" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="paypal" className="h-5" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartPage;