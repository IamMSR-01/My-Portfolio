import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

function Home() {
    return (
        <div>
            <div className='flex h-[65vh] sm:h-[98vh] text-white'>
                <div className='absolute'>
                    <div className='flex'>
                        <img
                            className='ml-4 sm:ml-20 w-8 sm:w-12'
                            src="https://shieldeum.net/assets/img/line_1.svg"
                            alt=""
                        />
                        <div className='font-semibold text-4xl sm:font-bold sm:text-5xl top-0 mt-14 sm:mt-36'>
                            <h1>Mohd</h1>
                            <h1 className='ml-8 mt-4'>Shaqib Raza</h1>
                        </div>
                    </div>
                    <h1 className='ml-14 mt-6 font-medium text-2xl sm:ml-24 sm:mt-8 sm:font-semibold sm:text-4xl'>
                        Frontend Web Developer
                    </h1>
                    <p className='mt-3 sm:mt-6 ml-10 p-2 sm:ml-24 font-normal text-lg sm:w-[50%]'>
                        " Hii I’m Mohd Shaqib Raza, a passionate web developer focused on building dynamic and responsive websites. I’m working towards becoming a full-stack developer by honing my skills through personal projects and continuous learning."
                    </p>
                   
                </div>
                <div className='w-[100%] sm:hidden'>
                    <video autoPlay loop src="hero-mobile-vedio.webm"></video>
                </div>
                <div className='hidden sm:block w-[100%]'>
                    <video autoPlay loop src="hero-desktop-web.webm"></video>
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



