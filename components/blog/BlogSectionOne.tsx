import Image from "next/image";
import React from "react";

const BlogSectionOne = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden py-60 px-4 lg:px-20">
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
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-5xl font-bold">
            Our <span className="text-[#89DB5C]">Blog</span>
          </h2>

          {/* Author Row */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-10 h-10 rounded-full overflow-hidden aspect-square">
              <Image
                src="/assets/dp.jpg"
                alt="Author"
                width={40}
                height={40}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Jhon</p>
              <p className="text-sm text-gray-300">Oct 25, 2021</p>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-4xl lg:text-5xl font-bold mt-6 leading-tight">
            Style Caring is The <br /> New Marketing
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-300 mt-6 leading-relaxed">
            We are specialized in circular knit garments field. From basic to
            fashion item we do various type product with different type of yarn
            composition & fabric construction.
          </p>

          {/* Button */}
          <button className="mt-8 px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-[#021144] transition">
            Read More
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-[550px] h-auto">
          <div className="rounded-[15px] border-[3px] border-white bg-[rgba(7,26,37,0.18)] overflow-hidden shadow-lg">
            <Image
              src="/assets/textile1.jpg"
              alt="Blog Image"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Background Dots (Carousel indicators) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        <span className="w-3 h-3 rounded-full bg-white/50"></span>
        <span className="w-3 h-3 rounded-full bg-white/90"></span>
        <span className="w-3 h-3 rounded-full bg-white/50"></span>
      </div>
    </section>
  );
};

export default BlogSectionOne;
