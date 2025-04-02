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
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex gap-5 items-center"
            >
              <img className="w-14" src="profile-pic.png" alt="Profile" />
              <h1 className="hidden text-blue-700 sm:block">
                Mohd Shaqib Raza
              </h1>
            </motion.div>
          </NavLink>
        </div>

        {/* desktop nav bar */}
        <nav className="hidden mr-10 text-blue-500 sm:flex space-x-2 lg:space-x-6 text-xl font-semibold">
          <motion.div>
            <NavLink to="/">Home</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="about">About</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="skills">Skills</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="projects">Projects</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="experience">Experience</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="contact">Contact</NavLink>
          </motion.div>
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
        <div className="md:hidden bg-black/10 p-4 rounded-md mt-2 text-center">
          <motion.div>
            <NavLink to="/">Home</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="about">About</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="skills">Skills</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="projects">Projects</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="experience">Experience</NavLink>
          </motion.div>
          <motion.div>
            <NavLink to="contact">Contact</NavLink>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default Header;
