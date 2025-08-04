import React from 'react';
import ProductCard from './ProductCard';
import '../styles/FeaturedProducts.css';

const FeaturedProducts = () => {
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
      image: "/OSO.webp", // Imagen principal
      hoverImage: "/OSOFRONT.webp", // Imagen al hacer hover
      isOffer: true
    }
    ,
    {
      id: 5,
      name: "BLACKOUT STARS (Barbas Hats)",
      price: "1,549.00",
      originalPrice: "2,500.00",
      image: "/BH.webp", // Imagen principal
      hoverImage: "/BHLADOIZQUIERDO.webp", // Imagen al hacer hover
      isOffer: true
    }
    ,
    {
      id: 6,
      name: "CHROME VI EDICION LUXE 6 (Barbas Hats)",
      price: "1,699.00",      
      originalPrice: "2,500.00",
      image: "/TFRONT.webp", // Imagen principal
      hoverImage: "/TLADO.webp", // Imagen al hacer hover
      isOffer: true
    },
    {     id: 7,
      name: "CLAVE ALI (Dandy Hats)",
      price: "1,899.00",
      originalPrice: "2,499.00",
      image: "/HFRONT.webp", // Imagen principal
      hoverImage: "/HLADOFRONT.webp", // Imagen al hacer hover
      isOffer: true
    },
    {
      id: 8,
      name: "COMO JORDAN (Dandy Hats)",
      price: "1,599.00",
      originalPrice: "1,899.00",
      image: "/SAD.webp", // Imagen principal
      hoverImage: "/SADFRONTLADO.webp", // Imagen al hacer hover
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
