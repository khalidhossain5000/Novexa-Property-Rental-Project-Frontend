import { IUser } from '@/app/(authGroup)/_authTypes/authTypes';
import ThemeToggle from '@/components/shared/ThemeToggle/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
interface IHeaderProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  user: IUser;
}
const DashboardHeader = ({setIsSidebarOpen,user}:IHeaderProps) => {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 dark:border-slate-700 shadow-lg bg-background px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground/70"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex flex-col lg:hidden">
              <h1 className="text-lg font-semibold font-lora leading-none">
                Rent Next
              </h1>
            </div>

            {/* Page Title (Desktop) */}
            <div className="hidden lg:flex flex-col">
              <h1 className="text-xl font-bold font-lora text-foreground">
                Dashboard
              </h1>
              <p className="text-xs text-foreground/50 font-inter mt-0.5">
                {/* {isAdmin ? "Manage your library effectively" : "Track your reading activity"} */}
                Manage your library effectively
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <ThemeToggle />
            {user?.data?.profilePhoto ? (
              <Image
                src={user.data?.profilePhoto}
                alt={"User"}
                width={40}
                height={40}
                className="w-12 h-12 rounded-full object-cover border-2 border-teal-600 hover:border-teal-700 transition-colors duration-200"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-lg border-2 border-teal-700">
                {/* {user?.displayName?.charAt(0).toUpperCase() || "U"} */}
                user name
              </div>
            )}
          </div>
        </header>
    );
};

export default DashboardHeader;