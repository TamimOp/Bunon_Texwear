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
        <div className="relative mx-auto mt-16 flex flex-col md:flex-row rounded-[56px] bg-[#EDE9E6] overflow-visible w-full md:w-[1200px] md:h-[725px]">
          {/* Left Main Blog Card */}
          <div className="flex flex-col justify-between p-5 rounded-[27px] bg-[#1A1A1A] overflow-hidden relative z-10 w-full md:w-[579px] h-auto md:h-[559px] mt-[30px] md:mt-[60px] ml-0 md:ml-[48px] flex-shrink-0">
            <div className="mx-auto relative overflow-hidden w-full md:w-[533px] h-[200px] md:h-[300px] rounded-t-[24px] bg-[rgba(7,26,37,0.18)]">
              <Image
                src="/assets/textile1.jpg"
                alt="Main blog"
                fill
                className="object-cover rounded-t-[24px]"
                sizes="(max-width: 768px) 100vw, 533px"
              />
            </div>
            <div className="p-4 md:p-8 flex flex-col justify-between flex-1">
              <p className="text-green-400 text-base mb-2">
                Category • 8 Min Read
              </p>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-4">
                Style Caring is The New Marketing
              </h3>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src="/assets/dp.jpg"
                  alt="Author"
                  width={40}
                  height={40}
                  className="rounded-full border border-white object-cover object-top w-[40px] h-[40px] md:w-[56px] md:h-[53.621px] flex-shrink-0"
                />
                <div className="text-white text-base">
                  <p className="font-semibold">Mr. Sheikh Saadi</p>
                  <p className="text-gray-400 text-xs">Oct 25, 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Article Cards */}
          <div className="relative w-full flex flex-col gap-6 z-20 pointer-events-auto mt-8 md:mt-0">
            {articles.map((item, index) => (
              <div
                key={index}
                className={`
                flex items-center w-full
                md:absolute
                ${index === 0 ? "md:right-[90px] md:top-[100px]" : ""}
                ${index === 1 ? "md:right-[50px] md:top-[90px]" : ""}
                ${index === 2 ? "md:-right-[10px] md:top-[80px]" : ""}
            `}
                // On mobile: relative, stacked; On desktop: absolute, floated
                style={{ position: "relative" }}
              >
                {/* Card Image with blue border and shadow */}
                <div className="relative flex-shrink-0 w-full md:w-[223px] h-[120px] md:h-[153px] rounded-[15px] border-4 border-[#2D69D1] shadow-[4px_6px_24.9px_4px_rgba(0,0,0,0.5)] overflow-hidden bg-cover bg-center">
                  <Image
                    src={item.img}
                    alt={`card-${index}`}
                    fill
                    className="object-cover rounded-[15px]"
                    sizes="(max-width: 768px) 100vw, 223px"
                  />
                </div>
                {/* Card Text */}
                <div className="ml-3 md:ml-5 w-full md:w-[280px]">
                  <p className="text-[16px] md:text-[19px] text-[#888888] mb-1">
                    <span className="text-[#0055C4] font-normal text-[16px] md:text-[19px]">
                      Category
                    </span>{" "}
                    • 8 Min Read
                  </p>
                  <h4 className="text-lg md:text-2xl font-bold text-[#313131] leading-tight">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-2">
                    <Image
                      src="/assets/dp.jpg"
                      alt="Author"
                      width={24}
                      height={24}
                      className="rounded-full border border-white object-cover object-top w-[24px] h-[24px] md:w-[33px] md:h-[32.173px] flex-shrink-0"
                    />
                    <p className="text-[12px] md:text-[14px] text-[#5D5D5D] font-normal">
                      Mr. Sheikh Saadi
                    </p>
                    <span className="text-[10px] md:text-[11px] text-[#747474]">
                      • {item.date}
                    </span>
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
