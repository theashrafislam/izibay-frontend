// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { RiSearchLine } from 'react-icons/ri';

const Navbar = () => {
    return (
        <nav className='bg-[#F0F0F0]'>
            {/* desktop version  */}
            <div className='flex justify-between items-center py-9 max-w-7xl mx-auto'>
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
                    <RiSearchLine className='text-xl'/>
                    <FaRegUser className='text-xl'/>
                    <IoCartOutline className='text-xl'/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;