import {
  LayoutDashboard,
  Banknote,
  HouseWifi
} from "lucide-react";

export const DashboardRoutes = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Rental Request",
    href: "/dashboard/my-rental-request",
    icon: HouseWifi
  },{
    title: "Payment History",
    href: "/dashboard/payment-history",
    icon:Banknote
  }
];