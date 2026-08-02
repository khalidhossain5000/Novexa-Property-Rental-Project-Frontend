"use client";

import React from "react";
import CountUp from "react-countup";
import {
  Users,
  Building2,
  ClipboardList,
  BadgeCheck,
  LucideIcon,
} from "lucide-react";
import { IAdminStats } from "../../_dashboardTypes/dashboardTypes";

interface AdminStatsCardProps {
  stats: IAdminStats;
}

interface StatItem {
  key: keyof IAdminStats;
  title: string;
  icon: LucideIcon;
  iconClass: string;
  borderClass: string;
}

const statItems: StatItem[] = [
  {
    key: "totalUsersCount",
    title: "Total Users",
    icon: Users,
    iconClass:
      "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    borderClass: "border-sky-500",
  },
  {
    key: "totalPropertiesCount",
    title: "Properties",
    icon: Building2,
    iconClass:
      "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
    borderClass: "border-violet-500",
  },
  {
    key: "totalRentalRequestCount",
    title: "Rental Requests",
    icon: ClipboardList,
    iconClass:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
    borderClass: "border-amber-500",
  },
  {
    key: "activePropertyCount",
    title: "Active Properties",
    icon: BadgeCheck,
    iconClass:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    borderClass: "border-emerald-500",
  },
];

const AdminStatsCard = ({ stats }: AdminStatsCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {statItems.map((item) => {
        const Icon = item.icon;

        const value = Number(stats[item.key]);

        return (
          <div
            key={item.key}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Top Accent */}
            <div
              className={`absolute left-0 top-0 h-1 w-full ${item.borderClass.replace(
                "border",
                "bg"
              )}`}
            />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {item.title}
                </p>

                <h2 className="mt-3 font-montserrat text-3xl font-bold">
                  <CountUp end={value} duration={1.2} separator="," />
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconClass}`}
              >
                <Icon size={28} />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span>Updated</span>
              <span>Just now</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminStatsCard;