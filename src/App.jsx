

import React from 'react';
import Navbar from './components/Navbar';
import CartPage from './components/CartPage';
import CatalogPage from './components/CatalogPage';
import ContactPage from './components/ContactPage';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/" element={
          <main style={{ paddingTop: '120px', textAlign: 'center' }}>
            <h2>Bienvenido a nuestra tienda</h2>
            <p>Explora nuestros productos próximamente...</p>
          </main>
        } />
      </Routes>
    </Router>
  );
}

export default App;
