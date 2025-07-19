"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { Variants } from "framer-motion";

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // For Partnering text and logo section
  const partnerRef = useRef(null);
  const partnerControls = useAnimation();
  const partnerInView = useInView(partnerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (partnerInView) {
      partnerControls.start("visible");
    }
  }, [inView, controls, partnerInView, partnerControls]);

  return (
    <>
      {/* Main Hero Section with Background */}
      <section className="relative w-full text-white overflow-hidden min-h-screen">
        {/* Background Vector */}
        <Image
          src="/assets/HeroVectorBg.png"
          alt="Background Vector"
          fill
          className="object-cover opacity-100 -z-10"
        />

        {/* Left Side Ellipse Background - 30% out of screen */}
        <div className="absolute top-1/3 -translate-y-1/2 -left-[10%] w-[400px] sm:w-[500px] lg:w-[575px] h-[400px] sm:h-[500px] lg:h-[580px] flex-shrink-0 rounded-full bg-[#091E6F] blur-[60px] sm:blur-[70px] lg:blur-[86.05px] -z-5"></div>

        <div
          ref={ref}
          className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-20 pt-24 sm:pt-32 md:pt-40 lg:pt-50 pb-8 sm:pb-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start relative z-10"
        >
          {/* Left Content */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={controls}
            className="order-1 lg:order-1"
          >
            <p className="text-[#009BF3] text-lg sm:text-xl lg:text-2xl font-medium">
              Welcome
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-bold leading-tight mt-2">
              <span className="text-[#B4FF63]">Perfection</span> In Every <br />
              <span className="text-white">Stitch</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-[21px] leading-relaxed text-gray-200 max-w-full lg:max-w-xl">
              Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
              Agent. We Have Started Our Journey In 1998. With A Huge Experience
              Of Circular Knit Garments Field, We Are Committed To One Stop
              Sourcing Service To Our Valued Customer.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 text-base sm:text-lg lg:text-xl">
              <Link
                href="#"
                className="text-white px-4 sm:px-6 py-2.5 sm:py-3 font-bold hover:scale-105 transition-transform rounded-[42px] bg-gradient-to-r from-[#0082C9] to-[#0052C4] shadow-[5px_4px_17.5px_0px_rgba(0,130,201,0.51)] text-center"
              >
                View more details
              </Link>
              <Link
                href="#"
                className="text-white px-4 sm:px-6 py-2.5 sm:py-3 font-semibold hover:bg-white hover:text-black transition-all rounded-[42px] border-2 border-white shadow-[5px_4px_17.5px_0px_rgba(255,255,255,0.25)] text-center"
              >
                Buy product
              </Link>
            </div>

            {/* Contact text */}
            <p className="mt-4 sm:mt-6 text-sm">
              Need more info ?{" "}
              <Link href="#" className="underline text-white font-medium">
                contact sales team
              </Link>
            </p>
          </motion.div>

          {/* Right: Gallery */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={controls}
            className="relative flex gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-end order-2 lg:order-2"
          >
            {/* Background Ellipse */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[520px] h-[300px] sm:h-[400px] lg:h-[523px] flex-shrink-0 rounded-full bg-[#007EC8] blur-[60px] sm:blur-[80px] lg:blur-[100px] -z-10"></div>

            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`relative flex-shrink-0 rounded-[8px] sm:rounded-[10px] lg:rounded-[11px] overflow-hidden w-[100px] sm:w-[140px] md:w-[160px] lg:w-[190.779px] h-[260px] sm:h-[360px] md:h-[420px] lg:h-[517.221px] ${
                  num === 2 ? "mt-6 sm:mt-8 lg:mt-12" : ""
                }`}
              >
                <Image
                  src={`/assets/galleryImage${num}.jpg`}
                  alt={`Gallery ${num}`}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(38,147,247,0.18)] to-[rgba(66,128,0,0.19)] z-10"></div>
              </div>
            ))}
          </motion.div>

          {/* Quote Message Card */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={controls}
            className="absolute bottom-5 right-2 sm:bottom-12 sm:left-[50%] lg:bottom-16 lg:left-[48%] sm:translate-x-[-50%] lg:translate-x-0 text-white flex flex-col items-start p-3 sm:p-4 w-[160px] sm:w-[220px] lg:w-[241px] h-[100px] sm:h-[130px] lg:h-[135.498px] flex-shrink-0 rounded-[8px] sm:rounded-[12px] lg:rounded-[13px] bg-[rgba(2,86,151,0.78)] z-20"
          >
            <Image
              src="/assets/quote.svg"
              alt="quote"
              width={25}
              height={18}
              className="mb-1 sm:w-[35px] sm:h-[26px] lg:w-[41px] lg:h-[30px]"
            />
            <p className="text-xs sm:text-sm lg:text-[15px] pl-3 sm:pl-5 lg:pl-6 font-medium">
              Our mission is to <br />
              transform the way you design
            </p>
          </motion.div>
        </div>

        {/* Partnering Text (with animation) */}
        <motion.div
          ref={partnerRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={partnerControls}
          className="flex justify-center lg:justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 pb-8 sm:pb-12 lg:pb-0"
        >
          <h2 className="w-full sm:w-[400px] lg:w-[458px] text-[#AEEE6A] font-light text-xl sm:text-2xl lg:text-[28px] leading-[118.4%] capitalize font-['Poppins'] text-center lg:text-left">
            Partnering with leading global brands.
          </h2>
        </motion.div>
      </section>

      {/* Company Logos Section (with animation) */}
      <motion.section
        variants={fadeUpVariants}
        initial="hidden"
        animate={partnerControls}
        className="py-6 sm:py-8"
      >
        <div className="mx-auto flex flex-col justify-center items-center w-full max-w-[1108px] px-4 sm:px-6 lg:px-[8.362px] py-6 sm:py-8 lg:h-[132px] gap-4 sm:gap-6 lg:gap-[8.362px] flex-shrink-0 rounded-[8px] sm:rounded-[10px] lg:rounded-[11px] bg-white">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
            {[1, 2, 3, 4].map((num) => (
              <Image
                key={num}
                src={`/assets/companyLogo${num}.svg`}
                alt={`Company Logo ${num}`}
                width={80}
                height={28}
                className="object-contain sm:w-[100px] sm:h-[32px] lg:w-[120px] lg:h-[40px]"
              />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
