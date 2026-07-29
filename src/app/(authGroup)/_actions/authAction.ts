"use server";

import { registerSchema } from "@/zod/authSchema";
import { redirect } from "next/navigation";
import z from "zod";

type TPrevState = {
  success: boolean;
  message: string;
};


//login action

export const loginAction=async(prevState:TPrevState,formData:FormData)=>{

}














//user registration action



export const registerAction = async (
  prevState: TPrevState,
  formData: FormData,
) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");

  const payload = {
    firstName,
    lastName,
    email,
    password,
    role,
  };

const validationResult=registerSchema.safeParse(payload)

console.log(validationResult,'thisis validation console',validationResult?.error?.flatten().fieldErrors)



if(!validationResult?.success){
    const errors=z.flattenError(validationResult.error)
    return {
        success:false,
        errors:errors.fieldErrors
    }
}
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
if(result.success){
    redirect("/")
}
  console.log(result, "this is payload inside auth action");
//instant auto login after successfull registration will be done here
  return result;
};
