import Image from "next/image";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Product {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "/yourCard/1.png",
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "/yourCard/2.png",
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: "/yourCard/3.png",
  },
];

export default function ShoppingCart() {
  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div id="Shopping" className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <button>Home</button>
        <span>&gt;</span>
        <button className="font-semibold text-primary">Cart</button>
      </div>

      {/* Title */}
      <h1 className="mb-8 mt-4 text-4xl font-bold uppercase">Your Cart</h1>

      <div className="lg:grid lg:grid-cols-[1fr,400px] lg:gap-8">
        {/* Products List */}
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">
                    <p>Size: {product.size}</p>
                    <p>Color: {product.color}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border p-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full h-8 w-8"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">1</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full h-8 w-8"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm lg:mt-0">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <p className="text-muted-foreground">Subtotal</p>
              <p className="font-semibold">${subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">Discount (20%)</p>
              <p className="font-semibold text-red-500">-${discount}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">Delivery Fee</p>
              <p className="font-semibold">${deliveryFee}</p>
            </div>
            <div className="flex justify-between border-t pt-4">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">${total}</p>
            </div>
          </div>
          <div className="mt-6">
            <Input placeholder="Add promo code" className="mb-2" />
            <Button variant="outline" className="w-full">
              Apply
            </Button>
          </div>
          <Button className="mt-6 w-full rounded-full bg-black text-white hover:bg-gray-800">
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
