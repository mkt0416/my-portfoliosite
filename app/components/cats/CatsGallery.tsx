
"use client";
import Link from "next/link"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cats } from "@/app/site/cat/gallery/page";
import catsJson from "../../constants/cats.json";
import { FcLike } from "react-icons/fc";
import { AiOutlineLike } from "react-icons/ai";

const CatsGallery = ({ initialCats }: { initialCats: Cats[] }) => {
    const [cats, setCats] = useState(initialCats);
    const [breed, setBreed] = useState("");
    const [origin, setOrigin] = useState("");
    const [loading, setLoading] = useState(false);
    const [visibleCats, setVisibleCats] = useState(9);

    const [likedCats, setLikedCats] = useState<string[]>(() => {
        if (typeof window === "undefined") return [];
        try {
            const storedLikes = localStorage.getItem("likedCats");
            return storedLikes ? JSON.parse(storedLikes) : [];
        } catch {
            return [];
        }
    })

    const originList = Array.from(new Set(catsJson.map((cat) => cat.origin))).sort();

    useEffect(() => {
        if (typeof window !== undefined) {
            localStorage.setItem("likedCats", JSON.stringify(likedCats));
        }
    }, [likedCats]);

    useEffect(() => {
        if (!breed && !origin) return;

        const fetchCats = async () => {
            setLoading(true);
            try {
                let targetBreed = breed;

                if (origin && !breed) {
                    const foundBreed = catsJson.find((cat) => cat.origin === origin);
                    targetBreed = foundBreed ? foundBreed.breed_id : "";
                }

                if (!targetBreed) {
                    setCats([]);
                    setLoading(false);
                    return;
                }

                const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=24&breed_ids=${targetBreed}`, {
                    headers: {
                        "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY ?? ""
                    },
                    next: {
                        revalidate: 60,
                    }
                });
                const jsonData = await response.json();
                setCats(jsonData);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCats();
    }, [breed, origin]);

    const toggleLike = (catId: string) => {
        setLikedCats((prev) =>
            prev.includes(catId)
                ? prev.filter((id) => id !== catId)
                : [...prev, catId]
        );
    };

    const handleShowCats = () => {
        setVisibleCats((prev) => prev + 6);
    };

    const shuffleCats = async () => {
        setLoading(true);
        const response = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=24", {
            headers: {
                "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY ?? ""
            },
            next: {
                revalidate: 60,
            }
        });
        const jsonData = await response.json();
        setCats(jsonData);
        setBreed("");
        setOrigin("");
        setVisibleCats(9);
        setLoading(false);
    };

    return (
        <section className="w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-32 py-20 text-gray-600 dark:text-gray-200">
            <h1 className="text-center text-3xl sm:text-5xl font-extrabold mb-20">🐾CatGallery</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                <div>
                    <h2 className="ml-4 font-bold mb-3">🐱 品種名で検索</h2>
                    <select
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value)
                            setOrigin("");
                        }}
                        className="mb-10 w-full py-3 px-4 border-2 outline-none appearance-none rounded-full font-semibold
                        dark:text-gray-700 dark:bg-gray-500"
                    >
                        <option value="">Select A Cats</option>
                        {catsJson.map((cat, index) => (
                            <option value={cat.breed_id} key={index}>
                                {cat.Name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <h2 className="ml-4 font-bold mb-3">🌎 原産国で検索</h2>
                    <select
                        value={origin}
                        onChange={(e) => {
                            setOrigin(e.target.value)
                            setBreed("");
                        }}
                        className="mb-10 w-full py-3 px-4 border-2 outline-none appearance-none rounded-full font-semibold
                        dark:text-gray-700 dark:bg-gray-500"
                    >
                        <option value="">Select A Origin</option>
                        {originList.map((origin, index) => (
                            <option value={origin} key={index}>
                                {origin}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button onClick={shuffleCats} className="font-semibold">
                        😼 猫をシャッフルする
                    </button>
                </div>
                <div>
                    <Link href={"/site/cat/favorites"} className="font-semibold text-blue-600 hover:underline">
                        😻 お気に入り一覧
                    </Link>
                </div>
                <div>
                    <Link href={"/site/cat"} className="font-semibold text-blue-600 hover:underline">
                        😸 トップに戻る
                    </Link>
                </div>
            </div>
            {loading
                ? (
                    <div className='w-full h-96 flex items-center justify-center'>
                        <div className='w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
                    </div>
                )
                : cats.length === 0
                    ? (
                        <p className="text-center">
                            😿 検索結果がありません
                        </p>
                    )
                    : (
                        (
                            <AnimatePresence>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
                                    {cats.slice(0, visibleCats).map((cat) => (
                                        <motion.li
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            key={cat.id} className="relative"
                                        >
                                            <Link
                                                href={`/site/cat/${cat.id}`}
                                            >
                                                <Image
                                                    src={cat.url}
                                                    alt="cat"
                                                    width={450}
                                                    height={450}
                                                    priority
                                                    className="w-full h-56 sm:h-72 object-cover rounded-3xl"
                                                />
                                                <p>{ }</p>
                                            </Link>
                                            <div className="absolute top-2 right-2 rounded-full bg-white/80 px-2 py-1">
                                                <button onClick={() => toggleLike(cat.id)}>
                                                    {likedCats.includes(cat.id)
                                                        ? <FcLike className="size-5" />
                                                        : <AiOutlineLike className="size-5 dark:text-gray-700" />
                                                    }
                                                </button>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </AnimatePresence>
                        )
                    )
            }
            {visibleCats < cats.length && (
                <div className="mt-10 flex justify-center">
                    <button
                        className="hover:bg-gray-200 duration-300 py-2 px-3 rounded-full"
                        onClick={handleShowCats}
                    >
                        😸 もっと猫を見る
                    </button>
                </div>
            )}

        </section>
    );
};

export default CatsGallery;