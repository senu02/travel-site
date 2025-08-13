import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from 'next/image';
import Footer from "../components/footer";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <hr className="border-t-2 border-[#B9AB9661] w-full mb-10" />

      <div className="min-h-screen bg-white">
        <header className="text-center py-10 ">
          <div className="flex items-center justify-center mb-6">
            <span className="w-20 h-1 bg-red-500 mr-4"></span>
            <h2 className="text-1l text-primary font-roboto font-font-medium tracking-[10%] uppercase leading-none">
              DREAM. EXPLORE. DISCOVER
            </h2>
          </div>

          <h1 className="text-5xl font-antonio font-normal leading-[120%] text-[#927B64] uppercase">
            DIVE INTO A WORLD OF<br />INSPIRATION
          </h1>

          <p className="mt-10 text-xl font-roboto font-light leading-[180%] tracking-[2%] text-gray-600 ml-75 mr-75">
            Mackinnons Travels Dive into a world of inspiration, insights, and ideas. Whether you're here to explore, learn, or simply unwind, our blog brings stories that resonate and topics that spark curiosity. Dive into a world of inspiration, insights, and ideas. at in. Aliquet pharetra ut pellentesque non etorem volutpat cras adipiscing non donec quis proin sit. Cum tincidunt proin faucibus nulla. Mauris scelerisque urna urna consectetur.
          </p>
        </header>
<div className="flex justify-center space-x-4 mb-10">
  <button className="bg-[#F5F4F1] text-primary font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-[#002D6A] hover:text-white">
    Categories
  </button>
  <button className="bg-[#F5F4F1] text-primary font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-[#002D6A] hover:text-white">
    Years
  </button>
</div>

<div className="flex justify-center space-x-4 text-primary font-semibold">
  {["2024", "2023", "2022", "2021", "2020"].map((year) => (
    <span
      key={year}
      className="cursor-pointer transition-colors duration-200 hover:text-[#002D6A] hover:underline "
    >
      {year}
    </span>
  ))}
</div>

        <div className="mx-[10%] mt-20"> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <Link href="/blog" className="block">
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
              </Link>
              <div className="text-left">
                <p className="text-xs text-primary font-bold mb-1 leading-6">28 JULY 2024</p>
                <p className="text-lg font-semibold text-[#6d563b] leading-8">
                  8 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </p>
              </div>
            </div>

            <div className="flex flex-col group mb-10">
              <Link href="/blog" className="block">
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
              </Link>
              <div className="text-left">
                <p className="text-xs text-primary font-bold mb-1 leading-6">20 OCT 2024</p>
                <p className="text-lg font-semibold text-[#6d563b] leading-8">
                  7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
                </p>
              </div>
            </div>

            <div className="flex flex-col group mb-10">
              <Link href="/blog" className="block">
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
              </Link>
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
              <Link href="/blog" className="block">
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
              </Link>
              <div className="text-left">
                <p className="text-xs text-primary font-bold mb-1 leading-6">28 JULY 2024</p>
                <p className="text-lg font-semibold text-[#6d563b] leading-8">
                  8 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </p>
              </div>
            </div>

            <div className="flex flex-col group mb-10">
              <Link href="/blog" className="block">
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
              </Link>
              <div className="text-left">
                <p className="text-xs text-primary font-bold mb-1 leading-6">20 OCT 2024</p>
                <p className="text-lg font-semibold text-[#6d563b] leading-8">
                  7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
                </p>
              </div>
            </div>

            <div className="flex flex-col group mb-10">
              <Link href="/blog" className="block">
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
              </Link>
              <div className="text-left">
                <p className="text-xs text-primary font-bold mb-1 leading-6">28 JULY 2024</p>
                <p className="text-lg font-semibold text-[#6d563b] leading-8">
                  8 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="justify items-center mt-10 mb-25">
          <div className="flex justify-center items-center gap-4 my-6">
            <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] hover:bg-[#836e5d] hover:text-white transition">1</button>
            <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] hover:bg-[#836e5d] hover:text-white transition">2</button>
            <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] hover:bg-[#836e5d] hover:text-white transition">3</button>
            <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] text-lg font-semibold hover:bg-[#836e5d] hover:text-white transition">&gt;</button>
          </div>
        </section>
      </div>

      <section>
        <Footer/>
      </section>
    </div>
  );
}