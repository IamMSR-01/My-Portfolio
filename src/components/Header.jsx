import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="md:fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-lg shadow-2xl border border-white/20 p-4 rounded-lg"
    >
      <div className="flex justify-between items-center text-white xl:w-[100%] md:m-auto gap-14 md:h-14 flex-wrap">
        {/* Logo Section */}
        <div className="text-white xl:w-[30%] flex items-center pl-5 font-bold text-2xl">
          <NavLink to="/home">
            <motion.div whileHover={{ scale: 1.1 }} className="flex gap-5 items-center">
              <img className="w-16" src="profile-pic.png" alt="Profile" />
              <h1 className="hidden text-blue-700 sm:block">Mohd Shaqib Raza</h1>
            </motion.div>
          </NavLink>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden mr-10 text-blue-500 md:flex space-x-6 text-xl font-semibold">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              className="hover:text-gray-300 transition"
            >
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) => (isActive ? "text-green-500" : "text-blue-700")}
              >
                {item}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 p-4 rounded-md mt-2 text-center">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-semibold text-xl transition duration-200 ${
                  isActive ? "text-green-500" : "text-white"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Header;
