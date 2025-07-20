"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogs = [
  {
    img: "/assets/textile1.jpg",
    author: "Jhon",
    date: "Oct 25, 2021",
    title: "Style Caring is The New Marketing",
    desc: "We are specialized in circular knit garments field. From basic to fashion item we do various type product with different type of yarn composition & fabric construction.",
  },
  {
    img: "/assets/textile2.jpg",
    author: "Sarah",
    date: "Nov 10, 2021",
    title: "Eco-Friendly Fabrics for Future",
    desc: "Discover how sustainable materials are shaping the textile industry. We focus on eco-friendly production and innovative design for a better tomorrow.",
  },
  {
    img: "/assets/textile4.jpg",
    author: "Mike",
    date: "Dec 5, 2021",
    title: "Trends in todays Modern Textile",
    desc: "Explore the latest trends in textile technology and fashion. Our team brings you insights from the world of modern garment manufacturing and modern innovations.",
  },
];

const BlogSectionOne = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % blogs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion setup
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen text-white overflow-hidden py-35 px-4 lg:px-20"
    >
      {/* Background Vector */}
      <Image
        src="/assets/HeroVectorBg.png"
        alt="Background Vector"
        fill
        className="object-cover opacity-100 -z-10"
      />
      {/* Left Side Ellipse Background */}
      <div className="absolute top-1/3 -translate-y-1/2 -left-[10%] w-[400px] sm:w-[500px] lg:w-[575px] h-[400px] sm:h-[500px] lg:h-[580px] flex-shrink-0 rounded-full bg-[#091E6F] blur-[60px] sm:blur-[70px] lg:blur-[86.05px] -z-5"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Side Text */}
        <motion.div
          className="w-full lg:w-1/2 text-white"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <h2 className="text-[65px] font-semibold">
            Our <span className="text-[#AEEE6A]">Blog</span>
          </h2>

          {/* Author Row */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-10 h-10 rounded-full overflow-hidden aspect-square border border-white">
              <Image
                src="/assets/dp.jpg"
                alt="Author"
                width={40}
                height={40}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-[#CCCCCC] text-lg font-semibold">
                {blogs[active].author}
              </p>
              <p className="text-[19px] text-[#888888]">{blogs[active].date}</p>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-4xl lg:text-[54px] font-semibold mt-3 leading-snug">
            {blogs[active].title}
          </h3>

          {/* Description */}
          <p className="text-[21px] font-light text-[#F9FAFB] mt-3 leading-relaxed">
            {blogs[active].desc}
          </p>

          {/* Button */}
          <button className="mt-8 px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-[#021144] transition">
            Read More
          </button>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="w-full lg:w-[550px] h-auto relative"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              },
            },
          }}
        >
          {/* Ellipse Background */}
          <div className="absolute -top-20 -right-20 w-[580px] h-[580px] rounded-full bg-[rgba(255,255,255,0.23)] blur-[86.05px] -z-10"></div>
          <div className="rounded-[15px] border-[3px] border-white bg-[rgba(7,26,37,0.18)] overflow-hidden shadow-lg relative z-10">
            <Image
              src={blogs[active].img}
              alt="Blog Image"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-2 mt-20">
        {blogs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`transition-all duration-200 ${
              active === idx
                ? "w-[23px] h-[23px] bg-white"
                : "w-[16px] h-[16px] bg-[#B8B8B8]"
            } rounded-full border-none outline-none`}
            aria-label={`Go to blog ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSectionOne;
