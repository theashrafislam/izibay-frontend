import React from "react";
import FeaturesSection from "../Components/FeaturesSection";

const PrivacyPolicy = () => {
    return (
        <section className="bg-[#F0F0F0] min-h-screen py-12 px-4 sm:px-6 lg:px-0">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Your privacy is important to us. This Privacy Policy explains how Izibay collects, uses, and protects your personal information when you visit our website or make a purchase.
                    </p>
                </div>

                {/* Section: Information Collection */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
                    <p className="text-gray-700 mb-2">
                        When you visit or shop on our website, we may collect the following personal information:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Name, email address, phone number</li>
                        <li>Billing and shipping address</li>
                        <li>Payment information (processed securely)</li>
                        <li>Order history and shopping preferences</li>
                        <li>Cookies and browsing data for website analytics</li>
                    </ul>
                </section>

                {/* Section: How We Use Information */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
                    <p className="text-gray-700 mb-2">
                        We use your information to provide, maintain, and improve our services:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Process and fulfill orders</li>
                        <li>Provide customer support and respond to inquiries</li>
                        <li>Send updates about your orders and promotions (optional)</li>
                        <li>Analyze trends and improve website functionality</li>
                        <li>Ensure security and prevent fraudulent activity</li>
                    </ul>
                </section>

                {/* Section: Cookies */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Cookies and Tracking</h2>
                    <p className="text-gray-700 mb-2">
                        We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyze website traffic.
                    </p>
                </section>

                {/* Section: Third-Party Sharing */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Sharing Your Information</h2>
                    <p className="text-gray-700 mb-2">
                        We do not sell your personal information. However, we may share information with trusted third parties to provide our services:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Payment processors like Stripe or PayPal</li>
                        <li>Shipping and logistics partners</li>
                        <li>Analytics providers such as Google Analytics</li>
                        <li>Marketing partners (only if you opted in)</li>
                    </ul>
                </section>

                {/* Section: Data Security */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Security</h2>
                    <p className="text-gray-700 mb-2">
                        We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. All payment transactions are encrypted using SSL.
                    </p>
                </section>

                {/* Section: User Rights */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Your Rights</h2>
                    <p className="text-gray-700 mb-2">
                        You have the right to access, update, or delete your personal information. You may also opt out of promotional communications at any time.
                    </p>
                </section>

                {/* Section: Children */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Children’s Privacy</h2>
                    <p className="text-gray-700 mb-2">
                        Our website is not directed towards children under 13 years of age. We do not knowingly collect personal information from children.
                    </p>
                </section>

                {/* Section: Policy Updates */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Policy Updates</h2>
                    <p className="text-gray-700 mb-2">
                        We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date. We encourage you to review this page periodically.
                    </p>
                </section>

                {/* Section: Contact */}
                <section className="mb-0">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Contact Us</h2>
                    <p className="text-gray-700">
                        If you have any questions or concerns about your privacy, you can contact us at:
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

export default PrivacyPolicy;