
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PiLego } from "react-icons/pi";
import { TbLego } from "react-icons/tb";

const sideBarData = [
    {
        id: "1",
        text: "Top",
        icon: <TbLego />,
        link: "/site/lego/",
    },
    {
        id: "2",
        text: "セットで検索",
        icon: <TbLego />,
        link: "/site/lego/sets",
    },
    {
        id: "3",
        text: "ミニフィグで検索",
        icon: <TbLego />,
        link: "/site/lego/minifig",
    },
];

const LegoSideBar = () => {
    const [activeLink, setActiveLink] = useState("");
    const pathName = usePathname();

    useEffect(() => {
        setActiveLink(pathName);
    }, [pathName]);

    return (
        <>
            <div className="hidden lg:flex flex-col w-60 xl:w-72 min-h-screen pt-10 bg-yellow-100 dark:bg-yellow-800 
             text-gray-600 dark:text-gray-200"
            >
                <div className="flex items-center gap-1 text-xl xl:text-2xl font-bold pl-5">
                    <PiLego className="text-yellow-500" />
                    <h1>LEGO Gallery</h1>
                </div>
                <ul className="pt-10">
                    {sideBarData.map((data) => (
                        <li
                            key={data.id}
                            className={`pl-5 ${activeLink === data.link && "bg-yellow-200 dark:text-gray-500 border-r-4 border-yellow-600"}`}
                        >
                            <Link
                                href={data.link}
                                className="flex items-center gap-1 font-bold py-4"
                            >
                                <span className="text-yellow-500">
                                    {data.icon}
                                </span>
                                <p>{data.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full lg:hidden absolute top-20 text-gray-600 dark:text-gray-200 bg-yellow-200
             dark:bg-yellow-700 px-5 py-2 sm:py-4 z-40"
            >
                <ul className="flex flex-wrap items-center justify-between gap-2">
                    {sideBarData.map((data) => (
                        <li
                            key={data.id}
                            className={`px-4  ${activeLink === data.link && "bg-yellow-400 dark:bg-yellow-600 rounded-full py-1"} `}
                        >
                            <Link
                                href={data.link}
                                className="flex items-center gap-1 text-lg xl:text-xl font-bold"
                            >
                                <span className="text-yellow-500">
                                    {data.icon}
                                </span>
                                <p className="text-sm">{data.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default LegoSideBar;