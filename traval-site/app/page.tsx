"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Image from "next/image";
import Footer from "./components/footer";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export interface Home {
  hero_section: herodata[];
  latest_travel_stories_section: latest_travel_stories[];
  other_stories_section: other_stories[];
  blogs: blog[];
  blog_categories: blog_category[];
}

export interface herodata {
  heading: string;
  sub_heading: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

export interface latest_travel_stories {
  heading: string;
  sub_heading: string;
  blogs: blog[];
}

export interface other_stories {
  heading: string;
  sub_heading: string;
}

export interface blog {
  id: number;
  title: string;
  date: string;
  featured_imageUrl: string;
  description: string;
  categories: blog_category[];
}

export interface blog_category {
  id: number;
  category: string;
}

export default function Home() {
  const [Blogs, setBlogs] = useState<blog[]>([]);
  const [Blog_categories, setBlog_categories] = useState<blog_category[]>([]);
  const [Other_stories, setOther_stories] = useState<other_stories | null>(
    null,
  );
  const [Home_pages, setHome_pages] = useState<latest_travel_stories | null>(
    null,
  );
  const [Hero_sections, setHero_sections] = useState<herodata | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const STRAPI_URL = "http://localhost:1337";
        const response = await fetch(
          `${STRAPI_URL}/api/home?populate[hero_section][populate][image][populate][fields]=*&populate[hero_section][populate][video][populate][fields]=*&populate[latest_travel_stories][populate][blogs][populate][featured_image][fields]=*&populate[latest_travel_stories][populate][blogs][populate][categories][fields]=*&populate[other_stories][populate][blogs][populate][featured_image][fields]=*&populate[other_stories][populate][blogs][populate][categories][fields]=*`,
        );

        const data = await response.json();
        const homeData = data?.data;

        if (homeData?.hero_section) {
          setHero_sections({
            heading: homeData.hero_section.heading || "",
            sub_heading: homeData.hero_section.sub_heading || "",
            description: homeData.hero_section.description || "",
            imageUrl: homeData.hero_section.image?.data?.attributes?.url
              ? `${STRAPI_URL}${homeData.hero_section.image.data.attributes.url}`
              : "/images/bg.png",
            videoUrl: homeData.hero_section.video?.data?.attributes?.url
              ? `${STRAPI_URL}${homeData.hero_section.video.data.attributes.url}`
              : "/images/bgvideo.mp4",
          });
        }

        setHome_pages({
          heading: data?.data?.latest_travel_stories?.heading,
          sub_heading: data?.data?.latest_travel_stories?.sub_heading,
          blogs: homeData?.latest_travel_stories?.blogs || [],
        });

        if (homeData?.other_stories) {
          setOther_stories({
            heading: data.data.other_stories[0]?.heading,
            sub_heading: data.data.other_stories[0]?.sub_heading,
          });
        }

        const latestBlogs = homeData?.latest_travel_stories?.blogs || [];
        const otherBlogs = homeData?.other_stories?.blogs || [];

        const allBlogs = [...latestBlogs, ...otherBlogs].map((blog) => ({
          id: blog.id,
          title: blog.title,
          date: blog.date,
          featured_imageUrl: `${STRAPI_URL}${blog.featured_image?.[0]?.url || ""}`,
          description: blog.description,
          categories: blog.categories || [],
        }));

        setBlogs(allBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkIsMobile();

      window.addEventListener("resize", checkIsMobile);

      return () => window.removeEventListener("resize", checkIsMobile);
    }
  }, []);

  const sliderBlogs = Blogs.slice(0, 8);

  return (
    <div className="min-h-screen">
      <section>
        <Navbar />
        <HeroSection heroData={Hero_sections} />
      </section>

      <section className="font-antonio mx-auto flex w-full flex-col items-center justify-center gap-10 px-4 py-10 md:mt-20 md:flex-row md:gap-12 md:px-6 md:py-10">
        <div className="w-full max-w-[644px] flex-shrink-0">
          <div className="text-center md:mb-10 md:hidden lg:text-left">
            <p className="font-roboto mb-2 flex items-center justify-center text-xs font-bold tracking-widest text-[#927B64] md:justify-start">
              <span className="mr-2 h-[2px] w-6 bg-[#C41230] md:h-[2px] md:w-20"></span>
              {Home_pages?.sub_heading}
            </p>
            <h2 className="font-antonio mb-[30px] text-4xl leading-tight font-normal text-[#6d563b] uppercase md:mb-4 md:text-7xl">
              {Home_pages?.heading}
            </h2>
          </div>

          {Blogs.length > 0 && (
            <div className="relative flex h-[500px] w-full flex-col justify-between overflow-hidden rounded-2xl shadow-lg md:h-[892px]">
              <Image
                src={Blogs[2].featured_imageUrl}
                alt={Blogs[2].title}
                fill
                className="-z-10 object-cover"
              />
              <div className="absolute inset-0 z-0 h-2/6 bg-gradient-to-b from-black/30 to-transparent"></div>

              <div className="absolute top-4 left-4 z-10">
                <span className="font-roboto px-3 py-1 text-xs font-semibold tracking-widest text-white sm:text-sm">
                  {Blogs[1].categories.map((cat) => cat.category).join(" • ")}
                </span>
              </div>

              <div className="absolute right-0 bottom-0 left-0 z-10 flex items-end justify-between bg-gradient-to-t from-black/50 to-transparent p-5">
                <div className="pr-4 text-white">
                  <p className="font-roboto mb-2 text-sm font-bold">
                    {new Date(Blogs[2].date)
                      .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                      .toUpperCase()}
                  </p>
                  <p className="font-antonio text-xl font-normal sm:text-2xl md:text-[32px]">
                    {Blogs[2].title}
                  </p>
                </div>
                <button className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    className="h-8 w-8 md:h-10 md:w-10"
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
          )}
        </div>

        <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-start">
          <div className="hidden text-center md:mb-10 md:block lg:text-left">
            <p className="font-roboto flex items-center justify-center text-sm font-bold tracking-widest text-[#927B64] lg:justify-start">
              <span className="mr-2 h-[0.5px] w-10 bg-[#C41230] sm:w-28 md:h-[2px] md:w-20"></span>
              {Home_pages?.sub_heading}
            </p>
            <h2 className="font-antonio mt-4 mb-8 text-2xl font-normal tracking-normal text-[#927B64] sm:text-3xl md:text-4xl lg:mt-6 lg:text-5xl xl:text-6xl 2xl:text-8xl">
              {Home_pages?.heading}
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
            {Blogs.slice(1, 3).map((blog, index) => (
              <div key={blog.id}>
                <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-md sm:h-[350px] md:h-[400px] lg:h-[459px]">
                  <Image
                    src={blog.featured_imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 z-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>

                  <div className="font-roboto absolute top-6 left-8 z-10 text-sm font-semibold tracking-widest text-white">
                    {blog.categories[0]?.category}
                  </div>
                </div>
                <div className="mt-6 px-2 md:px-4">
                  <p className="font-roboto mb-1 text-xs font-bold text-[#927B64]">
                    {new Date(blog.date)
                      .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                      .toUpperCase()}
                  </p>
                  <p className="font-antonio text-xl font-normal text-[#927B64] sm:text-lg md:text-xl lg:text-2xl">
                    {blog.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <section className="relative z-10 py-8 md:mt-20 md:px-6 md:py-10">
          <div className="mb-8 flex flex-col items-center text-center md:mb-12">
            <div className="mb-2 flex items-center md:mb-4">
              <span className="mr-2 h-[2px] w-6 bg-[#C41230] md:h-[2px] md:w-20"></span>
              <p className="font-roboto text-center text-xs font-bold tracking-widest text-[#927B64] uppercase md:text-left md:text-lg">
                {Other_stories?.sub_heading}
              </p>
            </div>
            <h2 className="font-antonio mb-2 text-4xl leading-tight font-normal text-[#6d563b] uppercase md:mb-4 md:text-7xl">
              {Other_stories?.heading}
            </h2>
          </div>

          <div className="mx-4 mt-[20px] md:mx-50 md:mt-20">
            <div className="md:hidden">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {sliderBlogs.map((blog) => (
                  <SwiperSlide key={blog.id}>
                    <div className="group mb-2 flex flex-col">
                      <Link href={`/blog/${blog.id}`} className="block">
                        <div className="relative mb-4 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md">
                          <Image
                            src={
                              blog.featured_imageUrl || "/images/category1.png"
                            }
                            alt={blog.title}
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-between">
                            <div className="relative h-1/3 w-full bg-gradient-to-b from-black/40 to-transparent">
                              <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white">
                                {blog.categories[0]?.category ||
                                  "Uncategorized"}
                              </span>
                            </div>
                            <div
                              className="h-2 w-full"
                              style={{ backgroundColor: "#F1C40F" }}
                            ></div>
                          </div>
                        </div>
                      </Link>

                      <div className="mb-[20px] text-left">
                        <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase">
                          {new Date(blog.date)
                            .toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                            .toUpperCase()}
                        </span>
                        <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase">
                          {blog.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="hidden grid-cols-1 gap-15 md:grid md:grid-cols-2">
              {sliderBlogs.map((blog, index) => (
                <div key={blog.id} className="group flex flex-col md:mb-8">
                  <Link href={`/blog/${blog.id}`} className="block">
                    <div className="relative mb-4 aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl shadow-md">
                      <Image
                        src={
                          blog.featured_imageUrl || "/images/placeholder.jpg"
                        }
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <div className="relative h-1/3 w-full bg-gradient-to-b from-black/40 to-transparent">
                          <span className="font-roboto absolute top-6 left-8 text-[10px] leading-relaxed font-semibold tracking-widest text-white md:text-sm">
                            {blog.categories[0]?.category || "Uncategorized"}
                          </span>
                        </div>
                        <div
                          className="h-2 w-full"
                          style={{ backgroundColor: "#F1C40F" }}
                        ></div>
                      </div>
                    </div>
                  </Link>

                  <div className="text-left">
                    <span className="font-roboto mt-[6px] block text-xs font-bold text-[#927B64] uppercase md:mt-10 md:mb-2 md:text-sm">
                      {new Date(blog.date)
                        .toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                        .toUpperCase()}
                    </span>
                    <h3 className="font-antonio text-lg font-normal text-[#927B64] uppercase md:mb-8 md:text-3xl">
                      {blog.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="relative p-2 text-center">
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
            <button className="font-roboto cursor-pointer rounded-full border-[1px] border-[#6d563b] px-4 py-2 text-xs font-bold text-[#6d563b] uppercase transition-colors hover:bg-[#D0C7B8] hover:text-[#6d563b] md:mb-6 md:text-base">
              VIEW ALL BLOGS
            </button>
          </Link>

          <div className="mx-4 mt-[20px] flex items-center justify-center gap-4 md:mt-20 md:pr-40 md:pl-40">
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

          <h3 className="font-antonio text-primary mt-8 mb-8 text-3xl font-normal uppercase md:text-[55px]">
            CATEGORIES
          </h3>

          <div className="mx-auto mb-[30px] flex flex-wrap justify-center gap-4 md:mb-15">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className="font-roboto cursor-pointer rounded-full bg-[#F5F4F1] px-6 py-2 text-xs font-semibold text-[#927B64] uppercase transition-colors hover:bg-[#D0C7B8] md:text-base"
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
