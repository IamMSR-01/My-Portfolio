import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const canvasRef = useRef(null);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_itpjvvo",
        "template_xz92qml",
        formRef.current,
        "xDvyAmv7D1Eg7hkBT"
      )
      .then(
        () => alert("Email Sent Successfully!"),
        (error) => console.error(error.text)
      );

    e.target.reset();
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 15;

    const spheres = [];
    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.SphereGeometry(Math.random() * 0.5 + 0.3, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color: "#ffffff", transparent: true, opacity: 0.5 });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * -10);
      scene.add(sphere);
      spheres.push(sphere);
    }

    const light = new THREE.PointLight(0xffffff, 1.2);
    light.position.set(5, 5, 5);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      spheres.forEach((sphere) => (sphere.position.y += Math.sin(Date.now() * 0.001) * 0.01));
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <section className="relative w-full h-screen bg-gray-900 text-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-3xl" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/20">
          <h2 className="text-4xl font-bold text-blue-400 text-center mb-6">Get In Touch</h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 bg-white/20 text-white rounded-lg" required />
            <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 bg-white/20 text-white rounded-lg" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 bg-white/20 text-white rounded-lg h-40" required></textarea>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold">Send Message</button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="flex flex-col justify-center bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/20">
          <h3 className="text-2xl font-semibold mb-4 text-white">Let's Connect!</h3>
          <p className="mb-2"><span className="text-blue-400">Email:</span> iammsr19413m@gmail.com</p>
          <p className="mb-2"><span className="text-blue-400">Phone:</span> +91-9058668422</p>
          <p className="mb-2"><span className="text-blue-400">Address:</span> Dehradun, Uttarakhand, India</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;