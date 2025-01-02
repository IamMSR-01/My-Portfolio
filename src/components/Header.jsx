import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="text-white xl:w-[98%] md:m-auto gap-0 xl:mt-4 md:h-24 sm:flex flex-wrap">
                <div className="bg hidden text-white xl:w-[30%] xl:rounded-xl style1 xl:flex items-center pl-5 xl:font-bold xl:text-2xl 2xl:text-3xl">
                    <NavLink to="/">
                        <div className="flex gap-5 items-center">
                            <img className="w-16" src="portfolio-profile-pic.png" alt="Profile" />
                            <h1 className="hidden sm:block">Mohd Shaqib Raza</h1>
                        </div>
                    </NavLink>
                </div>

                {/* Navbar for large screens */}
                <div className="bg text-white w-full xl:w-[70%] xl:rounded-xl items-end justify-items-end">
                    <nav className="p-1 md:p-4">
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 xl:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                {/* Mobile menu button */}
                                <div className=" inset-y-0 flex items-center justify-between">
                                    <a href="/">
                                        <img className="w-10 xl:hidden mr-80" src="portfolio-profile-pic.png" alt="Profile" />
                                    </a>
                                    <button
                                        type="button"
                                        className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
                                        onClick={toggleMenu}
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        <svg
                                            className="block h-8 w-8"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>

                                {/* Navbar links */}
                                <div className="sm:ml-28 lg:ml-40 xl:ml-0 flex-1 flex sm:items-stretch sm:justify-start">
                                    <div className="hidden m-auto sm:block">
                                        <div className="flex space-x-4 items-center justify-center w-full">
                                            <NavLink
                                                to="/"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-2 pl-1 md:font-semibold md:text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                                }
                                            >
                                                Home
                                            </NavLink>
                                            <NavLink
                                                to="/about"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-2 pl-1 md:font-semibold md:text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                                }
                                            >
                                                About
                                            </NavLink>
                                            <NavLink
                                                to="/skills"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-2 pl-1 md:font-semibold md:text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                                }
                                            >
                                                Skills
                                            </NavLink>
                                            <NavLink
                                                to="/projects"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-2 pl-1 md:font-semibold md:text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                                }
                                            >
                                                Projects
                                            </NavLink>
                                            <NavLink
                                                to="/experience"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-2 pl-1 md:font-semibold md:text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                                }
                                            >
                                                Experience
                                            </NavLink>
                                            <NavLink
                                                to="/contact"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-2 pl-1 md:font-semibold md:text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                                }
                                            >
                                                Contact
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-2 pl-1 font-semibold text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-2 pl-1 font-semibold text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                    }
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/skills"
                                    className={({ isActive }) =>
                                        `block py-2 pr-2 pl-1 font-semibold text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                    }
                                >
                                    Skills
                                </NavLink>
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        `block py-2 pr-2 pl-1 font-semibold text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                    }
                                >
                                    Projects
                                </NavLink>
                                <NavLink
                                    to="/experience"
                                    className={({ isActive }) =>
                                        `block py-2 pr-2 pl-1 font-semibold text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                    }
                                >
                                    Experience
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-2 pl-1 font-semibold text-xl duration-200 ${isActive ? "text-green-500" : "text-white"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
