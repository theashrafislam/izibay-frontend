export default function Home() {
  return (
    <div className="min-h-screen bg-red-500">
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1522199778941-216a9f69f42b')] text-white">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Welcome to Izibay
        </h1>
        <p className="text-lg lg:text-2xl max-w-xl">
          Discover trendy fashion collections for everyone.
        </p>
      </section>

      {/* Scroll Content */}
      <section className="min-h-screen flex justify-center items-center bg-white">
        <h2 className="text-3xl font-semibold">
          Scroll Down Content 😊
        </h2>
      </section>

    </div>
  );
}