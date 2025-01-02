import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Add paths to the project images and app links
const projects = [
  {
    name: "World Atlas",
    description:
      "World Atlas is an interactive web app that provides detailed information about countries worldwide. As a beginner in frontend web development, I built this app to enhance my skills while creating a user-friendly platform for exploring global information.",
    image: "world-atlas.png",
    tech: "React.js, Tailwind CSS, Axios for API",
    appLink: "https://world-atlas-ivory.vercel.app/",
    githubLink: "https://github.com/IamMSR-01/World-Atlas",
  },
  {
    name: "Spotify Clone",
    description:
      "A music streaming web app inspired by Spotify, featuring dynamic song listings through API integration. Focused on smooth navigation and an immersive listening experience.",
    image: "spotify.png",
    tech: "HTML, CSS, JavaScript",
    appLink: "https://spotify-clone.example.com", 
    githubLink: "https://github.com/IamMSR-01/Spotify-Clone",
  },
  {
    name: "Real Time Currency Converter",
    description:
      "Real-time exchange rate updates with seamless functionality , Simple and intuitive user interface for smooth navigation and Accurate and reliable data fetched via API integrations.",
    image: "currencyConverter.png",
    tech: "React.js, Tailwind CSS, API",
    appLink: "https://currency-converter-gamma-two-92.vercel.app/",
    githubLink: "https://github.com/IamMSR-01/CurrencyConverter",
  },
  {
    name: "E-Commerce",
    description:
      "An interactive e-commerce platform with features like product sliders, cart functionality, and dynamic APIs. Designed for a smooth shopping experience with responsive design and real-time updates.",
    image: "ecommerce.png",
    tech: "HTML, CSS, JavaScript",
    appLink: "https://ecommerce-app.example.com", 
    githubLink: "https://github.com/IamMSR-01?tab=repositories",
  },
  {
    name: "Netflix Clone",
    description:
      "A pixel-perfect clone of Netflix’s landing page, showcasing a sleek design, responsive layout, and modern UI elements for an authentic look and feel.",
    image: "netflix.png",
    tech: "HTML, CSS",
    appLink: "https://ecommerce-app.example.com",
    githubLink: "https://github.com/IamMSR-01/Netflix-Landing-Page-Clone",
  },
  {
    name: "Uber Clone",
    description:
      "A visually captivating Uber landing page clone, crafted with attention to detail. It replicates the clean design and responsive interface of the original, ensuring a professional presentation.",
    image: "uber.png",
    tech: "HTML, CSS",
    appLink: "https://ecommerce-app.example.com",
    githubLink: "https://github.com/IamMSR-01/Uber-Landing-Page-Clone",
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-black text-white">
      <div className="container mx-auto sm:px-6 md:px-12">
        <motion.h2
          className="text-6xl font-bold text-center mb-8 text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <div className="w-[90%] m-auto mt-20 grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg relative lg:flex items-center text-center p-4 bg-transparent shadow-xl rounded-lg transform hover:scale-105 transition-all duration-300 group gap-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image with hover 3D effect */}
              <div
                className="lg:w-[45%] bg-red-600 h-64 bg-cover bg-center mb-4 rounded-lg group-hover:transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 object-hover:scale"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>

              {/* Project Title (Clickable link to app) */}
              <div className="lg:w-[50%] ">
                <a
                  href={project.appLink}
                  className="text-lg font-semibold text-green-500 mb-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>

                {/* Project Description */}
                <p className="text-sm text-gray-400">{project.description}</p>

                {/* Project Tech Stack */}
                <p className="text-sm text-blue-600 mt-5">{project.tech}</p>

                {/* GitHub Link */}
                <div className="flex gap-4 items-center align-middle justify-center">
                  <FaGithub className="mt-4" />
                  <a
                    href={project.githubLink}
                    className="mt-4 text-blue-500 hover:underline items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    View GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
