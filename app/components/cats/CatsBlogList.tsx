
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion, AnimatePresence } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import CatBlogDate from "./BlogDate";
import { CatBlog } from "@/app/lib/microcms";
import { IoIosArrowDropright } from "react-icons/io";
import { FaPaw } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io";
import { RxReset } from "react-icons/rx";

type Props = {
    data: CatBlog[];
};

const CatsBlogList = ({ data }: Props) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [visibleBlog, setVisibleBlog] = useState(6);

    const filteredDate = selectedDate
        ? data.filter((article) => {
            const articleDate = new Date(article.createdAt ?? article.publishedAt);
            return articleDate.toDateString() === selectedDate.toDateString();
        })
        : data;

    const showMoreBlog = () => {
        setVisibleBlog((prev) => prev + 6);
    };

    return (
        <section className="w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-32 py-20 text-gray-600 dark:text-gray-200">
            <h1 className="text-center text-3xl sm:text-5xl font-extrabold mb-20 bg-white/90 dark:bg-gray-500 py-5 rounded-full
             w-full md:w-96 mx-auto border-2 border-pink-400"
            >
                🐾CatBlog
            </h1>
            <div className="mb-10 flex justify-center items-center">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="🐾日付検索"
                    className="rounded-full py-3 px-4 outline-none bg-white/90 border-2 border-pink-400 placeholder:text-gray-600
                     dark:bg-gray-500 dark:placeholder:text-white font-semibold"
                />
                {selectedDate && (
                    <button
                        onClick={() => { setSelectedDate(null), setVisibleBlog(6) }}
                        className="bg-white rounded-full border-2 border-pink-400 p-3 ml-3"
                    >
                        <RxReset className="size-5" />
                    </button>
                )}
            </div>
            <AnimatePresence>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {filteredDate.length > 0 ? (
                        filteredDate.slice(0, visibleBlog).map((article) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                key={article.id}
                            >
                                <div
                                    className="flex items-center justify-center gap-1 mb-3 text-lg sm:text-xl bg-white/90 dark:bg-gray-500
                                    py-2 rounded-full w-56 mx-auto border-2 border-pink-600"
                                >
                                    <IoLogoOctocat />
                                    <CatBlogDate date={article.createdAt ?? article.publishedAt} />
                                </div>

                                <div className="bg-white/90 dark:bg-gray-500 rounded-3xl shadow-xl hover:scale-105 duration-300">
                                    <Image
                                        className="rounded-tr-3xl rounded-tl-3xl object-cover"
                                        src={article.image.url}
                                        alt="image"
                                        width={1200}
                                        height={630}
                                        priority
                                    />
                                    <div className="p-5 flex flex-col items-center gap-2 relative">
                                        <h2 className="text-lg md:text-xl font-bold">{article.title}</h2>
                                        <Link
                                            href={`/site/cat/catBlog/${article.id}`}
                                            className="font-semibold flex items-center hover:text-blue-600 hover:underline"
                                        >
                                            ブログ詳細
                                            <IoIosArrowDropright className="size-6 pt-1" />
                                        </Link>

                                        <div className="absolute top-14 sm:top-6 right-2 sm:right-6">
                                            <FaPaw className="size-7" />
                                        </div>
                                        <div className="absolute top-14 sm:top-6 left-2 sm:left-6">
                                            <FaPaw className="size-7" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-lg font-bold mt-10">
                            該当する記事がありません😸
                        </p>
                    )}
                </div>
            </AnimatePresence>
            {visibleBlog < filteredDate.length && (
                <div className="flex justify-center mt-10">
                    <button
                        className="bg-white/90 py-2 px-4 rounded-full hover:bg-white/70 duration-300
                        font-semibold border border-pink-400"
                        onClick={showMoreBlog}
                    >
                        もっと見る
                    </button>
                </div>
            )}
        </section>
    );
};

export default CatsBlogList;