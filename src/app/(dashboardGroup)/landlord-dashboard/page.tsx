import React from "react";
import { getLandlordDashboardStats } from "../_actions/dashboardStats";
import LandlordStatsCard from "../_components/DashboardStats/LandlordStatsCard";

const LandlordDashboardHome = async () => {
  const getLandlordStatsRes = await getLandlordDashboardStats();


  return (
    <div className="max-w-7xl mx-auto">
      <LandlordStatsCard stats={getLandlordStatsRes.data} />
    </div>
  );
};

export default LandlordDashboardHome;
