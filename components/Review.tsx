"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const Review = () => {
  return (
    <section className="text-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
        {/* Left Side */}
        <div className="relative w-[485px] h-[670px] rounded-xl overflow-hidden flex-shrink-0">
          {/* Background Image */}
          <Image
            src="/assets/galleryImage1.jpg"
            alt="Review Visual"
            fill
            className="object-cover rounded-xl"
          />

          {/* Play Button */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 w-[157px] h-[146px] z-10">
            <Image
              src="/assets/playButton.svg"
              alt="Play Button"
              fill
              className="object-contain"
            />
          </div>

          {/* Quote Card – Experience */}
          <div className="absolute -bottom-8 -right-8 text-white flex items-start gap-2 p-3 sm:p-4 w-[160px] sm:w-[220px] lg:w-[241px] h-[100px] sm:h-[130px] lg:h-[135.498px] flex-shrink-0 rounded-[8px] sm:rounded-[12px] lg:rounded-[13px] bg-[rgba(2,86,151,0.78)] z-20">
            <Image
              src="/assets/quote.svg"
              alt="quote"
              width={25}
              height={18}
              className="sm:w-[35px] sm:h-[26px] lg:w-[41px] lg:h-[30px] flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-xl sm:text-[55px] font-bold">25+</h3>
              <p className="text-lg sm:text-sm lg:text-[15px] font-medium">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-[54px] font-bold leading-snug">
            Do Well, <span className="text-[#B4FF63]">Live Well</span> & Dress
            <br /> Really Well
          </h2>
          <p className="mt-4 text-[21px] text-gray-200">
            Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
            Agent. We Have Started Our Journey In 1998.
          </p>

          {/* Stats Boxes */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            {/* Box 1 */}
            <div className="border border-white rounded-xl p-6 w-full sm:w-1/2 text-center">
              <h3 className="text-7xl font-bold text-[#B4FF63]">4.7</h3>
              <p className="font-semibold text-2xl mt-1">customer review</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#FFD700]"
                    fill="#FFD700"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-sm mt-4 text-gray-300">
                Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter &
                Buying Agent. We Have Started Our Journey In 1998.
              </p>
            </div>

            {/* Box 2 */}
            <div className="border border-white rounded-xl p-6 w-full sm:w-1/2 text-center">
              <h3 className="text-7xl font-bold text-[#B4FF63]">2B+</h3>
              <p className="font-semibold text-2xl mt-1">Company Class</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#FFD700]"
                    fill="#FFD700"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-sm mt-4 text-gray-300">
                Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter &
                Buying Agent. We Have Started Our Journey In 1998.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
