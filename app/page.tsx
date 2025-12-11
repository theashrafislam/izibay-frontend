import HeroSlider from "./Components/HeroSlider"
import FeaturesSection from "./Components/FeaturesSection"
import FAQ from "./Components/FAQ"

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <HeroSlider />

      {/* faq section  */}
      <FAQ />

      {/* Features Section */}
      <FeaturesSection />

    </div>
  );
}