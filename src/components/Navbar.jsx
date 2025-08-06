import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import SearchBox from './SearchBox';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  // Cierra el menú si la ventana se hace grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cerrar el input de búsqueda al hacer click fuera o presionar Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    function handleEsc(e) {
      if (e.key === 'Escape') setShowSearch(false);
    }
    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [showSearch]);

  return (
    <nav className="navbar" style={{ position: 'relative' }}>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <FaBars size={24} />
      </button>
      <div className="navbar-brand" style={{cursor: 'pointer'}} onClick={() => { setMenuOpen(false); navigate('/'); }}>
        <img src="/logo.png" alt="Logo" className="logo-image" />
        <div className="logo">Vibe Tumbado</div>
      </div>
      <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
        {/* Botón de cerrar solo visible en móvil */}
        <li className="close-btn" style={{display: menuOpen ? 'block' : 'none'}}>
          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <FaTimes size={24} />
          </button>
        </li>
        <li onClick={() => { setMenuOpen(false); navigate('/'); }}>Inicio</li>
        <li onClick={() => { setMenuOpen(false); navigate('/catalogo'); }}>Catálogo</li>
        <li onClick={() => { setMenuOpen(false); navigate('/contacto'); }}>Contacto</li>
        <li>
          <span onClick={() => setShowSearch((v) => !v)}>
            <FaSearch title="Buscar" className="icon" />
          </span>
        </li>
        <li onClick={() => { setMenuOpen(false); navigate('/cart'); }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <FaShoppingCart title="Carrito" className="icon" />
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </div>
        </li>
      </ul>
      {showSearch && (
        <div style={{
          position: 'absolute',
          left: '45%', /* Cambiado de 50% a 45% para mover el buscador a la izquierda */
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2000,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <SearchBox onClose={() => setShowSearch(false)} />
        </div>
      )}
    </nav>
  );
}

export default Navbar
