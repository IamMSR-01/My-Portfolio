import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Links/Buttons पर हॉवर डिटेक्ट करने के लिए
    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    const clickableElements = document.querySelectorAll('a, button, .hover-effect');
    clickableElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clickableElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? 20 : 10),
        y: mousePosition.y - (isHovering ? 20 : 10),
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <div className={`w-5 h-5 rounded-full ${isHovering ? 'bg-white' : 'bg-blue-500'}`} />
    </motion.div>
  );
};

export default CustomCursor;