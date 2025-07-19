"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const AboutSectionOne = () => {
  const [isMobile, setIsMobile] = useState(false);

  const initialMain = {
    img: "/assets/AboutS1Image1.jpg",
    alt: "main shop",
  };
  const initialCards = [
    {
      img: "/assets/AboutS1Image2.jpg",
      alt: "float 1",
      right: "150px",
      bottom: "0px",
      z: 30,
    },
    {
      img: "/assets/AboutS1Image3.jpg",
      alt: "float 2",
      right: "40px",
      bottom: "30px",
      z: 20,
    },
    {
      img: "/assets/AboutS1Image4.jpg",
      alt: "float 3",
      right: "-60px",
      bottom: "60px",
      z: 10,
    },
  ];

  const [mainImage, setMainImage] = useState(initialMain);
  const [floatingCards, setFloatingCards] = useState(initialCards);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index: number) => {
    const clickedCard = floatingCards[index];
    setMainImage({ img: clickedCard.img, alt: clickedCard.alt });
    const newCards = [...floatingCards];
    newCards[index] = {
      ...mainImage,
      right: clickedCard.right,
      bottom: clickedCard.bottom,
      z: clickedCard.z,
    };
    setFloatingCards(newCards);
  };

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

      <motion.div className="relative z-30 max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-white"
          initial={{ opacity: 0, x: -80, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
            type: "tween",
          }}
        >
          <h2 className="text-3xl md:text-[65px] font-semibold leading-snug">
            <span className="text-[#AEEE6A]">About</span>{" "}
            <span className="text-white">Us :</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-[21px] leading-relaxed max-w-xl text-white/90">
            We Are Specialized In Circular Knit Garments Field. From Basic To
            Fashion Item We Do Various Type Product With Different Type Of Yarn
            Composition & Fabric Construction.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 flex-wrap">
            <button
              className="text-white font-semibold px-4 md:px-6 py-2 md:py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                borderRadius: "42px",
                background: "linear-gradient(90deg, #0082C9 0%, #0052C4 100%)",
                boxShadow: "5px 4px 17.5px 0px rgba(0, 130, 201, 0.51)",
              }}
            >
              View more details
            </button>
            <button className="border border-white text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full">
              Buy product
            </button>
          </div>
        </motion.div>

        {/* Right Image Group */}
        <motion.div
          className="relative flex-1 w-full max-w-xl min-h-[250px] md:min-h-[450px]"
          initial={{ opacity: 0, x: 80, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
            type: "tween",
          }}
        >
          {/* Main Image */}
          <motion.div
            key={mainImage.img}
            layout
            layoutId={`about-main-card-${mainImage.img}`}
            className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-[#2A83FF] relative w-full h-[180px] md:h-[400px]"
          >
            <Image
              src={mainImage.img}
              alt={mainImage.alt}
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
          </motion.div>

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
            <p className="text-[11px] md:text-sm text-white leading-tight font-medium break-words max-w-full max-h-full">
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
            <AnimatePresence initial={false}>
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.img}
                  layout
                  layoutId={`about-main-card-${card.img}`}
                  initial={{ opacity: 0, y: 60, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 60, scale: 0.97 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-xl overflow-hidden bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    isMobile ? "static" : "absolute"
                  } ${i === 0 ? "static md:absolute" : ""} cursor-pointer`}
                  style={{
                    width: isMobile ? "90px" : "124px",
                    height: isMobile ? "110px" : "157.604px",
                    flexShrink: 0,
                    filter:
                      "drop-shadow(3px 4px 15.7px rgba(0, 103, 224, 0.82))",
                    border: "2px solid #2A83FF",
                    right: isMobile ? undefined : card.right,
                    bottom: isMobile ? undefined : card.bottom,
                    zIndex: card.z,
                    position: isMobile ? "static" : "absolute",
                    marginRight: isMobile ? "8px" : undefined,
                  }}
                  onClick={() => handleCardClick(i)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={false}
                >
                  <Image
                    src={card.img}
                    alt={card.alt}
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSectionOne;
