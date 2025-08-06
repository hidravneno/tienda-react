import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (product.hoverImage) {
      setCurrentImage(product.hoverImage);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(product.image);
  };

  const handleCardClick = () => {
    navigate(`/producto/${product.id}`);
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className="product-image-wrapper">
        {product.isOffer && <span className="offer-badge">Oferta</span>}
        {product.inStock === false && <span className="stock-badge">Agotado</span>}
        <img 
          src={currentImage} 
          alt={product.name} 
          className={`product-image ${product.inStock === false ? 'out-of-stock' : ''}`}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="price-container">
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice} MXN</span>
          )}
          <p className="product-price">${product.price} MXN</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
