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
        <aside className="lg:w-[184px] xl:w-[224px] 2xl:w-[284px] ml-4 my-4 fixed inset-y-0 left-0 z-10 h-[calc(100vh-32px)] bg-[#1A2026] rounded-lg">
            <div className="flex items-center pl-7 lg:h-[4rem] 2xl:h-[4rem] mt-5">
                <Link href="/">
                    <Image src="/images/logo.png" alt="logo" width={86} height={34} className="lg:w-[165px] xl:w-[170px]" />
                </Link>
            </div>
            <nav className="pl-7 relative py-6 space-y-4 3xl:space-y-6 overflow-y-auto overflow-x-hidden scrollbar-hide h-[calc(100vh-120px)]">
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
                                            className={`flex items-center w-fit gap-3 py-1 font-medium text-black-500 text-[18px] capitalize ${isActive ? "text-white bg-[#EF4444]/70 rounded-full border border-white px-3" : "text-white hover:text-[#EF4444]"
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