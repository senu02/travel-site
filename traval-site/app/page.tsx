import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Image from "next/image"
import Footer from "./components/footer";

const travelData = [
  {
    image: "/images/story1.png",
    title: "6 Best Ryokans in Japan to Rejuvenate Yourself",
    date: "09 AUG 2024",
    categories: ["Japan", "Ryokan", "Wellness"],
  },
  {
    image: "/images/story2.png",
    title: "7 Best Places in Asia to Celebrate Christmas",
    date: "30 OCT 2024",
    categories: ["Asia", "Christmas", "Festivals"],
  },
  {
    image: "/images/story3.png",
    title: "6 Best Ryokans in Japan to Rejuvenate Yourself",
    date: "09 AUG 2024",
    categories: ["Japan", "Ryokan", "Wellness"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section>
      <Navbar />
      <HeroSection />
      </section>

 <div className="bg-white  px-6 flex flex-col items-center">

  <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full font-antonio uppercase">
  <div className="relative col-span-1 lg:col-span-1 rounded-2xl overflow-hidden shadow-lg h-100%">
    <Image
      src="/images/category1.png"
      alt="Travel 1"
      fill
      className="object-cover"
    />

  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>

    <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
      CATEGORY 1 • CATEGORY 2
    </div>
    <div className="absolute bottom-4 left-4 right-1 text-white z-10">
      <p className="text-xs mb-1 leading-6">30 OCT 2024</p>
      <p className="text-lg font-semibold leading-8">
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR UT ET TINCIDUNT MOLESTIE SAPIEN
      </p>
    </div>
    <div className="absolute bottom-4 right-4 z-10">
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
              </div>
            </div>
  </div>

  <div className="flex flex-col col-span-2">
    <div className="text-center mb-8 justify-items-start">
      <p className="text-sm font-bold text-[#6d563b] tracking-widest flex items-center justify-items-start leading-7">
        <span className="w-8 h-0.5 bg-red-500 mr-2"></span>
        DREAM. EXPLORE. DISCOVER
      </p>
      <h2 className="text-5xl font-bold text-[#6d563b] mt-2 tracking-tight justify-items-start leading-[1.2]">
        LATEST TRAVEL STORIES
      </h2>
    </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="flex flex-col group">
    <div className="relative rounded-2xl overflow-hidden shadow-md h-[300px] mb-4">
      <Image
        src="/images/category2.png"
        alt="Travel 2"
        fill
        className="object-cover"
      />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>

      <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
        CATEGORY 1
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]" ></div>
    </div>
    <div className="text-left">
      <p className="text-xs text-gray-500 mb-1 leading-6">20 OCT 2024</p>
      <p className="text-lg font-semibold text-[#6d563b] leading-8">
        7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
      </p>
    </div>
  </div>

  <div className="flex flex-col group">
    <div className="relative rounded-2xl overflow-hidden shadow-md h-[300px] mb-4">
      <Image
        src="/images/category3.jpg"
        alt="Travel 3"
        fill
        className="object-cover"
      />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>

      <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
        CATEGORY 1
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ff0000] rounded-b-2xl"></div>
    </div>
    <div className="text-left">
      <p className="text-xs text-gray-500 mb-1 leading-6">28 JULY 2024</p>
      <p className="text-lg font-semibold text-[#6d563b] leading-8">
        8 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
      </p>
    </div>
  </div>
</div>
  </div>
</section>
</div>


    <section className="py-16 px-6 md:px-10 bg-white max-w-6xl mx-auto mt-20">
     
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center mb-4">
          <span className="w-8 h-0.5 bg-red-500 mr-2"></span>
          <p className="text-xs font-roboto text-[#6d563b] uppercase font-bold tracking-widest text-primary-500">
            INSIGHT AND IDEAS
          </p>
        </div>
        <h2 className="text-5xl font-roboto text-[#6d563b] md:text-5xl font-bold uppercase mb-4">OTHER STORIES</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-8  mx-auto">

  <article className="group text-left">
    <div className="relative h-3/4 w-full mb-4 overflow-hidden rounded-lg mx-auto">
      <Image 
        src="/images/story1.png" 
        alt="Ryokan in Japan"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ffc400] rounded-b-2xl"></div>
    </div>
    <span className="text-xs text-[#927B64] font-antonio uppercase block mb-2">09 AUG 2024</span>
    <h3 className="text-xl font-bold mb-4 text-[#927B64] font-antonio uppercase group-hover:text-red-500 transition-colors">
      6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
    </h3>

  </article>

  <article className="group text-left">
    <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg mx-auto">
      <Image 
        src="/images/story2.png" 
        alt="Christmas in Asia"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#d42000] rounded-b-2xl"></div>
    </div>
    <span className="text-xs text-[#927B64] font-antonio uppercase block mb-2">30 OCT 2024</span>
    <h3 className="text-xl font-bold mb-4 text-[#927B64] font-antonio uppercase group-hover:text-red-500 transition-colors">
      7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
    </h3>
  </article>

  <article className="group text-left">
    <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg mx-auto">
      <Image 
        src="/images/story3.png" 
        alt="Ryokan in Japan"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ffc400] rounded-b-2xl"></div>
    </div>
    <span className="text-xs text-[#927B64] font-antonio uppercase block mb-2">09 AUG 2024</span>
    <h3 className="text-xl font-bold mb-4 text-[#927B64] font-antonio uppercase group-hover:text-red-500 transition-colors">
      6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
    </h3>
  </article>

  <article className="group text-left">
    <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg mx-auto">
      <Image 
        src="/images/story4.png" 
        alt="Christmas in Asia"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#d42000] rounded-b-2xl"></div>
    </div>
    <span className="text-xs text-[#927B64] font-antonio uppercase block mb-2">30 OCT 2024</span>
    <h3 className="text-xl font-bold mb-4 text-[#927B64] font-antonio uppercase group-hover:text-red-500 transition-colors">
      7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
    </h3>
  </article>

  <article className="group text-left">
    <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg mx-auto">
      <Image 
        src="/images/story5.jpg" 
        alt="Ryokan in Japan"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ffc400] rounded-b-2xl"></div>
    </div>
    <span className="text-xs text-[#927B64] font-antonio uppercase block mb-2">09 AUG 2024</span>
    <h3 className="text-xl font-bold mb-4 text-[#927B64] font-antonio uppercase group-hover:text-red-500 transition-colors">
      6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
    </h3>
  </article>

  <article className="group text-left">
    <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg mx-auto">
      <Image 
        src="/images/story6.png" 
        alt="Christmas in Asia"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#d42000] rounded-b-2xl"></div>
    </div>
    <span className="text-xs text-[#927B64] font-antonio uppercase block mb-2">30 OCT 2024</span>
    <h3 className="text-xl font-bold mb-4 text-[#927B64] font-antonio uppercase group-hover:text-red-500 transition-colors">
      7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
    </h3>
  </article>
</div>
    </section>

<div className="relative p-8 text-center">
  <div className="absolute inset-0">
    <Image
      src="/images/bg4.png" 
      alt="Background"
      fill
      className="object-cover opacity-10" 
    />
    <div className="absolute inset-0 bg-white/40" /> 
  </div>

  <div className="relative z-10">
    <button className="px-8 py-3 mb-6 text-sm border-2 border-[#6d563b] rounded-full font-bold uppercase hover:bg-[#D0C7B8] hover:text-[#6d563b] text-[#6d563b] transition-colors">
      VIEW ALL BLOGS
    </button>

    <hr className="flex-grow border-t-2 border-primary-300 ml-20 mr-20 mt-10 mb-5" />

    <h3 className="text-3xl font-bold uppercase mb-8 mt-8 text-primary">
      CATEGORIES
    </h3>

    <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          className="bg-[#F5F4F1] text-[#927B64] rounded-full font-semibold px-6 py-2 uppercase hover:bg-[#D0C7B8] transition-colors"
        >
          CATEGORY {num}
        </button>
      ))}
    </div>
  </div>
</div>

      <hr className="border-t-2 border-gray-300 w-full my-0" />

    <section>
      <Footer />
      </section>
    </div>
  )
}