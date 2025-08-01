
'use client'
import Link from "next/link";
import { useEffect } from "react";
import { CardDataType } from "./CardSection";
import { IoIosArrowDropright } from "react-icons/io";
import 'aos/dist/aos.css';
const AOS: any = require('aos');

type Props = {
    card: CardDataType;
};

const Card = ({ card }: Props) => {
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
            className="flex flex-col items-center gap-5 bg-indigo-200 dark:bg-indigo-900 py-20 px-4 rounded-xl"
            style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
        >
            <div className="flex items-center gap-1 text-4xl font-extrabold">
                <span>{card.icon}</span>
                <h3>{card.title}</h3>
            </div>
            <p className="text-center md:text-left font-semibold">{card.desc}</p>
            <div className="flex flex-col lg:flex-row items-center gap-2 xl:gap-8">
                <Link href={card.link} className="flex items-center hover:underline hover:text-blue-500">
                    <p>詳細はこちらから</p>
                    <IoIosArrowDropright className="pt-1 size-6" />
                </Link>
                {card.isAuth && (
                    <Link href={'/auth/register'} className="flex items-center hover:underline hover:text-blue-500">
                        <p>新規登録はこちら</p>
                        <IoIosArrowDropright className="pt-1 size-6" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Card;