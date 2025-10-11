
import Link from "next/link";
import { TbMinusVertical } from "react-icons/tb";

const footerListItems = [
    { id: '1', link: '/site/map', text: 'SiteLog', icon: true },
    { id: '2', link: '/site/memo', text: 'Notee', icon: true },
    { id: '3', link: '/sns/snstop', text: 'Circle', icon: true },
    { id: '4', link: '/site/chat', text: 'Talksy', icon: true },
    { id: '5', link: '/site/music', text: 'TuneFindr', icon: true },
    { id: '6', link: '/site/winapp', text: 'AppBox' },
];

const Footer = () => {
    return (
        <footer className="py-8 text-xs sm:text-base bg-black/40 text-white font-semibold">
            <div className="w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16">
                <div className="flex flex-col flex-wrap md:flex-row items-center justify-between gap-3">
                    <p>©Makoto Saitoh {new Date().getFullYear()}</p>
                    <ul className="flex items-center">
                        {footerListItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.link}
                            >
                                <li className="flex items-center">{item.text} {item.icon && <TbMinusVertical />}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;