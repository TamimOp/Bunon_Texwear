"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSectionTwo() {
  return (
    <motion.section
      className="relative px-4 sm:px-6 py-10 sm:py-16 lg:py-40 lg:px-20 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0B1746 0%, #070F2D 55.95%, #000 100%)",
      }}
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 60,
        damping: 18,
      }}
    >
      {/* Background Vectors */}
      <Image
        src="/assets/GreenVectorBg.png"
        alt="Green Vector"
        width={506}
        height={150}
        className="object-contain pointer-events-none absolute left-0 z-0"
        style={{
          width: "506px",
          height: "150px",
          left: "-90px",
          top: "380px",
          position: "absolute",
        }}
      />
      <Image
        src="/assets/BlueVectorBg.png"
        alt="Blue Vector"
        width={506}
        height={150}
        className="object-contain pointer-events-none absolute right-0 z-0"
        style={{
          width: "506px",
          height: "150px",
          right: "-20px",
          top: "460px",
          position: "absolute",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Left Side - Image with floating quote */}
        <motion.div
          className="relative w-full flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -60, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="rounded-lg overflow-visible shadow-2xl relative"
            style={{
              width: "450px",
              height: "298px",
              flexShrink: 0,
              filter: "drop-shadow(4px 4px 30.3px rgba(255,255,255,0.78))",
              maxWidth: "100%",
            }}
          >
            <Image
              src="/assets/AboutS2Image.jpg"
              alt="About"
              className="object-cover w-full h-full rounded-[8px]"
              width={450}
              height={298}
              sizes="(max-width: 600px) 100vw, 450px"
            />
            {/* Quote Box */}
            <motion.div
              className="absolute bottom-4 left-0 lg:-left-10 rounded-md w-60 max-w-[90vw] shadow-lg text-white p-4 pr-6"
              style={{ background: "#025697C7" }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex gap-2 items-start mb-2">
                <Image
                  src="/assets/quote.svg"
                  alt="Quote"
                  width={41}
                  height={30}
                />
              </div>
              <p className="text-[15px] pl-4 pb-2 font-medium leading-snug">
                Our mission is to <br /> transform the way you <br /> design
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="flex flex-col justify-center mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="text-4xl md:text-[54px] font-normal mb-6">
            Our <span className="text-[#98E263]">Journey</span>
          </h2>
          <p className="text-[18px] md:text-[21px] leading-relaxed text-white/90">
            Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
            Agent. We Have Started Our Journey In 1998. With A Huge Experience
            Of Circular Knit Garments Field, We Are Committed To One Stop
            Sourcing Service To Our Valued Customer.
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom White Card */}
      <motion.div
        className="mt-10 md:mt-16 relative z-10"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="bg-white text-[#0B0F2F] rounded-xl shadow-xl px-4 sm:px-10 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-6 max-w-5xl mx-auto text-center sm:text-left">
          {/* Box 1 */}
          <div className="flex flex-row items-center gap-3">
            <p className="text-[40px] sm:text-[57px] font-semibold text-[#0059C4]">
              500+
            </p>
            <p className="text-[17px] sm:text-[21px] leading-tight text-[#0B1746] font-medium">
              Satisfied <br /> Clients
            </p>
          </div>
          {/* Box 2 */}
          <div className="flex flex-row items-center gap-3">
            <p className="text-[40px] sm:text-[57px] font-semibold text-[#0059C4]">
              900
            </p>
            <p className="text-[17px] sm:text-[21px] leading-tight text-[#0B1746] font-medium">
              Projects <br /> Completed
            </p>
          </div>
          {/* Box 3 */}
          <div className="flex flex-row items-center gap-3">
            <p className="text-[40px] sm:text-[57px] font-semibold text-[#0059C4]">
              68
            </p>
            <p className="text-[17px] sm:text-[21px] leading-tight text-[#0B1746] font-medium">
              Accolades <br /> Earned
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
