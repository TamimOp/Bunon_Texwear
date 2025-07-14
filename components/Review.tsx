"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const Review = () => {
  return (
    <section className="text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
        {/* Left Side */}
        <div className="relative w-full max-w-[485px] h-[400px] sm:h-[500px] lg:w-[485px] lg:h-[670px] rounded-xl overflow-visible flex-shrink-0 mx-auto lg:mx-0">
          {/* Background Image */}
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/assets/galleryImage1.jpg"
              alt="Review Visual"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Play Button */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 w-[80px] h-[75px] sm:w-[120px] sm:h-[110px] lg:w-[157px] lg:h-[146px] z-10">
            <Image
              src="/assets/playButton.svg"
              alt="Play Button"
              fill
              className="object-contain"
            />
          </div>

          {/* Quote Card – Experience */}
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 text-white flex items-start gap-1 sm:gap-2 p-2 sm:p-3 lg:p-4 w-[120px] sm:w-[180px] lg:w-[241px] h-[80px] sm:h-[110px] lg:h-[135.498px] flex-shrink-0 rounded-[6px] sm:rounded-[10px] lg:rounded-[13px] bg-[rgba(2,86,151,0.78)] z-20">
            <Image
              src="/assets/quote.svg"
              alt="quote"
              width={20}
              height={15}
              className="sm:w-[30px] sm:h-[22px] lg:w-[41px] lg:h-[30px] flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-sm sm:text-lg lg:text-[55px] font-bold">
                25+
              </h3>
              <p className="text-xs sm:text-sm lg:text-[15px] font-medium">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:-ml-20">
          <h2 className="text-2xl sm:text-3xl lg:text-[54px] font-bold leading-snug">
            Do Well, <span className="text-[#B4FF63]">Live Well</span> & Dress
            <br className="hidden sm:block" /> Really Well
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-[21px] text-gray-200">
            Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
            Agent. We Have Started Our Journey In 1998.
          </p>

          {/* Stats Boxes */}
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Box 1 */}
            <div className="border border-white rounded-xl p-2 sm:p-3 w-full sm:w-[200px] lg:w-[281px] h-[180px] sm:h-[200px] lg:h-[248px] flex-shrink-0 text-center flex flex-col justify-center overflow-hidden">
              <h3 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#B4FF63]">
                4.7
              </h3>
              <p className="font-semibold text-lg sm:text-xl lg:text-2xl mt-1">
                customer review
              </p>
              <div className="flex justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="#FFD700"
                    width={16}
                    height={16}
                    className="sm:w-[20px] sm:h-[20px] lg:w-[23.745px] lg:h-[23.145px] text-[#FFD700] flex-shrink-0"
                  />
                ))}
              </div>
              <p className="text-[10px] sm:text-xs mt-2 text-gray-300 leading-tight px-1">
                Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter &
                Buying Agent. We Have Started Our Journey In 1998.
              </p>
            </div>

            {/* Box 2 */}
            <div className="border border-white rounded-xl p-2 sm:p-3 w-full sm:w-[200px] lg:w-[281px] h-[180px] sm:h-[200px] lg:h-[248px] flex-shrink-0 text-center flex flex-col justify-center overflow-hidden">
              <h3 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#B4FF63]">
                2B+
              </h3>
              <p className="font-semibold text-lg sm:text-xl lg:text-2xl mt-1">
                Company Class
              </p>
              <div className="flex justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="#FFD700"
                    width={16}
                    height={16}
                    className="sm:w-[20px] sm:h-[20px] lg:w-[23.745px] lg:h-[23.145px] text-[#FFD700] flex-shrink-0"
                  />
                ))}
              </div>
              <p className="text-[10px] sm:text-xs mt-2 text-gray-300 leading-tight px-1">
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
