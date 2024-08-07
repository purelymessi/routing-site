
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    category: "men's clothing",
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday essentials in the main compartment.',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    category: "men's clothing",
    description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans.',
    price: 22.3,
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_UL1000_.jpg',
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    category: "men's clothing",
    description: 'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    price: 55.99,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    category: "men's clothing",
    description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    price: 15.99,
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  },
  {
    id: 5,
    title: 'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet',
    category: "jewelery",
    description: 'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.',
    price: 695,
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    category: "jewelery",
    description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    price: 168,
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    category: "jewelery",
    description: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine\'s Day...',
    price: 9.99,
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  },
];

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

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
