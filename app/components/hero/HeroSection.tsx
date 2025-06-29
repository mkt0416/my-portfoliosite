
'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoRocketOutline, IoBulbOutline } from "react-icons/io5";

const slides = [
    {
        image: "/images/slideimage1.svg",
        title: "Welcome to My portfolio!!",
        text: "I'm a beginner web developer who is just starting to learn about clean code and thoughtful design. I'm eager to improve and learn from more experienced developers."
    },
    {
        image: "/images/slideimage2.svg",
        title: "What I Can Do",
        text: "While I don’t have hands-on experience yet, I’m actively studying HTML, CSS, and JavaScript, and I’m beginning to explore both frontend development with React and backend technologies like Node.js and MongoDB.",
        icon: <IoBulbOutline />
    },
    {
        image: "/images/slideimage3.svg",
        title: "Always Growing",
        text: "I’m still learning every day and doing my best to grow. While I still have a lot to learn, I hope to contribute to meaningful projects and eventually become a full-stack developer.",
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
        <div className='bg-blue-100 dark:bg-gray-600 overflow-hidden'>
            <section className='w-full h-screen sm:h-[650px] max-w-screen-2xl mx-auto flex items-center justify-center px-8 md:px-12 lg:px-16'>
                <div className='flex flex-col items-center'>
                    <div className='w-full flex flex-col sm:flex-row items-center gap-5'>
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
                                <h1 className='flex items-center gap-2 text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-5'>
                                    {title} <span className='pt-2'>{icon && icon}</span>
                                </h1>
                                <p className='text-lg font-semibold mb-8'>{text}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;