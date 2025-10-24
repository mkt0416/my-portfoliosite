
"use client";
import Link from "next/link";
import { Cats } from "@/app/lib/cats";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CatDetail = ({ cat, cats }: { cat: Cats, cats: Cats[] }) => {
    const breed = cat.breeds?.[0];

    return (
        <div className="w-full md:min-h-screen max-w-screen-lg mx-auto px-8 md:px-12 lg:px-32 py-20 text-gray-600
         dark:text-gray-200"
        >
            <div className="flex flex-col items-start gap-10">
                <h1 className="text-2xl sm:text-3xl font-bold">品種名: {breed?.name}</h1>
                <img
                    src={cat.url}
                    alt="cat"
                    className="w-full object-cover rounded-md shadow-xl"
                />
                <div className="flex flex-col items-start gap-5">
                    <h2 className="text-2xl sm:text-3xl font-bold">発祥地: {breed?.origin}</h2>
                    <div className="text-lg font-semibold">
                        <p>{breed?.description}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <a
                        href={breed?.wikipedia_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm sm:text-base"
                    >
                        Wikipediaで詳しく見る
                    </a>
                    <Link href={"/site/cat/gallery"} className="text-blue-600 hover:underline text-sm sm:text-base">
                        ギャラリーへ戻る
                    </Link>
                </div>
            </div>
            <div className="mt-10 w-full">
                <h2 className="mb-5">こちらの猫もチェック😸</h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={false}
                    pagination={false}
                    modules={[Pagination]}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        640: { slidesPerView: 2.5 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3.5 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {cats.map((cat) => (
                        <SwiperSlide key={cat.id}>
                            <Link
                                href={`/site/cat/${cat.id}`}
                            >
                                <img
                                    src={cat.url}
                                    alt="cat-image"
                                    className="w-full h-32 sm:h-40 object-cover rounded-xl"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CatDetail;