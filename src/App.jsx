import React from 'react';
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';

import './App.css'
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';



const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/home',
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
  return (
    <RouterProvider router={router}>
      <Router />
    </RouterProvider>
  )
}

export default App
