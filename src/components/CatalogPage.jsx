import React from 'react';
import '../styles/CatalogPage.css';
import CatalogProducts from './CatalogProducts';
import ScrollToTopButton from './ScrollToTopButton';

function CatalogPage() {
  return (
    <div className="catalog-page">
      <h1 className="catalog-title">Catálogo</h1>
      
      <div className="catalog-description">
        <p>Explora nuestra colección completa de gorras y accesorios</p>
      </div>
      
      <div className="catalog-filters">
        <select className="filter-select">
          <option value="">Todos los productos</option>
          <option value="dandy">Dandy Hats</option>
          <option value="barbas">Barbas Hats</option>
          <option value="vibe">Vibe Hats</option>
        </select>
      </div>
      
      <CatalogProducts />
      <ScrollToTopButton />
    </div>
  );
}

export default CatalogPage;
