import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const products = {
    1: {
      id: 1,
      name: "50/50 Dandy Hats",
      price: "1,549.00",
      originalPrice: "2,500.00",
      description: "Gorra exclusiva de la línea Dandy Hats con diseño único y materiales de alta calidad. Perfecta para cualquier ocasión.",
      images: [
        "/LABLACK.webp",
        "/LABLACKDELADO.webp",
        "/LABLACKIZQUIERDA.webp", 
        "/LABLACKATRAS.webp",
        "/LABLACKABAJO.webp"
      ],
      features: [
        "Material: 100% Algodón Premium",
        "Talla: Ajustable",
        "Color: Negro con detalles blancos",
        "Diseño exclusivo LA",
        "Envío gratis"
      ],
      isOffer: true
    },
    2: {
      id: 2,
      name: "ÁNGEL AZUL (Dandy Hats)",
      price: "1,699.00",
      originalPrice: "2,500.00",
      description: "Diseño único inspirado en la cultura urbana con acabados de primera calidad.",
      images: [
        "/LAAZUL.webp",
        "/LAAZULADITO.webp",
        "/LAAZULADITOIZQUIERDA.webp",
        "/LAAZULADITODERECHA.webp",
      ],
      features: [
        "Material: Mezcla de algodón",
        "Talla: Ajustable",
        "Color: Azul con detalles",
        "Edición limitada",
        "Garantía de calidad"
      ],
      isOffer: true
    },
    3: {
      id: 3,
      name: "BARBAS B*ANGING B*TCHES (Barbas Hats)",
      price: "1,899.00",
      originalPrice: "2,499.00",
      description: "Gorra de la línea Barbas Hats con diseño atrevido y personalidad única.",
      images: [
        "/B.webp",
        "/BFRONT.webp",
        "/BLADITO.webp",
        "/BABAJO.webp",
        "/BATRAS.webp"
      ],
      features: [
        "Material: Algodón premium",
        "Talla: Ajustable",
        "Diseño exclusivo Barbas",
        "Bordado de alta calidad",
        "Resistente al agua"
      ],
      isOffer: true
    },
    4: {
      id: 4,
      name: "BEAR SCOTT (Barbas Hats)",
      price: "1,599.00",
      originalPrice: "1,899.00",
      description: "Diseño Bear Scott con estilo urbano y comodidad excepcional.",
      images: [
        "/OSO.webp",
        "/OSOFRONT.webp",
        "/OSOARRIBA.jpeg",
        "/OSOATRAS.webp",
        "/OSOLADO.webp",
        "/OSOABAJO.webp"
      ],
      features: [
        "Material: Algodón suave",
        "Talla: Ajustable",
        "Color: Beige con marrón",
        "Diseño Bear Scott",
        "Envío express disponible"
      ],
      isOffer: true
    }
    ,
    5: {
      id: 5,
      name: "BLACKOUT STARS (Barbas Hats)",
      price: "1,549.00",
      originalPrice: "2,500.00",
      description: "Gorra exclusiva de la línea Dandy Hats con diseño único y materiales de alta calidad. Perfecta para cualquier ocasión.",
      images: [
        "/BH.webp",
        "/BHLADOIZQUIERDO.webp",
        "/BHLADITO.webp",
        "/BHBOCARRIBA.webp",
        "/BHATRAS.webp"
      ],
      features: [
        "Material: 100% Algodón Premium",
        "Talla: Ajustable",
        "Color: Negro con detalles blancos",
        "Diseño exclusivo LA",
        "Envío gratis"
      ],
      isOffer: true
    },
    6: {
      id: 6,
      name: "CHROME VI EDICION LUXE 6 (Barbas Hats)",
      price: "1,549.00",
      originalPrice: "2,500.00",
      description: "Gorra exclusiva de la línea Dandy Hats con diseño único y materiales de alta calidad. Perfecta para cualquier ocasión.",
      images: [
        "/TFRONT.webp",
        "/TLADO.webp",
        "/TATRAS.webp",
        "/TFRONTLADITO.webp",
        "/TARRIBA.webp"
      ],
      features: [
        "Material: 100% Algodón Premium",
        "Talla: Ajustable",
        "Color: Negro con detalles blancos",
        "Diseño exclusivo LA",
        "Envío gratis"
      ],
      isOffer: true
    }
    ,
    7: {
      id: 7,
      name: "CLAVE ALI (Dandy Hats)",
      price: "1,549.00",
      originalPrice: "2,500.00",
      description: "Gorra exclusiva de la línea Dandy Hats con diseño único y materiales de alta calidad. Perfecta para cualquier ocasión.",
      images: [
        "/HFRONT.webp",
        "/HLADOFRONT.webp",
        "/HLADO.webp",
        "/HATRAS.webp",
        "/HABAJO.webp"
      ],
      features: [
        "Material: 100% Algodón Premium",
        "Talla: Ajustable",
        "Color: Negro con detalles blancos",
        "Diseño exclusivo LA",
        "Envío gratis"
      ],
      isOffer: true
    }
    ,
    8: {
      id: 8,
      name: "COMO JORDAN (Dandy Hats)",
      price: "1,599.00",
      originalPrice: "1,899.00",
      description: "Diseño Bear Scott con estilo urbano y comodidad excepcional.",
      images: [
        "/SAD.webp",
        "/SADFRONTLADO.webp",
        "/SADFRONTLADODERECHO.webp",
        "/SADATRAS.webp"
      ],
      features: [
        "Material: Algodón suave",
        "Talla: Ajustable",
        "Color: Beige con marrón",
        "Diseño Bear Scott",
        "Envío express disponible"
      ],
      isOffer: true
    }
  };

  const product = products[id];
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      showToast(`🛒 ${product.name} agregado al carrito!`, 'success', 4000);
    }
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Producto no encontrado</h2>
        <button onClick={() => navigate('/')} className="back-btn">
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <button onClick={() => navigate('/')} className="back-button">
        ← Volver
      </button>
      
      <div className="product-detail-container">
        {/* Imágenes pequeñas verticales */}
        <div className="thumbnail-gallery">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Imagen principal grande */}
        <div className="main-image-container">
          <img
            src={selectedImage}
            alt={product.name}
            className="main-image"
          />
        </div>

        {/* Información del producto */}
        <div className="product-info-detail">
          {product.isOffer && <span className="offer-badge-detail">Oferta</span>}
          
          <h1 className="product-title">{product.name}</h1>
          
          <div className="price-section">
            {product.originalPrice && (
              <span className="original-price-detail">${product.originalPrice} MXN</span>
            )}
            <span className="current-price-detail">${product.price} MXN</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="features-section">
            <h3>Características:</h3>
            <ul className="features-list">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
            <button className="buy-now-btn">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
