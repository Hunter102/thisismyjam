"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>(getCart());
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);

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
    const updatedCart: CartItem[] = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  // Edit quantity of product in cart
  function editCartQuantity(productId: number, quantity: number) {
    const updatedCart: CartItem[] = cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  // Remove product from cart
  function removeFromCart(productId: number) {
    const updatedCart: CartItem[] = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  // Clear all items from the cart
  function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    setCart([]);
  }

  // Handle checkout - show a popup message
  function checkout() {
    setShowCheckoutPopup(true);
  }

  // Close checkout popup
  function closeCheckoutPopup() {
    setShowCheckoutPopup(false);
  }

  return (
    <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-nutg">
     <Header/>

      <main className="w-full h-full z-10 main-content mb-2 grid grid-cols-1 gap-6 p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
        {cart.length === 0 ? (
            <div className="flex justify-start items-center flex-col">
                <p className="text-lg text-black mb-4">Your cart is empty!</p>
                <Link href="/products">
                    <button
                        className="flex items-center justify-center text-xl w-44 h-20 bg-gradient-to-r from-lbl via-bl to-foreground text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
                    >
                        Let's Jam!
                    </button>
                </Link>
            </div>
        
        ) : (
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center">
                  <img src={item.imageSrc} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => editCartQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="bg-lbl text-white p-1 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => editCartQuantity(item.id, item.quantity + 1)} className="bg-lbl text-white p-1 rounded">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <div className="flex justify-between items-center mt-6">
            <button onClick={clearCart} className="bg-red-500 text-white py-2 px-4 rounded">Clear Cart</button>
            <p className="text-lg font-bold">Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
            <button onClick={checkout} className="bg-lbl text-white py-2 px-4 rounded">Checkout</button>
          </div>
        )}
      </main>

        <Footer/>

      {/* Checkout Popup */}
      {showCheckoutPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <ul className="space-y-4">
                {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center border-b py-2">
                    <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-lg font-bold">${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                </li>
                ))}
            </ul>
            <p className="text-lg font-bold mt-4">Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
            <p className="text-gray-600 mt-2">Please Text 603-566-6201 the above order.</p>
            <button onClick={closeCheckoutPopup} className="mt-4 w-full py-2 bg-lbl text-white rounded-md">Close</button>
            </div>
        </div>
      )}
    </div>
  );
}
