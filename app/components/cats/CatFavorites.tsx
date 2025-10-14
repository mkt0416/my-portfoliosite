
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Cats } from "@/app/site/cat/gallery/page";
import { FcLike } from "react-icons/fc";
import { FaTrashAlt } from "react-icons/fa";

const CatFavorites = () => {
    const [favoriteCats, setFavoriteCats] = useState<Cats[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedLikes = localStorage.getItem("likedCats");
        if (!storedLikes) {
            setFavoriteCats([]);
            setLoading(false);
            return;
        }

        const likedIds = JSON.parse(storedLikes) as string[];

        if (likedIds.length === 0) {
            setFavoriteCats([]);
            setLoading(false);
            return;
        }

        const fetchFavorites = async () => {
            try {
                const requests = likedIds.map((id) =>
                    fetch(`https://api.thecatapi.com/v1/images/${id}`, {
                        headers: {
                            "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY ?? "",
                        },
                    }).then((res) => res.json())
                );
                const results = await Promise.all(requests);
                setFavoriteCats(results);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchFavorites();
    }, []);

    const handleRemoveFavorites = (catId: string) => {
        const storedLikes = localStorage.getItem("likedCats");
        if (!storedLikes) return;

        const likedIds = JSON.parse(storedLikes) as string[];
        const updatedLikes = likedIds.filter((id) => id !== catId);

        localStorage.setItem("likedCats", JSON.stringify(updatedLikes));

        setFavoriteCats((prev) => prev.filter((cat) => cat.id !== catId));
    };
    return (
        <section className="w-full max-w-screen-2xl h-auto mx-auto px-8 md:px-12 lg:px-32 py-20 text-gray-600
        dark:text-gray-200"
        >
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-20 flex items-center justify-center gap-1">
                <FcLike />
                Favorites Cats
            </h1>
            {loading
                ? (
                    <div className='w-full h-96 flex items-center justify-center'>
                        <div className='w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
                    </div>
                )
                : favoriteCats.length === 0
                    ? (
                        <p className="text-center my-10">
                            😿 お気に入りがまだありません
                        </p>
                    )
                    : (
                        (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                                {favoriteCats.map((cat) => (
                                    <li key={cat.id} className="relative">
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
                                            <button
                                                onClick={() => handleRemoveFavorites(cat.id)}
                                            >
                                                <FaTrashAlt className="text-red-600" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    )
            }
            <div className="flex justify-center mt-10">
                <Link href={"/site/cat/gallery"} className="text-blue-600 hover:underline text-sm sm:text-base">
                    ギャラリーへ戻る
                </Link>
            </div>
        </section>
    );
};

export default CatFavorites;