import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import { useCart } from "../../context/CartContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

const accountItems = [
  { name: "Login", path: "/login" },
  { name: "Sign Up", path: "/signup" },
  { name: "Admin", path: "/admin" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();

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
    setIsDropdownOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };


  return (
    <nav className="bg-black text-white p-2 fixed w-full z-50 top-0 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center h-16">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center">
          <button onClick={toggleMobileMenu} className="text-xl mr-4 md:hidden focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link
            to="/"
            className="text-white no-underline hover:no-underline flex items-center"
            onClick={closeMobileMenu}
          >
            <span className="text-2xl font-bold tracking-tighter whitespace-nowrap overflow-hidden border-r-2 border-white animate-typing">
              Gear Master
            </span>
          </Link>
        </div>

        {/* Centered Logo Image (Hidden on mobile if needed, or kept) */}
        <div className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Gear Master" className="h-10 animate-moveToCenter" />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="rounded-full px-4 py-1 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 transition-all duration-300 group-hover:w-64"
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
          </div>

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-medium text-white hover:text-blue-400 transition-colors no-underline"
            >
              {item.name}
            </Link>
          ))}

          {/* Account Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center font-medium text-white hover:text-blue-400 transition-colors focus:outline-none"
            >
              <FaUser className="mr-2" /> Account
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-1 z-50 animate-fadeIn">
                {accountItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors no-underline"
                    onClick={handleAccountItemClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative font-bold text-white hover:text-blue-400 transition-colors no-underline flex items-center"
          >
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Right Icons (Search & Cart) */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleSearch} className="focus:outline-none">
            <FaSearch />
          </button>
          <Link to="/cart" className="relative focus:outline-none">
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar (Expandable) */}
      {isSearchOpen && (
        <div className="md:hidden p-4 bg-gray-900 border-t border-gray-800 animate-slideDown">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full rounded-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 pt-2 pb-4 space-y-2 border-t border-gray-800 animate-slideDown shadow-xl h-screen">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block py-2 text-lg font-medium hover:text-blue-400 border-b border-gray-800"
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-2">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Account</p>
            {accountItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-base hover:text-blue-400"
                onClick={handleAccountItemClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

