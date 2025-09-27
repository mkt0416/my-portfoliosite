
import { formatDate } from "@/app/lib/utils";
import { Article, ModalData } from "./News";
import { FaRegClock, FaNewspaper } from "react-icons/fa";

type Props = {
    data: Article;
    setModalData: React.Dispatch<React.SetStateAction<ModalData | null>>;
};

const NewsSectiotn = ({ data, setModalData }: Props) => {
    return (
        <li className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20">
            <div className="w-full md:w-1/2">
                <div className="flex items-center gap-1 text-sm md:text-xl font-semibold mb-3">
                    <FaRegClock />
                    <p>
                        {formatDate(data.publish_date)}
                    </p>
                </div>
                <div className="flex items-center gap-1 text-base md:text-2xl font-semibold mb-5">
                    <FaNewspaper />
                    <p className="">
                        {data.author}
                    </p>
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-5">
                    {data.title.length >= 30
                        ? data.title.slice(0, 30) + "..."
                        : data.title}
                </h3>
                <p className="leading-relaxed mb-5">
                    {data.text.length >= 200
                        ? data.text.slice(0, 200) + "..."
                        : data.text}
                </p>
                <button
                    className="hover:underline"
                    onClick={() =>
                        setModalData({
                            title: data.title,
                            text: data.text,
                        })
                    }
                >
                    全文を読む
                </button>
            </div>
            <img
                className="w-full md:w-1/2 h-48 md:h-96 object-cover object-top rounded-xl"
                src={data.image}
                alt="news-image"
            />
        </li>
    );
};

export default NewsSectiotn;