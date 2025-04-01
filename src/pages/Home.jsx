import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const roles = ["Full Stack Developer", "Backend Developer", "Frontend Developer", "Freelancer"];

function Home() {
    return (
        <div>
            <div className='flex h-[65vh] bg-gradient-to-r from-black via-gray-900 to-black sm:h-[98vh] text-white relative overflow-hidden'>
                
                <div className='absolute inset-0 animate-bgNoise opacity-20'></div>

                <div className='absolute'>
                    <div className='flex'>
                        <img
                            className='ml-4 sm:ml-20 w-8 sm:w-12 animate-float'
                            src="https://shieldeum.net/assets/img/line_1.svg"
                            alt=""
                        />
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className='font-semibold text-4xl sm:font-bold sm:text-6xl top-0 mt-14 sm:mt-36'
                        >
                            <h1>Mohd</h1>
                            <h1 className='ml-8 mt-4'>Shaqib Raza</h1>
                        </motion.div>
                    </div>
                    
                    {/* Typewriter Effect for Role */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='ml-14 mt-6 font-medium text-3xl sm:ml-24 sm:mt-8 sm:font-semibold sm:text-5xl text-blue-700'
                    >
                        <Typewriter
                            words={roles}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, x: 30 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1, ease: "easeOut" }}
                        className='mt-3 sm:mt-6 ml-10 p-2 sm:ml-24 font-normal text-lg sm:w-[50%]'
                    >
                        I’m Mohd Shaqib Raza, a Full-Stack Developer specializing in the MERN stack. I build scalable web applications with React, Node.js, Express, and MongoDB, focusing on clean UI, <br />
                        efficient backend, and seamless API integration. With a problem-solving mindset <br /> and a drive for continuous learning, I create high-performance solutions <br />
                        that enhance user experience and drive growth.
                    </motion.p>
                </div>

                {/* Right Side Middle Image */}
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 sm:right-20">
                    <img 
                        src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Shaqib" 
                        className="w-24 sm:w-[500px] rounded-full border-2 border-white shadow-lg"
                    />
                </div>

            </div>


            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}

export default Home;
