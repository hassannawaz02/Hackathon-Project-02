import Image from "next/image";
import { Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Polo with Contrast Trims",
    image: "/productRecomendationImages/1.png",
    rating: 4.0,
    price: 212,
    originalPrice: 242,
    discount: 20,
  },
  {
    id: 2,
    name: "Gradient Graphic T-shirt",
    image: "/productRecomendationImages/2.png",
    rating: 3.5,
    price: 145,
  },
  {
    id: 3,
    name: "Polo with Tipping Details",
    image: "/productRecomendationImages/3.png",
    rating: 4.5,
    price: 180,
  },
  {
    id: 4,
    name: "Black Striped T-shirt",
    image: "/productRecomendationImages/4.png",
    rating: 5.0,
    price: 120,
    originalPrice: 150,
    discount: 30,
  },
];

export default function ProductRecommendations() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">
        YOU MIGHT ALSO LIKE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-lg p-4">
            <div className="aspect-square relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300 fill-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating}/5
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-red-500 text-sm">
                    -{product.discount}%
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
