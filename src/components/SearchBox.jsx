import React, { useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import '../styles/SearchBox.css';

function SearchBox({ onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    function handleEsc(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="searchbox-modal" onClick={onClose}>
      <div className="searchbox-container" onClick={e => e.stopPropagation()}>
        <div className="searchbox-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar..."
            className="searchbox-input"
          />
          <FaSearch className="searchbox-icon" title="Buscar" />
        </div>
        <button className="searchbox-close" onClick={onClose} aria-label="Cerrar búsqueda">
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
