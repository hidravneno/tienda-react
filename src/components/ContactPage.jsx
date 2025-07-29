import React from 'react';
import '../styles/ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contacto</h1>
      <p className="contact-desc">¿Tienes dudas, comentarios o quieres colaborar? ¡Escríbenos!</p>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required className="contact-input" />
        <input type="email" placeholder="Correo electrónico" required className="contact-input" />
        <textarea placeholder="Mensaje" required className="contact-textarea" rows={5}></textarea>
        <button type="submit" className="contact-btn">Enviar mensaje</button>
      </form>
      <div className="contact-info">
        <p>Email: contacto@vibetumbado.com</p>
        <p>Instagram: @vibetumbado</p>
      </div>
    </div>
  );
}

export default ContactPage;
