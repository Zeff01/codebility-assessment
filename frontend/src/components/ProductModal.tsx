"use client";
import React, { useState } from 'react';
import { Product } from './ProductCard';
import { styles, theme } from './theme';

interface Props {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!product) return null;

  const closeButtonStyle = {
    ...styles.modal.closeButton,
    background: isHovered ? theme.colors.primaryDark : theme.colors.primary,
  };

  return (
    <div 
      onClick={onClose}
      style={styles.modal.overlay}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={styles.modal.content}
      >
        <button 
          onClick={onClose}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={closeButtonStyle}
        >
          ✕ Close
        </button>
        
        <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: '20px'}}>
          <div style={styles.modal.imageContainer}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{maxWidth: '100%', maxHeight: 350, objectFit: 'contain'}}
            />
          </div>
          
          <div style={styles.modal.detailsContainer}>
            <h2 style={styles.modal.title}>
              {product.title}
            </h2>
            
            <p style={styles.modal.price}>
              ${product.price.toFixed(2)}
            </p>
            
            <div style={styles.modal.description}>
              <p style={{margin: 0}}>
                {product.description}
              </p>
            </div>
            
            <p style={{
              fontSize: '14px', 
              color: theme.colors.textSecondary,
              background: '#f1f5f9',
              padding: '8px 16px',
              borderRadius: theme.radius.sm,
              display: 'inline-block',
              fontWeight: '500',
            }}>
              Category: <strong>{product.category}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;