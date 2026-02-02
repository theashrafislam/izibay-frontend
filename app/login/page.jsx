import React from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "../Components/ui/Button";
import FeaturesSection from "../Components/FeaturesSection";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {

  const { googleSignIn } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      console.log("Google login successful");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto pt-16 flex flex-col items-center justify-center">

        <div
          className="
        w-full max-w-[480px]
        bg-[#1A1A1A0D] px-6 sm:px-10 lg:px-16 
        py-10 sm:py-12 lg:py-14 
        space-y-6 text-center 
        rounded-3xl
      "
        >
          {/* Title */}
          <h5 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
            Login
          </h5>

          {/* Input fields */}
          <div className="flex flex-col gap-5 pt-8">
            <div className="text-left">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 w-full rounded-lg p-3 mt-1 outline-none focus:border-black transition"
              />
            </div>

            <div className="text-left">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 w-full rounded-lg p-3 mt-1 outline-none focus:border-black transition"
              />
            </div>
          </div>

          {/* Forgot password */}
          <p className="text-sm underline text-left cursor-pointer mt-1">
            Forgot your password?
          </p>

          {/* Login button */}
          <Button name={"Login"} color={"black"} />

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="
          w-full flex items-center justify-center gap-3 
          border border-gray-300 bg-white 
          py-3 rounded-lg font-medium
          hover:bg-gray-50 active:scale-[0.98]
          transition-all duration-200
        "
          >
            <FcGoogle size={22} /> Continue with Google
          </button>

          {/* Sign Up */}
          <div className="flex items-center justify-center pt-1">
            <Link
              href={'/register'}
              className="text-[12px] text-[#1A1A1AB3] relative cursor-pointer w-fit
            before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px]
            before:bg-[#1A1A1AB3] before:transition-all before:duration-300 hover:before:w-full"
            >
              Sign Up
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;