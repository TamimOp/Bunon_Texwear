"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Background Vector */}
      <Image
        src="/assets/HeroVectorBg.png"
        alt="Background Vector"
        fill
        className="object-cover opacity-100 -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 pt-34 pb-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          <p className="text-white text-lg font-medium">Welcome</p>
          <h1 className="text-5xl font-bold leading-tight mt-2">
            <span className="text-[#B4FF63]">Perfaction</span> In Every <br />
            <span className="text-white">Stitch</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-200 max-w-md">
            Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
            Agent. We Have Started Our Journey In 1998. With A Huge Experience
            Of Circular Knit Garments Field, We Are Committed To One Stop
            Sourcing Service To Our Valued Customer.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-[#3AC0FF] to-[#1675E0] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
            >
              View more details
            </Link>
            <Link
              href="#"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
            >
              Buy product
            </Link>
          </div>

          {/* Contact text */}
          <p className="mt-6 text-sm">
            Need more info ?{" "}
            <Link href="#" className="underline text-white font-medium">
              contact sales team
            </Link>
          </p>
        </div>

        {/* Right: Gallery */}
        <div className="flex gap-4 justify-center md:justify-end">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="rounded-[20px] overflow-hidden w-32 md:w-36 lg:w-40 h-[280px] relative"
            >
              <Image
                src={`/assets/galleryImage${num}.jpg`}
                alt={`Gallery ${num}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Quote Message Card */}
        <div className="absolute bottom-16 left-[50%] md:left-[40%] translate-x-[-50%] md:translate-x-0 bg-[#05457D] text-white rounded-xl p-4 shadow-lg w-[260px] flex items-start gap-3">
          <Image
            src="/assets/quote.svg"
            alt="quote"
            width={20}
            height={20}
            className="mt-1"
          />
          <p className="text-sm font-medium">
            Our mission is to <br />
            transform the way you design
          </p>
        </div>
      </div>

      {/* Company Logos */}
      <div className="mt-20 py-8 px-4 bg-white flex flex-wrap justify-center gap-12">
        {[1, 2, 3, 4].map((num) => (
          <Image
            key={num}
            src={`/assets/companyLogo${num}.svg`}
            alt={`Company Logo ${num}`}
            width={120}
            height={40}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
