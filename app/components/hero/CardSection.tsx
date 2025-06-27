
import { ReactNode } from "react";
import Card from "./Card";
import { FaCode, FaFolderOpen, FaUserCheck } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { GrChatOption } from "react-icons/gr";
import { SiYoutubemusic, SiOpenai } from "react-icons/si";
import { FiMail } from "react-icons/fi";

export type CardDataType = {
    id: string;
    title: string;
    desc: string;
    link: string;
    icon: ReactNode;
};

const cardData: CardDataType[] = [
    {
        id: '1',
        title: 'Profile',
        desc: '私についてのプロフィールをご紹介します。',
        link: '/profile',
        icon: <FaUserCheck />,
    },
    {
        id: '2',
        title: 'Skills',
        desc: '使用している技術や学習中の技術をご紹介します。',
        link: '/skills',
        icon: <FaCode />
    },
    {
        id: '3',
        title: 'Portfolio',
        desc: 'これまでに制作、学習した作品をご覧いただけます。',
        link: '/portfolio',
        icon: <FaFolderOpen />,
    },
    {
        id: '4',
        title: 'Blog',
        desc: '日々の気づきや技術記事を投稿しています。ログイン後にご覧いただけます。',
        link: '/blog',
        icon: <FaFilePen />,
    },
    {
        id: '5',
        title: 'SNS',
        desc: 'SNS機能をご利用いただけます（ログイン後に利用可能）。',
        link: '/sns',
        icon: <GrChatOption />,
    },
    {
        id: '6',
        title: 'Music',
        desc: '楽曲検索機能ご利用いただけます（ログイン後に利用可能）。',
        link: '/music',
        icon: <SiYoutubemusic />,
    },
    {
        id: '7',
        title: 'Chat',
        desc: 'AIと自由に会話できるチャット機能です（ログイン後に利用可能）。',
        link: '/chat',
        icon: <SiOpenai />,
    },
    {
        id: '8',
        title: 'Conatct',
        desc: 'お気軽にお問い合わせください。',
        link: '/contact',
        icon: <FiMail />,
    },
];

const CardSection = () => {
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
                    />
                ))}
            </div>
        </section >
    );
};

export default CardSection;