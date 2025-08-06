import React, { useState, useEffect } from 'react';
import '../styles/CatalogPage.css';
import CatalogProducts from './CatalogProducts';
import ScrollToTopButton from './ScrollToTopButton';

function CatalogPage() {
  // Estados para los filtros
  const [brandFilter, setBrandFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16); // 4 filas de 4 productos
  
  // Estado para el número total de productos después de aplicar los filtros
  const [totalFilteredProducts, setTotalFilteredProducts] = useState(0);
  
  const handleBrandFilterChange = (e) => {
    setBrandFilter(e.target.value);
    setCurrentPage(1); // Reset a la primera página al cambiar el filtro
  };
  
  const handleAvailabilityChange = (e) => {
    setAvailabilityFilter(e.target.value);
    setCurrentPage(1);
  };
  
  const handlePriceRangeChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
    setCurrentPage(1);
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleNextPage = () => {
    const totalPages = Math.ceil(totalFilteredProducts / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Recibir actualización del número total de productos filtrados
  const updateTotalFilteredProducts = (count) => {
    setTotalFilteredProducts(count);
  };

  return (
    <div className="catalog-page">
      <h1 className="catalog-title">Catálogo</h1>
      
      <div className="catalog-description">
        <p>Explora nuestra colección completa de gorras y accesorios</p>
        <div className="product-count">
          Mostrando {Math.min(itemsPerPage, totalFilteredProducts - (currentPage - 1) * itemsPerPage)} de {totalFilteredProducts} productos
        </div>
      </div>
      
      <div className="catalog-filters">
        <div className="filters-container">
          <div className="filter-group">
            <label htmlFor="brand-filter">Marca:</label>
            <select 
              id="brand-filter" 
              className="filter-select" 
              value={brandFilter}
              onChange={handleBrandFilterChange}
            >
              <option value="">Todos los productos</option>
              <option value="dandy">Dandy Hats</option>
              <option value="barbas">Barbas Hats</option>
              <option value="vibe">Vibe Hats</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="availability-filter">Disponibilidad:</label>
            <select 
              id="availability-filter" 
              className="filter-select"
              value={availabilityFilter}
              onChange={handleAvailabilityChange}
            >
              <option value="all">Todos</option>
              <option value="in-stock">En stock</option>
              <option value="offer">En oferta</option>
            </select>
          </div>
          
          <div className="filter-group price-range">
            <label>Rango de precio:</label>
            <div className="range-inputs">
              <input 
                type="number" 
                min="0" 
                max="3000" 
                value={priceRange[0]} 
                onChange={(e) => handlePriceRangeChange(e, 0)}
                className="price-input"
              />
              <span>-</span>
              <input 
                type="number" 
                min="0" 
                max="3000" 
                value={priceRange[1]} 
                onChange={(e) => handlePriceRangeChange(e, 1)}
                className="price-input"
              />
            </div>
          </div>
          
          <div className="filter-group">
            <label htmlFor="sort-by">Ordenar por:</label>
            <select 
              id="sort-by" 
              className="filter-select"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="default">Predeterminado</option>
              <option value="name-asc">A-Z</option>
              <option value="name-desc">Z-A</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>
      
      <CatalogProducts 
        brandFilter={brandFilter}
        availabilityFilter={availabilityFilter}
        priceRange={priceRange}
        sortBy={sortBy}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        updateTotalFilteredProducts={updateTotalFilteredProducts}
      />
      
      <div className="pagination">
        <button 
          className="page-arrow" 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        
        {Array.from({ length: Math.min(4, Math.ceil(totalFilteredProducts / itemsPerPage)) }).map((_, index) => {
          const pageNumber = currentPage > 2 && totalFilteredProducts / itemsPerPage > 3 
            ? currentPage - 1 + index 
            : index + 1;
            
          if (pageNumber > Math.ceil(totalFilteredProducts / itemsPerPage)) return null;
          
          return (
            <button
              key={pageNumber}
              className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        
        <button 
          className="page-arrow" 
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(totalFilteredProducts / itemsPerPage)}
        >
          &gt;
        </button>
      </div>
      
      <ScrollToTopButton />
    </div>
  );
}

export default CatalogPage;
