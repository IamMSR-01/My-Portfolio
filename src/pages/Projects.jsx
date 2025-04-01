import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { TbBrandNextjs, TbBrandReact, TbBrandNodejs, TbBrandJavascript, TbBrandCss3, TbBrandHtml5, TbBrandMongodb } from "react-icons/tb";
// import CustomCursor from "../components/CustomCursor.jsx"

const projects = [
  {
    title: "NEURAL CHAT",
    description: "AI chatbot with emotion detection & voice synthesis.",
    tech: ["Next.js", "GPT-4", "WebSockets"],
    github: "#",
    live: "#",
    accent: "bg-purple-500",
    image: "https://images.pexels.com/photos/31349148/pexels-photo-31349148/free-photo-of-vintage-black-and-white-donut-shop-exterior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "BLOCKSCAN",
    description: "Real-time blockchain explorer with 3D visualization.",
    tech: ["Three.js", "Node", "Ethereum"],
    github: "#",
    live: "#",
    accent: "bg-cyan-400",
    image: "https://images.pexels.com/photos/31349148/pexels-photo-31349148/free-photo-of-vintage-black-and-white-donut-shop-exterior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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