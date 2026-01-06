"use client";

import { useState } from "react";

export default function CheckoutPage() {
    const [payment, setPayment] = useState("cod");

    return (
        <div className="min-h-screen bg-[#F0F0F0] px-4 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* LEFT: Checkout Form */}
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                    <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

                    <form className="space-y-5">
                        {/* Phone */}
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-black focus:border-black"
                        />

                        {/* Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-black focus:border-black"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-black focus:border-black"
                            />
                        </div>

                        {/* Address */}
                        <input
                            type="text"
                            placeholder="Full Delivery Address"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-black focus:border-black"
                        />

                        {/* Payment Method */}
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Payment Method</h2>
                            <div className="space-y-3">
                                {/* Cash on Delivery */}
                                <label
                                    className={`flex items-start justify-between border rounded-xl p-4 cursor-pointer transition ${payment === "cod" ? "border-black bg-gray-50" : "border-gray-200"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            checked={payment === "cod"}
                                            onChange={() => setPayment("cod")}
                                            className="accent-black"
                                        />
                                        <div>
                                            <p className="font-medium">Cash on Delivery</p>
                                            <p className="text-xs text-gray-500">Pay when product arrives</p>
                                        </div>
                                    </div>
                                </label>

                                {/* Online Payment (SSLCommerz) */}
                                <label
                                    className={`flex items-start justify-between border rounded-xl p-4 cursor-pointer transition ${payment === "ssl" ? "border-black bg-gray-50" : "border-gray-200"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            checked={payment === "ssl"}
                                            onChange={() => setPayment("ssl")}
                                            className="accent-black"
                                        />
                                        <div>
                                            <p className="font-medium">Online Payment</p>
                                            <p className="text-xs text-gray-500">
                                                bKash, Nagad, Card, Rocket (SSLCommerz)
                                            </p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* SSLCommerz Info */}
                        {payment === "ssl" && (
                            <div className="bg-gray-50 border rounded-xl p-4 text-sm text-gray-600">
                                You will be redirected to a secure SSLCommerz payment page to complete your payment.
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="
    w-full 
    bg-red-500 
    text-white 
    py-3 
    rounded-xl 
    font-medium 
    border-2 border-transparent 
    hover:text-black 
    hover:border-red-500 
    hover:bg-transparent 
    transition-all duration-200
  "
                        >
                            {payment === "cod" ? "Place Order" : "Pay Now"}
                        </button>

                    </form>
                </div>

                {/* RIGHT: Order Summary */}
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 h-fit">
                    <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$99.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span>$5.00</span>
                        </div>
                        <div className="border-t pt-4 flex justify-between text-base font-semibold">
                            <span>Total</span>
                            <span>$104.00</span>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-6">🔒 Secured by SSLCommerz</p>
                </div>

            </div>
        </div>
    );
}