"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
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
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Edit quantity of product in cart
  const editCartQuantity = (productId: number, quantity: number) => {
    const updatedCart: CartItem[] = cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // Remove product from cart
  const removeFromCart = (productId: number) => {
    const updatedCart: CartItem[] = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // Clear all items from the cart
  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    setCart([]);
  };

  // Handle checkout - show a popup message
  const checkout = () => {
    setShowCheckoutPopup(true);
  };

  // Close checkout popup
  const closeCheckoutPopup = () => {
    setShowCheckoutPopup(false);
  };

  // Close checkout popup and clear cart
  const closeCheckoutPopupClear = () => {
    setShowCheckoutPopup(false);
    clearCart();

  };

  return (
    <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-centermin-h-screen font-[family-name:var(--font-geist-sans)] bg-white">
      <Header />

      <main className="w-full h-full z-10 main-content mb-2 grid grid-cols-1 gap-6 xl:p-20 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="flex justify-start items-center flex-col">
            <p className="text-lg text-black mb-4">Your cart is empty!</p>
            <Link href="/products">
              <button
                className="flex items-center justify-center text-xl w-44 h-20 bg-gradient-to-r from-lbl via-bl to-black text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                {"Let's Jam!"}
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
                    {/* <p className="text-sm text-gray-600">{item.description}</p> */}
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
            <div className="mt-6">
                {/* Buttons at the left and right sides */}
                <div className="flex justify-between items-center mb-4">
                <button
                    onClick={clearCart}
                    className="bg-red-500 text-white py-2 px-4 rounded xl:text-lg sm:text-lg text-xs"
                >
                    Clear Cart
                </button>
                <p className="xl:text-lg sm:text-lg text-md font-bold">
                    Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                </p>
                <button
                    onClick={checkout}
                    className="bg-bl text-white py-2 px-4 rounded xl:text-lg  sm:text-lg text-xs"
                >
                    Checkout
                </button>
                </div>

                {/* Continue Jamming button */}
                <div className="text-center flex justify-center">
                <Link href="/products">
                    <button
                    className="flex items-center justify-center text-center mt-10 xl:text-xl text-md xl:w-52 xl:h-20 w-44 h-16 bg-lbl text-black rounded-full shadow-lg shadow-black hover:scale-105"
                    >
                    {"Continue Jamming!"}
                    </button>
                </Link>
                </div>
            </div>
        )}
      </main>

      <Footer />

      {/* Checkout Popup */}
      {showCheckoutPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg max-h-[80vh] overflow-auto">
                <h2 className="text-2xl text-black font-bold mb-4">Checkout</h2>
                <div className="grid xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
                    {cart.map(item => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg text-black font-semibold">{item.name}</h3>
                        <p className="text-gray-700">${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    ))}
                </div>
                <p className="text-lg text-black font-bold mt-4">
                    Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                </p>
                <p className="text-gray-600 mt-2">
                    Please text <span className="font-semibold">603-566-6201</span> the above order and total pricing.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={closeCheckoutPopup} 
                        className="mt-4 w-full py-2 bg-lbl text-black rounded-md"
                    >
                        Close
                    </button>
                    <Link href="/">
                        <button 
                            onClick={closeCheckoutPopupClear} 
                            className="mt-4 w-full py-2 bg-lbl text-black rounded-md"
                        >
                            Sent!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
