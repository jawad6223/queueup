'use client';

import { IconType } from "react-icons";
import { MdOutlineDashboard, MdOutlineBorderAll, MdPerson3 } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { IoSettingsOutline, IoGameControllerSharp } from "react-icons/io5";
import { SlNote } from "react-icons/sl";



export interface MenuItem {
  id: string;
  title: string;
  link?: string;
  icon?: IconType;
}

export interface SidebarMenu {
  menuItems: MenuItem[];
}

export const AdminMenus: SidebarMenu[] = [
  {
    menuItems: [
      {
        id: "dashboard",
        title: "Dashboard",
        link: "/",
        icon: MdOutlineDashboard,
      },
      {
        id: "orders",
        title: "Orders",
        link: "/orders",
        icon: MdOutlineBorderAll,
      },
      {
        id: "sessionmanagement",
        title: "Session Management",
        link: "/sessionmanagement",
        icon: BsBook,
      },
      {
        id: "coaches",
        title: "Coaches",
        link: "/coaches",
        icon: MdPerson3,
      },
      {
        id: "games",
        title: "Games",
        link: "/games",
        icon: IoGameControllerSharp,
      },
      {
        id: "revenuemanagement",
        title: "Revenue Management",
        link: "/revenuemanagement",
        icon: BiDollar,
      },
      {
        id: "manual",
        title: "Manual",
        link: "/manual",
        icon: SlNote,
      },
      {
        id: "setting",
        title: "Setting",
        link: "/setting",
        icon: IoSettingsOutline,
      },
    ],
  },
];