"use client";

import Image from "next/image";

const cards = [
  {
    title: "INQUIRIES",
    image: "/assets/WP1.svg",
    description:
      "We Have Sent Over 1 Million Cold Emails, With World-Beating Stats: Average Open Rate: 65% Average Click-Through Rate: 10% Average Reply Rate: 10%",
  },
  {
    title: "COSTING & SAMPLING",
    image: "/assets/WP2.svg",
    description:
      "Getting The Specification Of The Product We Offer Our Customers A Price Quotation. If It Is Accepted We Start The Proto Type Or Reference/Counter Samples & Lab Dips In Order To Get Primary Comments.",
  },
  {
    title: "ORDER CONFIRMATION",
    image: "/assets/WP3.svg",
    description:
      "We Have Generated Over $10M+ In The Sales Pipeline For 500+ Happy Clients Across 50+ Industries",
  },
  {
    title: "BULK PRODUCTION",
    image: "/assets/WP1.svg",
    description:
      "We Start The Bulk Production Once Get The Payment Confirmation & Approval Of The Pre-Production Samples.",
  },
  {
    title: "QUALITY CONTROL",
    image: "/assets/WP2.svg",
    description:
      "Our Hard-Working Quality Control Team Monitoring The Quality Control Systems Right From The Raw Materials",
  },
  {
    title: "INSPECTION",
    image: "/assets/WP3.svg",
    description:
      "We Offer Third Party Inspection. Final Random Inspection Is Carried Out When The Total Consignment Is Packed And Ready For Shipment",
  },
];

const AboutSectionThree = () => {
  return (
    <section
      className="w-full py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #000 0%, #0A1645 100%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-white text-[54px] font-medium mb-16">
          Working <span className="text-[#AEEE6A]">process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#003E8987] rounded-xl p-6 border-[4px] border-[#085592] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-white text-lg font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-[#C4D0E3] text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
