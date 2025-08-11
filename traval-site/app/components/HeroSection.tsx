import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8  py-10 items-center">
        <div className="flex items-center">
          <Image src="/images/bg.png" alt="img" width={300} height={350} className="relative object-cover object-left h-full rounded-ee-2xl rounded-r-2xl  mt-60 "/>
          <div className="space-y-6 ml-6">
            <div className="flex items-center">
              <span className="w-12 h-0.5 bg-red-500 mr-2"></span>
              <p className="text-m uppercase font-bold tracking-widest font-antonio text-[#927B64]"> Mackinnons Travels Blog </p>
            </div>
            <h1 className="text-5xl font-antonio font-bold uppercase text-[#927B64] leading-tight"> Adventure Awaits<br />Around the World </h1>
            <p className="text-gray-600">
              Mackinnons Travels revolutionizes the way you book your travel by giving you the flexibility to tailor-make your own travel package using our comprehensive suite.
            </p>
          </div>
        </div>
        <div>
        <div className="flex justify-end items-end h-full">
        <video src="/images/bgvideo.mp4" className="rounded-bl-2xl rounded-l-2xl w-min" autoPlay loop muted playsInline style={{display: 'block'}} />
        </div>
        </div>
      </main>
      <hr className="flex-grow border-t-2 border-primary-300 ml-20 mr-20 mt-5 mb-2" />
  </section>
  )
}