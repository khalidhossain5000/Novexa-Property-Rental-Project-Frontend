/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Forbidden = () => {
  return (
      <div className="container lg:max-w-full lg:px-12 mx-auto min-h-screen shadow-2xl bg-[#fd8d01]">
      <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-poppins font-bold md:font-extrabold text-slate-100 text-center   py-6 lg:py-2 pt-9 lg:pt-5 lg:pb-6">
        Oops! You Shall Not Pass!
      </h1>
      <h1 className="text-sm md:text-xl xl:text-3xl py-3 pt-2 2xl:pb-6  font-medium max-w-5xl mx-auto text-center font-playfair dark:text-slate-100 ">
        Looks like this page is more secret than your browser history. Try going
        back before Gandalf gets mad.
      </h1>
      <div className="imgs text-center py-9 lg:py-5  2xl:py-0">
        <Image 
        src="/forbidden/forbiddenImg.png"
        alt="forbidden image"
        width={500}
        height={150}
        className='  mx-auto lg:w-6/12'
        />
      </div>
      <div className="w-full  text-center ">
        <Link href="/">
          <button className="hover:scale-110 transition duration-300 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16100f_0%,#f9a300_50%,#f9a300_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#ffffff] dark:bg-slate-950 px-7 text-sm lg:text-xl lg:font-bold font-medium text-black dark:text-white backdrop-blur-3xl gap-2 undefined ">
              Back Home
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
