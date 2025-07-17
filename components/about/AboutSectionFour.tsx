"use client";

import Image from "next/image";
import React from "react";

const AboutSectionFour = () => {
  return (
    <section className="relative w-full bg-[#04133b] overflow-hidden text-white px-4 py-16 lg:py-28">
      {/* Background Vector */}
      <Image
        src="/assets/AboutS4VectorBg.png"
        alt="Vector Background"
        fill
        className="object-cover opacity-40 pointer-events-none z-0"
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
        <div className="relative flex-1 max-w-[500px]">
          {/* Experience Badge */}
          <div className="absolute -top-10 -left-6 bg-[#1164a9] text-white px-6 py-4 rounded-xl shadow-lg z-10">
            <div className="text-4xl font-bold flex items-start gap-1">
              <span className="text-[#99db52] text-3xl">“</span>
              25+
            </div>
            <div className="text-sm font-medium">Years Experience</div>
          </div>

          {/* Image with glow */}
          <div className="rounded-2xl overflow-hidden shadow-[0px_0px_30px_rgba(0,0,0,0.4)] border border-white/10">
            <Image
              src="/assets/AboutS4Image.jpg"
              alt="Sampling Image"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
