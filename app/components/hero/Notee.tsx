
import Image from "next/image";
import Link from "next/link";

const Notee = () => {
    return (
        <div className="bg-gray-200 dark:bg-gray-500 py-20">
            <section className='w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-16
           text-gray-600 dark:text-white relative'>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-10 lg:mb-20 text-center">Notee</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    <div className="max-lg:order-2">
                        <h1 className="text-xl md:text-4xl font-bold mb-5"> <span className="text-blue-700">思いついたら、</span>すぐに書ける。</h1>
                        <p className="text-base md:text-lg mb-2">ノートもタスクも、ひとつの画面でシンプルに管理。</p>
                        <p className="text-base md:text-lg mb-2">難しい操作はなく、直感的に使えるから続けやすい。</p>
                        <p className="text-base md:text-lg mb-10">あなたの毎日を、もっと軽やかに整えます。</p>
                        <div className="flex items-center justify-center md:justify-start gap-5">
                            <Link
                                className="bg-blue-700 text-white py-2 md:py-3 px-4 md:px-5 rounded-md
                              hover:bg-blue-600 duration-300"
                                href={"/site/memo"}
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
                    <Image
                        src={"/images/Notee.svg"}
                        alt="phone"
                        width={450}
                        height={450}
                    />
                </div>
            </section>
        </div>
    );
};

export default Notee;