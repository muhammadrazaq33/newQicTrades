"use client";

import { useState, useEffect } from "react";
import { Menu, X, HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/en/home" },
  { name: "Marketplace", path: "/en/marketplace" },
  { name: "Create Offer", path: "/createoffer" },
  { name: "Resell Offer", path: "/reselloffers" },
  { name: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Normalize a path: remove leading locale "/en" if present, remove trailing slash
  const normalize = (p: string) =>
    p.replace(/^\/en/, "").replace(/\/$/, "") || "/";

  const normalizedPath = normalize(pathname);

  return (
    <header className="relative w-full max-w-screen-xl mx-auto px-3 sm:px-8">
      {/* ---------- Desktop Navbar ---------- */}
      <nav className="hidden md:flex items-center justify-between bg-white px-0">
        {/* Logo */}
        <div>
          <Link href="/home">
          <Image
            src="/Images/logo1.png"
            width={170}
            height={50}
            className="object-contain"
            alt="logo"
          />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex items-center gap-8 text-[15px]">
            {navItems.map(({ name, path }) => {
              const normalizedItem = normalize(path);
              // active if exact match or if current path is a subpath of the item (e.g., /dashboard/settings)
              const isActive =
                normalizedPath === normalizedItem ||
                (normalizedItem !== "/" &&
                  normalizedPath.startsWith(normalizedItem + "/"));

              return (
                <li key={name} className="relative group">
                  <Link
                    href={path}
                    className={`relative pb-1 transition-colors font-medium md:text-[16px] text-[14px] ${
                      isActive
                        ? "text-[#139CF8]"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {name}
                    {/* animated underline */}
                    <span
                      className={`absolute left-0 -bottom-[2px] h-[3px] bg-[#139CF8] rounded-full transition-all duration-300 origin-left ${
                        isActive
                          ? "w-full opacity-100 scale-x-100"
                          : "w-0 opacity-0 scale-x-0 group-hover:w-full group-hover:opacity-70 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}

          </ul>
        </div>

        {/* Login Button */}
        <div>
          <Link href="/en">
            <button className="inline-flex items-center justify-center h-10 rounded-lg px-8 text-white bg-gradient-to-r from-[#69C5FF] to-[#009CFF] transition-colors text-[14px] sm:text-[16px] font-medium">
              Log in
            </button>
          </Link>
        </div>
      </nav>

      {/* ---------- Mobile Navbar ---------- */}
      <div className="md:hidden py-2">
        {/* Menu Icon */}
        <div className="relative h-12">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="absolute right-1 top-1.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-slate-200 shadow text-slate-700"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Dark background overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Sliding Drawer (right) */}
        <div
          className={`fixed right-0 top-0 z-50 h-full w-[85vw] max-w-sm bg-white shadow-2xl border-l border-slate-200 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header inside drawer */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
            {/* Logo inside menu */}
            <div className="flex items-center gap-2">
              <Image
                src="/Images/logo1.png"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Animated menu content */}
          <div
            className={`flex flex-col gap-3 px-5 py-5 transform transition-all duration-300 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <ul className="space-y-2">
              {navItems.map(({ name, path }) => {
                const normalizedItem = normalize(path);
                const isActive =
                  normalizedPath === normalizedItem ||
                  (normalizedItem !== "/" &&
                    normalizedPath.startsWith(normalizedItem + "/"));

                return (
                  <li key={name}>
                    <Link
                      href={path}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg border px-3.5 py-2.5 text-center text-[15px] transition-all ${
                        isActive
                          ? "border-[#139CF8]/50 text-[#139CF8] bg-[#EAF5FF]"
                          : "border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}

              {/* Escrow link */}
              <li>
                <Link
                  href="/escrow"
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-center gap-2 rounded-lg border px-3.5 py-2.5 text-[15px] transition-all ${
                    normalizedPath === "/escrow"
                      ? "border-[#139CF8]/50 text-[#139CF8] bg-[#EAF5FF]"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Escrow <HelpCircle className="h-4 w-4" />
                </Link>
              </li>
            </ul>

            {/* Login Button inside menu */}
            <div className="pt-4">
              <button className="w-full inline-flex items-center justify-center h-10 rounded-lg px-4 text-white bg-[#139CF8] hover:bg-[#0F8DE3] active:bg-[#0C7FCC] transition-colors text-sm font-medium">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
