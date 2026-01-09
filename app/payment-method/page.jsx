import React from "react";
import FeaturesSection from "../Components/FeaturesSection";

const PaymentMethods = () => {
    return (
        <section className="bg-[#F0F0F0] min-h-screen py-12 px-4 sm:px-6 lg:px-0">
            <div className="max-w-5xl mx-auto p-6">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        Payment Methods | পেমেন্ট পদ্ধতি
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Learn about the payment options available when shopping on Izibay.
                        <br />
                        Izibay এ শপিং করার সময় কোন পেমেন্ট অপশন ব্যবহার করতে পারেন তা এখানে দেখুন।
                    </p>
                </div>

                {/* Section 1: bKash */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ১. bKash
                    </h2>
                    <p className="text-gray-700 mb-2">
                        Pay easily using bKash. You can send money to our official bKash account number provided at checkout.
                    </p>
                    <p className="text-gray-700 mb-2">
                        bKash ব্যবহার করে সহজে পেমেন্ট করুন। চেকআউট এ প্রদত্ত আমাদের অফিসিয়াল bKash নম্বরে টাকা পাঠাতে পারেন।
                    </p>
                </section>

                {/* Section 2: Nagad */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ২. Nagad
                    </h2>
                    <p className="text-gray-700 mb-2">
                        You can also pay using Nagad. Our Nagad account details will appear during checkout.
                    </p>
                    <p className="text-gray-700 mb-2">
                        Nagad ব্যবহার করেও পেমেন্ট করা যায়। চেকআউট করার সময় আমাদের Nagad অ্যাকাউন্টের তথ্য দেখা যাবে।
                    </p>
                </section>

                {/* Section 3: Cash on Delivery */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ৩. Cash on Delivery (COD) | ডেলিভারিতে নগদ প্রদান
                    </h2>
                    <p className="text-gray-700 mb-2">
                        Pay in cash when your order is delivered to your doorstep. COD is convenient for customers who prefer to pay offline.
                    </p>
                    <p className="text-gray-700 mb-2">
                        আপনার অর্ডার পৌঁছালে নগদে পেমেন্ট করুন। যারা অফলাইন পেমেন্ট পছন্দ করেন তাদের জন্য COD সুবিধাজনক।
                    </p>
                </section>

                {/* Section 4: Security Notice */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ৪. Security | নিরাপত্তা
                    </h2>
                    <p className="text-gray-700 mb-2">
                        All online payments (bKash/Nagad) are secure and encrypted. We never store your PIN or sensitive payment info.
                    </p>
                    <p className="text-gray-700 mb-2">
                        সব অনলাইন পেমেন্ট (bKash/Nagad) নিরাপদ এবং এনক্রিপ্টেড। আমরা কখনও আপনার PIN বা সংবেদনশীল তথ্য সংরক্ষণ করি না।
                    </p>
                </section>

                {/* Section 5: Contact for Payment Issues */}
                <section className="mb-0">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        ৫. Payment Issues | পেমেন্ট সমস্যা
                    </h2>
                    <p className="text-gray-700 mb-2">
                        If you face any issues with payment, please contact our support team immediately.
                    </p>
                    <p className="text-gray-700 mb-2">
                        যদি পেমেন্ট সংক্রান্ত কোনো সমস্যা হয়, আমাদের সাপোর্ট টিমের সাথে সঙ্গে সঙ্গে যোগাযোগ করুন।
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

export default PaymentMethods;