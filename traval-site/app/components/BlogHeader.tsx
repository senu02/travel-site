export default function BlogHeader() {
  return (
    <section className="relative bg-gray-900 text-white py-24">
      {/* Background image would go here */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold mb-4">DREAM. EXPLORE. DISCOVER</p>
          <h1 className="text-5xl font-serif font-bold mb-6 leading-tight">
            DIVE INTO A WORLD OF INSPIRATION
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Mackinnons Travels Dive into a world of inspiration, insights, and ideas. Whether you're here to explore, learn, or simply unwind, our blog brings stories that resonate and topics that spark curiosity.
          </p>
        </div>
      </div>
    </section>
  )
}