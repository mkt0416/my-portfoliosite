
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Sets } from "@/app/lib/lego";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TbLego } from "react-icons/tb";

const SlideArea = ({ randomSets, randomFigs }: { randomSets: Sets[], randomFigs: Sets[] }) => {
    const router = useRouter();

    return (
        <>
            <div className="mt-10 w-full">
                <h2 className="mb-5 font-semibold">おすすめセット</h2>
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
                    {randomSets.map((set) => (
                        <SwiperSlide key={set.set_num}>
                            <div
                                onClick={() => router.push(`/site/lego/sets/${set.set_num}`)}
                                className="hover:scale-110 duration-500"
                            >
                                {set.set_img_url
                                    ? (
                                        <Image
                                            src={set.set_img_url || "/images/posts/no-image.png"}
                                            alt={set.set_name || "LEGO image"}
                                            width={200}
                                            height={200}
                                            className="w-full h-40 sm:h-56 max-w-md object-cover rounded-xl shadow-xl"
                                        />
                                    ) : (
                                        <div className="w-full h-40 sm:h-56 rounded-2xl shadow-xl flex flex-col items-center justify-center
                                               bg-gradient-to-tl from-yellow-200 via-yellow-300 to-yellow-400"
                                        >
                                            <TbLego className="size-12 text-yellow-600" />
                                            <p className="text-xl sm:text-2xl font-bold">No Image</p>
                                        </div>
                                    )
                                }
                                <p className="text-xs sm:text-base font-semibold mt-2">{set.name || set.set_name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-10 w-full">
                <h2 className="mb-5 font-semibold">おすすめミニフィグ</h2>
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
                    {randomFigs.map((fig) => (
                        <SwiperSlide key={fig.set_num}>
                            <div
                                onClick={() => router.push(`/site/lego/minifig/${fig.set_num}`)}
                                className="hover:scale-110 duration-500"
                            >
                                {fig.set_img_url
                                    ? (
                                        <Image
                                            src={fig.set_img_url || "/images/posts/no-image.png"}
                                            alt={fig.set_name || "LEGO image"}
                                            width={200}
                                            height={200}
                                            className="w-full h-40 sm:h-56 max-w-md object-cover rounded-xl shadow-xl"
                                        />
                                    )
                                    : (
                                        <div className="w-full h-40 sm:h-56 rounded-2xl shadow-xl flex flex-col items-center justify-center
                                               bg-gradient-to-tl from-yellow-200 via-yellow-300 to-yellow-400"
                                        >
                                            <TbLego className="size-12 text-yellow-600" />
                                            <p className="text-xl sm:text-2xl font-bold">No Image</p>
                                        </div>
                                    )
                                }
                                <p className="text-xs sm:text-base font-semibold mt-2">{fig.name || fig.set_name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default SlideArea;