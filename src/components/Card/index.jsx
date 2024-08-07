import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <div className='h-64 w-full'>
        <img src={product.image} alt={product.title} className="w-full h-full object-contain mb-4 rounded" />
      </div>
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{product.category}</p>
      <p className="text-sm text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-bold">{product.price}$</p>
      <Link to={`/products/${product.id}`} className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800">View Product</Link>
    </div>
  );
};

export default ProductCard;
