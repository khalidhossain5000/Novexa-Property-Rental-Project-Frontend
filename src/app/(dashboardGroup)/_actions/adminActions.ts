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


//update users action ban or unbang


export const updateUserStatus=async(userId:string,prevState:null,formData:FormData)=>{
      const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const status = formData.get("status");
   const res = await fetch(
    `${process.env.BACKEND_URL}/api/admin/users/${userId}`,
    {
      method: "PATCH",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status
      }),
    },
  );

  const result=await res.json()


  return result
}

//get all properties

export const getAllPropertiesForAdmin=async()=>{
        const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }
     const res = await fetch(
    `${process.env.BACKEND_URL}/api/admin/properties`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      }
    
    }
  );

  const result=await res.json()

  console.log(result,'admin all proeprty')

  return result
}




//all rental req for admin

export const getAllRentalReqForAdmin=async()=>{
        const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }
     const res = await fetch(
    `${process.env.BACKEND_URL}/api/admin/rentals`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      }
    
    }
  );

  const result=await res.json()

  console.log(result,'admin all rental req')

  return result
}