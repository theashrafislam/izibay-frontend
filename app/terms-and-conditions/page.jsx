import React from "react";
import FeaturesSection from "../Components/FeaturesSection";

const TermsAndConditions = () => {
    return (
        <section className="bg-[#F0F0F0] min-h-screen py-10 px-4 lg:px-0">
            <div className="max-w-5xl mx-auto p-6 sm:p-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Please read these Terms & Conditions carefully before using the Izibay website. By accessing or using our services, you agree to be bound by these terms.
                    </p>
                </div>

                {/* Section: Acceptance of Terms */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 mb-2">
                        By accessing or using the Izibay website, you agree to comply with these Terms & Conditions and all applicable laws and regulations. If you do not agree, please do not use our services.
                    </p>
                </section>

                {/* Section: Use of Website */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Use of Website</h2>
                    <p className="text-gray-700 mb-2">
                        You agree to use the website only for lawful purposes. You must not:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Upload or share any content that is illegal, harmful, or offensive</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Use automated bots or scripts to scrape content</li>
                    </ul>
                </section>

                {/* Section: Account and Registration */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Account and Registration</h2>
                    <p className="text-gray-700 mb-2">
                        If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
                    </p>
                </section>

                {/* Section: Orders & Payments */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Orders & Payments</h2>
                    <p className="text-gray-700 mb-2">
                        All orders are subject to availability and confirmation of the order price. Payments must be made using the approved payment methods. We reserve the right to refuse or cancel any order at our discretion.
                    </p>
                </section>

                {/* Section: Shipping & Delivery */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Shipping & Delivery</h2>
                    <p className="text-gray-700 mb-2">
                        Shipping times are estimates and may vary depending on location and other factors. Izibay is not responsible for delays caused by courier services.
                    </p>
                </section>

                {/* Section: Returns & Refunds */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Returns & Refunds</h2>
                    <p className="text-gray-700 mb-2">
                        Please refer to our Return Policy for detailed information. Refunds will be processed according to the payment method used.
                    </p>
                </section>

                {/* Section: Intellectual Property */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Intellectual Property</h2>
                    <p className="text-gray-700 mb-2">
                        All content, logos, images, and materials on this website are owned by Izibay or its partners and are protected by copyright laws. You may not reproduce, distribute, or use any content without permission.
                    </p>
                </section>

                {/* Section: Limitation of Liability */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Limitation of Liability</h2>
                    <p className="text-gray-700 mb-2">
                        Izibay shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the website or products purchased.
                    </p>
                </section>

                {/* Section: Changes to Terms */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Changes to Terms</h2>
                    <p className="text-gray-700 mb-2">
                        We reserve the right to update or modify these Terms & Conditions at any time. Any changes will be effective immediately upon posting. Users are encouraged to review this page periodically.
                    </p>
                </section>

                {/* Section: Contact */}
                <section className="mb-0">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Us</h2>
                    <p className="text-gray-700 mb-2">
                        If you have any questions or concerns about our Terms & Conditions, you may contact us at:
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

export default TermsAndConditions;