"use client";

import Image from "next/image";

const articles = [
  {
    img: "/assets/textile2.jpg",
    title: "Style Caring is The New Marketing",
    date: "Oct 25, 2021",
  },
  {
    img: "/assets/textile3.jpg",
    title: "Style Caring is The New Marketing",
    date: "Oct 25, 2021",
  },
  {
    img: "/assets/textile4.jpg",
    title: "Style Caring is The New Marketing",
    date: "Oct 25, 2021",
  },
];

const Articles = () => {
  return (
    <section className="py-20 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <p className="text-[#009BF3] text-2xl font-semibold">New Blog</p>
        <h2 className="text-4xl md:text-[65px] font-bold text-white mt-2">
          Articles About <span className="text-[#AEEE6A]">Garment</span> Textile
        </h2>

        {/* Main Blog Container */}
        <div className="relative mx-auto mt-16 flex rounded-[56px] bg-[#EDE9E6] overflow-visible w-[1148px] h-[725px]">
          {/* Left Main Blog Card */}
          <div className="flex flex-col justify-between p-5 rounded-[27px] bg-[#1A1A1A] overflow-hidden relative z-10 w-[579px] h-[559px] mt-[60px] ml-[48px] flex-shrink-0">
            <div className="mx-auto relative overflow-hidden w-[533px] h-[300px] rounded-t-[24px] bg-[rgba(7,26,37,0.18)]">
              <Image
                src="/assets/textile1.jpg"
                alt="Main blog"
                fill
                className="object-cover rounded-t-[24px]"
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <p className="text-green-400 text-base mb-2">
                Category • 8 Min Read
              </p>
              <h3 className="text-white text-2xl font-bold leading-tight mb-4">
                Style Caring is The New Marketing
              </h3>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src="/assets/dp.jpg"
                  alt="Author"
                  width={56}
                  height={54}
                  className="rounded-full object-cover"
                />
                <div className="text-white text-base">
                  <p className="font-semibold">Mr. Sheikh Saadi</p>
                  <p className="text-gray-400 text-xs">Oct 25, 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Article Cards */}
          <div className="absolute top-[40px] right-[32px] h-full flex flex-col gap-6 z-20">
            {articles.map((item, index) => (
              <div key={index} className="flex items-center">
                {/* Card Image with blue border and shadow */}
                <div className="relative flex-shrink-0 w-[223px] h-[153px] rounded-[15px] border-4 border-[#2D69D1] shadow-[4px_6px_24.9px_4px_rgba(0,0,0,0.5)] overflow-hidden bg-cover bg-center">
                  <Image
                    src={item.img}
                    alt={`card-${index}`}
                    fill
                    className="object-cover rounded-[15px]"
                  />
                </div>
                {/* Card Text */}
                <div className="ml-5 w-[220px]">
                  <p className="text-xs text-gray-500 mb-1">
                    <span className="text-[#2D69D1] font-semibold">
                      Category
                    </span>{" "}
                    • 8 Min Read
                  </p>
                  <h4 className="text-base font-semibold text-gray-900 leading-tight">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-2">
                    <Image
                      src="/assets/dp.jpg"
                      alt="Author"
                      width={20}
                      height={20}
                      className="rounded-full object-cover"
                    />
                    <p className="text-xs text-gray-700 font-medium">
                      Mr. Sheikh Saadi
                    </p>
                    <span className="text-xs text-gray-400">• {item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
