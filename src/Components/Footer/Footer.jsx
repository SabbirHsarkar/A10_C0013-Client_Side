import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 text-white p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <h6 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-300 transition">Branding</a></li>
            <li><a href="#" className="hover:text-purple-300 transition">Design</a></li>
            <li><a href="#" className="hover:text-purple-300 transition">Development</a></li>
            <li><a href="#" className="hover:text-purple-300 transition">Advertisement</a></li>
          </ul>
        </div>

        
        <div>
          <h6 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">Company</h6>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-purple-300 transition">About Us</Link></li>
            <li><a href="#" className="hover:text-purple-300 transition">Contact</a></li>
            <li><a href="#" className="hover:text-purple-300 transition">Jobs</a></li>
            <li><a href="#" className="hover:text-purple-300 transition">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">Legal</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-300 transition">Terms of Use</a></li>
            <li><a href="#" className="hover:text-purple-300 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-300 transition">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">Newsletter</h6>
          <p className="text-sm mb-3 text-white/80">Subscribe to get our latest updates and offers.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered w-full text-black"
            />
            <button className="btn btn-gradient bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-purple-300 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-300 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-300 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-white/70 text-sm">
        &copy; {new Date().getFullYear()} GameHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
