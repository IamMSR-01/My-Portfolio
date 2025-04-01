import { motion } from "framer-motion";
import { FaPython, FaHackerrank } from "react-icons/fa";

const experiences = [
  {
    title: "Python Programming Intern",
    company: "YBI Foundation",
    date: "June 2024 - July 2024",
    description: [
      "Developed a QR-based Ordering System for cafes, enabling customers to place orders directly through scanned QR-code, streamlining the ordering process.",
      "Designed a user-friendly interface and integrated back-end functionalities using Python and database connectivity.",
      "Gained hands-on experience in project management and coding for real-world applications."
    ],
    icon: <FaPython className="text-yellow-400 text-4xl" />,
  },
  {
    title: "Hack-A-Thon (Inter-collegiate)",
    company: "Tech-Know-Giant Club",
    date: "16th - 17th February 2024",
    description: [
      "Designed and developed a transportation booking landing page inspired by Uber Technologies, enabling users to simulate booking cars or rides.",
      "Collaborated with a team to brainstorm and build the project under a strict deadline, showcasing problem-solving and teamwork skills.",
      "Delivered a functional prototype demonstrating real-time features like booking options and dynamic User Interface elements."
    ],
    icon: <FaHackerrank className="text-green-500 text-4xl" />,
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-5xl font-bold mb-12"
      >
        EXPERIENCE
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10  bg-gray-900 bg-opacity-80 border-gray-700 p-6 md:p-8 rounded-lg shadow-lg relative border overflow-hidden"
          >
            {/* Floating icon */}
            <div className="absolute top-4 right-4 text-3xl md:text-4xl">{exp.icon}</div>
            
            <h3 className="text-2xl font-semibold text-blue-400 md:text-3xl">{exp.title}</h3>
            <p className="text-gray-400 text-sm md:text-base">{exp.company} | {exp.date}</p>
            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2 md:space-y-3">
              {exp.description.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="text-sm md:text-base"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;