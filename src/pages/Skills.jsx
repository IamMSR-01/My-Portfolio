import React, { useEffect, useRef } from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import * as THREE from "three";
import { motion } from "framer-motion";

const Skills = () => {
  const canvasRef = useRef(null);

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#e34f26", proficiency: 90 },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572b6", proficiency: 80 },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#f0db4f", proficiency: 70 },
    { name: "React.js", icon: <FaReact  />, color: "#61dbfb", proficiency: 75 },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933", proficiency: 65 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", proficiency: 85 },
    { name: "C", icon: <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png" alt="" />, color: "#274FA8", proficiency: 60 },
    { name: "C++", icon: <img className="w-10 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/911px-ISO_C%2B%2B_Logo.svg.png" alt="" />, color: "#0081CC", proficiency: 70 },
    { name: "Python", icon: <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="" />, color: "#859CFB", proficiency: 80 },
    { name: "Java", icon: <img className="w-10" src="https://wallpapers.com/images/hd/java-programming-language-logo-transparent-k6ngrbl1m2xbzz4t-2.jpg" alt="" />, color: "#0878BF", proficiency: 65 },
    { name: "Figma", icon: <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="" /> , color: "red", proficiency: 65 },
    { name: "Git", icon: <FaGitAlt />, color: "#D74A34", proficiency: 65 },
  ];

  useEffect(() => {
    // Three.js 3D Animation Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 3D circles for skills
    const createCircle = (radius, color) => {
      const geometry = new THREE.CircleGeometry(radius, 32);
      const material = new THREE.MeshBasicMaterial({ color });
      const circle = new THREE.Mesh(geometry, material);
      return circle;
    };

    const circles = skills.map((skill, index) => {
      const radius = 2 + index * 1;
      const circle = createCircle(radius, skill.color);
      circle.position.x = Math.cos(index * Math.PI / 2) * (10 + index * 3);
      circle.position.y = Math.sin(index * Math.PI / 2) * (10 + index * 3);
      scene.add(circle);
      return circle;
    });

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      circles.forEach((circle, index) => {
        circle.rotation.z += 0.02;
        circle.position.x = Math.cos(index * Math.PI / 2 + Date.now() / 1000) * (10 + index * 3);
        circle.position.y = Math.sin(index * Math.PI / 2 + Date.now() / 1000) * (10 + index * 3);
      });
      renderer.render(scene, camera);
    };

    animate();

    // Window resize handling
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <section
      id="skills"
      className="relative py-10 bg-black text-white overflow-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Skills Section */}
        <motion.h2
          className="text-6xl font-bold text-center mb-8 text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Professional Skills
        </motion.h2>
        <div className="lg:w-[85%] mt-20 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg flex flex-col items-center text-center p-6 bg-transparent shadow-xl rounded-lg transform hover:scale-105 transition-all duration-300 relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="text-5xl mb-4"
                style={{
                  color: skill.color,
                  transition: "transform 0.3s",
                }}
              >
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <p className="text-sm text-gray-400">Expert</p>
              <div className="relative w-full mt-2">
                <div
                  className="h-2 bg-gray-700 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
                <div className="absolute top-0 right-0 text-xs text-gray-300">
                  {skill.proficiency}%
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:animate-neon-border"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
