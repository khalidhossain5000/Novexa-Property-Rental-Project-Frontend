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

  const payload = {
    title,
    price,
    description,
    location,
    categoryId,
    amenities,
    thumbnailImage,
  };
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


  return result;
};

//get current logged in landlord property

export const getCurrentLandlordProperties = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/landlord/properties/my-properties`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );
  const result = await res.json();

  return result;
};

//update property

export const updatePropertyAction = async (propertyId:string, prevState: null, formData: FormData) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const title = (formData.get("title") as string) ?? "";
  const price = Number(formData.get("price")) ?? "";
  const description = (formData.get("description") as string) ?? "";
  const location = (formData.get("location") as string) ?? "";
  const categoryId = (formData.get("categoryId") as string)
  const amenities = (formData.get("amenities") as string) ?? "";
  const thumbnailImage = (formData.get("thumbnailImage") as string) ?? "";

  const payload = {
    title,
    price,
    description,
    location,
    categoryId,
    amenities,
    thumbnailImage,
  };

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/landlord/properties/${propertyId}`,
    {
      method: "PUT",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );
  const result = await res.json();
  console.log(payload, "this isupdated data and result", result);

  return result;
};


//delete property

export const deletePropertyAction=async(prevState:null,formData:FormData)=>{
    const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const propertyId=formData.get("propertyId")
    const res = await fetch(
    `${process.env.BACKEND_URL}/api/landlord/properties/${propertyId}`,
    {
      method: "DELETE",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
    
    },
  );
  const result=await res.json()

console.log(result,'delete result')
  return result
}


//get rental request

export const getRentalRequestForLandlord=async()=>{
    const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/landlord/properties/requests`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );
  const result = await res.json();
console.log(result,'rental req all')
  return result
}