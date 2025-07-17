"use client";

import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <section className="relative w-full h-full pt-30 pb-20">
      {/* Main background image */}
      <Image
        src="/assets/AboutS1Bg.jpg"
        alt="about bg"
        fill
        className="absolute w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "#091645D9" }}
      />
      {/* Vector background image (on top of overlay) */}
      <Image
        src="/assets/HeroVectorBg.png"
        alt="vector bg"
        fill
        className="absolute w-full h-full object-cover z-20"
      />

      <div className="relative z-30 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="flex-1 text-white">
          <h2 className="text-5xl font-bold leading-snug">
            <span className="text-[#B4FF63]">About</span>{" "}
            <span className="text-white">Us :</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed max-w-xl text-white/90">
            We Are Specialized In Circular Knit Garments Field. From Basic To
            Fashion Item We Do Various Type Product With Different Type Of Yarn
            Composition & Fabric Construction.
          </p>
          <div className="mt-8 flex gap-6 flex-wrap">
            <button className="bg-gradient-to-r from-[#0F92FF] to-[#2AE1FF] text-white font-semibold px-6 py-3 rounded-full shadow-lg">
              View more details
            </button>
            <button className="border border-white text-white font-semibold px-6 py-3 rounded-full">
              Buy product
            </button>
          </div>
        </div>

        {/* Right Image Group */}
        <div className="relative flex-1 w-full max-w-xl min-h-[450px]">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-[#2A83FF]">
            <Image
              src="/assets/AboutS1Image1.jpg"
              alt="main shop"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Quote Card */}
          <div className="absolute top-[-30px] left-[30px] bg-[#0070C0] text-white rounded-xl p-4 w-72 shadow-xl z-30">
            <div className="flex gap-2 items-start mb-2">
              <Image
                src="/assets/quote.svg"
                alt="quote"
                width={20}
                height={20}
              />
              <p className="text-sm leading-snug font-medium">
                We’re Not Just About Moving Things From One Place To Another. We
                Analyse Each Customer’s Needs, Anticipate Challenges, Design
                Options And Set Up Contingency Plans So They Never Have To Worry
                About The Journey.
              </p>
            </div>
          </div>

          {/* Floating Right Cards */}
          <div className="absolute -bottom-8 right-0 flex flex-col gap-4 items-end z-20">
            {[
              "AboutS1Image2.jpg",
              "AboutS1Image3.jpg",
              "AboutS1Image4.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className={`w-[160px] h-[120px] rounded-xl overflow-hidden ring-2 ring-[#2A83FF] bg-white shadow-xl`}
              >
                <Image
                  src={`/assets/${img}`}
                  alt={`about-float-${i}`}
                  width={160}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
