import Link from 'next/link';
import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GoChevronDown } from "react-icons/go";

const menuItems = [
    { name: 'Home', href: '/' },
    { name: "Men's", href: '/men' },
    { name: "Women's", href: '/women' },
    { name: 'Kids', href: '/kids' },
    { name: "Winter'25", href: '/winter' },
    { name: 'New Arrival', href: '/new-arrival' },
];

const socialItems = [
    { Icon: FaFacebook, href: '#' },
    { Icon: FaInstagram, href: '#' },
    { Icon: FaLinkedin, href: '#' },
    { Icon: FaWhatsapp, href: '#' },
];

const MenuBar = ({ isOpen, toggleMenu }) => {
    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Drawer */}
            <div
                className={`fixed bottom-0 left-0 w-full h-[70vh] bg-white shadow-xl transition-transform duration-300 transform z-50 ${isOpen ? 'translate-y-0' : 'translate-y-full'
                    } rounded-t-3xl`}
            >
                {/* Close Button (Outside scrollable area) */}
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 z-50 ${isOpen ? "" : "hidden"}`}>
                    <button
                        className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-red-100 transition"
                        onClick={toggleMenu}
                    >
                        <IoClose className={`text-2xl`} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto h-full pt-8 px-6">
                    {/* Menu Items */}
                    <ul className="flex flex-col gap-2">
                        {menuItems.map((item) => (
                            <li key={item?.name} className="border-b border-gray-100 last:border-b-0">
                                <Link
                                    href={item?.href}
                                    className="flex justify-between items-center py-3 text-lg font-medium text-gray-800 hover:text-red-500 transition duration-150"
                                    onClick={toggleMenu}
                                >
                                    <span>{item?.name}</span>
                                    {item?.name == "Home" ? "" : <span className="text-gray-500"><GoChevronDown /></span>}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Divider */}
                    <hr className="my-4 border-gray-200" />

                    {/* Account & Social Icons */}
                    <div className="mb-6">
                        <p className="text-xl font-bold mb-4 text-gray-800">Account</p>
                        <div className="flex gap-4">
                            {socialItems.map((item, index) => (
                                <Link key={index} href={item?.href} target="_blank" rel="noopener noreferrer">
                                    <item.Icon className="text-2xl text-gray-600 hover:text-red-500 transition duration-150" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"
                    onClick={toggleMenu}
                ></div>
            )}
        </>
    );
};

export default MenuBar;