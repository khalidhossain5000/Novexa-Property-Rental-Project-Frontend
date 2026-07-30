"use server";

import { propertySchema } from "@/zod/propertySchema";
import { cookies } from "next/headers";
import z from "zod";

export const createProperty = async (prevState: null, formData: FormData) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }



 





    const title = formData.get("title") as string;
  const price = Number(formData.get("price"));
  const description = formData.get("description") as string;
  const location = formData.get("location") as string;
  const categoryId = formData.get("categoryId") as string;
  const amenities = formData.get("amenities") as string;
  const thumbnailImage = formData.get("thumbnailImage") as string;

  const payload={
    title,
    price,
    description,
    location,
    status: "AVAILABLE",
    categoryId,
    amenities,
     thumbnailImage

  }
 const validationResult = propertySchema.safeParse(payload);

  if (!validationResult?.success) {
    const errors = z.flattenError(validationResult.error);
    return {
      success: false,
      errors: errors.fieldErrors,
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/landlord/properties`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );
  const result = await res.json();
  console.log(payload, "this is data of proeprty", result);

  return result;
};
