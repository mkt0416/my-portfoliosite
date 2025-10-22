
"use client";
import Image from "next/image";
import Link from "next/link";
import { TbLego } from "react-icons/tb";
import { PiLego } from "react-icons/pi";

const legoImage = [
    { id: "1", image: "/images/lego/lego1.jpg" },
    { id: "2", image: "/images/lego/lego2.jpg" },
    { id: "3", image: "/images/lego/lego3.jpg" },
    { id: "4", image: "/images/lego/lego4.jpg" },
    { id: "5", image: "/images/lego/lego5.jpg" },
    { id: "6", image: "/images/lego/lego6.jpg" },
    { id: "7", image: "/images/lego/lego7.jpg" },
    { id: "8", image: "/images/lego/lego8.jpg" },
    { id: "9", image: "/images/lego/lego9.jpg" },
];

const GridImage = () => {
    return (
        <section className="h-screen w-screen relative">
            <ul className="grid grid-cols-3 grid-rows-3 w-full h-full">
                {legoImage.map((image) => (
                    <li key={image.id}>
                        <Image
                            className="w-full h-full object-cover brightness-50"
                            src={image.image}
                            alt="lego-image"
                            width={450}
                            height={450}
                        />
                    </li>
                ))}
            </ul>
            <div className="absolute inset-0 flex flex-col justify-center items-center px-2">
                <div className="flex items-center gap-1 text-3xl md:text-6xl lg:text-8xl text-yellow-400 font-extrabold mb-8">
                    <TbLego />
                    <h1 className="tracking-wider">LEGO GALLERY</h1>
                </div>
                <p className="bg-yellow-50/70 dark:bg-gray-600/70 p-6 sm:p-8 text-xs sm:text-base rounded-full text-center leading-relaxed mb-16">
                    世界中で愛されるレゴブロック。その無限の組み合わせが生み出す
                    創造と冒険の世界を紹介します。<br />
                    テーマ別・パーツ別に、あなたの想像力をかき立てる作品を探索しましょう。
                </p>
                <Link href={"/site/lego/sets"}
                    className="flex items-center gap-1 bg-yellow-50/70 py-2 px-4 rounded-full border-2 border-yellow-500
                      dark:bg-gray-600/70 dark:bg-none dark:hover:bg-gray-500 hover:bg-yellow-100 duration-300 font-semibold"
                >
                    <PiLego className="size-5 text-yellow-500" />
                    Enter the World of LEGO
                </Link>
            </div>
        </section>
    );
};

export default GridImage;