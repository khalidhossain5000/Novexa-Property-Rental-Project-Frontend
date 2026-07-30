import {
  LayoutDashboard,
  Users,
  HouseWifi,
  Warehouse,
  ListSortDescending
} from "lucide-react";

export const adminDashboardRoutes = [
  {
    title: "Admin Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Manage Users",
    href: "/admin-dashboard/manage-users",
    icon: Users,
  },
  {
    title: "Add Categories",
    href: "/admin-dashboard/add-categories",
    icon: ListSortDescending
  }, {
    title: "All Properties",
    href: "/admin-dashboard/all-properties",
    icon:HouseWifi
  },
  {
    title: "All Rentals",
    href: "/admin-dashboard/all-rentals",
    icon:Warehouse
  }
];