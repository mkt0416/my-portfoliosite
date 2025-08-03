
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
    SiNodedotjs,
    SiReact,
    SiRender,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillsItem = [
    {
        id: '1',
        icon: <SiHtml5 />,
        title: 'HTML',
        textColor: 'text-orange-600',
        bgColor: 'bg-orange-600',
        desc: '基本的なタグの使い方を学習中。思い通りにコーディングできるようになるのが目標です。',
        proficiency: 35
    },
    {
        id: '2',
        icon: <SiJavascript />,
        title: 'JavaScript',
        textColor: 'text-yellow-400',
        bgColor: 'bg-yellow-400',
        desc: '変数、関数、配列などの基礎を学習中。より理解を深める事が目標です。',
        proficiency: 15
    },
    {
        id: '3',
        icon: <SiTypescript />,
        title: 'TypeScript',
        textColor: 'text-blue-600',
        bgColor: 'bg-blue-600',
        desc: '型の概念を学習し始めたばかり。JavaScriptとの違いを意識しています。',
        proficiency: 10,
    },
    {
        id: '4',
        icon: <SiReact />,
        title: 'React',
        textColor: 'text-blue-400',
        bgColor: 'bg-blue-400',
        desc: 'コンポーネントの作成やHooksの使い方を学んでいます。',
        proficiency: 20,
    },
    {
        id: '5',
        icon: <SiNodedotjs />,
        title: 'Nodejs',
        textColor: 'text-green-400',
        bgColor: 'bg-green-400',
        desc: 'バックエンドの基礎を学習中。Expressを使ったAPI開発に挑戦しています。',
        proficiency: 25,
    },
    {
        id: '6',
        icon: <SiTailwindcss />,
        title: 'Tailwindcss',
        textColor: 'text-blue-400',
        bgColor: 'bg-blue-400',
        desc: 'クラスを使ったデザインに慣れてきたところ。柔軟にデザインできるよう学習しています。',
        proficiency: 35,
    },
    {
        id: '7',
        icon: <SiNextdotjs />,
        title: 'Nextjs',
        textColor: 'text-black',
        bgColor: 'bg-black',
        desc: 'ダイナミックルーティングやNext.jsのお作法を学習中。Reactと合わせて自由に使いこなしたいです。',
        proficiency: 20,
    },
    {
        id: '8',
        icon: <SiMongodb />,
        title: 'MongoDB',
        textColor: 'text-green-500',
        bgColor: 'bg-green-500',
        desc: 'ドキュメント型DBの使い方を学びながら、自在にデータ操作できるようなる事が目標です。',
        proficiency: 15,
    },
    {
        id: '9',
        icon: <SiVercel />,
        title: 'Vercel',
        textColor: 'text-black',
        bgColor: 'bg-black',
        desc: 'デプロイの仕組みを学びながら、自作アプリを公開する練習をしています。',
        proficiency: 10,
    },
    {
        id: '10',
        icon: <SiRender />,
        title: 'Render',
        textColor: 'text-black',
        bgColor: 'bg-black',
        desc: 'Node.jsアプリの公開を通じて、ホスティングの流れを理解し始めています。',
        proficiency: 10,
    },
    {
        id: '11',
        icon: <SiGit />,
        title: 'Git',
        textColor: 'text-orange-600',
        bgColor: 'bg-orange-600',
        desc: '基本的なコマンド操作を練習中。安心してコード管理できるようになる事が目標です。',
        proficiency: 15,
    },
];

export type ModalDataType = {
    title: string | null;
    desc: string | null;
    icon?: ReactNode | null;
    textColor?: string | null;
    bgColor?: string | null;
    proficiency?: number | null;
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
                <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10 cursor-pointer'>
                    {skillsItem.map((item) => (
                        <SkillCard
                            key={item.id}
                            item={item}
                            setModalData={setModalData}
                        />
                    ))}
                </div>
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