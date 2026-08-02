import React from 'react';
import { getTenantDashboardStats } from '../_actions/dashboardStats';
import TenantStatsCard from '../_components/DashboardStats/TenantStatsCard';

const DashboardHomePage = async() => {
    const tenantStatsRes=await getTenantDashboardStats()

    console.log(tenantStatsRes,'this is the eres')
    return (
        <div>
            <h2 className="text-primary text-6xl text-center font-lora py-22">Tenant Dashboard Home </h2>

                  <TenantStatsCard stats={tenantStatsRes?.data} />

        </div>
    );
};

export default DashboardHomePage;