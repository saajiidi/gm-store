import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

const accountItems = [
  { name: "Login", path: "/login" },
  { name: "Sign Up", path: "/signup" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleAccountItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-black text-white p-2 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
          <Link
            to="/"
            className="text-white no-underline hover:no-underline flex"
            onClick={closeMobileMenu}
          >
            <span className="whitespace-nowrap overflow-hidden border-r-2 border-white animate-typing animation-iteration-count-infinite">
              Gear Master
            </span>
          </Link>
        </div>

        <div className="flex items-center">
          <img src={logo} alt="Gear Master Logo" className="w-100 h-10" />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="rounded-full px-4 py-2 bg-gray-200 text-black placeholder-gray-500"
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-bold text-white hover:text-gray-300 no-underline"
              onClick={closeMobileMenu}
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
                    className="block px-4 py-2 text-white hover:bg-gray-700 no-underline"
                    onClick={() => {
                      handleAccountItemClick();
                      setIsDropdownOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/cart"
            className="font-bold text-white hover:text-gray-300 no-underline"
            onClick={closeMobileMenu}
          >
            <FaShoppingCart className="text-xl" />
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          {!isSearchOpen && (
            <button type="button" onClick={toggleSearch} className="text-xl">
              <FaSearch />
            </button>
          )}
          <button onClick={toggleMobileMenu} className="text-xl ml-4">
            ☰
          </button>
          <Link
            to="/cart"
            className="font-bold text-white hover:text-gray-300 no-underline"
            onClick={closeMobileMenu}
          >
            <FaShoppingCart className="text-xl" />
          </Link>
        </div>
      </div>

      {isSearchOpen && (
        <div className="md:hidden p-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full rounded-full px-4 py-2 bg-gray-200 text-black placeholder-gray-500"
            />
            <button
              type="button"
              onClick={toggleSearch}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-2 mt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-bold text-white hover:text-gray-300 no-underline"
              onClick={closeMobileMenu}
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
                    className="block px-4 py-2 text-white hover:bg-gray-700 no-underline"
                    onClick={() => {
                      handleAccountItemClick();
                      setIsDropdownOpen(false);
                    }}
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
