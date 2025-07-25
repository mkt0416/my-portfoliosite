
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
                <div className='hidden lg:flex absolute w-[100px] h-[100px] rounded-xl border-4 border-gray-300 top-6 left-32 lg:left-56'></div>
                <div className='hidden lg:flex absolute w-[100px] h-[100px] rounded-xl bg-red-500 top-10 left-28 lg:left-60'></div>
                <div className='hidden lg:flex absolute bottom-20 left-8 md:left-1/4 text-blue-800'>
                    <FaRocket size={80} />
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
                        width={300}
                        height={300}
                        priority
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className='text-center'>
                    <h1 className='text-3xl lg:text-5xl font-bold mb-10'>{title}</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='hidden lg:flex absolute w-[100px] h-[100px] rounded-xl border-4 border-gray-300 bottom-6 right-32 lg:right-56'></div>
                    <div className='hidden lg:flex absolute w-[100px] h-[100px] rounded-xl bg-green-400 bottom-10 right-28 lg:right-60'></div>
                    <div className='hidden lg:flex absolute top-20 right-8 md:right-1/4 text-blue-400'>
                        <FaCloud size={80} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PageHero;