"use client";

import { IUserTypes } from "@/app/(authGroup)/_authTypes/authTypes";
import PrimaryBtn from "@/components/shared/Button/PrimaryBtn";
import { Edit3, Mail, Shield, StampIcon, User } from "lucide-react";
import Image from "next/image";
interface NavBarProps {
  userInfo: IUserTypes | null;
}

const SettingsProfile = ({ userInfo }: NavBarProps) => {
  if (!userInfo) return <div className="p-6">User not found</div>;

  return (
    <div className="max-w-4xl w-full mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-montserrat text-foreground">
          Profile Settings
        </h2>
        <p className="text-sm text-foreground/60 font-inter mt-1">
          Manage your personal information and account preferences.
        </p>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
        {/* Cover Banner */}
        <div className="h-32 w-full bg-linear-to-r from-amber-600 to-amber-400 dark:from-amber-900 dark:to-yellow-700"></div>

        <div className="px-6 sm:px-10 pb-10 relative">
          {/* Avatar Profile */}
          <div className="relative -mt-16 mb-6 flex justify-between items-end">
            <div className="relative w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 bg-white dark:bg-slate-800 overflow-hidden shadow-md">
              <Image
                src={
                  userInfo?.profilePhoto ||
                  "https://i.ibb.co/fGHXvNYc/profile-i.jpg"
                }
                alt={userInfo?.firstName || "Profile"}
                fill
                className="object-cover"
              />
            </div>
            <PrimaryBtn
              icon={<Edit3 className="w-4 h-4" />}
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md transition-all active:scale-95 flex items-center gap-2 font-lora"
            >
              Update Profile Coming Soon
            </PrimaryBtn>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider font-montserrat mb-3 font-lora">
                  Personal Details
                </h3>
                <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs text-foreground/50 font-medium font-inter">
                      First Name
                    </span>
                    <span className=" text-base font-semibold text-foreground truncate font-inter">
                      {userInfo?.firstName || "N/A"}
                    </span>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs text-foreground/50 font-medium font-lora">
                      Last Name
                    </span>
                    <span className="text-base font-semibold text-foreground truncate font-inter">
                      {userInfo?.lastName || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs text-foreground/50 font-medium font-lora">
                      Email Address
                    </span>
                    <span className="text-base font-semibold text-foreground truncate font-inter">
                      {userInfo?.email || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider font-montserrat mb-3 font-lora">
                  User Status
                </h3>
                <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs text-foreground/50 font-medium font-lora">
                      Role
                    </span>
                    <span className="text-base font-semibold text-foreground uppercase tracking-wide font-inter">
                      {userInfo.role || "User"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* profile status */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider font-montserrat mb-3 font-lora">
                  Profile Status
                </h3>
                <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                    <StampIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs text-foreground/50 font-medium font-lora">
                      Status
                    </span>
                    <span className="text-base font-semibold text-foreground uppercase tracking-wide font-inter">
                      {userInfo.status || "Not Found"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
