"use server";

import { cookies } from "next/headers";

const backendUrl = process.env.BACKEND_URL;

export const getTenantDashboardStats = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(`${backendUrl}/api/rentals/tenant/dashboard/stats`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["tenant-stats"],
    },
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

  return result;
};

//get landlord stats

export const getLandlordDashboardStats = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(`${backendUrl}/api/landlord/dashboard/stats`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["tenant-stats"],
    },
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

  return result;
};

//dashboard admin stats

export const getAdminDashboardStats = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(`${backendUrl}/api/admin/admin/stats`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["tenant-stats"],
    },
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

  return result;
};
