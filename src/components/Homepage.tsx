import React from 'react';
import ProductList from './ProductList';
import Footer from './Footer';
import Navbar from './Navbar';

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '100px' }}>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
