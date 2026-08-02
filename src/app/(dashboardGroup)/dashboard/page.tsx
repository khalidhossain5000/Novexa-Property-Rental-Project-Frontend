import React from "react";
import { getTenantDashboardStats } from "../_actions/dashboardStats";
import TenantStatsCard from "../_components/DashboardStats/TenantStatsCard";

const DashboardHomePage = async () => {
  const tenantStatsRes = await getTenantDashboardStats();

  return (
    <div className="py-6 p-4">
      <TenantStatsCard stats={tenantStatsRes?.data} />
    </div>
  );
};

export default DashboardHomePage;
