import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
import { GrSecure } from 'react-icons/gr';

const FeaturesSection = () => {
    return (
        <div className='bg-[#F0F0F0]'>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row px-3 lg:px-0 items-center justify-between py-16 text-center gap-8'>
                {/* fast shipping  */}
                <div className='flex flex-col items-center gap-2'>
                    <FaShippingFast className='text-3xl'/>
                    <h4 className='font-semibold text-lg'>Fast Shipping</h4>
                    <p>Delivering smiles faster than you can click 'Add to Cart'—experience the speed of our e-commerce shipping!</p>
                </div>
                {/* Top-notch Support  */}
                <div className='flex flex-col items-center gap-2'>
                    <BiSupport className='text-3xl'/>
                    <h4 className='font-semibold text-lg'>Top-notch Support</h4>
                    <p>Where top-notch customer service is just a call away—because we believe every interaction should be exceptional</p>
                </div>
                {/* Secure payment  */}
                <div className='flex flex-col items-center gap-2'>
                    <GrSecure className='text-3xl'/>
                    <h4 className='font-semibold text-lg'>Secure payment</h4>
                    <p>Our system provides a secure experience by keeping up to date with industry best practices.</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;