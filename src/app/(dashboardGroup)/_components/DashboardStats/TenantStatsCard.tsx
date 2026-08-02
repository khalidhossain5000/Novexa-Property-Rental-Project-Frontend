"use client";
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
  iconClass: string;
  borderClass: string;
}

const statItems: StatItem[] = [
  {
    key: "totalRequestSent",
    title: "Total Requests",
    icon: Send,
    iconClass: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    borderClass: "border-sky-500",
  },
  {
    key: "pendingRequest",
    title: "Pending Requests",
    icon: Clock3,
    iconClass:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
    borderClass: "border-amber-500",
  },
  {
    key: "rejectedRequest",
    title: "Rejected Requests",
    icon: XCircle,
    iconClass:
      "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
    borderClass: "border-rose-500",
  },
  {
    key: "activeRent",
    title: "Active Rent",
    icon: Home,
    iconClass:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    borderClass: "border-emerald-500",
  },
];

const TenantStatsCard = ({ stats }: TenantStatsCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {statItems.map((item) => {
        const Icon = item.icon;
        const value = stats[item.key];

        return (
          <div
            key={item.key}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Top Accent */}
            <div
              className={`absolute left-0 top-0 h-1 w-full ${item.borderClass.replace(
                "border",
                "bg",
              )}`}
            />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{item.title}</p>

                <h3 className="mt-3 font-montserrat text-3xl font-bold">
                  <CountUp end={value} duration={1.2} separator="," />
                </h3>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconClass}`}
              >
                <Icon className="h-7 w-7" />
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

export default TenantStatsCard;
