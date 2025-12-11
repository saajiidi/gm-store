import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import logo from "../../assets/img/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* Use logo if available, or text */}
              <img src={logo} alt="Gear Master" className="h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <span className="text-xl font-bold text-white tracking-widest uppercase">Gear Master</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your premium destination for high-quality bike accessories.
              We blend style, safety, and performance to elevate your ride.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-blue-500 transition-colors flex items-center"><span className="mr-2">›</span> Home</Link></li>
              <li><Link to="/products" className="hover:text-blue-500 transition-colors flex items-center"><span className="mr-2">›</span> Shop</Link></li>
              <li><Link to="/cart" className="hover:text-blue-500 transition-colors flex items-center"><span className="mr-2">›</span> Cart</Link></li>
              <li><Link to="/login" className="hover:text-blue-500 transition-colors flex items-center"><span className="mr-2">›</span> My Account</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                <span>Sector 7, Uttara, Dhaka 1230<br />BGB Market, Shop 29/Kha</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-500" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500" />
                <span>support@gearmaster.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-600 text-sm"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center">
                Subscribe <FaPaperPlane className="ml-2 text-xs" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gear Master. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
