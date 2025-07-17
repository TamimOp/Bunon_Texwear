"use client";

import Image from "next/image";
import React from "react";

const AboutSectionFour = () => {
  return (
    <section
      className="relative w-full overflow-hidden text-white px-4 py-16 lg:py-28 lg:pb-70"
      style={{
        background: "linear-gradient(180deg, #0B1746 0%, #002F6D 100%)",
      }}
    >
      {/* Background Vector */}
      <Image
        src="/assets/AboutS4VectorBg.png"
        alt="Vector Background"
        fill={false}
        width={206}
        height={46}
        className="object-cover opacity-40 pointer-events-none z-0"
        style={{
          width: "206px",
          height: "46px",
          transform: "rotate(-37.195deg)",
          flexShrink: 0,
          position: "absolute",
          left: "2rem",
          top: "2rem",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
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
          <div className="bg-[#1164a9] text-white p-6 rounded-md max-w-lg relative z-10 shadow-lg">
            <p className="text-sm leading-relaxed">
              Usually We Need 7–15 Days For The Sample Program. It`S Depends On
              Fabric Availability & Print/Embroidery Design (If Any).
            </p>
          </div>
        </div>

        {/* Right Image & Experience Badge */}
        <div className="relative flex-1 max-w-[500px] flex justify-center items-center">
          {/* Experience Badge */}
          <div
            className="absolute -top-10 -left-6 px-3 py-3 rounded-xl shadow-lg z-10"
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
            className="rounded-2xl overflow-hidden border border-white/10"
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
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
