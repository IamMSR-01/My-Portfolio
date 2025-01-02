// import React from 'react';
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';

import './App.css'
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
       
        ]
      } ,
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'experience',
        element: <Experience />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.scroll-container'),
      smooth: true, // smooth scrolling enabled
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => {
      scroll.destroy(); // Cleanup the scroll instance on component unmount
    };
  }, []);

  return (
    <div className="scroll-container">
      <div className="content">
        <RouterProvider router={router}>
          <Router />
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
