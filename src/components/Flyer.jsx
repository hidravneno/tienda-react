
import React from 'react';
import '../styles/Flyer.css';

const Flyer = () => (
  <div className="flyer-container">
    <div className="flyer-image-wrapper">
      <img
        src="/fidel.webp"
        alt="Flyer promocional"
        className="flyer-image"
      />
      <button className="flyer-btn">
        Comprar
      </button>
    </div>
  </div>
);

export default Flyer;
