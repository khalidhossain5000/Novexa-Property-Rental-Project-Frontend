"use server";

import { cookies } from "next/headers";

export const createCategories = async (
  prevState: string,
  formData: FormData,
) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }
  const name = formData.get("name");
  const payload = { name };

  const res = await fetch(`${process.env.BACKEND_URL}/api/categories`, {
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

export const getPropertyCategories = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/categories`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["property-categories"],
    },
  });
  const result = await res.json();

  return result;
};
