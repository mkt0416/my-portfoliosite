
import Image from "next/image";
import Link from "next/link";

const AppBox = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-500 py-20">
            <section className='w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-32
           text-gray-600 dark:text-white relative'
            >
                <h2 className="text-2xl md:text-4xl font-extrabold mb-10 lg:mb-20 text-center lg:text-left">AppBox</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    <div className="max-lg:order-2">
                        <h1 className="text-xl md:text-4xl font-bold mb-5"><span className="text-blue-700">「便利も、ワクワクも」</span>
                            、クリックひとつ。</h1>
                        <p className="text-base md:text-lg mb-2">定番のツールから、遊び心あふれるユーティリティまで。</p>
                        <p className="text-base md:text-lg mb-2">安全に、手軽に、今すぐダウンロードできます。</p>
                        <p className="text-base md:text-lg mb-10">新しいお気に入りを探しに行こう。</p>
                        <div className="flex items-center justify-center md:justify-start gap-5">
                            <Link
                                className="bg-blue-700 text-white py-2 md:py-3 px-4 md:px-5 rounded-md
                              hover:bg-blue-600 duration-300"
                                href={"/site/winapp"}
                            >
                                利用する
                            </Link>
                        </div>
                    </div>
                    <Image
                        src={"/images/AppBox.svg"}
                        alt="phone"
                        width={450}
                        height={450}
                    />
                </div>
            </section>
        </div>
    );
};

export default AppBox;