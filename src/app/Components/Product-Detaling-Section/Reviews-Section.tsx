import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoreHorizontal, Star } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Samantha D.",
    rating: 4.5,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
    verified: true,
  },
  {
    id: 2,
    author: "Alex M.",
    rating: 4,
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
    verified: true,
  },
  {
    id: 3,
    author: "Ethan R.",
    rating: 3.5,
    content:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "August 16, 2023",
    verified: true,
  },
  {
    id: 4,
    author: "Olivia P.",
    rating: 4,
    content:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: "August 17, 2023",
    verified: true,
  },
  {
    id: 5,
    author: "Liam K.",
    rating: 4,
    content:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    date: "August 18, 2023",
    verified: true,
  },
  {
    id: 6,
    author: "Ava H.",
    rating: 4.5,
    content:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: "August 19, 2023",
    verified: true,
  },
];

export default function ReviewsSection() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="reviews">Rating & Reviews</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
        </TabsList>
        <TabsContent value="reviews">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                All Reviews <span className="text-gray-500">(451)</span>
              </h2>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 6h18" />
                    <path d="M7 12h10" />
                    <path d="M11 18h6" />
                  </svg>
                  Latest
                </Button>
                <Button className="bg-black text-white">Write a Review</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviews.map((review) => (
                <Card key={review.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(review.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : i < review.rating
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{review.author}</span>
                        {review.verified && (
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            ✓
                          </span>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-4 text-gray-600">{review.content}</p>
                  <p className="mt-4 text-sm text-gray-500">
                    Posted on {review.date}
                  </p>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="w-full max-w-md">
                Load More Reviews
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
