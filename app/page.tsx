import HeroSlider from "./Components/HeroSlider"
import FeaturesSection from "./Components/FeaturesSection"
import FAQ from "./Components/FAQ"
import Newsletter from "./Components/Newsletter"
import ReviewSection from "./Components/ReviewSection"
import CategorySection from "./Components/CategorySection"
import FeaturedProducts from "./Components/FeaturedProducts"
import NewArrivals from "./Components/NewArrivals"
import Marquee from "react-fast-marquee";
import { FaCircle } from "react-icons/fa"

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* marquee section  */}
      <Marquee speed={60} className="bg-[#F0F0F0] text-xl text-black font-bold lg:text-4xl py-5">
        <p>10% Flat discount at order over BDT 999!</p>
        <FaCircle className="px-4 text-white text-5xl" />
        <p>20% Flat discount at order over BDT 1999!</p>
        <FaCircle className="px-4 text-white text-5xl" />
      </Marquee>

      {/* Category Section */}
      <CategorySection />

      {/* New Arrivals */}
      <NewArrivals />

      {/* review section  */}
      <ReviewSection />

      {/* Newsletter sectio  */}
      <Newsletter />

      {/* faq section  */}
      <FAQ />

      {/* Features Section */}
      <FeaturesSection />

    </div>
  );
}