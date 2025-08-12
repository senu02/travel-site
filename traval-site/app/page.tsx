import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Image from "next/image";
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
      <div className="fixed inset-0 -z-10">
    <Image
      src="/images/bg4.png"
      alt="Background"
      fill
      className="object-cover opacity-10"
      priority
    />
    <div className="absolute inset-0 bg-white/40" />
  </div>
      <section>
        <Navbar />
        <HeroSection />
      </section>

      <div className="bg-white px-6 flex flex-col items-center mt-5">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full font-antonio uppercase">
          <div className="relative col-span-1 lg:col-span-1 rounded-2xl mr-10 overflow-hidden shadow-lg h-full">
  <Image
    src="/images/category1.png"
    alt="Travel 1"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3 z-0"></div>

  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-0"></div>

  <div className="absolute top-4 left-4 text-white text-xs tracking-wider font-semibold z-10 leading-6">
    CATEGORY 1 • CATEGORY 2
  </div>

  <div className="absolute bottom-4 left-4 right-12 text-white z-10">
    <p className="text-xs mb-1 leading-6">30 OCT 2024</p>
    <p className="text-lg font-semibold leading-8">
      LOREM IPSUM DOLOR SIT AMET CONSECTETUR UT ET TINCIDUNT MOLESTIE SAPIEN
    </p>
  </div>

  <div className="absolute bottom-4 right-4 z-10">
    <svg
      className="bg-white rounded-full w-9 h-9 flex items-center p-2 justify-center"
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.064 8.09602C12.4545 7.7055 12.4545 7.07233 12.064 6.68181L5.69999 0.31785C5.30947 -0.0726743 4.6763 -0.0726744 4.28578 0.31785C3.89525 0.708374 3.89525 1.34154 4.28578 1.73206L9.94263 7.38892L4.28578 13.0458C3.89525 13.4363 3.89525 14.0695 4.28578 14.46C4.6763 14.8505 5.30947 14.8505 5.69999 14.46L12.064 8.09602ZM0.644531 7.38892L0.644531 8.38892L11.3568 8.38892L11.3568 7.38892L11.3568 6.38892L0.644531 6.38892L0.644531 7.38892Z"
        fill="#927B64"
      />
    </svg>
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
                <svg className="bg-white rounded-full w-9 h-9 flex items-center p-2 justify-center" width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.064 8.09602C12.4545 7.7055 12.4545 7.07233 12.064 6.68181L5.69999 0.31785C5.30947 -0.0726743 4.6763 -0.0726744 4.28578 0.31785C3.89525 0.708374 3.89525 1.34154 4.28578 1.73206L9.94263 7.38892L4.28578 13.0458C3.89525 13.4363 3.89525 14.0695 4.28578 14.46C4.6763 14.8505 5.30947 14.8505 5.69999 14.46L12.064 8.09602ZM0.644531 7.38892L0.644531 8.38892L11.3568 8.38892L11.3568 7.38892L11.3568 6.38892L0.644531 6.38892L0.644531 7.38892Z" fill="#927B64"/>
</svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F1C40F]"></div>
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

      <section className="py-16 px-6 md:px-10 max-w-6xl mx-auto mt-20">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center mb-4">
            <span className="w-8 h-0.5 bg-red-500 mr-2"></span>
            <p className="text-xs font-roboto text-[#6d563b] uppercase font-bold tracking-widest text-primary-500">
              INSIGHT AND IDEAS
            </p>
          </div>
          <h2 className="text-5xl font-roboto text-[#6d563b] md:text-5xl font-bold uppercase mb-4">OTHER STORIES</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mx-auto">
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
      

        <div className="relative z-10">
          <button className="px-8 py-3 mb-6 text-sm border-2 border-[#6d563b] rounded-full font-bold uppercase hover:bg-[#D0C7B8] hover:text-[#6d563b] text-[#6d563b] transition-colors">
            VIEW ALL BLOGS
          </button>

<section className="flex justify-center mb-10 mt-10">
<svg width="1441" height="15" viewBox="0 0 1441 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="749" y1="8.5" x2="1441" y2="8.5" stroke="#B9AB96" stroke-opacity="0.38"/>
<line x1="-4.37114e-08" y1="8.5" x2="692" y2="8.49994" stroke="#B9AB96" stroke-opacity="0.38"/>
<path d="M725.068 10.0715C724.623 10.6244 724.169 11.1701 723.697 11.6998C723.577 11.835 723.487 11.9568 723.489 12.0725C723.491 12.215 723.61 12.349 723.746 12.4866C725.265 14.0308 727.036 15.0173 729.284 14.9735C732.537 14.9102 734.947 13.4536 736.318 10.5453C738.438 6.04522 735.381 0.712134 730.413 0.112937C727.459 -0.242683 725.112 0.804691 723.308 3.13206C722.665 3.96265 721.962 4.7494 721.296 5.56538C721.066 5.84792 720.928 5.88203 720.665 5.55685C719.773 4.45589 718.901 3.32935 717.909 2.32095C714.829 -0.804127 710.085 -0.759065 707.021 2.36966C704.458 4.9881 704.326 9.40047 706.662 12.2028C708.449 14.3451 710.747 15.2061 713.464 14.9589C715.449 14.7774 717.068 13.808 718.34 12.2783C718.459 12.1358 718.515 12.0384 718.369 11.8679C717.74 11.1311 717.124 10.3821 716.472 9.59899C715.985 10.3443 715.433 10.9472 714.703 11.3807C712.035 12.9616 708.072 11.0385 708.064 7.56757C708.056 4.63492 710.949 2.49998 713.774 3.25384C714.5 3.44749 715.084 3.88958 715.614 4.40717C717.042 5.80043 718.181 7.43604 719.481 8.93768C719.892 9.41265 720.293 9.89737 720.683 10.3906C720.91 10.678 721.068 10.6561 721.296 10.376C722.769 8.5711 724.281 6.79543 725.733 4.97349C727.095 3.26481 729.14 2.65221 731.131 3.43531C732.917 4.13924 734.058 6.06105 733.788 8.09369C733.555 9.85474 732.568 11.1323 730.86 11.7144C729.208 12.2783 727.709 11.846 726.403 10.728C726.188 10.5441 726.06 10.4101 725.816 10.1154C725.816 10.1154 725.48 9.6745 725.453 9.61969L725.067 10.0691L725.068 10.0715Z" fill="#B9AB96"/>
</svg>
</section>
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


      <section>
        <Footer />
      </section>
    </div>
  );
}