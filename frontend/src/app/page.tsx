import React from 'react';
import ProductList from '../components/ProductList';
import { styles, theme } from '../components/theme';

const Page: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: theme.colors.bgSecondary }}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>
          Product Listing
        </h1>
        <p style={styles.headerSubtitle}>
          Powered by Fake Store API
        </p>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default Page;