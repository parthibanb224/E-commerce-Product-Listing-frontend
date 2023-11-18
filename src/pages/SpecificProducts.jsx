import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { useCart } from "../contexts/CartContext";


const SpecificProducts = () => {
    const { id } = useParams();
    const { products } = useUser();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("lowToHigh");
  
    useEffect(() => {
      // Filter products based on the category
      const filteredProducts = products.filter((item) => item.category === id);
  
      // Sort products based on the selected sort order
      const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === "lowToHigh") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
  
      setFilteredProducts(sortedProducts);
    }, [id, products, sortOrder]);
  
    const handleSortChange = (newSortOrder) => {
      setSortOrder(newSortOrder);
    };
  
    if (filteredProducts.length === 0) {
      return (
        <section className="h-screen flex justify-center items-center">
          Empty...
        </section>
      );
    }
  
    return (
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-end mb-4">
            <select
              className="p-2 border border-solid border-gray-500 rounded-xl"
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="lowToHigh">Price : Low to High</option>
              <option value="highToLow">Price : High to Low</option>
            </select>
          </div>
          <h1 className="text-3xl font-semibold mb-10 text-center capitalize">
            {id}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((i, index) => (
              <Products product={i} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default SpecificProducts;


const Products = ({product}) => {
    const { addToCart } = useCart();
    const { image, title, price, authors } = product;
    return (
        <div className="border rounded-lg overflow-hidden shadow-md transition transform hover:scale-105">
            <div className="relative pb-[75%] group">
                <img
                    className="absolute w-full h-full object-contain group-hover:opacity-80 transition duration-300"
                    src={image}
                    alt={title}
                />
                <div className="absolute top-0 right-0 p-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                        onClick={() => addToCart(product, product._id)}
                        className="bg-teal-500 text-white rounded-full p-2 transform scale-90 hover:scale-100 transition-transform"
                    >
                        <BsPlus className="text-xl" />
                    </button>
                    <Link
                        to={`/product/${product._id}`}
                        className="bg-white text-primary rounded-full p-2 shadow-md transform scale-90 hover:scale-100 transition-transform"
                    >
                        <BsEyeFill className="text-xl" />
                    </Link>
                </div>
            </div>
            <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">{authors}</div>
                <Link to={`/product/${product._id}`}>
                    <h2 className="font-semibold text-lg mb-2 hover:underline">
                        {title}
                    </h2>
                </Link>
                <h2 className="font-semibold text-xl text-primary">₹{price}</h2>
            </div>
        </div>
    );
}
