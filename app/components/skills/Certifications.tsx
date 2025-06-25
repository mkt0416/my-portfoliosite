
'use client'
import { useEffect } from 'react';
import SubTitle from '../common/SubTitle';
import Container from '../common/Container';
import 'aos/dist/aos.css';
const AOS: any = require('aos');

const certItems = [
    {
        id: '1',
        title: '日商簿記３級'
    },
    {
        id: '2',
        title: 'FP3級'
    },
    {
        id: '3',
        title: 'ITパスポート'
    },
    {
        id: '4',
        title: 'python3エンジニア認定基礎試験'
    },
    {
        id: '5',
        title: 'python3エンジニア認定データ分析試験'
    },
    {
        id: '6',
        title: 'webクリエーター能力検定試験'
    },
    {
        id: '7',
        title: 'VBAエキスパート'
    },
    {
        id: '8',
        title: 'MOS各種'
    },
];

const Certifications = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <Container>
            <SubTitle text='Certifications' />
            <p className='mb-2'>
                Besides learning programming, I&apos;ve also taken the time to study and earn the following certifications.
            </p>
            <span className='text-gray-400 text-xs'>プログラミング学習に加えて、以下の資格についても勉強し取得しました。</span>
            <ul className='mt-10 space-y-6'>
                {certItems.map((item) => (
                    <li
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        key={item.id}
                        style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                        className='bg-white dark:bg-gray-600 rounded-lg p-4 border-l-4 border-blue-500 hover:bg-blue-50 duration-300'
                    >
                        <span className='text-gray-600 dark:text-white font-bold'>{item.title}</span>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Certifications;