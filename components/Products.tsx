"use client";

import Image from "next/image";

const productData = [
  { id: 1, src: "/assets/productImage1.jpg", label: "Hoodies" },
  { id: 2, src: "/assets/galleryImage2.jpg", label: "Sweatshirts" },
  {
    id: 3,
    src: "/assets/galleryImage3.jpg",
    label: "T-shirts",
    featured: true,
  },
  { id: 4, src: "/assets/productImage4.jpg", label: "T-shirts" },
  { id: 5, src: "/assets/productImage5.jpg", label: "Jackets" },
];

const Products = () => {
  return (
    <section className="relative text-white py-20 md:py-30 overflow-hidden">
      {/* Background Ellipses */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <Image
          src="/assets/ProductEllipseBig.png"
          alt="Ellipse Big"
          width={200}
          height={200}
          className="w-32 h-32 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px]"
        />
        <div className="absolute top-2 left-2 md:top-4 md:left-4">
          <Image
            src="/assets/ProductEllipseSmall.svg"
            alt="Ellipse Small"
            width={100}
            height={100}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
          />
        </div>
      </div>

      {/* Title */}
      <div className="text-start mb-8 md:mb-12 relative z-10 px-4 md:pl-16 lg:pl-25">
        <h2 className="text-3xl md:text-4xl lg:text-[54px] font-bold leading-tight lg:leading-snug">
          <span className="text-[#B4FF63]">Offering</span> a diverse range of{" "}
          <br className="hidden md:block" /> products.
        </h2>
      </div>

      {/* Product Cards */}
      <div className="flex justify-center gap-2 md:gap-6 flex-wrap xl:flex-nowrap px-4 max-w-7xl mx-auto relative z-10">
        {productData.map(({ id, src, label, featured }, index) => (
          <div
            key={id}
            className={`relative flex-shrink-0 rounded-[11px] overflow-hidden group border-0 border-white
              w-36 h-80 sm:w-40 sm:h-96 md:w-44 md:h-[400px] lg:w-[150px] lg:h-[430px] xl:w-[190.779px] xl:h-[517.221px]
              bg-gradient-to-b from-[rgba(35,109,132,0.06)] to-[#00250A]
              ${index === 1 || index === 3 ? "mt-4 md:mt-8" : ""}
            `}
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Vertical Text - BOTTOM RIGHT POSITION */}
              <div
                className={`absolute right-0 z-30 group-hover:opacity-0 transition-opacity duration-300 ${
                  label === "Sweatshirts"
                    ? "bottom-32 md:bottom-60"
                    : "bottom-24 md:bottom-42"
                }`}
              >
                <p
                  className="text-white whitespace-nowrap -rotate-90 origin-bottom-right
                    text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-[47px]
                    font-normal leading-normal"
                  style={{
                    fontFamily: "Ponnala",
                    color: "#CCC",
                  }}
                >
                  {label}
                </p>
              </div>
            </div>

            {/* Dark Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[#001133] via-[#001133bb] to-transparent 
                ${featured ? "opacity-60" : "opacity-40"} 
                group-hover:opacity-60 transition-opacity duration-300`}
            />

            {/* Default Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-50 group-hover:opacity-0 transition-opacity duration-300 z-20"
              style={{
                background:
                  "linear-gradient(180deg, rgba(35, 109, 132, 0.06) 0%, #00250A 100%)",
              }}
            />

            {/* Arrow on Hover */}
            <div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/assets/Arrow.svg"
                alt="Arrow"
                width={40}
                height={40}
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 hover:scale-110 transition-transform"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
