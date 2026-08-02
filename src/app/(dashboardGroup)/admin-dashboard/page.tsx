import React from 'react';
import { getAdminDashboardStats } from '../_actions/dashboardStats';
import AdminStatsCard from '../_components/DashboardStats/AdminStatsCard';

const AdminDashboardHome = async() => {

    const getAdminStatsRes=await getAdminDashboardStats()

    return (
        <div>
               <AdminStatsCard stats={getAdminStatsRes.data} />

        </div>
    );
};

export default AdminDashboardHome;