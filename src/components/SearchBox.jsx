import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBox.css';

// Importamos datos de productos del catálogo para la búsqueda
function SearchBox({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Productos para buscar (usando los mismos que en CatalogProducts)
  const allProducts = [
    {
      id: 1,
      name: "50/50 Dandy Hats",
      price: "1,549.00",
      image: "/LABLACK.webp",
      brand: "dandy"
    },
    {
      id: 2,
      name: "ÁNGEL AZUL (Dandy Hats)",
      price: "1,699.00",
      image: "/LAAZUL.webp",
      brand: "dandy"
    },
    {
      id: 3,
      name: "BARBAS B*ANGING B*TCHES (Barbas Hats)",
      price: "1,899.00",
      image: "/B.webp",
      brand: "barbas"
    },
    {
      id: 4,
      name: "BEAR SCOTT (Barbas Hats)",
      price: "1,599.00",
      image: "/OSO.webp",
      brand: "barbas"
    },
    {
      id: 5,
      name: "BLACKOUT STARS (Barbas Hats)",
      price: "1,549.00",
      image: "/BH.webp",
      brand: "barbas"
    },
    {
      id: 6,
      name: "CHROME VI EDICION LUXE 6 (Barbas Hats)",
      price: "1,699.00",
      image: "/TFRONT.webp",
      brand: "barbas"
    },
    {
      id: 7,
      name: "CLAVE ALI (Dandy Hats)",
      price: "1,899.00",
      image: "/HFRONT.webp",
      brand: "dandy"
    },
    {
      id: 8,
      name: "COMO JORDAN (Dandy Hats)",
      price: "1,599.00",
      image: "/SAD.webp",
      brand: "dandy"
    },
    {
      id: 9,
      name: "TRUCKER BLACK (Vibe Hats)",
      price: "1,749.00",
      image: "/LABLACK.webp",
      brand: "vibe"
    },
    {
      id: 10,
      name: "FRESH STYLE (Vibe Hats)",
      price: "1,599.00",
      image: "/LAAZUL.webp",
      brand: "vibe"
    },
    {
      id: 11,
      name: "URBAN HERITAGE (Barbas Hats)",
      price: "1,799.00",
      image: "/B.webp",
      brand: "barbas"
    },
    {
      id: 12,
      name: "STREET VISION (Dandy Hats)",
      price: "1,649.00",
      image: "/OSO.webp",
      brand: "dandy"
    },
  ];

  // Búsqueda en tiempo real
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setSelectedIndex(-1);
      return;
    }

    const results = allProducts.filter(
      product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Limitar a 6 resultados para no sobrecargar la UI
    setSearchResults(results.slice(0, 6));
    setSelectedIndex(-1); // Resetear la selección al cambiar los resultados
  }, [searchTerm]);

  // Referencias para los elementos seleccionados
  const selectedItemRef = useRef(null);
  
  // Enfocar el input al mostrar el SearchBox y manejo de teclas
  useEffect(() => {
    inputRef.current?.focus();
    
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (searchResults.length > 0) {
          setSelectedIndex(prev => (prev < searchResults.length - 1 ? prev + 1 : 0));
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (searchResults.length > 0) {
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : searchResults.length - 1));
        }
      } else if (e.key === 'Enter' && selectedIndex >= 0 && searchResults[selectedIndex]) {
        handleProductSelect(searchResults[selectedIndex].id);
      }
    }
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, searchResults, selectedIndex]);
  
  // Hacer scroll al elemento seleccionado cuando cambia la selección
  useEffect(() => {
    if (selectedIndex >= 0 && document.querySelector('.search-result-item.selected')) {
      document.querySelector('.search-result-item.selected').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [selectedIndex]);

  // Manejar selección de un producto
  const handleProductSelect = (productId) => {
    navigate(`/producto/${productId}`);
    onClose();
  };

  return (
    <div className="searchbox-modal" onClick={onClose}>
      <div className="searchbox-container" onClick={e => e.stopPropagation()}>
        <div className="searchbox-input-and-close">
          <div className="searchbox-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar..."
              className="searchbox-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="searchbox-icon" title="Buscar" />
          </div>
          <button className="searchbox-close" onClick={onClose} aria-label="Cerrar búsqueda">
            <FaTimes />
          </button>
        </div>
        
        {/* Resultados de búsqueda con miniaturas */}
        {searchTerm.trim() !== '' && (
          <div className="search-results">
            {searchResults.length > 0 ? (
              <>
                <div className="search-navigation-hint">
                  Utiliza las flechas ↑↓ para navegar y Enter para seleccionar
                </div>
                {searchResults.map(product => (
                <div 
                  key={product.id} 
                  className={`search-result-item ${selectedIndex === searchResults.indexOf(product) ? 'selected' : ''}`}
                  onClick={() => handleProductSelect(product.id)}
                >
                  <div className="search-result-img">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="search-result-info">
                    <div className="search-result-name">{product.name}</div>
                    <div className="search-result-price">${product.price} MXN</div>
                  </div>
                </div>
              ))}
              </>
            ) : (
              <div className="no-results">
                No se encontraron productos que coincidan con "{searchTerm}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
