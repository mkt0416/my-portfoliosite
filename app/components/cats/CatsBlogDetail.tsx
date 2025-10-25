
import Link from "next/link";
import Image from "next/image";
import { CatBlog } from "@/app/lib/microcms";
import { IoIosArrowDropright } from "react-icons/io";

type Props = {
    data: CatBlog;
};

const CatsBlogDetail = ({ data }: Props) => {
    return (
        <section className="w-full max-w-screen-lg h-auto mx-auto px-2 md:px-12 lg:px-32 py-20 text-gray-600 dark:text-gray-200">
            <div className="flex flex-col items-start gap-5 sm:gap-10 bg-white/90 dark:bg-gray-500/90 rounded-3xl
             py-5 sm:py-10 px-3 sm:px-10"
            >
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold">{data.title}</h1>
                <Image
                    src={data.image.url}
                    alt="cat-image"
                    width={600}
                    height={600}
                    priority
                    className="w-full object-cover rounded-3xl
                        shadow-xl border-4 border-pink-400"
                />
                <p className="leading-relaxed font-semibold">{data.textBody}</p>
                <div className="self-end">
                    <Link
                        href={"/site/cat/catBlog"}
                        className="flex justify-end items-center text-blue-600 hover:underline font-semibold"
                    >
                        😸猫ブログ一覧
                        <IoIosArrowDropright className="size-6 pt-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CatsBlogDetail;