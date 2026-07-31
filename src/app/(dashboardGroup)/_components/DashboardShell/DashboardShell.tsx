"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Settings, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { IUser, Role } from "@/app/(authGroup)/_authTypes/authTypes";
import { toast } from "sonner";
import { logout } from "@/service/logOut";
import { adminDashboardRoutes } from "../../_config/adminNavItems";
import { landLordRoutes } from "../../_config/landLordRoutes";
import { DashboardRoutes } from "../../_config/dashboardRoutes";

export function DashboardShell({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: IUser;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const userRole = user?.data?.role;

  if (!userRole) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>User role not found. Please login again or contact support.</p>
      </div>
    );
  }

  let dashboardRoutes = [];
  if (userRole === Role.ADMIN) {
    dashboardRoutes = adminDashboardRoutes;
  } else if (userRole === Role.LANDLORD) {
    dashboardRoutes = landLordRoutes;
  } else {
    dashboardRoutes = DashboardRoutes;
  }

  const closeSidebar = () => setIsSidebarOpen(false);

  const handleLogOut = async () => {
    await logout();
    toast.success(`Log Out Successfull`, {
      position: "top-center",
      className: "w-[260px] h-[72px] text-sm font-semibold",
      style: {
        border: "1px solid rgba(248, 113, 113, 0.65)",
        color: "white",
        backgroundImage: "linear-gradient(135deg, #dc2626, #ef4444, #f87171)",
        boxShadow:
          "0 20px 40px rgba(220, 38, 38, 0.35), 0 0 25px rgba(248, 113, 113, 0.45)",
      },
    });
    router.push("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={closeSidebar}
        />
      )}
      {/*  Sidebar */}
      <aside
        className={`fixed flex flex-col inset-y-0 left-0 z-50 w-64 lg:w-68 transform border-r border-slate-200 dark:border-slate-700 bg-background transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-slate-200 dark:border-slate-700">
          <Link href="/" className="text-2xl font-bold font-lora text-primary">
            RentNest
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground/70"
            onClick={closeSidebar}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Top Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/40 font-inter font-inter">
            Main Menu
          </p>
          {dashboardRoutes.map((route) => {
            const isActive = pathname === route.href;
            const Icon = route.icon;

            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={closeSidebar}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-inter font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${isActive ? "text-primary" : "text-foreground/50"}`}
                />
                {route.title}
              </Link>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-2">
          <p className="px-3 mb-1 text-xs font-semibold uppercase tracking-wider text-foreground/40 font-inter">
            Preferences
          </p>
          <Link
            href="/dashboard/profile-setting"
            onClick={closeSidebar}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-inter font-medium transition-colors ${
              pathname === "/dashboard/profile-setting"
                ? "bg-primary/10 text-primary"
                : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Settings
              className={`h-5 w-5 ${pathname === "/dashboard/profile-setting" ? "text-primary" : "text-foreground/50"}`}
            />
            Settings
          </Link>
          <button
            onClick={handleLogOut}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-inter font-medium transition-colors text-red-500 hover:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-400/10 w-full text-left cursor-pointer"
          >
            <LogOut className="h-5 w-5 opacity-80" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}

        <DashboardHeader setIsSidebarOpen={setIsSidebarOpen} user={user} />
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#e2e8f0] dark:bg-[#020618] p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6">
          <div className="font-inter text-foreground ">{children}</div>
        </main>
      </div>
    </div>
  );
}
