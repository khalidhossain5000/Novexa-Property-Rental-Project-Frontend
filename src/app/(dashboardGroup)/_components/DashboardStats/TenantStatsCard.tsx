"use client";

import React from "react";
import CountUp from "react-countup";
import { Clock3, Home, Send, XCircle, LucideIcon } from "lucide-react";
import { ITenantStats } from "../../_dashboardTypes/dashboardTypes";

interface TenantStatsCardProps {
  stats: ITenantStats;
}

interface StatItem {
  key: keyof ITenantStats;
  title: string;
  icon: LucideIcon;
  className: string;
  iconClass: string;
}

const statItems: StatItem[] = [
  {
    key: "totalRequestSent",
    title: "Total Requests",
    icon: Send,
    className:
      "from-blue-500/15 via-white to-white dark:from-blue-400/15 dark:via-slate-900 dark:to-slate-900",
    iconClass:
      "bg-blue-100 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300",
  },
  {
    key: "pendingRequest",
    title: "Pending Requests",
    icon: Clock3,
    className:
      "from-amber-500/15 via-white to-white dark:from-amber-400/15 dark:via-slate-900 dark:to-slate-900",
    iconClass:
      "bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300",
  },
  {
    key: "rejectedRequest",
    title: "Rejected Requests",
    icon: XCircle,
    className:
      "from-rose-500/15 via-white to-white dark:from-rose-400/15 dark:via-slate-900 dark:to-slate-900",
    iconClass:
      "bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-300",
  },
  {
    key: "activeRent",
    title: "Active Rent",
    icon: Home,
    className:
      "from-emerald-500/15 via-white to-white dark:from-emerald-400/15 dark:via-slate-900 dark:to-slate-900",
    iconClass:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300",
  },
];

const TenantStatsCard = ({ stats }: TenantStatsCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {statItems.map((item) => {
        const Icon = item.icon;
        const value = stats[item.key];

        return (
          <div
            key={item.key}
            className={`overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 ${item.className}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground/60">
                  {item.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-none text-foreground font-montserrat">
                  <CountUp end={value} duration={1.2} separator="," />
                </h3>
              </div>

              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconClass}`}
              >
                <Icon className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{
                  width: `${Math.min(100, Math.max(12, value * 20))}%`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TenantStatsCard;
