'use client';

import { IconType } from "react-icons";
import { MdOutlineDashboard, MdOutlineBorderAll, MdPerson2 } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";


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
        icon: MdPerson2,
      },
      {
        id: "games",
        title: "Games",
        link: "/games",
        icon: MdPerson2,
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
        icon: BiDollar,
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