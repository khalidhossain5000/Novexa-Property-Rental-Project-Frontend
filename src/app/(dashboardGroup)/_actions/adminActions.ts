"use server";
import { cookies } from "next/headers";

export const getAllUsers = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/admin/users`, {
    cache: "force-cache",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["admin-all-users-manage"],
    },
  });

  const result = await res.json();

  return result;
};
