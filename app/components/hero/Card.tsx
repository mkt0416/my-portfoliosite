
'use client'
import Link from "next/link";
import { useEffect } from "react";
import { CardDataType, CardModalDataType } from "./CardSection";
import { IoIosArrowDropright } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import 'aos/dist/aos.css';
const AOS: any = require('aos');

type Props = {
    card: CardDataType;
    setModalData: React.Dispatch<React.SetStateAction<CardModalDataType | null>>;
};

const Card = ({ card, setModalData }: Props) => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-col items-center gap-5 bg-gradient-to-bl from-purple-300 to-blue-300 dark:bg-none dark:bg-indigo-900
            py-20  px-4 rounded-2xl relative md:mb-0 h-72 md:h-auto md:shadow-xl"
        >
            <button
                onClick={() => setModalData({
                    details: {
                        technologies: card.details.technologies,
                        features: card.details.features,
                        challenge: card.details.challenge,
                    },
                })}
                className="absolute top-5 right-5"
            >
                <BsInfoCircle className="size-8" />
            </button>
            <div className="flex items-center gap-1 text-3xl sm:text-4xl xl:text-5xl font-extrabold">
                <span>{card.icon}</span>
                <h3>{card.title}</h3>
            </div>
            <p className="text-center md:text-left font-semibold text-sm md:text-base">{card.desc}</p>
            <div className="flex flex-col lg:flex-row items-center gap-2 xl:gap-8">
                <Link href={card.link} className="flex items-center hover:underline hover:text-blue-500
                text-sm md:text-base"
                >
                    <p>ページを見る</p>
                    <IoIosArrowDropright className="pt-1 size-6" />
                </Link>
                {card.isAuth && (
                    <Link href={'/auth/register'} className="flex items-center hover:underline hover:text-blue-500
                    text-sm md:text-base"
                    >
                        <p>新規登録はこちら</p>
                        <IoIosArrowDropright className="pt-1 size-6" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Card;