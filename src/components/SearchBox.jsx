import React, { useEffect, useRef } from 'react';

function SearchBox({ onClose, localAnchor }) {
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
    <div
      style={{
        position: 'absolute',
        top: '100%',
        right: localAnchor ? 0 : 0,
        left: localAnchor ? 'auto' : undefined,
        transform: 'none',
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        padding: '16px 32px',
        zIndex: 3000,
        boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        transition: 'all 0.3s',
      }}
      onClick={onClose}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar..."
        style={{
          border: 'none',
          outline: 'none',
          fontSize: '1.1rem',
          padding: '10px 18px',
          borderRadius: 8,
          background: '#222',
          color: '#fff',
          minWidth: 200,
          boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
        }}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}

export default SearchBox;
