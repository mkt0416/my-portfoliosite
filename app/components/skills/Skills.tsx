
'use client'
import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import Modal from './Modal';
import SubTitle from '../common/SubTitle';
import SkillCard from './SkillCard';
import 'aos/dist/aos.css';
const AOS: any = require('aos');
import {
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb, SiNextdotjs,
    SiReact,
    SiRender,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';

const skillsItem = [
    {
        id: '1',
        icon: <SiHtml5 />,
        title: 'HTML',
        textColor: 'text-orange-600',
        bgColor: 'bg-orange-600',
        desc: '基本的なHTMLタグの使い方を学習中で、ウェブページを構築するうえでの最低限の組み立てができるようになっています。今後は、思い通りにコーディングできることを目標としています。',
        proficiency: 35,
        experience: '2年',
    },
    {
        id: '2',
        icon: <SiJavascript />,
        title: 'JavaScript',
        textColor: 'text-yellow-400',
        bgColor: 'bg-yellow-400',
        desc: '変数、関数、配列などの基礎、また、非同期通信やDOM操作、イベント、map・filterメソッド、三項演算子などの応用的な操作を学習中です。より理解を深める事が目標です。',
        proficiency: 15,
        experience: '1年',
    },
    {
        id: '3',
        icon: <SiTypescript />,
        title: 'TypeScript',
        textColor: 'text-blue-600',
        bgColor: 'bg-blue-600',
        desc: '型の概念を学習し始めたばかり。JavaScriptとの違いを意識しています。型の整合性をとるのには苦戦していますが、理解を深める事が目標です。',
        proficiency: 10,
        experience: '半年',
    },
    {
        id: '4',
        icon: <SiReact />,
        title: 'React',
        textColor: 'text-blue-400',
        bgColor: 'bg-blue-400',
        desc: 'useStateやuseEffectなどのフックの活用、コンポーネントに分割した再利用性の高いコード、React Router DOMを用いたルーティング、TypeScriptでのコーディングに取り組んできました。今後は、ユーザーインターフェースの優れたアプリを開発することを目標としています。',
        proficiency: 20,
        experience: '1年',
    },
    {
        id: '5',
        icon: <FaNode />,
        title: 'Nodejs',
        textColor: 'text-green-400',
        bgColor: 'bg-green-400',
        desc: 'Expressを使ったバックエンドの基礎を学習中。GET,POST,PUT,DELETEの基本的なCRUD操作に必要なAPI構築ができます。DBとの連携、JWTの実装、ルーティング（routes）、ビジネスロジック（controllers）、データモデル（models）に役割を分けて管理する手法を学びました。今後は複雑なAPIを構築できるようになるのが目標です',
        proficiency: 25,
        experience: '1年',
    },
    {
        id: '6',
        icon: <SiTailwindcss />,
        title: 'Tailwindcss',
        textColor: 'text-blue-400',
        bgColor: 'bg-blue-400',
        desc: 'ユーティリティクラスを用いたデザインに慣れてきております。今後は、ユーザーインターフェースの優れたデザインできることを目標としています。',
        proficiency: 35,
        experience: '半年',
    },
    {
        id: '7',
        icon: <SiNextdotjs />,
        title: 'Nextjs',
        textColor: 'text-black',
        bgColor: 'bg-black',
        desc: 'ダイナミックルーティングやNext.jsのお作法を学習中。Reactと合わせて自由に使いこなしたいです。',
        proficiency: 20,
        experience: '半年',
    },
    {
        id: '8',
        icon: <SiMongodb />,
        title: 'MongoDB',
        textColor: 'text-green-500',
        bgColor: 'bg-green-500',
        desc: 'Expressとの連携やドキュメント型データベースの使い方を学びながら、データを自在に操作できるようになることを目標としています。',
        proficiency: 15,
        experience: '1年',
    },
    {
        id: '9',
        icon: <SiVercel />,
        title: 'Vercel',
        textColor: 'text-black',
        bgColor: 'bg-black',
        desc: 'デプロイの仕組みを学びながら、自作アプリを公開する練習をしています。',
        proficiency: 10,
        experience: '半年',
    },
    {
        id: '10',
        icon: <SiRender />,
        title: 'Render',
        textColor: 'text-black',
        bgColor: 'bg-black',
        desc: 'Node.jsアプリの公開を通じて、ホスティングの流れを理解し始めています。',
        proficiency: 10,
        experience: '半年',
    },
    {
        id: '11',
        icon: <SiGit />,
        title: 'Git',
        textColor: 'text-orange-600',
        bgColor: 'bg-orange-600',
        desc: '基本的なコマンド操作を練習中。安心してコード管理できるようになる事が目標です。',
        proficiency: 15,
        experience: '半年',
    },
];

export type ModalDataType = {
    title: string | null;
    desc: string | null;
    icon?: ReactNode | null;
    textColor?: string | null;
    bgColor?: string | null;
    proficiency?: number | null;
    experience?: string;
};

const Skills = () => {
    const [modalData, setModalData] = useState<ModalDataType | null>(null);

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <Container>
            <SubTitle
                text='Skillstack'
                description='まだまだ勉強中の身ですが、フロントエンド・バックエンド問わず幅広くチャレンジしています。毎日少しずつでも成長できるように、楽しく学習を続けています！カードをクリックし詳細をご覧いただけます。'
            />
            <div className='relative'>
                <div>
                    <VscVscode size={600} className='text-blue-600 absolute -bottom-10 -right-10 hidden lg:flex' />
                </div>
                <div className='mt-10 hidden md:grid grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10 cursor-pointer'>
                    {skillsItem.map((item) => (
                        <SkillCard
                            key={item.id}
                            item={item}
                            setModalData={setModalData}
                        />
                    ))}
                </div>
            </div>
            <div className='block md:hidden mt-10'>
                <Swiper
                    spaceBetween={25}
                    slidesPerView={1.0}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                >
                    {skillsItem.map((item) => (
                        <SwiperSlide key={item.id} className='mb-12'>
                            <SkillCard
                                key={item.id}
                                item={item}
                                setModalData={setModalData}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <AnimatePresence>
                <Modal
                    modalData={modalData}
                    onclose={() => setModalData(null)}
                />
            </AnimatePresence>
        </Container>
    );
};

export default Skills;