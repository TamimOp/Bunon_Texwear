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
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-[#2A83FF] relative">
            <Image
              src="/assets/AboutS1Image1.jpg"
              alt="main shop"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,129,201,0.12) 0%, rgba(0,51,161,0.75) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Floating Quote Card */}
          <div
            className="absolute top-[-20px] left-[-90px] rounded-xl p-4 shadow-xl z-30 flex flex-col items-start justify-center overflow-hidden"
            style={{
              background: "#025697E3",
              flexShrink: 0,
            }}
          >
            <Image
              src="/assets/quote.svg"
              alt="quote"
              width={24}
              height={24}
              className="mb-2"
            />
            <p className="text-[10px] text-white leading-tight font-medium break-words max-w-full max-h-full">
              We’re Not Just About Moving Things <br />
              From One Place To Another. We <br />
              Analyse Each Customer’s Needs,
              <br /> Anticipate Challenges, Design Options <br /> And Set Up
              Contingency Plans So <br /> They Never Have To Worry About The{" "}
              <br />
              Journey.
            </p>
          </div>

          {/* Floating Right Cards */}
          <div className="absolute bottom-[-32px] right-0 w-[400px] h-[170px] z-20">
            {[
              {
                img: "AboutS1Image2.jpg",
                right: "150px",
                bottom: "0px",
                z: 30,
              },
              {
                img: "AboutS1Image3.jpg",
                right: "40px",
                bottom: "30px",
                z: 20,
              },
              {
                img: "AboutS1Image4.jpg",
                right: "-60px",
                bottom: "60px",
                z: 10,
              },
            ].map((card, i) => (
              <div
                key={i}
                className="absolute rounded-xl overflow-hidden bg-white"
                style={{
                  width: "124px",
                  height: "157.604px",
                  flexShrink: 0,
                  filter: "drop-shadow(3px 4px 15.7px rgba(0, 103, 224, 0.82))",
                  border: "2px solid #2A83FF",
                  right: card.right,
                  bottom: card.bottom,
                  zIndex: card.z,
                }}
              >
                <Image
                  src={`/assets/${card.img}`}
                  alt={`about-float-${i}`}
                  width={124}
                  height={158}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,129,201,0.12) 0%, rgba(0,51,161,0.75) 100%)",
                    pointerEvents: "none",
                  }}
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
