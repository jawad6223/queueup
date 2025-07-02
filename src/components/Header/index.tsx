"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoReorderThree } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { PiExportBold } from "react-icons/pi";
// import Drawer from "../Drawer";
// import { AdminMenus } from "@/data/Sidebar";

const Header: React.FC = () => {

    const [scrolled, setScrolled] = useState(false)
    //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    <button className="flex items-center gap-2 bg-[#EF4444] text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        Export to CSV <PiExportBold />
                    </button>
                    <LuBell className="text-white cursor-pointer text-[20px] bell-animate" />
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/images/avatar.jpg" alt="bell" width={43} height={43} className="rounded-full" />
                        <div className="flex flex-col gap-1">
                            <h1 className="text-white font-bold">Jane Copper</h1>
                            <p className="text-white font-normal text-[14px]">Energy Specialist</p>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#6A7589]/50 bg-opacity-60">
                    <div className="bg-[#26262B] w-full max-w-md rounded-lg shadow-lg p-6 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-3 text-white text-2xl cursor-pointer"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold text-white mb-4">Export Summary</h2>
                        <div className="mb-6 flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium text-white mb-2" htmlFor="export-date">
                                    Filter by Date:
                                </label>
                                <input
                                    type="date"
                                    id="export-date"
                                    className="w-full px-3 py-2 rounded bg-[#1F1F24] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white mb-2" htmlFor="export-time">
                                    Filter by Time:
                                </label>
                                <input
                                    type="time"
                                    id="export-time"
                                    className="w-full px-3 py-2 rounded bg-[#1F1F24] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-[#EF4444] text-white px-6 py-2 flex items-center gap-2 rounded font-semibold hover:bg-[#dc2626] transition-colors cursor-pointer"
                            >
                                Export <PiExportBold />
                            </button>
                        </div>
                    </div>
                </div>
            )}


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