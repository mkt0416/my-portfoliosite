
'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoRocketOutline, IoBulbOutline } from "react-icons/io5";

const slides = [
    {
        image: "/images/slideimage1.svg",
        title: "Hello World!!",
        text: "I'm a beginner developer who is just starting to learn about clean code and thoughtful design. I'm eager to improve and learn from more experienced developers."
    },
    {
        image: "/images/slideimage2.svg",
        title: "What I Can Do",
        text: "I’m actively studying HTML, CSS, and JavaScript, and I’m beginning to explore both frontend development with React and backend technologies like Node.js and MongoDB.",
        icon: <IoBulbOutline />
    },
    {
        image: "/images/slideimage3.svg",
        title: "Always Growing",
        text: "I’m still learning every day and doing my best to grow. While I still have a lot to learn, my goal is to become a developer who is trusted by others and can truly make a difference",
        icon: <IoRocketOutline />
    },
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const { image, title, text, icon } = slides[currentSlide];

    return (
        <div className='bg-gradient-to-bl from-purple-300 to-blue-300 dark:bg-none dark:bg-gray-600 overflow-hidden'>
            <section className='w-full h-screen sm:h-[650px] max-w-screen-2xl mx-auto flex items-center justify-center px-8 md:px-12 lg:px-16'>
                <div className='flex flex-col items-center'>
                    <div className='w-full flex flex-col md:flex-row items-center gap-5'>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.5 }}
                                className='w-full sm:w-1/2'
                            >
                                <Image
                                    src={image}
                                    alt=''
                                    width={800}
                                    height={800}
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentSlide + '_text'}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.5 }}
                                className='w-full text-center sm:text-left text-gray-600 dark:text-white'
                            >
                                <h1 className='flex items-center justify-center md:justify-start gap-2 text-3xl lg:text-4xl xl:text-6xl
                                 font-extrabold mb-5'
                                >
                                    {title} <span className='pt-2'>{icon && icon}</span>
                                </h1>
                                <p className='md:text-lg text-center md:text-left font-semibold mb-8'>{text}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;