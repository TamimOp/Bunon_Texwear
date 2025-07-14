"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Main Hero Section with Background */}
      <section className="relative w-full text-white overflow-hidden">
        {/* Background Vector */}
        <Image
          src="/assets/HeroVectorBg.png"
          alt="Background Vector"
          fill
          className="object-cover opacity-100 -z-10"
        />

        {/* Left Side Ellipse Background - 30% out of screen */}
        <div className="absolute top-1/3 -translate-y-1/2 -left-[10%] w-[575px] h-[580px] flex-shrink-0 rounded-[580px] bg-[#091E6F] blur-[86.05px] -z-5"></div>

        <div className="max-w-7xl mx-auto px-6 pt-50 pb-16 grid md:grid-cols-2 gap-12 items-start relative z-10">
          {/* Left Content */}
          <div>
            <p className="text-[#009BF3] text-2xl font-medium">Welcome</p>
            <h1 className="text-[65px] font-bold leading-tight mt-2">
              <span className="text-[#B4FF63]">Perfection</span> In Every <br />
              <span className="text-white">Stitch</span>
            </h1>

            <p className="mt-6 text-[21px] leading-relaxed text-gray-200 max-w-xl">
              Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
              Agent. We Have Started Our Journey In 1998. With A Huge Experience
              Of Circular Knit Garments Field, We Are Committed To One Stop
              Sourcing Service To Our Valued Customer.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 text-xl">
              <Link
                href="#"
                className="text-white px-6 py-3 font-bold hover:scale-105 transition-transform rounded-[42px] bg-gradient-to-r from-[#0082C9] to-[#0052C4] shadow-[5px_4px_17.5px_0px_rgba(0,130,201,0.51)]"
              >
                View more details
              </Link>
              <Link
                href="#"
                className="text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition-all rounded-[42px] border-2 border-white shadow-[5px_4px_17.5px_0px_rgba(255,255,255,0.25)]"
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
          <div className="relative flex gap-4 justify-center md:justify-end">
            {/* Background Ellipse */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[523px] flex-shrink-0 rounded-[523px] bg-[#007EC8] blur-[100px] -z-10"></div>

            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`relative flex-shrink-0 rounded-[11px] overflow-hidden w-[190.779px] h-[517.221px] ${
                  num === 2 ? "mt-12" : ""
                }`}
              >
                <Image
                  src={`/assets/galleryImage${num}.jpg`}
                  alt={`Gallery ${num}`}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(38,147,247,0.18)] to-[rgba(66,128,0,0.19)] z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnering Text */}
        <div className="flex justify-start max-w-7xl mx-auto px-6">
          <h2 className="w-[458px] text-[#AEEE6A] font-light text-[28px] leading-[118.4%] capitalize font-['Poppins']">
            Partnering with leading global brands.
          </h2>
        </div>
      </section>

      {/* Company Logos Section - No Background */}
      <section className="py-8">
        <div className="mx-auto flex flex-col justify-center items-center w-[1108px] h-[132px] px-[8.362px] gap-[8.362px] flex-shrink-0 rounded-[11px] bg-white">
          <div className="flex flex-wrap justify-center gap-12">
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
        </div>
      </section>
    </>
  );
};

export default Hero;
