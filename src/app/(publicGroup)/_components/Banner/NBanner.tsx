"use client";

import React from "react";
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
// px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-14  default px can be used
const NBanner = () => {
  return (
    <section className=" relative overflow-hidden bg-[#FFFCF3] py-20 dark:bg-neutral-950 sm:py-24 lg:py-28">
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-130 w-130 rounded-full bg-[#FFC72C]/25 blur-3xl dark:bg-[#FFC72C]/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-95 w-95 rounded-full bg-[#FFC72C]/10 blur-3xl dark:bg-[#FFC72C]/5"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-10 justify-center">
        {/*  left column*/}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#17140A]/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#7A5B00] dark:border-white/10 dark:bg-white/5 dark:text-[#FFC72C]">
            <ShieldCheck size={14} strokeWidth={2.5} />
            Verified listings · No broker fees
          </span>

          <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-[#17140A] dark:text-white sm:text-5xl lg:text-6xl">
            Rent your next{" "}
            <span className="text-[#C98A00] dark:text-[#FFC72C]">
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

          <p className="mt-6 text-base leading-relaxed text-[#3D3626] dark:text-neutral-400 sm:text-lg">
            Thousands of verified apartments and houses, direct from owners.
            Message, tour, and sign — all without paying a broker a single taka.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="group flex items-center gap-2 rounded-full bg-[#17140A] px-6 py-3.5 text-sm font-semibold text-[#FFC72C] transition hover:bg-[#2b2517] active:scale-[0.98] dark:bg-[#FFC72C] dark:text-[#17140A] dark:hover:bg-[#e6b526]"
            >
              Browse listings
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border-2 border-[#17140A]/15 px-6 py-3.5 text-sm font-semibold text-[#17140A] transition hover:border-[#17140A]/30 hover:bg-white active:scale-[0.98] dark:border-white/15 dark:text-white dark:hover:bg-white/5"
            >
              <FaKey size={14} />
              List your property
            </button>
          </div>

          {/* feature row (replaces the search bar) */}
          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-[#17140A]/10 pt-8 dark:border-white/10 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFC72C]/20 text-[#7A5B00] dark:bg-[#FFC72C]/10 dark:text-[#FFC72C]">
                <ShieldCheck size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#17140A] dark:text-white">
                  Verified owners
                </p>
                <p className="text-xs text-[#3D3626]/70 dark:text-neutral-500">
                  Every listing checked
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFC72C]/20 text-[#7A5B00] dark:bg-[#FFC72C]/10 dark:text-[#FFC72C]">
                <BadgePercent size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#17140A] dark:text-white">
                  Zero brokerage
                </p>
                <p className="text-xs text-[#3D3626]/70 dark:text-neutral-500">
                  Deal directly, save more
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFC72C]/20 text-[#7A5B00] dark:bg-[#FFC72C]/10 dark:text-[#FFC72C]">
                <Headset size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#17140A] dark:text-white">
                  24/7 support
                </p>
                <p className="text-xs text-[#3D3626]/70 dark:text-neutral-500">
                  We&apos;re always around
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right column: image */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
          <div className="relative overflow-hidden rounded-4xl border-4 border-white shadow-[0_30px_60px_-20px_rgba(23,20,10,0.35)] dark:border-neutral-800 dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
            <Image
              src="/banner/static-banner.jpg"
              width={300}
              height={150}
              alt="Bright modern living room in a rental apartment"
              className="h-105 w-full object-cover sm:h-125"
            />
          </div>

          {/* price tag */}
          <div className="absolute -top-5 right-6 flex items-center gap-2 rounded-xl bg-[#FFC72C] px-4 py-2.5 shadow-lg">
            <Tag size={16} className="text-[#17140A]" strokeWidth={2.5} />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#17140A]/70">
                From
              </p>
              <p className="text-sm font-extrabold text-[#17140A]">
                $15,000/mo
              </p>
            </div>
          </div>

          {/* rating badge */}
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_30px_-10px_rgba(23,20,10,0.25)] dark:bg-neutral-900 dark:shadow-[0_16px_30px_-10px_rgba(0,0,0,0.5)]">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default NBanner;
