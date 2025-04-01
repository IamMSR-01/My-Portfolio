import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ResumePDF from "@/assets/Resume.pdf";

function RotatingSphere() {
  const sphereRef = useRef();
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#6c63ff" wireframe />
    </mesh>
  );
}

function About() {
  return (
    <section className="relative bg-black text-white py-20 px-6 sm:px-12" id="about">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-3xl"></div>

      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Side: 3D Model */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] flex justify-center">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <RotatingSphere />
          </Canvas>
        </div>

        {/* Right Side: About Content */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={"portfolio-profile-pic.png"} 
            alt="Profile" 
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto md:mx-0 rounded-full shadow-lg mb-4 border-4 border-purple-500"
          />
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            About Me
          </h2>
          <p className="text-gray-300 font-serif text-base sm:text-lg mb-4">
            I am a results-driven Full-Stack Developer with a strong foundation in modern web technologies, specializing in React, Node.js, and Express.js. Passionate about building intuitive, high-performance applications, I focus on delivering seamless user experiences through clean, scalable, and efficient code. With a keen eye for UI/UX design and a problem-solving mindset, I strive to develop innovative digital solutions that drive impact and enhance user engagement. Constantly exploring emerging technologies, I am committed to continuous learning and excellence in software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a 
              href={ResumePDF} 
              download="Shaqib_Resume.pdf"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Download Resume
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 border border-purple-500 rounded-lg text-purple-500 font-semibold hover:bg-purple-500 hover:text-white transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;