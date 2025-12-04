import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#0d0714] text-white pt-16 pb-10 relative overflow-hidden">

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-500/10 to-pink-500/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Services
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li><a className="hover:text-white transition">Property Listing</a></li>
            <li><a className="hover:text-white transition">Property Management</a></li>
            <li><a className="hover:text-white transition">Verified Deals</a></li>
            <li><a className="hover:text-white transition">Customer Support</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Company
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><a className="hover:text-white transition">Contact</a></li>
            <li><a className="hover:text-white transition">Careers</a></li>
            <li><a className="hover:text-white transition">Blogs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Legal
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li><a className="hover:text-white transition">Terms of Service</a></li>
            <li><a className="hover:text-white transition">Privacy Policy</a></li>
            <li><a className="hover:text-white transition">Refund Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
            Newsletter
          </h3>
          <p className="text-gray-300 mb-4">Subscribe to get the latest updates & offers.</p>

          {/* Email Input */}
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition">
              Join
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-2xl text-gray-300">
            <a className="hover:text-white transition"><FaFacebookF /></a>
            <a className="hover:text-white transition"><FaTwitter /></a>
            <a className="hover:text-white transition"><FaInstagram /></a>
            <a className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 text-center text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">HomeNest</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
