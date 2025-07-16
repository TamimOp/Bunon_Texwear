"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "framer-motion";

const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60,
    scale: 0.95,
    rotate: i % 2 === 0 ? -4 : 4,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.2 + i * 0.15,
    },
  }),
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const cards = [
    {
      number: "01",
      title: (
        <>
          Modern Process
          <br />
          and Factory
        </>
      ),
      desc: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut
          elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
          leo.
        </>
      ),
    },
    {
      number: "02",
      title: (
        <>
          Modern Process
          <br />
          and Factory
        </>
      ),
      desc: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut
          elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
          leo.
        </>
      ),
    },
    {
      number: "03",
      title: (
        <>
          Modern Process
          <br />
          and Factory
        </>
      ),
      desc: (
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut
          elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
          leo.
        </>
      ),
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      className="text-white px-6 md:px-20 py-20 bg-gradient-to-b from-black via-[#04081B] to-[#091442] "
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div variants={headerVariants} className="mb-12">
          <p className="text-[#009BF3] text-[23px] uppercase font-medium tracking-wide mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-[54px] font-semibold max-w-3xl leading-tight">
            Textiles That Are{" "}
            <span className="text-[#AEEE6A]">
              Feather-
              <br />
              Light
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              className="bg-[#03314B] rounded-xl p-6 md:px-8 transition hover:scale-105 duration-300"
            >
              <h3 className="text-[#AEEE6A] text-[61px] font-bold">
                {card.number}
              </h3>
              <h4 className="text-[33px] font-semibold text-white leading-tight mb-2">
                {card.title}
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
