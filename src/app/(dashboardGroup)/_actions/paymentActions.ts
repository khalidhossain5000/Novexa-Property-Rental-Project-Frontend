"use server";

import { cookies } from "next/headers";

export const createPayment = async (rentalRequestId: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }
  console.log(rentalRequestId, "rentalRequestId from create payment");
  const res = await fetch(`${process.env.BACKEND_URL}/api/payments/create`, {
    method: "POST",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({rentalRequestId}),
  });

  const result = await res.json();

  console.log(result, "this is result payment");

  return result;
};


//get payment history


export const getPaymentHistory = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/payments`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    }
  });

  const result = await res.json();

  console.log(result, "this is result payment");

  return result;
};