
"use client";
import Image from "next/image";
import Link from "next/link";
import SeachMenu from "./SearchMenu";
import MapLoading from "./MapLoading";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/context/ContextProvider";
import { formatDate } from "@/app/lib/utils";
import { format } from "date-fns";
import { FaClock, FaMapPin, FaBuilding, FaTrash } from "react-icons/fa";

const AllWorks = () => {
    const context = useContext(AppContext);
    const works = context?.works;
    const setWorks = context?.setWorks;
    const [keyword, setKeyWord] = useState<string | null>("");
    const [loading, setLoading] = useState(false);
    const [visibleWork, setVisibleWork] = useState(6);

    // 単日検索
    const handleDateSelect = async (date: Date | null) => {
        if (!setWorks) return;

        if (!date) {
            getAllWorks();
            setVisibleWork(6);
            return;
        }
        setLoading(true);
        try {
            const formattedDate = format(date, "yyyy-MM-dd");
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/map?date=${formattedDate}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const jsonData = await response.json();
            setWorks(jsonData);
            setLoading(false);
            setVisibleWork(6);
        } catch (err) {
            console.error("絞り込みエラー:", err);
        }
    };

    // 期間検索　
    const handleRangeSelect = async (start: Date | null, end: Date | null) => {
        if (!setWorks) return;

        if (!start || !end) {
            getAllWorks();
            setVisibleWork(6);
            return;
        }

        setLoading(true);
        try {
            const formatedStart = format(start, "yyyy-MM-dd");
            const formatedend = format(end, "yyyy-MM-dd");

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/map?start=${formatedStart}&end=${formatedend}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const jsonData = await response.json();
            setWorks(jsonData);
            setLoading(false);
            setVisibleWork(6);
        } catch (err) {
            console.error("期間絞り込みエラー:", err);
        }
    };

    // キーワード検索
    const searchWorks = async () => {
        if (!setWorks) return;

        if (!keyword) {
            getAllWorks();
            setVisibleWork(6);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/map?keyword=${encodeURIComponent(keyword)}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const jsonData = await response.json();
            setWorks(jsonData);
            setKeyWord("");
            setLoading(false);
            setVisibleWork(6);
        } catch (err) {
            console.error("検索絞り込みエラー:", err);
        }
    };

    const getAllWorks = async () => {
        if (!setWorks) return;
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/map`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
            });
            const jsonData = await response.json();
            setWorks(jsonData);
            setVisibleWork(6);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllWorks();
    }, []);

    const displayedWork = works?.slice(0, visibleWork) ?? [];

    const handleShowMore = () => {
        if (works && visibleWork < works.length) {
            setVisibleWork((prev) => prev + 6);
        }
    };

    const deleteWork = async (id: string) => {
        const confirmMessage = window.confirm("本当に削除しますか？");
        if (!confirmMessage) return;

        const newWorks = works?.filter((work) => work._id !== id) ?? [];
        setWorks?.(newWorks);
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/map/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="my-20">
            <SeachMenu
                onSingleDateSelect={handleDateSelect}
                onRangeSelect={handleRangeSelect}
                keyword={keyword}
                setKeyWord={setKeyWord}
                setVisibleWork={setVisibleWork}
                searchWorks={searchWorks}
                getAllWorks={getAllWorks}
            />

            {loading ? (
                <div className="mt-10">
                    <MapLoading />
                </div>
            ) : displayedWork && displayedWork.length > 0 ? (
                <>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {displayedWork.map((work) => (
                            <div
                                key={work._id}
                                className="flex flex-col gap-2 bg-white dark:bg-gray-500 rounded-xl py-6 px-6 shadow-xl
                              text-blue-600 dark:text-gray-200 text-xs sm:text-base relative"
                            >
                                <div className="flex items-center gap-1">
                                    <FaClock />
                                    <h2>{formatDate(work.createdAt)}</h2>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaMapPin />
                                    <h3>{work.province} {work.city} {work.neighbourhood}</h3>
                                </div>

                                <div className="absolute right-4 text-red-500 hover:bg-gray-200 rounded-md p-1 duration-300">
                                    <button onClick={() => deleteWork(work._id)}>
                                        <FaTrash />
                                    </button>
                                </div>

                                <Image
                                    className="w-full h-full object-cover rounded-md"
                                    src={work.image}
                                    alt="site-image"
                                    width={500}
                                    height={500}
                                    priority
                                />

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <FaBuilding />
                                        <h4>{work.siteName}</h4>
                                    </div>
                                    <Link
                                        className="hover:bg-gray-200 duration-300 rounded-md p-1"
                                        href={`/site/map/${work._id}`}
                                    >
                                        詳細
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {works && visibleWork < works.length && (
                        <div className="mt-10 flex justify-center">
                            <button
                                className="py-2 px-4 border border-blue-600 bg-blue-50 rounded-md text-blue-600
                                text-xs sm:text-base hover:bg-blue-100 duration-300 dark:text-gray-200 dark:bg-blue-700
                              dark:border-blue-200 dark:bg-none dark:hover:bg-blue-600"
                                onClick={handleShowMore}
                            >
                                もっと見る
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="mt-10">
                    <h2 className="text-blue-600">日報がありません</h2>
                </div>
            )}
        </div>
    );

};

export default AllWorks;