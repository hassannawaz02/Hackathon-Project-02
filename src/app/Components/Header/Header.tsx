"use client";

import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import TopHeader from "./TopHeader";

import Link from "next/link";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <TopHeader />
      <header className="text-gray-600 body-font bg-white shadow-md">
        <div className="container mx-auto flex p-3 justify-between items-center px-4 sm:px-6 md:px-8">
          {/* Logo Section */}
          <h1 className="sm:text-2xl text-xl mt-2  font-bold text-gray-900 mb-4 md:mb-0">
            SHOP.Co
          </h1>

          {/* Navigation Links for Desktop */}
          <nav className="md:ml-1 md:mr-10 flex-wrap items-center text-base justify-center space-x-5 hidden md:flex">
            <Link href="/" className="flex">
              Shop <RiArrowDropDownLine className="text-2xl" />
            </Link>

            <Link href={"/"} className="mr-5 hover:text-gray-900">
              On Sale
            </Link>
            <Link href={"#Arrivals"} className="mr-5 hover:text-gray-900">
              New Arrivals
            </Link>
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Brands
            </Link>
          </nav>

          {/* Search Bar, Wishlist Icon, Cart Icon, Hamburger Menu for Mobile */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-gray-100 rounded-lg px-4 py-2 w-[577px] focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <AiOutlineSearch
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>

            {/* Wishlist Icon */}
            <Link href="#Shopping">
              <AiOutlineShoppingCart
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                size={24}
              />
            </Link>

            {/* Cart Icon */}
            <Link href="/">
              <CgProfile
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                size={24}
              />
            </Link>

            {/* Hamburger Menu Icon for Mobile */}
            <button
              className="text-gray-600 md:hidden flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-center bg-gray-50 p-4 space-y-4">
            <Link href="/" className="flex">
              Shop <RiArrowDropDownLine className="text-2xl" />
            </Link>

            <Link href={"/"} className="mr-5 hover:text-gray-900">
              On Sale
            </Link>
            <Link href={"#Arrivals"} className="mr-5 hover:text-gray-900">
              New Arrivals
            </Link>
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Brands
            </Link>
            <button
              className="mt-4 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Close Menu
            </button>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
