
"use client";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import profileImage from "../../../public/images/undraw_profile.svg";
import skillsImage from "../../../public/images/undraw_designing-components.svg";
import blogImage from "../../../public/images/undraw_add-notes.svg";
import portfolioImage from "../../../public/images/undraw_crypto-portfolio.svg";
import contactImage from "../../../public/images/undraw_contact-us.svg";
import catImage from "../../../public/images/undraw_cat.svg";

export type CardDataType = {
    id: string;
    title: string;
    link: string;
    image: string;
};

const cardData: CardDataType[] = [
    {
        id: '1',
        title: 'Profile',
        link: '/site/profile',
        image: profileImage,
    },
    {
        id: '2',
        title: 'Skills',
        link: '/site/skills',
        image: skillsImage,
    },
    {
        id: '3',
        title: 'Blog',
        link: '/site/blog',
        image: blogImage,
    },
    {
        id: '4',
        title: 'Portfolio',
        link: '/site/portfolio',
        image: portfolioImage,
    },
    {
        id: '5',
        title: 'Conatct',
        link: '/site/contact',
        image: contactImage,
    },
    {
        id: '6',
        title: 'Hobby',
        link: '/site/hobby',
        image: catImage,
    },
];

const CardSection = () => {
    return (
        <section className='w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-16
           text-gray-600 dark:text-white my-20 relative'
        >
            <div className="hidden md:flex absolute inset-0 top-20 bg-blue-100 dark:bg-gray-600 max-w-md 
            md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto h-full rounded-tr-xl rounded-tl-xl -z-10"
            />
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-center">Admin Information</h2>
            <div className="hidden mt-20 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cardData.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                    />
                ))}
            </div>
            <div className="block md:hidden mt-10">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.0}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                >
                    {cardData.map((card) => (
                        <SwiperSlide key={card.id} className="mb-12">
                            <Card
                                key={card.id}
                                card={card}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
};

export default CardSection;