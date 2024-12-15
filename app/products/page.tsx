"use client";

import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";

const products = [
    { id: 1, name: "Product 1", imageSrc: "/imgs/product1.jpg", description: "A great product that solves many problems.", price: 29.99 },
    { id: 2, name: "Product 2", imageSrc: "/imgs/product2.jpg", description: "Another awesome product with amazing features.", price: 39.99 },
    { id: 3, name: "Product 3", imageSrc: "/imgs/product3.jpg", description: "High-quality and durable, perfect for daily use.", price: 49.99 },
    // Add more products as needed
];

export default function Products() {
    const [cart, setCart] = useState<CartItem[]>(getCart());
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [cartNotification, setCartNotification] = useState<string | null>(null);

    // Type for cart items
    type CartItem = {
        id: number;
        name: string;
        imageSrc: string;
        description: string;
        price: number;
        quantity: number;
    };

    // Retrieve the cart from local storage
    function getCart(): CartItem[] {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : []; // Use empty array if null
    }

    // Add product to cart
    function addToCart(product: { id: number; name: string; imageSrc: string; description: string; price: number; }) {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        let updatedCart;

        if (existingProductIndex !== -1) {
            // If the product already exists in the cart, increase the quantity
            updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
        } else {
            // Otherwise, add the product to the cart with a quantity of 1
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Show notification
        setCartNotification(`${product.name} added to cart!`);
        setTimeout(() => setCartNotification(null), 3000); // Hide notification after 3 seconds
    }

    // Remove product from cart
    function removeFromCart(productId: number) {
        const updatedCart: CartItem[] = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    }

    // Display cart items in a popup when ready to checkout
    function checkout() {
        setShowCartPopup(true);
    }

    return (
        <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-nutg">
            <Header />

            <main className="w-full h-full z-10 main-content mb-2">
                <div className='grid grid-cols-2 gap-6 p-6'>
                    {products.map(product => (
                        <ProductItem
                            key={product.id}
                            name={product.name}
                            imageSrc={product.imageSrc}
                            description={product.description}
                            price={product.price}
                            onAddToCart={() => addToCart(product)}
                        />
                    ))}
                </div>
            </main>

            <Footer />

            {/* Cart Popup */}
            {showCartPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-lg">
                        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                        {cart.length > 0 ? (
                            <>
                                <ul className="mb-4">
                                    {cart.map(item => (
                                        <li key={item.id} className="flex justify-between items-center py-2 border-b">
                                            <span>{item.name} x {item.quantity}</span>
                                            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg font-bold">Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                                <button onClick={checkout} className="mt-4 w-full py-2 bg-lbl text-white rounded-md">Checkout</button>
                            </>
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                </div>
            )}

            {/* Cart notification */}
            {cartNotification && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
                    {cartNotification}
                </div>
            )}
        </div>
    );
}
