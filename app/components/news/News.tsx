
"use client";
import { useState } from "react";
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

const News = ({ articles }: { articles: Article[] }) => {
    const [modalData, setModalData] = useState<ModalData | null>(null);

    return (
        <div className="dark:bg-gray-500 py-10 md:py-20">
            <section
                className="w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16
              text-gray-600 dark:text-white"
            >
                <h2 className="text-xl md:text-4xl font-extrabold mb-10">
                    Daily News
                </h2>
                {articles.length > 0 ? (
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
                    <p className="font-semibold text-center">記事を読み込み中...</p>
                )}
            </section>
            <NewsModal modalData={modalData} onclose={() => setModalData(null)} />
        </div>
    );
};

export default News;
