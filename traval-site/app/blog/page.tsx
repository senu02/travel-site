import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <hr className="mb-10 w-full border-t-2 border-[#B9AB9661]" />

      <section className="flex flex-col items-center px-4">
        <div className="mb-[30px] flex w-full max-w-6xl flex-col items-start px-4 md:mt-10 md:mb-8">
          <p className="font-roboto text-xs leading-7 font-bold tracking-widest text-[#927B64] md:mb-1 md:text-lg">
            09 OCT 2024
          </p>
          <h2 className="font-antonio mt-1 text-2xl font-normal text-[#927B64] uppercase md:text-5xl">
            6 best ryokans in Japan to rejuvenate yourself
          </h2>
        </div>

        <div className="relative mx-4 mb-[30px] h-[300px] w-full max-w-6xl overflow-hidden rounded-2xl shadow-md md:mb-10 md:h-[500px] lg:h-[693px]">
          <Image
            src="/images/blog1.jpg"
            alt="Travel 2"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
          <div className="font-roboto absolute top-6 left-6 z-10 text-[10px] leading-loose font-semibold tracking-wider text-white uppercase md:text-sm">
            Category 1 . Category 2 . Category 3
          </div>
          <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#E74C3C]"></div>
        </div>

        <div className="w-full max-w-6xl px-2 md:mt-6 md:px-2">
          <p className="font-roboto mb-[30px] text-sm leading-normal font-light text-[#434343] md:text-xl md:leading-loose">
            Mackinnons Travels Dive into a world of inspiration, insights, and
            ideas. Whether you're here to explore, learn, or simply unwind, our
            blog brings stories that resonate and topics that spark curiosity.
            Dive into a world of inspiration, insights, and ideas Lorem ipsum
            dolor sit amet consectetur. Ipsum pretium nisl condimentum
            scelerisque faucibus porta pellentesque scelerisque ac. Varius
            sollicitudin rhoncus pellentesque vitae non risus pulvinar pretium.
            Vitae nullam sodales risus ultrices pharetra porta ornare laoreet
            ac. Eget nulla pretium id euismod ornare sagittis quis. Auctor amet
            suscipit urna lobortis aliquam dignissim. Nisl magnis gravida ligula
            duis sit sit. Euismod arcu at tellus duis metus ut velit elementum.
            Fermentum id eget turpis mattis. Nulla amet massa lacus sed. Leo ac
            amet diam purus ullamcorper. Ultrices convallis lectus nisl
            accumsan. Orci consequat adipiscing iaculis scelerisque vulputate
            tellus nascetur sed. Lacus morbi elit lorem adipiscing adipiscing
            nisi iaculis pharetra leo. Gravida quam purus malesuada magna nec
            nec elementum.
          </p>

          <p className="font-roboto mb-[30px] text-sm leading-normal font-light text-[#434343] md:text-xl md:leading-loose">
            Quam eu enim ac mauris ipsum tincidunt. Amet gravida placerat lectus
            risus at urna condimentum nisi vestibulum. Orci suspendisse lobortis
            eu pulvinar suscipit eu mi donec. Sagittis mattis risus libero odio.
            Sapien elementum suspendisse nunc at in. Aliquet pharetra ut
            pellentesque non et. Lorem volutpat cras adipiscing non donec quis
            proin sit. Cum tincidunt proin faucibus nulla. Mauris scelerisque
            urna urna consectetur. Ullamcorper tortor nec elit nullam eu velit
            faucibus lobortis. Feugiat rhoncus sollicitudin enim placerat elit
            venenatis elit. Amet facilisis ut nunc nibh. In cursus et vestibulum
            enim congue nascetur. Iaculis proin orci nunc dignissim cursus nec
            tellus. Sed pharetra consectetur commodo id elementum aliquet id
          </p>
        </div>
      </section>

      <section className="mb-[30px] flex justify-center px-4 md:mt-10">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="group mb-5 flex flex-col">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[349px]">
              <Image
                src="/images/1.jpg"
                alt="Travel 2"
                fill
                className="rounded-3xl object-cover"
              />
              <div className="absolute right-0 -bottom-2 left-0 -z-1 h-1/2 rounded-b-3xl bg-[#F1C40F]"></div>
            </div>
          </div>

          <div className="group mb-5 flex flex-col">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[349px]">
              <Image
                src="/images/2.jpg"
                alt="Travel 2"
                fill
                className="rounded-3xl object-cover"
              />
              <div className="absolute right-0 -bottom-2 left-0 -z-1 h-1/2 rounded-b-3xl bg-[#E74C3C]"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-[30px] flex items-center justify-center px-4">
          <ul className="font-roboto mb-8 w-full max-w-6xl list-disc space-y-6 pl-6 text-sm font-light text-[#434343] md:text-xl md:leading-loose">
            <li>
              Lorem ipsum dolor sit amet consectetur. Ipsum pretium nisl
              condimentum scelerisque faucibus porta pellentesque scelerisque
              ac. Varius sollicitudin rhoncus pellentesque vitae non risus
              pulvinar pretium. Vitae nullam sodales risus ultrices pharetra
              porta ornare laoreet ac.
            </li>
            <li>
              Eget nulla pretium id euismod ornare sagittis quis. Auctor amet
              suscipit urna lobortis aliquam dignissim. Nisl magnis gravida
              ligula duis sit sit. Euismod arcu at tellus duis metus ut velit
              elementum. Fermentum id eget turpis mattis. Nulla amet massa lacus
              sed. Leo ac amet diam purus ullamcorper.
            </li>
            <li>
              Ultrices convallis lectus nisl accumsan. Orci consequat adipiscing
              iaculis scelerisque vulputate tellus nascetur sed. Lacus morbi
              elit lorem adipiscing adipiscing nisi iaculis pharetra leo.
              Gravida quam purus malesuada magna nec nec elementum.
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center px-4">
        <div className="flex w-full max-w-6xl flex-col items-start">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <p className="font-roboto text-primary justify-center text-center text-base font-normal md:text-xl">
              Share
            </p>

            <svg
              width="117"
              height="20"
              viewBox="0 0 117 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_11_726)">
                <path
                  d="M37.7517 8.46862L45.0371 0H43.3107L36.9848 7.35319L31.9324 0H26.105L33.7453 11.1193L26.105 20H27.8315L34.5117 12.2348L39.8475 20H45.6749L37.7513 8.46862H37.7517ZM35.3871 11.2173L34.613 10.1101L28.4536 1.29967H31.1053L36.0761 8.40993L36.8502 9.51716L43.3115 18.7594H40.6597L35.3871 11.2177V11.2173Z"
                  fill="#B9AB96"
                />
              </g>
              <g clipPath="url(#clip1_11_726)">
                <path
                  d="M81.3891 20.0001L81.3941 19.9993V12.6643C81.3941 9.07593 80.6216 6.31177 76.4266 6.31177C74.4099 6.31177 73.0566 7.41843 72.5041 8.4676H72.4458V6.64677H68.4683V19.9993H72.6099V13.3876C72.6099 11.6468 72.9399 9.96343 75.0958 9.96343C77.2199 9.96343 77.2516 11.9501 77.2516 13.4993V20.0001H81.3891Z"
                  fill="#B9AB96"
                />
                <path
                  d="M61.7241 6.64746H65.8708V19.9999H61.7241V6.64746Z"
                  fill="#B9AB96"
                />
                <path
                  d="M63.7947 0C62.4689 0 61.3931 1.07583 61.3931 2.40166C61.3931 3.7275 62.4689 4.82583 63.7947 4.82583C65.1206 4.82583 66.1964 3.7275 66.1964 2.40166C66.1956 1.07583 65.1197 0 63.7947 0Z"
                  fill="#B9AB96"
                />
              </g>
              <path
                d="M6.74156 20V10.8777H9.80229L10.2615 7.32155H6.74156V5.05146C6.74156 4.02219 7.0262 3.32076 8.50385 3.32076L10.3854 3.31999V0.13923C10.06 0.0969452 8.94306 0 7.64307 0C4.92848 0 3.07002 1.65696 3.07002 4.69926V7.32155H0V10.8777H3.07002V20H6.74156Z"
                fill="#B9AB96"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M105.608 13.7443C105.635 13.7578 105.676 13.7578 105.676 13.7578V13.7848C105.716 13.7848 105.797 13.7308 105.797 13.7308L107.253 12.2745C107.267 12.2605 107.281 12.2475 107.295 12.2349C107.333 12.1988 107.368 12.1662 107.388 12.1262C107.415 12.0722 107.429 12.0183 107.402 11.9643C107.375 11.9105 107.334 11.8565 107.28 11.8565C106.727 11.7351 106.228 11.4654 105.824 11.0609C105.352 10.6024 105.069 9.9955 105.001 9.3078C104.92 8.45832 105.217 7.62221 105.824 7.01544L109.64 3.19925C110.719 2.12048 112.607 2.12048 113.685 3.19925C114.225 3.75213 114.522 4.46681 114.522 5.23546C114.522 6.00409 114.225 6.73225 113.685 7.27165L111.946 8.99774C111.906 9.03809 111.892 9.10555 111.906 9.15951C112.067 9.73941 112.162 10.3462 112.162 10.953C112.162 11.2496 112.148 11.5058 112.108 11.7216C112.108 11.789 112.135 11.87 112.202 11.897C112.27 11.9373 112.351 11.9238 112.404 11.87L115.358 8.93028C117.394 6.88059 117.394 3.56334 115.358 1.52715C113.321 -0.509051 110.004 -0.509051 107.968 1.52715L104.152 5.34333C103.815 5.68045 103.545 6.04454 103.343 6.40862C103.338 6.41312 103.332 6.41761 103.326 6.4221C103.314 6.4311 103.302 6.44009 103.302 6.44908C102.466 7.94588 102.399 9.7529 103.14 11.2901C103.397 11.816 103.72 12.288 104.152 12.7195C104.57 13.1509 105.069 13.5016 105.608 13.7443ZM98.4342 18.4627C99.4591 19.4741 100.794 19.9865 102.129 19.9865L102.089 20C103.424 20 104.772 19.4876 105.783 18.4762L109.6 14.66C110.301 13.9588 110.786 13.0959 111.002 12.1384L111.083 11.5451C111.11 11.4103 111.11 11.2753 111.11 11.1406V11.0866V10.9652V10.6011C111.11 10.4662 111.096 10.3314 111.069 10.2235C111.056 10.0752 111.029 9.9539 111.002 9.83248C110.975 9.69769 110.935 9.54928 110.881 9.3875C110.651 8.61884 110.22 7.89067 109.613 7.28388C109.209 6.87934 108.71 6.52873 108.17 6.27252C108.116 6.23207 107.981 6.29949 107.981 6.29949L106.525 7.75587C106.485 7.79635 106.431 7.85019 106.39 7.93114C106.363 7.97162 106.363 8.02558 106.39 8.07943C106.417 8.13339 106.458 8.17387 106.512 8.17387C107.064 8.2818 107.563 8.55139 107.968 8.95601C108.507 9.5088 108.804 10.237 108.791 11.0326C108.777 11.5181 108.656 11.99 108.426 12.3945C108.372 12.489 108.305 12.5969 108.197 12.7182C108.143 12.7992 108.076 12.8935 107.968 13.0014L104.152 16.8176C103.612 17.3435 102.884 17.6402 102.129 17.6402C101.374 17.6402 100.632 17.3435 100.106 16.8176C99.5669 16.2647 99.2703 15.55 99.2703 14.7814C99.2703 14.0128 99.5669 13.2846 100.106 12.7452L101.846 11.0056C101.886 10.9517 101.9 10.8843 101.886 10.8304C101.617 9.99425 101.536 9.14477 101.657 8.29517C101.671 8.22783 101.63 8.14688 101.563 8.1199C101.509 8.07943 101.374 8.14688 101.374 8.14688L98.4342 11.0731C97.4364 12.0575 96.897 13.3789 96.897 14.768C96.897 16.1569 97.4498 17.4783 98.4342 18.4627Z"
                fill="#B9AB96"
              />
              <defs>
                <clipPath id="clip0_11_726">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(25.8892)"
                  />
                </clipPath>
                <clipPath id="clip1_11_726">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(61.3931)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <section className="mt-[30px] mb-10 flex justify-center px-4">
        <svg
          width="100%"
          height="15"
          viewBox="0 0 1441 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[1441px]"
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

      <section className="flex flex-col items-center px-4">
        <div className="mb-8 flex w-full max-w-6xl flex-col items-center">
          <h2 className="font-antonio mt-8 mb-6 text-4xl leading-tight font-normal tracking-tight text-[#927B64] uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"></h2>
        </div>
      </section>

      <section className="mt-6 mb-[30px] items-center justify-center px-4 md:mb-10">
        <div className="mx-auto max-w-7xl px-0 py-8 md:px-4">
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            <div className="overflow-hidden rounded-3xl border border-[#CECECE]">
              <div className="relative h-60 w-full overflow-hidden rounded-3xl rounded-b-3xl sm:h-72 md:h-80">
                <Image
                  src="/images/package1.png"
                  alt="Thailand"
                  fill
                  className="rounded-b-3xl object-cover"
                  priority
                />
                <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                <div className="font-roboto absolute top-4 left-4 z-10 text-xs leading-6 font-semibold tracking-wider text-white uppercase sm:text-sm">
                  Air ticket
                </div>
                <div className="absolute right-4 bottom-4 z-10"></div>
                <div className="absolute right-0 bottom-0 left-0 h-2 rounded-t-full bg-[#F1C40F]"></div>
              </div>
              <div className="p-4">
                <h1 className="font-roboto text-primary mb-2 text-sm font-bold uppercase sm:mb-4 sm:text-base">
                  Asia
                </h1>
                <h3 className="font-antonio text-primary mb-2 text-2xl leading-tight font-normal uppercase sm:text-3xl md:text-4xl">
                  THAILAND
                </h3>
                <p className="text-primary font-roboto mt-4 text-xs font-normal tracking-wider sm:mt-10 sm:text-sm">
                  04 Nights | P/P
                </p>
                <p className="font-roboto mb-2 text-xl font-bold text-[#002D6A] sm:mb-4 sm:text-2xl">
                  LKR 710,000
                </p>
                <button className="font-roboto rounded-full border border-transparent bg-[#002D6A] px-4 py-2 text-xs font-semibold text-[#ffffff] uppercase transition-colors hover:border-[#927B64] hover:bg-[#ffffff] hover:text-[#927B64] sm:text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#CECECE]">
              <div className="relative h-60 w-full overflow-hidden rounded-3xl rounded-b-3xl sm:h-72 md:h-80">
                <Image
                  src="/images/package2.png"
                  alt="Thailand"
                  fill
                  className="rounded-b-3xl object-cover"
                  priority
                />
                <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10 text-xs leading-6 font-semibold tracking-wider text-white uppercase sm:text-sm">
                  Air ticket
                </div>
                <div className="absolute right-4 bottom-4 z-10"></div>
                <div className="absolute right-0 bottom-0 left-0 h-2 rounded-t-full bg-[#c50000]"></div>
              </div>

              <div className="p-4">
                <h1 className="font-roboto text-primary mb-2 text-sm font-bold uppercase sm:mb-4 sm:text-base">
                  Asia
                </h1>
                <h3 className="font-antonio text-primary mb-2 text-2xl leading-tight font-normal uppercase sm:text-3xl md:text-4xl">
                  THAILAND
                </h3>
                <p className="text-primary font-roboto mt-4 text-xs font-normal tracking-wider sm:mt-10 sm:text-sm">
                  02 Nights | P/P
                </p>
                <p className="font-roboto mb-2 text-xl font-bold text-[#002D6A] sm:mb-4 sm:text-2xl">
                  LKR 350,000
                </p>
                <button className="font-roboto rounded-full border border-transparent bg-[#002D6A] px-4 py-2 text-xs font-semibold text-[#ffffff] uppercase transition-colors hover:border-[#927B64] hover:bg-[#ffffff] hover:text-[#927B64] sm:text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#CECECE]">
              <div className="relative h-60 w-full overflow-hidden rounded-3xl rounded-b-3xl sm:h-72 md:h-80">
                <Image
                  src="/images/package3.png"
                  alt="Thailand"
                  fill
                  className="rounded-b-3xl object-cover"
                  priority
                />
                <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10 text-xs leading-6 font-semibold tracking-wider text-white uppercase sm:text-sm">
                  Air ticket
                </div>
                <div className="absolute right-4 bottom-4 z-10"></div>
                <div className="absolute right-0 bottom-0 left-0 h-2 rounded-t-full bg-[#23a000]"></div>
              </div>
              <div className="p-4">
                <h1 className="font-roboto text-primary mb-2 text-sm font-bold uppercase sm:mb-4 sm:text-base">
                  09 Sep 2024 - 11 OCT 2024
                </h1>
                <h3 className="font-antonio text-primary mb-2 text-2xl leading-tight font-normal uppercase sm:text-3xl md:text-4xl">
                  Colombo - MALE
                </h3>
                <p className="text-primary font-roboto mt-4 text-xs font-normal tracking-wider sm:mt-10 sm:text-sm">
                  Round-trip | Business
                </p>
                <p className="font-roboto mb-2 text-xl font-bold text-[#002D6A] sm:mb-4 sm:text-2xl">
                  LKR 90,000
                </p>
                <button className="font-roboto rounded-full border border-transparent bg-[#002D6A] px-4 py-2 text-xs font-semibold text-[#ffffff] uppercase transition-colors hover:border-[#927B64] hover:bg-[#ffffff] hover:text-[#927B64] sm:text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#CECECE]">
              <div className="relative h-60 w-full overflow-hidden rounded-3xl rounded-b-3xl sm:h-72 md:h-80">
                <Image
                  src="/images/package4.png"
                  alt="Thailand"
                  fill
                  className="rounded-b-3xl object-cover"
                  priority
                />
                <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10 text-xs leading-6 font-semibold tracking-wider text-white uppercase sm:text-sm">
                  Air ticket
                </div>
                <div className="absolute right-4 bottom-4 z-10"></div>
                <div className="absolute right-0 bottom-0 left-0 h-2 rounded-t-full bg-[#620090]"></div>
              </div>
              <div className="p-4">
                <h1 className="font-roboto text-primary mb-2 text-sm font-bold uppercase sm:mb-4 sm:text-base">
                  Asia
                </h1>
                <h3 className="font-antonio text-primary mb-2 text-2xl leading-tight font-normal uppercase sm:text-3xl md:text-4xl">
                  THAILAND
                </h3>
                <p className="text-primary font-roboto mt-4 text-xs font-normal tracking-wider sm:mt-10 sm:text-sm">
                  04 Nights | P/P
                </p>
                <p className="font-roboto mb-2 text-xl font-bold text-[#002D6A] sm:mb-4 sm:text-2xl">
                  LKR 520,000
                </p>
                <button className="font-roboto rounded-full border border-transparent bg-[#002D6A] px-4 py-2 text-xs font-semibold text-[#ffffff] uppercase transition-colors hover:border-[#927B64] hover:bg-[#ffffff] hover:text-[#927B64] sm:text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-10 flex justify-center px-4">
        <svg
          width="100%"
          height="15"
          viewBox="0 0 1441 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[1441px]"
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

      <section className="relative w-full overflow-hidden px-6 py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/bg4.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="mb-[30px] flex flex-col text-center md:mb-12">
            <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
              <div className="mb-[10px] flex items-center">
                <span className="mr-2 h-0.5 w-[40px] bg-red-500 md:w-[120px]"></span>
                <p className="font-roboto text-xs font-medium tracking-widest text-[#927B64] uppercase md:text-lg">
                  INSIGHT AND IDEAS
                </p>
              </div>
              <button className="font-roboto hidden rounded-full border-[1px] border-[#927B64] bg-transparent px-4 py-2 text-sm font-semibold tracking-wider text-[#927B64] uppercase transition-colors duration-200 hover:border-[#6d563b] hover:bg-[#6d563b] hover:text-[#ffffff] md:inline-block md:px-8 md:text-lg">
                VIEW ALL BLOGS
              </button>
            </div>
            <h2 className="font-antonio text-3xl font-normal text-[#927B64] uppercase sm:text-5xl md:items-start md:text-6xl lg:text-7xl xl:text-8xl">
              OTHER STORIES
            </h2>
          </div>

          <div className="flex justify-center md:mt-20">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <div className="group flex flex-col md:mb-4">
                <Link href="/blog" className="block">
                  <div className="relative aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md md:mb-4">
                    <Image
                      src="/images/story3.png"
                      alt="Travel 2"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                    <div className="font-roboto absolute top-4 left-4 text-xs leading-tight font-semibold tracking-widest text-white sm:top-6 sm:left-8 sm:text-sm">
                      CATEGORY 1
                    </div>
                    <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#F1C40F]"></div>
                  </div>
                </Link>
                <div className="text-left">
                  <span className="font-roboto mt-[10px] block text-xs font-bold text-[#927B64] uppercase sm:mt-10 sm:text-sm md:mt-4 md:mb-2">
                    09 AUG 2024
                  </span>
                  <h3 className="font-antonio mt-[4px] mb-[20px] text-xl font-normal text-[#927B64] uppercase sm:mb-20 sm:text-2xl md:mb-10 md:text-3xl">
                    6 BEST RYOKANS IN JAPAN TO REJUVENATE YOURSELF
                  </h3>
                </div>
              </div>

              <div className="group mb-4 flex flex-col">
                <Link href="/blog" className="block">
                  <div className="relative mb-4 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md">
                    <Image
                      src="/images/story4.png"
                      alt="Travel 2"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                    <div className="font-roboto absolute top-4 left-4 text-xs leading-tight font-semibold tracking-widest text-white sm:top-6 sm:left-8 sm:text-sm">
                      CATEGORY 1 . CATEGORY 2
                    </div>
                    <div className="absolute right-0 bottom-0 left-0 h-2 bg-[#F1C40F]"></div>
                  </div>
                </Link>
                <div className="text-left">
                  <span className="font-roboto mt-[10px] block text-xs font-bold text-[#927B64] uppercase sm:mt-10 sm:text-sm md:mt-4 md:mb-2">
                    09 AUG 2024
                  </span>
                  <h3 className="font-antonio text-xl font-normal text-[#927B64] uppercase sm:mb-20 sm:text-2xl md:mb-8 md:text-3xl">
                    7 best places in Asia to celebrate Christmas
                  </h3>
                </div>
              </div>
              <button className="font-roboto w-3/6 items-center rounded-full border border-[#927B64] bg-transparent px-3 py-1.5 text-xs font-semibold tracking-wide text-[#927B64] uppercase transition-colors duration-200 hover:border-[#6d563b] hover:bg-[#6d563b] hover:text-white md:hidden">
                VIEW ALL BLOGS
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
