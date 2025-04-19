import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const links = document.querySelectorAll('a, button, .btn');
    
    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    
    const cursorHover = () => {
      cursor.classList.add('cursor-hover');
    };
    
    const cursorUnhover = () => {
      cursor.classList.remove('cursor-hover');
    };

    document.addEventListener('mousemove', moveCursor);
    
    links.forEach(link => {
      link.addEventListener('mouseenter', cursorHover);
      link.addEventListener('mouseleave', cursorUnhover);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', cursorHover);
        link.removeEventListener('mouseleave', cursorUnhover);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(25, 255, 255, 0.6);
          pointer-events: none;
          transform: translate3d(-50%, -50%, 0);
          transition: 
            transform 0.2s ease,
            width 0.3s ease,
            height 0.3s ease,
            background 0.3s ease;
          z-index: 9999;
          mix-blend-mode: difference;
        }
        
        .cursor-hover {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </>
  );
};

export default CustomCursor;