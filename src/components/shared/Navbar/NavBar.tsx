"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home", auth: false },
    { href: "/all-rooms", label: "All Rooms", auth: false },
  ];
  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // sticky code ends
  return (
    <header
      className={`py-3 transition-all duration-300`}
    >
      <nav className="container  mx-auto flex h-16 items-center justify-between px-4">
        <div className="logo">
          <Link href={"/"}></Link>
        </div>
        <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                prefetch={true}
                className={`text-black dark:text-white hover:text-gray-600 font-semibold transition-colors text-xl capitalize ${isActive ? "bg-[#fceede] dark:bg-[#f9a300] px-4 py-2 rounded-full" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="auth-btns hidden md:flex items-center space-x-5">
          {/* Mobile Menu */}
        </div>

        {/* mobile menu responsive one here */}
      </nav>
    </header>
  );
};

export default NavBar;
