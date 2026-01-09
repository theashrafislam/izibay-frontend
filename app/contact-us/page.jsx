import React from "react";
import Button from "../Components/ui/Button";
import FeaturesSection from "../Components/FeaturesSection";

const ContactUs = () => {
    return (
        <section className="bg-[#F0F0F0] min-h-screen ">
            <div className="flex items-center">
                <div className="max-w-6xl mx-auto px-4 lg:px-0 py-10 w-full">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                        {/* Left Side */}
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                                Contact Us
                            </h1>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Do you have any question?
                            </p>
                        </div>

                        {/* Right Side - Form */}
                        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                            <form className="flex flex-col gap-4">

                                <div className=" flex flex-col md:flex-row gap-4">
                                    <div className="flex-1">
                                        <label className="text-sm text-gray-600">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <label className="text-sm text-gray-600">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Write your message"
                                        className="w-full mt-1 px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>

                                {/* <button
                                type="submit"
                                className="mt-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                            >
                                Send Message
                            </button> */}

                                <Button name={"Send Message"} color={"red"} />

                            </form>
                        </div>

                    </div>

                </div>
            </div>
            <FeaturesSection />
        </section>
    );
};

export default ContactUs;