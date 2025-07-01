"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoReorderThree } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
// import Drawer from "../Drawer";
// import { AdminMenus } from "@/data/Sidebar";

const Header: React.FC = () => {

    const [scrolled, setScrolled] = useState(false)
    //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    //   const toggleDrawer = () => {
    //     setIsDrawerOpen((prev) => !prev);
    //   };

    return (
        <header className={`fixed top-0 left-0 bg-[#26262B] lg:left-[216px] xl:left-[256px] 2xl:left-[316px] ml-4 lg:ml-0 mr-4 px-[32px] right-0 z-20 py-3 transition-all duration-300 ${scrolled ? 'mt-0' : 'mt-4'}`}>
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
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Image src="/images/avatar.jpg" alt="bell" width={43} height={43} className="rounded-full" />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-white font-bold">Jane Copper</h1>
                                <p className="text-white font-normal text-[14px]">Energy Specialist</p>
                            </div>
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