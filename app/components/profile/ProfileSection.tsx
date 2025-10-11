
'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoRocketOutline, IoBulbOutline } from "react-icons/io5";

const slides = [
    {
        title: "Hello World!!",
        text: "I'm a beginner developer who is just starting to learn about clean code and thoughtful design. I'm eager to improve and learn from more experienced developers."
    },
    {
        title: "What I Can Do",
        text: "I’m actively studying HTML, CSS, and JavaScript, and I’m beginning to explore both frontend development with React and backend technologies like Node.js and MongoDB.",
        icon: <IoBulbOutline />
    },
    {
        title: "Always Growing",
        text: "I’m still learning every day and doing my best to grow. While I still have a lot to learn, my goal is to become a developer who is trusted by others and can truly make a difference.",
        icon: <IoRocketOutline />
    },
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const { title, text, icon } = slides[currentSlide];

    return (
        <div className='relative w-screen h-48 md:h-80 overflow-hidden'>
            <Image
                src={"/images/profileSection.jpg"}
                alt='background'
                fill
                priority
                unoptimized
                className='object-cover object-center'
            />
            <div className="absolute inset-0 bg-black/60" />
            <section className='absolute inset-0 flex justify-center items-center px-8 md:px-12 lg:px-16'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className=' text-white drop-shadow-lg px-6'
                    >
                        <div>
                            <h1 className='flex items-center justify-start gap-2 text-2xl md:text-5xl font-extrabold mb-4'>
                                {title} {icon && <span className='pt-1'>{icon}</span>}
                            </h1>
                            <p className='text-xs sm:text-lg font-medium max-w-xl mx-auto md:mx-0'>{text}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    );
};

export default HeroSection;
