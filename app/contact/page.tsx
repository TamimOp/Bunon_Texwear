"use client";
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      className="w-full text-white py-40 pb-60 px-4 md:px-10"
      style={{
        background:
          "linear-gradient(180deg, #0B1746 0%, #070F2D 55.95%, #000 100%)",
      }}
    >
      {/* Title on top */}
      <h2 className="text-[65px] font-semibold text-center mb-2">
        Get in <span className="text-[#9BF84F]">Touch</span>
      </h2>
      <p className="text-center mt-2 text-[21px] text-[#F9FAFB] mb-10">
        Fill Out The Form Below, And We’ll Get Back To You As Early As Possible
      </p>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
        {/* Left Illustration */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/Deal.png"
            alt="Deal"
            width={500}
            height={400}
            className="w-[500px] max-w-full object-contain"
          />
        </div>

        {/* Right Form Box */}
        <div className="w-full md:w-1/2 bg-[#06215D] p-8 rounded-xl shadow-lg">
          {/* Form */}
          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-[#9BF84F] text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter service name"
                className="w-full bg-[#01356A] text-white px-4 py-3 rounded-md placeholder:text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[#9BF84F] text-sm font-semibold mb-1">
                Number
              </label>
              <input
                type="text"
                placeholder="Enter service name"
                className="w-full bg-[#01356A] text-white px-4 py-3 rounded-md placeholder:text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[#9BF84F] text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Type your message here..."
                rows={4}
                className="w-full bg-[#01356A] text-white px-4 py-3 rounded-md placeholder:text-white focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-[#9BF84F] text-black px-8 py-3 rounded-md font-semibold shadow-[0_0_10px_#9BF84F] hover:shadow-[0_0_20px_#9BF84F] transition-all duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
