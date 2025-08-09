import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from 'next/image';

export default function CategoriesPage() {
  return (
 <div className="min-h-screen">
        <Navbar />
      
      <div className="min-h-screen bg-white">
      <header className="text-center py-10">
  <div className="flex items-center justify-center mb-6">
    <span className="w-20 h-1 bg-red-500 mr-4"></span>
    <h2 className="text-[18px] font-primary font-roboto font-medium tracking-[10%] uppercase leading-none">
      DREAM. EXPLORE. DISCOVER
    </h2>
  </div>

  <h1 className="text-[50px] font-antonio font-normal leading-[120%] text-[#927B64] uppercase">
    DIVE INTO A WORLD OF<br />INSPIRATION
  </h1>

  <p className="mt-10 text-[18px] font-roboto font-light leading-[180%] tracking-[2%] text-gray-600 ml-75 mr-75">
    Mackinnons Travels Dive into a world of inspiration, insights, and ideas. Whether you're here to explore, learn, or simply unwind, our blog brings stories that resonate and topics that spark curiosity. Dive into a world of inspiration, insights, and ideas. at in. Aliquet pharetra ut pellentesque non etorem volutpat cras adipiscing non donec quis proin sit. Cum tincidunt proin faucibus nulla. Mauris scelerisque urna urna consectetur.
  </p>
</header>

      <div className="flex justify-center space-x-4 mb-10">
        <button className="bg-[#F5F4F1] text-primary font-semibold py-2 px-4 rounded-full">Categories</button>
        <button className="bg-[#002D6A] text-white py-2 px-4 rounded-full">Years</button>
      </div>

      <div className="flex justify-center space-x-4 text-primary font-semibold">
        <span>2024</span>
        <span>2023</span>
        <span>2022</span>
        <span>2021</span>
        <span>2020</span>
      </div>

       <div className="mx-[10%] mt-20"> 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

    <div className="flex flex-col group mb-10">
      <Link href="/blog" className="block">
        <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4 cursor-pointer">
          <Image
            src="/images/story1.png"
            alt="Travel 2"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
          <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
            CATEGORY 1
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]"></div>
        </div>
      </Link>
      <div className="text-left">
        <p className="text-xs text-primary font-bold mb-1 leading-6">20 OCT 2024</p>
        <p className="text-lg font-semibold text-[#6d563b] leading-8">
          7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
        </p>
      </div>
    </div>

    <div className="flex flex-col group mb-10">
      <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
        <Image
          src="/images/story2.png"
          alt="Travel 3"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
        <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
          CATEGORY 1
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ff0000]"></div>
      </div>
      <div className="text-left">
        <p className="text-xs text-primary font-bold mb-1 leading-6">28 JULY 2024</p>
        <p className="text-lg font-semibold text-[#6d563b] leading-8">
          8 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
        </p>
      </div>
    </div>

    <div className="flex flex-col group mb-10">
      <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
        <Image
          src="/images/story3.png"
          alt="Travel 2"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
        <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
          CATEGORY 1
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[hsl(131,57%,45%)]"></div>
      </div>
      <div className="text-left">
        <p className="text-xs text-primary font-bold mb-1 leading-6">20 OCT 2024</p>
        <p className="text-lg font-semibold text-[#6d563b] leading-8">
          7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
        </p>
      </div>
    </div>

    <div className="flex flex-col group mb-10">
      <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
        <Image
          src="/images/story4.png"
          alt="Travel 3"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
        <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
          CATEGORY 1
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#6804b4]"></div>
      </div>
      <div className="text-left">
        <p className="text-xs text-primary font-bold mb-1 leading-6">28 JULY 2024</p>
        <p className="text-lg font-semibold text-[#6d563b] leading-8">
          8 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
        </p>
      </div>
    </div>

    <div className="flex flex-col group mb-10">
      <Link href="/blog" className="block">
        <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4 cursor-pointer">
          <Image
            src="/images/story5.jpg"
            alt="Travel 2"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
          <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
            CATEGORY 1
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]"></div>
        </div>
      </Link>
      <div className="text-left">
        <p className="text-xs text-primary font-bold mb-1 leading-6">20 OCT 2024</p>
        <p className="text-lg font-semibold text-[#6d563b] leading-8">
          7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
        </p>
      </div>
    </div>

    <div className="flex flex-col group mb-10">
      <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
        <Image
          src="/images/story6.png"
          alt="Travel 3"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
        <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
          CATEGORY 1
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ff0000]"></div>
      </div>
      <div className="text-left">
        <p className="text-xs text-primary font-bold mb-1 leading-6">28 JULY 2024</p>
        <p className="text-lg font-semibold text-[#6d563b] leading-8">
          8 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
        </p>
      </div>
    </div>

    <div className="flex flex-col group mb-10">
      <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
        <Image
          src="/images/story3.png"
          alt="Travel 2"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
        <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
          CATEGORY 1
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[hsl(131,57%,45%)]"></div>
      </div>
      <div className="text-left">
        <p className="text-xs text-primary font-bold mb-1 leading-6">20 OCT 2024</p>
        <p className="text-lg font-semibold text-[#6d563b] leading-8">
          7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
        </p>
      </div>
    </div>

    <div className="flex flex-col group mb-10">
      <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
        <Image
          src="/images/story4.png"
          alt="Travel 3"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
        <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
          CATEGORY 1
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#6804b4]"></div>
      </div>
      <div className="text-left">
        <p className="text-xs text-primary font-bold mb-1 leading-6">28 JULY 2024</p>
        <p className="text-lg font-semibold text-[#6d563b] leading-8">
          8 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
        </p>
      </div>
    </div>
     </div>
</div>
     <section className=" justify items-center mt-10 mb-25">
    <div className="flex justify-center items-center gap-4 my-6">

  <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] hover:bg-[#836e5d] hover:text-white transition">1</button>

  <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] hover:bg-[#836e5d] hover:text-white transition">2</button>

  <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] hover:bg-[#836e5d] hover:text-white transition">3</button>

  <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] text-lg font-semibold hover:bg-[#836e5d] hover:text-white transition">&gt;</button>
  
  </div>
  </section>
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
  <div className="flex items-center border boder-[#fdfaf6] rounded-full overflow-hidden ">
    <input
      type="email"
      placeholder="Your Email Address"
      className="flex-1 px-4 py-2 text-sm bg-transparent text-[#836e5d] placeholder-[#836e5d] focus:outline-none"/>
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
  );
}