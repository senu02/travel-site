import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Image from "next/image";
import Footer from "./components/footer";
import Link from "next/link";

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

      <section className="font-antonio mx-auto mt-12 flex w-full flex-col items-center justify-center gap-10 px-4 py-12 sm:px-6 lg:mt-20 lg:flex-row lg:gap-12 lg:px-8 lg:py-20">
        <div className="w-[644px] flex-shrink-0">
          <div className="relative flex h-[892px] w-full flex-col justify-between overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/category1.png"
              alt="Travel destination"
              fill
              className="-z-10 object-cover"
            />
            <div className="absolute inset-0 z-0 h-2/6 bg-gradient-to-b from-black/30 to-transparent"></div>

            <div className="absolute top-4 left-4">
              <span className="font-roboto rounded-md px-3 py-1 text-xs font-semibold tracking-widest sm:text-sm">
                CATEGORY 1 • CATEGORY 2
              </span>
            </div>

            <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between bg-gradient-to-t from-black/50 to-transparent p-5">
              <div className="text-white">
                <p className="font-roboto mb-2 text-sm font-bold">
                  30 OCT 2024
                </p>
                <p className="font-antonio text-[32px] font-normal">
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR UT ET TINCIDUNT
                  MOLESTIE SAPIEN
                </p>
              </div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                >
                  <circle cx="20" cy="20.3889" r="20" fill="white" />
                  <path
                    d="M26.064 21.096C26.4545 20.7055 26.4545 20.0723 26.064 19.6818L19.7 13.3178C19.3095 12.9273 18.6763 12.9273 18.2858 13.3178C17.8953 13.7084 17.8953 14.3415 18.2858 14.7321L23.9426 20.3889L18.2858 26.0458C17.8953 26.4363 17.8953 27.0695 18.2858 27.46C18.6763 27.8505 19.3095 27.8505 19.7 27.46L26.064 21.096ZM14.6445 20.3889L14.6445 21.3889L25.3568 21.3889L25.3568 20.3889L25.3568 19.3889L14.6445 19.3889L14.6445 20.3889Z"
                    fill="#927B64"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-start">
          <div className="text-center lg:mb-10 lg:text-left">
            <p className="font-roboto lg:text-normal flex items-center justify-center text-sm leading-loose font-bold tracking-widest text-[#927B64] sm:text-sm lg:justify-start">
              <span className="mr-2 h-[0.5px] w-10 bg-[#C41230] sm:w-28 md:h-[2px] md:w-20"></span>
              DREAM. EXPLORE. DISCOVER
            </p>
            <h2 className="font-antonio mt-4 mb-8 text-3xl leading-tight font-normal tracking-normal text-[#927B64] md:text-8xl lg:mt-6">
              LATEST TRAVEL STORIES
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <div className="relative h-[459px] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/images/categoryy2.png"
                  alt="Christmas destinations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>

                <div className="font-roboto absolute top-6 left-8 text-sm leading-[calc(20/1920*100vw)] font-semibold tracking-widest text-white">
                  CATEGORY 1
                </div>
              </div>
              <div className="mt-8 px-4 text-left">
                <p className="font-roboto mb-1 text-xs font-bold text-[#927B64] md:text-xs">
                  30 OCT 2024
                </p>
                <p className="font-antonio text-lg leading-snug font-normal text-[#927B64] md:text-[32px]">
                  7 BEST PLACES IN ASIA TO CELEBRATE CHRISTMAS
                </p>
              </div>
            </div>

            <div>
              <div className="relative h-[459px] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/images/category3.png"
                  alt="Japanese ryokans"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>

                <div className="font-roboto absolute top-6 left-8 text-xs font-bold tracking-widest text-white sm:text-sm">
                  CATEGORY 1
                </div>
              </div>
              <div className="mt-8 px-4 text-left">
                <p className="font-roboto mb-1 text-xs font-bold text-[#927B64] md:text-xs">
                  28 JULY 2024
                </p>
                <p className="font-antonio text-lg font-normal text-[#927B64] md:text-[32px]">
                  6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <section className="relative z-10 mt-12 px-4 py-8 md:mt-20 md:px-6 md:py-10">
          <div className="mb-8 flex flex-col items-center text-center md:mb-12">
            <div className="mb-2 flex items-center md:mb-4">
              <span className="mr-2 h-[1px] w-[50px] bg-red-500 md:h-[2px] md:w-[120px]"></span>
              <p className="font-roboto text-sm font-bold tracking-widest text-[#6d563b] uppercase md:text-lg">
                INSIGHT AND IDEAS
              </p>
            </div>
            <h2 className="font-antonio mb-2 text-4xl font-normal text-[#6d563b] uppercase sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl xl:text-8xl">
              OTHER STORIES
            </h2>
          </div>

          <div className="mx-[10%] mt-[30px] md:mt-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="group mb-4 flex flex-col">
                <Link href="/blog" className="block">
                  <div className="relative mb-2 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl">
                    <div className="relative h-[calc(100%-10px)] overflow-hidden rounded-t-3xl">
                      <Image
                        src="/images/story1.png"
                        alt="Travel 2"
                        fill
                        className="z-10 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>

                      <div className="font-roboto absolute top-6 left-8 z-10 text-xs font-semibold tracking-widest text-white md:text-sm md:leading-loose">
                        CATEGORY 1
                      </div>
                    </div>
                    <div className="rounded-b-6xl absolute right-0 -bottom-2 left-0 -z-10 h-[20px] bg-[#F1C40F]"></div>
                  </div>
                </Link>

                <div className="text-left">
                  <span className="font-roboto mt-4 block text-xs font-bold text-[#927B64] uppercase md:mt-6 md:mb-2 md:text-sm">
                    09 AUG 2024
                  </span>
                  <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-6 md:text-3xl">
                    6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                  </h3>
                </div>
              </div>

              <div className="group mb-4 flex flex-col">
                <Link href="/blog" className="block">
                  <div className="relative mb-2 aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-md">
                    <Image
                      src="/images/story2.png"
                      alt="Travel 3"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                    <div className="font-roboto absolute top-6 left-8 z-10 text-xs font-semibold tracking-widest text-white md:text-sm md:leading-loose">
                      CATEGORY 1
                    </div>
                    <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#ff0000]"></div>
                  </div>
                </Link>
                <div className="text-left">
                  <span className="font-roboto mt-4 block text-xs font-bold text-[#927B64] uppercase md:mt-6 md:mb-2 md:text-sm">
                    09 AUG 2024
                  </span>
                  <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-6 md:text-3xl">
                    7 best places in Asia to celebrate Christmas
                  </h3>
                </div>
              </div>
              <div className="group mb-4 flex flex-col">
                <Link href="/blog" className="block">
                  <div className="relative mb-2 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md">
                    <Image
                      src="/images/story3.png"
                      alt="Travel 2"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>

                    <div className="font-roboto absolute top-6 left-8 z-10 text-xs font-semibold tracking-widest text-white md:text-sm md:leading-loose">
                      CATEGORY 1
                    </div>

                    <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#F1C40F]"></div>
                  </div>
                </Link>

                <div className="text-left">
                  <span className="font-roboto mt-4 block text-xs font-bold text-[#927B64] uppercase md:mt-6 md:mb-2 md:text-sm">
                    09 AUG 2024
                  </span>
                  <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-6 md:text-3xl">
                    6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                  </h3>
                </div>
              </div>

              <div className="group mb-4 flex flex-col">
                <Link href="/blog" className="block">
                  <div className="relative mb-2 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md">
                    <Image
                      src="/images/story4.png"
                      alt="Travel 2"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>

                    <div className="font-roboto absolute top-6 left-8 z-10 text-xs font-semibold tracking-widest text-white md:text-sm md:leading-loose">
                      CATEGORY 1
                    </div>

                    <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#F1C40F]"></div>
                  </div>
                </Link>

                <div className="text-left">
                  <span className="font-roboto mt-4 block text-xs font-bold text-[#927B64] uppercase md:mt-6 md:mb-2 md:text-sm">
                    09 AUG 2024
                  </span>
                  <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-6 md:text-3xl">
                    6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                  </h3>
                </div>
              </div>
              <div className="group mb-2 flex flex-col md:mb-4">
                <Link href="/blog" className="block">
                  <div className="relative mb-2 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md">
                    <Image
                      src="/images/story5.jpg"
                      alt="Travel 2"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>

                    <div className="font-roboto absolute top-6 left-8 z-10 text-xs font-semibold tracking-widest text-white md:text-sm md:leading-loose">
                      CATEGORY 1
                    </div>

                    <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#F1C40F]"></div>
                  </div>
                </Link>

                <div className="text-left">
                  <span className="font-roboto mt-4 block text-xs font-bold text-[#927B64] uppercase md:mt-6 md:mb-2 md:text-sm">
                    09 AUG 2024
                  </span>
                  <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-6 md:text-3xl">
                    6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                  </h3>
                </div>
              </div>

              <div className="group mb-4 flex flex-col">
                <Link href="/blog" className="block">
                  <div className="relative mb-2 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md">
                    <Image
                      src="/images/story6.png"
                      alt="Travel 2"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>

                    <div className="font-roboto absolute top-6 left-8 z-10 text-xs font-semibold tracking-widest text-white md:text-sm md:leading-loose">
                      CATEGORY 1
                    </div>

                    <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#F1C40F]"></div>
                  </div>
                </Link>

                <div className="text-left">
                  <span className="font-roboto mt-4 block text-xs font-bold text-[#927B64] uppercase md:mt-6 md:mb-2 md:text-sm">
                    09 AUG 2024
                  </span>
                  <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-6 md:text-3xl">
                    6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative p-8 text-center">
        <div className="absolute inset-0 h-full">
          <Image
            src="/images/bg4.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        </div>
        <div className="relative z-10">
          <Link href="/categories" className="block">
            <button className="font-roboto cursor-pointer rounded-full border-[1px] border-[#6d563b] px-8 py-3 text-sm font-bold text-[#6d563b] uppercase transition-colors hover:bg-[#D0C7B8] hover:text-[#6d563b] md:mb-6 md:text-base">
              VIEW ALL BLOGS
            </button>
          </Link>

          <section className="mt-10 mb-10 flex justify-center">
            <svg
              width="1441"
              height="15"
              viewBox="0 0 1441 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="749"
                y1="8.5"
                x2="1441"
                y2="8.5"
                stroke="#B9AB96"
                strokeOpacity="0.38"
              />
              <line
                x1="-4.37114e-08"
                y1="8.5"
                x2="692"
                y2="8.49994"
                stroke="#B9AB96"
                strokeOpacity="0.38"
              />
              <path
                d="M725.068 10.0715C724.623 10.6244 724.169 11.1701 723.697 11.6998C723.577 11.835 723.487 11.9568 723.489 12.0725C723.491 12.215 723.61 12.349 723.746 12.4866C725.265 14.0308 727.036 15.0173 729.284 14.9735C732.537 14.9102 734.947 13.4536 736.318 10.5453C738.438 6.04522 735.381 0.712134 730.413 0.112937C727.459 -0.242683 725.112 0.804691 723.308 3.13206C722.665 3.96265 721.962 4.7494 721.296 5.56538C721.066 5.84792 720.928 5.88203 720.665 5.55685C719.773 4.45589 718.901 3.32935 717.909 2.32095C714.829 -0.804127 710.085 -0.759065 707.021 2.36966C704.458 4.9881 704.326 9.40047 706.662 12.2028C708.449 14.3451 710.747 15.2061 713.464 14.9589C715.449 14.7774 717.068 13.808 718.34 12.2783C718.459 12.1358 718.515 12.0384 718.369 11.8679C717.74 11.1311 717.124 10.3821 716.472 9.59899C715.985 10.3443 715.433 10.9472 714.703 11.3807C712.035 12.9616 708.072 11.0385 708.064 7.56757C708.056 4.63492 710.949 2.49998 713.774 3.25384C714.5 3.44749 715.084 3.88958 715.614 4.40717C717.042 5.80043 718.181 7.43604 719.481 8.93768C719.892 9.41265 720.293 9.89737 720.683 10.3906C720.91 10.678 721.068 10.6561 721.296 10.376C722.769 8.5711 724.281 6.79543 725.733 4.97349C727.095 3.26481 729.14 2.65221 731.131 3.43531C732.917 4.13924 734.058 6.06105 733.788 8.09369C733.555 9.85474 732.568 11.1323 730.86 11.7144C729.208 12.2783 727.709 11.846 726.403 10.728C726.188 10.5441 726.06 10.4101 725.816 10.1154C725.816 10.1154 725.48 9.6745 725.453 9.61969L725.067 10.0691L725.068 10.0715Z"
                fill="#B9AB96"
              />
            </svg>
          </section>
          <h3 className="font-antonio text-primary mt-8 mb-8 text-3xl font-normal uppercase md:text-[55px]">
            CATEGORIES
          </h3>

          <div className="mx-auto mb-[30px] flex flex-wrap justify-center gap-4 md:mb-15">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className="font-roboto cursor-pointer rounded-full bg-[#F5F4F1] px-6 py-2 text-sm font-semibold text-[#927B64] uppercase transition-colors hover:bg-[#D0C7B8] md:text-base"
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
