import React, { useEffect } from 'react';
import styled from 'styled-components';

// Utilisation de styled-components pour éviter l'erreur JSX
const CursorDiv = styled.div`
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  transform: translate3d(-50%, -50%, 0);
  transition: 
    transform 0.2s ease,
    width 0.3s ease,
    height 0.3s ease,
    background 0.3s ease;
  z-index: 9999;
  mix-blend-mode: difference;

  ${props => props.$hover && `
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.4);
  `}
`;

const CustomCursor = () => {
  const cursorRef = React.useRef(null);
  const [isHovering, setIsHovering] = React.useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    document.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return <CursorDiv ref={cursorRef} $hover={isHovering} />;
};

export default CustomCursor;