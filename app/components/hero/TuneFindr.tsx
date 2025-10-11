
import Image from "next/image";
import Link from "next/link";

const TuneFindr = () => {
    return (
        <div className="py-20">
            <section className='w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-32
           text-gray-600 dark:text-white relative'>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-10 lg:mb-20 text-center lg:text-left">TuneFindr</h2>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <Image
                        src={"/images/TuneFindr.svg"}
                        alt="phone"
                        width={450}
                        height={450}
                    />
                    <div>
                        <h1 className="text-xl md:text-4xl font-bold mb-5"> <span className="text-blue-700">次のお気に入りの一曲を、</span>もっと簡単に。</h1>
                        <p className="text-base md:text-lg mb-2">TuneFindrはSpotify APIを利用した楽曲検索アプリです。</p>
                        <p className="text-base md:text-lg mb-2">新しい音楽との出会いを、あなたの毎日に。</p>
                        <p className="text-base md:text-lg mb-10">仕事の合間に、気分をリセットする1曲を見つけてみませんか？</p>
                        <div className="flex items-center justify-center md:justify-start gap-5">
                            <Link
                                className="bg-blue-700 text-white py-2 md:py-3 px-4 md:px-5 rounded-md
                              hover:bg-blue-600 duration-300"
                                href={"/site/music"}
                            >
                                利用する
                            </Link>
                            <Link
                                className="border border-blue-700 text-blue-700 py-2 md:py-3 px-4 md:px-5 rounded-md
                              hover:bg-blue-100 duration-300"
                                href={"/auth/login"}
                            >
                                ログイン
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TuneFindr;