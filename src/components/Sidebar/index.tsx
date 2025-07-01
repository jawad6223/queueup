"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenu } from "@/data/Sidebar";

interface Props {
    menus: SidebarMenu[];
}

const Sidebar: React.FC<Props> = ({ menus }) => {

    const location = usePathname();

    return (
        <aside className="lg:w-[200px] xl:w-[240px] 2xl:w-[300px] fixed inset-y-0 left-0 z-10 h-screen bg-[#1A2026]">
            <div className="flex items-center pl-10 lg:h-[4rem] 2xl:h-[4rem] mt-5">
                <Link href="/dashboard">
                    <Image src="/images/logo.png" alt="logo" width={86} height={34} className="lg:w-[165px] xl:w-[170px]" />
                </Link>
            </div>
            <nav className="pl-10 relative py-6 space-y-4 3xl:space-y-6 overflow-y-auto overflow-x-hidden scrollbar-hide h-[calc(100vh-67px)]">
                {menus.map((sidebarMenu, index) => (
                    <div key={index}>
                        <ul className="space-y-6">
                            {sidebarMenu.menuItems.map((item) => {
                                const isActive =
                                    item.link === "/"
                                        ? location === "/"
                                        : location.startsWith(item.link || "");
                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link || ""}
                                            className={`flex items-center relative overflow-visible gap-3 p-2 font-medium text-black-500 text-[18px] capitalize hover:text-[#EF4444] ${isActive ? "text-[#EF4444]" : "text-white"
                                                } transition-colors duration-300`}
                                        >
                                            {item.icon && (
                                                <span>
                                                    <item.icon />
                                                </span>
                                            )}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;