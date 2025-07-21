"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "framer-motion";

// Animation variants
const contactVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 30,
    scale: 0.98,
    transition: { delay: 0.2 + i * 0.08 },
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 + i * 0.08 },
  }),
};

// Contact Section Component
const FooterContactSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={contactVariants}
      initial="hidden"
      animate={controls}
      className="
        w-full
        mx-auto
        flex flex-col md:flex-row
        items-center md:items-stretch
        justify-between
        rounded-[18px]
        overflow-hidden
        relative
        z-30
        px-4 py-6 md:px-0 md:py-0
        bg-gradient-to-r from-[#0054C2] to-[#091544]
        max-w-full
        md:max-w-[1062px]
        h-auto
        md:h-[327px]
        gap-6 md:gap-0
      "
      style={{
        borderRadius: "18px",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/assets/footerContactBg.png"
          alt="Contact Section BG"
          fill
          className="object-cover"
          style={{ borderRadius: "18px" }}
        />
      </div>
      {/* Left Side Text */}
      <div className="relative z-10 flex-1 flex items-center justify-center md:justify-start md:pl-12 py-2 md:py-0 w-full">
        <span className="text-white text-lg sm:text-xl md:text-[46px] font-semibold max-w-full text-center md:text-left">
          Let&apos;s start your <span className="text-[#AEEE6A]">project</span>
          to be <span className="text-[#AEEE6A]">realize</span>.
        </span>
      </div>
      {/* Right Side Form */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center md:items-end md:justify-center md:pr-12 py-2 md:py-0 w-full">
        <form className="flex flex-col gap-4 w-full max-w-full md:max-w-[350px]">
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-[7px] bg-white px-4 py-3 text-[#091544] text-base outline-none w-full"
          />
          <textarea
            placeholder="Type your message"
            className="rounded-[7px] bg-white px-4 py-3 text-[#091544] text-base outline-none resize-none h-[80px] w-full"
          />
          <button
            type="submit"
            className="rounded-[10px] bg-[#AEEE6A] text-[#091544] font-bold py-3 px-6 shadow-[7px_5px_33.9px_0px_#00817B] transition hover:bg-[#91d95a] w-full"
          >
            Contact Us
          </button>
        </form>
      </div>
    </motion.div>
  );
};

// Footer Component
const Footer = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <>
      <motion.footer
        ref={ref}
        variants={footerVariants}
        initial="hidden"
        animate={controls}
        className="relative bg-[#0B1542] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Background decorations */}
        <Image
          src="/assets/GroupFooterBg.png"
          alt="footer bg"
          width={752}
          height={340}
          className="absolute bottom-35 left-50 object-cover z-0"
        />
        <Image
          src="/assets/VectorGroupFooter.png"
          alt="vector 1"
          width={1097}
          height={384}
          className="absolute top-0 right-0 w-full h-full object-cover z-10"
        />
        <Image
          src="/assets/VectorGroupFooter2.png"
          alt="vector 2"
          width={1066}
          height={348}
          className="absolute top-0 right-0 w-full h-full object-center z-20"
        />

        <div className="relative flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 text-sm sm:text-base">
          {/* Left side */}
          <div className="lg:w-1/3 xl:w-2/5">
            <Image
              src="/assets/BunonLogo.png"
              alt="Bunon Logo"
              width={100}
              height={40}
              className="mb-4 sm:mb-6"
            />
            <p className="text-white leading-relaxed max-w-sm lg:max-w-md xl:max-w-lg text-sm sm:text-base">
              Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
              Agent. We have started our journey in 1998.
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:flex-row lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 lg:w-2/3 xl:w-3/5">
            {/* Company */}
            <motion.div
              custom={0}
              variants={listVariants}
              initial="hidden"
              animate={controls}
              className="flex-1 min-w-0"
            >
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Product */}
            <motion.div
              custom={1}
              variants={listVariants}
              initial="hidden"
              animate={controls}
              className="flex-1 min-w-0"
            >
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">
                Product
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Towels
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Cottons
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Polyester
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Napery
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              custom={2}
              variants={listVariants}
              initial="hidden"
              animate={controls}
              className="flex-1 min-w-0 sm:min-w-[200px]"
            >
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">
                Get in touch
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Image
                    src="/assets/Location.svg"
                    alt="Location"
                    width={18}
                    height={18}
                    className="mt-1 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base leading-relaxed">
                    252 Ramarbag, Kutubpur,
                    <br /> Fatullah, Narayanganj-1400,
                    <br /> Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/assets/mail.svg"
                    alt="Mail"
                    width={18}
                    height={18}
                    className="sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base break-all">
                    Contact@Bunon.Com
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/assets/call.svg"
                    alt="Call"
                    width={18}
                    height={18}
                    className="sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base">+016504570551</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export { FooterContactSection };
export default Footer;
