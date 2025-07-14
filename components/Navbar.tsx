"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/BunonLogo.png"
            alt="Bunon Logo"
            width={109}
            height={94}
            className="object-contain w-16 h-12 sm:w-20 sm:h-14 lg:w-[109px] lg:h-[94px]"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {/* Navigation Links */}
          <div className="flex items-center gap-8 xl:gap-10 text-white font-semibold text-xl xl:text-2xl">
            <Link
              href="/"
              className="hover:text-[#AEEE6A] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#AEEE6A] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/product"
              className="hover:text-[#AEEE6A] transition-colors duration-300"
            >
              Product
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#AEEE6A] transition-colors duration-300"
            >
              Blog
            </Link>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="flex items-center justify-center text-black font-semibold hover:scale-105 transition-all duration-300 text-base xl:text-lg w-[140px] xl:w-[172px] h-[45px] xl:h-[54.658px] shrink-0 rounded-[10px] bg-[#AEEE6A] shadow-[7px_5px_33.9px_0px_#00817B]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-200 z-50 relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 mt-1 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 mt-1 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-br from-[#001133] via-[#001a3c] to-[#002755] z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#AEEE6A]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-[#AEEE6A]/15 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#AEEE6A]/10 rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`flex flex-col justify-center items-center h-full px-8 transition-all duration-700 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Logo in center */}
          <div className="mb-12">
            <Image
              src="/assets/BunonLogo.png"
              alt="Bunon Logo"
              width={150}
              height={120}
              className="object-contain opacity-90"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-8 text-white font-semibold text-3xl mb-12">
            <Link
              href="/"
              className="hover:text-[#AEEE6A] transition-all duration-300 py-3 px-6 rounded-lg hover:bg-white/5 transform hover:scale-105"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#AEEE6A] transition-all duration-300 py-3 px-6 rounded-lg hover:bg-white/5 transform hover:scale-105"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/product"
              className="hover:text-[#AEEE6A] transition-all duration-300 py-3 px-6 rounded-lg hover:bg-white/5 transform hover:scale-105"
              onClick={toggleMenu}
            >
              Product
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#AEEE6A] transition-all duration-300 py-3 px-6 rounded-lg hover:bg-white/5 transform hover:scale-105"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>

          {/* Mobile Contact Button */}
          <Link
            href="/contact"
            className="flex items-center justify-center text-black font-bold hover:scale-110 transition-all duration-300 text-xl w-72 h-16 rounded-2xl bg-[#AEEE6A] shadow-[0px_8px_32px_0px_#00817B] hover:shadow-[0px_12px_40px_0px_#00817B] transform hover:-translate-y-1"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>

          {/* Close hint */}
          <p className="text-white/50 text-sm mt-8">Tap anywhere to close</p>
        </div>

        {/* Close on background tap */}
        <div className="absolute inset-0 -z-10" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
