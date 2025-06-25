
import Link from 'next/link';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type Props = {
    href: string;
    children: React.ReactNode;
};

const ButtonLink = ({ href, children }: Props) => {
    return (
        <Link href={href}>
            <button className='bg-gray-600 dark:bg-gray-400 text-white px-5 py-3 font-bold rounded-full
            flex items-center gap-1 hover:bg-gray-500 duration-300'
                style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
            >
                {children}
                <MdOutlineKeyboardDoubleArrowRight />
            </button>
        </Link>
    );
};

export default ButtonLink;