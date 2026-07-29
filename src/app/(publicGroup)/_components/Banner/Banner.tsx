"use client";

import React, { useEffect, useState } from "react";
import { slides } from "./SlideData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ShimmerText from "@/components/shared/ShimmerText/ShimmerText";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/*  Bg images */}

      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.1,
          }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt="banner"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}

      {/*  Overlay */}
      <div className="absolute inset-0 bg-linear-to-l from-black/80 via-black/40 to-transparent" />

      {/* Animated Content  */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="relative z-10 flex  items-center justify-center lg:items-center xl:items-center xl:justify-start h-full pb-20 lg:pt-0  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl md:max-w-6xl mx-auto lg:mx-0 lg:ml-auto px-4 lg:px-6  xl:pr-36">
            {/* Title */}
            <motion.div
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -120, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className=" text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-center font-bold text-slate-100  dark:text-slate-300 lg:text-left"
            >
              <h2 className="text-center lg:text-left font-lora py-1 lg:py-4">
                {currentSlide.title.start}
                <span className="font-inter pl-3 md:pl-6 text-center lg:text-left ">
                  {currentSlide.title.middle}
                </span>
              </h2>

              <ShimmerText>{currentSlide.title.end}</ShimmerText>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Left Info Card*/}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          className="absolute bottom-0 left-0 z-20 w-full lg:w-xl bg-primary dark:bg-background dark:bg-gradient-none lg:py-12 lg:px-9 shadow-xl py-6  rounded-lg"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ y: -5 }}
            className=" bg-transparent  py-6   hover:border-primary/50 transition-all relative overflow-hidden group"
          >
            {/* Background Scrolling Tags with Edge Fading */}
            <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.09] pointer-events-none flex flex-col justify-center gap-2 rotate-[-5deg] scale-110">
              {/* Gradient Mask to fade text at edges */}
              <div className="absolute inset-0 bg-linear-to-r from-[#0F766E] via-transparent to-[#115E59] z-10" />

              <motion.div
                animate={{ x: [0, -400] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap text-6xl font-black text-surface dark:text-slate-100 uppercase"
              >
                #RentNest #CANADA #MOUNTAIN #BEACH #AIR #PERU #TRAVEL #ROOM
                #JUNGLE #HILL
              </motion.div>

              <motion.div
                animate={{ x: [-400, 0] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap text-6xl font-black text-surface dark:text-slate-100 uppercase"
              >
                #SEA #SHIP #BUS #TRIP #TRAVEL #PATTAYA #SINGAPORE #RentNest
                #MOBILE
              </motion.div>
            </div>

            {/* Left Content */}
            <div className="relative z-20">
              <p className="flex items-center gap-1 justify-center lg:justify-start lg:gap-6 uppercase lg:tracking-wide text-background dark:text-slate-100 font-poppins text-[16px] sm:text-xl lg:text-2xl lg:pl-9 font-bold font-inter">
                <FaLocationDot /> {currentSlide.location.name}
              </p>
              <h2 className="capitialize lg:uppercase lg:tracking-wide text-background dark:text-slate-100 font-poppins text-sm lg:text-xl  pt-4 lg:pl-12 flex gap-3 items-center justify-center lg:justify-start font-bold font-inter">
                <FaGlobeAsia className="hidden lg:block" />
                Coordinates: {currentSlide.location.coordinates}
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
