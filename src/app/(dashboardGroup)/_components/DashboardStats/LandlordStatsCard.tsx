"use client";

import React from "react";
import CountUp from "react-countup";
import {
  Wallet,
  Building2,
  KeyRound,
  ClipboardList,
  LucideIcon,
} from "lucide-react";
import { ILandlordStats } from "../../_dashboardTypes/dashboardTypes";

interface LandlordStatsCardProps {
  stats: ILandlordStats;
}

interface StatItem {
  key: keyof ILandlordStats;
  title: string;
  icon: LucideIcon;
  iconClass: string;
  borderClass: string;
}

const statItems: StatItem[] = [
  {
    key: "totalRentReq",
    title: "Rent Requests",
    icon: ClipboardList,
    iconClass:
      "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    borderClass: "border-sky-500",
  },
  {
    key: "totalActiveRent",
    title: "Active Rentals",
    icon: KeyRound,
    iconClass:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    borderClass: "border-emerald-500",
  },
  {
    key: "totalEarn",
    title: "Total Earnings",
    icon: Wallet,
    iconClass:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300",
    borderClass: "border-yellow-500",
  },
  {
    key: "totalPropertiesAdded",
    title: "Properties",
    icon: Building2,
    iconClass:
      "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
    borderClass: "border-violet-500",
  },
];

const LandlordStatsCard = ({ stats }: LandlordStatsCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {statItems.map((item) => {
        const Icon = item.icon;

        const rawValue = stats[item.key];

        const value =
          item.key === "totalEarn"
            ? Number(rawValue)
            : (rawValue as number);

        return (
          <div
            key={item.key}
            className={`relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
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

                <h2 className="mt-3 text-3xl font-bold font-montserrat">
                  {item.key === "totalEarn" ? (
                    <>
                      $
                      <CountUp
                        end={value}
                        separator=","
                        duration={1.2}
                      />
                    </>
                  ) : (
                    <CountUp
                      end={value}
                      separator=","
                      duration={1.2}
                    />
                  )}
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

export default LandlordStatsCard;