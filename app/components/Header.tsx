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
        className={`w-full bg-black h-[14vh] px-6 z-20 flex items-center justify-between transition-shadow border-y-8 border-white sm:border-y-4 ${
          isScrolled ? "shadow-lg" : "shadow-none"
        }`}
      >
        {/* Mobile Menu Button */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                className={`h-1 w-auto mr-4 ml-4 mb-2 rounded ${
                  pathname === item.path ? "bg-lbl" : "bg-white"
                }`}
              ></div>
              <span
                className={`py-2 px-4 text-lg font-medium ${
                  pathname === item.path ? "text-lbl" : "text-white"
                } hover:text-lbl hover:bg-black rounded`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <Link href="/">
          <img
            src={"/imgs/logo.jpg"}
            alt="Logo"
            className="object-cover w-22 h-16 xl:w-44 xl:h-24 sm:w-16 sm:h-10 ml-20 xl:mr-20 sm:ml-40"
          />
        </Link>



        <Link href="/cart">
          <div className="ml-[12vw]">
            <button
              className="items-center justify-center text-center text-xs p-4 xl:text-lg flex w-22 h-10 xl:w-40 xl:h-16 bg-lbl text-black rounded-full hover:scale-105"
              >View Cart
              </button>
          </div>
        </Link>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="absolute top-[14vh] left-0 w-full bg-black p-4 z-30 flex flex-col items-center xl:hidden justify-center">
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
