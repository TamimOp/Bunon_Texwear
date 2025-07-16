"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -80, rotate: -6 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.2 },
  },
};

const statBoxVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 40,
    scale: 0.9,
    rotate: i % 2 === 0 ? -8 : 8,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.5 + i * 0.18,
    },
  }),
};

const Review = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      className="bg-review-gradient text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center px-4 sm:px-8 lg:px-16">
        {/* Left Side */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={controls}
          className="relative w-full max-w-[485px] h-[400px] sm:h-[500px] lg:w-[485px] lg:h-[670px] rounded-xl overflow-visible flex-shrink-0 mx-auto lg:mx-0"
        >
          {/* Background Image */}
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/assets/galleryImage1.jpg"
              alt="Review Visual"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Play Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -30 }}
            animate={controls}
            variants={{
              visible: {
                scale: 1,
                opacity: 1,
                rotate: 0,
                transition: {
                  duration: 0.7,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                },
              },
            }}
            className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 w-[80px] h-[75px] sm:w-[120px] sm:h-[110px] lg:w-[157px] lg:h-[146px] z-10"
          >
            <Image
              src="/assets/playButton.svg"
              alt="Play Button"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Quote Card – Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.7, delay: 0.8, ease: "easeOut" },
              },
            }}
            className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 text-white flex items-start gap-1 sm:gap-2 p-2 sm:p-3 lg:p-4 w-[120px] sm:w-[180px] lg:w-[241px] h-[80px] sm:h-[110px] lg:h-[135.498px] flex-shrink-0 rounded-[6px] sm:rounded-[10px] lg:rounded-[13px] bg-[rgba(2,86,151,0.78)] z-20"
          >
            <Image
              src="/assets/quote.svg"
              alt="quote"
              width={20}
              height={15}
              className="sm:w-[30px] sm:h-[22px] lg:w-[41px] lg:h-[30px] flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-sm sm:text-lg lg:text-[55px] font-bold">
                25+
              </h3>
              <p className="text-xs sm:text-sm lg:text-[15px] font-medium">
                Years Experience
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={controls}
          className="lg:-ml-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[54px] font-bold leading-snug">
            Do Well, <span className="text-[#B4FF63]">Live Well</span> & Dress
            <br className="hidden sm:block" /> Really Well
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-[21px] text-gray-200">
            Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
            Agent. We Have Started Our Journey In 1998.
          </p>

          {/* Stats Boxes */}
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            {[
              { value: "4.7", label: "customer review" },
              { value: "2B+", label: "Company Class" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={statBoxVariants}
                initial="hidden"
                animate={controls}
                className="border border-white rounded-xl p-2 sm:p-3 w-full sm:w-[200px] lg:w-[281px] h-[180px] sm:h-[200px] lg:h-[248px] flex-shrink-0 text-center flex flex-col justify-center overflow-hidden"
              >
                <h3 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#B4FF63]">
                  {stat.value}
                </h3>
                <p className="font-semibold text-lg sm:text-xl lg:text-2xl mt-1">
                  {stat.label}
                </p>
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill="#FFD700"
                      width={16}
                      height={16}
                      className="sm:w-[20px] sm:h-[20px] lg:w-[23.745px] lg:h-[23.145px] text-[#FFD700] flex-shrink-0"
                    />
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs mt-2 text-gray-300 leading-tight px-1">
                  Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter &
                  Buying Agent. We Have Started Our Journey In 1998.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Review;
