"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoCartOutline, IoMenu } from 'react-icons/io5';
import { RiSearchLine } from 'react-icons/ri';
import MenuBar from "./MenuBar"
import CartDrawer from "./CartDrawer"
import SearchDrawer from "./SearchDrawer"
import { useAuth } from '../context/AuthContext';

const Navbar = () => {

    const itemCount = 5;

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleUserMenu = () => {
        setIsUserMenuOpen(prev => !prev);
    };

    const toggleSearch = () => setIsSearchOpen(prev => !prev);

    const { user, loading, logout } = useAuth();
    console.log("Navbar Console: ", loading, user)

    const handleLogout = async () => {
        await logout();
    };

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
                    <RiSearchLine className='text-2xl' onClick={toggleSearch} />
                    {user && (
                        <div className="relative">
                            <FaRegUser
                                className="text-2xl cursor-pointer"
                                onClick={toggleUserMenu}
                            />

                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                                    {/* menu items */}
                                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                                        Profile
                                    </Link>
                                    <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                                        My Orders
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    {/* <FaRegUser className='text-2xl' /> */}
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
                    <RiSearchLine className='text-2xl' onClick={toggleSearch} />
                </div>

                {/* logo  */}
                <div>
                    {/* <Image alt='Izibay' src={} width={100} height={100}/> */}
                    <Link className='text-3xl font-bold text-red-500 cursor-pointer' href={'/'}>Izibay</Link>
                </div>

                {/* cart icon  */}
                <div className='flex items-center gap-2'>
                    <div className="relative cursor-pointer" onClick={handleCartToggle}>
                        <IoCartOutline className="text-3xl" />

                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-semibold">
                                {itemCount}
                            </span>
                        )}
                    </div>
                    {/* cart drawer  */}
                    <CartDrawer isOpen={isCartOpen} toggleCart={handleCartToggle} />


                    {/* for only logged uses  */}
                    {/* sesh hoye o hoylo na sesh  */}
                    {user && (
                        <FaRegUser
                            className="text-2xl cursor-pointer"
                            onClick={toggleUserMenu}
                        />
                    )}
                    {user && isUserMenuOpen && (
                        <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-40 z-50">
                            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                                Profile
                            </Link>

                            <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                                My Orders
                            </Link>

                            <button
                                onClick={async () => {
                                    await logout();
                                    setIsUserMenuOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}

                </div>
            </div>

            <MenuBar
                isOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />


            {/* add the SearchDrawer here (outside header so it overlays entire page) */}
            <SearchDrawer isOpen={isSearchOpen} toggle={toggleSearch} />

        </nav>
    );
};

export default Navbar;