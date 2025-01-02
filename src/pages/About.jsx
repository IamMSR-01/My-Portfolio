import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import resume from '../assets/Resume.pdf';

const About = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Three.js Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // 3D Torus
        const geometry = new THREE.TorusGeometry(5, 1, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0x4caf50 });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        // Lighting
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        camera.position.z = 20;

        const animate = () => {
            requestAnimationFrame(animate);
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Adjust on resize
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
        <section
            id="about"
            className="relative mt-10 bg-black sm:pb-14 text-white overflow-x-hidden overflow-y-hidden"
        >
            {/* Three.js Background */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-screen z-0 overflow-hidden"
            ></canvas>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center container mx-auto text-center">
                <motion.h2
                    className="text-6xl mt-10 font-bold mb-6 text-green-500"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 text-gray-300"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img className="w-40 sm:w-52 rounded-full" src="portfolio-profile-pic.png" alt="" />
                </motion.p>
                <motion.p
                    className="text-lg mb-8 text-gray-300 p-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hi, I’m Mohd Shaqib Raza, a dedicated frontend developer passionate about crafting responsive, <br /> user-friendly websites. I enjoy solving real-world problems through code and design, <br />continuously learning to enhance my skills. With a focus on clean design and seamless functionality, <br />I aim to create digital experiences that leave a lasting impact.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 p-3 sm:grid-cols-2 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="bg p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
                        <h3 className="text-xl font-semibold mb-3 text-green-500">
                            Web Development
                        </h3>
                        <p className="text-gray-400">
                            I love building websites that are not just visually appealing but also functional <br />and user-friendly. For me, web development is about solving real problems <br />and creating seamless digital experiences.
                            Crafting responsive and <br />interactive websites with modern frameworks and libraries.
                        </p>
                    </div>
                    <div className="bg p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
                        <h3 className="text-xl font-semibold mb-3 text-green-500">
                            Continuous Learning
                        </h3>
                        <p className="text-gray-400">
                            Learning keeps me motivated! I’m always exploring new tools, technologies, and ideas <br />to grow as a developer. Every project teaches me something new, and <br />I’m excited to keep improving.
                            Staying updated with the latest <br />technologies to create cutting-edge
                            projects.
                        </p>
                    </div>
                </motion.div>
                <button className="mt-6">
                    <a
                        href={resume}
                        download='resume'
                        className="border-green-500 p-2 bg-green-500 text-xl font-semibold rounded-lg px-4 sm:mt-6  cursor"
                    >
                        My Resume
                    </a>
                </button>
            </div>
        </section>
    );
};

export default About;
