
import { Dispatch, SetStateAction } from "react";
import { winAppDataType, WinModalType } from "./WinAppTableList";
import { RiDownload2Fill } from "react-icons/ri";

type Props = {
    winAppData: winAppDataType;
    setModalData: Dispatch<SetStateAction<WinModalType | null>>
};

const WinAppTableItem = ({ winAppData, setModalData }: Props) => {
    return (
        <table className="min-w-full border border-gray-300 text-center md:text-left text-xs lg:text-base">
            <thead className="bg-gray-100 dark:bg-gray-500">
                <tr>
                    <th className="border border-gray-300 px-4 py-2">アプリ名</th>
                    <th className="border border-gray-300 px-4 py-2">アプリの説明</th>
                    <th className="border border-gray-300 px-4 py-2">公開先</th>
                </tr>
            </thead>
            <tbody>
                {winAppData.map((data) => (
                    <tr key={data.id}>
                        <td
                            onClick={() => setModalData({ title: data.title, image: data.image })}
                            className="border border-gray-300 px-4 py-2 hover:underline cursor-pointer">{data.title}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.description}</td>
                        <td className="border border-gray-300 px-4 py-2 text-nowrap">
                            <a
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={data.link}
                            >
                                <span className="hidden lg:block">ダウンロード</span>
                                <span className="lg:hidden flex justify-center md:justify-start text-xl"><RiDownload2Fill /></span>
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default WinAppTableItem;