"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// Icons
import { MountainSnow, Menu, X } from "lucide-react";

const Navbar = () =>{
    const [scrollY, setScrollY] = useState(0);
    const [toggle, setToggle] = useState(false);
    useEffect(() =>{
        const handledScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handledScroll);
        return () => window.removeEventListener("scroll", handledScroll); 
    },[])
    
    const bgNavbar = scrollY > 25 ? "bg-white border-b border-(--border)" : "bg-transparent border-none";
    const textColor = scrollY > 25 ? "text-[#1A331A]" : "text-white";
    const sliderMenu =  toggle  ?  "block flex" : "hidden md:flex";
    const liHover = "duration-200 hover:bg-(--accent)/15 hover:text-(--primary) rounded-lg p-2";
    const navList = [
        {name: "Beranda", href: "/"},
        {name: "Galeri", href: "/#test"},
        {name: "Aktivitas", href: "/aktivitas"},
        {name: "Tiket", href: "/ticket"},
        {name: "Fasilitas", href: "/fasilitas"},
        {name: "Hubungi Kami", href: "/hubungi"},
    ]
    const Pathname = usePathname();
    
    return (
        <nav
            className={`fixed left-0 right-0 ${bgNavbar} ${textColor} font-semibold z-50 duration-400`}>
            <div className="max-w-7xl   mx-auto flex justify-between items-center px-5 md:px-10 py-5 ">
                <Link href={"/"} className="flex gap-2 items-center">
                    <div className="bg-(--primary) p-2 rounded-full">
                        <MountainSnow className=" text-[28px] text-white" />
                    </div>
                    <span className="font-bold text-xl">Bukit Waruwangi</span>
                </Link>

                <ul
                    className={`${bgNavbar} ${sliderMenu} border-t border-(--border) backdrop-blur duration-400 absolute top-21 left-0 w-full p-5 md:static md:border-none md:backdrop-blur-none md:bg-transparent md:w-auto md:p-0 flex-col md:flex-row gap-7`}>
                    {navList.map((navItem) => {
                        const isActive = Pathname === navItem.href;
                        return (
                            <li
                                key={navItem.name}
                                className={`${liHover} ${
                                    isActive ? "text-(--primary)" : ""
                                }`}>
                                <Link href={navItem.href}>{navItem.name}</Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="md:hidden text-4xl">
                    {toggle ? (
                        <X onClick={() => setToggle(!toggle)} />
                    ) : (
                        <Menu onClick={() => setToggle(!toggle)} />
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;