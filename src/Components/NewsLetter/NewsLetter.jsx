import React from 'react';
import { FaUsers, FaBolt } from "react-icons/fa";
import { useNavigate } from 'react-router';

const NewsLetter = () => {
  const navigate=useNavigate();
    return (
        <div className="w-full bg-[#0d0714da] py-20 px-4 text-white">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Icon */}
        <FaUsers className="text-5xl text-indigo-400 mx-auto mb-5" />

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
          READY TO SIGN THE{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]">
            WEBSITE?
          </span>
        </h1>

        {/* Sub Text */}
        <p className="text-gray-300 mt-4 text-lg leading-relaxed">
          Get the latest updates, real-estate news, and exclusive offers directly in your inbox.
        </p>

        {/* Button */}
        <button 
          onClick={() => navigate('/signup')}
         className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 px-8 py-3 rounded-lg text-lg font-semibold shadow-[0_0_25px_rgba(99,102,241,0.6)] flex items-center gap-2 mx-auto transition">
          <FaBolt />
          Register
        </button>

      </div>
    </div>
    );
};

export default NewsLetter;