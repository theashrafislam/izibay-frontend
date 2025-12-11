import HeroSlider from "./Components/HeroSlider"
import FeaturesSection from "./Components/FeaturesSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <FeaturesSection />

    </div>
  );
}