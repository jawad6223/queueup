"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoReorderThree } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { LuBell } from "react-icons/lu";
// import Drawer from "../Drawer";
// import { AdminMenus } from "@/data/Sidebar";

const Header: React.FC = () => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                event.target instanceof Node &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    //   const toggleDrawer = () => {
    //     setIsDrawerOpen((prev) => !prev);
    //   };

    return (
        <header className={`fixed top-0 left-0 bg-[#26262B] lg:left-[216px] xl:left-[256px] 2xl:left-[316px] mr-4 px-[32px] right-0 z-20 py-3 transition-all duration-300 ${scrolled ? 'mt-0' : 'mt-4'}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span
                        className="lg:hidden text-black text-[20px] cursor-pointer"
                    // onClick={toggleDrawer}
                    >
                        <IoReorderThree />
                    </span>
                    <div className="flex flex-col gap-0.5">
                        <h1 className="text-[#EE3846] font-bold text-[2rem]">
                            Good Evening John..!
                        </h1>
                        <h2 className="text-white font-semibold text-[1.125rem]">
                            Welcome to Queue Up
                        </h2>
                    </div>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                    <LuBell className="text-white cursor-pointer text-[20px]" />
                    <div className="relative" ref={dropdownRef}>
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <Image src="/images/avatar.jpg" alt="bell" width={43} height={43} className="rounded-full" />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-white font-bold">Jane Copper</h1>
                                <p className="text-white font-normal text-[14px]">Energy Specialist</p>
                            </div>
                        </div>
                        {isOpen && (
                            <div className="absolute right-0 mt-1 bg-white border border-[#C4C4C4] rounded w-full shadow-md z-10">
                                <button
                                    onClick={() => { router.push("/"); setIsOpen(false) }}
                                    className="w-full flex items-center cursor-pointer gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                >
                                    <IoIosLogOut className="text-lg" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Drawer component */}
            {/* <Drawer
        menus={AdminMenus}
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
      /> */}
        </header >
    );
};

export default Header;