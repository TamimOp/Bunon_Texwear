"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const AboutSectionOne = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-full pt-16 pb-10 md:pt-30 md:pb-20">
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

      <div className="relative z-30 max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            <span className="text-[#B4FF63]">About</span>{" "}
            <span className="text-white">Us :</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-xl text-white/90">
            We Are Specialized In Circular Knit Garments Field. From Basic To
            Fashion Item We Do Various Type Product With Different Type Of Yarn
            Composition & Fabric Construction.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 flex-wrap">
            <button className="bg-gradient-to-r from-[#0F92FF] to-[#2AE1FF] text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
              View more details
            </button>
            <button className="border border-white text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full">
              Buy product
            </button>
          </div>
        </div>

        {/* Right Image Group */}
        <div className="relative flex-1 w-full max-w-xl min-h-[250px] md:min-h-[450px]">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-[#2A83FF] relative w-full h-[180px] md:h-[400px]">
            <Image
              src="/assets/AboutS1Image1.jpg"
              alt="main shop"
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 600px"
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
            className={`
              absolute
              left-2 md:left-[-90px]
              top-[-20px] md:top-[-20px]
              rounded-xl p-3 md:p-4 shadow-xl z-30
              flex flex-col items-start justify-center overflow-hidden
              w-[160px] md:w-auto
              max-w-[90vw] md:max-w-none
            `}
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
            <p className="text-[11px] md:text-[10px] text-white leading-tight font-medium break-words max-w-full max-h-full">
              <span className="block md:hidden">
                We’re Not Just About Moving Things. We analyse your needs and
                set up contingency plans so you never have to worry.
              </span>
              <span className="hidden md:block">
                We’re Not Just About Moving Things <br />
                From One Place To Another. We <br />
                Analyse Each Customer’s Needs,
                <br /> Anticipate Challenges, Design Options <br /> And Set Up
                Contingency Plans So <br /> They Never Have To Worry About The{" "}
                <br />
                Journey.
              </span>
            </p>
          </div>

          {/* Floating Right Cards */}
          <div className="absolute bottom-[-16px] md:bottom-[-32px] right-0 w-full md:w-[400px] h-[120px] md:h-[170px] z-20 flex md:block justify-center gap-2">
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
                className={`rounded-xl overflow-hidden bg-white ${
                  isMobile ? "static" : "absolute"
                } ${i === 0 ? "static md:absolute" : ""}`}
                style={{
                  width: isMobile ? "90px" : "124px",
                  height: isMobile ? "110px" : "157.604px",
                  flexShrink: 0,
                  filter: "drop-shadow(3px 4px 15.7px rgba(0, 103, 224, 0.82))",
                  border: "2px solid #2A83FF",
                  right: isMobile ? undefined : card.right,
                  bottom: isMobile ? undefined : card.bottom,
                  zIndex: card.z,
                  position: isMobile ? "static" : "absolute",
                  marginRight: isMobile ? "8px" : undefined,
                }}
              >
                <Image
                  src={`/assets/${card.img}`}
                  alt={`about-float-${i}`}
                  width={124}
                  height={158}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 80vw, 124px"
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
