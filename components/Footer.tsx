"use client";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0B1542] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <Image
        src="/assets/GroupFooterBg.png"
        alt="footer bg"
        fill
        className="absolute top-0 left-0 object-cover z-0"
      />
      <Image
        src="/assets/VectorGroupFooter.png"
        alt="vector 1"
        width={1097}
        height={384}
        className="absolute top-0 right-0 w-full h-full object-cover z-10"
      />
      <Image
        src="/assets/VectorGroupFooter2.png"
        alt="vector 2"
        width={1097}
        height={384}
        className="absolute bottom-0 left-0 w-full h-full object-cover z-20"
      />

      <div className="relative z-50 flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 text-sm sm:text-base">
        {/* Left side */}
        <div className="lg:w-1/3 xl:w-2/5">
          <Image
            src="/assets/BunonLogo.png"
            alt="Bunon Logo"
            width={100}
            height={40}
            className="mb-4 sm:mb-6"
          />
          <p className="text-white leading-relaxed max-w-sm lg:max-w-md xl:max-w-lg text-sm sm:text-base">
            Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
            Agent. We have started our journey in 1998.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 lg:w-2/3 xl:w-3/5">
          {/* Company */}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">
              Product
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Towels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cottons
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Polyester
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Napery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 min-w-0 sm:min-w-[200px]">
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">
              Get in touch
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Image
                  src="/assets/Location.svg"
                  alt="Location"
                  width={18}
                  height={18}
                  className="mt-1 sm:w-5 sm:h-5 flex-shrink-0"
                />
                <span className="text-sm sm:text-base leading-relaxed">
                  252 Ramarbag, Kutubpur,
                  <br /> Fatullah, Narayanganj-1400,
                  <br /> Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/assets/mail.svg"
                  alt="Mail"
                  width={18}
                  height={18}
                  className="sm:w-5 sm:h-5 flex-shrink-0"
                />
                <span className="text-sm sm:text-base break-all">
                  Contact@Bunon.Com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/assets/call.svg"
                  alt="Call"
                  width={18}
                  height={18}
                  className="sm:w-5 sm:h-5 flex-shrink-0"
                />
                <span className="text-sm sm:text-base">+016504570551</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
