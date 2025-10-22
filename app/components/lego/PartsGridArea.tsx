
import Link from "next/link";
import Image from "next/image";
import Placeholder from "./Placeholder";
import { Parts } from "@/app/lib/lego";

type Props = {
    data: Parts[];
    visibleData: number;
};

const PartsGridArea = ({ data, visibleData }: Props) => {
    return (
        <ul className="mt-10 grid grid-cols-2 xl:grid-cols-3 gap-10">
            {data.slice(0, visibleData).map((part, index) => {
                const isThemePart = "part" in part;

                const partNum = isThemePart ? part.part.part_num : part.part_num;
                const partName = isThemePart ? part.part.name : part.name;
                const partImg = isThemePart ? part.part.part_img_url : part.part_img_url;

                return (
                    <Link
                        href={`/site/lego/parts/${partNum}`}
                        key={index}
                    >
                        {partImg
                            ? (
                                <Image
                                    src={partImg}
                                    alt={partName || "Parts image"}
                                    width={450}
                                    height={450}
                                    className="w-full h-32 sm:h-80 rounded-2xl shadow-xl object-cover"
                                />
                            ) : (
                                <Placeholder />
                            )
                        }
                        <p className="mt-2 font-semibold">{partName}</p>
                    </Link>
                );
            })}
        </ul>
    );
};

export default PartsGridArea;