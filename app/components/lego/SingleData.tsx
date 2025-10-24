
"use client";
import { useRouter } from "next/navigation";
import { Sets } from "@/app/lib/lego";
import Placeholder from "./Placeholder";
import SlideArea from "./SlideArea";
import { PiLego } from "react-icons/pi";

type Props = {
    data: Sets;
    randomSets: Sets[];
    randomFigs: Sets[];
};

const SingleData = ({ data, randomSets, randomFigs }: Props) => {
    const router = useRouter();

    return (
        <section className="w-full max-w-screen-lg min-h-screen mx-auto px-4 md:px-8 lg:px-12 py-20
         text-gray-600 dark:text-gray-200"
        >
            <div className="flex flex-col items-center gap-5">
                <h1 className=" text-2xl md:text-4xl font-bold">{data.name || data.set_name}</h1>
                {data.set_img_url
                    ? (
                        <img
                            src={data.set_img_url}
                            alt={data.name || "LEGO image"}
                            className="w-full h-full object-cover rounded-xl shadow-xl"
                        />
                    ) : (
                        <Placeholder />
                    )
                }
                <p className="mb-4 font-semibold">セット番号: {data.set_num}</p>
                <div className="text-center space-y-2 font-semibold">
                    <p>発売年: {data.year || "-"}</p>
                    <p>パーツ数: {data.num_parts}</p>
                    <p>テーマID: {data.theme_id || "-"}</p>
                </div>
                <a
                    target="_blank"
                    href={data.set_url}
                    className="text-blue-500 hover:underline font-semibold"
                >
                    Rebrickableで見る
                </a>
            </div>
            <SlideArea
                randomSets={randomSets}
                randomFigs={randomFigs}
            />
            <div className="flex justify-end mt-5">
                <button
                    onClick={() => router.push("/site/lego/sets")}
                    className="flex items-center gap-1 bg-yellow-50 py-2 px-4 rounded-full border border-yellow-400
                  dark:bg-gray-800"
                >
                    <PiLego className="size-5 text-yellow-400" />
                    戻る
                </button>
            </div>
        </section>
    );
};

export default SingleData;
