

import React from 'react';
import Navbar from './components/Navbar';
import CartPage from './components/CartPage';
import CatalogPage from './components/CatalogPage';
import ContactPage from './components/ContactPage';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ToastProvider>
    </CartProvider>
  );
}

export default App;
