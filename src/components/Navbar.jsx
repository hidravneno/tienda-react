import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import SearchBox from './SearchBox';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

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
      <div className="navbar-brand">
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
        <li onClick={() => setMenuOpen(false)}>Inicio</li>
        <li onClick={() => setMenuOpen(false)}>Catálogo</li>
        <li onClick={() => setMenuOpen(false)}>Contacto</li>
        <li style={{ position: 'relative' }}>
          <span onClick={() => setShowSearch((v) => !v)}>
            <FaSearch title="Buscar" className="icon" />
          </span>
          {showSearch && (
            <SearchBox onClose={() => setShowSearch(false)} localAnchor />
          )}
        </li>
        <li onClick={() => setMenuOpen(false)}><FaShoppingCart title="Carrito" className="icon" /></li>
      </ul>
      {/* Eliminado: SearchBox duplicado fuera del ul */}
    </nav>
  );
}

export default Navbar
