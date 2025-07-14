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
    <section className="relative bg-[#001133] text-white py-20 overflow-hidden">
      {/* Background Ellipses */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <Image
          src="/assets/ProductEllipseBig.png"
          alt="Ellipse Big"
          width={200}
          height={200}
        />
        <div className="absolute top-4 left-4">
          <Image
            src="/assets/ProductEllipseSmall.svg"
            alt="Ellipse Small"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Title */}
      <div className="text-start mb-12 relative z-10 pl-25">
        <h2 className="text-4xl font-bold leading-snug">
          <span className="text-[#B4FF63]">Offering</span> a diverse range of{" "}
          <br /> products.
        </h2>
      </div>

      {/* Product Cards */}
      <div className="flex justify-center gap-4 flex-wrap md:flex-nowrap px-4 max-w-7xl mx-auto relative z-10">
        {productData.map(({ id, src, label, featured }, index) => (
          <div
            key={id}
            className={`relative flex-shrink-0 rounded-[11px] overflow-hidden group border-0 border-white ${
              index === 1 || index === 3 ? "mt-8" : ""
            }`}
            style={{
              width: "190.779px",
              height: "517.221px",
              background:
                "linear-gradient(180deg, rgba(35, 109, 132, 0.06) 0%, #00250A 100%)",
            }}
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
                className={`absolute right-4 z-20 ${
                  label === "Sweatshirts" ? "bottom-60" : "bottom-42"
                }`}
              >
                <p
                  className="text-white whitespace-nowrap"
                  style={{
                    transform: "rotate(-90deg)",
                    transformOrigin: "bottom right",
                    color: "#CCC",
                    fontFamily: "Ponnala",
                    fontSize: "47px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {label}
                </p>
              </div>
            </div>

            {/* Dark Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[#001133] via-[#001133bb] to-transparent ${
                featured ? "opacity-60" : "opacity-40"
              } group-hover:opacity-60 transition-opacity duration-300`}
            />

            {/* Featured Arrow */}
            {featured && (
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="w-10 h-10 rounded-full bg-[#B4FF63] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="text-[#001133] text-xl font-bold">→</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
