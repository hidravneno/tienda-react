
import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      showToast('Producto eliminado del carrito', 'info', 3000);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveFromCart = (productId, productName) => {
    removeFromCart(productId);
    showToast(`${productName} eliminado del carrito`, 'info', 3000);
  };

  const handleClearCart = () => {
    clearCart();
    showToast('Carrito vaciado completamente', 'info', 3000);
  };

  const formatPrice = (price) => {
    return parseFloat(price.replace(',', '')).toLocaleString('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  if (cart.items.length === 0) {
    return (
      <div className="cart-page cart-page-empty">
        <div className="empty-cart">
          <h1 className="cart-title">Tu carrito está vacío</h1>
          <p>¡Agrega algunos productos increíbles!</p>
          <button className="cart-btn" onClick={() => navigate('/')}>Seguir comprando</button>
          <hr className="cart-divider" />
          <div className="cart-links-modern">
            <a href="#" className="cart-privacy">POLÍTICAS DE PRIVACIDAD</a>
            <div className="cart-search-link">Búsqueda</div>
          </div>
          <div className="cart-subscribe">
            <div className="cart-subscribe-title">Suscríbete para promociones exclusivas</div>
            <form className="cart-form">
              <input type="email" placeholder="Correo electrónico" required />
              <button type="submit" className="cart-arrow-btn" aria-label="Suscribirme">
              <span style={{fontSize: '1.3rem', fontWeight: 'bold', verticalAlign: 'middle'}}>&rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Mi Carrito ({getTotalItems()} productos)</h1>
        <button onClick={handleClearCart} className="clear-cart-btn">
          Vaciar carrito
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.images[0]} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${formatPrice(item.price)} MXN</p>
                {item.originalPrice && (
                  <p className="item-original-price">
                    Precio original: ${formatPrice(item.originalPrice)} MXN
                  </p>
                )}
              </div>

              <div className="quantity-controls">
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>

              <div className="item-total">
                ${formatPrice((parseFloat(item.price.replace(',', '')) * item.quantity).toString())} MXN
              </div>

              <button 
                onClick={() => handleRemoveFromCart(item.id, item.name)}
                className="remove-btn"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Resumen del pedido</h3>
            <div className="summary-line">
              <span>Productos ({getTotalItems()})</span>
              <span>${formatPrice(getTotalPrice().toString())} MXN</span>
            </div>
            <div className="summary-line">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>${formatPrice(getTotalPrice().toString())} MXN</span>
            </div>
            <button className="checkout-btn">
              Proceder al pago
            </button>
            <button onClick={() => navigate('/')} className="continue-shopping-btn">
              Continuar comprando
            </button>
          </div>
        </div>
      </div>

      <div className="cart-footer">
        <hr className="cart-divider" />
        <div className="cart-links-modern">
          <a href="#" className="cart-privacy">POLÍTICAS DE PRIVACIDAD</a>
          <div className="cart-search-link">Búsqueda</div>
        </div>
        <div className="cart-subscribe">
          <div className="cart-subscribe-title">Suscríbete para promociones exclusivas</div>
          <form className="cart-form">
            <input type="email" placeholder="Correo electrónico" required />
            <button type="submit" className="cart-arrow-btn" aria-label="Suscribirme">
              <span style={{fontSize: '1.3rem', fontWeight: 'bold', verticalAlign: 'middle'}}>&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
