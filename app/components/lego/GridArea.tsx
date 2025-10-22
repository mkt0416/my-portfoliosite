
import Link from "next/link";
import Image from "next/image";
import Placeholder from "./Placeholder";
import { Sets } from "@/app/lib/lego";

type Props = {
    basePath?: string;
    data: Sets[];
    visibleData: number;
};

const GridArea = ({ basePath = "/site/lego/sets", data, visibleData }: Props) => {
    return (
        <ul className="mt-10 grid grid-cols-2 xl:grid-cols-3 gap-10">
            {data.slice(0, visibleData).map((set, index) => (
                <Link
                    href={`${basePath}/${set.set_num}`}
                    key={index}
                >
                    {set.set_img_url
                        ? (
                            <Image
                                src={set.set_img_url}
                                alt={set.name || set.set_name || "LEGO image"}
                                width={450}
                                height={450}
                                className="w-full h-32 sm:h-80 rounded-2xl shadow-xl object-cover"
                            />
                        ) : (
                            <Placeholder />
                        )
                    }
                    <p className="mt-2 font-semibold">{set.name || set.set_name}</p>
                </Link>
            ))}
        </ul>
    );
};

export default GridArea;