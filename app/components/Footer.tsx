"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-foreground py-8 border-y-8 border-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-rows-1 grid-cols-3 gap-10 text-background xl:text-lg text-sm justify-items-center md:justify-between">
                    {/* Company Section */}
                    <div className="text-center md:text-left">
                        <h2 className="font-bold xl:text-xl text-lg text-lbl mb-4">Company</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-nuto">Home</Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-nuto">Products</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-nuto">Contact</Link>
                            </li>
                            <li>
                                <Link href="/cart" className="hover:text-nuto">Cart</Link>
                            </li>
                            <li>
                                <Link href="/get-involved" className="hover:text-nuto">Get Involved</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Terms & Policies Section */}
                    <div className="text-center md:text-left">
                        <h2 className="font-bold xl:text-xl text-lg text-lbl mb-4">Terms & Policies</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms-and-conditions" className="hover:text-nuto">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-nuto">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Socials Section */}
                    <div className="text-center md:text-left">
                        <h2 className="font-bold xl:text-xl text-lg text-lbl mb-4 sm:mr-20">Socials</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Link href="https://facebook.com" target="_blank" className="hover:text-white block mb-2">
                                    Instagram
                                </Link>
                                <Link href="https://instagram.com" target="_blank" className="hover:text-white block mb-2">
                                    Facebook
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-background">
                    <p>© 2024 ThisIsMyJam. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
