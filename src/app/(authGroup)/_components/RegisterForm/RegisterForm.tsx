"use client";
import { Home, Mail, Lock, Eye } from "lucide-react";
import { IoEyeOffSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl dark:shadow-2xl dark:shadow-black/40">
        {/* Brand mark */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/15">
            <Home className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-xl md:text-2xl font-semibold text-text-primary font-lora">
            Create your account
          </h1>
          <p className="mt-1.5 text-sm text-text-secondary font-inter">
            Find your next home or list a property on RentNest.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* First / Last name */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="font-inter text-text-secondary"
              >
                First name
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Rahim"
                className="border-border bg-background text-text-primary placeholder:text-slate-400 focus-visible:ring-primary/30 dark:placeholder:text-slate-500 dark:focus-visible:ring-primary/40"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="font-inter text-text-secondary"
              >
                Last name
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Uddin"
                className="border-border bg-background text-text-primary placeholder:text-slate-400 focus-visible:ring-primary/30 dark:placeholder:text-slate-500 dark:focus-visible:ring-primary/40"
              />
            </div>
          </div>

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
                placeholder="you@example.com"
                className="border-border bg-background pl-10 text-text-primary placeholder:text-slate-400 focus-visible:ring-primary/30 dark:placeholder:text-slate-500 dark:focus-visible:ring-primary/40"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="font-inter text-text-secondary"
            >
              Password
            </Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <Input
                id="password"
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
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Must be at least 6 characters.
            </p>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-text-secondary">
              I want to
            </Label>
            <Select>
              <SelectTrigger
                id="role"
                className="w-full border-border bg-background text-text-primary focus:ring-primary/30 dark:focus:ring-primary/40"
              >
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="border-border bg-card text-text-primary">
                <SelectItem value="TENANT">Tenant</SelectItem>
                <SelectItem value="LANDLORD">Landlord</SelectItem>
                <SelectItem value="ADMIN">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary-hover dark:text-background dark:shadow-primary/10"
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-text-secondary">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:text-primary-hover"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
