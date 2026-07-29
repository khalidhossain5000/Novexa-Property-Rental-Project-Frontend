"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { LogOut, Menu } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { IUser } from "@/app/(authGroup)/_authTypes/authTypes";
import Image from "next/image";
import { toast } from "sonner";
import { logout } from "@/service/logOut";
interface NavBarProps {
  user: IUser;
}
const NavBar = ({ user }: NavBarProps) => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/all-rooms", label: "All Rooms" },
  ];

  //   scroll effect sticky menu
  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogOut = async () => {
    await logout();
    toast.success("User Logged Out Successfully!");
    router.push("/login");
  };

  return (
    <header
      className={`bg-foreground fixed top-0 left-0 right-0 z-40000 transition-all duration-300 ease-in-out ${
        sticky
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-2"
      }`}
    >
      <nav className="max-w-[1400px]  mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-14">
        <div className="logo">
          <Link href={"/"}>
            <h2 className="text-2xl md:text-3xl font-lora font-medium lg:font-bold bg-gradient-to-r from-background to-surface bg-clip-text text-transparent">
              RentNest
            </h2>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                prefetch={true}
                className={`text-slate-400 dark:text-slate-200 font-medium font-inter transition-colors text-lg capitalize ${isActive ? "text-white border-b-2 border-b-secondary px-4 py-2 rounded-full" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="auth-btns flex items-center space-x-5">
          <ThemeToggle />
          {user.success && user?.data?.profilePhoto ? (
            <div className="flex items-center gap-4">
              {" "}
              <Image
                src={user.data.profilePhoto}
                alt="User profile photo"
                width={40}
                height={40}
                className="w-12 h-12 rounded-full border-2 p-1 border-secondary"
              />
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
            <Link href={"/login"}>
              {" "}
              <PrimaryButton className="px-4 lg:px-8 rounded-xl shadow-sm text-slate-200 py-1 ">
                Login
              </PrimaryButton>
            </Link>
          )}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-black dark:text-slate-100 transition-colors focus:outline-none"
            >
              <Menu size={25} />
            </button>
          </div>
        </div>

        {/* mobile menu responsive one here */}
        <MobileNav
          navLinks={navItems}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </nav>
    </header>
  );
};

export default NavBar;
