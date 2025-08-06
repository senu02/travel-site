import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-6 w-full">
      <nav className="flex items-center gap-6 text-gray-600 font-medium w-full">
        <div className="flex justify-center items-center">
        <Image src="/images/john.png" alt="john Logo" width={100} height={100} />
        </div>
        <a href="#" className="hover:text-black">Travel Packages</a>
        <a href="/" className="hover:text-black">Blog Home</a>
        <Link href="/categories" className="hover:text-black">Categories</Link>
        <div className="flex jjustify-center">
        <Image src="/images/logo.png" alt="Logo" className="flex justify-between" width={160} height={190}/>
        </div>
        <div className="flex gap-4 ml-auto">
          <a href="#"><img src="/icons/fb.png" alt="fb" width={30}/></a>
          <a href="#"><img src="/icons/instagram.png" alt="Instagram" width={30} /></a>
          <a href="#"><img src="/icons/linkedin.png" alt="linkedin" width={30} /></a>
          <a href="#"><img src="/icons/tik-tok.png" alt="tiktok" width={30} /></a>
        </div>
      </nav>
    </header>
  );
}
