import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/footer";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <hr className="w-full border-t-2 border-[#B9AB9661] md:mb-20" />

      <div className="bg-white">
        <header className="py-10 text-center">
          <div className="mb-6 flex items-center justify-center">
            <span className="mr-2 h-[2px] w-6 bg-[#C41230] md:h-[2px] md:w-20"></span>
            <h2 className="font-roboto text-xs font-bold tracking-widest text-[#927B64] uppercase md:text-lg">
              DREAM. EXPLORE. DISCOVER
            </h2>
          </div>

          <h1 className="font-antonio text-4xl font-medium text-[#927B64] uppercase md:text-8xl md:leading-tight">
            DIVE INTO A WORLD OF
            <br />
            INSPIRATION
          </h1>

          <p className="font-roboto mt-[30px] w-full px-4 text-center text-sm leading-relaxed font-light tracking-normal text-[#434343] md:mt-10 md:px-4 md:pr-100 md:pl-100 md:text-xl md:leading-loose">
            Mackinnons Travels Dive into a world of inspiration, insights, and
            ideas. Whether you're here to explore, learn, or simply unwind, our
            blog brings stories that resonate and topics that spark curiosity.
            Dive into a world of inspiration, insights, and ideas. at in.
            Aliquet pharetra ut pellentesque non etorem volutpat cras adipiscing
            non donec quis proin sit. Cum tincidunt proin faucibus nulla. Mauris
            scelerisque urna urna consectetur.
          </p>
        </header>
        <div className="mb-[30px] flex justify-center space-x-4 md:mb-10">
          <button className="font-roboto text-primary rounded-full bg-[#F5F4F1] px-4 py-2 text-xs font-semibold transition-colors duration-300 hover:bg-[#002D6A] hover:text-white md:text-base">
            Categories
          </button>
          <button className="font-roboto text-primary rounded-full bg-[#F5F4F1] px-4 py-2 text-xs font-semibold transition-colors duration-300 hover:bg-[#002D6A] hover:text-white md:text-base">
            Years
          </button>
        </div>

        <div className="text-primary font-roboto flex justify-center space-x-4 text-xs font-semibold md:text-base">
          {["2024", "2023", "2022", "2021", "2020"].map((year) => (
            <span
              key={year}
              className="cursor-pointer transition-colors duration-200 hover:text-[#002D6A] hover:underline"
            >
              {year}
            </span>
          ))}
        </div>

        <div className="mx-4 mt-[20px] md:mx-50 md:mt-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="group mb-2 flex flex-col">
              <Link href="/blog" className="block">
                <div className="relative mb-4 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md md:mb-4">
                  <Image
                    src="/images/story1.png"
                    alt="Travel 2"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="relative h-1/3 w-full bg-gradient-to-b from-black/40 to-transparent">
                      <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white md:text-sm">
                        CATEGORY 1
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#F1C40F]"></div>
                  </div>
                </div>
              </Link>

              <div className="text-left">
                <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase md:mt-10 md:mb-2 md:text-sm">
                  09 AUG 2024
                </span>
                <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-8 md:text-3xl">
                  6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </h3>
              </div>
            </div>

            <div className="group flex flex-col md:mb-8">
              <Link href="/blog" className="block">
                <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src="/images/story2.png"
                    alt="Travel 3"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                  <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white md:text-sm">
                    CATEGORY 1
                  </span>
                  <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#ff0000]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase md:mt-10 md:mb-2 md:text-sm">
                  09 AUG 2024
                </span>
                <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-8 md:text-3xl">
                  7 best places in Asia to celebrate Christmas
                </h3>
              </div>
            </div>

            <div className="group flex flex-col md:mb-8">
              <Link href="/blog" className="block">
                <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src="/images/story3.png"
                    alt="Travel 2"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                  <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white md:text-sm">
                    CATEGORY 1
                  </span>
                  <div className="absolute right-0 bottom-0 left-0 h-2 bg-[hsl(131,57%,45%)]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase md:mt-10 md:mb-2 md:text-sm">
                  09 AUG 2024
                </span>
                <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-8 md:text-3xl">
                  6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </h3>
              </div>
            </div>

            <div className="group flex flex-col md:mb-8">
              <Link href="/blog" className="block">
                <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src="/images/story4.png"
                    alt="Travel 3"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                  <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white md:text-sm">
                    CATEGORY 1
                  </span>
                  <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#6804b4]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase md:mt-10 md:mb-2 md:text-sm">
                  09 AUG 2024
                </span>
                <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-8 md:text-3xl">
                  7 best places in Asia to celebrate Christmas
                </h3>
              </div>
            </div>

            <div className="group flex flex-col md:mb-8">
              <Link href="/blog" className="block">
                <div className="relative mb-4 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src="/images/story5.jpg"
                    alt="Travel 2"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                  <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white md:text-sm">
                    CATEGORY 1
                  </span>
                  <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#F1C40F]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase md:mt-10 md:mb-2 md:text-sm">
                  09 AUG 2024
                </span>
                <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-8 md:text-3xl">
                  6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </h3>
              </div>
            </div>

            <div className="group flex flex-col md:mb-8">
              <Link href="/blog" className="block">
                <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src="/images/story6.png"
                    alt="Travel 3"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                  <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white md:text-sm">
                    CATEGORY 1
                  </span>
                  <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#ff0000]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase md:mt-10 md:mb-2 md:text-sm">
                  09 AUG 2024
                </span>
                <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-8 md:text-3xl">
                  7 best places in Asia to celebrate Christmas
                </h3>
              </div>
            </div>

            <div className="group flex flex-col md:mb-8">
              <Link href="/blog" className="block">
                <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src="/images/story3.png"
                    alt="Travel 2"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                  <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white md:text-sm">
                    CATEGORY 1
                  </span>
                  <div className="absolute right-0 bottom-0 left-0 h-2 bg-[hsl(131,57%,45%)]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase md:mt-10 md:mb-2 md:text-sm">
                  09 AUG 2024
                </span>
                <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-8 md:text-3xl">
                  6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </h3>
              </div>
            </div>

            <div className="group flex flex-col md:mb-8">
              <Link href="/blog" className="block">
                <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src="/images/story4.png"
                    alt="Travel 3"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                  <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white md:text-sm">
                    CATEGORY 1
                  </span>
                  <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#6804b4]"></div>
                </div>
              </Link>
              <div className="text-left">
                <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase md:mt-10 md:mb-2 md:text-sm">
                  09 AUG 2024
                </span>
                <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-8 md:text-3xl">
                  7 best places in Asia to celebrate Christmas
                </h3>
              </div>
            </div>
          </div>
        </div>

        <section className="justify mt-[30px] mb-[30px] items-center md:mt-10 md:mb-25">
          <div className="font-roboto my-6 flex items-center justify-center gap-4 text-sm font-semibold md:text-xl">
            <button className="h-8 w-8 rounded-full border border-[#836e5d] text-[#836e5d] transition hover:bg-[#836e5d] hover:text-white md:h-10 md:w-10">
              1
            </button>
            <button className="h-8 w-8 rounded-full border border-[#836e5d] text-[#836e5d] transition hover:bg-[#836e5d] hover:text-white md:h-10 md:w-10">
              2
            </button>
            <button className="h-8 w-8 rounded-full border border-[#836e5d] text-[#836e5d] transition hover:bg-[#836e5d] hover:text-white md:h-10 md:w-10">
              3
            </button>
            <button className="h-8 w-8 rounded-full border border-[#836e5d] text-[#836e5d] transition hover:bg-[#836e5d] hover:text-white md:h-10 md:w-10">
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
