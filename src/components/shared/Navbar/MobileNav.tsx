import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}
            

const MobileNav = ({ navLinks, isOpen, onClose }: MobileNavProps) => {
  return (
    <div
      className={`backdrop-blur-3xl fixed z-90000000000000050 inset-0 transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-primary/20 backdrop-blur-sm " />

      {/* Mobile Menu */}
      <div
        className={`absolute right-0 top-0 h-full w-64 p-6 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-end mb-8">

          <button
            onClick={onClose}
            className="rounded-full p-2 "
          >
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-inter text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* auth btn */}
        <div className="mt-8 flex flex-col gap-3">
          <button className="rounded-lg border border-purple-600 py-2 text-purple-600">
            Login
          </button>

          <button className="rounded-lg bg-purple-600 py-2 text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
