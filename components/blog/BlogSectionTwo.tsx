"use client";

import Image from "next/image";

const blogData = [
  "/assets/textile2.jpg",
  "/assets/textile3.jpg",
  "/assets/textile4.jpg",
  "/assets/textile5.jpg",
  "/assets/textile6.jpg",
  "/assets/textile7.jpg",
  "/assets/textile8.jpg",
  "/assets/textile9.jpg",
];

export default function BlogSectionTwo() {
  return (
    <section
      className="w-full py-16 px-6 lg:px-20 pb-60"
      style={{
        background:
          "linear-gradient(180deg, #0B1746 0%, #070F2D 55.95%, #000 100%)",
      }}
    >
      <div
        className="max-w-[1440px] mx-auto"
        style={{
          borderRadius: 4,
          background: "rgba(0, 18, 88, 0.87)",
          padding: "2rem",
        }}
      >
        <h2 className="text-4xl sm:text-[54px] font-semibold text-white mb-12">
          <span className="text-white">Latest </span>
          <span className="text-[#AEEE6A]">Post</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogData.map((image, idx) => (
            <div
              key={idx}
              className="bg-[#081152] rounded-xl p-2 pb-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt="Blog Thumbnail"
                  width={400}
                  height={176}
                  className="w-full h-44 object-cover rounded-lg"
                  style={{
                    borderRadius: 8,
                    border: "4px solid #2D69D1",
                  }}
                />
              </div>
              <div className="mt-4 px-2">
                <p className="text-[#7B91B0] text-[19px] mb-1">
                  <span className="text-[#2D69D1]">Category</span> • 8 Min Read
                </p>
                <h3 className="text-white text-[23px] font-bold leading-snug">
                  Style Caring is The New Marketing
                </h3>
                <div className="flex items-center mt-3 space-x-2">
                  <Image
                    src="/assets/dp.jpg"
                    alt="Author"
                    width={33}
                    height={33}
                    className="w-8 h-8 rounded-full border border-white"
                  />
                  <div className="text-white text-sm leading-tight">
                    <p className="text-[#BEBEBE] text-sm font-semibold">
                      Mr. Sheikh Saadi
                    </p>
                    <p className="text-[#747474] text-xs">Oct 25, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
