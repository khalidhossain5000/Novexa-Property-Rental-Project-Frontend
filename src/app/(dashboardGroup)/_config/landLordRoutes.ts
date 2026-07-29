import {
  LayoutDashboard,
  Users,
  BookOpen,
  BookOpenText,
} from "lucide-react";

export const landLordRoutes = [
  {
    title: "Landlord Dashboard",
    href: "/landlord-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Add Property",
    href: "/landlord-dashboard/add-property",
    icon: Users,
  },
  {
    title: "My properties",
    href: "/landlord-dashboard/add-cateogry",
    icon: BookOpen
  },
  {
    title: "Rental Request",
    href: "/landlord-dashboard/rental-request",
    icon: BookOpenText,
  }
];