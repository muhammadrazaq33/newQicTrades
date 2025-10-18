"use client";

import { Handshake, LayoutDashboard, Wallet, BadgeHelp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const segments = pathname?.split("/") || [];
    const locale = segments[1]; // e.g. 'en'
    const route = "/" + segments.slice(2).join("/");

    const pageInfo: Record<string, { title: string; description: string }> = {
        "/dashboard": {
            title: "Dashboard Overview",
            description: "Monitor all your trades, offers, and earnings in one place.",
        },
        "/dashboard/wallet": {
            title: "Wallet Overview",
            description:
                "Manage your crypto assets, deposits, and withdrawals easily.",
        },
        "/dashboard/affiliate": {
            title: "Affiliate Program",
            description:
                "Invite traders, grow your network, and earn passive income on every successful trade.",
        },
        "/dashboard/escrow": {
            title: "Escrow Management",
            description: "Securely monitor and release your trades.",
        },
    };

    const current = pageInfo[route] || pageInfo["/dashboard"];

    const navLinks = [
        {
            href: `/${locale}/dashboard`, label: "Dashboard", icon: <LayoutDashboard/>},
        { href: `/${locale}/dashboard/wallet`, label: "Wallet", icon: <Wallet /> },
        { href: `/${locale}/dashboard/affiliate`, label: "Affiliate", icon: <Handshake /> },
        { href: `/${locale}/dashboard/escrow`, label: "Escrow", icon: <BadgeHelp /> },
      ];
    

    return (
        <div className="w-full bg-[#F6F6F6] flex flex-col">
            <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 pt-12 flex justify-between items-center flex-wrap gap-3">
                {/* Dynamic title & description */}
                <div className="mb-6 md:mb-7">
                    <h1 className="sm:text-[32px] text-[26px] font-bold text-[#009CFF] leading-8">
                        {current.title}
                    </h1>
                    <div className="mt-3 flex items-center gap-4">
                        <p className="leading-6 sm:text-[16px] text-[12px] text-[#4B5563]">
                            {current.description}
                        </p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center items-center gap-3 bg-white rounded-[8px] p-1 sm:gap-5">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                        className={`h-9 sm:text-[15px] text-[13px] items-center flex bg-[#FFFFFF] border-none relative font-medium transition-all duration-200`}
                            >
                                <div className={` items-center flex  gap-2 py-2 px-3 rounded-[8px]  ${isActive
                                        ? "bg-[#F6F6F6] text-[#009CFF]"
                                        : "text-gray-600 hover:text-[#009CFF]"
                                    }`}>
                                    {/* <Wallet className="w-6 h-6"/> */}
                                    <span>{link.icon}</span>
                                {link.label}
                              </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {children}
        </div>
    );
}
