import React from "react";
import { FaShieldAlt, FaBolt, FaThumbsUp } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="py-20 bg-[#0d0714da]">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-6
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                text-transparent bg-clip-text 
                drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]"
        >
          Why Choose Us
        </h2>

        <p
          className="text-gray-200 max-w-3xl mx-auto mb-14 
                text-xl md:text-2xl font-semibold leading-relaxed"
        >
          We ensure trust, speed, and security — giving you the best real estate
          experience.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition">
            <FaThumbsUp className="text-5xl text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
            <p className="text-gray-600">
              100% transparency and reliability in every property listing.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition">
            <FaBolt className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              Lightning-fast system response for smooth browsing & management.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition">
            <FaShieldAlt className="text-5xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure & Safe</h3>
            <p className="text-gray-600">
              End-to-end encrypted data protection for every user.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
