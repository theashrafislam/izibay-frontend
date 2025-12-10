"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoCartOutline, IoMenu } from 'react-icons/io5';
import { RiSearchLine } from 'react-icons/ri';
import MenuBar from "./MenuBar"
import CartDrawer from "./CartDrawer"

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <nav className='bg-[#F0F0F0]'>
            {/* fixed top-0 left-0 w-full z-50 */}
            {/* desktop version  */}
            <div className='hidden lg:flex justify-between items-center py-9 max-w-7xl mx-auto '>
                {/* logo */}
                <div>
                    {/* <Image alt='Izibay' src={} width={100} height={100}/> */}
                    <Link className='text-3xl font-bold text-red-500 cursor-pointer' href={'/'}>Izibay</Link>
                </div>

                {/* menus  */}
                <div>
                    <ul className='flex items-center gap-4 font-bold'>
                        <li className='hover:text-gray-500 cursor-pointer'>Home</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Men's</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Women's</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Kids</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Winter'25</li>
                        <li className='hover:text-gray-500 cursor-pointer'>New Arrival</li>
                    </ul>
                </div>

                {/* icons button  */}
                <div className='flex items-center gap-4'>
                    <RiSearchLine className='text-2xl' />
                    <FaRegUser className='text-2xl' />
                    <IoCartOutline className='text-3xl' onClick={handleCartToggle} />

                </div>
                {/* cart drawer  */}
                <CartDrawer isOpen={isCartOpen} toggleCart={handleCartToggle} />
            </div>

            {/* mobile and table version  */}
            <div className='lg:hidden flex items-center justify-between px-3 py-4'>
                {/* menu and search button  */}
                <div className='flex items-center gap-4'>
                    <IoMenu className='text-3xl' onClick={toggleMenu} />
                    <RiSearchLine className='text-2xl' />
                </div>

                {/* logo  */}
                <div>
                    {/* <Image alt='Izibay' src={} width={100} height={100}/> */}
                    <Link className='text-3xl font-bold text-red-500 cursor-pointer' href={'/'}>Izibay</Link>
                </div>

                {/* cart icon  */}
                <div>
                    <IoCartOutline className='text-3xl' onClick={handleCartToggle} />

                    {/* cart drawer  */}
                    <CartDrawer isOpen={isCartOpen} toggleCart={handleCartToggle} />
                </div>
            </div>

            <MenuBar
                isOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />

        </nav>
    );
};

export default Navbar;