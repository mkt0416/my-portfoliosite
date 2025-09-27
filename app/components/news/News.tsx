
"use client";
import { useEffect, useState } from "react";
import { dummyArticles } from "@/app/constants/dummy";
import NewsSectiotn from "./NewsSectiotn";
import NewsModal from "./NewsModal";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export type Article = {
    author: string;
    id: number;
    image: string;
    publish_date: string;
    text: string;
    title: string;
};

export type ModalData = {
    text: string | null;
    title: string | null;
};

const News = () => {
    const [articles, setArticles] = useState<Article[]>(dummyArticles);
    const [loading, setLoading] = useState(false);
    const [modalData, setModalData] = useState<ModalData | null>(null);

    useEffect(() => {
        const getNews = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/news`
                );
                const jsonData = await response.json();
                if (jsonData.news) {
                    setArticles(jsonData.news || []);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getNews();
    }, []);

    return (
        <div className="bg-blue-100 dark:bg-gray-600 py-10 md:py-20">
            <section
                className="w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16
              text-gray-600 dark:text-white"
            >
                <h2 className="text-xl md:text-4xl font-extrabold mb-10 text-center">
                    Daily News
                </h2>

                {loading ? (
                    <div className="w-full h-96 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                ) : articles.length > 0 ? (
                    <Swiper
                        spaceBetween={100}
                        slidesPerView={1.0}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mt-10 md:mt-20"
                    >
                        {articles.map((data) => (
                            <SwiperSlide key={data.id} className="mb-20">
                                <NewsSectiotn
                                    data={data}
                                    setModalData={setModalData}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="font-semibold text-center">記事がありません。</p>
                )}
            </section>
            <NewsModal modalData={modalData} onclose={() => setModalData(null)} />
        </div>
    );
};

export default News;
