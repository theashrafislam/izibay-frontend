import React from "react";
import FeaturesSection from "../Components/FeaturesSection";

const ShippingPolicy = () => {
    return (
        <section className="bg-[#F0F0F0] min-h-screen py-10 px-4 lg:px-0">
            <div className="max-w-5xl mx-auto  p-6">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        Shipping Policy
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Learn about our shipping procedures, delivery timelines, and related policies.
                    </p>
                </div>

                {/* Section 1: General Information */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ১. সাধারণ তথ্য | General Information
                    </h2>
                    <p className="text-gray-700 mb-2">
                        Izibay aims to deliver your products safely and promptly. Our shipping policy explains delivery timelines, costs, and procedures.
                    </p>
                    <p className="text-gray-700 mb-2">
                        Izibay আপনার অর্ডার দ্রুত এবং নিরাপদভাবে পৌঁছে দেওয়ার জন্য সর্বোচ্চ চেষ্টা করে। এই শিপিং পলিসিতে আমরা ডেলিভারি সময়সীমা, খরচ এবং প্রক্রিয়া বর্ণনা করেছি।
                    </p>
                </section>

                {/* Section 2: Shipping Methods */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ২. শিপিং পদ্ধতি | Shipping Methods
                    </h2>
                    <p className="text-gray-700 mb-2">
                        We use trusted courier services to deliver your orders. Delivery options may vary depending on your location.
                    </p>
                    <p className="text-gray-700 mb-2">
                        আমরা বিশ্বাসযোগ্য কুরিয়ার সার্ভিস ব্যবহার করি যাতে আপনার অর্ডার নিরাপদে পৌঁছে যায়। ডেলিভারি অপশন আপনার অবস্থানের উপর নির্ভর করে ভিন্ন হতে পারে।
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Standard Shipping – 3-7 business days / স্ট্যান্ডার্ড শিপিং – ৩-৭ কর্মদিবস</li>
                        <li>Express Shipping – 1-3 business days / এক্সপ্রেস শিপিং – ১-৩ কর্মদিবস</li>
                    </ul>
                </section>

                {/* Section 3: Shipping Costs */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ৩. শিপিং খরচ | Shipping Costs
                    </h2>
                    <p className="text-gray-700 mb-2">
                        Shipping costs depend on the product weight, destination, and chosen delivery method. You will see the shipping cost at checkout.
                    </p>
                    <p className="text-gray-700 mb-2">
                        শিপিং খরচ পণ্যের ওজন, গন্তব্য এবং ডেলিভারি পদ্ধতির উপর নির্ভর করে। চেকআউট করার সময় আপনি শিপিং খরচ দেখতে পাবেন।
                    </p>
                </section>

                {/* Section 4: Tracking */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ৪. ট্র্যাকিং | Tracking
                    </h2>
                    <p className="text-gray-700 mb-2">
                        After your order is shipped, you will receive a tracking number via email or SMS. Use it to monitor your package.
                    </p>
                    <p className="text-gray-700 mb-2">
                        অর্ডার শিপিং হলে, আপনি ইমেইল বা SMS এর মাধ্যমে একটি ট্র্যাকিং নম্বর পাবেন। এটি ব্যবহার করে আপনার প্যাকেজ ট্র্যাক করতে পারবেন।
                    </p>
                </section>

                {/* Section 5: Delivery Issues */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ৫. ডেলিভারি সমস্যা | Delivery Issues
                    </h2>
                    <p className="text-gray-700 mb-2">
                        If there are any delays or issues with your delivery, please contact our support team immediately.
                    </p>
                    <p className="text-gray-700 mb-2">
                        যদি আপনার ডেলিভারিতে কোনো বিলম্ব বা সমস্যা হয়, আমাদের সাপোর্ট টিমের সাথে সঙ্গে সঙ্গে যোগাযোগ করুন।
                    </p>
                </section>

                {/* Section 6: Contact */}
                <section className="mb-0">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ৬. যোগাযোগ | Contact
                    </h2>
                    <p className="text-gray-700 mb-2">
                        For any shipping-related questions, you can contact us at:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Email: support@Izibay.com</li>
                        <li>Phone: +880 123 456 789</li>
                    </ul>
                </section>

            </div>

            <FeaturesSection />
        </section>
    );
};

export default ShippingPolicy;