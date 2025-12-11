import HeroSlider from "./Components/HeroSlider"
import FeaturesSection from "./Components/FeaturesSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-red-500">
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <FeaturesSection />

    </div>
  );
}