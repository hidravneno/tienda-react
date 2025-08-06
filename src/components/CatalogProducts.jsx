import React from 'react';
import ProductCard from './ProductCard';
import AnimatedCard from './AnimatedCard';
import '../styles/CatalogProducts.css';

const CatalogProducts = () => {
  // Productos para el catálogo (incluye los productos destacados más productos adicionales)
  const catalogProducts = [
    {
      id: 1,
      name: "50/50 Dandy Hats",
      price: "1,549.00",
      originalPrice: "2,500.00",
      image: "/LABLACK.webp",
      hoverImage: "/LABLACKDELADO.webp",
      isOffer: true
    },
    {
      id: 2,
      name: "ÁNGEL AZUL (Dandy Hats)", 
      price: "1,699.00",
      originalPrice: "2,500.00",
      image: "/LAAZUL.webp",
      hoverImage: "/LAAZULADITO.webp",
      isOffer: true
    },
    {
      id: 3,
      name: "BARBAS B*ANGING B*TCHES (Barbas Hats)",
      price: "1,899.00", 
      originalPrice: "2,499.00",
      image: "/B.webp",
      hoverImage: "/BFRONT.webp",
      isOffer: true
    },
    {
      id: 4,
      name: "BEAR SCOTT (Barbas Hats)",
      price: "1,599.00",
      originalPrice: "1,899.00", 
      image: "/OSO.webp",
      hoverImage: "/OSOFRONT.webp",
      isOffer: true
    },
    {
      id: 5,
      name: "BLACKOUT STARS (Barbas Hats)",
      price: "1,549.00",
      originalPrice: "2,500.00",
      image: "/BH.webp",
      hoverImage: "/BHLADOIZQUIERDO.webp",
      isOffer: true
    },
    {
      id: 6,
      name: "CHROME VI EDICION LUXE 6 (Barbas Hats)",
      price: "1,699.00",      
      originalPrice: "2,500.00",
      image: "/TFRONT.webp",
      hoverImage: "/TLADO.webp",
      isOffer: true
    },
    {
      id: 7,
      name: "CLAVE ALI (Dandy Hats)",
      price: "1,899.00",
      originalPrice: "2,499.00",
      image: "/HFRONT.webp",
      hoverImage: "/HLADOFRONT.webp",
      isOffer: true
    },
    {
      id: 8,
      name: "COMO JORDAN (Dandy Hats)",
      price: "1,599.00",
      originalPrice: "1,899.00",
      image: "/SAD.webp",
      hoverImage: "/SADFRONTLADO.webp",
      isOffer: true
    },
    // Productos adicionales para llenar el catálogo (6 productos más para completar 2 filas más)
    {
      id: 9,
      name: "TRUCKER BLACK (Vibe Hats)",
      price: "1,749.00",
      originalPrice: "2,200.00",
      image: "/LABLACK.webp",
      hoverImage: "/LABLACKDELADO.webp",
      isOffer: true
    },
    {
      id: 10,
      name: "FRESH STYLE (Vibe Hats)",
      price: "1,599.00",
      originalPrice: "2,099.00",
      image: "/LAAZUL.webp",
      hoverImage: "/LAAZULADITO.webp",
      isOffer: true
    },
    {
      id: 11,
      name: "URBAN HERITAGE (Barbas Hats)",
      price: "1,799.00",
      originalPrice: "2,300.00",
      image: "/B.webp",
      hoverImage: "/BFRONT.webp",
      isOffer: true
    },
    {
      id: 12,
      name: "STREET VISION (Dandy Hats)",
      price: "1,649.00",
      originalPrice: "2,100.00",
      image: "/OSO.webp",
      hoverImage: "/OSOFRONT.webp",
      isOffer: true
    },
    {
      id: 13,
      name: "WILD STYLE (Vibe Hats)",
      price: "1,849.00",
      originalPrice: "2,400.00",
      image: "/BH.webp",
      hoverImage: "/BHLADOIZQUIERDO.webp",
      isOffer: true
    },
    {
      id: 14,
      name: "METRO FLOW (Dandy Hats)",
      price: "1,599.00",
      originalPrice: "2,000.00",
      image: "/TFRONT.webp",
      hoverImage: "/TLADO.webp",
      isOffer: true
    },
    // Tercera fila adicional
    {
      id: 15,
      name: "CITY DREAMER (Vibe Hats)",
      price: "1,749.00",
      originalPrice: "2,200.00",
      image: "/HFRONT.webp",
      hoverImage: "/HLADOFRONT.webp",
      isOffer: true
    },
    {
      id: 16,
      name: "BOLD MOVE (Barbas Hats)",
      price: "1,599.00",
      originalPrice: "2,099.00",
      image: "/SAD.webp",
      hoverImage: "/SADFRONTLADO.webp",
      isOffer: true
    },
    {
      id: 17,
      name: "CHILL WAVE (Dandy Hats)",
      price: "1,799.00",
      originalPrice: "2,300.00",
      image: "/LABLACK.webp",
      hoverImage: "/LABLACKDELADO.webp",
      isOffer: true
    },
    {
      id: 18,
      name: "RETRO FLEX (Vibe Hats)",
      price: "1,649.00",
      originalPrice: "2,100.00",
      image: "/LAAZUL.webp",
      hoverImage: "/LAAZULADITO.webp",
      isOffer: true
    },
    {
      id: 19,
      name: "FRESH VISION (Barbas Hats)",
      price: "1,849.00",
      originalPrice: "2,400.00",
      image: "/B.webp",
      hoverImage: "/BFRONT.webp",
      isOffer: true
    },
    {
      id: 20,
      name: "STREET COOL (Dandy Hats)",
      price: "1,599.00",
      originalPrice: "2,000.00",
      image: "/OSO.webp",
      hoverImage: "/OSOFRONT.webp",
      isOffer: true
    },
    // Cuarta fila adicional
    {
      id: 21,
      name: "DAILY VIBES (Vibe Hats)",
      price: "1,749.00",
      originalPrice: "2,200.00",
      image: "/BH.webp",
      hoverImage: "/BHLADOIZQUIERDO.webp",
      isOffer: true
    },
    {
      id: 22,
      name: "CITY FLOWS (Barbas Hats)",
      price: "1,599.00",
      originalPrice: "2,099.00",
      image: "/TFRONT.webp",
      hoverImage: "/TLADO.webp",
      isOffer: true
    },
    {
      id: 23,
      name: "URBAN CLASSIC (Dandy Hats)",
      price: "1,799.00",
      originalPrice: "2,300.00",
      image: "/HFRONT.webp",
      hoverImage: "/HLADOFRONT.webp",
      isOffer: true
    },
    {
      id: 24,
      name: "STREET TREND (Vibe Hats)",
      price: "1,649.00",
      originalPrice: "2,100.00",
      image: "/SAD.webp",
      hoverImage: "/SADFRONTLADO.webp",
      isOffer: true
    }
  ];

  return (
    <section className="catalog-products">
      <div className="catalog-grid">
        {catalogProducts.map((product, index) => (
          <AnimatedCard key={product.id} delay={index * 100}>
            <ProductCard product={product} />
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
};

export default CatalogProducts;
