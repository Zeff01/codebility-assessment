import React, { useState } from 'react';
import { theme, styles } from './theme';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    ...styles.productCard.base,
    ...(isHovered ? styles.productCard.hover : {}),
  };

  const imageStyle = {
    ...styles.productImage.img,
    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
  };

  return (
    <div 
      onClick={() => onClick(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
      <div style={styles.productImage.container}>
        <img 
          src={product.image} 
          alt={product.title} 
          style={imageStyle}
        />
      </div>
      
      <h3 style={styles.productTitle}>
        {product.title}
      </h3>
      
      <div style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '12px',
      }}>
        <strong style={styles.productPrice}>
          ${product.price.toFixed(2)}
        </strong>
        <span style={styles.categoryBadge(product.category)}>
          {product.category}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;