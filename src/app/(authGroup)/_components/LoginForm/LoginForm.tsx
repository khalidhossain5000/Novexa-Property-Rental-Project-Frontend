"use client";

import React, { useActionState, useState } from "react";
import { Home, Mail, Lock, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoEyeOffSharp } from "react-icons/io5";
import Link from "next/link";
import { loginAction } from "../../_actions/authAction";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
      const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") ?? ""
  const [state, action, isPending] = useActionState(loginAction.bind(null,redirectTo), false);
  const errorMessage = state?.message;
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl dark:shadow-2xl dark:shadow-black/40">
        {/* Brand mark */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/15">
            <Home className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold text-text-primary">
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-text-secondary">
            Log in to your RentNest account.
          </p>
        </div>

        {/* Form */}
        <form action={action} className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-text-secondary">
              Email address
            </Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className="border-border bg-background pl-10 text-text-primary placeholder:text-slate-400 focus-visible:ring-primary/30 dark:placeholder:text-slate-500 dark:focus-visible:ring-primary/40"
              />
            </div>
            {state.errors?.email && (
              <p className="text-red-600 font-inter">{state.errors.email[0]}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-text-secondary">
                Password
              </Label>
            </div>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="***********"
                className="border-border bg-background pl-10 pr-10 text-text-primary placeholder:text-slate-400 focus-visible:ring-primary/30 dark:placeholder:text-slate-500 dark:focus-visible:ring-primary/40"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
              >
                {showPassword ? (
                  <IoEyeOffSharp className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {state.errors?.password && (
              <p className="text-red-600 font-inter">
                {state.errors.password[0]}
              </p>
            )}
          </div>
          {!state.success && (
            <p className="font-lora text-red-600 text-center py-1">
              {errorMessage}
            </p>
          )}
          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary-hover dark:text-background dark:shadow-primary/10 cursor-pointer"
          >
            {isPending ? "Login in ......" : " Log in"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-text-secondary">
          Don&apos;t have an account?{" "}
          <Link
            href="register"
            className="font-medium text-primary hover:text-primary-hover"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
