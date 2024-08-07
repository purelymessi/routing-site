import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`) 
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      })
  }, []); 

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-auto h-64 object-contain mb-4 rounded-lg shadow-lg" 
          />
        </div>
        <h2 className="text-3xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-500 mb-2">{product.category}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-black mb-4">{product.price}$</p>
      </div>
    </div>
  );
};

export default SingleProduct;
