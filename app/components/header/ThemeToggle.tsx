
'use client'
import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saveTheme = localStorage.getItem('theme');
        if (saveTheme === 'dark') {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
        >
            {isDark
                ? (
                    <span className='flex items-center font-semibold text-indigo-500 border border-indigo-500 p-1 text-sm
                     sm:text-base sm:p-2 rounded-md hover:bg-indigo-100 duration-300'
                    >
                        <p className="hidden sm:flex">Ligth</p>
                        <MdOutlineLightMode className=" size-4 sm:size-6" />
                    </span>
                )
                : (
                    <span
                        className='flex items-center font-semibold text-indigo-500 border border-indigo-500 p-1 text-sm
                        sm:p-2 rounded-md hover:bg-indigo-100 duration-300'
                    >
                        <p className="hidden sm:flex">Dark</p>
                        <MdOutlineDarkMode className="size-4 sm:size-5" />
                    </span>
                )
            }
        </button>
    );
};

export default ThemeToggle;