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
          <h1 className="sm:text-2xl text-xl mt-2 font-bold text-gray-900 mb-4 md:mb-0">
            SHOP.Co
          </h1>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex md:ml-1 md:mr-10 flex-wrap items-center text-base justify-center space-x-5">
            <Link href="/" className="flex items-center">
              Shop <RiArrowDropDownLine className="text-2xl" />
            </Link>
            <Link href={"/Category"} className="hover:text-gray-900">
              On Sale
            </Link>
            <Link href={"#Arrivals"} className="hover:text-gray-900">
              New Arrivals
            </Link>
            <Link href={"#Brands"} className="hover:text-gray-900">
              Brands
            </Link>
          </nav>

          {/* Search Bar, Wishlist Icon, Cart Icon, Hamburger Menu for Mobile */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <AiOutlineSearch
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-gray-100 rounded-lg px-4 py-2 w-[200px] sm:w-[300px] lg:w-[577px] focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Icons */}
            <Link href="#Shopping">
              <AiOutlineShoppingCart
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                size={24}
              />
            </Link>
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <nav
              className="fixed top-0 right-0 bg-white w-64 h-full flex flex-col items-center p-4 space-y-4 shadow-lg transition-transform duration-300"
            >
              <button
                className="self-end text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                ✖
              </button>
              <Link href="/" className="flex items-center">
                Shop <RiArrowDropDownLine className="text-2xl" />
              </Link>
              <Link href={"/Category"} className="hover:text-gray-900">
                On Sale
              </Link>
              <Link href={"#Arrivals"} className="hover:text-gray-900">
                New Arrivals
              </Link>
              <Link href={"#Brands"} className="hover:text-gray-900">
                Brands
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
