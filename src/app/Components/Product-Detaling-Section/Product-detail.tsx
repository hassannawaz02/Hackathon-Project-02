"use client";

import { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ReviewsSection from "./Reviews-Section";
import ProductRecommendations from "./Product-recomendation";
export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "olive", class: "bg-[#4A5D3F]" },
    { name: "forest", class: "bg-[#1C3A3E]" },
    { name: "navy", class: "bg-[#1B1E3D]" },
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-primary">
            Home
          </a>
          <span>/</span>
          <a href="/shop" className="hover:text-primary">
            Shop
          </a>
          <span>/</span>
          <a href="/shop/men" className="hover:text-primary">
            Men
          </a>
          <span>/</span>
          <span className="text-primary">T-shirts</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/productDetailImages/main.png"
                alt="ONE LIFE Graphic T-shirt main view"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <Star className="h-5 w-5 fill-yellow-400/50 text-yellow-400" />
              <span className="ml-2 text-sm text-muted-foreground">4.5/5</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">$260</span>
              <span className="text-xl text-muted-foreground line-through">
                $300
              </span>
              <span className="rounded-md bg-red-100 px-2 py-1 text-sm text-red-600">
                -40%
              </span>
            </div>

            <p className="text-muted-foreground">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="font-medium">Select Colors</h3>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`h-8 w-8 rounded-full ${color.class} ${
                      selectedColor === color.name
                        ? "ring-2 ring-offset-2 ring-primary"
                        : ""
                    }`}
                  >
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="font-medium">Choose Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-md px-4 py-2 text-sm ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-md border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-muted"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-muted"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button className="flex-1" size="lg">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ReviewsSection />
      <ProductRecommendations />
    </div>
  );
}
