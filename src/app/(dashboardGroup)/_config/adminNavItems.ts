import {
  LayoutDashboard,
  Users,
  BookOpen,
  BookOpenText,
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
    title: "Add Category",
    href: "/dashboard/add-cateogry",
    icon: BookOpen
  },
  {
    title: "Manage Bookings",
    href: "/dashboard/manage-bookings",
    icon: BookOpenText,
  }
];