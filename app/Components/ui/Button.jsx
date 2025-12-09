import React from 'react';

const Button = ({ icon, name }) => {
    return (
        <div className={`${icon ? 'flex items-center gap-1' : ""} transition`}>
            {icon && <div>{icon}</div>}
            <button className='rounded-full font-semibold capitalize bg-red-500 hover:bg-transparent text-white hover:text-red-500 border-2 border-red-500 px-7 transition py-3 '>{name}</button>
        </div>
    );
};

export default Button;