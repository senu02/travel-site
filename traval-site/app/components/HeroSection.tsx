import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-1 items-end gap-8 md:order-1 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:flex-row md:items-end">
          <div className="relative hidden h-48 w-full sm:h-72 md:flex md:h-[350px] md:w-3/6">
            <Image
              src="/images/bg.png"
              alt="Travel"
              fill
              className="object-cover object-right md:rounded-ee-2xl md:rounded-r-2xl"
            />
          </div>

          <div className="mt-4 space-y-4 md:order-2 md:ml-4 md:pb-50">
            <div className="flex items-center justify-center md:justify-start">
              <span className="mr-2 h-[2px] w-6 bg-[#C41230] md:h-[2px] md:w-20"></span>
              <p className="font-roboto text-center text-xs font-bold tracking-widest text-[#927B64] uppercase md:text-left md:text-lg">
                Mackinnons Travels Blog
              </p>
            </div>

            <h1 className="font-antonio text-center text-4xl leading-tight font-medium text-[#927B64] uppercase md:text-left md:text-8xl">
              Adventure Awaits
              <br />
              Around the World
            </h1>

            <p className="font-roboto pr-4 pl-4 text-center text-sm font-light text-[#434343] md:text-left md:text-xl">
              Mackinnons Travels revolutionizes the way you book your travel by
              giving you the flexibility to tailor-make your own travel package
              using our comprehensive suite.
            </p>
          </div>
        </div>

        <div className="order-3 flex justify-center md:justify-end">
          <video
            src="/images/bgvideo.mp4"
            className="h-56 w-full rounded-4xl object-cover px-3 md:h-[750px] md:w-[800px] md:rounded-l-2xl md:rounded-bl-2xl md:px-0"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="mt-[35px] flex items-center justify-center gap-4 px-4 md:mt-20 md:pr-40 md:pl-40">
        <span className="h-[1px] flex-1 bg-[#B9AB9661] md:h-[1px] md:w-full"></span>

        <svg
          width="53"
          height="25"
          viewBox="0 0 53 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:h-10 md:w-10"
        >
          <path
            d="M19.7662 16.7859C20.503 17.7074 21.254 18.6168 22.0355 19.4997C22.2344 19.725 22.3826 19.928 22.3806 20.1208C22.3765 20.3583 22.1796 20.5816 21.9543 20.811C19.4394 23.3847 16.5084 25.0289 12.7878 24.9558C7.40271 24.8503 3.41416 22.4226 1.14484 17.5755C-2.36467 10.0754 2.69561 1.18689 10.9183 0.18823C15.8081 -0.404471 19.6931 1.34115 22.679 5.2201C23.7446 6.60442 24.9077 7.91567 26.0099 9.27563C26.3915 9.74654 26.6188 9.80338 27.0552 9.26142C28.5309 7.42649 29.9741 5.54892 31.6162 3.86825C36.715 -1.34021 44.5683 -1.26511 49.6387 3.94944C53.881 8.31351 54.1002 15.6675 50.2335 20.338C47.276 23.9084 43.4722 25.3435 38.9742 24.9315C35.6879 24.629 33.0086 23.0133 30.9037 20.4639C30.7068 20.2264 30.6134 20.064 30.855 19.7798C31.8963 18.5518 32.9152 17.3035 33.9951 15.9983C34.8009 17.2406 35.7143 18.2453 36.9241 18.9679C41.3389 21.6026 47.8992 18.3975 47.9134 12.6126C47.9256 7.72487 43.1373 4.16663 38.4606 5.42308C37.259 5.74581 36.2928 6.48263 35.4159 7.34529C33.0512 9.66738 31.1655 12.3934 29.014 14.8961C28.334 15.6878 27.6702 16.4956 27.0248 17.3177C26.6492 17.7967 26.3874 17.7602 26.0099 17.2933C23.5721 14.2852 21.0693 11.3257 18.6661 8.28915C16.4109 5.44134 13.0252 4.42036 9.73089 5.72552C6.77347 6.89874 4.88576 10.1018 5.33232 13.4895C5.71798 16.4246 7.35196 18.5538 10.1795 19.5241C12.9136 20.4639 15.394 19.7433 17.5558 17.8799C17.913 17.5734 18.1241 17.3502 18.528 16.859C18.528 16.859 19.0842 16.1242 19.1288 16.0328L19.7682 16.7818L19.7662 16.7859Z"
            fill="#B9AB96"
          />
        </svg>

        <span className="h-[1px] flex-1 bg-[#B9AB9661] md:h-[1px] md:w-full"></span>
      </div>
    </section>
  );
}
