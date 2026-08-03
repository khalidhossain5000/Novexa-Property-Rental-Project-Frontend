import React from "react";
import aboutImg from "./about.jpg";
import Link from "next/link";
const About = () => {
  return (
    <section className="bg-[#ebf3f5] relative">
      <div className="flex relative">
        <div
          style={{ backgroundImage: `url(${aboutImg.src})` }}
          className="w-full xl:w-[60%] py-22 bg-cover bg-center"
        ></div>
        <div className="xl:w-[40%]">
          {/* Content Card */}
          <div className="xl:mt-22 xl:-translate-x-1/2 bg-linear-to-tr from-primary to-[#f9a300] dark:from-[#0a121f] dark:to-stone-800 max-w-2xl xl:py-30 xl:px-22 p-14 xl:p-0 shadow-xl rounded-lg">
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-gray-400"></div>
              <p className="text-xs tracking-widest text-gray-900 dark:text-[#f5f9ff] uppercase font-inter">
                Welcome to RentNest
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-6 text-center lg:text-left dark:text-[#f5f9ff] font-lora">
              Luxury vacation <br />{" "}
              <span className="font-playfair">rentals worldwide</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-900 dark:text-[#f5f9ff] leading-relaxed mb-6 font-inter">
              Discover premium stays designed for comfort and elegance.
              Experience world-class amenities, breathtaking views, and
              unforgettable moments in every destination.
            </p>

            <p className="text-gray-900 dark:text-[#f5f9ff] leading-relaxed mb-8 font-inter">
              Book with confidence and explore curated properties crafted to
              elevate your travel experience.
            </p>

            {/* Button */}

            <Link href="/about">
              <button className="hover:scale-110 transition duration-300 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none font-inter">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16100f_0%,#f9a300_50%,#f9a300_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#f97c00] dark:bg-slate-950 px-7 text-sm lg:text-xl lg:font-bold font-medium text-black dark:text-white backdrop-blur-3xl gap-2 undefined ">
                  Learn More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
