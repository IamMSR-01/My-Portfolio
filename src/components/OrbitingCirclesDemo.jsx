import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40} radius={210}>
        <Icons.javaScript />
        <Icons.html />
        <Icons.css />
        <Icons.java />
        <Icons.react />
        <Icons.node />
        <Icons.express />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={150} reverse speed={2}>
        <Icons.mongodb />
        <Icons.python />
        <Icons.cPlusPlus />
        <Icons.c />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={80} reverse speed={1}>
      <Icons.figma />
      <Icons.git />
      <Icons.tailwind />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  javaScript: () => (
    <div className='flex flex-col items-center'>
        <IoLogoJavascript className=' text-4xl text-yellow-400' />
        <h1 className='text-yellow-400'>JavaScript</h1>
    </div>
  ),
  html: () => (
    <div className='flex flex-col items-center'>
        <FaHtml5 className=' text-4xl text-red-500' />
        <h1 className='text-red-600'>HTML</h1>
    </div>
  ),
  css: () => (
    <div className='flex flex-col items-center'>
        <IoLogoCss3 className=' text-4xl text-blue-800' />
        <h1 className='text-blue-800'>CSS</h1>
    </div>
  ),
  java: () => (
    <div className='flex flex-col items-center'>
        <FaJava className=' text-4xl text-red-500' />
        <h1 className='text-blue-900'>Java</h1>
    </div>
  ),
  node: () => (
    <div className='flex flex-col items-center'>
        <FaNodeJs  className=' text-4xl text-green-600' />
        <h1 className='text-green-600'>Node</h1>
    </div>
  ),
  react: () => (
    <div className='flex flex-col items-center'>
        <FaReact className=' text-4xl text-blue-500' />
        <h1 className='text-blue-600'>React</h1>
    </div>
  ),
  express: () => (
    <div className='flex flex-col items-center'>
        <SiExpress className=' text-4xl text-green-700' />
        <h1 className='text-green-700'>Express</h1>
    </div>
  ),
  mongodb: () => (
    <div className='flex flex-col items-center'>
        <SiMongodb className=' text-4xl text-green-700' />
        <h1 className='text-green-700'>MongoDB</h1>
    </div>
  ),
  python: () => (
    <div className='flex flex-col items-center'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="" srcset="" />
        <h1 className='text-blue-900'>Python</h1>
    </div>
  ),
  cPlusPlus: () => (
    <div className='flex flex-col items-center'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/911px-ISO_C%2B%2B_Logo.svg.png" alt="" srcset="" />
        <h1 className='text-blue-500'>C++</h1>
    </div>
  ),
  c: () => (
    <div className='flex flex-col items-center'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png" alt="" srcset="" />
        <h1 className='text-blue-500'>C</h1>
    </div>
  ),
  figma: () => (
    <div className='flex flex-col items-center'>
        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" alt="" srcset="" />
        <h1 className='text-red-700'>Figma</h1>
    </div>
  ),
  git: () => (
    <div className='flex flex-col items-center'>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png?f=webp&w=256" alt="" srcset="" />
        <h1 className='text-orange-700'>Git</h1>
    </div>
  ),
  tailwind: () => (
    <div className='flex flex-col items-center'>
        <RiTailwindCssFill className=' text-4xl text-blue-700' />
        <h1 className='text-blue-700'>TialwindCSS</h1>
    </div>
  ),
};
