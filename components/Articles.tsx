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
    <section className="bg-[#001133] py-20 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <p className="text-[#00A8E8] text-sm font-semibold">New Blog</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Articles About <span className="text-[#B4FF63]">Garment</span> Textile
        </h2>

        {/* Main Blog Container */}
        <div
          className="relative mx-auto mt-16 flex"
          style={{
            width: "1148px",
            height: "725.351px",
            borderRadius: "56px",
            background: "#EDE9E6",
            overflow: "visible",
          }}
        >
          {/* Left Main Blog Card */}
          <div
            className="flex flex-col justify-between p-5"
            style={{
              width: "579px",
              height: "558.637px",
              borderRadius: "27px",
              background: "#1A1A1A",
              margin: "60px 0 0 48px",
              flexShrink: 0,
              overflow: "hidden",
              position: "relative",
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: "533px",
                height: "300.28px",
                flexShrink: 0,
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                background: "rgba(7, 26, 37, 0.18)",
                overflow: "hidden",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Image
                src="/assets/textile1.jpg"
                alt="Main blog"
                fill
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
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
          <div
            className="absolute top-0 right-0 h-full flex flex-col gap-8 z-20"
            style={{ marginTop: "40px", marginRight: "32px" }}
          >
            {articles.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-2"
                style={{
                  marginBottom: index < 2 ? "24px" : "0",
                }}
              >
                {/* Card Image with blue border and shadow */}
                <div
                  style={{
                    width: "223px",
                    height: "153.065px",
                    borderRadius: "15px",
                    border: "4px solid #2D69D1",
                    background: `url(${item.img}) lightgray 50% / cover no-repeat`,
                    flexShrink: 0,
                    overflow: "hidden",
                    boxShadow: "4px 6px 24.9px 4px rgba(0,0,0,0.50)",
                  }}
                  className="relative"
                >
                  <Image
                    src={item.img}
                    alt={`card-${index}`}
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
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
