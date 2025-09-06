
"use client";
import { ReactNode, useState } from "react";
import Card from "./Card";
import { FaCode, FaUserCheck } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { GrChatOption } from "react-icons/gr";
import { SiYoutubemusic, SiOpenai } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { SiNotion } from "react-icons/si";
import HeroModal from "./CardModal";

export type CardDataType = {
    id: string;
    title: string;
    desc: string;
    link: string;
    icon: ReactNode;
    isAuth: boolean;
    details: {
        technologies: string[];
        features: string[];
        challenge: string;
    }
};

export type CardModalDataType = {
    details: {
        technologies: string[];
        features: string[];
        challenge: string;
    }
};

const cardData: CardDataType[] = [
    {
        id: '1',
        title: 'Profile',
        desc: '私についてのプロフィールをご紹介します。',
        link: '/site/profile',
        icon: <FaUserCheck />,
        isAuth: false,
        details: {
            technologies: ["Next.js", "React", "tailWindCSS", "AOS", "framer-motion"],
            features: ["UX/UI"],
            challenge: "Next.js と TailwindCSS を用いてプロフィールページを作成。AOS によるアニメーションで、直感的に閲覧できる UI を実装しました。"
        },
    },
    {
        id: '2',
        title: 'Skills',
        desc: '使用している技術や学習中の技術をご紹介します。',
        link: '/site/skills',
        icon: <FaCode />,
        isAuth: false,
        details: {
            technologies: ["Next.js", "React", "tailWindCSS", "AOS", "framer-motion"],
            features: ["UX/UI", "モーダル"],
            challenge: "Next.js と TailwindCSS によりレスポンシブなスキル一覧を構築。AOS でアニメーションを追加し、モーダル機能で詳細情報を確認できる UX/UI を実装しました。"
        },
    },
    {
        id: '3',
        title: 'Blog',
        desc: 'ブログ機能です（ログイン後に利用可能）。',
        link: '/site/blog',
        icon: <FaFilePen />,
        isAuth: true,
        details: {
            technologies: ["Next.js", "React", "microCMS", "tailWindCSS",],
            features: ["CMS連携", "ページネーション", "キーワード検索"],
            challenge: "ブログ記事を簡単に管理・配信できるよう、ヘッドレスCMS（microCMS）を活用して実装しました。"
        },
    },
    {
        id: '4',
        title: 'SNS',
        desc: 'SNS機能です（ログイン後に利用可能）。',
        link: '/sns/snstop',
        icon: <GrChatOption />,
        isAuth: true,
        details: {
            technologies: ["React", "Context API", "Express", "MongoDB", "bcryptjs", "JWT", "tailWindCSS",],
            features: ["API連携", "CRUD機能", "認証機能", "グローバル変数による状態管理"],
            challenge: "フォロー・いいね機能を実装し、APIとグローバル変数を活用してユーザー間の関係性を動的に管理できるようにしました。"
        },
    },
    {
        id: '5',
        title: 'Memo',
        desc: 'メモアプリ機能です（ログイン後に利用可能）。',
        link: '/site/memo',
        icon: <SiNotion />,
        isAuth: true,
        details: {
            technologies: ["React", "Context API", "Express", "MongoDB", "bcryptjs", "JWT", "@hello-pangea/dnd", "tailWindCSS",],
            features: ["API連携", "CRUD機能", "認証機能", "グローバル変数による状態管理", "ドラッグアンドドロップ"],
            challenge: "ドラッグアンドドロップでメモの並び替えを実装し、直感的に管理できるよう工夫しました。APIとグローバル変数を活用して、認証済みユーザーのデータを保持しています。"
        },
    },
    {
        id: '6',
        title: 'Music',
        desc: '楽曲を検索できる機能です（ログイン後に利用可能）。',
        link: '/site/music',
        icon: <SiYoutubemusic />,
        isAuth: true,
        details: {
            technologies: ["React", "Express", "SpotifyAPI", "tailWindCSS",],
            features: ["外部API連携", "ページネーション", "キーワード検索"],
            challenge: "Spotify API を活用し、キーワード検索やページネーション機能を備えた楽曲検索アプリを構築しました。外部 API との連携により、リアルタイムで楽曲情報を取得できるようにしています。"
        },
    },
    {
        id: '7',
        title: 'Chat',
        desc: 'AIと自由に会話できるチャット機能です（ログイン後に利用可能）。',
        link: '/site/chat',
        icon: <SiOpenai />,
        isAuth: true,
        details: {
            technologies: ["React", "Express", "OpenAIAPI", "tailWindCSS",],
            features: ["外部API連携", "chatGPT機能"],
            challenge: "Express をバックエンドに導入し、OpenAI API のリクエスト・レスポンス処理をサーバー側で管理。フロントは安全に API を呼び出すだけの設計とし、リアルタイムで応答する ChatGPT 機能を構築しました。"
        },
    },
    {
        id: '8',
        title: 'Conatct',
        desc: '問い合わせフォーム機能です。',
        link: '/site/contact',
        icon: <FiMail />,
        isAuth: false,
        details: {
            technologies: ["React", "EmailJS"],
            features: ["メール送信機能"],
            challenge: "Next.js と EmailJS を用いて問い合わせフォームを作成しました。ユーザーが入力した内容をフロントから直接送信できる仕組みを実装し、シンプルかつ使いやすいフォームを提供しています。"
        },
    },
];

const CardSection = () => {
    const [modalData, setModalData] = useState<CardModalDataType | null>(null);

    return (
        <section className='w-full min-h-screen max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16
           text-gray-600 dark:text-white my-20 relative'
        >
            <div className="hidden sm:flex absolute inset-0 top-32 bg-blue-100 dark:bg-gray-600 max-w-md 
            md:max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto h-full rounded-tr-xl rounded-tl-xl -z-10"
            />
            <h2 className="text-xl md:text-4xl font-extrabold mb-4 text-center">Explore My Portfolio</h2>
            <p className="font-semibold text-center">各ページの紹介とリンクをご覧ください。</p>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-x-40 lg:gap-y-20">
                {cardData.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        setModalData={setModalData}
                    />
                ))}
            </div>
            <HeroModal
                modalData={modalData}
                onclose={() => setModalData(null)}
            />
        </section >
    );
};

export default CardSection;