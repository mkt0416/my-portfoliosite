
import Link from "next/link";
import Image from "next/image";
import { Cats } from "@/app/site/cat/gallery/page";

const CatDetail = ({ cat }: { cat: Cats }) => {
    const breed = cat.breeds?.[0];

    return (
        <div className="w-full md:min-h-screen max-w-screen-lg mx-auto px-8 md:px-12 lg:px-32 py-20 text-gray-600
         dark:text-gray-200"
        >
            <div className="flex flex-col items-start gap-10">
                <h1 className="text-3xl font-bold">品種名: {breed?.name}</h1>
                <Image
                    src={cat.url}
                    alt="cat"
                    width={450}
                    height={450}
                    priority
                    className="w-full h-full object-cover rounded-md shadow-xl"
                />
                <div className="flex flex-col items-start gap-5">
                    <h2 className="text-3xl font-bold">発祥地: {breed?.origin}</h2>
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
        </div>
    );
};

export default CatDetail;