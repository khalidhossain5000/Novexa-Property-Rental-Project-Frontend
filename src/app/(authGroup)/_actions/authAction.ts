"use server";

import { loginSchema, registerSchema } from "@/zod/authSchema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

type TPrevState = {
  success: boolean;
  message: string;
};

//login action

export const loginAction = async (
  prevState: TPrevState,
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const cookieStore = await cookies();
  const payload = {
    email,
    password,
  };
  const validationResult = loginSchema.safeParse(payload);

  if (!validationResult?.success) {
    const errors = z.flattenError(validationResult.error);
    return {
      success: false,
      errors: errors.fieldErrors,
    };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

console.log(result,'login result')

  if (result.success) {
      const accessToken = result?.data.accessToken;
  const refreshToken = result?.data.refreshToken;

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 10,
      sameSite: "lax",
    });

    redirect("/");
  }
  return result;
};

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
  const cookieStore = await cookies();
  const payload = {
    firstName,
    lastName,
    email,
    password,
    role,
  };

  const validationResult = registerSchema.safeParse(payload);

  if (!validationResult?.success) {
    const errors = z.flattenError(validationResult.error);
    return {
      success: false,
      errors: errors.fieldErrors,
    };
  }
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const registerResult = await res.json();
  if (!registerResult.success) {
    return registerResult;
  }

  //instant login after register
  const loginRes = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const loginResult = await loginRes.json();

  const accessToken = loginResult?.data.accessToken;
  const refreshToken = loginResult?.data.refreshToken;

  if (loginResult.success) {
    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 10,
      sameSite: "lax",
    });

    redirect("/");
  }
  return loginResult;
};





