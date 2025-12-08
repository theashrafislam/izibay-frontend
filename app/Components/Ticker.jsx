import React from 'react';

const Ticker = ({ text }) => {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-gray-800 text-white">
            <div className="inline-block animate-marquee px-4">
                {text}
            </div>
            <div className="inline-block animate-marquee px-4">
                {text}
            </div>
        </div>
    );
};

export default Ticker;