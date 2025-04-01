import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden py-10">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let's Stay Connected
        </motion.h2>

        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="https://www.facebook.com/IamMSR13" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition-all duration-300">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/i_am_msr_01/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500 transition-all duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/mohd-shaqib-raza-4088aa310/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition-all duration-300">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/i_am_msr_13" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition-all duration-300">
            <FaTwitter />
          </a>
          <a href="https://github.com/IamMSR-01" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400 transition-all duration-300">
            <FaGithub />
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center space-x-4 mb-4 text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="/" className="hover:text-white transition duration-300">Home</a>
          <a href="#about" className="hover:text-white transition duration-300">About</a>
          <a href="#projects" className="hover:text-white transition duration-300">Projects</a>
          <a href="#skills" className="hover:text-white transition duration-300">Skills</a>
          <a href="#experience" className="hover:text-white transition duration-300">Experience</a>
          <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
        </motion.div>

        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; {new Date().getFullYear()} Mohd Shaqib Raza. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
