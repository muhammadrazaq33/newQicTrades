"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Shield,
  HelpCircle,
  Globe,
  ChevronDown,
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const [language, setLanguage] = useState("EN");

  return (
    <div className="min-h-dvh bg-white text-[#111827]">
      {/* Header */}
      <header className="w-full max-w-screen-xl mx-auto px-3 sm:px-8">
        <div className="flex h-20 items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/Images/logo.png"
              width={170}
              height={50}
              className="object-contain"
              alt="logo"
            />
          </div>

          <nav className="flex items-center sm:gap-6 gap-2 sm:text-sm text-xs text-[#6b7280]">
            <a href="#" className="hover:text-[#111827]">
              Login
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#111827]"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Support</span>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-[#f3f4f6]"
                  aria-label="Change language"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="rounded-md border border-[#e5e7eb] bg-white"
              >
                {["EN", "ES", "FR", "DE"].map((l) => (
                  <DropdownMenuItem
                    key={l}
                    onClick={() => setLanguage(l)}
                    className={language === l ? "text-[#1da1f2]" : ""}
                  >
                    {l}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <div className="h-px w-full bg-[#e5e7eb]" />
      </header>

      {/* Main */}
      <main className="mx-auto w-full max-w-6xl px-4 sm:pb-20 pb-10 pt-8 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left gradient panel */}
          <section
            className="relative rounded-[12px] p-8 md:p-12"
            style={{
              background:
                "linear-gradient(135deg, #089FFF 25%, #64C3FF 95.71%)",
            }}
          >
            <div className="flex h-full flex-col items-center justify-center text-center">
              {/* Emblem */}
              <div>
                <Image
                  src="/Images/sigupicon.png"
                  width={400}
                  height={400}
                  className="object-contain"
                  alt="logo"
                />
              </div>
              <h2 className="mb-6 sm:mt-8 mt-4  text-2xl font-bold leading-tight text-white md:text-3xl">
                Trade Smarter, Faster, and Safer.
              </h2>
              <p className="max-w-md text-pretty text-[#ffffff]">
                Join QicTrader to buy, sell, and resell offers using secure
                escrow.
              </p>
            </div>
          </section>

          {/* Right form card */}
          <Card className="rounded-[12px] border-[#e5e7eb] shadow-[0_6px_30px_rgba(17,24,39,0.04)]">
            <CardHeader className="pb-2">
              <CardTitle className="sm:text-[24px] text-[18px] text-[#000000] font-bold">
                <span className="flex items-center gap-4">
                  Welcome Back
                  <Image
                    src="/Images/welcomeimage.png"
                    width={50}
                    height={50}
                    className="object-contain"
                    alt="logo"
                  />
                </span>
              </CardTitle>
              <CardDescription className="text-[#6B7280] sm:text-[18px] text-[13px] ">
                Sign in to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="sm:space-y-6 space-y-3">
              {/* Email */}
              <div className="sm:space-y-2 space-y-1">
                <Label
                  htmlFor="email"
                  className="font-medium sm:text-[16px] text-[12px] text-[#000000]"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 sm:py-[11px] sm:px-[15px] py-[8px] px-[12px]  sm:text-[16px] text-[12px] rounded-[10px] border-1 border-[#DBEAFE] bg-white text-[#000000] placeholder:text-[#9ca3af] focus:bg-[#eef5ff] focus-visible:bg-[#eef5ff] focus-visible:ring-[#1da1f2]"
                  aria-label="Email Address"
                />
              </div>

              {/* Password */}
              <div className="sm:space-y-2 space-y-1">
                <Label
                  htmlFor="password"
                  className="font-medium sm:text-[16px] text-[12px] text-[#000000]"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="h-12 sm:py-[11px] sm:px-[15px] py-[8px] px-[12px]  sm:text-[16px] text-[12px] rounded-[10px] border-1 border-[#DBEAFE] bg-white text-[#000000] pr-12 placeholder:text-[#9ca3af] focus:bg-[#eef5ff] focus-visible:bg-[#eef5ff] focus-visible:ring-[#1da1f2]"
                    aria-label="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#6b7280] hover:bg-[#f3f4f6]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* CTA */}
              <Button
                type="button"
                className="h-12 w-full rounded-[10px] bg-gradient-to-b from-[#019CFF] to-[#69C5FF] hover:from-[#0085E3] hover:to-[#58B7F5] transition-all duration-300 sm:text-[18px] text-[13px] font-medium text-white mt-4"
              >
                Create Account
              </Button>

              {/* Secondary text */}
              <div className="pt-2 text-center sm:text-[16px] text-[14px]">
                <span className="text-[#000000]">
                  Don&apos;t have an account?{" "}
                </span>
                <Link
                  href="signup"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom notice */}
        <div className="mx-auto sm:mt-12 mt-8 flex max-w-3xl sm:items-center items-start justify-center sm:gap-3 gap-1.5 text-center sm:text-[18px] text-[12px] text-[#000000]">
          <Lock
            className="sm:h-5 h-4 sm:w-5 w-4 text-[#2563EB]"
            aria-hidden="true"
          />
          <span>
            Protected by QicTrader Escrow System — Trade securely with peace of
            mind.
          </span>
        </div>

        {/* Footer */}
        <p className="sm:mt-6 mt-4 text-center sm:text-[18px] text-[12px] text-[#9ca3af]">
          © 2025 QicTrader. All rights reserved.
        </p>
      </main>
    </div>
  );
}
