// src/components/LoginScreen.js

import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import dnaImg from '../assets/dna.png';
import glovesImg from '../assets/gloves.png';

// Note: You should replace these with your actual image/SVG assets
// For demonstration, we're using placeholder text.



const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
        <div className="flex min-h-screen w-screen bg-white"> {/* <--- Change is here */}
          {/* Left Panel (Informational) */}
          <div className="hidden lg:flex relative w-1/2 text-white">
      <img 
        src={glovesImg} 
        alt="Gloves background" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-[#6A5AF9]/70" /> {/* purple tint */}

      <div className="relative flex flex-col justify-between p-12">
        <div>
          <div className="text-2xl font-bold mb-16">Mediflow</div>
          {/* your features here */}
        </div>
        <div className="text-center text-white/60 text-sm">
        </div>
      </div>
    </div>


      {/* Right Panel (Login Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        {/* Decorative Circles */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#6A5AF9]/20 rounded-full"></div>
        <div className="absolute top-20 right-40 w-12 h-12 bg-[#6A5AF9]/20 rounded-full"></div>
        <div className="absolute top-4 right-28 w-8 h-8 bg-[#6A5AF9]/20 rounded-full"></div>

        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#6A5AF9]">Medi</span><span className="text-[#beb8f5]">flow</span>
          </h1>
          
    

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A5AF9]"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A5AF9]"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                >
                  {showPassword ? <AiFillEyeInvisible size={22}/> : <AiFillEye size={22}/>}
                </button>
              </div>
            </div>

            <div className="text-right mb-6">
              <a href="#" className="text-sm text-[#6A5AF9] hover:underline">
                Forgot your Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6A5AF9] text-white font-bold py-3 rounded-lg hover:bg-[#5848d7] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;