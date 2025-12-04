import React from "react";
import { FaHome, FaClipboardCheck, FaHeadset } from "react-icons/fa";

const FeaturedService = () => {
  return (
    <div className="w-full bg-[#0d0714da] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center text-white">

        {/* Section Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-12">
          Our  
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
            text-transparent bg-clip-text ml-2 drop-shadow-[0_0_20px_rgba(167,139,250,0.7)]">
            Featured Services
          </span>
        </h1>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="p-7 bg-[#140c1c] rounded-2xl border border-gray-700 
            hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:scale-105 
            transition-all cursor-pointer">
            <FaHome className="text-4xl mx-auto mb-4 text-indigo-400" />
            <h3 className="text-xl font-bold mb-2">Property Management</h3>
            <p className="text-gray-300">
              Easily publish, manage, and update your properties with our smooth system.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-7 bg-[#140c1c] rounded-2xl border border-gray-700 
            hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:scale-105 
            transition-all cursor-pointer">
            <FaClipboardCheck className="text-4xl mx-auto mb-4 text-pink-400" />
            <h3 className="text-xl font-bold mb-2">Verified Listings</h3>
            <p className="text-gray-300">
              Every property is reviewed and verified for authenticity & accuracy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-7 bg-[#140c1c] rounded-2xl border border-gray-700 
            hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105 
            transition-all cursor-pointer">
            <FaHeadset className="text-4xl mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Customer Support</h3>
            <p className="text-gray-300">
              Our expert support team is always ready to help you anytime.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
