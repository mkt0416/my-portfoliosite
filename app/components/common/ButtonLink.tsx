
import Link from 'next/link';
import React from 'react'

type Props = {
    href: string;
    children: React.ReactNode;
};

const ButtonLink = ({ href, children }: Props) => {
    return (
        <Link href={href}>
            <button className='bg-gray-600 text-white text-lg px-6 py-4 font-bold rounded-full
            hover:bg-gray-800 duration-300'
            >
                {children}
            </button>
        </Link>
    );
};

export default ButtonLink;