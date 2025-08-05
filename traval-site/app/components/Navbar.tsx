import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 w-full">
        <nav className="flex items-center gap-6 text-gray-600 font-medium w-full">
          <Image src="/images/john.png" alt="john Logo" width={100} height={100} />
          <a href="#" className="hover:text-black">Travel Packages</a>
          <a href="#" className="text-black font-bold pb-1">Blog Home</a>
          <a href="#" className="hover:text-black">Categories</a>
          <Image src="/images/logo.png" alt="Logo" width={160} height={190} />
          <div className="flex gap-4 ml-auto">
            <a href="#"><img src="/icons/fb.png" alt="fb" width={20}/></a>
            <a href="#"><img src="/icons/instagram.png" alt="Instagram" width={20} /></a>
            <a href="#"><img src="/icons/linkedin.png" alt="linkdin" width={20} /></a>
            <a href="#"><img src="/icons/tik-tok.png" alt="tiktok" width={20} /></a>
          </div>
        </nav>
      </header>
  )
}