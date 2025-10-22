
import Link from "next/link";
import PageHero from "@/app/components/common/PageHero";
import { FaPaw } from "react-icons/fa6";
import { TbLego } from "react-icons/tb";

const page = () => {
    return (
        <div className="min-h-screen">
            <PageHero
                image="/images/cat.jpg"
                title="Hoby"
            />
            <section className="w-full max-w-screen-lg min-h-screen mx-auto px-4 sm:px-8 pt-20 text-gray-600 dark:text-gray-200">
                <div className="flex flex-col items-center gap-16">
                    <p className="text-center leading-relaxed font-semibold">
                        猫とLEGOが大好きな管理者による、趣味のギャラリーです。<br />
                        猫ギャラリーでは、APIで集めた猫の写真と、我が家の猫たちとの日常を綴ったブログを公開中。<br />
                        LEGOギャラリーでは、セットやミニフィグ、パーツなどを検索できる“デジタル図鑑”として楽しめます。<br />
                        癒しと好奇心が同居する、ちょっと不思議な空間へようこそ。
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                        <Link
                            href={"/site/cat"}
                            className="flex items-center justify-center gap-1 font-semibold border-2 border-pink-500 w-full py-2  rounded-full
                          text-pink-500 sm:text-lg bg-pink-100 hover:bg-pink-200 duration-300"
                        >
                            <FaPaw />
                            Cat Galley Blog
                        </Link>
                        <Link
                            href={"/site/lego"}
                            className="flex items-center justify-center gap-1 font-semibold border-2 border-yellow-500 w-full py-2 rounded-full
                            text-yellow-500 sm:text-lg bg-yellow-100 hover:bg-yellow-200 duration-300"
                        >
                            <TbLego />
                            LEGO Gallery
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;