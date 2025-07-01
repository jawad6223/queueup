"use client"

import { useState, useRef, useEffect } from "react";
import { DashboardData, OrderData } from "@/data/Dashboard";
import { MdKeyboardArrowDown, MdOutlineArrowRight, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import OrderChart from "./OrderChart";
import PeakHoursChart from "./PeakChart";

const Dashboard: React.FC = () => {

    const statuses = ['Active', 'Cancelled', 'Completed'];
    const [isOpen, setIsOpen] = useState<boolean[]>(Array(DashboardData.length).fill(false));
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string[]>(Array(DashboardData.length).fill('Today'));
    const [selectedStatus1, setSelectedStatus1] = useState('Active');
    const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(OrderData.length / itemsPerPage);

    const toggleDropdowns = () => setIsOpen1(!isOpen1);
    const selectOptions = (option: string) => {
        setSelectedStatus1(option);
        setIsOpen1(false);
    };


    const toggleDropdown = (index: number) => {
        setIsOpen((prev) => prev.map((open, i) => i === index ? !open : open));
    };
    const selectOption = (cardIndex: number, option: string) => {
        setSelectedStatus((prev) => prev.map((status, i) => i === cardIndex ? option : status));
        setIsOpen((prev) => prev.map((open, i) => i === cardIndex ? false : open));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRefs.current.every(
                    (ref) => ref && !ref.contains(event.target as Node)
                )
            ) {
                setIsOpen(Array(DashboardData.length).fill(false));
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen1(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const paginatedData = OrderData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    const getPageNumbers = () => {
        const pages: (number | string)[] = []

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages)
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
            } else {
                pages.push(1, '...', currentPage, '...', totalPages)
            }
        }

        return pages
    }

    return (
        <div className="bg-[#26262B] px-[32px] py-4">
            <OrderChart />
            <PeakHoursChart />
            <div className="grid sm:grid-cols-2 gap-4 mt-5">
                {DashboardData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#3D3C3F] shadow-xs px-4 py-4"
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="text-white font-medium text-[1.25rem]">
                                {item.label}
                            </h1>
                            <div
                                className="relative"
                                ref={el => { dropdownRefs.current[index] = el; }}
                            >
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="bg-[#28282D] text-white px-5 py-2 text-sm outline-none flex items-center gap-2 cursor-pointer"
                                >
                                    {selectedStatus[index]}
                                    <span className={`transition-transform duration-300 ${isOpen[index] ? 'rotate-180' : ''}`}>
                                        <MdKeyboardArrowDown />
                                    </span>
                                </button>
                                {isOpen[index] && (
                                    <ul className="absolute right-0 mt-0.5 bg-[#28282D] text-white border border-[#52525B] rounded w-36 z-10">
                                        {statuses.map((status) => (
                                            <li
                                                key={status}
                                                onClick={() => selectOption(index, status)}
                                                className={`px-4 py-2 hover:bg-[#444] cursor-pointer ${selectedStatus[index] === status ? 'bg-[#444]' : ''}`}
                                            >
                                                {status}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <p className="text-white font-semibold text-[2.7rem] mt-5">
                            {item.number}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-5 bg-[#3D3D3F] flex flex-col gap-5 p-5">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="font-medium text-[1.25rem] leading-[26.58px] text-[#FFFFFF] ">
                            Order Management
                        </div>
                        <div className="flex items-center font-exo1 gap-2.5">
                            <div className="w-2 rounded-full h-2 bg-[#34C759] leading-[0px]" />
                            <div className="font-semibold text-[0.875rem] text-[#34C759] uppercase leading-[18.61px] ">
                                Active
                            </div>
                            <div className="bg-[#34C7591A] px-3 py-1 rounded-[66px] text-[#34C759] font-exo1 text-[0.75rem] ">
                                234
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative"
                        ref={dropdownRef}
                    >
                        <button
                            onClick={toggleDropdowns}
                            className="bg-[#28282D] text-white px-5 py-2 text-sm outline-none flex items-center gap-2 cursor-pointer"
                        >
                            {selectedStatus1}
                            <span className={`transition-transform duration-300 ${isOpen1 ? 'rotate-180' : ''}`}>
                                <MdKeyboardArrowDown />
                            </span>
                        </button>
                        {isOpen1 && (
                            <ul className="absolute right-0 mt-0.5 bg-[#28282D] text-white border border-[#52525B] rounded w-36 z-10">
                                {statuses.map((status) => (
                                    <li
                                        key={status}
                                        onClick={() => selectOptions(status)}
                                        className={`px-4 py-2 hover:bg-[#444] cursor-pointer ${selectedStatus1 === status ? 'bg-[#444]' : ''}`}
                                    >
                                        {status}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {paginatedData.map((order, index) => (
                        <div key={index} className="flex items-center w-full justify-between p-4 bg-[#27272A] flex-wrap gap-4 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <div className="w-10">
                                    <img src="/images/person.png" alt="logo" width={74} height={67} />
                                </div>
                                <div className="flex flex-col ">
                                    <div className=" text-[1rem] font-bold font-exo1 text-[#FFFFFF]  ">
                                        {order.customerName}
                                    </div>
                                    <div className="font-exo1 font-normal text-[0.75rem] text-[#B8B8B8] leading-[15.95px] ">
                                        {order.service}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="leading-[0px] text-[0.875rem] text-[#FFFFFF] font-exo1 font-medium ">
                                    {order.coachName}
                                </div>
                                <div className="cursor-pointer"><MdOutlineArrowRight /></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-end gap-1 mt-4">
                    <button
                        onClick={() => goToPage(1)}
                        className="text-white cursor-pointer"
                    >
                        «
                    </button>
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        className="text-white cursor-pointer"
                    >
                        <MdKeyboardArrowLeft />
                    </button>
                    {getPageNumbers().map((page, index) =>
                        typeof page === 'number' ? (
                            <button
                                key={index}
                                onClick={() => goToPage(page)}
                                className={`px-3 py-1 ${currentPage === page ? 'border-2 border-white' : 'bg-[#2B2B2B]'
                                    } text-white rounded`}
                            >
                                {page}
                            </button>
                        ) : (
                            <span key={index} className="px-3 py-1 text-white bg-[#2B2B2B] rounded">
                                ...
                            </span>
                        )
                    )}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        className="text-white cursor-pointer"
                    >
                        <MdKeyboardArrowRight />
                    </button>
                    <button
                        onClick={() => goToPage(totalPages)}
                        className="text-white cursor-pointer"
                    >
                        »
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;