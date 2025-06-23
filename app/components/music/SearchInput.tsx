
import { Dispatch, SetStateAction } from "react";
import { FaSearch } from "react-icons/fa"

type Props = {
    setKeyword: Dispatch<SetStateAction<string>>;
    searchSongs: (page: number) => Promise<void>;
};

const SearchInput = ({ setKeyword, searchSongs }: Props) => {
    return (
        <div className="mb-10 max-w-md">
            <div className="flex">
                <input
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full h-12 bg-gray-200 rounded-tl-xl rounded-bl-xl py-3 px-4 focus:outline-none"
                    type="text"
                    placeholder="キーワード検索"
                />
                <button
                    onClick={() => searchSongs(1)}
                    className="w-16 h-12 bg-blue-500 rounded-tr-xl rounded-br-xl
                    flex items-center justify-center text-white text-xl hover:bg-blue-400 duration-300"
                >
                    <FaSearch />
                </button>
            </div>
        </div>
    )
}

export default SearchInput