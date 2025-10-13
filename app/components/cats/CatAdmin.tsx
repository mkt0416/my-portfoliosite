
import Image from "next/image";
import Link from "next/link";
import { FaCat, FaPaw } from "react-icons/fa";

const CatAdmin = () => {
    return (
        <section className="w-full max-w-screen-xl h-auto mx-auto px-8 md:px-12 lg:px-32 py-20 text-gray-600 dark:text-gray-200">
            <p className="text-center max-w-2xl mx-auto leading-relaxed mb-20">
                このページでは、管理者が大切にしている2匹の愛猫を紹介します。<br />
                どちらも性格や見た目に個性があり、毎日を明るくしてくれる存在です。<br />
                さらに、世界中のさまざまな猫たちの写真もギャラリーで紹介しています。<br />
                かわいい仕草や表情に癒されながら、世界の猫の魅力を一緒に感じてください🐱✨
            </p>
            <h1 className="text-center text-3xl sm:text-5xl font-extrabold mb-16">🐾The administrators cat</h1>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
                <div className="w-full relative">
                    <Image
                        src={"/images/min.png"}
                        alt="min"
                        width={600}
                        height={400}
                        priority
                        className="w-full object-cover rounded-tl-[120px] rounded-tr-[60px] rounded-bl-[80px] rounded-br-[150px]
                        shadow-lg border-4 border-pink-400 hover:scale-105 hover:shadow-pink-300/50 transition-all duration-500 ease-in-out"
                    />
                    <div className="absolute -bottom-3 -left-3">
                        <FaPaw className="size-20 lg:size-28 text-pink-400" />
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl flex items-center gap-1 mb-5">
                        <FaCat />
                        MINT
                    </h2>
                    <p className="leading-relaxed">2017年4月生まれの女の子のキジトラです。
                        少し臆病なところもありますが、慣れるととても甘えん坊。
                        スラッとした体つきで、どこか品のある美人さんです。😸
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative">
                <div className="max-md:order-2">
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl flex items-center gap-1 mb-5">
                        <FaCat />
                        RIN
                    </h2>
                    <p className="leading-relaxed">
                        2017年6月生まれの長い毛が美しい三毛の女の子。
                        人懐っこくて、初めて会う人にもすぐにすり寄ってくるほど。
                        好奇心旺盛で、いつも新しいことに夢中になっています。😸
                    </p>
                </div>
                <div className="w-full relative">
                    <Image
                        src={"/images/rin.png"}
                        alt="min"
                        width={600}
                        height={400}
                        priority
                        className="w-full object-cover rounded-tl-[120px] rounded-tr-[60px] rounded-bl-[80px] rounded-br-[150px]
                        shadow-lg border-4 border-yellow-400 hover:scale-105 hover:shadow-pink-300/50 transition-all duration-500 ease-in-out"
                    />
                    <div className="absolute -bottom-3 -right-3">
                        <FaPaw className="size-20 lg:size-28 text-yellow-400" />
                    </div>
                </div>
            </div>
            <div className="mt-16 flex justify-end">
                <Link href={"/site/cat/gallery"} className="text-blue-600 font-semibold hover:underline">
                    😸ギャラリーへ→
                </Link>
            </div>
        </section>
    );
};

export default CatAdmin