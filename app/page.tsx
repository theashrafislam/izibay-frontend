import HeroSlider from "./Components/HeroSlider"
import FeaturesSection from "./Components/FeaturesSection"
import FAQ from "./Components/FAQ"
import Newsletter from "./Components/Newsletter"
import ReviewSection from "./Components/ReviewSection"
import CategorySection from "./Components/CategorySection"
import FeaturedProducts from "./Components/FeaturedProducts"
import NewArrivals from "./Components/NewArrivals"

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Products */}
      <FeaturedProducts />

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