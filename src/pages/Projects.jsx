import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { TbBrandNextjs, TbBrandReact, TbBrandNodejs, TbBrandJavascript, TbBrandCss3, TbBrandHtml5, TbBrandMongodb } from "react-icons/tb";
// import CustomCursor from "../components/CustomCursor.jsx"

const projects = [
  {
    title: "VideoTube - Scalable Video Sharing Platform",
    description: "Developed a fully functional backend for a YouTube-like video-sharing platform, enabling seamless authentication, video uploads, and user interactions. Optimized database queries with indexing and efficient schema design, improving query performance by 12% for faster data retrieval. Implemented secure REST APIs for managing videos, comments, and likes, ensuring smooth user interactions. Integrated Multer for file uploads, enabling efficient video storage and retrieval with minimal latency.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/IamMSR-01/Youtube-clone-backend",
    live: "https://github.com/IamMSR-01/Youtube-clone-backend",
    accent: "bg-purple-500",
    image: "video-tube.png",
  },
  {
    title: "BlogNest - Real-Time Blogging Platform",
    description: "Developed a real-time blogging platform that enables 200+ users to seamlessly create, manage, and publish content. Optimized database queries, reducing response time by 15%, and implemented role-based access control for enhanced security. Designed and integrated RESTful APIs using Appwrite for seamless authentication and content management. Optimized frontend rendering, improving page load speed by 20% for a better user experience.",
    tech: ["JavaScript", "React.js", "Tailwind CSS", "Appwrite" , "HTML", "Redux Toolkit" ],
    github: "https://github.com/IamMSR-01/Blog-App",
    live: "https://blog-app-orpin-rho.vercel.app/",
    accent: "bg-cyan-400",
    image: "blognest.png",
  },
  {
    title: "Crypto Tracker – Real-Time Cryptocurrency Tracker",
    description: "Developed a real-time cryptocurrency tracking web app that fetches live market data and trends from the Coin Gecko API. Integrated interactive visualizations for an enhanced user experience. Designed dynamic charts to visualize price trends and implemented a light/dark mode toggle for better accessibility. Optimized API requests, reducing data-fetch latency by 15% for faster updates.",
    tech: ["HTML", "TailwindCSS", "JavaScript"],
    github: "https://github.com/IamMSR-01/Crypto-tracker",
    live: "https://crypto-tracker-raza.vercel.app/",
    accent: "bg-purple-500",
    image: "crypto-tracker.png",
  },
  {
    title: "Real-Time Currency Converter",
    description: "Developed a real-time currency converter that enables users to convert between multiple currencies with live exchange rates,ensuring accurate and up-to-date conversions. Implemented instant search functionality and real-time updates for a seamless user experience. Designed a fully responsive UI, ensuring smooth usability across all devices.",
    tech: ["React.js", "REST API", "Tailwind CSS", "JavaScript" ],
    github: "https://github.com/IamMSR-01/CurrencyConverter",
    live: "https://currency-converter-gamma-two-92.vercel.app/",
    accent: "bg-cyan-400",
    image: "currency-converter.png",
  },
];

const techIcons = [
  TbBrandNextjs,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandMongodb,
];

const Projects = () => {
  return (
    
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Floating Tech Logos (Background Animation) */}
      {techIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute opacity-40"
          initial={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
          animate={{ y: [0, 20, -20, 0], x: [0, 15, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Icon className="text-[100px] text-blue-500 opacity-40" />
        </motion.div>
      ))}

      {/* Title with Glitch Effect */}
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center text-5xl md:text-7xl font-bold mb-20 text-white"
      >
        PROJECTS
      </motion.h2>

      {/* Holographic Card Stack */}
      <div className="relative max-w-6xl mx-auto px-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring" }}
            viewport={{ once: true }}
            className={`relative mb-16 p-0.5 rounded-xl ${project.accent} bg-opacity-40 backdrop-blur-lg`}
            style={{ boxShadow: `0 0 20px ${project.accent}` }}
          >
            {/* Glass Card */}
            <div className="relative bg-gray-900 bg-opacity-80 rounded-xl p-8 border border-gray-700 gap-20 md:flex overflow-hidden">
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="w-[400px] h-48 object-cover rounded-lg mb-4" />

              <div className="relative z-10">
                {/* Project Title */}
                <motion.h3 
                  whileHover={{ textShadow: `0 0 10px ${project.accent}` }}
                  className="text-2xl font-bold mb-3 text-white"
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-300 mb-6">{project.description}</p>

                {/* Tech Stack as Icons */}
                <div className="flex gap-4 mb-6">
                  {project.tech.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      {tech === "Next.js" && <TbBrandNextjs className="text-2xl text-white" />}
                      {tech === "React" && <TbBrandReact className="text-2xl text-blue-600" />}
                      <span className="text-sm text-gray-400">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <motion.a
                    whileHover={{ x: [0, -2, 2, 0] }}
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub /> SOURCE
                  </motion.a>
                  <motion.a
                    whileHover={{ x: [0, 2, -2, 0] }}
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiExternalLink /> LIVE
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;