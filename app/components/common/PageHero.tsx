
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { FaCloud, FaRocket } from "react-icons/fa";

type Props = {
    image: string;
    title: string;
};

const PageHero = ({ image, title }: Props) => {
    return (
        <div className='relative bg-blue-50 text-gray-600 dark:bg-gray-600 dark:text-white'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className='hidden lg:flex absolute w-[55px] h-[55px] rounded-xl border-4 border-gray-300 
                top-10 xl:left-56 lg:left-32 rotate-45'></div>
                <div className='hidden lg:flex absolute w-[55px] h-[55px] rounded-xl bg-red-500 top-10 
                xl:left-60 lg:left-36 rotate-45'
                >
                </div>
                <div className='hidden lg:flex absolute bottom-8 left-8 md:left-1/4 text-blue-800'>
                    <FaRocket size={60} />
                </div>
            </motion.div>
            <div className='max-w-screen-xl mx-auto flex flex-col items-center'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src={image}
                        alt=''
                        width={200}
                        height={200}
                        priority
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className='text-center'>
                    <h1 className='text-2xl lg:text-4xl font-extrabold mb-10'>{title}</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='hidden lg:flex absolute w-[55px] h-[55px] rounded-xl border-4 border-gray-300
                     bottom-10 xl:right-56 lg:right-32 rotate-45'></div>
                    <div className='hidden lg:flex absolute w-[55px] h-[55px] rounded-xl bg-green-400 bottom-10
                     xl:right-60 lg:right-36 rotate-45'
                    >
                    </div>
                    <div className='hidden lg:flex absolute top-8 right-8 md:right-1/4 text-blue-400'>
                        <FaCloud size={60} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PageHero;