
"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";

type Props = {
    onSingleDateSelect: (date: Date | null) => void;
    onRangeSelect: (start: Date | null, end: Date | null) => void;
    keyword: string | null;
    setKeyWord: React.Dispatch<React.SetStateAction<string | null>>;
    setVisibleWork: React.Dispatch<React.SetStateAction<number>>;
    searchWorks: () => Promise<void>;
    getAllWorks: () => Promise<void>;
};

const SeachMenu = ({
    onSingleDateSelect,
    onRangeSelect,
    keyword,
    setKeyWord,
    setVisibleWork,
    searchWorks,
    getAllWorks,
}: Props) => {
    // 単日検索用
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    // 期間選択用
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    // 単日変更
    const handleDeleteChange = (date: Date | null) => {
        setSelectedDate(date);
        onSingleDateSelect(date)
    };

    // 期間変更
    const handleRangeChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onRangeSelect(start, end);
    };


    return (
        <div className="flex flex-wrap gap-5 justify-center sm:justify-start items-center sm:items-start">
            <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-1 text-sm sm:text-base text-blue-600 dark:text-gray-200">
                    <FaSearch />
                    <label>日付で検索</label>
                </div>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDeleteChange}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="日付を選択"
                    className="border p-2 rounded-md outline-none placeholder:text-sm sm:placeholder:text-base
                    dark:bg-gray-500"
                    isClearable
                />
            </div>

            <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-1 text-sm sm:text-base text-blue-600 dark:text-gray-200">
                    <FaSearch />
                    <label>期間で検索</label>
                </div>
                <DatePicker
                    selectsRange
                    startDate={startDate}
                    endDate={endDate}
                    onChange={handleRangeChange}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="期間を選択"
                    className="border p-2 rounded-md outline-none placeholder:text-sm sm:placeholder:text-base
                    dark:bg-gray-500"
                    isClearable
                />
            </div>

            <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-1 text-sm sm:text-base text-blue-600 dark:text-gray-200">
                    <FaSearch />
                    <label>キーワードで検索</label>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        value={keyword ?? ""}
                        onChange={(e) => setKeyWord(e.target.value)}
                        type="text"
                        placeholder="キーワードを入力"
                        className="border p-2 rounded-md outline-none placeholder:text-sm sm:placeholder:text-base
                        dark:bg-gray-500"
                    />
                    <button
                        onClick={searchWorks}
                        className="py-2 px-4 text-sm sm:text-base text-blue-600 border border-blue-600 bg-blue-50
                        rounded-md hover:bg-blue-100 duration-300 dark:text-gray-200 dark:bg-blue-700 dark:border-blue-200 dark:bg-none
                      dark:hover:bg-blue-600"
                    >
                        検索
                    </button>
                    <button
                        onClick={() => {
                            getAllWorks();
                            setVisibleWork(6);
                        }}
                        className="py-2 px-4 text-sm sm:text-base text-blue-600 border border-blue-600 bg-blue-50
                        rounded-md hover:bg-blue-100 duration-300 dark:text-gray-200 dark:bg-blue-700 dark:border-blue-200 dark:bg-none
                      dark:hover:bg-blue-600"
                    >
                        解除
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeachMenu;
