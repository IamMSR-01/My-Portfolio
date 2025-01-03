import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

// Experience Data
const experiences = [
  {
    role: "Python Programming Intern",
    company: "YBI Foundation",
    duration: "June 2024 - July 2024",
    description1: "1. Developed a QR-based Ordering System for cafes, enabling customers to place orders directly through scanned QR-code,streamlining the ordering process.  ",
    description2: "2. Designed a user-friendly interface and integrated back-end functionalities using Python and database connectivity.",
    description3: "3. Gained hands-on experience in project management and coding for real-world applications.",
  },
  {
    role: "Hack-A-Thon (Inter-collegiate)",
    company: "Organized by Tech-Know-Giant Club",
    duration: "16th - 17th February 2024",
    description1: "1. Designed and developed a transportation booking landing page inspired by Uber Technologies, enabling users to simulate booking cars or rides.",
    description2: "2. Collaborated with a team to brainstorm and build the project under a strict deadline, showcasing problem-solving and teamwork skills .",
    description3: "3. Delivered a functional prototype demonstrating real-time features like booking options and dynamic User Interface elements.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 mt-6 pb-16 bg-black text-white overflow-hidden">
      {/* Three.js Animation */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Sphere visible args={[1.2, 32, 32]} scale={4}>
          <meshStandardMaterial color="#00ffcc" wireframe />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-6xl mt-10 font-bold text-center mb-12 text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1
        
        gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg p-6 rounded-lg shadow-lg group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Neon Border Animation */}
              <div className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:animate-neon-border" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-green-500 mb-2">{exp.role}</h3>
                <p className="text-sm text-blue-400">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <p className="text-sm text-gray-300 mt-4">{exp.description1}</p>
                <p className="text-sm text-gray-300 mt-4">{exp.description2}</p>
                <p className="text-sm text-gray-300 mt-4">{exp.description3}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add styling for neon border animation */}
      <style>
        {`
          .group-hover\\:animate-neon-border::before {
            content: '';
            position: absolute;
            inset: 0;
            border: 4px solid transparent;
            border-image: linear-gradient(45deg, green, skyblue) 1;
            animation: neon-border 1.5s linear infinite;
            border-radius: inherit;
          }

          @keyframes neon-border {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Experience;
