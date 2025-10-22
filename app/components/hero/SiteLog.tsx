
import Image from "next/image";
import Link from "next/link";

const SiteLog = () => {
    return (
        <section className='w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-32
           text-gray-600 dark:text-white my-20 relative'
        >
            <h2 className="text-2xl md:text-4xl font-extrabold mb-10 lg:mb-20 text-center lg:text-left">SiteLog</h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <Image
                    src={"/images/SiteLog.png"}
                    alt="phone"
                    width={450}
                    height={450}
                />
                <div>
                    <h1 className="text-xl md:text-4xl font-bold mb-5"> <span className="text-blue-700">「どこで、何をしたか」</span>をもう忘れない。</h1>
                    <p className="text-base md:text-lg mb-2">現場の記録を地図に残すことで、情報整理がもっと楽に。</p>
                    <p className="text-base md:text-lg mb-2">地図に作業内容や感想を残せる、現場管理専用アプリです。</p>
                    <p className="text-base md:text-lg mb-10">記録した情報は、あなたの経験とともに積み重なる大切な財産に。</p>
                    <div className="flex items-center justify-center md:justify-start gap-5">
                        <Link
                            className="text-base bg-blue-700 text-white py-2 md:py-3 px-4 md:px-5 rounded-md
                          hover:bg-blue-600 duration-300"
                            href={"/site/map"}
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
    );
};

export default SiteLog;