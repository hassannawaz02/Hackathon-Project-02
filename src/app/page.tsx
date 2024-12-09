import { Hero } from "./Components/Hero/Hero";
import ProductGrid from "./Components/Arrivals & Top Selling/Arrivals-top-selling";
import DressStyle from "./Components/Dress Style/Dress-style";
import Customer from "./Components/Customer/Customer";

export default function Home() {
  return (
   <div>
    <Hero/>
    <ProductGrid/>
    <DressStyle/>
    <Customer/>
   </div>
  );
}

