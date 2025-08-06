import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/ocultar el botón basado en la posición de scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para volver al inicio con animación
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top-btn"
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
