import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true, // Transparent background
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 10;

    // Add stars
    const addStar = () => {
      const geometry = new THREE.SphereGeometry(0.1, 24, 24);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(20));
      star.position.set(x, y, z);
      scene.add(star);
    };

    Array(100).fill().forEach(addStar);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return ( 
    <footer className="relative text-white overflow-hidden">
      {/* Three.js Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-12 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-green-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let's Stay Connected
        </motion.h2>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://www.facebook.com/IamMSR13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-green-500 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/i_am_msr_01/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-green-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-shaqib-raza-4088aa310/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-green-500 transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/i_am_msr_13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-green-500 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/IamMSR-01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-green-500 transition duration-300"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="flex flex-wrap justify-center space-x-4 mb-4 text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a
            href="/"
            className="hover:text-green-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-green-500 transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-green-500 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-green-500 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-green-500 transition duration-300"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-green-500 transition duration-300"
          >
            Contact
          </a>
        </motion.div>

        {/* Footer Text */}
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
