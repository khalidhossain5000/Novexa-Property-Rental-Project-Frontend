import React from 'react';
import { getAdminDashboardStats } from '../_actions/dashboardStats';
import AdminStatsCard from '../_components/DashboardStats/AdminStatsCard';

const AdminDashboardHome = async() => {

    const getAdminStatsRes=await getAdminDashboardStats()

    return (
        <div className="p-4 lg:p-9">
               <AdminStatsCard stats={getAdminStatsRes.data} />

        </div>
    );
};

export default AdminDashboardHome;