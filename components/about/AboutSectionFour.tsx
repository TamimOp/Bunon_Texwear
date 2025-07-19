"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const AboutSectionFour = () => {
  return (
    <section
      className="relative w-full overflow-hidden text-white px-4 py-16 lg:py-28 pb-70 lg:pb-70"
      style={{
        background: "linear-gradient(180deg, #0B1746 0%, #002F6D 100%)",
      }}
    >
      {/* Background Vector */}
      <Image
        src="/assets/BlueVectorBg.png"
        alt="Vector Background"
        fill={false}
        width={506}
        height={86}
        className="object-contain opacity-100 pointer-events-none z-0"
        style={{
          width: "506px",
          height: "150px",
          flexShrink: 0,
          position: "absolute",
          left: "-90px",
          bottom: "210px",
        }}
      />
      <Image
        src="/assets/GreenVectorBg.png"
        alt="Vector Background"
        fill={false}
        width={506}
        height={86}
        className="object-contain opacity-100 pointer-events-none z-0"
        style={{
          width: "506px",
          height: "150px",
          flexShrink: 0,
          position: "absolute",
          right: "-90px",
          top: "90px",
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Our <span className="text-[#99db52]">SAMPLING</span>
            <br />
            POLICY
          </h2>
          <p className="text-[#d8e1f6] text-base lg:text-lg max-w-lg mb-8">
            We Offer Free Pre-Production Sample To Make You Sure That You Get
            The Best Quality.
          </p>

          {/* Tabs */}
          <div className="flex gap-6 mb-6">
            <div className="bg-black text-[#99db52] font-semibold px-4 py-2 rounded-md">
              SAMPLE LEAD TIME
            </div>
            <div className="text-white font-semibold px-2 py-2">
              SAMPLE CHARGES
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-[#0069BA91] text-white p-6 rounded-md max-w-lg relative z-10 shadow-lg">
            <p className="text-sm leading-relaxed">
              Usually We Need 7–15 Days For The Sample Program. It`S Depends On
              Fabric Availability & Print/Embroidery Design (If Any).
            </p>
          </div>
        </motion.div>

        {/* Right Image & Experience Badge */}
        <motion.div
          className="relative flex-1 max-w-[500px] flex flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Experience Badge */}
          <div
            className="absolute md:-top-10 md:-left-6 top-2 left-1 px-5 py-3 rounded-xl shadow-lg z-10 leading-tight"
            style={{ background: "#025697E3" }}
          >
            <div className="text-[55px] font-medium flex items-start gap-1">
              <Image
                src="/assets/quote.svg"
                alt="Quote"
                width={32}
                height={32}
                className="inline-block"
              />
              25+
            </div>
            <div className="text-lg font-medium">Years Experience</div>
          </div>

          {/* Image with drop-shadow */}
          <div
            className="rounded-2xl overflow-hidden border border-white/10 w-full max-w-[95vw] md:max-w-none mt-24 md:mt-0"
            style={{
              width: "450px",
              height: "298px",
              flexShrink: 0,
              filter: "drop-shadow(4px 4px 30.3px rgba(255,255,255,0.78))",
            }}
          >
            <Image
              src="/assets/AboutS4Image.jpg"
              alt="Sampling Image"
              width={450}
              height={298}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 95vw, 450px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSectionFour;
