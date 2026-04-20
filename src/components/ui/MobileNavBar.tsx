"use client";

import {Menu} from "lucide-react";
import {ThemeSwitch} from "@/components/ui/ThemeSwitch";
import {useEffect, useState} from "react";
import Logo from "@/components/ui/Logo";
import UserCardMobile from "@/components/ui/UserCardMobile";
import {usePathname} from "next/navigation";
import Link from "next/link";

const menuItems = [
    {url: "/", title: "Dashboard"},
    {url: "/logs", title: "Logs"},
    {url: "/projects", title: "Projects"},
    {url: "/user", title: "User"}
];

export default function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(true);
    };

    return (
        <div className="flex flex-row md:hidden justify-between items-center mb-3">
            <div className="flex flex-row items-center gap-2">
                <Menu className="h-7 w-7 text-primary hover:cursor-pointer"
                      onClick={() => toggleMenu()}/>
                <Logo/>
            </div>

            <ThemeSwitch/>

            {/*mobile menu*/}
            <div className={`fixed inset-0 md:hidden z-40 bg-surface-highest/20 backdrop-blur-lg transition-all duration-300 ease-in-out 
                            ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} `}
                 onClick={() => setIsOpen(false)}>
                <div className="bg-surface-highest h-full max-w-5/6 rounded-r-[80px] py-14 px-8 flex flex-col gap-8">
                    <Logo/>
                    <UserCardMobile/>

                    <ul className="flex flex-col w-full gap-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link className={`px-6 py-4 block text-center font-bold text-lg rounded-3xl uppercase ${pathName === item.url ? "bg-primary/10" : ""}`}
                                      href={`${item.url}`}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}