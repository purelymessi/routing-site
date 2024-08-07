import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/Card';
import LoadingSpinner from '../home/Loading';

const Products = () => { 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') 
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(false); 
      })
}, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
