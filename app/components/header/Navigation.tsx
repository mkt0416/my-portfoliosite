
import Link from 'next/link';
import { MdLogout } from "react-icons/md";

type Props = {
    headerListItems: {
        id: string;
        link: string;
        text: string;
    }[];
    activeLink: string;
    logout: () => void;
};

const Navigation = ({ headerListItems, activeLink, logout }: Props) => {
    return (
        <nav className='hidden md:flex md:flex-wrap items-center'>
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
                <button
                    onClick={logout}
                    className='flex items-center font-semibold text-indigo-500 border border-indigo-500 py-2 px-2 rounded-md
                  hover:bg-indigo-100 duration-300'
                >
                    <span>Logout</span>
                    <MdLogout className='pt-1 size-6' />
                </button>
            </ul>

        </nav>
    );
};

export default Navigation;