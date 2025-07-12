"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-6 lg:px-12 py-4 flex justify-between items-center bg-gradient-to-b from-[#001133] to-[#001a3c]">
      {/* Left: Logo */}
      <div>
        <Image
          src="/assets/BunonLogo.png"
          alt="Bunon Logo"
          width={109}
          height={94}
          className="object-contain"
        />
      </div>

      {/* Right: Navigation + Contact */}
      <div className="flex items-center gap-10">
        {/* Navigation Links */}
        <div className="flex items-center gap-10 text-white font-semibold text-2xl">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">Product</Link>
          <Link href="/blog">Blog</Link>
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="flex items-center justify-center text-black font-semibold hover:scale-105 transition-all duration-300 text-lg w-[172px] h-[54.658px] shrink-0 rounded-[10px] bg-[#AEEE6A] shadow-[7px_5px_33.9px_0px_#00817B]"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
