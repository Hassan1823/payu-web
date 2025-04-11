import { Product } from "@/interface/product";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-80">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-black">
          ${parseInt(product.amount).toLocaleString("es-CO")} COP
        </span>
        <div className="flex items-center space-x-2">
          <label className="text-black">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 px-2 py-1 border rounded-md text-black"
          />
        </div>
      </div>
      <button
        onClick={() => onSelect(product)}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
