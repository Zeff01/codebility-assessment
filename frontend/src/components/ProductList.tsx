"use client";
import React, { useEffect, useState } from 'react';
import ProductCard, { Product } from './ProductCard';
import ProductModal from './ProductModal';
import { styles } from './theme';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const lower = q.toLowerCase();
    setFiltered(products.filter(p => 
      p.title.toLowerCase().includes(lower) || 
      p.category.toLowerCase().includes(lower)
    ));
  }, [q, products]);

  if (loading) return (
    <div style={{
      padding: 40, 
      textAlign: 'center',
      fontSize: '18px',
      color: '#64748b',
    }}>
      Loading products...
    </div>
  );
  
  if (error) return (
    <div style={{
      padding: 40, 
      color: '#ef4444',
      textAlign: 'center',
      fontSize: '16px',
    }}>
      Error: {error}
    </div>
  );

  const searchInputStyle = {
    ...styles.searchInput.base,
    ...(isFocused ? styles.searchInput.focus : {}),
  };

  return (
    <div style={{padding: '25px 45px', maxWidth: '1400px', margin: '0 auto'}}>
      <div style={{marginBottom: 32}}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search by title or category"
          style={searchInputStyle}
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 24,
      }}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onClick={setSelected} />
        ))}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default ProductList;