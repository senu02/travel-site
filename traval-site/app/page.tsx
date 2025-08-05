import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Image from "next/image"

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
      <Navbar />
      <HeroSection />
      
      {/* Additional sections would go here */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Future content sections */}
        </div>
      </div>

    
      <div className="flex items-center justify-center my-8 w-full">
        <hr className="flex-grow border-t-2 border-gray-300" />
        <span className="mx-4 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M2.5 19.5l19-7.5-19-7.5v6l15 1.5-15 1.5v6z" />
          </svg>
        </span>
        <hr className="flex-grow border-t-2 border-gray-300" />
      </div>
      <div className="flex justify-center mt-8">

      <section className="bg-white py-16 relative">
      <div className="text-center mb-10">
        <p className="text-sm uppercase font-bold tracking-widest font-roboto text-primary">DREAM. EXPLORE. DISCOVER</p>
        <h2 className="text-4xl font-semibold text-[#6d563b] mt-2">LATEST TRAVEL STORIES</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-4 max-w-6xl mx-auto">
  {travelData.map((item, idx) => (
    <div
      key={idx}
      className={`flex flex-col ${idx === 0 ? 'md:max-w-[45%]' : 'md:max-w-[25%]'} w-full`}
    >
      <div className="relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={800}
          className="object-cover h-full w-full"
        />

        <div className="absolute top-3 left-3 flex gap-2 text-xs font-semibold">
          {item.categories.map((cat, i) => (
            <span
              key={i}
              className="bg-white/80 text-[#4b4b4b] px-2 py-1 rounded-full text-[10px]"
            >
              {cat}
            </span>
          ))}
        </div>

        {idx === 0 && (
          <>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs mb-1">{item.date}</p>
              <h3 className="text-sm md:text-base font-semibold leading-snug">
                {item.title.toUpperCase()}
              </h3>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
              &rarr;
            </div>
          </>
        )}
      </div>

      {idx !== 0 && (
        <div className="mt-4 px-1">
          <p className="text-xs text-gray-500">{item.date}</p>
          <h3 className="text-sm md:text-base font-semibold text-[#6d563b] mt-1 leading-snug">
            {item.title}
          </h3>
        </div>
      )}
    </div>
  ))}
  </div>
    </section>
    
    </div>
          <section className="py-16 px-6 md:px-10 bg-white max-w-6xl mx-auto">
     
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center mb-4">
          <span className="w-8 h-0.5 bg-red-500 mr-2"></span>
          <p className="text-xs uppercase font-bold tracking-widest text-white-500">
            INSIGHT AND IDEAS
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">OTHER STORIES</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

  <article className="group text-left">
    <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg mx-auto">
      <Image 
        src="/images/story1.png" 
        alt="Ryokan in Japan"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
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
    </div>
    <span className="text-xs text-[#927B64] font-antonio uppercase block mb-2">30 OCT 2024</span>
    <h3 className="text-xl font-bold mb-4 text-[#927B64] font-antonio uppercase group-hover:text-red-500 transition-colors">
      7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
    </h3>
  </article>
</div>
    </section>

   <div className="bg-gray-100 p-8 text-center">
      <button className="px-8 py-3 mb-12 text-sm border-2 border-black rounded-full font-bold uppercase hover:bg-black hover:text-white transition-colors">
        VIEW ALL BLOGS
      </button>
      <h3 className="text-xl font-bold uppercase mb-8 text-[#927B64]">CATEGORIES</h3>

      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        {[1, 2, 3, 4, 5].map((num) => (
          <button 
            key={num}
            className="rounded-full font-bold uppercase px-6 py-2 uppercase text-[#927B64] hover:bg-white  transition-colors">
            CATEGORY {num}
          </button>
        ))}
      </div>
    </div>

      <hr className="border-t-2 border-gray-300 w-full my-0" />

      <footer className="bg-[#fdfaf6] text-[#836e5d] text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src="/images/logo.png" alt="Mackinnons" className="h-12" />
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-75">
              <img src="/icons/fb.png" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="/icons/instagram.png" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="/icons/tik-tok.png" alt="TikTok" className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-1sm font-roboto text-primary">Contact Info</h3>
          <br></br>
          <p className="text-1xl font-bold mb-3 font-roboto text-primary">Mackinnons Travels</p>
          <p>#186 Vauxhall Steet, Colombo 02,</p>
          <p>Sri Lanka.</p>
          <p className="mt-3">+94 11 799 100</p>
          <p className="mt-3">online@mackinnonstravels.com</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Discover</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Mackinnons Home</a></li>
            <li><a href="#" className="hover:underline">Blog Home</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
          </ul>
        </div>
    <div>
  <h3 className="text-xs text-gray-500 mb-2">
    Sign up for special offers, news updates
  </h3>
  <div className="flex items-center border boder-[#fdfaf6] rounded-full overflow-hidden bg-[#836e5d]">
    <input
      type="email"
      placeholder="Your Email Address"
      className="flex-1 px-4 py-2 text-sm bg-transparent text-white placeholder-white focus:outline-none"/>
    <button className="px-4 py-2 hover:opacity-90 transition">
      <img src="/icons/telegram.png" alt="Send" className="h-4 w-4" />
    </button>
  </div>
  </div>
</div>
    <div className="fixed bottom-10 right-4 flex flex-col gap-3 z-50">
        <a href="#"><img src="/icons/whatsapp.png" alt="WhatsApp" className="h-10 w-10" /></a>
        <a href="#"><img src="/icons/messenger.png" alt="Messenger" className="h-10 w-10" /></a>
      </div>
    <br></br>

      <div className="border-t border-gray-200 mt-10 py-4 text-xs text-center flex flex-col md:flex-row justify-between items-center px-4">
        <p>© 2024 Mackinnons Travel. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
        <p>Website Designed & Developed by eMarketingEye</p>
      </div>
    </footer>
    </div>
  )
}