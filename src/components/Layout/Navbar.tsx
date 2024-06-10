// src/components/Navbar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Gear Master</Link>
        </div>

        <div className="">
          <img src={logo} alt="Gear Master Logo" width="150" height="150" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link to="/cart" className="hover:text-gray-300">
            Cart
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link to="/signup" className="hover:text-gray-300">
            Sign Up
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col space-y-2 mt-2">
          <Link
            to="/"
            className="hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
