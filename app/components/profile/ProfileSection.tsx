
'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoRocketOutline, IoBulbOutline } from "react-icons/io5";

const slides = [
    {
        title: "Hello World!!",
        text: "私は、クリーンコードや思慮深いデザインについて学び始めたばかりの初心者開発者です。より経験豊富な開発者から学び、成長していきたいと考えています。"
    },
    {
        title: "What I Can Do",
        text: "私は現在、HTML・CSS・JavaScriptを積極的に学習しており、Reactを使ったフロントエンド開発や、Node.js・MongoDBといったバックエンド技術の習得にも取り組み始めています。",
        icon: <IoBulbOutline />
    },
    {
        title: "Always Growing",
        text: "私は毎日学び続け、成長するために全力を尽くしています。まだ学ぶべきことはたくさんありますが、他の人から信頼され、真に価値を生み出せる開発者になることを目標としています。",
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
