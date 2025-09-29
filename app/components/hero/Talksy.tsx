
import Image from "next/image";
import Link from "next/link";

const Talksy = () => {
    return (
        <div className="bg-gray-700 dark:bg-gray-500 py-20">
            <section className='w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-16
           text-gray-200 dark:text-white relative'>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-10 lg:mb-20 text-center">Talksy</h2>
                <div className="flex flex-col items-center justify-between lg:gap-20 gap-10">
                    <div className="max-md:order-2">
                        <h1 className="text-xl md:text-4xl font-bold mb-5">あなたのそばに、 <span className="text-blue-700">いつでも話せるAIを。</span></h1>
                        <p className="text-base md:text-lg mb-2">TalksyはChatGPTクローンとして生まれた、フレンドリーで頼れるAIチャットアプリです。</p>
                        <p className="text-base md:text-lg mb-2">アイデアを整理したいときも、雑談したいときも、知識を広げたいときも。</p>
                        <p className="text-base md:text-lg mb-10">あなたの言葉に反応し、新しい発見をサポートします。</p>
                        <div className="flex items-center justify-center md:justify-start gap-5">
                            <Link
                                className="text-base md:text-lg bg-blue-700 text-white py-2 md:py-3 px-4 md:px-5 rounded-md
                              hover:bg-blue-600 duration-300"
                                href={"/site/chat"}
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
                    <Image
                        src={"/images/Talksy.svg"}
                        alt="phone"
                        width={450}
                        height={450}
                    />
                </div>
            </section>
        </div>
    );
};

export default Talksy;