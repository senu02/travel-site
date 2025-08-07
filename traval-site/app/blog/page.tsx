import Navbar from "../components/Navbar";
import Image from 'next/image';

export default function blogPage() {
  return (

<div className="min-h-screen">
    <Navbar/>

<section className="flex flex-col items-center">    
    <div className="mb-8 flex flex-col items-start w-2/3">
      <p className="text-sm font-bold text-[#927B64] tracking-widest leading-7 mb-1">09 OCT 2024</p>
      <h2 className="text-4xl font-bold text-[#927B64] font-antonio uppercase mt-2 tracking-tight leading-[1.2]">6 best ryokans in Japan to rejuvenate yourself</h2>
    </div>

     <div className="relative rounded-2xl overflow-hidden shadow-md w-[1141px] h-[693px] mb-4">
          <Image
            src="/images/blog1.jpg"
            alt="Travel 2"
            fill
            className="object-cover"
          />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
          <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6 uppercase">
            Category 1  .  Category 2  .  Category 3           </div>
          <div className="absolute bottom-4 right-4 z-10">
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]" ></div>
        </div>
</section>

<section>
    <p className="text-[#434343] text-base font roboto font-light mx-auto px-4 ml-50 mr-50 mt-15 mb-8">
        Mackinnons Travels Dive into a world of inspiration, insights, and ideas. Whether you're here to explore, learn, or simply unwind, our blog brings stories that resonate and topics that spark curiosity. 
        Dive into a world of inspiration, insights, and ideas Lorem ipsum dolor sit amet consectetur. Ipsum pretium nisl condimentum scelerisque faucibus porta pellentesque scelerisque ac. Varius sollicitudin rhoncus pellentesque vitae non risus pulvinar pretium. 
        Vitae nullam sodales risus ultrices pharetra porta ornare laoreet ac. Eget nulla pretium id euismod ornare sagittis quis. Auctor amet suscipit urna lobortis aliquam dignissim. Nisl magnis gravida ligula duis sit sit. 
        Euismod arcu at tellus duis metus ut velit elementum. Fermentum id eget turpis mattis. Nulla amet massa lacus sed. Leo ac amet diam purus ullamcorper. Ultrices convallis lectus nisl accumsan. 
        Orci consequat adipiscing iaculis scelerisque vulputate tellus nascetur sed. Lacus morbi elit lorem adipiscing adipiscing nisi iaculis pharetra leo. Gravida quam purus malesuada magna nec nec elementum. 
    </p>

    <p className="text-[#434343] text-base font roboto font-light mx-auto px-4 ml-50 mr-50 mt-15 mb-8">
        Quam eu enim ac mauris ipsum tincidunt. Amet gravida placerat lectus risus at urna condimentum nisi vestibulum. Orci suspendisse lobortis eu pulvinar suscipit eu mi donec. Sagittis mattis risus libero odio. 
        Sapien elementum suspendisse nunc at in. Aliquet pharetra ut pellentesque non et. Lorem volutpat cras adipiscing non donec quis proin sit. Cum tincidunt proin faucibus nulla. Mauris scelerisque urna urna consectetur. 
        Ullamcorper tortor nec elit nullam eu velit faucibus lobortis. Feugiat rhoncus sollicitudin enim placerat elit venenatis elit. Amet facilisis ut nunc nibh. In cursus et vestibulum enim congue nascetur. 
        Iaculis proin orci nunc dignissim cursus nec tellus. Sed pharetra consectetur commodo id elementum aliquet id 

    </p>
</section>

<section className="flex justify-center mt-20 mb-5">
    <div className="grid grid-cols-2 gap-8">
       <div className="flex flex-col group mb-5">
           <div className="relative rounded-3xl overflow-hidden shadow-md w-[560px] h-[349px] mb-4 cursor-pointer">
             <Image
               src="/images/1.jpg"
               alt="Travel 2"
               fill
               className="object-cover"
             />        
             <div className="absolute bottom-4 right-4 z-10"></div>
             <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]"></div>
           </div>
       </div>
     
          <div className="flex flex-col group mb-5">
           <div className="relative rounded-3xl overflow-hidden shadow-md w-[560px] h-[349px] mb-4 cursor-pointer">
             <Image
               src="/images/2.jpg"
               alt="Travel 2"
               fill
               className="object-cover"
             />        
             <div className="absolute bottom-4 right-4 z-10"></div>
             <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]"></div>
           </div>
       </div>
    </div>
</section>

<section>
    <div className="flex justify-center items-center mb-10">
        <ul className="list-disc pl-6 space-y-6 text-[#434343] text-base font roboto font-light mx-auto px-4 ml-50 mr-50 mt-5 mb-8">
            <li>Lorem ipsum dolor sit amet consectetur. Ipsum pretium nisl condimentum scelerisque faucibus porta pellentesque scelerisque ac. 
                Varius sollicitudin rhoncus pellentesque vitae non risus pulvinar pretium. Vitae nullam sodales risus ultrices pharetra porta ornare laoreet ac.</li>
            <li>Eget nulla pretium id euismod ornare sagittis quis. Auctor amet suscipit urna lobortis aliquam dignissim. Nisl magnis gravida ligula duis sit sit. 
                Euismod arcu at tellus duis metus ut velit elementum. Fermentum id eget turpis mattis. Nulla amet massa lacus sed. Leo ac amet diam purus ullamcorper. </li>
            <li>Ultrices convallis lectus nisl accumsan. Orci consequat adipiscing iaculis scelerisque vulputate tellus nascetur sed. Lacus morbi elit lorem adipiscing adipiscing nisi iaculis pharetra leo. 
                Gravida quam purus malesuada magna nec nec elementum. </li>
        </ul>
    </div>
</section>

<section className="flex flex-col items-center">    
    <div className="mb-8 flex flex-col items-start w-[1141px]">
    <div className="flex gap-4 ">
        <p className="text-center justify-center text-primary">Share</p>
          <a href="#"><img src="/icons/fb.png" alt="fb" width={25}/></a>
          <a href="#"><img src="/icons/twitter.png" alt="twitter" width={25} /></a>
          <a href="#"><img src="/icons/linkedin.png" alt="linkedin" width={25} /></a>
          <a href="#"><img src="/icons/chain.png" alt="chain" width={25} /></a>

        </div>
    </div>
</section>

  <hr className="flex-grow border-t-2 border-primary-300 ml-20 mr-20 mt-5 mb-2" />

<section className="flex flex-col items-center">    
    <div className="mb-8 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-[#927B64] font-antonio uppercase mt-8 tracking-tight leading-[1.2]">Travel Packages</h2>
    </div>
    </section>
     

<section className="justify-center items-center mb-10">
<div className="max-w-7xl mx-auto px-4 py-8">
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="border border-[#CECECE] rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-80 relative rounded-3xl rounded-b-3xl overflow-hidden">
        <Image
          src="/images/package1.png"
          alt="Thailand"
          fill
          className="object-cover rounded-b-3xl"
          
        />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
          <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6 uppercase">Air ticket </div>
        <div className="absolute bottom-4 right-4 z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F] rounded-t-full"></div>
      </div>
      <div className="p-4">
        <h1 className="font-bold text-primary  mb-2 uppercase">Asia</h1>
        <h3 className="font-bold text-primary  mb-2 uppercase">THAILAND</h3>
        <p className="text-primary text-sm mt-6 mb-4">04 Nights | P/P</p>
        <p className="text-2xl font-bold text-[#002D6A] mb-4">LKR 710,000</p>
        
        <button className="w-fit py-2 px-4 rounded-full uppercase font-semibold font-roboto transition-colors bg-[#002D6A] text-[#ffffff] border border-transparent hover:border-[#927B64] hover:bg-[#ffffff] hover:text-[#927B64]">BOOK NOW</button>
      </div>
    </div>

  <div className="border border-[#CECECE] rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-80 relative rounded-3xl rounded-b-3xl overflow-hidden">
        <Image
          src="/images/package2.png"
          alt="Thailand"
          fill
          className="object-cover rounded-b-3xl"
          
        />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
          <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6 uppercase">Air ticket </div>
        <div className="absolute bottom-4 right-4 z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#c50000] rounded-t-full"></div>
      </div>

      <div className="p-4">
        <h1 className="font-bold text-primary  mb-2 uppercase">Asia</h1>
        <h3 className="font-bold text-primary  mb-2 uppercase">THAILAND</h3>
        <p className="text-primary text-sm mt-6 mb-4">02 Nights | P/P</p>
        <p className="text-2xl font-bold text-[#002D6A] mb-4">LKR 350,000</p>

        <button className="w-fit py-2 px-4 rounded-full uppercase font-semibold font-roboto transition-colors bg-[#002D6A] text-[#ffffff] border border-transparent hover:border-[#927B64] hover:bg-[#ffffff] hover:text-[#927B64]">BOOK NOW</button>

      </div>
    </div>

       <div className="border border-[#CECECE] rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-80 relative rounded-3xl rounded-b-3xl overflow-hidden">
        <Image
          src="/images/package3.png"
          alt="Thailand"
          fill
          className="object-cover rounded-b-3xl"
          
        />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
          <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6 uppercase">Air ticket </div>
        <div className="absolute bottom-4 right-4 z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#23a000] rounded-t-full"></div>
      </div>
      <div className="p-4">
        <h1 className="font-bold text-primary  mb-2 uppercase">09 Sep 2024 - 11 OCT 2024 </h1>
        <h3 className="font-bold text-primary  mb-2 uppercase">Colombo - MALE</h3>
        <p className="text-primary text-sm mt-6 mb-4">Round-trip  |  Business</p>
        <p className="text-2xl font-bold text-[#002D6A] mb-4">LKR 90,000</p>
        
        <button className="w-fit py-2 px-4 rounded-full uppercase font-semibold font-roboto transition-colors bg-[#002D6A] text-[#ffffff] border border-transparent hover:border-[#927B64] hover:bg-[#ffffff] hover:text-[#927B64]">BOOK NOW</button>
      </div>
    </div>

       <div className="border border-[#CECECE] rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-80 relative rounded-3xl rounded-b-3xl overflow-hidden">
        <Image
          src="/images/package4.png"
          alt="Thailand"
          fill
          className="object-cover rounded-b-3xl"
          
        />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
          <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6 uppercase">Air ticket </div>
        <div className="absolute bottom-4 right-4 z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#620090] rounded-t-full"></div>
      </div>
      <div className="p-4">
        <h1 className="font-bold text-primary  mb-2 uppercase">Asia</h1>
        <h3 className="font-bold text-primary  mb-2 uppercase">THAILAND</h3>
        <p className="text-primary text-sm mt-6 mb-4">04 Nights | P/P</p>
        <p className="text-2xl font-bold text-[#002D6A] mb-4">LKR 520,000</p>

        <button className="w-fit py-2 px-4 rounded-full uppercase font-semibold font-roboto transition-colors bg-[#002D6A] text-[#ffffff] border border-transparent hover:border-[#927B64] hover:bg-[#ffffff] hover:text-[#927B64]">BOOK NOW</button>
      </div>
    </div>
  </div>
</div>
</section>

  <hr className="flex-grow border-t-2 border-primary-300 ml-20 mr-20 mt-5 mb-2" />

        <section className="py-16 px-6 bg-white max-w-6xl mx-auto">
         
          <div className="flex flex-col items-start text-center mb-12">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center">
                <span className="w-8 h-0.5 bg-red-500 mr-2"></span>
                <p className="text-xs font-roboto text-[#6d563b] uppercase font-bold tracking-widest text-primary-500">
                  INSIGHT AND IDEAS
                </p>
              </div>
              <button className="px-8 py-3 text-sm border-2 border-[#927B64] rounded-full font-bold uppercase 
             text-[#927B64] bg-transparent
             hover:bg-[#6d563b] hover:text-[#ffffff] hover:border-[#6d563b] 
             transition-colors duration-200">
  VIEW ALL BLOGS
</button>

            </div>
            <h2 className="text-5xl font-roboto text-[#6d563b] md:text-5xl font-bold uppercase mb-4">OTHER STORIES</h2>
          </div>
    
     <section className="flex justify-center mt-20 mb-5">
    <div className="grid grid-cols-2 gap-20">
       <div className="flex flex-col group mb-5">
           <div className="relative rounded-3xl overflow-hidden shadow-md w-[560px] h-[349px] mb-4 cursor-pointer">
             <Image
               src="/images/story3.png"
               alt="Travel 2"
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
          <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6 uppercase">Category 1</div>     
             <div className="absolute bottom-4 right-4 z-10"></div>
             <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]"></div>
           </div>
           <span className="text-xs text-[#927B64] font-antonio uppercase block mb-2">09 AUG 2024</span>
    <h3 className="text-xl font-bold mb-4 text-[#927B64] font-antonio uppercase group-hover:text-red-500 transition-colors">
      6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
    </h3>
       </div>
     
          <div className="flex flex-col group mb-5">
           <div className="relative rounded-3xl overflow-hidden shadow-md w-[560px] h-[349px] mb-4 cursor-pointer">
             <Image
               src="/images/story4.png"
               alt="Travel 2"
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
          <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6 uppercase">Category 1 . Category 2</div>      
             <div className="absolute bottom-4 right-4 z-10"></div>
             <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]"></div>
           </div>
           <span className="text-xs text-[#927B64] font-antonio uppercase block mb-2">09 AUG 2024</span>
    <h3 className="text-xl font-bold mb-4 text-[#927B64] font-antonio uppercase group-hover:text-red-500 transition-colors">
7 best places in Asia to celebrate Christmas    </h3>
       </div>
    </div>
</section>
 </section>

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
  )
}