import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/footer";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <hr className="border-t-2 border-[#B9AB9661] w-full mb-20" />

      <div className=" bg-white">
        <header className="text-center py-10 ">
          <div className="flex items-center justify-center mb-6">
            <span className="w-[120px] h-0.5 bg-[#C41230] mr-2"></span>
            <h2 className="text-lg text-[#927B64] font-roboto font-bold  uppercase tracking-widest">
              DREAM. EXPLORE. DISCOVER
            </h2>
          </div>

          <h1 className="text-8xl font-antonio font-medium  text-[#927B64] uppercase"> 
            DIVE INTO A WORLD OF
            <br />
            INSPIRATION
          </h1>

          <p className="mt-10 text-xl font-roboto font-extralight text-[#434343] tracking-normal leading-[calc(40/1920*100vw)] ml-75 mr-75">
            Mackinnons Travels Dive into a world of inspiration, insights, and
            ideas. Whether you're here to explore, learn, or simply unwind, our
            blog brings stories that resonate and topics that spark curiosity.
            Dive into a world of inspiration, insights, and ideas. at in.
            Aliquet pharetra ut pellentesque non etorem volutpat cras adipiscing
            non donec quis proin sit. Cum tincidunt proin faucibus nulla. Mauris
            scelerisque urna urna consectetur.
          </p>
        </header>
        <div className="flex justify-center space-x-4 mb-10">
          <button className="bg-[#F5F4F1] font-roboto text-base text-primary font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-[#002D6A] hover:text-white">
            Categories
          </button>
          <button className="bg-[#F5F4F1] font-roboto text-base text-primary font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-[#002D6A] hover:text-white">
            Years
          </button>
        </div>

        <div className="flex justify-center space-x-4 text-primary text-base font-roboto font-semibold">
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
            <div className="flex flex-col mb-2 group">
              <Link href="/blog" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4 cursor-pointer">
                  <Image
                    src="/images/story1.png"
                    alt="Travel 2"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="bg-gradient-to-b from-black/40 to-transparent h-1/3 w-full relative">
                      <span className="absolute top-6 left-8 text-white text-sm font-roboto tracking-widest font-semibold leading-[calc(20/1920*100vw)]">
                        CATEGORY 1
                      </span>
                    </div>
                    <div className="h-2 bg-[#F1C40F] w-full"></div>
                  </div>
                </div>
              </Link>

              <div className="text-left">
                <span className="text-sm text-[#927B64] font-bold font-roboto uppercase block mb-2 mt-10">
                  09 AUG 2024
                </span>
                <h3 className="text-3xl font-normal mb-8 text-[#927B64] font-antonio uppercase">
                  6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </h3>
              </div>
            </div>

            <div className="flex flex-col group mb-8">
              <Link href="/blog" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
                  <Image
                    src="/images/story2.png"
                    alt="Travel 3"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
                  <div className="absolute top-6 left-8 text-white text-sm font-roboto tracking-widest font-semibold  leading-[calc(20/1920*100vw)]">
                    CATEGORY 1
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ff0000]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="text-sm text-[#927B64] font-bold font-roboto uppercase block mb-2 mt-10">
                  09 AUG 2024
                </span>
                <h3 className="text-3xl font-normal mb-8 text-[#927B64] font-antonio uppercase ">
                  7 best places in Asia to celebrate Christmas
                </h3>
              </div>
            </div>

            <div className="flex flex-col group mb-8">
              <Link href="/blog" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
                  <Image
                    src="/images/story3.png"
                    alt="Travel 2"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
                  <div className="absolute top-6 left-8 text-white text-sm font-roboto tracking-widest font-semibold  leading-[calc(20/1920*100vw)]">
                    CATEGORY 1
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[hsl(131,57%,45%)]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="text-sm text-[#927B64] font-bold font-roboto uppercase block mb-2 mt-10">
                  09 AUG 2024
                </span>
                <h3 className="text-3xl font-normal mb-8 text-[#927B64] font-antonio uppercase ">
                  6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </h3>
              </div>
            </div>

            <div className="flex flex-col group mb-8">
              <Link href="/blog" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
                  <Image
                    src="/images/story4.png"
                    alt="Travel 3"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
                  <div className="absolute top-6 left-8 text-white text-sm font-roboto tracking-widest font-semibold  leading-[calc(20/1920*100vw)]">
                    CATEGORY 1
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#6804b4]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="text-sm text-[#927B64] font-bold font-roboto uppercase block mb-2 mt-10">
                  09 AUG 2024
                </span>
                <h3 className="text-3xl font-normal mb-8 text-[#927B64] font-antonio uppercase ">
                  7 best places in Asia to celebrate Christmas
                </h3>
              </div>
            </div>

            <div className="flex flex-col group mb-8">
              <Link href="/blog" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4 cursor-pointer">
                  <Image
                    src="/images/story5.jpg"
                    alt="Travel 2"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
                  <div className="absolute top-6 left-8 text-white text-sm font-roboto tracking-widest font-semibold  leading-[calc(20/1920*100vw)]">
                    CATEGORY 1
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="text-sm text-[#927B64] font-bold font-roboto uppercase block mb-2 mt-10">
                  09 AUG 2024
                </span>
                <h3 className="text-3xl font-normal mb-8 text-[#927B64] font-antonio uppercase ">
                  6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </h3>
              </div>
            </div>

            <div className="flex flex-col group mb-8">
              <Link href="/blog" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
                  <Image
                    src="/images/story6.png"
                    alt="Travel 3"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
                  <div className="absolute top-6 left-8 text-white text-sm font-roboto tracking-widest font-semibold  leading-[calc(20/1920*100vw)]">
                    CATEGORY 1
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ff0000]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="text-sm text-[#927B64] font-bold font-roboto uppercase block mb-2 mt-10">
                  09 AUG 2024
                </span>
                <h3 className="text-3xl font-normal mb-8 text-[#927B64] font-antonio uppercase ">
                  7 best places in Asia to celebrate Christmas
                </h3>
              </div>
            </div>

            <div className="flex flex-col group mb-8">
              <Link href="/blog" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
                  <Image
                    src="/images/story3.png"
                    alt="Travel 2"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
                  <div className="absolute top-6 left-8 text-white text-sm font-roboto tracking-widest font-semibold  leading-[calc(20/1920*100vw)]">
                    CATEGORY 1
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[hsl(131,57%,45%)]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="text-sm text-[#927B64] font-bold font-roboto uppercase block mb-2 mt-10">
                  09 AUG 2024
                </span>
                <h3 className="text-3xl font-normal mb-8 text-[#927B64] font-antonio uppercase ">
                  6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </h3>
              </div>
            </div>

            <div className="flex flex-col group mb-8">
              <Link href="/blog" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-md w-full aspect-[3/2] mb-4">
                  <Image
                    src="/images/story4.png"
                    alt="Travel 3"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>
                  <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
                    CATEGORY 1
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#6804b4]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="text-sm text-[#927B64] font-bold font-roboto uppercase block mb-2 mt-10">
                  09 AUG 2024
                </span>
                <h3 className="text-3xl font-normal mb-8 text-[#927B64] font-antonio uppercase ">
                  7 best places in Asia to celebrate Christmas
                </h3>
              </div>
            </div>
          </div>
        </div>

        <section className="justify items-center mt-10 mb-25">
          <div className="flex justify-center items-center gap-4 my-6 font-roboto text-xl font-semibold">
            <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] hover:bg-[#836e5d] hover:text-white transition">
              1
            </button>
            <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] hover:bg-[#836e5d] hover:text-white transition">
              2
            </button>
            <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] hover:bg-[#836e5d] hover:text-white transition">
              3
            </button>
            <button className="w-10 h-10 rounded-full border border-[#836e5d] text-[#836e5d] text-lg font-semibold hover:bg-[#836e5d] hover:text-white transition">
              &gt;
            </button>
          </div>
        </section>
      </div>

      <section>
        <Footer />
      </section>
    </div>
  );
}
