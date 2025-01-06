import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: number;
  image: string;
  discount?: number;
}

const newArrivals: Product[] = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    ratingCount: 456,
    image: "/arrivalsImages/1.png",
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    rating: 4.2,
    ratingCount: 356,
    discount: 30,
    image: "/arrivalsImages/2.png",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.4,
    ratingCount: 456,
    image: "/arrivalsImages/3.png",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    rating: 4.6,
    ratingCount: 4.6,
    discount: 40,
    image: "/arrivalsImages/4.png",
  },
];

export default function Arrials() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section id="Arrivals" className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="#Casual">
            <Button variant="outline" className="w-50 max-w-md">
              View All
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
            height={444}
            width={296}
          />
          {product.discount && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
              -{product.discount}%
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2">{product.name}</h3>
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              ({product.ratingCount})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
