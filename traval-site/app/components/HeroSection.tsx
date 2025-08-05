import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen">
        {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-16 items-center">
        <div className="flex items-center space-x-8">
          <Image src="/images/bg.png" alt="img" width={300} height={200} className="rounded-xl" style={{marginLeft: 0, display: 'block'}} />
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="w-12 h-0.5 bg-red-500 mr-2"></span>
              <p className="text-sm uppercase font-bold tracking-widest font-roboto text-primary"> Mackinnons Travels Blog </p>
            </div>
            <h1 className="text-5xl font-antonio font-normal uppercase text-primary leading-tight"> Adventure Awaits<br />Around the World </h1>
            <p className="text-gray-600">
              Mackinnons Travels revolutionizes the way you book your travel by giving you the flexibility to tailor-make your own travel package using our comprehensive suite.
            </p>
          </div>
        </div>
        <div>
        <div className="flex justify-end items-end w-full h-full">
        <video src="/images/bgvideo.mp4" width={600} height={900} className="rounded-xl" autoPlay loop muted playsInline style={{display: 'block'}} />
        </div>
        </div>
      </main>
    </section>
  )
}