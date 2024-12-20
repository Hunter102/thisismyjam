"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";

const products = [
    { id: 1, name: "Strawberry Jam", imageSrc: "/imgs/strawberry.jpg", description: "Always the first jam of the season made with ripe strawberries at the peak of their very short season in New England.", price: 11.00 },
    { id: 2, name: "Blueberry Jam", imageSrc: "/imgs/blueberry.jpg", description: "Blueberry is a simple pure jam made with juicy and ripe blueberries in the middle of the season.", price: 11.00 },
    { id: 3, name: "Blue-Rasberry Jam", imageSrc: "/imgs/blue-rasberry.jpg", description: "Blueberries & raspberries crushed together make this beautiful dark purple combination. It's a perfect blend of sunshine & fruit! (First made because I didn't have enough of either berry to make a batch, so I mashed them together! One of my favorite accidental jams, now made yearly.)", price: 11.00 },
    { id: 4, name: "Very Berry Jam", imageSrc: "/imgs/very-berry.jpg", description: "Very Berry Jam requires three different kinds of fruit which must all be growing at the same time to be hand-picked. It often requires visiting three different farms at quite a distance from each other. It is summertime a jar!", price: 11.00 },
    { id: 5, name: "Strawberry Cherry Jam", imageSrc: "/imgs/strawberry-cherry.jpg", description: "A beautiful deep red color with a touch of strawberry flavor, for additional summer sweetness!", price: 11.00 },
    { id: 6, name: "Peach", imageSrc: "/imgs/peach.jpg", description: "This jam looks like sunshine in a jar! Carefully skinned and pitted, the fruit is perfectly sweetened to create the best flavor.", price: 11.00 },
    { id: 7, name: "Rasberry Peach Jam", imageSrc: "/imgs/rasberry-peach.jpg", description: "Add a bit of raspberries to the crushed peaches, you have jars of summer love!", price: 11.00 },
    { id: 8, name: "Plum Jam", imageSrc: "/imgs/plum.jpg", description: "Sweet with some tartness thrown in, plum jam is a twice-cooked jam of purple patience.", price: 11.00 },
    { id: 9, name: "Pear Jam", imageSrc: "/imgs/pear.jpg", description: "What happens to a pear when it becomes jam? It becomes a decadent treat to add to cheeses or other baked goods.", price: 11.00 },
    { id: 10, name: "Apple Pie Jam", imageSrc: "/imgs/apple-pie.jpg", description: "Apple Pie Jam is literally like eating the inside of an apple pie. It is perfect on pancakes or French toast and possibly crepes! It is a labor-intensive jam because of the picking, peeling, coring, and slicing of the fruit. It is dessert in a jar, and you should always get an extra one, it will be eaten fast!", price: 11.00 },
];

export default function Products() {
    const [cart, setCart] = useState<CartItem[]>([]);
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

    // Retrieve the cart from local storage on client side
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

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
        <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-bl">
            <Header />

            <main className="w-full h-full z-10 main-content mb-2">
                <div className={`col-start-2 col-end-9 mt-10 rounded-md flex flex-col items-center justify-center`}>
                    <h1 className="text-lbl text-5xl">
                        PRODUCTS
                    </h1>

                    <h2 className="text-white text-lg text-center grid justify-items-center grid-rows-2 m-4">
                        <h1>Check out all the possible jam options!</h1>
                        <h1>(Purchasing directly from the site direclty has not been implemented yet)</h1>
                    </h2>
                </div> 

                <div className='grid xl:grid-cols-3 grid-cols-1 gap-6 p-6'>
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
                <Link href="/cart">
                    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
                        <button
                        className="flex items-center justify-center text-center text-md xl:text-lg xl:w-32 xl:h-16 w-28 h-12 bg-lbl text-black rounded-full shadow-lg shadow-black hover:scale-105"
                        >
                        View Cart
                        </button>
                    </div>
                </Link>
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
                <div className="fixed top-8 center-0 z-40 -1/2 transform bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
                    {cartNotification}
                </div>
            )}
        </div>
    );
}
