"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, Variants, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const articles = [
  {
    id: "2",
    img: "/assets/textile2.jpg",
    title: "Style Caring is The New Marketing",
    date: "Oct 25, 2021",
  },
  {
    id: "3",
    img: "/assets/textile3.jpg",
    title: "Style Caring is The New Marketing",
    date: "Oct 25, 2021",
  },
  {
    id: "4",
    img: "/assets/textile4.jpg",
    title: "Style Caring is The New Marketing",
    date: "Oct 25, 2021",
  },
];

const mainBlog = {
  id: "1",
  img: "/assets/textile1.jpg",
  title: "Style Caring is The New Marketing",
  date: "Oct 25, 2021",
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 120, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.22,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Articles = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const [currentMain, setCurrentMain] = useState(mainBlog);
  const [rightCards, setRightCards] = useState(articles);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const handleCardClick = (index: number) => {
    if (rightCards[index].id === currentMain.id) return;
    const newMain = rightCards[index];
    const newRightCards = rightCards.filter((_, i) => i !== index);
    const updatedRightCards = [...newRightCards];
    updatedRightCards.splice(2, 0, currentMain);
    setCurrentMain(newMain);
    setRightCards(updatedRightCards.slice(0, 3));
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="py-20 px-4 md:px-8 pb-90 flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #091442 0%, #002F6D 100%)",
      }}
    >
      <div className="max-w-screen-2xl w-full mx-auto">
        {/* Heading */}
        <p className="text-[#009BF3] text-2xl font-semibold">New Blog</p>
        <h2 className="text-4xl md:text-[65px] font-bold text-white mt-2 leading-snug">
          Articles About <br />
          <span className="text-[#AEEE6A]">Garment</span> Textile
        </h2>

        {/* Main Blog Container */}
        <div className="relative mx-auto mt-16 flex flex-col md:flex-row rounded-[56px] bg-[#EDE9E6] overflow-visible w-full px-4 py-4 md:py-0 md:px-0 md:w-[1200px] h-auto md:h-[725px]">
          {/* Left Main Blog Card */}
          <motion.div
            key={currentMain.id}
            layout
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.97 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between p-4 md:p-5 rounded-[27px] bg-[#1A1A1A] overflow-hidden relative z-10 w-full max-w-full md:w-[579px] h-auto md:h-[559px] mt-[20px] md:mt-[60px] ml-0 md:ml-[48px] flex-shrink-0"
          >
            <div className="mx-auto relative overflow-hidden w-full md:w-[533px] h-[200px] md:h-[300px] rounded-t-[24px] bg-[rgba(7,26,37,0.18)]">
              <Image
                src={currentMain.img}
                alt="Main blog"
                fill
                className="object-cover rounded-t-[24px]"
                sizes="(max-width: 768px) 100vw, 533px"
              />
            </div>
            <div className="p-4 md:p-8 flex flex-col justify-between flex-1">
              <p className="text-green-400 text-base mb-2">
                Category • 8 Min Read
              </p>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-4">
                {currentMain.title}
              </h3>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src="/assets/dp.jpg"
                  alt="Author"
                  width={40}
                  height={40}
                  className="rounded-full border border-white object-cover object-top w-[40px] h-[40px] md:w-[56px] md:h-[53.621px] flex-shrink-0"
                />
                <div className="text-white text-base">
                  <p className="font-semibold">Mr. Sheikh Saadi</p>
                  <p className="text-gray-400 text-xs">{currentMain.date}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Article Cards */}
          <div className="relative w-full flex flex-col gap-6 z-20 pointer-events-auto mt-8 md:mt-0">
            <AnimatePresence initial={false}>
              {rightCards.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  custom={index}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  exit={{ opacity: 0, y: 60, scale: 0.97 }}
                  variants={cardVariants}
                  onClick={() => handleCardClick(index)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={false}
                  className={`
                    flex flex-col md:flex-row items-center w-full
                    md:absolute
                    ${index === 0 ? "md:right-[90px] md:top-[80px]" : ""}
                    ${index === 1 ? "md:right-[50px] md:top-[50px]" : ""}
                    ${index === 2 ? "md:right-[0px] md:top-[20px]" : ""}
                    rounded-[15px] px-3 py-3
                    cursor-pointer
                    transition-all
                    hover:ring-0 hover:border-transparent hover:bg-white/80 hover:shadow-xl hover:scale-105
                  `}
                  style={{ position: "relative", background: "transparent" }}
                >
                  {/* Card Image */}
                  <div className="relative flex-shrink-0 w-full h-[120px] md:w-[223px] md:h-[153px] rounded-[15px] border-4 border-[#2D69D1] shadow-[4px_6px_24.9px_4px_rgba(0,0,0,0.5)] overflow-hidden bg-cover bg-center">
                    <Image
                      src={item.img}
                      alt={`card-${index}`}
                      fill
                      className="object-cover rounded-[15px]"
                      sizes="(max-width: 768px) 100vw, 223px"
                    />
                  </div>
                  {/* Card Text */}
                  <div className="mt-3 md:mt-0 ml-0 md:ml-5 w-full md:w-[280px]">
                    <p className="text-[14px] md:text-[19px] text-[#888888] mb-1">
                      <span className="text-[#0055C4] font-normal text-[14px] md:text-[19px]">
                        Category
                      </span>{" "}
                      • 8 Min Read
                    </p>
                    <h4 className="text-base md:text-2xl font-bold text-[#313131] leading-tight">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <Image
                        src="/assets/dp.jpg"
                        alt="Author"
                        width={24}
                        height={24}
                        className="rounded-full border border-white object-cover object-top w-[24px] h-[24px] md:w-[33px] md:h-[32.173px] flex-shrink-0"
                      />
                      <p className="text-[11px] md:text-[14px] text-[#5D5D5D] font-normal">
                        Mr. Sheikh Saadi
                      </p>
                      <span className="text-[10px] md:text-[11px] text-[#747474]">
                        • {item.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Articles;
