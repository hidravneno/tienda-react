import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from './ProductCard';
import AnimatedCard from './AnimatedCard';
import '../styles/CatalogProducts.css';

const CatalogProducts = ({
  brandFilter,
  availabilityFilter,
  priceRange,
  sortBy,
  currentPage,
  itemsPerPage,
  updateTotalFilteredProducts
}) => {
  // Productos para el catálogo (incluye los productos destacados más productos adicionales)
  // Añadimos el atributo "brand" para identificar la marca y "inStock" para disponibilidad
  const allCatalogProducts = [
    {
      id: 1,
      name: "50/50 Dandy Hats",
      price: "1,549.00",
      originalPrice: "2,500.00",
      image: "/LABLACK.webp",
      hoverImage: "/LABLACKDELADO.webp",
      isOffer: true,
      brand: "dandy",
      inStock: true
    },
    {
      id: 2,
      name: "ÁNGEL AZUL (Dandy Hats)", 
      price: "1,699.00",
      originalPrice: "2,500.00",
      image: "/LAAZUL.webp",
      hoverImage: "/LAAZULADITO.webp",
      isOffer: true,
      brand: "dandy",
      inStock: true
    },
    {
      id: 3,
      name: "BARBAS B*ANGING B*TCHES (Barbas Hats)",
      price: "1,899.00", 
      originalPrice: "2,499.00",
      image: "/B.webp",
      hoverImage: "/BFRONT.webp",
      isOffer: true,
      brand: "barbas",
      inStock: true
    },
    {
      id: 4,
      name: "BEAR SCOTT (Barbas Hats)",
      price: "1,599.00",
      originalPrice: "1,899.00", 
      image: "/OSO.webp",
      hoverImage: "/OSOFRONT.webp",
      isOffer: true,
      brand: "barbas",
      inStock: false
    },
    {
      id: 5,
      name: "BLACKOUT STARS (Barbas Hats)",
      price: "1,549.00",
      originalPrice: "2,500.00",
      image: "/BH.webp",
      hoverImage: "/BHLADOIZQUIERDO.webp",
      isOffer: true,
      brand: "barbas",
      inStock: true
    },
    {
      id: 6,
      name: "CHROME VI EDICION LUXE 6 (Barbas Hats)",
      price: "1,699.00",      
      originalPrice: "2,500.00",
      image: "/TFRONT.webp",
      hoverImage: "/TLADO.webp",
      isOffer: true,
      brand: "barbas",
      inStock: true
    },
    {
      id: 7,
      name: "CLAVE ALI (Dandy Hats)",
      price: "1,899.00",
      originalPrice: "2,499.00",
      image: "/HFRONT.webp",
      hoverImage: "/HLADOFRONT.webp",
      isOffer: true,
      brand: "dandy",
      inStock: true
    },
    {
      id: 8,
      name: "COMO JORDAN (Dandy Hats)",
      price: "1,599.00",
      originalPrice: "1,899.00",
      image: "/SAD.webp",
      hoverImage: "/SADFRONTLADO.webp",
      isOffer: true,
      brand: "dandy",
      inStock: false
    },
    // Productos adicionales para llenar el catálogo (6 productos más para completar 2 filas más)
    {
      id: 9,
      name: "TRUCKER BLACK (Vibe Hats)",
      price: "1,749.00",
      originalPrice: "2,200.00",
      image: "/LABLACK.webp",
      hoverImage: "/LABLACKDELADO.webp",
      isOffer: true,
      brand: "vibe",
      inStock: true
    },
    {
      id: 10,
      name: "FRESH STYLE (Vibe Hats)",
      price: "1,599.00",
      originalPrice: "2,099.00",
      image: "/LAAZUL.webp",
      hoverImage: "/LAAZULADITO.webp",
      isOffer: true,
      brand: "vibe",
      inStock: true
    },
    {
      id: 11,
      name: "URBAN HERITAGE (Barbas Hats)",
      price: "1,799.00",
      originalPrice: "2,300.00",
      image: "/B.webp",
      hoverImage: "/BFRONT.webp",
      isOffer: true,
      brand: "barbas",
      inStock: true
    },
    {
      id: 12,
      name: "STREET VISION (Dandy Hats)",
      price: "1,649.00",
      originalPrice: "2,100.00",
      image: "/OSO.webp",
      hoverImage: "/OSOFRONT.webp",
      isOffer: true,
      brand: "dandy",
      inStock: true
    },
    {
      id: 13,
      name: "WILD STYLE (Vibe Hats)",
      price: "1,849.00",
      originalPrice: "2,400.00",
      image: "/BH.webp",
      hoverImage: "/BHLADOIZQUIERDO.webp",
      isOffer: true,
      brand: "vibe",
      inStock: false
    },
    {
      id: 14,
      name: "METRO FLOW (Dandy Hats)",
      price: "1,599.00",
      originalPrice: "2,000.00",
      image: "/TFRONT.webp",
      hoverImage: "/TLADO.webp",
      isOffer: true,
      brand: "dandy",
      inStock: true
    },
    // Tercera fila adicional
    {
      id: 15,
      name: "CITY DREAMER (Vibe Hats)",
      price: "1,749.00",
      originalPrice: "2,200.00",
      image: "/HFRONT.webp",
      hoverImage: "/HLADOFRONT.webp",
      isOffer: false,
      brand: "vibe",
      inStock: true
    },
    {
      id: 16,
      name: "BOLD MOVE (Barbas Hats)",
      price: "1,599.00",
      originalPrice: "2,099.00",
      image: "/SAD.webp",
      hoverImage: "/SADFRONTLADO.webp",
      isOffer: true,
      brand: "barbas",
      inStock: true
    },
    {
      id: 17,
      name: "CHILL WAVE (Dandy Hats)",
      price: "1,799.00",
      originalPrice: "2,300.00",
      image: "/LABLACK.webp",
      hoverImage: "/LABLACKDELADO.webp",
      isOffer: false,
      brand: "dandy",
      inStock: true
    },
    {
      id: 18,
      name: "RETRO FLEX (Vibe Hats)",
      price: "1,649.00",
      originalPrice: "2,100.00",
      image: "/LAAZUL.webp",
      hoverImage: "/LAAZULADITO.webp",
      isOffer: false,
      brand: "vibe",
      inStock: true
    },
    {
      id: 19,
      name: "FRESH VISION (Barbas Hats)",
      price: "1,849.00",
      originalPrice: "2,400.00",
      image: "/B.webp",
      hoverImage: "/BFRONT.webp",
      isOffer: true,
      brand: "barbas",
      inStock: false
    },
    {
      id: 20,
      name: "STREET COOL (Dandy Hats)",
      price: "1,599.00",
      originalPrice: "2,000.00",
      image: "/OSO.webp",
      hoverImage: "/OSOFRONT.webp",
      isOffer: false,
      brand: "dandy",
      inStock: true
    },
    // Cuarta fila adicional
    {
      id: 21,
      name: "DAILY VIBES (Vibe Hats)",
      price: "1,749.00",
      originalPrice: "2,200.00",
      image: "/BH.webp",
      hoverImage: "/BHLADOIZQUIERDO.webp",
      isOffer: false,
      brand: "vibe",
      inStock: true
    },
    {
      id: 22,
      name: "CITY FLOWS (Barbas Hats)",
      price: "1,599.00",
      originalPrice: "2,099.00",
      image: "/TFRONT.webp",
      hoverImage: "/TLADO.webp",
      isOffer: false,
      brand: "barbas",
      inStock: true
    },
    {
      id: 23,
      name: "URBAN CLASSIC (Dandy Hats)",
      price: "1,799.00",
      originalPrice: "2,300.00",
      image: "/HFRONT.webp",
      hoverImage: "/HLADOFRONT.webp",
      isOffer: true,
      brand: "dandy",
      inStock: true
    },
    {
      id: 24,
      name: "STREET TREND (Vibe Hats)",
      price: "1,649.00",
      originalPrice: "2,100.00",
      image: "/SAD.webp",
      hoverImage: "/SADFRONTLADO.webp",
      isOffer: false,
      brand: "vibe",
      inStock: false
    },
    // Añadimos más productos para la paginación
    {
      id: 25,
      name: "SUMMER VIBE (Dandy Hats)",
      price: "1,899.00",
      originalPrice: "2,399.00",
      image: "/LABLACK.webp",
      hoverImage: "/LABLACKDELADO.webp",
      isOffer: true,
      brand: "dandy",
      inStock: true
    },
    {
      id: 26,
      name: "WINTER FLOW (Barbas Hats)",
      price: "1,999.00",
      originalPrice: "2,499.00",
      image: "/LAAZUL.webp",
      hoverImage: "/LAAZULADITO.webp",
      isOffer: true,
      brand: "barbas",
      inStock: true
    },
    {
      id: 27,
      name: "SPRING SPECIAL (Vibe Hats)",
      price: "1,699.00",
      originalPrice: "2,199.00",
      image: "/B.webp",
      hoverImage: "/BFRONT.webp",
      isOffer: false,
      brand: "vibe",
      inStock: true
    },
    {
      id: 28,
      name: "AUTUMN EDITION (Dandy Hats)",
      price: "1,799.00",
      originalPrice: "2,299.00",
      image: "/OSO.webp",
      hoverImage: "/OSOFRONT.webp",
      isOffer: true,
      brand: "dandy",
      inStock: false
    },
    {
      id: 29,
      name: "LIMITED DIAMOND (Barbas Hats)",
      price: "2,499.00",
      originalPrice: "2,999.00",
      image: "/BH.webp",
      hoverImage: "/BHLADOIZQUIERDO.webp",
      isOffer: true,
      brand: "barbas",
      inStock: true
    },
    {
      id: 30,
      name: "EXCLUSIVE GOLD (Vibe Hats)",
      price: "2,299.00",
      originalPrice: "2,899.00",
      image: "/TFRONT.webp",
      hoverImage: "/TLADO.webp",
      isOffer: false,
      brand: "vibe",
      inStock: true
    },
    {
      id: 31,
      name: "PREMIUM BLACK (Dandy Hats)",
      price: "1,999.00",
      originalPrice: "2,599.00",
      image: "/HFRONT.webp",
      hoverImage: "/HLADOFRONT.webp",
      isOffer: true,
      brand: "dandy",
      inStock: true
    },
    {
      id: 32,
      name: "CLASSIC WHITE (Barbas Hats)",
      price: "1,899.00",
      originalPrice: "2,399.00",
      image: "/SAD.webp",
      hoverImage: "/SADFRONTLADO.webp",
      isOffer: false,
      brand: "barbas",
      inStock: false
    }
  ];

  // Aplicar filtros y ordenamiento
  const filteredProducts = useMemo(() => {
    let filtered = [...allCatalogProducts];
    
    // Filtro por marca
    if (brandFilter) {
      filtered = filtered.filter(product => product.brand === brandFilter);
    }
    
    // Filtro por disponibilidad
    if (availabilityFilter === 'in-stock') {
      filtered = filtered.filter(product => product.inStock);
    } else if (availabilityFilter === 'offer') {
      filtered = filtered.filter(product => product.isOffer);
    }
    
    // Filtro por rango de precio
    filtered = filtered.filter(product => {
      const price = parseFloat(product.price.replace(',', ''));
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Ordenamiento
    if (sortBy === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'price-asc') {
      filtered.sort((a, b) => {
        return parseFloat(a.price.replace(',', '')) - parseFloat(b.price.replace(',', ''));
      });
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => {
        return parseFloat(b.price.replace(',', '')) - parseFloat(a.price.replace(',', ''));
      });
    }
    
    return filtered;
  }, [brandFilter, availabilityFilter, priceRange, sortBy, allCatalogProducts]);
  
  // Actualizar el conteo total de productos filtrados
  useEffect(() => {
    updateTotalFilteredProducts(filteredProducts.length);
  }, [filteredProducts, updateTotalFilteredProducts]);
  
  // Aplicar paginación
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage, filteredProducts]);
  
  return (
    <section className="catalog-products">
      <div className="catalog-grid">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product, index) => (
            <AnimatedCard key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </AnimatedCard>
          ))
        ) : (
          <div className="no-products">
            <p>No se encontraron productos que coincidan con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogProducts;
