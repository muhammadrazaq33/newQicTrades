"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/layout/Navbar";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const routeWithoutLocale =
    segments.length > 0 ? segments.slice(1).join("/") : "";

  const isAuthPage =
    routeWithoutLocale === "" || routeWithoutLocale === "signup";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main>{children}</main>
    </>
  );
}
