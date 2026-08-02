"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, LogOut } from "lucide-react";
import { toast } from "sonner";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { IUser } from "@/app/(authGroup)/_authTypes/authTypes";
import MobileNavbar from "./MobileNavbar";
import { logout } from "@/service/logOut";
import { navLinks } from "./NavLinks";
import PrimaryBtn from "../Button/PrimaryBtn";
import SecondaryBtn from "../Button/SecondaryBtn";



const isActiveRoute = (pathname: string, path: string): boolean => {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
};

interface NavBarProps {
  user: IUser | null;
}
const NavBar = ({ user }: NavBarProps) => {
  const userInfo = user?.data;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const filteredNavLinks = user
    ? navLinks
    : navLinks.filter((link) => !link.private);

  const router = useRouter();

  const handleLogOut = async () => {
    await logout();
    toast.success("User Logged Out Successfully!");
    router.push("/login");
  };
  return (
    <header className="sticky top-0 w-full border-b dark:border-b-0 dark:shadow-2xl shadow-sm border-gray-200 bg-white dark:bg-background z-999999">
      <nav className="container px-6 md:px-8 lg:px-13 xl:px-16 mx-auto ">
        <div className="h-20 flex items-center justify-between">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-10">
            {/* LOGO */}
            <Link href="/">
              <h1 className="text-3xl font-extrabold font-montserrat">
                <span className="text-primary">
                  Rent
                </span>
                <span className="text-secondary">Nest</span>
              </h1>
            </Link>
          </div>
          {/* middle side */}
          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {filteredNavLinks.map((link) => {
              const isActive = isActiveRoute(pathname, link.path);

              return (
                <Link
                  key={link.id}
                  href={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-lg px-4 py-2 font-medium transition-all duration-300 group ${
                    isActive
                      ? "bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300"
                      : "text-gray-600 hover:text-teal-600 dark:text-text-primary dark:hover:text-teal-300"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-teal-600 transition-all duration-300 dark:bg-teal-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>
          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 relative z-[999999999999999999999999]">
            {/* Theme toggle */}
            <ThemeToggle />

       

            {/* AUTH: show user info and logout when signed in, otherwise show auth buttons */}
            {user ? (
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/dashboard"
                  className="flex items-center hover:opacity-80 transition-opacity duration-200"
                >
                  {userInfo?.profilePhoto ? (
                    <Image
                      src={userInfo?.profilePhoto}
                      alt={userInfo?.firstName || "User"}
                      width={40}
                      height={40}
                      className="w-12 h-12 rounded-full object-cover border-2 border-teal-600 hover:border-teal-700 transition-colors duration-200"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-lg">
                      {userInfo?.firstName?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                </Link>
                <button
                  onClick={handleLogOut}
                  className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-medium text-sm md:text-base hover:bg-red-100 dark:hover:bg-red-950/60 transition-all duration-300 hover:scale-105 active:scale-95 border border-red-200 dark:border-red-800 cursor-pointer"
                  title="Logout"
                >
                  <LogOut size={18} className="md:w-5 md:h-5" />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4 font-inter">
                <Link href="/auth/register">
                 
                  <PrimaryBtn>Register</PrimaryBtn>
                </Link>
                <Link href="/login">
                 

                  <SecondaryBtn>Login</SecondaryBtn>
                </Link>
              </div>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 transition"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <div className="lg:hidden">
        <MobileNavbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navLinks={filteredNavLinks}
          user={user}
          handleLogout={handleLogOut}
          currentPath={pathname}
        />
      </div>
    </header>
  );
};

export default NavBar;
