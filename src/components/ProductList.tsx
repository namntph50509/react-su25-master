import React, { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sale?: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <div className="product-img-wrap">
            <img src={product.image} alt={product.name} className="product-img" />
            {product.sale && (
              <div className="product-sale-badge">-{product.sale}%</div>
            )}
            <button className="buy-now-btn">MUA NGAY &rarr;</button>
          </div>
          <div className="product-name">{product.name}</div>
        </div>
      ))}
      <style>{`
        .product-list-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
          padding: 40px 0;
        }
        .product-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: box-shadow 0.2s;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .product-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.16);
        }
        .product-img-wrap {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .product-sale-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #e53935;
          color: #fff;
          font-weight: bold;
          font-size: 1rem;
          padding: 6px 14px;
          border-radius: 20px;
          z-index: 2;
        }
        .buy-now-btn {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.85);
          color: #fff;
          border: none;
          width: 100%;
          padding: 18px 0;
          font-size: 1.1rem;
          font-weight: 600;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.25s;
          cursor: pointer;
          letter-spacing: 1px;
        }
        .product-card:hover .buy-now-btn {
          opacity: 1;
          transform: translateY(0);
        }
        .product-name {
          text-align: center;
          font-weight: 600;
          font-size: 1.1rem;
          margin: 18px 0 10px 0;
          letter-spacing: 0.5px;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
