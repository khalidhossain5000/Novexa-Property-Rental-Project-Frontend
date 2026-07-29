import React from "react";
import { DashboardShell } from "./_components/DashboardShell/DashboardShell";
import { getMe } from "@/service/getMe";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user=await getMe()
  return <DashboardShell user={user}> {children}</DashboardShell>;
};

export default DashboardLayout;
