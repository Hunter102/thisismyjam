"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Contact", path: "/contact" },
  ];

  // Track scroll position to add shadow on header when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full bg-black h-[14vh] px-6 z-20 flex items-center justify-between transition-shadow ${
          isScrolled ? "shadow-lg" : "shadow-none"
        }`}
      >
        <nav className="flex items-center space-x-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                className={`h-1 w-auto mr-4 ml-4 mb-2 rounded 
                  ${pathname === item.path ? "bg-lbl" : "bg-background"}`}></div>
              <span
                className={`py-2 px-4 text-lg font-medium 
                  ${pathname === item.path ? "text-lbl" : "text-white"} 
                  hover:text-lbl hover:bg-foreground rounded`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <img
          src={"/imgs/logo.jpg"}
          alt="Logo"
          className="object-cover w-auto h-auto"
        />

        <Link href="/cart">
          <div className="ml-[12vw]">
            <button
              className="flex items-center justify-center text-center text-lg w-32 h-16 bg-lbl text-foreground rounded-full shadow-lg shadow-foreground hover:scale-105"
              >View Cart
              </button>
          </div>
        </Link>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="absolute top-[8vh] left-0 w-full bg-black p-4 z-10 flex flex-col items-center space-y-2 md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              <span
                className={`block w-full py-2 px-4 text-lg text-center font-medium 
                  ${pathname === item.path ? "text-lbl bg-lbl/20" : "text-white"}
                  hover:text-lbl hover:bg-lbl/10 rounded`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
