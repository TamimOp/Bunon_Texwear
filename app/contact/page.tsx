"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <motion.section
      className="w-full text-white py-40 pb-60 px-4 md:px-10"
      style={{
        background:
          "linear-gradient(180deg, #0B1746 0%, #070F2D 55.95%, #000 100%)",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title on top */}
      <motion.h2
        className="text-[65px] font-semibold text-center mb-2"
        variants={fadeUp}
      >
        Get in <span className="text-[#9BF84F]">Touch</span>
      </motion.h2>
      <motion.p
        className="text-center mt-2 text-[21px] text-[#F9FAFB] mb-10"
        variants={fadeUp}
      >
        Fill Out The Form Below, And We’ll Get Back To You As Early As Possible
      </motion.p>
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20"
        variants={containerVariants}
      >
        {/* Left Illustration */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center"
          variants={fadeUp}
        >
          <Image
            src="/assets/Deal.png"
            alt="Deal"
            width={500}
            height={400}
            className="w-[500px] max-w-full object-contain"
          />
        </motion.div>

        {/* Right Form Box */}
        <motion.div
          className="w-full md:w-1/2 bg-[#06215D] p-8 rounded-xl shadow-lg"
          variants={fadeUp}
        >
          {/* Form */}
          <motion.form className="mt-8 space-y-6" variants={containerVariants}>
            <motion.div variants={fadeUp}>
              <label className="block text-[#9BF84F] text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter service name"
                className="w-full bg-[#01356A] text-white px-4 py-3 rounded-md placeholder:text-white focus:outline-none"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="block text-[#9BF84F] text-sm font-semibold mb-1">
                Number
              </label>
              <input
                type="text"
                placeholder="Enter service name"
                className="w-full bg-[#01356A] text-white px-4 py-3 rounded-md placeholder:text-white focus:outline-none"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="block text-[#9BF84F] text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Type your message here..."
                rows={4}
                className="w-full bg-[#01356A] text-white px-4 py-3 rounded-md placeholder:text-white focus:outline-none resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div className="flex justify-start" variants={fadeUp}>
              <button
                type="submit"
                className="bg-[#9BF84F] text-black px-8 py-3 rounded-md font-semibold shadow-[0_0_10px_#9BF84F] hover:shadow-[0_0_20px_#9BF84F] transition-all duration-300"
              >
                SUBMIT
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
