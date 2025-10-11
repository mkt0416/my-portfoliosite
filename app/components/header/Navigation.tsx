
import Link from 'next/link';

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
        <nav className='hidden lg:flex items-center'>
            <ul className='flex items-center gap-1'>
                {headerListItems.map((item) => (
                    <Link
                        href={item.link}
                        key={item.id}
                    >
                        <li className={`${activeLink === item.link ? 'bg-indigo-400 text-white' : ''}
                        dark:text-white text-lg font-semibold hover:bg-indigo-400 px-3 py-2 rounded-full duration-300`}>
                            {item.text}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;