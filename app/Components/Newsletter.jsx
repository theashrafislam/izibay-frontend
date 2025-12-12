import React from "react";
import Button from "./ui/Button";
import { CiMail } from "react-icons/ci";

const Newsletter = () => {
  return (
    <div className="w-full bg-[#F0F0F0] py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Title */}
        <h4 className="text-3xl font-bold text-gray-800 mb-3">
          Newsletter
        </h4>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8">
          Sign up for new stories and personal offers!
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-5 py-3 rounded-xl shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          <Button
            icon={<CiMail size={20} />}
            color={"black"}
            name={"Subscribe"}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;