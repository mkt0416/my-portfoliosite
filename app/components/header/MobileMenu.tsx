
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineClose } from "react-icons/ai";

type Props = {
    headerListItems: {
        id: string;
        link: string;
        text: string;
    }[];
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};


const MobileMenu = ({ headerListItems, setShowMenu }: Props) => {
    return (
        <div className='w-full h-screen fixed top-0 left-0 bg-gray-800/70 z-50'>
            <motion.div
                className='w-[70%] h-full bg-gray-800 py-8 px-4 relative'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link
                    onClick={() => setShowMenu(false)}
                    href={'/'}
                >
                </Link>
                <span
                    onClick={() => setShowMenu(false)}
                    className='absolute top-8 right-4 text-3xl'
                >
                    <AiOutlineClose />
                </span>
                <ul className='flex flex-col gap-5 text-gray-200 text-lg font-semibold'>
                    {headerListItems.map((item) => (
                        <Link
                            onClick={() => setShowMenu(false)}
                            href={item.link}
                            key={item.id}
                        >
                            <li>{item.text}</li>
                        </Link>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default MobileMenu;