
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Parts } from "@/app/lib/lego";
import Placeholder from "./Placeholder";
import { PiLego } from "react-icons/pi";

const PartsDetail = ({ data }: { data: Parts }) => {
    const router = useRouter();
    const isThemePart = "part" in data;

    const partNum = isThemePart ? data.part.part_num : data.part_num;
    const partName = isThemePart ? data.part.name : data.name;
    const partImg = isThemePart ? data.part.part_img_url : data.part_img_url;
    const partUrl = isThemePart ? data.part.part_url : data.part_url;
    const partCat = isThemePart ? data.part.part_cat_id : data.part_cat_id;
    const partYear_from = isThemePart ? data.part.year_from : data.year_from;
    const partYear_to = isThemePart ? data.part.year_to : data.year_to;

    return (
        <section className="w-full max-w-screen-md min-h-screen mx-auto px-8 md:px-12 lg:px-32 py-20
         text-gray-600 dark:text-gray-200"
        >
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-2xl md:text-4xl font-bold">{partName}</h1>
                {partImg
                    ? (
                        <Image
                            src={partImg}
                            alt={partName || "parts-iamge"}
                            width={500}
                            height={500}
                            priority
                            className="w-full object-cover rounded-xl shadow-xl"
                        />
                    )
                    : (
                        <Placeholder />
                    )
                }
                <p className="mb-4 font-semibold">セット番号: {partNum}</p>
                <div className="text-center space-y-2 font-semibold">
                    <p>使用期間: {partYear_from} - {partYear_to || "現在"}</p>
                    <p>パーツカテゴリー: {partCat}</p>
                </div>
                <a
                    target="_blank"
                    href={partUrl}
                    className="text-blue-500 hover:underline font-semibold"
                >
                    Rebrickableで見る
                </a>
            </div>
            <div className="flex justify-end mt-10">
                <button
                    onClick={() => router.back()}
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

export default PartsDetail;