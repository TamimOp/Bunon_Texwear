"use client";

import Image from "next/image";

export default function AboutSectionTwo() {
  return (
    <section
      className="relative px-6 py-16 lg:py-40 lg:px-20 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0B1746 0%, #070F2D 55.95%, #000 100%)",
      }}
    >
      {/* Background Vectors */}
      <Image
        src="/assets/GreenVectorBg.png"
        alt="Green Vector"
        width={506}
        height={150}
        className="object-contain pointer-events-none absolute left-0 top-0 z-0"
        style={{
          width: "506px",
          height: "150px",
          left: "-90px",
          bottom: "210px",
          position: "absolute",
        }}
      />
      <Image
        src="/assets/BlueVectorBg.png"
        alt="Blue Vector"
        width={506}
        height={150}
        className="object-contain pointer-events-none absolute right-0 top-0 z-0"
        style={{
          width: "506px",
          height: "150px",
          right: "-90px",
          top: "90px",
          position: "absolute",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Side - Image with floating quote */}
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
          <div
            className="rounded-lg overflow-hidden shadow-2xl relative"
            style={{
              width: "450px",
              height: "298px",
              flexShrink: 0,
              filter: "drop-shadow(4px 4px 30.3px rgba(255,255,255,0.78))",
            }}
          >
            <Image
              src="/assets/AboutS2Image.jpg"
              alt="About"
              className="object-cover w-full h-full"
              width={450}
              height={298}
            />
            {/* Quote Box */}
            <div
              className="absolute top-4 left-4 rounded-md w-60 shadow-lg text-white p-4 pr-6"
              style={{ background: "#025697C7" }}
            >
              <div className="flex gap-2 items-start mb-2">
                <Image
                  src="/assets/quote.svg"
                  alt="Quote"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm font-medium leading-snug">
                Our mission is to <br /> transform the way you <br /> design
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Our <span className="text-[#98E263]">Journey</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/90">
            Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
            Agent. We Have Started Our Journey In 1998. With A Huge Experience
            Of Circular Knit Garments Field, We Are Committed To One Stop
            Sourcing Service To Our Valued Customer.
          </p>
        </div>
      </div>

      {/* Bottom White Card */}
      <div className="mt-16 relative z-10">
        <div className="bg-white text-[#0B0F2F] rounded-xl shadow-xl px-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-6 max-w-5xl mx-auto text-center sm:text-left">
          {/* Box 1 */}
          <div className="flex flex-row items-center gap-3">
            <p className="text-4xl font-bold text-[#005B9E]">500+</p>
            <p className="text-lg font-medium">Satisfied Clients</p>
          </div>
          {/* Box 2 */}
          <div className="flex flex-row items-center gap-3">
            <p className="text-4xl font-bold text-[#005B9E]">900</p>
            <p className="text-lg font-medium">Projects Completed</p>
          </div>
          {/* Box 3 */}
          <div className="flex flex-row items-center gap-3">
            <p className="text-4xl font-bold text-[#005B9E]">68</p>
            <p className="text-lg font-medium">Accolades Earned</p>
          </div>
        </div>
      </div>
    </section>
  );
}
