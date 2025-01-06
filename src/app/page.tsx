import Hero from "./Components/Hero";
import ProductGrid from "./Components/Arrivals";
import DressStyle from "./Components/Dress";
import Customer from "./Components/Customer";
import TopSelling from "./Components/Top-Selling";

export default function Home() {
  return (
   <div>
    <Hero/>
    <ProductGrid/>
    <TopSelling/>
    <DressStyle/>
    <Customer/>
   </div>
  );
}