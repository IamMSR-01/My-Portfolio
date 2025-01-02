import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const canvasRef = useRef(null);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_itpjvvo','template_xz92qml',formRef.current,'xDvyAmv7D1Eg7hkBT'
      )
      .then(
        (result) => {
          alert("Email Sent Successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to Send Email. Please Try Again.");
          console.error(error.text);
        }
      );    

    e.target.reset();
  };

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
    camera.position.z = 20;

    // Floating Spheres Animation
    const spheres = [];
    const createSphere = (radius, color, x, y, z) => {
      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.5 });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(x, y, z);
      scene.add(sphere);
      return sphere;
    };

    for (let i = 0; i < 15; i++) {
      const radius = Math.random() * 0.5 + 0.2;
      const x = Math.random() * 20 - 10;
      const y = Math.random() * 20 - 10;
      const z = Math.random() * -15;
      const color = `hsl(${Math.random() * 360}, 80%, 60%)`;
      spheres.push(createSphere(radius, color, x, y, z));
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      spheres.forEach((sphere) => {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        sphere.position.y += Math.sin(Date.now() * 0.001) * 0.02;
      });
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
      spheres.forEach((sphere) => scene.remove(sphere)); // Cleanup
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      {/* Three.js Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-12">
        <motion.h2
          className="text-6xl font-bold text-center mb-8 text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid sm:w-[80%] m-auto mt-20 grid-cols-1 xl:grid-cols-2 gap-20">
          {/* Form Section */}
          <motion.div
            className="p-6 bg-gray-900 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  className="w-full placeholder:text-gray-400 p-4 rounded-md bg-gray-800 text-white focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full placeholder:text-gray-400 p-4 rounded-md bg-gray-800 text-white focus:outline-none"
                  name="user_email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full h-60 p-4 placeholder:text-gray-400 rounded-md bg-gray-800 text-white focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="hidden xl:flex flex-col xl:ml-52 justify-center text-gray-400"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Let's Connect!
            </h3>
            <p className="mb-2">
              <span className="text-green-500">Email:</span>{" "}
              iammsr19413m@gmail.com
            </p>
            <p className="mb-2">
              <span className="text-green-500">Phone:</span> +91-9058668422
            </p>
            <p className="mb-2">
              <span className="text-green-500">Address:</span> Dehradun, Uttrakhand, India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
