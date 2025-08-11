'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-6 py-6 w-full relative">
      <div style={{ height: '10px', width: '100%', background: 'linear-gradient(to right, #002D6A, #C41230)', position: 'absolute', top: 0, left: 0, zIndex: 20 }} />
      <nav className="flex items-center gap-6 text-primary font-medium w-full" style={{ position: 'relative', zIndex: 10 }}>
        <div className="flex justify-center items-center">
          <Image src="/images/john.png" alt="john Logo" width={100} height={100} />
        </div>
        
        <Link 
          href="#" 
          className={`hover:text-black  font-bold ${pathname === '#' ? 'font-bold text-[#002D6A]' : ''}`}
        >
          Travel Packages
        </Link>
        
        <Link 
          href="/" 
          className={`hover:text-black  font-bold ${pathname === '/' ? 'font-bold text-[#002D6A]' : ''}`}
        >
          Blog Home
        </Link>
        
        <Link 
          href="/categories" 
          className={`hover:text-black  font-bold ${pathname === '/categories' ? 'font-bold text-[#002D6A]' : ''}`}
        >
          Categories
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/images/logo.png" alt="Logo" width={160} height={190}/>
        </div>

        <div className="flex gap-4 ml-auto">
  <a href="#" className="p-1 rounded-full border-2 border-primary bg-white text-primary">
    <FaFacebookF size={20} />
  </a>
  <a href="#" className="p-1 rounded-full border-2 border-primary bg-white text-primary">
    <FaInstagram size={20} />
  </a>
  <a href="#" className="p-1 rounded-full border-2 border-primary bg-white text-primary">
    <FaLinkedinIn size={20} />
  </a>
  <a href="#" className="p-1 rounded-full border-2 border-primary bg-white text-primary">
    <FaTiktok size={20} />
  </a>
</div>
        
      </nav>
    </header>
  );
}