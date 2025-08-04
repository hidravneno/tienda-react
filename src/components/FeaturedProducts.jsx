import React from 'react';
import ProductCard from './ProductCard';
import '../styles/FeaturedProducts.css';

const FeaturedProducts = () => {
  // Datos de ejemplo - luego puedes conectar con una API
  const featuredProducts = [
    {
      id: 1,
      name: "50/50 Dandy Hats",
      price: "1,549.00",
      originalPrice: "2,500.00",
      image: "/LABLACK.webp", // Imagen principal
      hoverImage: "/LABLACKDELADO.webp", // Imagen al hacer hover
      isOffer: true
    },
    {
      id: 2,
      name: "ÁNGEL AZUL (Dandy Hats)", 
      price: "1,699.00",
      originalPrice: "2,500.00",
      image: "/LAAZUL.webp", // Imagen principal
      hoverImage: "/LAAZULADITO.webp", // Imagen al hacer hover
      isOffer: true
    },
    {
      id: 3,
      name: "BARBAS B*ANGING B*TCHES (Barbas Hats)",
      price: "1,899.00", 
      originalPrice: "2,499.00",
      image: "/B.webp", // Imagen principal
      hoverImage: "/BFRONT.webp", // Imagen al hacer hover
      isOffer: true
    },
    {
      id: 4,
      name: "BEAR SCOTT (Barbas Hats)",
      price: "1,599.00",
      originalPrice: "1,899.00", 
      image: "/logo.png",
      hoverImage: "/LABLACK.webp", // Imagen al hacer hover
      isOffer: true
    }
    ,
    {
      id: 5,
      name: "50/50 Dandy Hats",
      price: "1,549.00",
      originalPrice: "2,500.00",
      image: "/LABLACK.webp", // Imagen principal
      hoverImage: "/LABLACKDELADO.webp", // Imagen al hacer hover
      isOffer: true
    }
    ,
    {      id: 6,
      name: "ÁNGEL AZUL (Dandy Hats)", 
      price: "1,699.00",      
      originalPrice: "2,500.00",
      image: "/LAAZUL.webp", // Imagen principal
      hoverImage: "/LAAZULADITO.webp", // Imagen al hacer hover
      isOffer: true
    },
    {     id: 7,
      name: "BARBAS B*ANGING B*TCHES (Barbas Hats)",
      price: "1,899.00",
      originalPrice: "2,499.00",
      image: "/logo.png",
      hoverImage: "/fidel.webp", // Imagen al hacer hover
      isOffer: true
    },
    {
      id: 8,
      name: "BEAR SCOTT (Barbas Hats)",
      price: "1,599.00",
      originalPrice: "1,899.00",
      image: "/logo.png",
      hoverImage: "/LABLACK.webp", // Imagen al hacer hover
      isOffer: true
    } 
  ];

  return (
    <section className="featured-products">
      <div className="products-grid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
