// src/components/Navbar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
];

const accountItems = [
  { name: "Login", path: "/login" },
  { name: "Sign Up", path: "/signup" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-black text-white p-2 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Gear Master</Link>
        </div>

        <div className="">
          <img src={logo} alt="Gear Master Logo" width="150" height="150" />
        </div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-bold text-white hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="font-bold text-white hover:text-gray-300"
            >
              Account
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-20">
                {accountItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-2 mt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-bold text-white hover:text-gray-300"
              onClick={toggleMobileMenu}
            >
              {item.name}
            </Link>
          ))}
          <div className="font-bold text-white">
            <button onClick={toggleDropdown} className="hover:text-gray-300">
              Account
            </button>
            {isDropdownOpen && (
              <div className="bg-black border border-gray-700 rounded-md shadow-lg mt-2 w-full">
                {accountItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
