import {
  LayoutDashboard,
  MapPinHouse,
  LandPlot 
} from "lucide-react";
import { FaWarehouse } from "react-icons/fa";

export const landLordRoutes = [
  {
    title: "Landlord Dashboard",
    href: "/landlord-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Add Property",
    href: "/landlord-dashboard/add-property",
    icon: LandPlot ,
  },
  {
    title: "My properties",
    href: "/landlord-dashboard/my-properties",
    icon: MapPinHouse
  },
  {
    title: "Rental Request",
    href: "/landlord-dashboard/rental-request",
    icon: FaWarehouse,
  }
];