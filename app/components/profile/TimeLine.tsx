
'use client'
import { useState, useEffect } from 'react';
import SubTitle from '../common/SubTitle';
import Container from '../common/Container';
import 'aos/dist/aos.css';
const AOS: any = require('aos');

const timeLineItem = [
    {
        id: '1',
        year: '1988',
        title: 'I was born in Yamagata City.',
        jpTitle: '山形市で生まれる',
        description: '幼少期から体を動かすことが大好きでバスケットボールクラブに所属していました。'
    },
    {
        id: '2',
        year: '2002',
        title: 'Start skateboarding.',
        jpTitle: 'スケートボードを始める',
        description: 'スケートボードと出会って以来、その魅力に引き込まれ、夢中で取り組んできました。'
    },
    {
        id: '3',
        year: '2006',
        title: 'Entering society as a working adult.',
        jpTitle: '社会人として働き始める',
        description: '働きながらもスケートボードを続け、充実した時間を積み重ねてきました。'
    },
    {
        id: '4',
        year: '2017',
        title: 'Get married.',
        jpTitle: '結婚',
        description: '結婚と同時に部署のチームリーダーに就任し、責任のある立場となりました。'
    },
    {
        id: '5',
        year: '2019',
        title: 'A child is born.',
        jpTitle: '子どもが生まれる',
        description: '子育てや時間的な都合により自然とスケートボードから遠ざかりました。'
    },
    {
        id: '6',
        year: '2023',
        title: 'Became aware of IT literacy gap.',
        jpTitle: 'ITリテラシーの低さに危機感を抱く',
        description: '仕事をする中で自分のITスキルの不足に気づき、まずはExcelやwordの基本的な操作から勉強を始めました。'
    },
    {
        id: '7',
        year: 'Since 2024',
        title: 'Discovered Programming.',
        jpTitle: 'プログラミングとの出会い',
        description: ' HTMLやCSS、JavaScriptに興味を持ち学習を始め、プログラミングの魅力に引き込まれ、夢中で取り組んでいます!'
    },
];

const TimeLine = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsElapsed(prev => prev + 10);
        }, 10);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (totalSeconds: number) => {
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <Container>
            <SubTitle text='TimeLine' />
            <div className='relative'>
                <div className="absolute right-0 top-52 text-5xl font-bold text-indigo-600 transition-all duration-500
                     ease-in-out animate-pulse -z-10 hidden lg:block">
                    {formatTime(secondsElapsed)}
                </div>
                <div
                    data-aos="fade"
                    data-aos-delay="1000"
                    className='absolute right-10 bottom-96 -z-10 hidden lg:block'>
                    <div className="relative w-80 h-80 border-4 border-indigo-500  rounded-full animate-spin-slow">
                        <div className="absolute top-0 left-1/2 w-4 h-40 bg-gray-600 transform -translate-x-1/2 rounded-md"></div>
                    </div>
                </div>
                <div className='border-l-2 border-gray-200 pl-6 space-y-8'>
                    {timeLineItem.map((item) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay="500"
                            key={item.id}
                            className='border-b-2 p-4 border-gray-200'
                        >
                            <span className='text-gray-400 text-lg'>{item.year}</span>
                            <h3 className='text-xl md:text-3xl font-bold'>{item.title}</h3>
                            <span className='text-gray-400 text-xs'>{item.jpTitle}</span>
                            <p className='mt-2'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default TimeLine;