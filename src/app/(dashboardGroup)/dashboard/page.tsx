import React from 'react';
import { getTenantDashboardStats } from '../_actions/dashboardStats';

const DashboardHomePage = async() => {
    const tenantStatsRes=await getTenantDashboardStats()

    console.log(tenantStatsRes,'this is the eres')
    return (
        <div>
            <h2 className="text-primary text-6xl text-center font-lora py-22">Tenant Dashboard Home </h2>
        </div>
    );
};

export default DashboardHomePage;