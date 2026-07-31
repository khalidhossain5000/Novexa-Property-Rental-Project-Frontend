"use server"

import { cookies } from "next/headers";


export const makeReview=async(prevState:null,formData:FormData)=>{
     const cookieStore = await cookies();
    
      const accessToken = cookieStore.get("accessToken")?.value || null;
    
      if (!accessToken) {
        return {
          success: false,
          message: "User not logged in",
        };
      }
      const rating=formData.get("rating")
      const content=formData.get("content")
      const propertyId=formData.get("propertyId")
    const payload ={
        rating,
        content,
        propertyId
    }
      const res = await fetch(`${process.env.BACKEND_URL}/api/reviews`, {
        method: "POST",
        headers: {
          Cookie: `accessToken=${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    
      const result = await res.json();
    
    
      return result;
}