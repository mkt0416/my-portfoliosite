
import Image from "next/image";
import Link from "next/link";

const Circle = () => {
    return (
        <section className='w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-16
           text-gray-600 dark:text-white py-20 relative'>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-10 lg:mb-20 text-center lg:text-left">Circle</h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <Image
                    className=""
                    src={"/images/Circle.svg"}
                    alt="phone"
                    width={450}
                    height={450}
                />
                <div>
                    <h1 className="text-xl md:text-4xl font-bold mb-5">今日の発見を、<span className="text-blue-700">すぐにシェアしよう。</span></h1>
                    <p className="text-base md:text-lg mb-2">Circleは、気軽に思いや写真をシェアできるSNS。</p>
                    <p className="text-base md:text-lg mb-2">シンプルな操作で、写真やメッセージをすぐに共有できます。</p>
                    <p className="text-base md:text-lg mb-10">絆をもっと近くに感じる、そんな場所をつくりました。</p>
                    <div className="flex items-center justify-center md:justify-start gap-5">
                        <Link
                            className="text-base md:text-lg bg-blue-700 text-white py-2 md:py-3 px-4 md:px-5 rounded-md
                          hover:bg-blue-600 duration-300"
                            href={"/sns/snstop"}
                        >
                            利用する
                        </Link>
                        <Link
                            className="text-base md:text-lg border border-blue-700 text-blue-700 py-2 md:py-3 px-4 md:px-5 rounded-md
                          hover:bg-blue-100 duration-300"
                            href={"/auth/login"}
                        >
                            ログイン
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Circle;