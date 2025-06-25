
'use client'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const AOS: any = require('aos');
import SubTitle from '../common/SubTitle';
import {
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb, SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRender,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import Container from '../common/Container';

const skillsItem = [
    {
        id: '1',
        icon: <SiHtml5 />,
        title: 'HTML',
        color: 'text-orange-600'
    },
    {
        id: '2',
        icon: <SiJavascript />,
        title: 'JavaScript',
        color: 'text-yellow-400'
    },
    {
        id: '3',
        icon: <SiTypescript />,
        title: 'TypeScript',
        color: 'text-blue-600'
    },
    {
        id: '4',
        icon: <SiReact />,
        title: 'React',
        color: 'text-blue-400'
    },
    {
        id: '5',
        icon: <SiNodedotjs />,
        title: 'Nodejs',
        color: 'text-green-400'
    },
    {
        id: '6',
        icon: <SiTailwindcss />,
        title: 'Tailwindcss',
        color: 'text-blue-400'
    },
    {
        id: '7',
        icon: <SiNextdotjs />,
        title: 'Nextjs',
        color: 'text-black'
    },
    {
        id: '8',
        icon: <SiMongodb />,
        title: 'MongoDB',
        color: 'text-green-500'
    },
    {
        id: '9',
        icon: <SiVercel />,
        title: 'Vercel',
        color: 'text-black'
    },
    {
        id: '10',
        icon: <SiRender />,
        title: 'Render',
        color: 'text-black'
    },
    {
        id: '11',
        icon: <SiGit />,
        title: 'Git',
        color: 'text-orange-600'
    },
];

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <Container>
            <SubTitle text='Skillstack' />
            <p className='mb-2'>
                I&apos;m still in the process of learning, but I&apos;m actively exploring a wide range of technologies across both frontend and backend.
                <br />
                I&apos;m enjoying the journey and striving to grow little by little every day!
            </p>
            <span className='text-gray-400 text-xs'>まだまだ勉強中の身ですが、フロントエンド・バックエンド問わず幅広くチャレンジしています。
                毎日少しずつでも成長できるように、楽しく学習を続けています！
            </span>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
                {skillsItem.map((item) => (
                    <div
                        data-aos="flip-left"
                        data-aos-delay="500"
                        key={item.id}
                        style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                        className='w-full bg-white dark:bg-gray-600 rounded-xl py-8 flex flex-col items-center hover:bg-blue-50 duration-300'
                    >
                        <span className={`text-9xl ${item.color}`}>{item.icon}</span>
                        <h3 className='text-3xl text-gray-600 dark:text-white font-bold mt-5'>{item.title}</h3>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Skills;