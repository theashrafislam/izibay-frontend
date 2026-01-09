import React from "react";
import FeaturesSection from "../Components/FeaturesSection"

const AboutUs = () => {
    return (
        <section className="bg-[#F0F0F0]">
            <div className="max-w-4xl mx-auto min-h-screen px-4 sm:px-6 lg:px-0 py-12 flex flex-col gap-8">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
                        About Us
                    </h1>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <p>
                        Izibay is a specialized fashion brand focusing on lifestyle and
                        quality improvement items. The company started operations in 2016
                        in Bangladesh, and began online operations in 2017. The philosophy
                        behind the company is to establish a national brand in fashion
                        lifestyle.
                    </p>

                    <p>
                        The journey began with fashion item selling through different trade
                        channels, operating in both B2B and B2C models.
                    </p>

                    <p>
                        Today, Izibay is one of the most reliable quality fashion product
                        e-commerce companies in Bangladesh, offering a wide range of
                        lifestyle products.
                    </p>

                    <p>
                        Our mission is to establish an online retail business that provides
                        the finest lifestyle products from top manufacturing brands, using
                        the internet to lower consumer costs.
                    </p>

                    <p>
                        We exist to attract and maintain customers. When we adhere to this
                        principle, everything else falls into place. Our services aim to
                        exceed customer expectations.
                    </p>
                </div>

            </div>
            <FeaturesSection />
        </section>
    );
};

export default AboutUs;