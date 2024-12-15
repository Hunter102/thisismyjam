import { FC } from 'react';

interface ProductItemProps {
    name: string;
    imageSrc: string;
    description: string;
    price: number;
    onAddToCart: () => void; // Function to add product to cart
}

const ProductItem: FC<ProductItemProps> = ({ name, imageSrc, description, price, onAddToCart }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
        <img src={imageSrc} alt={name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-bold mb-4">${price.toFixed(2)}</p>
        <button onClick={onAddToCart} className="w-full bg-lbl text-white py-2 rounded-md">Add to Cart</button>
      </div>
    );
};

export default ProductItem;
