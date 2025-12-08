// import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            {/* desktop version  */}
            <div>
                {/* logo */}
                <div>
                    {/* <Image alt='Izibay' src={} width={100} height={100}/> */}
                    <h1 className='text-3xl font-bold text-red-500'>Izibay</h1>
                </div>

                {/* menus  */}
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Men's</li>
                        <li>Women's</li>
                        <li>Kids</li>
                        <li>Winter'25</li>
                        <li>New Arrival</li>
                    </ul>
                </div>

                {/* icons button  */}
                <div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;