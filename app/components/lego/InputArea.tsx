
import { FaSearch } from "react-icons/fa";
import { TbLego } from "react-icons/tb";

type Props = {
    keyword: string;
    setKeyWord: React.Dispatch<React.SetStateAction<string>>;
    handler: () => Promise<void>;
};

const InputArea = ({ keyword, setKeyWord, handler }: Props) => {
    return (
        <div className="flex items-center">
            <div className="flex items-center gap-1">
                <TbLego className="size-10 text-yellow-400" />
                <input
                    className="w-full rounded-tl-xl rounded-bl-xl py-2 px-4 font-semibold border-4 border-yellow-400 outline-none
                  placeholder:text-gray-600 dark:bg-gray-800 dark:placeholder:text-gray-200 placeholder:text-sm sm:text-base"
                    onChange={(e) => setKeyWord(e.target.value)}
                    value={keyword}
                    type="text"
                    placeholder="キーワード検索"
                />
            </div>
            <button
                className="font-semibold border-4 border-yellow-400 bg-yellow-400 rounded-tr-xl rounded-br-xl
                py-2 px-4 text-sm sm:text-base"
                onClick={handler}
            >
                <span className="hidden sm:flex">検索</span>
                <FaSearch className="size-6 sm:hidden" />
            </button>
        </div>
    );
};

export default InputArea;