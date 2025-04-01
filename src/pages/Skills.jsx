import OrbitingCirclesDemo from "@/components/OrbitingCirclesDemo";
import { motion } from "framer-motion";
import React from "react";

function Skills() {
  return (
    <section className="relative bg-[#f8f9fa] py-20 px-6 sm:px-12 overflow-hidden" id="skills">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        {/* Left Side: Animated Component */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <OrbitingCirclesDemo />
        </motion.div>

        {/* Right Side: Skills Content */}
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">Skills</h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            I specialize in frontend and backend development, creating seamless
            and user-friendly web experiences.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-base sm:text-lg font-medium text-gray-800">
            {["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git & GitHub", "Java", "Python", "C", "C++", "Figma"].map((skill, index) => (
              <li 
                key={index} 
                className="bg-white flex justify-center items-center shadow-lg p-3 rounded-lg transition transform hover:scale-105"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;