"use client"

import { useState, useRef, useEffect } from "react";
import { DashboardData, OrderData, OrderItem } from "@/data/Dashboard";
import { MdKeyboardArrowDown, MdOutlineArrowRight, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import OrderChart from "./OrderChart";
import PeakHoursChart from "./PeakChart";

const Dashboard: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean[]>(Array(DashboardData.length).fill(false));
    const [selectedStatus, setSelectedStatus] = useState<string[]>(Array(DashboardData.length).fill('Active'));
    const [selectedStatus1, setSelectedStatus1] = useState('Active');
    const [isOpen1, setIsOpen1] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const filteredData = OrderData[0][selectedStatus1 as keyof OrderItem] || [];
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const statuses = ['Active', 'Cancelled', 'Completed'];

    const togglesDropdown = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const toggleDropdowns = () => setIsOpen1(!isOpen1);
    const selectOptions = (status: string) => {
        setSelectedStatus1(status);
        setIsOpen1(false);
    };


    const toggleDropdown = (index: number) => {
        setIsOpen((prev) => prev.map((open, i) => i === index ? !open : false));
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
                setIsOpen1(false);
                setOpenIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const paginatedData = filteredData.slice(
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

    const statusColors = {
        Active: {
            dot: '#34C759',
            text: '#34C759',
            bg: '#34C7591A',
        },
        Completed: {
            dot: '#4CD964',
            text: '#4CD964',
            bg: '#4CD9641A',
        },
        Cancelled: {
            dot: '#FF3B30',
            text: '#FF3B30',
            bg: '#FF3B301A',
        },
    };

    const statusColor = statusColors[selectedStatus1 as keyof typeof statusColors];

    return (
        <div className="bg-[#26262B] px-[32px] py-4 rounded-bl-lg rounded-br-lg">
            <div className="grid md:grid-cols-2 gap-4">
                <OrderChart />
                <PeakHoursChart />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {DashboardData.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full rounded-2xl transform transition-transform duration-300 hover:scale-105 [background:linear-gradient(45deg,#1a1a1a,theme(colors.slate.800)_50%,#1a1a1a)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.red.500)_86%,_theme(colors.red.300)_90%,_theme(colors.red.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border"
                    >
                        <div className="bg-gradient-to-r from-[#EF4444] to-[#3D3C3F] p-4 rounded-[14px] flex flex-col">
                            <div className="flex items-center justify-between gap-3 min-h-[3.5rem]">
                                <h1 className="text-white font-medium text-[1.25rem] leading-[26.58px]">
                                    {item.label}
                                </h1>
                                <div className="relative" ref={el => { dropdownRefs.current[index] = el; }}>
                                    <button
                                        onClick={() => toggleDropdown(index)}
                                        className="bg-[#28282D] text-white px-3 py-2 text-sm outline-none flex items-center gap-2 cursor-pointer rounded-md"
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
                            <p className="text-white font-semibold text-[2.7rem] mt-3">
                                {item.numbers[selectedStatus[index] as keyof typeof item.numbers] ?? 0}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5 bg-[#3D3D3F] flex flex-col gap-5 p-5 rounded-lg">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="font-medium text-[1.25rem] leading-[26.58px] text-[#FFFFFF] ">
                            Order Management
                        </div>
                        <div className="flex items-center font-exo1 gap-2.5">
                            <div
                                className="w-2 h-2 rounded-full leading-[0px]"
                                style={{ backgroundColor: statusColor?.dot }}
                            />
                            <div className="font-semibold text-[0.875rem] uppercase leading-[18.61px]" style={{ color: statusColor?.text }}>
                                {selectedStatus1}
                            </div>
                            <div
                                className="px-3 py-1 rounded-[66px] font-exo1 text-[0.75rem]"
                                style={{
                                    color: statusColor?.text,
                                    backgroundColor: statusColor?.bg,
                                }}
                            >
                                {OrderData[0][selectedStatus1 as keyof OrderItem]?.length ?? 0}
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative"
                        ref={dropdownRef}
                    >
                        <button
                            onClick={toggleDropdowns}
                            className="bg-[#28282D] text-white px-5 py-2 text-sm outline-none flex items-center gap-2 cursor-pointer rounded-md"
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
                        <div key={index} className="flex items-center w-full justify-between p-4 bg-[#27272A] flex-wrap gap-4 rounded-lg">
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
                            <div className="relative">
                                <div className="flex items-center gap-2 cursor-pointer" onClick={() => togglesDropdown(index)}>
                                    <div className="leading-[0px] text-[0.875rem] text-[#FFFFFF] font-exo1 font-medium ">
                                        {order.coachName}
                                    </div>
                                    <div className="cursor-pointer"><MdOutlineArrowRight /></div>
                                </div>
                                {openIndex === index && (
                                    <ul className="absolute right-0 mt-2 w-[10rem] break-words bg-[#27272A] border border-[#52525B] rounded z-10 text-white shadow-lg">
                                        {order.timezone.map((coach, idx) => (
                                            <li
                                                key={idx}
                                                className="px-2 py-2 break-words"
                                                onClick={() => {
                                                    setOpenIndex(null);
                                                }}
                                            >
                                                <span className="font-semibold">{coach}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredData.length > itemsPerPage && (
                    <div className="flex items-center justify-end gap-1">
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
                )}
            </div>
        </div>
    );
};

export default Dashboard;