import React, { useEffect, useState } from 'react';

interface Brand {
  id: string;
  name: string;
}

const BrandList: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/brands')
      .then(res => res.json())
      .then(data => setBrands(data));
  }, []);

  return (
    <div>
      <h3>Danh sách thương hiệu</h3>
      <ul>
        {brands.map(brand => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BrandList; 