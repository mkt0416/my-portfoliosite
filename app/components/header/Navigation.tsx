
import Link from 'next/link';
import React from 'react'

type Props = {
    headerListItems: {
        id: string;
        link: string;
        text: string;
    }[];
    activeLink: string;
};

const Navigation = ({ headerListItems, activeLink }: Props) => {
    return (
        <nav className='hidden md:flex items-center'>
            <ul className='flex items-center gap-2'>
                {headerListItems.map((item) => (
                    <Link
                        href={item.link}
                        key={item.id}
                    >
                        <li className={`${activeLink === item.link && 'bg-yellow-300'}
                        text-gray-600 font-semibold hover:bg-yellow-300 px-3 py-2 rounded-full duration-300`}>{item.text}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;