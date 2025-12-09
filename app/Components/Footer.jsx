import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-[#1A1A1A] bg-[#FFFFFF]">
            <div className="max-w-7xl mx-auto px-4 lg:px-0 py-10 text-xs lg:text-base">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div>
                        <h5 className="font-bold mb-2">About Izibay</h5>
                        <p>
                            <strong>Izibay</strong> is a specialized Fashion brand focusing on lifestyles and quality improvements items.
                            The philosophy behind the company is to address a national Brand in Fashion lifestyle. Our main goal is customer satisfaction.
                        </p>
                    </div>

                    <div className='hidden lg:block'>
                        <h5 className="font-bold mb-2">Policies</h5>
                        <ul className="space-y-2">
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                            <li>Shipping Policy</li>
                            <li>Payment Method</li>
                            <li>Return, Refund & Exchange</li>
                        </ul>
                    </div>

                    <div className='hidden lg:block'>
                        <h5 className="font-bold mb-2">Support</h5>
                        <ul className="space-y-2">
                            <li>About Levin</li>
                            <li>Contact Us</li>
                            <li>Career</li>
                            <li>Report an Issue</li>
                            <li>Return, Refund & Exchange</li>
                        </ul>
                    </div>

                    {/* for only mobile and table  */}
                    <div className='lg:hidden flex items-center justify-between'>
                        <div>
                            <h5 className="font-bold mb-2">Policies</h5>
                            <ul className="space-y-2">
                                <li>Privacy Policy</li>
                                <li>Terms & Condition</li>
                                <li>Shipping Policy</li>
                                <li>Payment Method</li>
                                <li>Return, Refund & Exchange</li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold mb-2">Support</h5>
                            <ul className="space-y-2">
                                <li>About Levin</li>
                                <li>Contact Us</li>
                                <li>Career</li>
                                <li>Report an Issue</li>
                                <li>Return, Refund & Exchange</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold mb-2">Contact Us</h5>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                                <strong>Email:</strong>
                                <span>Hello@izibay.com.bd</span>
                            </li>
                            <li className="flex gap-2">
                                <strong>Contact:</strong>
                                <span>+880 1601-066663</span>
                            </li>
                            <li>
                                <strong>Address:</strong> House 02, Road 23, Sector 07, Uttara, Dhaka
                            </li>
                            <li>
                                <strong>Messenger:</strong> https://m.me/izibay
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Social + Bottom */}
            <div className="border-t py-6">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">

                    <div className="flex items-center gap-4 text-xl">
                        <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                        <FaWhatsapp className="hover:text-green-600 cursor-pointer" />
                    </div>

                    <div className="text-center space-y-1">
                        <p className="text-sm">© 2026, izibay.vercel.app — All rights reserved.</p>

                        <p className="text-xs">
                            Developed by
                            <a
                                href="https://theashrafislam.com"
                                target="_blank"
                                className="ml-1 font-medium underline hover:text-blue-600"
                            >
                                Ashraful Islam
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;