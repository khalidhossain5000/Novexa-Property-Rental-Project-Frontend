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
