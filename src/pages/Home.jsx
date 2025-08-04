import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import Flyer from '../components/Flyer';
import FeaturedProducts from '../components/FeaturedProducts';


const Home = () => {
  const navigate = useNavigate();

  return (
    <main style={{ textAlign: 'center', padding: 0, margin: 0 }}>
      <Flyer />

      <h1 className="home-title">Productos Destacados</h1>
      <FeaturedProducts />
      
      {/* Sección de enlaces y suscripción */}
      <div className="home-footer-section">
        <div className="home-view-all">
          <button className="view-all-btn" onClick={() => navigate('/catalogo')}>
            Ver todo
          </button>
        </div>
        
        <hr className="home-divider" />
        
        <div className="home-links-modern">
          <a href="#" className="home-privacy">POLÍTICAS DE PRIVACIDAD</a>
          <div className="home-search-link">Búsqueda</div>
        </div>
        
        <div className="home-subscribe">
          <div className="home-subscribe-title">Suscríbete para promociones exclusivas</div>
          <form className="home-form">
            <input type="email" placeholder="Correo electrónico" required />
            <button type="submit" className="home-arrow-btn" aria-label="Suscribirme">
              <span style={{fontSize: '1.3rem', fontWeight: 'bold', verticalAlign: 'middle'}}>&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;