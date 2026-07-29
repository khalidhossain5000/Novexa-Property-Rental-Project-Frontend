'use client'
import { motion } from "framer-motion";
import React from 'react';

const ShimmerText = ({children}:{  children: React.ReactNode;}) => {
    return (
        <h2 className="font-inter italic text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center lg:text-left  font-bold ">
                <motion.span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `
        linear-gradient(
          90deg,
          #166534 0%,
          #0F766E 35%,
          #ffffff 50%,
          #2DD4BF 65%,
          #115E59 100%
        )
      `,
                    backgroundSize: "200% auto",
                  }}
                  animate={{
                    backgroundPosition: ["0% center", "200% center"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {children}
                </motion.span>
              </h2>
    );
};

export default ShimmerText;