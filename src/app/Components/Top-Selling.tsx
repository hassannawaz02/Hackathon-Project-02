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

const topSelling: Product[] = [
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    rating: 5.0,
    ratingCount: 5,
    discount: 20,
    image: "/topSellingImages/5.png",
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    ratingCount: 4.0,
    image: "/topSellingImages/6.png",
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 4.3,
    ratingCount: 320,
    image: "/topSellingImages/7.png",
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.6,
    ratingCount: 456,
    image: "/topSellingImages/8.png",
  },
];

export default function TopSelling() {
  return (
    <div id="Arrivals" className="container mx-auto -mt-12 px-4 py-8">
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8">TOP SELLING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSelling.map((product) => (
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