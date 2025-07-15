"use client";

import React from "react";

const WhyChooseUs = () => {
  const cards = [
    {
      number: "01",
      title: "Modern Process and Factory",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      number: "02",
      title: "Modern Process and Factory",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      number: "03",
      title: "Modern Process and Factory",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <section className="text-white px-6 md:px-20 py-20 bg-gradient-to-b from-black via-[#04081B] to-[#091442]">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[#009BF3] text-[23px] uppercase font-medium tracking-wide mb-2">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-[54px] font-semibold max-w-3xl leading-tight">
          Textiles That Are{" "}
          <span className="text-[#AEEE6A]">
            Feather-
            <br />
            Light
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#03314B] rounded-xl p-6 md:px-8 transition hover:scale-105 duration-300"
          >
            <h3 className="text-[#AEEE6A] text-[61px] font-bold">
              {card.number}
            </h3>
            <h4 className="text-[33px] font-semibold text-white leading-tight mb-2">
              {card.title}
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
