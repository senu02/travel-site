import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-1 items-end gap-8 py-6 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:flex-row md:items-end">
          <div className="relative h-48 w-full sm:h-72 md:h-[350px] md:w-3/6">
            <Image
              src="/images/bg.png"
              alt="Travel"
              fill
              className="object-cover object-right md:rounded-ee-2xl md:rounded-r-2xl"
            />
          </div>

          <div className="mt-4 space-y-6 md:ml-4 md:pb-50">
            <div className="flex items-center justify-center md:justify-start">
              <span className="mr-2 md:h-[2px] h-[0.5px] w-15 md:w-20 bg-[#C41230] sm:w-28"></span>
              <p className="font-roboto text-center text-sm font-bold tracking-widest text-[#927B64] uppercase sm:text-base md:text-left md:text-lg">
                Mackinnons Travels Blog
              </p>
            </div>

            <h1 className="font-antonio text-center text-4xl leading-tight font-medium text-[#927B64] uppercase sm:text-5xl md:text-left md:text-7xl lg:text-8xl">
              Adventure Awaits
              <br />
              Around the World
            </h1>

            <p className="font-roboto text-center text-base font-light text-[#434343] sm:text-lg md:text-left md:text-xl">
              Mackinnons Travels revolutionizes the way you book your travel by
              giving you the flexibility to tailor-make your own travel package
              using our comprehensive suite.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <video
            src="/images/bgvideo.mp4"
            className="h-56 w-full object-cover sm:h-80 md:h-[600px] md:w-[500px] md:rounded-l-2xl md:rounded-bl-2xl lg:h-[750px] lg:w-[800px]"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <svg
          width="100%"
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
            x1="0"
            y1="8.5"
            x2="692"
            y2="8.5"
            stroke="#B9AB96"
            strokeOpacity="0.38"
          />
          <path
            d="M725.068 10.0715C724.623 10.6244 724.169 11.1701 723.697 11.6998C723.577 11.835 723.487 11.9568 723.489 12.0725C723.491 12.215 723.61 12.349 723.746 12.4866C725.265 14.0308 727.036 15.0173 729.284 14.9735C732.537 14.9102 734.947 13.4536 736.318 10.5453C738.438 6.04522 735.381 0.712134 730.413 0.112937C727.459 -0.242683 725.112 0.804691 723.308 3.13206C722.665 3.96265 721.962 4.7494 721.296 5.56538C721.066 5.84792 720.928 5.88203 720.665 5.55685C719.773 4.45589 718.901 3.32935 717.909 2.32095C714.829 -0.804127 710.085 -0.759065 707.021 2.36966C704.458 4.9881 704.326 9.40047 706.662 12.2028C708.449 14.3451 710.747 15.2061 713.464 14.9589C715.449 14.7774 717.068 13.808 718.34 12.2783C718.459 12.1358 718.515 12.0384 718.369 11.8679C717.74 11.1311 717.124 10.3821 716.472 9.59899C715.985 10.3443 715.433 10.9472 714.703 11.3807C712.035 12.9616 708.072 11.0385 708.064 7.56757C708.056 4.63492 710.949 2.49998 713.774 3.25384C714.5 3.44749 715.084 3.88958 715.614 4.40717C717.042 5.80043 718.181 7.43604 719.481 8.93768C719.892 9.41265 720.293 9.89737 720.683 10.3906C720.91 10.678 721.068 10.6561 721.296 10.376C722.769 8.5711 724.281 6.79543 725.733 4.97349C727.095 3.26481 729.14 2.65221 731.131 3.43531C732.917 4.13924 734.058 6.06105 733.788 8.09369C733.555 9.85474 732.568 11.1323 730.86 11.7144C729.208 12.2783 727.709 11.846 726.403 10.728C726.188 10.5441 726.06 10.4101 725.816 10.1154C725.816 10.1154 725.48 9.6745 725.453 9.61969L725.067 10.0691L725.068 10.0715Z"
            fill="#B9AB96"
          />
        </svg>
      </div>
    </section>
  );
}
