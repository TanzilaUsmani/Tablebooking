import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../common.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center header_main">
        <Link className="text-white text-xl font-bold" to="/">
          ReserveOcean
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link className="text-white hover:text-gray-300" to="/">
            Home
          </Link>
          <Link className="text-white hover:text-gray-300" to="/book">
            Book Table
          </Link>
          <Link className="text-white hover:text-gray-300" to="/reservations">
            Reservations
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden p-4`}>
        <Link className="block text-white py-2 hover:text-gray-300" to="/">
          Home
        </Link>
        <Link className="block text-white py-2 hover:text-gray-300" to="/book">
          Book Table
        </Link>
        <Link className="block text-white py-2 hover:text-gray-300" to="/reservations">
          Reservations
        </Link>
      </div>
    </nav>
  );
};

export default Header;
