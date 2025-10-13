
'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import SubTitle from '../common/SubTitle';
import Container from '../common/Container';
import 'aos/dist/aos.css';
import Link from 'next/link';
const AOS: any = require('aos');

const hobbyItem = [
    {
        id: '1',
        image: '/images/hobby-image1.svg',
        title: 'Programing',
        jpTitle: 'プログラミング',
        description: '将来的には自分の作ったアプリケーションで誰かの役に立ちたいと思い日々勉強しています。楽しみながら学習中です！'
    },
    {
        id: '2',
        image: '/images/hobby-image2.svg',
        title: 'Working out',
        jpTitle: 'トレーニング',
        description: '体を動かすことも大切にしています。懸垂やアブローラーを毎朝出勤前に数十分間欠かさず続けており、心身ともに整えて一日をスタートさせています！',
        reverse: true,
    },
    {
        id: '3',
        image: '/images/hobby-image3.svg',
        title: 'Cat',
        jpTitle: '猫',
        description: '飼い猫と過ごす時間も趣味のひとつです。猫とくっついてのんびりするのが最高のリラックス方法です！',
        cat: true
    },
];

const Hobby = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <Container>
            <SubTitle text='Hobby' />
            {hobbyItem.map((item) => (
                <div
                    key={item.id}
                    className={`flex flex-col lg:flex-row ${item.reverse && 'lg:flex-row-reverse'} items-center gap-10 lg:gap-32 mb-10`}
                >
                    <div
                        data-aos={`${item.reverse ? 'fade-left' : 'fade-right'}`}
                        data-aos-delay="500"
                    >
                        <Image
                            src={item.image}
                            alt='hobbyimage1'
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                    <div
                        data-aos={`${item.reverse ? 'fade-right' : 'fade-left'}`}
                        data-aos-delay="500"
                    >
                        <h2 className='text-3xl font-bold'>{item.title}</h2>
                        <span className='text-gray-400 text-sm'>{item.jpTitle}</span>
                        <p className='mt-5'>
                            {item.description}
                        </p>
                        {item.cat && (
                            <p className='mt-4 text-blue-600 hover:underline'>
                                <Link href={"/site/cat"}>
                                    🐈猫ギャラリーを見る
                                </Link>
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default Hobby;