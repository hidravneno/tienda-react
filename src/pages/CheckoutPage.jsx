import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css';

function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });
  const [step, setStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el pago
    // Por ahora, simularemos un pago exitoso
    setStep(3);
    clearCart();
  };

  const formatPrice = (price) => {
    return parseFloat(price.replace(',', '')).toLocaleString('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  if (step === 3) {
    return (
      <div className="checkout-page">
        <div className="checkout-success">
          <div className="success-icon">✓</div>
          <h1>¡Pago completado con éxito!</h1>
          <p>Tu pedido ha sido procesado y será enviado pronto.</p>
          <p>Te hemos enviado un correo electrónico con los detalles de tu compra.</p>
          <button className="primary-button" onClick={() => navigate('/')}>
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h1>Finalizar compra</h1>
        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-title">Información de envío</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-title">Método de pago</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-title">Confirmación</div>
          </div>
        </div>
      </div>

      <div className="checkout-content">
        <div className="checkout-form-container">
          {step === 1 && (
            <form className="checkout-form">
              <h2>Información de envío</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Nombre</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Apellidos</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Ciudad</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">Estado</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="zipCode">Código postal</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-buttons">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => navigate('/cart')}
                >
                  Volver al carrito
                </button>
                <button
                  type="button"
                  className="primary-button"
                  onClick={handleNextStep}
                >
                  Continuar
                </button>
              </div>
            </form>
          )}
          
          {step === 2 && (
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h2>Método de pago</h2>
              <div className="payment-methods">
                <div className="payment-option">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="creditCard"
                    defaultChecked
                  />
                  <label htmlFor="creditCard">Tarjeta de crédito/débito</label>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="cardName">Nombre en la tarjeta</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cardNumber">Número de tarjeta</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expMonth">Mes de expiración</label>
                  <select
                    id="expMonth"
                    name="expMonth"
                    value={formData.expMonth}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">MM</option>
                    {Array.from({ length: 12 }, (_, i) => {
                      const month = i + 1;
                      return (
                        <option key={month} value={month}>
                          {month.toString().padStart(2, '0')}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="expYear">Año de expiración</label>
                  <select
                    id="expYear"
                    name="expYear"
                    value={formData.expYear}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">YYYY</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() + i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group cvv-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    maxLength="4"
                    placeholder="XXX"
                    required
                  />
                </div>
              </div>
              
              <div className="form-buttons">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={handlePrevStep}
                >
                  Volver
                </button>
                <button type="submit" className="primary-button">
                  Completar pedido
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="checkout-summary">
          <div className="summary-card">
            <h3>Resumen del pedido</h3>
            {cart.items.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="item-info">
                  <div className="item-quantity">{item.quantity}x</div>
                  <div className="item-name">{item.name}</div>
                </div>
                <div className="item-price">${formatPrice((parseFloat(item.price.replace(',', '')) * item.quantity).toString())} MXN</div>
              </div>
            ))}
            <hr className="summary-divider" />
            <div className="summary-line">
              <span>Subtotal</span>
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
          </div>
        </div>
      </div>

      <div className="checkout-footer">
        <div className="checkout-security">
          <span className="security-icon">🔒</span>
          Pago seguro y encriptado
        </div>
        <div className="payment-methods-icons">
          <span className="payment-icon">💳</span>
          <span className="payment-icon">💳</span>
          <span className="payment-icon">💳</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
