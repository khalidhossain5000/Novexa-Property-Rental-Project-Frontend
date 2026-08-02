"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ShieldCheck,
  BadgePercent,
  Headset,
  Tag,
  ArrowRight,
  Star,
} from "lucide-react";
import { FaKey } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import PrimaryBtn from "@/components/shared/Button/PrimaryBtn";
import SecondaryBtn from "@/components/shared/Button/SecondaryBtn";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified owners",
    desc: "Every listing checked",
  },
  {
    icon: BadgePercent,
    title: "Zero brokerage",
    desc: "Deal directly, save more",
  },
  {
    icon: Headset,
    title: "24/7 support",
    desc: "We're always around",
  },
];
// container px-6 md:px-8 lg:px-13 xl:px-16  --->
const NBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF3] py-20 dark:bg-neutral-950 sm:py-24 lg:py-28">
      {/* glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-130 w-130 rounded-full bg-[#FFC72C]/25 blur-3xl dark:bg-[#FFC72C]/10"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-95 w-95 rounded-full bg-[#FFC72C]/10 blur-3xl dark:bg-[#FFC72C]/5"
      />

      <div className="relative mx-auto flex container px-6 md:px-8 lg:px-13 xl:px-16 flex-col items-center gap-14  lg:flex-row lg:justify-between lg:gap-10">
        {/* LEFT */}
        <div className="w-full flex-1">
          {/* badge */}
          <div className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#17140A]/10 bg-white px-4 py-3 text-[10px] font-semibold tracking-[0.18em] text-[#7A5B00] sm:text-xs md:py-1.5 lg:uppercase dark:border-white/10 dark:bg-white/5 dark:text-[#FFC72C]">
              <ShieldCheck size={14} strokeWidth={2.5} />
              Verified listings · No broker fees
            </span>
          </div>

          {/* heading */}
          <h1 className="mt-6 text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-[#17140A] dark:text-white sm:text-5xl lg:text-left lg:text-6xl">
            Rent your next <br />
            <span className="inline-block w-full py-2 font-lora text-[#C98A00] dark:text-[#FFC72C] sm:py-3 ">
              <TypeAnimation
                sequence={[
                  "apartment",
                  2000,
                  "studio",
                  2000,
                  "family home",
                  2000,
                  "office space",
                  2000,
                ]}
                wrapper="span"
                speed={45}
                deletionSpeed={60}
                repeat={Infinity}
              />
            </span>
            <br />
            without the hassle.
          </h1>

          <p className="mt-6 text-center text-base leading-relaxed text-[#3D3626] dark:text-neutral-400 sm:text-lg lg:text-left max-w-2xl">
            Thousands of verified apartments and houses, direct from owners.
            Message, tour, and sign — all without paying a broker a single taka.
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link href="/all-properties">
              <PrimaryBtn
                icon={
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-0.5"
                  />
                }
              >
                Browse listings
              </PrimaryBtn>
            </Link>

            <SecondaryBtn icon={<FaKey size={14} />}>
              List your property
            </SecondaryBtn>
          </div>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-1 gap-5 border-t border-[#17140A]/10 pt-8 dark:border-white/10 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-start justify-center gap-3 lg:justify-start"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFC72C]/20 text-[#7A5B00] dark:bg-[#FFC72C]/10 dark:text-[#FFC72C]">
                    <Icon size={18} />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-[#17140A] dark:text-white">
                      {feature.title}
                    </p>

                    <p className="text-xs text-[#3D3626]/70 dark:text-neutral-500">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mx-auto w-full max-w-md xl:mx-0 xl:max-w-lg"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-4xl border-4 border-white shadow-[0_30px_60px_-20px_rgba(23,20,10,0.35)] dark:border-neutral-800 dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="/banner/banner.jpg"
              width={600}
              height={700}
              alt="Bright modern living room in a rental apartment"
              className="h-105 w-full object-cover sm:h-125"
              unoptimized
            />
          </motion.div>

          {/* price badge */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-5 right-4 flex items-center gap-2 rounded-xl bg-[#FFC72C] px-4 py-2.5 shadow-lg sm:right-6"
          >
            <Tag size={16} className="text-[#17140A]" strokeWidth={2.5} />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#17140A]/70">
                From
              </p>

              <p className="text-sm font-extrabold text-[#17140A]">
                $15,000/mo
              </p>
            </div>
          </motion.div>

          {/* rating */}
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl dark:bg-neutral-900 sm:-left-5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17140A] dark:bg-[#FFC72C]">
              <Star
                size={16}
                className="fill-[#FFC72C] text-[#FFC72C] dark:fill-[#17140A] dark:text-[#17140A]"
              />
            </span>

            <div>
              <p className="text-sm font-bold text-[#17140A] dark:text-white">
                4.8 / 5
              </p>

              <p className="text-xs text-[#3D3626]/70 dark:text-neutral-500">
                From 2,300+ tenants
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NBanner;
