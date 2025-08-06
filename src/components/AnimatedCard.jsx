import React, { useEffect, useRef, useState } from 'react';

const AnimatedCard = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Si el elemento es visible en el viewport
      if (entries[0].isIntersecting) {
        // Añadir un pequeño retraso según la posición para crear efecto cascada
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
        // Dejar de observar una vez que se ha mostrado
        observer.unobserve(cardRef.current);
      }
    }, { threshold: 0.1 }); // Trigger cuando al menos el 10% del elemento es visible
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    width: '100%',
    overflow: 'hidden',
  };
  
  return (
    <div ref={cardRef} style={style}>
      {children}
    </div>
  );
};

export default AnimatedCard;
