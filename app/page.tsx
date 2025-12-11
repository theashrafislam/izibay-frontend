import Slider from "./Components/Slider"

export default function Home() {
  return (
    <div className="min-h-screen bg-red-500">
      
      {/* Hero Section */}
      <Slider />

      {/* Scroll Content */}
      <section className="min-h-screen flex justify-center items-center bg-white">
        <h2 className="text-3xl font-semibold">
          Scroll Down Content 😊
        </h2>
      </section>

    </div>
  );
}