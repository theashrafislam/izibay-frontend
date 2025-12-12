// "use client"
import React from 'react';

const CetegoryPage = async ({ params }) => {
    const { slug } = await params;
    console.log(slug);
    return (
        <div className='flex py-10 justify-center items-center gap-5 '>
hello i am  slue page: <h1 className='text-xl text-red-500'>{slug}</h1> 
        </div>
    );
};

export default CetegoryPage;