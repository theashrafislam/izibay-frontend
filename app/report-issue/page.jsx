"use client"

import React, { useState } from "react";

const ReportIssue = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call or email logic here
        setSubmitted(true);
    };

    return (
        <section className="bg-[#F0F0F0] min-h-screen flex items-center py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 w-full">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                        Report an Issue
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Facing a problem? Let us know and we will solve it as soon as possible.
                    </p>
                </div>

                {/* Form Box */}
                <div
                    className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
                    style={{ background: "rgb(var(--text-color) / .05)" }}
                >
                    {submitted ? (
                        <div className="text-center text-green-600 font-medium text-lg">
                            ✅ Your issue has been submitted. Thank you!
                        </div>
                    ) : (
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                            {/* Name & Email */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="text-sm text-gray-600">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>

                                <div className="flex-1">
                                    <label className="text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Issue Type */}
                            <div>
                                <label className="text-sm text-gray-600">Issue Type</label>
                                <select
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                >
                                    <option value="">Select Issue Type</option>
                                    <option value="Payment">Payment</option>
                                    <option value="Order">Order</option>
                                    <option value="Website">Website</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="text-sm text-gray-600">Description</label>
                                <textarea
                                    rows="4"
                                    placeholder="Describe your issue"
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                />
                            </div>

                            {/* File Upload */}
                            <div>
                                <label className="text-sm text-gray-600 mb-1 block">Upload File (optional)</label>
                                <input
                                    type="file"
                                    name="attachment"
                                    accept="image/*,.pdf,.doc,.docx"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700
               file:py-2 file:px-4 file:border-0 file:bg-gray-100 file:text-gray-700
               file:rounded-md file:cursor-pointer
               focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition font-medium"
                            >
                                Submit Issue
                            </button>

                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ReportIssue;