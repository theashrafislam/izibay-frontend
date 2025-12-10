import React from 'react';

const Button = ({ icon, name, color }) => {
    return (
        <div className={`transition w-full`}>
            <button className={`w-full ${icon ? 'flex items-center justify-center gap-1' : ""} rounded-full font-semibold capitalize px-7 transition py-3
                ${color === "red" && "bg-red-500 text-white border-2 hover:bg-transparent hover:text-red-500 border-red-500"}
    ${color === "black" && "bg-black text-white hover:bg-transparent hover:text-black border-black border-2"}
                `}>

                {icon && <div>{icon}</div>}

                {name}

            </button>
        </div>
    );
};

export default Button;