import Navbar from "../components/Navbar";
import Image from 'next/image';

export default function CategoriesPage() {
  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen bg-white text-gray-800">
      <header className="text-center py-10">
        <h2 className="text-sm tracking-wide text-primary-500 uppercase">Dream. Explore. Discover</h2>
        <h1 className="text-5xl font-bold mt-4 text-[#927B64]">DIVE INTO A WORLD OF INSPIRATION</h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          Mackinnons Travels Dive into a world of inspiration, insights, and ideas. Whether you're here to explore, learn, or simply unwind, our blog brings stories that resonate and topics that spark curiosity.
        </p>
      </header>

      <div className="flex justify-center space-x-4 mb-10">
        <button className="bg-gray-200 py-2 px-4 rounded">Categories ▾</button>
        <button className="bg-gray-200 py-2 px-4 rounded">Years ▾</button>
      </div>

      <div className="flex justify-center space-x-4 text-gray-600">
        <span className="font-bold text-black">2024</span>
        <span>2023</span>
        <span>2022</span>
        <span>2021</span>
        <span>2020</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-10">
        <div className="rounded-lg overflow-hidden border border-gray-300">
          <div className="relative">
            <Image src="/images/story1.png" alt="Japan" width={600} height={400} className="w-full" />
            <div className="absolute top-2 left-2 text-white text-xs px-3 py-1 rounded">CATEGORY 1 · CATEGORY 2</div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-500">09 AUG 2024</p>
            <h3 className="text-xl font-semibold mt-2">6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF</h3>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-300">
          <div className="relative">
            <Image src="/images/story2.png" alt="Greece" width={600} height={400} className="w-full" />
            <div className="absolute top-2 left-2  text-white text-xs px-3 py-1 rounded">CATEGORY 1</div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-500">09 JULY 2024</p>
            <h3 className="text-xl font-semibold mt-2">7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}