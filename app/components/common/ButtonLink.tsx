
import Link from 'next/link';
import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type Props = {
    href: string;
    children: React.ReactNode;
};

const ButtonLink = ({ href, children }: Props) => {
    return (
        <Link href={href}>
            <button className='bg-gray-600 text-white px-6 py-4 font-bold rounded-full
            flex items-center gap-2 hover:bg-gray-800 duration-300'
                style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)" }}
            >
                {children}
                <MdOutlineKeyboardDoubleArrowRight />
            </button>
        </Link>
    );
};

export default ButtonLink;