import React from "react";
import Link from "next/link";

import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden font-inter border border-border m-3 rounded-2xl shadow-xl bg-card border-t-4 border-primary">
      {/* Glow effects */}
      <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container px-6 md:px-8 lg:px-12 xl:px-16 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Logo + Social */}
          <div className="flex flex-col items-center gap-5">
            <Link href="/">
              <h1 className="text-3xl font-extrabold font-lora">
                <span className="text-primary">Rent</span>
                <span className="text-secondary pl-1">Nest</span>
              </h1>
            </Link>

            <div className="flex gap-4">
              {[
                FaFacebook,
                FaSquareXTwitter,
                FaLinkedin,
                FaInstagramSquare,
                FaYoutube,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#00796f] text-card dark:text-white cursor-pointer transition-all duration-300 hover:bg-primary-hover dark:bg-[#00796f90] hover:scale-110 shadow-md hover:shadow-lg"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="text-text-primary">
            <h3 className="text-2xl font-bold mb-3 font-lora">Address</h3>
            <p className="text-lg font-semibold text-text-secondary font-inter">
              742 Evergreen Terrace
            </p>
            <p className="text-lg font-semibold text-text-secondary font-inter">
              Brooklyn, NY 11201
            </p>
          </div>

          {/* Contact */}
          <div className="text-text-primary">
            <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
            <p className="text-lg font-semibold text-text-secondary">
              +929 333 9296
            </p>
            <p className="text-lg font-semibold text-text-secondary">
              contact@rentnest.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-border py-4">
        <p className="text-center text-lg font-medium text-text-muted font-inter">
          ©2026 <span className="font-bold text-text-secondary font-lora">RentNest</span>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
