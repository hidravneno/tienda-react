
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage() {
  const navigate = useNavigate();
  return (
    <div className="cart-page">
      <h1 className="cart-title">Tu carrito esta vacío</h1>
      <button className="cart-btn" onClick={() => navigate('/catalogo')}>Seguir comprando</button>
      <hr className="cart-divider" />
      <div className="cart-links-modern">
        <a href="#" className="cart-privacy">POLITICAS DE PRIVACIDAD</a>
        <div className="cart-search-link">Búsqueda</div>
      </div>
      <div className="cart-subscribe">
        <div className="cart-subscribe-title">Suscribete para promociones exclusivas</div>
        <form className="cart-form">
          <input type="email" placeholder="Correo electrónico" required />
          <button type="submit" className="cart-arrow-btn" aria-label="Suscribirme">
            <span style={{fontSize: '1.3rem', fontWeight: 'bold', verticalAlign: 'middle'}}>&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartPage;
