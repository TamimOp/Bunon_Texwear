"use client";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0B1542] text-white px-6 md:px-20 py-16 overflow-hidden">
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
        width={100}
        height={100}
        className="absolute top-0 right-0 opacity-50"
      />
      <Image
        src="/assets/VectorGroupFooter2.png"
        alt="vector 2"
        width={100}
        height={100}
        className="absolute bottom-0 left-0 opacity-50"
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12 text-sm md:text-base">
        {/* Left side */}
        <div className="md:w-1/3">
          <Image
            src="/assets/BunonLogo.png"
            alt="Bunon Logo"
            width={100}
            height={40}
            className="mb-4"
          />
          <p className="text-white leading-relaxed max-w-sm">
            Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
            Agent. We have started our journey in 1998.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">Towels</a>
              </li>
              <li>
                <a href="#">Cottons</a>
              </li>
              <li>
                <a href="#">Polyester</a>
              </li>
              <li>
                <a href="#">Napery</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get in touch</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Image
                  src="/assets/Location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                <span>
                  252 Ramarbag, Kutubpur,
                  <br /> Fatullah, Narayanganj-1400,
                  <br /> Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/assets/Mail.svg"
                  alt="Mail"
                  width={20}
                  height={20}
                />
                <span>Contact@Bunon.Com</span>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/assets/Call.svg"
                  alt="Call"
                  width={20}
                  height={20}
                />
                <span>+016504570551</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
