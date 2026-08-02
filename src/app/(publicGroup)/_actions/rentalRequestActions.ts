"use server";

import { cookies } from "next/headers";

export const sendRentalRequest = async (
  totalAmount: string,
  propertyId: string,
) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const payload = {
    totalAmount,
    propertyId,
  };

  const res = await fetch(`${process.env.BACKEND_URL}/api/rentals`, {
    method: "POST",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  return result;
};

//get current tenant rental req

export const getTenantRentalRequest = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/rentals`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["rental-request"],
    },
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();

  return result;
};

//get single rental request

export const getSingleRentalRequest = async (id: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/rentals/${id}`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["rental-request-details"],
    },
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();

  return result;
};
