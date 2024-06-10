import React from "react";
import { Link } from "react-router-dom";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import { Auth } from "firebase/auth";

const Navbar: React.FC = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <nav
      className={`bg-black text-white py-4 ${
        isMobile ? "fixed bottom-0 w-full" : "fixed top-0 w-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Gear Master
        </Link>
        <div className="space-x-4 flex items-center">
          {isMobile ? (
            <>
              <Link to="/" className="hover:text-gray-400">
                <i className="fas fa-home"></i>
              </Link>
              <Link to="/category" className="hover:text-gray-400">
                <i className="fas fa-th-large"></i>
              </Link>
              <Link to="/cart" className="hover:text-gray-400">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <Link to="/account" className="hover:text-gray-400">
                <i className="fas fa-user"></i>
              </Link>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded"
              />
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
              <Link to="/signup" className="hover:text-gray-400">
                Sign Up
              </Link>
              <Link to="/cart" className="hover:text-gray-400">
                Cart
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
